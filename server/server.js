const express    = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '0.0.1',
    },
  },
  apis: ['./routes/*.js'],
}

const openapiSpecification = swaggerJsdoc(options)

const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

app.use('/users', require('../routes/user'))

const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console.log(`* server started on port ${PORT}`))