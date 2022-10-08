const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentContent: {
        type: String,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    post_id: {
        type: String,
    },
    username: {
        type: String,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
