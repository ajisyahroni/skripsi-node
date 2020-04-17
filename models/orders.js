'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ammount: DataTypes.INTEGER
  }, {});
  orders.associate = function (models) {
    orders.belongsTo(models.users, {})
    orders.belongsTo(models.products, {})
  };
  return orders;
};