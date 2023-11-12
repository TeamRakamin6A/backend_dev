"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Warehouse, { foreignKey: "warehouse_id" });
      Order.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Order.belongsToMany(models.Item, {
        foreignKey: "order_id",
        through: models.Order_Item,
      });
      Order.hasMany(models.Order_Item, { foreignKey: "order_id" });
    }
  }
  Order.init(
    {
      invoice: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      customer_id: DataTypes.INTEGER,
      warehouse_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
