const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

class Comment extends Model {}

Comment.init({

    comment_body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    PostId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},{
    sequelize,
});

module.exports = Comment;