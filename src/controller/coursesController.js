const CoursesModel = require("../models/coursesModel");
const InstitutionModel = require("../models/institutionsModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllCourses = async (req, res) => {
  try {
    const allCourses = await CoursesModel.find({}, null);
    res.status(200).json(allCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { id } = req.params;
      const findCourse = await CoursesModel.findById(id);
      if (!findCourse.length) {
        return res.status(404).json({ message: "ID not found" });
      }
      res.status(200).json(findCourse);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseByTitle = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { courseTitle } = req.query;
      const findCourse = await CoursesModel.find({ courseTitle: courseTitle });
      console.log(findCourse);
      if (!findCourse.length) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(findCourse);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByAffirmativePolicies = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { affirmativePolicies } = req.query;
      const findAffirmativePolicies = await CoursesModel.find({
        affirmativePolicies: affirmativePolicies,
      });
      if (!findAffirmativePolicies.length) {
        return res.status(404).json({
            message:
              "There are no courses registred for this affirative policies",
          });
      }
      res.status(200).json(findAffirmativePolicies);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllAvailableCourses = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { available } = req.query;
      const findAvailability = await CoursesModel.find({
        available: available,
      });
      if (!findAvailability.length && available == "true") {
        return res.status(404).json({ 
          message: "There are no courses available" 
        });
      }
      if (findAvailability.length < 1 && available == "false") {
        return res.status(404).json({
          message: "There are no courses unavailable" 
        });
      }
      res.status(200).json(findAvailability);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseByCategory = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { category } = req.query;
      const findCategory = await CoursesModel.find({ category: category });

      if (!findCategory.length) {
        return res.status(404).json({
          message: "There are no courses registred for this category",
        });
      }
      res.status(200).json(findCategory);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseByCategoryAndAffirmativePolicies = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { category } = req.query;
      const { affirativePolicies } = req.query;
      const findCategoryAndPolicies = await CoursesModel.find({
        category: category,
        affirativePolicies: affirativePolicies,
      });
      if (!findCategoryAndPolicies.length) {
        return res.status(404).json({
          message: "There are no courses registred for this category",
        });
      }
      res.status(200).json(findCategoryAndPolicies);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const {
        courseTitle,
        affirmativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
        institutionID,
      } = req.body;

      if (!institutionID) {
        return res.status(400).json({ message: "The institution Id is required" });
      }
      const findInstitution = await InstitutionModel.findById(institutionID);
      if (!findInstitution) {
        return res.status(404).json({ message: "Institution not found" });
      }
      const newCourse = new CoursesModel({
        courseTitle,
        affirmativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
        institutionID,
      });
      const savedCourse = await newCourse.save();
      res.status(200).json(savedCourse);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCourseById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { id } = req.params;
      const {
        courseTitle,
        affirmativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
        institutionId,
      } = req.body;
      const findCourse = await CoursesModel.findById(id);
      if (!findCourse.length) {
        return res.status(404).json({ message: "Course not found" });
      }
      if (institutionId) {
        const findInstitution = await InstitutionModel.findById(institutionId);

        if (!findInstitution.length) {
          return res.status(404).json({ message: "Institution not found" });
        }
      }
      findCourse.courseTitle = courseTitle || findCourse.courseTitle;
      findCourse.affirmativePolicies = affirmativePolicies || findCourse.affirmativePolicies;
      findCourse.available = available || findCourse.available;
      findCourse.startDate = startDate || findCourse.startDate;
      findCourse.finishDate = finishDate || findCourse.finishDate;
      findCourse.category = category || findCourse.category;
      findCourse.description = description || findCourse.description;
      findCourse.institutionId = institutionId || findCourse.institutionId;
      const savedCourse = await findCourse.save();
      res.status(200).json(savedCourse);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).send("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const { id } = req.params;
      const findCourse = await CoursesModel.findById(id);
      if (!findCourse.length) {
        return res.status(404).json({ message: `Course with id ${id} not found` });
      }
      await findCourse.remove();
      res.status(200).json({ message: `Course with id ${id} was successfully deleted` });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  getCourseByTitle,
  getByAffirmativePolicies,
  getAllAvailableCourses,
  getCourseByCategory,
  getCourseByCategoryAndAffirmativePolicies,
  createCourse,
  updateCourseById,
  deleteCourseById,
};
