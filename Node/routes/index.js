// Home Route
 exports.index = function(req, res){
    //res.send('<h1>Hello</h1> Express');
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ray', 'Morten', 'James']
    });
}

// About Route
exports.about = function(req, res){
     res.render('default', {
        title: 'About Us',
        classname: 'about'
    });
}