const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user');

router.get('/logout', userController.destroySession);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), userController.createSession);
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), userController.createSession);
router.post('/send-message', userController.sendMessage);
module.exports = router;