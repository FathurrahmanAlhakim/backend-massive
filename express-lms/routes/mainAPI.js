const express = require("express")
const user = require("./User")
const event = require("./Event")
const dissertation = require("./Dissertation")
const chat = require("./Chat")
const surat = require("./Surat")

const API = express.Router()

API.use(user)
API.use(event)
API.use(dissertation)
API.use(chat)
API.use(surat)

module.exports = API