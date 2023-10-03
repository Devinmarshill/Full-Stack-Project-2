const router = require('express').Router();
const apiRoutes = require('./api')
// const userRoutes = require('./api/userRoutes');
// const projectRoutes = require('./api/projectRoutes');
const homeRoutes = require('./homeRoutes');



router.use('/api', apiRoutes);
// router.use('/projects', projectRoutes);
router.use('/', homeRoutes);

module.exports = router;