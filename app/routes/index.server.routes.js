
module.exports = function (app) {
    const index = require('../controllers/index.server.controller');
    const contact = require('../controllers/contact.server.controller');
    const about = require('../controllers/about.server.controller');
    app.get('/about', about.render);
    app.get('/contact', contact.render);
    app.get('/projects', index.renderProducts);
    app.get('/services', index.renderServices);
    app.get('/', index.renderIndex);
};
