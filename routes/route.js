const router = require('express').Router();
const controller = require('../controller/controller');
module.exports = () => {

    router.post('/addMentor', controller.addMentor);
    router.get('/getMentors', controller.getMentors);
    router.delete('/deleteMentor/:id', controller.deleteMentor);
    router.put('/updateMentor', controller.updateMentor);
    router.post('/addTask', controller.addTask);
    router.get('/getTask/:id', controller.getTask);
    return router;

}