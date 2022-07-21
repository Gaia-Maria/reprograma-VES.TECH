const InstitutionModel = require("../models/institutionsModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const getAllInstitutions = async (req, res) => {
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
      const allInstitutions = await InstitutionModel.find();
      res.status(200).json(allInstitutions);
    });
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getInstitutionById = async (req, res) => {
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
      const findInstitution = await InstitutionModel.findById(req.params.id);
      res.status(200).json(findInstitution);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createNewInstitution = async (req, res) => {
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
      const allInstitutions = await InstitutionModel.find();
      res.status(200).json(allInstitutions);
    });
    const { institution, site, email, description } = req.body;
    const newInstitution = new InstitutionModel({
      institution,
      site,
      email,
      description,
    });
    const savedInstitution = await newInstitution.save();
    res.status(201).json(savedInstitution);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateInstitutionById = async (req, res) => {
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
      const { institution, site, email, description } = req.body;
      const updateInstitution = await InstitutionModel.findByIdAndUpdate(
        req.params.id,
        {
          institution,
          site,
          email,
          description,
        }
      );
      res.status(200).json(updateInstitution);
    });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteInstitutionById = async (req, res) => {
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
      const deleteInstitution = await InstitutionModel.findByIdAndDelete(id);
      const message = `The institution with id ${deleteInstitution.name} was successfully deleted`;
      res.status(200).json({ message });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllInstitutions,
  getInstitutionById,
  createNewInstitution,
  updateInstitutionById,
  deleteInstitutionById,
};
