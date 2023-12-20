const SuratMasuk = require("../models/SuratMasuk")

class SuratController {
  async create(req, res) {
    const { noSurat, tanggal, penerima, perihal, lampiran } = req.body

    try {
      const suratMasuk = new SuratMasuk({ noSurat, tanggal, penerima, perihal, lampiran })
      await suratMasuk.save()

      res.status(200).json(suratMasuk)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new SuratController()