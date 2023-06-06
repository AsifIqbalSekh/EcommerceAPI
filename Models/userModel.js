const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Field Must be Required"],
  },
  email: {
    type: String,
    required: [true, "Email Field Must Be Required"],
    unique: [true, "Email Field Must Be Unique"],
  },
  passwordHash: {
    type: String,
    required: [true, "Password Field Must Be Require"],
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  optionalAddress: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Address",
  },
});

user_schema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.passwordHash;
  return obj;
};

const user_tbl = mongoose.model("User", user_schema);

module.exports = { user_tbl };
