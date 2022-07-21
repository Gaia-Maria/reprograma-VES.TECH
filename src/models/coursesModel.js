const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    courseTitle: { type: String, required: true, unique: true },
    affirmativePolicies: { type: [String], required: true },
    available: { type: Boolean, required: true },
    startDate: { type: String, required: true },
    finishDate: { type: String, required: true },
    category: { type: [String], required: true },
    description: {
      type: String,
      minLength: 0,
      maxLength: 500,
      deafult: "Não informado",
    },
    institutionID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "institution",
    },
  },
  { timestamp: true }
);

const Model = mongoose.model("course", courseSchema);

module.exports = Model;
