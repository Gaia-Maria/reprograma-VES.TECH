const controller = require("../controller/coursesController");
const express = require("express");
const router = express.Router();

router.get("/courses", controller.getAllCourses);
router.get("/courses/coursetitle", controller.getCourseByTitle);
router.get("/courses/affirmativepolicies", controller.getByAffirmativePolicies);
router.get("/courses/available", controller.getAllAvailableCourses);
router.get("/courses/category", controller.getCourseByCategory);
router.get("/courses/categoryandaffirmativepolicies",controller.getCourseByCategoryAndAffirmativePolicies);
router.get("/users/courses/:id", controller.getCourseById);
router.post("/institution/course", controller.createCourse);
router.patch("/institution/courses/:id", controller.updateCourseById);
router.delete("/institution/course/:id", controller.deleteCourseById);

module.exports = router;
