const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);

// Как можно ещё реализовать обработку подобных ошибок? то есть,
// есть ли стандартный отлавливатель ошибок?)
app.get('/:request/:a?', (req, res) => {
  if (req.params.request !== 'users' || req.params.request !== 'cards') {
    res.send({ message: 'Запрашиваемый ресурс не найден' });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
