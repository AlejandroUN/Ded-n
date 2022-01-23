const { BancoDeRespuestasBF } = require('../models')
const { TestEmpresarial } = require('../models')

module.exports = {
	async BigFive (req, res) {
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
	},
	
	async BigFive2 (req, res) {
		try {
			const {email} = "Predeterminado"	
			const test = req.body
			const testJson = test.toJSON()
			const user = await BancoDeRespuestasBF.findOne({
				where: {
				  email: email
				}
			})			
			if (!user) {
				return res.status(403).send({
				  error: 'Usuario no encontrado'
				})
			}
			else{
				res.send({
					user: testJson,
				})
			}		  
		} catch (err) {
		  res.status(400).send({
			error: 'Problem saving the Big Five test 2'
		  })
		}
	},
	
	// async login (req, res) {
	// 	try {
	// 	  const { email, password } = req.body
	// 	  const user = await User.findOne({
	// 		where: {
	// 		  email: email
	// 		}
	// 	  })
	
	// 	  if (!user) {
	// 		return res.status(403).send({
	// 		  error: 'Usuario no encontrado'
	// 		})
	// 	  }
	
	// 	  const isPasswordValid = password === user.password
	// 	  if (!isPasswordValid) {
	// 		return res.status(403).send({
	// 		  error: 'Contraseña incorrecta'
	// 		})
	// 	  }
	
	// 	  const userJson = user.toJSON()
	// 	  res.send({
	// 		user: userJson,
	// 		token: jwtSignUser(userJson)
	// 	  })
	// 	} catch (err) {
	// 	  res.status(500).send({
	// 		error: 'Error al iniciar sesión'
	// 	  })
	// 	}
	//   },

	async saveTestEmpresarial (req, res) {		
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