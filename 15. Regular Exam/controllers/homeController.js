const { getAllBlogs } = require('../services/blogService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    let blogs = await getAllBlogs();
    res.render('home', {
        title: 'Home Page',
        user: req.user,
        blogs
    });
});

module.exports = homeController;