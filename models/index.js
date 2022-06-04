/* Importing the models from the models folder. */
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const Category = require("./Category");

/* This is saying that a Product belongs to a Category. */
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

/* This is saying that a Product can belong to many Tags through the ProductTag table. */
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

/* This is saying that a Tag can belong to many Products through the ProductTag table. */
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

/* This is saying that a Category can have many Products. */
Category.hasMany(Product, {
  foreignKey: "category_id",
});

/* Exporting the models to be used in other files. */
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
