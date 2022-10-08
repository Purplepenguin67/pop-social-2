const { Schema, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat")

// Connect Post and Comment by an array and id

const postSchema = new Schema({
    postContent: {
        type: String,
        required: true,
    },
    upvotes: {
        type: Number,
        default: 0,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    comments: [{
        type: String
    }]
});

const Post = model('Post', postSchema);

module.exports = Post;

// GraphQL Query
// query posts{
//     posts {
//         postContent
//           upvotes
//           comments
//           username
//           createdAt
//     }
//   }