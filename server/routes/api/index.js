const router = require("express").Router();
const categoryRoutes = require("./categories");

// Book routes
router.use("/category", categoryRoutes);

module.exports = router;
