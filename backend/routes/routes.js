const AuthenticationController = require('../controllers/AuthenticationController')
const TestsController = require('../controllers/TestsController')
// const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')

// The purpose of this file is to do somehting when
// a page aka endpoint is loaded

module.exports = (app) => {
  // Post Request
  // when the /register page aka endpoint is loaded the res.send() is activated
  // res stands for response
  // This defines how we handle this request to this endpoint
  app.post('/register',
    // Antes de crear el usuario debe de cumplir con las políticas
    // Hay que configurar el policies aún equisde
    // AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/bigFive', 
    TestsController.guardarBigFive)

  app.post('/TestEmpresarial',
  	TestsController.saveTestEmpresarial)
}
