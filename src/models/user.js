"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../utils/BcryptUtil");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      hooks: {
        beforeUpdate: async (user, option) => {
          const hashedPassword = await hashPassword(user.password);
          user.password = hashedPassword;
        },
        beforeCreate: async (user, option) => {
          const hashedPassword = await hashPassword(user.password);
          user.password = hashedPassword;
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
