const router = require("express").Router();
const inventoryRoutes = require("./inventories");

// Inventory routes
router.use("/inventory", inventoryRoutes);

module.exports = router;