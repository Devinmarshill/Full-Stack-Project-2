const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const projectRoutes = require('./api/projectRoutes');
const homeRoutes = require('./homeRoutes');



router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/', homeRoutes);

module.exports = router;