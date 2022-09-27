const express = require('express');
const authentication = require('./middlewares/authentication');
const login = require('./routes/login');
const user = require('./routes/user');
const categories = require('./routes/categories');

// ...

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/user', authentication, user);
app.use('/categories', authentication, categories);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
