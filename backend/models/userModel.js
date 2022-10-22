const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, //google doesnt require it but normal auth does but we can enforce this in the UI instead
    // bio: { type: String, required: true, default: "New User" },
    // pic: {
    //   type: String,
    //   required: true,
    //   default:
    //     "http  s://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    // },

    // meta: {
    //   indRed: Number,
    //   qualEd: Number,
    //   acadEnv: Number,
    //   funEnv: Number,
    //   finAid: Number,
    // },
  },
  {
    timestamps: true,
  }
);
userModel.methods.matchPassword = async function (enteredPassword) {
  if (this.password) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
};
userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});
const User = mongoose.model("User", userModel);
module.exports = User;
