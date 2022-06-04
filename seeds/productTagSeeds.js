const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 3,
  },
  {
    product_id: 1,
    tag_id: 4,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 2,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

/**
 * It takes the data in the productTagData array and creates a new row in the ProductTag table for each
 * item in the array
 */
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

/* Exporting the function seedProductTags so that it can be used in other files. */
module.exports = seedProductTags;
