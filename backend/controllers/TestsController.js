const { TestMejoramientoPersonal } = require('../models')
const { TestEmpresarial } = require('../models')

module.exports = {
	async saveTestMejoramientoPersonal (req, res) {
	  try {
		const test = await TestMejoramientoPersonal.create(req.body)
		const testJson = test.toJSON()
		res.send({
			test: testJson,		  
		})
	  } catch (err) {
		res.status(400).send({
		  error: 'Problem saving the testMejoramientoPersonal'
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