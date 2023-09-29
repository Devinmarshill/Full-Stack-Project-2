const router = require('express').Router();
const Projects  = require('../../models/Project');
// const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
  try {
    const newProject = await Project.create({
      project_name: req.body.project_name,
      description: req.body.description,
      user_id: req.session.user_id,
    });

    res.status(200).json(projectData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id',  async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (projectData) {
      res.status(404).json({ message: 'No project found!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
