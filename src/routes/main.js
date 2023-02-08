const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main')

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/tableList', mainController.list);

router.post('/create', mainController.create);
router.post('/access', mainController.access);
router.post('/reserve', mainController.reserve)

module.exports = router;