/* This is requiring the express router and the apiRoutes file. */
const router = require("express").Router();
const apiRoutes = require("./api");

/* This is telling the router to use the apiRoutes file for any routes that start with `/api`. */
router.use("/api", apiRoutes);

/* This is a catch-all route that will be used if the user tries to access a route that doesn't exist. */
router.use((req, res) => {
  res.send("<h1>Incorrect route!</h1>");
});

/* Exporting the router to be used in the server.js file. */
module.exports = router;
