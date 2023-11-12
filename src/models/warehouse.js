"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Warehouse.hasMany(models.Order, { foreignKey: "warehouse_id" });
      Warehouse.belongsToMany(models.Item, {
        foreignKey: "warehouse_id",
        through: models.Item_Warehouse,
      });
      Warehouse.hasMany(models.Item_Warehouse, { foreignKey: "warehouse_id" });
      Warehouse.belongsToMany(models.Supplier, {
        foreignKey: "warehouse_id",
        through: models.Supply_Order,
      });
      Warehouse.hasMany(models.Supply_Order, { foreignKey: "warehouse_id" });
    }
  }
  Warehouse.init(
    {
      title: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Warehouse",
    }
  );
  return Warehouse;
};
