/* This is importing the sequelize library and the connection to the database. */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

/* Product is a model that has a name, description, and price. */
class Product extends Model {}

/* This is creating the Product model and defining the columns and their data types. */
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { isDecimal: true },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: { isNumeric: true },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

/* Exporting the Product model so that it can be used in other files. */
module.exports = Product;