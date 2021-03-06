require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');
const cors = require('cors');
const router = require('./routes');

const auth = require('./middlewares/auth');
const centralizedErrors = require('./middlewares/centralizedErrors');
const { isValidUrl } = require('./utils/methods');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { createUser, login } = require('./controllers/users');

const { PORT } = process.env;

const app = express();

mongoose.connect('mongodb+srv://admin:admin123@cluster0.cn2lj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const options = {
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    'http://mest.michelle.nomoredomains.club',
    'https://mest.michelle.nomoredomains.club',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

app.use('*', cors(options)); // ПЕРВЫМ!

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger); // подключаем логгер запросов

app.post(
  '/signup',
  celebrate({
    // валидируем body
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom(isValidUrl),
      email: Joi.string().required().email(),
      password: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,}$')),
    }),
  }),
  createUser,
);
app.post(
  '/signin',
  celebrate({
    // валидируем body
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string()
        .required()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,}$')),
    }),
  }),
  login,
);
app.get('/logout', (req, res, next) => {
  res
    .cookie('jwt', '', {
      maxAge: -1,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    })
    .send({ message: 'Выход совершен успешно' });
  next();
});

// авторизация
app.use(auth);

app.use(router); // запускаем роутер

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors()); // обработчик ошибок celebrate
app.use(centralizedErrors); // централизованная обработка ошибок

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
