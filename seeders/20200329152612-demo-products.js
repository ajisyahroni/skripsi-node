'use strict';
const faker = require("faker")
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let arrayOfFakeProducts = []
    for (let i = 0; i < 1000; i++) {
      arrayOfFakeProducts.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        stock: faker.random.number(),
        description: faker.random.words()
      })

    }
    return queryInterface.bulkInsert('products', arrayOfFakeProducts)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('products', null, {})
  }
};
