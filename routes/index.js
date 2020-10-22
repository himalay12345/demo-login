const express = require('express');
const router = express.Router();

router.use('/user',require('./user'))
const homeController = require('../controllers/index');


router.get('/', homeController.Home);
router.get('/about', homeController.About);
router.get('/contact', homeController.Contact);
router.get('/dashboard', homeController.Dashboard);
router.get('/course-details', homeController.CourseDetails);
router.get('/courses', homeController.Courses);
router.get('/events', homeController.Events);
router.get('/pricing', homeController.Pricing);
router.get('/trainers', homeController.Trainer);
router.get('/login', homeController.login);
router.get('/sign-up', homeController.signUp);
router.get('/form-application', homeController.formapplication);




module.exports = router;