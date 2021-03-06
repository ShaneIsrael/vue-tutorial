const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// force: true to drop/reset tables on start
sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081)
    console.log(`Server started on port ${config.port}`)
  })
