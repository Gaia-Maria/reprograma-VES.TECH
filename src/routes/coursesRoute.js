const controller = require("../controller/coursesController");
const express = require("express");
const router = express.Router();

router.get("/users/courses", controller.getAllCourses);
router.get("/users/courses/:id", controller.getCourseById);
router.get("/users/courses/coursetitle", controller.getByCourseTitle);
router.get("/users/courses/affirmativepolicies",controller.getByAffirativePolicies);
router.get("/users/courses/available", controller.getAllAvailableCourses);
router.get("/users/courses/unavailable", controller.getAllUnavailableCourses);
router.get("/users/courses/category", controller.getCourseByCategory);
router.get("/users/courses/categoryandaffirativepolicies",controller.getCourseByCategoryAndAffirativePolicies);
router.post("/institution/course", controller.createCourse);
router.patch("/institution/course/:id", controller.updateCourseById);
router.delete("/institution/course/:id", controller.deleteCourseById);

module.exports = router;
