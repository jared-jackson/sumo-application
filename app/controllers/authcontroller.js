var path = require("path");
var exports = module.exports = {};

exports.signin = function(req,res){
    var normalized_path = path.normalize(__dirname + '../../views/signin.html');
    res.sendFile(normalized_path);
};

exports.admin = function(req,res){
    var normalized_path = path.normalize(__dirname + '../../views/admin.html');
    res.sendFile(normalized_path);
};

exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });
};