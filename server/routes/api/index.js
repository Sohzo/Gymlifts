const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const liftsRoutes = require('./lifts-routes.js');

router.use('/categories', categoryRoutes);
router.use('/lifts', liftsRoutes);

module.exports = router;
