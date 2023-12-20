const Chat = require("../models/Chat")

class ChatController {
  constructor() {
    this.create = this.create.bind(this)
    this.get = this.get.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
  }

  async create(req, res) {
    const { sender, receiver, message, time } = req.body

    try {
      const chat = new Chat({ sender, receiver, message, time })
      await chat.save()

      res.status(200).json(chat)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async get(req, res) {
    const { id } = req.params

    try {
      const chat = await Chat.get(id)

      res.status(200).json(chat)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { sender, receiver, message, time } = req.body

    try {
      const chat = await Chat.update(id, sender, receiver, message, time)

      res.status(200).json(chat)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      const chat = await Chat.delete(id)

      res.status(200).json(chat)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async getAll(req, res) {
    try {
      const chats = await Chat.find()

      res.status(200).json(chats)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new ChatController()