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
router.get("/api/wilders/:id", userControllers.readWithProjects);
router.post("/api/wilders", userControllers.add);
router.delete("/api/wilders/:id", userControllers.destroy);
router.put("/api/wilders/:id", userControllers.edit);

// route edit
// route get userWithProjects

const projectControllers = require("./controllers/projectControllers");

router.get("/api/projects", projectControllers.browse);
router.get("/api/projects/:id", projectControllers.read);
router.post("/api/projects", projectControllers.add);
router.delete("/api/projects/:id", projectControllers.destroy);
router.put("/api/projects/:id", projectControllers.edit);

module.exports = router;
