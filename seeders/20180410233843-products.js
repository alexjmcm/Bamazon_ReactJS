'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      {
        product_name: 'iPhone',
        department_name: 'Electronics',
        price: 999.99,
        stock_quantity: 5
      },
      {
        product_name: 'Microwave',
        department_name: 'Appliances',
        price: 59.99,
        stock_quantity: 15
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});

  }
};
