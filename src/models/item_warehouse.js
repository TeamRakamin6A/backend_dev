"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item_Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item_Warehouse.belongsTo(models.Item, { foreignKey: "item_id" });
      Item_Warehouse.belongsTo(models.Warehouse, {
        foreignKey: "warehouse_id",
      });
    }
  }
  Item_Warehouse.init(
    {
      quantity: DataTypes.INTEGER,
      item_id: DataTypes.INTEGER,
      warehouse_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item_Warehouse",
    }
  );
  return Item_Warehouse;
};
