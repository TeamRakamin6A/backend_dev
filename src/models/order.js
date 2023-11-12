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
      invoice: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
      customer_id: DataTypes.INTEGER,
      warehouse_id: DataTypes.INTEGER,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
