"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supply_Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supply_Order.belongsTo(models.Supplier, { foreignKey: "supplier_id" });
      Supply_Order.belongsTo(models.Warehouse, { foreignKey: "warehouse_id" });
      Supply_Order.belongsToMany(models.Item, {
        foreignKey: "supply_order_id",
        through: models.Supply_Item,
      });
      Supply_Order.hasMany(models.Supply_Item, {
        foreignKey: "supply_order_id",
      });
    }
  }
  Supply_Order.init(
    {
      invoice: DataTypes.STRING,
      total_price: DataTypes.STRING,
      supplier_id: DataTypes.INTEGER,
      warehouse_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Supply_Order",
    }
  );
  return Supply_Order;
};
