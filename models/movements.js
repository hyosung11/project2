const mongoose = require('mongoose')

const movementSchema = new mongoose.Schema ({
  name: { type: String, required: true },
  image: String,
  info: String,
  example: String,
  moreExamples: String
})

const Movement = mongoose.model('Movement', movementSchema)

module.exports = Movement
