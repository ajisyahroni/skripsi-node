'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  users.associate = function (models) {
    users.hasMany(models.orders, { foreignKey: 'userId' })
  };
  return users;
};