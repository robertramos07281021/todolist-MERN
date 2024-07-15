const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoReactSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  done: {
    type:Boolean,
    default: false
  }
})

module.exports = mongoose.model('Reacttodo',TodoReactSchema)