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
      },
      {
        product_name: 'Television',
        department_name: 'Electronics',
        price: 149.99,
        stock_quantity: 10
      },
      {
        product_name: 'King Size Bed',
        department_name: 'Furniture',
        price: 299.99,
        stock_quantity: 8
      },
      {
        product_name: 'Coffee',
        department_name: 'Food',
        price: 14.99,
        stock_quantity: 50
      },
      {
        product_name: 'Shoes',
        department_name: 'Clothing',
        price: 19.99,
        stock_quantity: 20
      },
      {
        product_name: 'Star Wars: The Last Jedi',
        department_name: 'Movies',
        price: 19.99,
        stock_quantity: 50
      },
      {
        product_name: 'Vacuum Cleaner',
        department_name: 'Appliances',
        price: 69.99,
        stock_quantity: 10
      },
      {
        product_name: 'Cereal',
        department_name: 'Food',
        price: 9.99,
        stock_quantity: 45
      },
      {
        product_name: 'Refridgerator',
        department_name: 'Appliances',
        price: 599.99,
        stock_quantity: 7
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Products', null, {});

  }
};
