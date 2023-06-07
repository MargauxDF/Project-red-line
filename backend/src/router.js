const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/api/wilders", userControllers.browse);
router.get("/api/wilders/:id", userControllers.read);
router.post("/api/wilders", userControllers.add);
router.delete("/api/wilders/:id", userControllers.destroy);

module.exports = router;
