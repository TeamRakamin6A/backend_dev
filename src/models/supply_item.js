"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supply_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supply_Item.belongsTo(models.Supply_Order, {
        foreignKey: "supply_order_id",
      });
      Supply_Item.belongsTo(models.Item, { foreignKey: "item_id" });
    }
  }
  Supply_Item.init(
    {
      item_id: DataTypes.INTEGER,
      supply_order_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Supply_Item",
    }
  );
  return Supply_Item;
};
