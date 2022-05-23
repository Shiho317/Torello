const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    todo: {
      type: Array,
      default: [],
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);