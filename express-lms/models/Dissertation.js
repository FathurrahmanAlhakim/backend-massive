const mongoose = require("mongoose")

const Schema = mongoose.Schema

const DissertationSchema = new Schema({
    npm: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    chapter: {
        type: String,
        required: true
    },
    supervisor: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Dissertation", DissertationSchema)