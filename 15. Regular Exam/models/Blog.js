const { Schema, model, Types } = require('mongoose');


const URL_PATTERN = /https?:\/\/./i;

const blogSchema = new Schema({
    title: {
        type: String,
        minlength: [5, 'Title must be at least 5 characters'],
        maxlength: [50, 'Title must be no longer than 50 characters']
    },
    imageUrl: {
        type: String,
        validate: {
            validator: (value) => URL_PATTERN.test(value),
            message: 'Invalid URL'
        }
    },
    content: { type: String, minlength: [10, 'Content must be at least 10 characters'], },
    blogCategory: { type: String, minlength: [10, 'Content must be at least 10 characters'], },
    followList: { type: [Types.ObjectId], ref: 'User', default: [] },
    owner: { type: Types.ObjectId, ref: 'User' }
})

blogSchema.index({ title: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const Blog = model('Blog', blogSchema);

module.exports = Blog;
