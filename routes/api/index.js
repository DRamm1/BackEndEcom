/* This is telling the router to use the routes in the categoryRoutes, productRoutes, and tagRoutes
files. */
const router = require('express').Router();
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./category-routes');
const tagRoutes = require('./tagRoutes');

/* This is telling the router to use the routes in the categoryRoutes, productRoutes, and tagRoutes
files. */
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);

/* Exporting the router object so that it can be used in other files. */
module.exports = router;