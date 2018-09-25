const router = require("express").Router();
const inventoryRoutes = require("./inventories");

// Inventory routes
router.use("/inventories", inventoryRoutes);

module.exports = router;