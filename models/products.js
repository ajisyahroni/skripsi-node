'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  products.associate = function (models) {
    products.hasMany(models.orders, { foreignKey: 'productId' })
  };
  return products;
};