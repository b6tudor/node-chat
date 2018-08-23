const controller = require('./controller');

module.exports = (app) => {
    //setup paths here
    // ex( app.get('/xxx', controller.yyy))
    app.get('/', controller.greetings);
}