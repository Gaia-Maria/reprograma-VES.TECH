const mongoose = require("mongoose");

const institutionSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    institution: { type: String, required: true, unique: true },
    site: { type: String, pattern: true, required: true },
    email: { type: String, pattern: true, required: true },
    description: { type: String, required: true, minLength: 0, maxLength: 500 },
  },
  { timestamp: true }
);

const Model = mongoose.model("institution", institutionSchema);

module.exports = Model;
