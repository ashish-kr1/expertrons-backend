const mongoose = require('mongoose');
const config = require('./database');
module.exports = (mongo) => {

    try{
        mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true ,useFindAndModify: false});
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('connected', () => {
        console.log('connected to database mongodb 27017');
    });
    mongoose.connection.on('error', (err) => {
        if (err) {
            console.log('error in database' + err);
        }
    });
    mongoose.Promise = global.Promise;
    }catch(err){
        console.log(err)
    }


};