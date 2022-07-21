const controller = require("../controller/institutionsController");
const express = require("express");
const router = express.Router();

router.get("/institution", controller.getAllInstitutions);
router.post("/institutions", controller.createNewInstitution);
router.get("/institutions/:id", controller.getInstitutionById);
router.patch("/institution/update/:id", controller.updateInstitutionById);
router.delete("/settings/:id", controller.deleteInstitutionById);

module.exports = router;
