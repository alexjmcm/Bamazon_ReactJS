'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      {
        product_name: 'iPhone',
        department_name: 'Electronics',
        price: 800,
        stock_quantity: 25
      },
      {
        product_name: 'Microwave',
        department_name: 'Appliances',
        price: 100,
        stock_quantity: 200
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});

  }
};
