const { Customers, Task } = require('./models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN "Tasks" ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {
  //   const users = await Customers.findAll({
  //     include: [
  //       {
  //         model: Task,
  //       },
  //     ],
  //   });
  //   console.log('All users with their associated tasks:', JSON.stringify(users, null, 4));
};

const User = Sequelize.define(
  'user',
  {
    username: Sequelize.DataTypes.STRING,
    points: Sequelize.DataTypes.INTEGER,
  },
  { timestamps: false },
);
const Profile = Sequelize.define(
  'profile',
  {
    name: Sequelize.DataTypes.STRING,
  },
  { timestamps: false },
);

User.belongsToMany(Profile, { through: 'User_Profiles' });
Profile.belongsToMany(User, { through: 'User_Profiles' });

const run = async () => {
  await findAllWithTasks();
  await process.exit();
};

run();
