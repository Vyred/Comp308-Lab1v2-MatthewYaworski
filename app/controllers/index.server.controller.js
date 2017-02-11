
exports.renderProducts = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

 res.render('content/projects', {
        title: 'Projects',
        userFullName: req.user ? req.user.username : ''
    });
};

exports.renderServices = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    res.render('content/services', {
        title: 'Services',
        userFullName: req.user ? req.user.username : ''
    });
};

exports.renderIndex = function (req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    res.render('content/index', {
        title: 'Homepage',
        userFullName: req.user ? req.user.username : ''
    });
};










