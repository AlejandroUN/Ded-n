const { User } = require('../models')
const { BancoDeRespuestasBF } = require('../models')
const { TestEmpresarial } = require('../models')

module.exports = {
  async BigFive (req, res) {
    try {
      const test = await BancoDeRespuestasBF.create(req.body)
      const testJson = test.toJSON()
      res.send({
        test: testJson
      })
    } catch (err) {
      res.status(400).send({
        error: 'Problem saving the Big Five test'
      })
    }
  },
  async getMatches (req, res) {
    try {
      const users = await User.findAll({ limit: 6 })
      res.send(users)
    } catch (err) {
      res.status(500).send({
        error: 'Hubo un error en la petición xd'
      })
    }
  },
  async saveTestEmpresarial (req, res) {
    try {
      const test = await TestEmpresarial.create(req.body)
      const testJson = test.toJSON()
      res.send({
        test: testJson
      })
    } catch (err) {
      res.status(400).send({
        error: 'Problem saving the testEmpresarial'
      })
    }
  }
}
