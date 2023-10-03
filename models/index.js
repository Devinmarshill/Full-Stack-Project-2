const User = require('./User');
// const Project = require('./Project');
const Task = require('./Task');

User.hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Task};
