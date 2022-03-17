const express = require("express");
const viewController = require('../controllers/viewController')
const authController = require("./../controllers/authController")


const router = express.Router();

authController
router.get('/', viewController.getHomePage)
router.get('/login', viewController.getLogin)
router.get('/register', viewController.getRegister)
router.get('/create', viewController.getCreate)
module.exports = router

