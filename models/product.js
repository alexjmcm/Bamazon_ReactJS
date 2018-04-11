'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {

    product_name: {
      type: DataTypes.STRING
    },

    department_name: {
      type: DataTypes.STRING
    },

    price: {
      type: DataTypes.DECIMAL
    },

    stock_quantity: {
      type: DataTypes.INTEGER
    },

    createdAt: {
      type: DataTypes.DATE
    },

    updatedAt: {
      type: DataTypes.DATE
    }
  }, {

    timestamps: true
    
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};