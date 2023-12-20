const Dissertation = require('../models/Dissertation')

class DissertationController {
  constructor() {
    this.getAll = this.getAll.bind(this)
    this.getDissertation = this.getDissertation.bind(this)
    this.createDissertation = this.createDissertation.bind(this)
    this.updateDissertation = this.updateDissertation.bind(this)
    this.deleteDissertation = this.deleteDissertation.bind(this)
  }

  async getAll(req, res) {
    try {
      const dissertations = await Dissertation.find()

      res.status(200).json(dissertations)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async getDissertation(req, res) {
    try {
      const dissertation = await Dissertation.findById(req.params.id)

      res.status(200).json(dissertation)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async createDissertation(req, res) {
    const { npm, name, title, chapter, supervisor } = req.body

    try {
      const dissertation = new Dissertation({ npm, name, title, chapter, supervisor })
      await dissertation.save()

      res.status(200).json(dissertation)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async updateDissertation(req, res) {
    const { npm, name, title, chapter, supervisor } = req.body

    try {
      const dissertation = await Dissertation.updateOne(npm, name, title, chapter, supervisor)

      res.status(200).json(dissertation)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async deleteDissertation(req, res) {
    try {
      const dissertation = await Dissertation.deleteOne(req.params.id)

      res.status(200).json(dissertation)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new DissertationController()