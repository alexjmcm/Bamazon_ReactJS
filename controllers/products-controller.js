const _ = require('lodash');
const db = require('../models');
require('console.table');

module.exports = {

  findOne(req, res) {

    const id = req.params.id;

    const obj = {
      where: { id }
    }

    console.log(`\n---Searching for product via ID: ${id}---\n`);

    db.Product
      .findOne(obj)
      .then(dbProduct => {

        console.log(`\n---Product found!---\n`);
        console.table(dbProduct.dataValues);

        res.json(dbProduct);
      })
      .catch(err => {
        console.log(`Transaction find one error: ${err}`);
      });
  },

  findAll: (req, res) => {

    console.log(`\n---Searching for all products---\n`);

    db.Product
      .findAll({})
      .then(dbProduct => {

        console.log(`\n---Found all products!---\n`);

        res.json(dbProduct);
      })
      .catch(err => {
        console.log(`Transaction find all error: ${err}`);
      });
  },

  update: (req, res) => {

    console.log(`\n---Updating Products---\n`);

    if(!_.isEmpty(req.body)) {

      req.body.map(product => {
        
        const id = product.id;
        const quantity = product.stock_quantity;
        
        const updateObj = {
          stock_quantity: quantity
        }
  
        const whereObj = {
          where: { id }
        }
    
        db.Product
          .update(updateObj, whereObj)
          .then(dbProduct => {    
            console.log('Product Updates');
          })
          .catch(err => {
            console.log(err);
          })
      });

      res.json({
        message: 'Products Table Updated',
        status: 200
      });

    } else {

      res.json({
        message: 'Empty Array',
        status: 204
      })
    }    
  }
}