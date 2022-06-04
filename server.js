/* This is importing the express, routes, and sequelize modules. */
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

/* This is creating a variable called app that is using the express function. It is also creating a
variable called PORT that is using the process.env.PORT or 3001. */
const app = express();
const PORT = process.env.PORT || 3001;

/* This is middleware that is parsing the request body. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Telling the server to use the routes defined in the routes folder. */
app.use(routes);


/* This is a promise that is waiting for the database to sync before starting the server. */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`)
  });
})