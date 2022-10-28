const { createCourse } = require('../services/courseService');
const { parseError } = require('../util/parser');

const courseController = require('express').Router();


courseController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Page'
    });
});

courseController.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.body._id
    }

    try {
        await createCourse(course);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('create', {
            title: 'Create Page',
            errors,
            body: course
        });
    }
})

module.exports = courseController;