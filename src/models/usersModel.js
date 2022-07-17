const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    genderIdentity: { type: String, required: true },
    ethnicityIdentity: { type: String, required: true },
    sexualOrientation: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    aboutYou: { type: String, default: "Não informado" },
  },
  {
    versionKey: false,
  }
);

const users = mongoose.model("user", usersSchema);

module.exports = users;
