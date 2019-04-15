//controllers allow us to seperate handler logic from
//route handler logic
//exporting this method as our handler
exports.index=function(req, res, next) {
    res.render('index', { title: 'Express' });
};