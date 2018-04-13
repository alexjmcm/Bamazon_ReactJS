const router = require('express').Router();
const productsController = require('../../controllers/products-controller');

router
  .route('/find/:id')
  .get(productsController.findOne);

router
  .route('/all')
  .get(productsController.findAll);

router
  .route('/update')
  .put(productsController.update);

module.exports = router;