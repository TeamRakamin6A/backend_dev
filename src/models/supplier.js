"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supplier.belongsToMany(models.Warehouse, {
        foreignKey: "supplier_id",
        through: models.Supply_Order,
      });
      Supplier.hasMany(models.Supply_Order, { foreignKey: "supplier_id" });
    }
  }
  Supplier.init(
    {
      company_name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      zip_code: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Supplier",
    }
  );
  return Supplier;
};
