//controllers allow us to seperate handler logic from
//route handler logic
//exporting this method as our handler
exports.get_landing=function(req, res, next) {
    res.render('landing', { title: 'Express' });
};