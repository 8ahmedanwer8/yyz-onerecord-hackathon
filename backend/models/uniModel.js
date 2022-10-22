const mongoose = require("mongoose");

const uniModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    programs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Uni = monogoose.model("Uni", uniModel);
module.exports = Uni;
