const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

class Conversations extends Model {}

Conversations.init(
    {
        // will contain conversation and member ids
        senderId: {
            type: DataTypes.STRING,
        }, 
        recieverId: {
            type: DataTypes.STRING
        }
    },
    {
    sequelize,
    }
);

module.exports = Conversations;