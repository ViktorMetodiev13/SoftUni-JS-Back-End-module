const Blog = require("../models/Blog");


async function getAllBlogs() {
    return await Blog.find({}).lean();
}

async function createBlog(blog) {
    return Blog.create(blog);
}

async function getById(id) {
    return Blog.findById(id).lean();
}

async function deleteBlog(id) {
    return Blog.findByIdAndDelete(id);
}

async function updateById(id, data) {
    const existing = await Blog.findById(id);

    existing.title = data.title;
    existing.imageUrl = data.imageUrl;
    existing.content = data.content;
    existing.blogCategory = data.blogCategory;
    
    return existing.save();
}

module.exports = {
    getAllBlogs,
    createBlog,
    getById,
    deleteBlog,
    updateById
}