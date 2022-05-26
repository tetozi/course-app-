const express =  require('express');
const reviewController = require('../controllers/reviewControllers')
const authController =require('./../controllers/authController')

const router = express.Router({ mergeParams: true });

router.route('/')
.get(reviewController.getAllReviews)
.post(authController.protect,
    reviewController.setCourseUserIds,
    reviewController.createReview)

module.exports = router 