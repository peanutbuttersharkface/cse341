const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.brigRoute);
routes.get('/derek', lesson1Controller.derekRoute);
routes.get('/quay', lesson1Controller.quayRoute);

module.exports = routes;