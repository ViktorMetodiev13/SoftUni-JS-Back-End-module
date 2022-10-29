const { createCourse, getById, deleteCourse } = require('../services/courseService');
const { parseError } = require('../util/parser');

const courseController = require('express').Router();


courseController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Page'
    });
});

courseController.get('/:id', async (req, res) => {
    const course = await getById(req.params.id);

    course.isOwner = course.owner.toString() == req.user._id.toString();

    res.render('details', {
        title: course.title,
        course
    })
})

courseController.get('/:id/delete', async (req, res) => {
    const course = await getById(req.params.id);
    
    if (course.owner.toString() != req.user._id.toString()) {
        return res.redirect('/auth/login');
    }

    await deleteCourse(req.params.id);
    res.redirect('/');
})

courseController.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id
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