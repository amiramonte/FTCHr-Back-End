const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

class Post extends Model {}

Post.init({

    post_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    post_location: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },  
},{
    sequelize,
});

module.exports = Post;