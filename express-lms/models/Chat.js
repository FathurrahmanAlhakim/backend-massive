const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ChatSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model("chat", ChatSchema)