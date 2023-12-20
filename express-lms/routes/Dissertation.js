const express = require("express")
const DissertationController = require("../controllers/DissertationController")
const RequireAuth = require("../middleware/RequireAuth")

const dissertation = express.Router()

dissertation.route("/dissertations")
  .get(RequireAuth, DissertationController.getAll)
  .post(RequireAuth, DissertationController.createDissertation)

dissertation.route("/dissertations/:id")
  .get(RequireAuth, DissertationController.getDissertation)
  .put(RequireAuth, DissertationController.updateDissertation)
  .delete(RequireAuth, DissertationController.deleteDissertation)

module.exports = dissertation