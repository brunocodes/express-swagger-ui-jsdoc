const express = require('express')
const { swaggerUi, openapiSpecification, API_VERSION } = require('./swaggerConfig')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

app.use('/users', require('../routes/user'))
app.use('/auth', require('../routes/auth/auth'))

app.listen( PORT, () => console.log(`* server started API v${API_VERSION} on port ${PORT}`))