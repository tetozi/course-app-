
const APIFeatures = require('../utilis/apiFeauteres');
const AppError = require('./../error/appError');
const catchAsync = require('./../error/catchAsync')
const factory = require('./hnadlerFactory')

const Course = require('./../models/courseModel')




exports.getAllCourse = catchAsync(async (req, res, next) => {

  const features = new APIFeatures(Course.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const course = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  })

});

exports.getCourse = catchAsync(async (req, res) => {

  const course = await Course.findById(req.params.id).populate('reviews')


  if (!course) {
    return next(new AppError("Course not found"), 404)
  }
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  })

});

exports.addUser = catchAsync(async (req, res, next) => {

  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!course) {
    return next(new AppError("Course not found"), 404)
  }
  res.status(200).json({
    status: 'success',
    data: {
      course
    }
  });


})

exports.createCourse = factory.createOne(Course)
exports.updateCourse = factory.updateOne(Course)
exports.deleteCourse = factory.deleteOne(Course)
//exports.deleteCourse = catchAsync(async (req, res, next) => {
//
//  const course = await Course.findByIdAndDelete(req.params.id);
//
//  if (!course) {
//   return next(new AppError("Course not found"), 404)
//  }
//
//  res.status(204).json({
//   status: 'success',
//   data: null
//  });
//
// );