/* Importing the Category model from the models folder. */
const { Category } = require("../models");

/* Creating an array of objects that will be used to create rows in the categories table. */
const categoryData = [
  {
    category_name: "Clothing",
  },
  {
    category_name: "Outdoors",
  },
  {
    category_name: "Electronics",
  },
  {
    category_name: "Hardware",
  },
  {
    category_name: "Shoes",
  },
];

/**
 * It takes the categoryData array and creates a new row in the categories table for each object in the
 * array
 */
const seedCategories = () => Category.bulkCreate(categoryData);

/* Exporting the function seedCategories so that it can be used in other files. */
module.exports = seedCategories;
