/* Importing the seed files. */
const seedCategories = require('./categorySeeds');
const seedProducts = require('./productSeeds');
const seedTags = require('./tagSeeds');
const seedProductTags = require('./product-tag-seeds');

/* Importing the connection to the database. */
const sequelize = require('../config/connection');

/**
 * It syncs the database, seeds the categories, seeds the products, seeds the tags, and seeds the
 * product tags
 */
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();