const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/configuration");

class Pet extends Model {}

Pet.init(
  {
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pet_personality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pet_breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_photo: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Pet;
