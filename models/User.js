const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/configuration");

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init({

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
    user_phonenumber: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        newUserData.password = await bcrypt.hash(newUserData.password, 3);
        return newUserData;
      },
    },
  }
);

module.exports = User;