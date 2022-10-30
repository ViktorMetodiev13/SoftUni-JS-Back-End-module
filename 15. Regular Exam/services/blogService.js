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

module.exports = {
    getAllBlogs,
    createBlog,
    getById
}