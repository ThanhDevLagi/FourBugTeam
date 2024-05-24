const express = require('express');
const { homePage } = require('../controller/homeController');
const {historyPage} = require('../controller/historyController');
let router = express.Router();

// router =============================================================================<
router.get('/', homePage)
router.get("/history", historyPage)

module.exports = router;