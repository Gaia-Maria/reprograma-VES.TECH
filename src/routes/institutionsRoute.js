const controller = require("../controller/institutionsController");
const express = require("express");
const router = express.Router();

router.get("/institutions", controller.getAllInstitutions);
router.get("/institutions/:id", controller.getInstitutionById);
router.post("/institutions", controller.createNewInstitution);
router.patch("/institution/:id", controller.updateInstitutionById);
router.delete("/institution/:id", controller.deleteInstitutionById);

module.exports = router;
