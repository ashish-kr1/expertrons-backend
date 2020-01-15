var mongoose = require('mongoose');
var mentor = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    subject: {
        type: String,
        enum: ['Math', 'Physics', 'Chemistry']
    },
    mentorId: {
        type: String,
        required: true
    },
    task: [{
        topic: {
            type: String
        },
        detail: {
            type: String
        }
    }]
}, {
    versionKey: false,
    autoIndex: true,
    timestamps: true
});
module.exports = mongoose.model('mentor', mentor);