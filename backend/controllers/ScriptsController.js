const { spawn } = require('child_process')

module.exports = {
  async bigFiveP (req, res) {
    console.log('We got to the backend')
    try {
      const pythonScript = spawn('python', ['test.py'])
      console.log('the Spawn thing was done')
      pythonScript.stdout.on('data', function (data) {
        console.log('Everything was done')
        alert('Guardado')
        alert(data.toString())
      })
      res.send('hola')
    } catch (err) {
      alert('Error')
      res.status(400).send({
        error: 'We could not'
      })
    }
  }
}
