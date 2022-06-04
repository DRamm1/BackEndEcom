/* This is importing the router from express and the models from the models folder. */
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

/* This is a get request to the /api/tags route. It is using the findAll method to find all the tags in
the database. It is also using the include method to include the associated product data. */
router.get("/", (req, res) => {
  Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a get request to the /api/tags route. It is using the findOne method to find one tag in
the database. It is also using the include method to include the associated product data. */
router.get("/:id", (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    attributes: ["id", "tag_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a post request to the /api/tags route. It is using the create method to create a new tag in
the database. It is also using the include method to include the associated product data. */
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a put request to the /api/tags route. It is using the update method to update a tag in
the database. It is also using the include method to include the associated product data. */
router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id!" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is a delete request to the /api/tags route. It is using the destroy method to delete a tag in
the database. It is also using the include method to include the associated product data. */
router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: { id: req.params.id },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag found with this id!" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* This is exporting the router to be used in other files. */
module.exports = router;
