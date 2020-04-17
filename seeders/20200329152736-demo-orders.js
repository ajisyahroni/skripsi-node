'use strict';
const faker = require("faker")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    let arrayOfFakerOrders = []
    for (let i = 0; i < 1000; i++) {
      arrayOfFakerOrders.push({
        productId: i + 1,
        userId: i + 1,
        ammount: faker.random.number()
      })

    }
    return queryInterface.bulkInsert('orders', arrayOfFakerOrders);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('orders', null, {});
  }
};
