const mongoose = require("mongoose");

const programModel = mongoose.Schema(
  {
    name: { type: String },
    uni: { type: mongoose.Schema.Types.ObjectId, ref: "Uni" },
    description: {
      type: String,
      trim: true,
      default: "No description available",
    },
    url: { type: String, trim: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    meta: {
      indRed: Number,
      qualEd: Number,
      acadEnv: Number,
      funEnv: Number,
      finAid: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Program = monogoose.model("Program", programModel);
module.exports = Program;
