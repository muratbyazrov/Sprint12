const usersRouter = require('express').Router();
const users = require('../data/users.json');

usersRouter.get('/', (req, res) => {
  res.send(users);
});


const doesUserExist = ('/:id', (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  if (!(users.some((item) => item._id === req.params.id))) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
});

const sendUser = (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  res.send(user);
};

usersRouter.get('/:id', doesUserExist);
usersRouter.get('/:id', sendUser);

module.exports = usersRouter;
