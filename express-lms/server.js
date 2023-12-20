const express = require("express")
const mongoose = require("mongoose")
const http = require("http")
const io = require("socket.io")
const cors = require("cors")
const API = require("./routes/mainAPI")
require("dotenv").config()

const server = express()

// Desctructing process.env
const { PORT, MONG_URI } = process.env

// Middleware
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// Routes
server.use("/api", API)

mongoose.connect(MONG_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on http://127.0.0.1:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })