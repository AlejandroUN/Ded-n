const { BancoDeRespuestasBF } = require('../models')
const { TestEmpresarial } = require('../models')

module.exports = {
	async guardarBigFive (req, res) {
	  try {
		const test = await BancoDeRespuestasBF.create(req.body)
		const testJson = test.toJSON()
		res.send({
			test: testJson,		  
		})
	  } catch (err) {
		res.status(400).send({
		  error: 'Problem saving the Big Five test'
		})
	  }
	},async saveTestEmpresarial (req, res) {		
		try {
			const test = await TestEmpresarial.create(req.body)
			const testJson = test.toJSON()
			res.send({
				test: testJson,		  
			})
		  } catch (err) {
			res.status(400).send({
			  error: 'Problem saving the testEmpresarial'
			})
		}
	  }
	}