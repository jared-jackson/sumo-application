module.exports = function (sequelize, Sequelize) {

    var questionanswer = sequelize.define('questionanswer', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        question: {type: Sequelize.TEXT},
        answer: {type: Sequelize.TEXT, allowNull: false}
    });

    questionanswer.sync().then(function() {

    }, function(err) {
        console.log("There was an issue with syncing DB User definition: " +  err) //TODO Log Better
    });

    return questionanswer;

};

