const swaggerUi    = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const { PORT }     = require('./server')
const API_VERSION  = process.env.API_VERSION || '0.0.1'
const API_HOST     = `localhost:${PORT}`

const swaggerOptins = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Express API',
        version: API_VERSION,
      },
      host: API_HOST,
    },
    apis: ['./routes/*.js', './routes/**/*.js'],
}

const openapiSpecification = swaggerJsdoc(swaggerOptins)

module.exports = {
  swaggerOptins,
  swaggerUi,
  swaggerJsdoc,
  openapiSpecification,
  API_VERSION
}