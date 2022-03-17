const catchAsync = require("./../error/catchAsync");
const Cart = require("../models/cartModel")
const Course = require('../models/courseModel')
const User = require('../models/userModel')


exports.createCart = catchAsync(async (req, res, next) => {

  if (!req.body.course) req.body.course = req.params.courseId
  const user = req.user.id
  const course = await Course.findById(req.params.id)

  const cart = await Cart.create({ user, course })

  res.status(200).json({
    status: 'success',
    data: {
      cart
    }
  });


})


exports.allCarts = catchAsync(async (req, res, next) => {
  const cart = await Cart.find();

  res.status(200).json({
    status: 'success',
    data: {
      cart
    }
  })

})