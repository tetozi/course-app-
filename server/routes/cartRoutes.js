const express =  require('express');
const courseController = require("./../controllers/courseControllers");
const authController = require('./../controllers/authController')
const cartController = require('./../controllers/cartControllers')

const router = express.Router();

router.route('/')
.get(cartController.allCarts)

router.route('/:id')
.get(courseController.getCourse)
.post(authController.protect, cartController.createCart)


module.exports = router 