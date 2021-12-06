const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models/index')
const config = require('./config/config')

// Create an express app
const app = express()
// app.use(express.bodyParser());

app.use(morgan('combined'))
// Parse any json request that are sent in
app.use(bodyParser.json())

// Allow any host or client to access
app.use(cors())

require('./routes/routes')(app)

// Connect sequelize to whatever database is set
sequelize.sync()
  // Once sequelize is sync with our database start the server
  .then(() => {
    // App's running on 8081 port
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
