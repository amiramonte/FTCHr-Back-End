const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/configuration");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.user_password);
  }
}

User.init(
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      unique: {
        args: true,
        msg: "Username already in use",
      },
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: "Email already exists",
      },
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: 8,
      },
    },
    user_photo: {
      type: DataTypes.STRING,
    },
    user_location: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.user_password = await bcrypt.hash(
          newUserData.user_password,
          3
        );
        return newUserData;
      },
    },
  }
);

module.exports = User;
