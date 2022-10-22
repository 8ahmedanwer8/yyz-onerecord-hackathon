const mongoose = require("mongoose");

const commentModel = mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    date: { type: Date, default: Date.now },
    program: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    meta: {
      indRed: Number,
      qualEd: Number,
      acadEnv: Number,
      funEnv: Number,
      finAid: Number,
      thumbsUpOrDown: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = monogoose.model("Comment", commentModel);
module.exports = Comment;
