const Review = require('../models/reviewModel');
const catchAsync = require('../error/catchAsync');
const factory = require('./hnadlerFactory')


exports.getAllReviews = catchAsync(async (req, res, next) => {
    const pageSize = 4
    const page = parseInt(req.query.page || '0')

    let filter = {}
    if (req.params.courseId) filter = { course: req.params.courseId }
    const total = await Review.countDocuments(filter)
    const reviews = await Review.find(filter)
        .limit(pageSize)
        .skip(pageSize * page);


    res.status(200).json({
        status: 'success',
        results: reviews.length,
        totalPages: Math.ceil(total / pageSize),
        data: {
            reviews
        }
    })
})

exports.setCourseUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.course) req.body.course = req.params.courseId
    if (!req.body.user) req.body.user = req.user.id
    next();
  };
  
exports.createReview = factory.createOne(Review);
exports.deleteReview =  factory.deleteOne(Review)