const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true
    },
    person: {
      type: String,
      required: true
    },
    due: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);