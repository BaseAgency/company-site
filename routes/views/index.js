var keystone = require('keystone');

exports = module.exports = function (req, res) {
    var view = new keystone.View(req, res),
	    locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.query('global', keystone.list('Global').model.find());
	view.query('pages', keystone.list('Pages').model.find());

	// Render the view
	view.render('index');
};
