const router = require('express').Router();
const { log } = require('console');
const {User, Task}  = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/',  async (req, res) => {
  console.log(req.body);
   try {
    const newTask = await Task.create({
      taskname: req.body.taskname,
      description: req.body.description,
      needed_funding: req.body.needed_funding,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id',  async (req, res) => {
  console.log(req.params.id)
  // try {
    const TaskData = await Task.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!TaskData) {
      res.status(404).json({ message: 'No Task found!' });
      return;
    }

    res.status(200).json(TaskData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
