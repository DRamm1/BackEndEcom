/* This is importing the Model and DataTypes from the sequelize package. */
const { Model, DataTypes } = require("sequelize");

/* This is importing the connection to the database. */
const sequelize = require("../config/connection");

/* ProductTag is a model that has a name and a slug. */
class ProductTag extends Model {}

/* This is creating a new model called ProductTag. It is also creating a new table called product_tag. */
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

/* Exporting the ProductTag model to be used in other files. */
/* Exporting the ProductTag model to be used in other files. */
module.exports = ProductTag;