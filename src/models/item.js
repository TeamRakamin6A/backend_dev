"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Category, {
        through: models.Item_Category,
        foreignKey: "item_id",
      });
      Item.hasMany(models.Item_Category, { foreignKey: "item_id" });
      Item.belongsToMany(models.Supply_Order, {
        through: models.Supply_Item,
        foreignKey: "item_id",
      });
      Item.hasMany(models.Supply_Item, { foreignKey: "item_id" });
      Item.belongsToMany(models.Warehouse, {
        through: models.Item_Warehouse,
        foreignKey: "item_id",
      });
      Item.hasMany(models.Item_Warehouse, { foreignKey: "item_id" });
      Item.belongsToMany(models.Order, {
        through: models.Order_Item,
        foreignKey: "item_id",
      });
      Item.hasMany(models.Order_Item, { foreignKey: "item_id" });
    }
  }
  Item.init(
    {
      sku: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      image_url: DataTypes.STRING,
      keywords: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
