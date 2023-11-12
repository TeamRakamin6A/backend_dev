"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item_Category.belongsTo(models.Item, {
        foreignKey: "item_id",
      });
      Item_Category.belongsTo(models.Category, {
        foreignKey: "category_id",
      });
    }
  }
  Item_Category.init(
    {
      item_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item_Category",
    }
  );
  return Item_Category;
};
