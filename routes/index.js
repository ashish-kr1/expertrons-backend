
module.exports = (app) => {
    app.use('/', require('./route')());
    app.get('/', (req, res) => res.status(200).json({ status: "OK" }));
};