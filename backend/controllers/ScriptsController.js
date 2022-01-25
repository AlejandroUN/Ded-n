const { spawn } = require('child_process')

module.exports = {
  async bigFiveP (req, res) {
    console.log('We got to the backend')
    try {
      const pythonScript = spawn('python', ['computeBigFiveFactors.py', req.body.email, req.body.id])
      pythonScript.stderr.on('data', (data) => {
        console.error(`child stderr:\n${data}`)
      })
      // res.send(pythonScript)
      console.log(pythonScript)
      console.log('the Spawn thing was done')
      console.log('the New ON')
      var retrievedData
      pythonScript.stdout.on('data', function (data) {
        console.log('Data from python script')
        retrievedData = data.toString()
      })
      pythonScript.on('close', (code) => {
        console.log('closing child process')
        res.send(retrievedData)
      })
      // res.send('hola')
    } catch (err) {
      console.log('Error pero del try')
      res.status(400).send({
        error: 'We could not'
      })
    }
  }
}
