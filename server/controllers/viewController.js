const catchAsync = require("../error/catchAsync");
const Course = require("../models/courseModel");




exports.getHomePage = catchAsync(async (req, res) => {
    const course = await Course.find().lean();

    res.status(200).render("home", {
      course,
    });
  })


  exports.getLogin = (req, res) => {
      res.status(200).render('login')
  }

  exports.getRegister = (req, res) => {
      res.status(200).render('register')
  }

  exports.getCreate = (req,res) => {
      res.status(200).render('create')
  }