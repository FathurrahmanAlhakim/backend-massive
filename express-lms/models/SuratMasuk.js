const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SuratMasukSchema = new Schema({
  noSurat: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true
  },
  penerima: {
    type: String,
    required: true,
  },
  perihal: {
    type: String,
    required: true,
  },
  lampiran: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model("SuratMasuk", SuratMasukSchema)