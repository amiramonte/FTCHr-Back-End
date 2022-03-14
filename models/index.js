// Importing Models
const User = require("./User");
const Pet = require("./Pet");
const Post = require("./Post");
const Comment = require("./Comment");
const Conversation = require("./Conversation");
const Message = require("./Message");

// Table Associations
User.hasMany(Pet);

Pet.belongsTo(User);

User.hasMany(Post);

Post.belongsTo(User);

Post.hasMany(Comment);

Comment.belongsTo(Post);

User.hasMany(Comment);

Comment.belongsTo(User);

// Exporting Models
module.exports = {
  User,
  Pet,
  Post,
  Comment,
  Conversation,
  Message,
};
