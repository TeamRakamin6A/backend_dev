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
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
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
