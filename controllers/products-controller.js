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
  }
}