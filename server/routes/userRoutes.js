const express = require('express');



const authController = require('../controllers/authController')
const userController = require('../controllers/userController')



const router = express.Router();


router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch('/updateUser',
    authController.protect,
    userController.uploadUserPhoto,
    userController.updateMe)
router.get(authController.protect, userController.getOneUser)

module.exports = router;