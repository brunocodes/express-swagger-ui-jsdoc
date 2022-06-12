const router = require('express').Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User login
 */

/**
 * @openapi
 * /auth:
 *   get:
 *     description: Get auth temp
 *     tags: [Auth] 
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('', (req, res) => {  
    res.json({
        auth: 'auth'
    })
})

module.exports = router