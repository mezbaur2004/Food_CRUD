const express = require('express');
const FoodController = require('../controller/FoodController');
const router = express.Router();

router.post('/Create', FoodController.Create);
router.get('/Read', FoodController.Read);
router.put('/Update/:id', FoodController.Update);
router.delete('/Delete/:id', FoodController.Delete);


module.exports = router;