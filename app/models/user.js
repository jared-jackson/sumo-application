var bCrypt = require('bcrypt-nodejs');
module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        username: {type: Sequelize.TEXT},
        password: {type: Sequelize.STRING, allowNull: false}
    });

    User.sync({force:true}).then(function() {
        return User.create({
            id: 1,
            username:'sumoadmin',
            password: generateHash('sumo-password')
        });
    }, function(err) {
        console.log("There was an issue with syncing DB User definition: " +  err) //TODO Log Better
    });

    return User;

};

function generateHash (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
}