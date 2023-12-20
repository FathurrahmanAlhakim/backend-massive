const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const user = require("./routes/User")
require("dotenv").config()

const server = express()

const { PORT, MONG_URI } = process.env

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

server.use("/api", user)

mongoose.connect(MONG_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on http://127.0.0.1:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })