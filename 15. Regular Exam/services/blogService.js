const Blog = require("../models/Blog");


async function getAllBlogs() {
    return await Blog.find({}).lean();
}

async function createBlog(blog) {
    return Blog.create(blog);
}

module.exports = {
    getAllBlogs,
    createBlog
}