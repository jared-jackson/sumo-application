var path = require("path");
var exports = module.exports = {};
var models = require("../models");


exports.submit = function(req,res){
    var QuestionAnswer = models.questionanswer;
    var question = req.body.question;
    var answer = req.body.answer;

    QuestionAnswer.sync().then(function() {
        return QuestionAnswer.create({
            question: question,
            answer: answer.toString()
        });
    }, function(err) {
        console.log("There was an issue with adding the question to the DB: " +  err) //TODO Log Better
    });



};

exports.logout = function(req,res){
    req.session.destroy(function(err) {
        res.redirect('/');
    });
};