const express = require("express")
const SuratController = require("../controllers/SuratController")
const RequireAuth = require("../middleware/RequireAuth")

const surat = express.Router()

surat.post("/surat-masuk", RequireAuth, SuratController.create)

module.exports = surat