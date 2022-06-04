/* Loading the .env file. */
require('dotenv').config();

/* This is importing the Sequelize package. */
const Sequelize = require('sequelize');

/* This is a ternary operator. If the process.env.JAWSDB_URL is true, then it will use the JAWSDB_URL.
If it is false, then it will use the localhost. */
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

/* Exporting the sequelize object so that it can be used in other files. */
module.exports = sequelize;
