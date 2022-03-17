
const AppError = require("./../error/appError");
const catchAsync = require('./../error/catchAsync')

const User = require("../models/userModel");


exports.getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return next(new AppError("Please Log In", 401))
  }
   
   res.status(200).json({
     status: "success",
     data: {
       user
     }
   });
})