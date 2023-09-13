const express= require('express');

const professionalRoutes= require('../controllers/professional');

const router = express.Router();

router.get('/', professionalController.getData);

module.exports = router;