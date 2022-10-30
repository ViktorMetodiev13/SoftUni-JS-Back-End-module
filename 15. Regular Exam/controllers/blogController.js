const { createBlog, getAllBlogs, getById, deleteBlog, updateById, followUser } = require('../services/blogService');
const { parseError } = require('../util/parser');

const blogController = require('express').Router();


blogController.get('/create', (req, res) => {
    res.render('create', {
        title: "Create Page"
    });
});

blogController.get('/blogs', async (req, res) => {
    let blogs = await getAllBlogs();

    res.render('blogs', {
        title: "Catalog Page",
        blogs
    });
});

blogController.get('/:id', async (req, res) => {
    const blog = await getById(req.params.id);

    blog.isOwner = blog.owner.toString() == req.user._id.toString();
    blog.followed = blog.followList.map(u => u.toString()).includes(req.user._id.toString());

    res.render('details', {
        title: blog.title,
        blog,
    });
});

blogController.get('/:id/delete', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login')
    };

    await deleteBlog(req.params.id);
    res.redirect('/blog/blogs');
})

blogController.post('/create', async (req, res) => {
    const blog = {
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        content: req.body.content,
        blogCategory: req.body.blogCategory,
        owner: req.user._id
    }

    try {
        await createBlog(blog);
        res.redirect('/blog/blogs');
    } catch (error) {
        const errors = parseError(error);
        res.render('create', {
            title: 'Create Page',
            errors,
            body: blog
        });
    }
});

blogController.get('/:id/edit', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login')
    };

    res.render('edit', {
        title: 'Edit Blog',
        blog
    })
})

blogController.post('/:id/edit', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login')
    };

    try {
        await updateById(req.params.id, req.body);

        res.redirect(`/blog/${req.params.id}`);
    } catch (error) {
        res.render('edit', {
            title: 'Edit Blog',
            errors: parseError(error),
            blog: req.body
        })
    }
})

blogController.get('/:id/follow', async (req, res) => {
    const blog = await getById(req.params.id);

    if (blog.owner.toString() != req.user._id.toString()
        || blog.followList.map(u => u.toString().includes(req.user._id.toString)) == false) {
        await followUser(req.params.id, req.user._id);
    }

    res.redirect(`/blog/${req.params.id}`);
})

module.exports = blogController;