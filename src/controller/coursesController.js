const CoursesModel = require("../models/coursesModel");
const InstitutionModel = require("../models/institutionsModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllCourses = async (req, res) => {
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
      const allCourses = await CoursesModel.find().populate("institution");
      res.status(200).json(allCourses);
    });
  } catch {
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
      const findCourse = await CoursesModel.findById(id)
      if (findCourse == null) {
        res.status(404).json({ message: "Id not found" });
      }
      res.status(200).json(findCourse);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByCourseTitle = async (req, res) => {
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
      const { courseTitle } = req.query
      const findCourse = await CoursesModel.find({ courseTitle: courseTitle}, null, {sort: "date"})

      if (findCourse == null) {
        res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(findCourse);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByAffirativePolicies = async (req, res) => {
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
      const { affirativePolicies } = req.query
      const findAffirativePolicies = await CoursesModel.find({ affirativePolicies: affirativePolicies}, null, {sort: "date"})

      if (findAffirativePolicies == null) {
        res.status(404).json({ message: "There are no courses registred for this affirative policies",  message: affirativePolicies});
      }
      res.status(200).json(findAffirativePolicies);
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
      const findAvailability = await CoursesModel.find({available: true}, null, {sort: "date"})
      res.status(200).json(findAvailability);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUnavailableCourses = async (req, res) => {
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
      const findUnavailability = await CoursesModel.find({available: false}, null, {sort: "date"})
      res.status(200).json(findUnavailability);
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
      const { category } = req.query
      const findCategory = await CoursesModel.find({ category: category}, null, {sort: "date"})

      if (findCategory == null) {
        res.status(404).json({ message: "There are no courses registred for this category" });
      }
      res.status(200).json(findCategory);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseByCategoryAndAffirativePolicies = async (req, res) => {
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
      const { category } = req.query
      const { affirativePolicies } = req.query
      const findCategory = await CoursesModel.find({ category: category, affirativePolicies: affirativePolicies }, null, {sort: "date"})

      if (findCategory == null) {
        res.status(404).json({ message: "There are no courses registred for this category" });
      }
      res.status(200).json(findCategory);
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
        affirativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
      } = req.body;

      if (!institutionId) {
        return res
          .status(400)
          .json({ message: "The institution Id is required" });
      }
      const findInstitution = await InstitutionModel.findById(institutionId);
      if (!findInstitution) {
        return res.status(404).json({ message: "Institution not found" });
      }
      const newCourse = new CoursesModel({
        institution: institutionId,
        courseTitle,
        affirativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
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
        institutionId,
        courseTitle,
        affirativePolicies,
        available,
        startDate,
        finishDate,
        category,
        description,
      } = req.body;
      const findCourse = await CoursesModel.findById(id);
      if (findCourse == null) {
        res.status(404).json({ message: "Course not found" });
      }
      if (institutionId) {
        const findInstitution = await InstitutionModel.findById(institutionId);

        if (findInstitution == null) {
          return res.status(404).json({ message: "Institution not found" });
        }
      }
      findCourse.courseTitle = courseTitle || findCourse.courseTitle;
      findCourse.affirativePolicies = affirativePolicies || findCourse.affirativePolicies;
      findCourse.available = available || findCourse.available;
      findCourse.startDate = startDate || findCourse.startDate;
      findCourse.finishDate = finishDate || findCourse.finishDate;
      findCourse.category = category || findCourse.category;
      findCourse.description = description || findCourse.description;
      findCourse.institution = institutionId || findCourse.institution;
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
      if (findCourse == null) {
        return res
          .status(404)
          .json({ message: `Course with id ${id} not found` });
      }
      await findCourse.remove();
      res
        .status(200)
        .json({ message: `Course with id ${id} was successfully deleted` });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  getByCourseTitle,
  getByAffirativePolicies,
  getAllAvailableCourses,
  getAllUnavailableCourses,
  getCourseByCategory,
  getCourseByCategoryAndAffirativePolicies,
  createCourse,
  updateCourseById,
  deleteCourseById
};
