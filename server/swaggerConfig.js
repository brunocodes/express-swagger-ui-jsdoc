const swaggerUi    = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const API_VERSION  = process.env.API_VERSION || '0.0.1'
const API_HOST     = 'localhost:5000'
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