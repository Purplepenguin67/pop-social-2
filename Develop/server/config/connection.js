const mongoose = require('mongoose');

// Update below code to work with MongoDB Atlas

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialpop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;
