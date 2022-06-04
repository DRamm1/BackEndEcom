/* The Category model has a name and a description */
/* This is importing the Model and DataTypes from the sequelize package. */
const { Model, DataTypes } = require('sequelize');

/* This is importing the connection to the database. */
const sequelize = require('../config/connection.js');

/* Category is a model that has a name and a description. */
class Category extends Model {}

/* This is creating the Category model. */
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

/* Exporting the Category model to be used in other files. */
module.exports = Category;