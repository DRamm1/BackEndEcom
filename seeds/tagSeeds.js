const { Tag } = require('../models');

/* Creating an array of objects that will be used to seed the database. */
const tagData = [
  {
    tag_name: 'green',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'maroon',
  },
  {
    tag_name: 'gray',
  },
  {
    tag_name: 'multi-color',
  },
];

/**
 * It takes the tagData array and creates a new row in the database for each object in the array
 */
const seedTags = () => Tag.bulkCreate(tagData);

/* Exporting the function seedTags so that it can be used in other files. */
module.exports = seedTags;