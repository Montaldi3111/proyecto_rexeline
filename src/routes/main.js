const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main')
const isLogged = require('../middlewares/isLogged');
const inSession = require('../middlewares/session')

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', [inSession] ,mainController.register);
router.get('/tableList', [isLogged] ,mainController.list);

router.post('/create', mainController.create);
router.post('/access', mainController.access);
router.post('/reserve', [isLogged] ,mainController.reserve)

module.exports = router;