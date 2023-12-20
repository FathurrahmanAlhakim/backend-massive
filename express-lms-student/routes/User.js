const express = require("express")
const UserController = require("../controllers/UserController")
const RequireAuth = require("../middleware/RequireAuth")

const user = express.Router()

user.post("/user/login", UserController.login)
user.post("/user/signup", UserController.signup)
user.route("/user").get(RequireAuth, UserController.getAll)
user.route("/user/:id").get(RequireAuth, UserController.getById)

module.exports = user