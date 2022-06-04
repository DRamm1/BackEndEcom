/* This is destructuring the `Model` and `DataTypes` properties from the `sequelize` module. */
const { Model, DataTypes } = require('sequelize');

/* This is importing the connection to the database from the config/connection.js file. */
const sequelize = require('../config/connection.js');

/* > The `Tag` class extends the `Model` class and is used to represent a tag */
class Tag extends Model {}

/* This is creating a new table in the database called "tags" with two columns: id and tag_name. */
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

/* Exporting the Tag model so that it can be used in other files. */
module.exports = Tag;
