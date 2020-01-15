const Mentor = require('../models/mentor');

module.exports = {
    addMentor: async (req, res) => {
        try {
            const mentor = new Mentor(req.body);
            await mentor.save();
            res.status(200).json({ success: true, mentor: mentor })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    getMentors: async (req, res) => {
        try {
            const mentors = await Mentor.find({}).lean();
            res.status(200).json({ success: true, mentors: mentors })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    updateMentor: async (req, res) => {
        try {
            await Mentor.findByIdAndUpdate({ _id: req.body._id }, {
                $set: {
                    'name': req.body.name,
                    'email': req.body.email,
                    'contact': req.body.contact,
                    'subject': req.body.subject
                }
            });
            res.status(200).json({ success: true })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    deleteMentor: async (req, res) => {
        try {
            const mentors = await Mentor.findByIdAndRemove({ _id: req.params.id }).lean();
            res.status(200).json({ success: true })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    addTask: async (req, res) => {
        try {
            const mentors = await Mentor.findByIdAndUpdate({ _id: req.body.id }, {
                $push: {
                    task: req.body.task
                }
            });
            res.status(200).json({ success: true, mentors: mentors })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
    getTask: async (req, res) => {
        try {
            const mentor = await Mentor.findById({ _id: req.params.id }).lean();
            res.status(200).json({ success: true, task: mentor.task })
        } catch{
            res.status(400).json({ success: false, message: 'Something wrong' });
        }
    },
}