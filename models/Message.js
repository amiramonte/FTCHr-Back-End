const { Model } = require('sequelize');
const sequelize = require('../config/configuration');

class Message extends Model {}

Message.init({

},{
    sequelize,
});

module.exports = Message;