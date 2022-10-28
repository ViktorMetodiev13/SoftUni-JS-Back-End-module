const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /^https?:\/\/.$/i;

const courseSchema = new Schema({
    title: { type: String, required: true, minlength: [4, 'Course title must be at least 4 characters'] },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Course description must be at least 20 characters'],
        maxlength: [50, 'Course description must be at most 50 characters']
    },
    imageUrl: {
        type: String, required: true, validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    duration: { type: String, required: true },
    createdAt: { type: String, required: true },
    users: { type: [Types.ObjectId], ref: 'User', default: [] }
})

courseSchema.index({ title: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Course = model('Course', courseSchema);

module.exports = Course;