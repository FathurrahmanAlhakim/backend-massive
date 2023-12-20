const express = require("express")
const ChatController = require("../controllers/ChatController")
const RequireAuth = require("../middleware/RequireAuth")

const chat = express.Router()

chat.route("/chats")
  .get(RequireAuth, ChatController.getAll)
  .post(RequireAuth, ChatController.create)

chat.route("/chats/:id")
  .get(RequireAuth, ChatController.get)
  .put(RequireAuth, ChatController.update)
  .delete(RequireAuth, ChatController.delete)

module.exports = chat