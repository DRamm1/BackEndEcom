/* This is importing the router from express and the models from the models folder. */
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

/* This is a get request to the api/products route. It is using the findAll method to find all products
in the database. It is also using the include method to include the category and tag data associated
with the product. */
router.get("/", (req, res) => {
  Product.findAll({
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a get request to the api/products/:id route. It is using the findOne method to find one
product
in the database. It is also using the include method to include the category and tag data associated
with the product. */
router.get("/:id", (req, res) => {
  Product.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        attributes: ["id", "tag_name"],
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a post request to the api/products route. It is using the create method to create a new
product in the database. It is also using the include method to include the category and tag data
associated
with the product. */
router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }

      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

/* This is a put request to the api/products/:id route. It is using the update method to update
a product in the database. It is also using the include method to include the category and tag data
associated
with the product. */
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      /* This is a put request to the api/products/:id route. It is using the update method to update
      a product in the database. It is also using the include method to include the category and tag data
      associated
      with the product. */
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

/* This is a delete request to the api/products/:id route. It is using the destroy method to delete
a product in the database. It is also using the include method to include the category and tag data
associated
with the product. */
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: { id: req.params.id },
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: "No product found with this id!" });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is exporting the router to be used in other files. */
module.exports = router;