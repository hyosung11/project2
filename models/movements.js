const mongoose = require('mongoose')

const movementSchema = new mongoose.Schema ({
  name: { type: String, required: true },
  image: String,
  Info: String,
  example: String
})

const Movement = mongoose.model('Movement', movementSchema)

module.exports = Movement
