const express = require('express')
const router = express.Router();
const mainApiController = require('../../controllers/api/main')

router.get('/reservations', mainApiController.reservations);
router.get('/tables', mainApiController.tables)

module.exports = router;