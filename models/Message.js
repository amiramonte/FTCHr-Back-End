const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configuration');

class Messages extends Model {}

Messages.init(
    {
        conversationId: {
            type: DataTypes.STRING

        },
        sender: {
            type: DataTypes.STRING
        }, 
        text: {
            type: DataTypes.STRING
        }
    },
    {
    sequelize,
    }
);

module.exports = Messages;