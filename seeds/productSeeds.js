/* Importing the Product model from the models folder. */
const { Product } = require('../models');

/* Creating an array of objects that will be used to create rows in the Product table. */
const productData = [
  {
    product_name: 'Colorful T-Shirt',
    price: 12.99,
    stock: 12,
    category_id: 1,
  },
  {
    product_name: 'Hat',
    price: 26.0,
    stock: 21,
    category_id: 2,
  },
  {
    product_name: 'Keyboard',
    price: 95.99,
    stock: 15,
    category_id: 3,
  },
  {
    product_name: 'ToolBox Set',
    price: 23.99,
    stock: 21,
    category_id: 4,
  },
  {
    product_name: 'Waterproof shoes',
    price: 85.99,
    stock: 22,
    category_id: 5,
  },
];

/**
 * It takes the data from the productData array and creates a new row in the Product table for each
 * item in the array
 */
const seedProducts = () => Product.bulkCreate(productData);

/* Exporting the function seedProducts so that it can be used in other files. */
module.exports = seedProducts;
