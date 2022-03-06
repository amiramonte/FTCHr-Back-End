const { Model } = require('sequelize');
const sequelize = require('../config/configuration');

class Conversation extends Model {}

Conversation.init({

},{
    sequelize,
});

module.exports = Conversation;