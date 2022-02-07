const { User } = require('../models')
const { BancoDeRespuestasBF } = require('../models')
const { TestEmpresarial } = require('../models')
const { Asociaciones } = require('../models')

module.exports = {

	async BigFive(req, res) {
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

	async getMatches(req, res) {
		try {
			console.log("A \n Y \n U \n D \n A")
			console.log(req.params.email)
			console.log("\n A \n Y \n U \n D \n A")
			
			//Datos de la tabla asociaciones de cada match
			const asociaciones = await Asociaciones.findAll({
				attributes: ['afinidadApertura', 'afinidadEscrupulosidad', 'afinidadExtroversion', 'afinidadAmabilidad', 'afinidadNeuroticismo', 'idSegundoAsociado'],
				where: { idPrimerAsociado: req.params.email },				
				limit:6				
			})
			asociacionesString=JSON.stringify(asociaciones)
			myAsociaciones=JSON.parse(asociacionesString)			
			console.log("Primera asociacion: ", myAsociaciones[0])

			//Primer usuario
			const user0 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[0].idSegundoAsociado }
			})
			user0String=JSON.stringify(user0)
			myuser0=JSON.parse(user0String)
			//console.log("Match de la asociacion: ",myuser0[0])

			//Segundo usuario
			const user1 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[1].idSegundoAsociado }
			})
			user1String=JSON.stringify(user1)
			myuser1=JSON.parse(user1String)
			//console.log("Match de la asociacion: ",myuser1[0])
			
			//Tercer usuario
			const user2 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[2].idSegundoAsociado }
			})
			user2String=JSON.stringify(user2)
			myuser2=JSON.parse(user2String)
			//console.log("Match de la asociacion: ",myuser2[0])

			//Cuarto usuario
			const user3 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[3].idSegundoAsociado }
			})
			user3String=JSON.stringify(user3)
			myuser3=JSON.parse(user3String)
			//console.log("Match de la asociacion: ",myuser3[0])

			//Quinto usuario
			const user4 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[4].idSegundoAsociado }
			})
			user4String=JSON.stringify(user4)
			myuser4=JSON.parse(user4String)
			//console.log("Match de la asociacion: ",myuser4[0])

			//Sexto usuario
			const user5 = await User.findAll({
				attributes: ['email', 'name', 'gender', 'orientation'],
				where: { id: myAsociaciones[5].idSegundoAsociado }
			})
			user5String=JSON.stringify(user5)
			myuser5=JSON.parse(user5String)
			//console.log("Match de la asociacion: ",myuser5[0])			

			const match0 = {
				...myAsociaciones[0],
				...myuser0[0]
			}
			const match1 = {
				...myAsociaciones[1],
				...myuser1[0]
			}
			const match2 = {
				...myAsociaciones[2],
				...myuser2[0]
			}
			const match3 = {
				...myAsociaciones[3],
				...myuser3[0]
			}
			const match4 = {
				...myAsociaciones[4],
				...myuser4[0]
			}
			const match5 = {
				...myAsociaciones[5],
				...myuser5[0]
			}
			
			matchesArray = [match0,match1,match2,match3,match4,match5]			

			console.log("Lista de matches: ",matchesArray)			

			res.send(matchesArray)
		} catch (err) {
			res.status(500).send({
				error: 'Hubo un error en la petición xd'
			})
		}
	},

	async getRightMatches(req, res) {
		try {
			/*const asociaciones = await Asociaciones.findAll(
				where: {idPrimerAsociado:'1'},
				include:[{
					model:User,
					where:["id = idSegundoAsociado"]

				}],				
				limit: 6 })*/
			const asociaciones = await Asociaciones.findAll({ limit: 2 })

			res.send(asociaciones)
		} catch (err) {
			res.status(500).send({
				error: 'Hubo un error en la petición xd'
			})
		}
	},

	async saveTestEmpresarial(req, res) {
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
