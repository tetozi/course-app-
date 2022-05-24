const express = require("express");
const courseController = require("./../controllers/courseControllers");
const reviewRouter =  require('../routes/reviewRoutes');
const authController =require('./../controllers/authController')

const router = express.Router();
 



 router.use('/:courseId/reviews', reviewRouter);

router
  .route("/")
  .get(courseController.getAllCourse)
  .post(authController.protect, courseController.createCourse);

router
  .route("/:id")
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse)
  .patch(courseController.addUser)

module.exports = router;
