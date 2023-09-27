const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const projectRoutes = require('./api/projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;