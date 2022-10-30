const { createBlog, getAllBlogs } = require('../services/blogService');
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
})

module.exports = blogController;