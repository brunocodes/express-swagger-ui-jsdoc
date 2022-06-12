const router = require('express').Router()

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @openapi
 * /users:
 *   get:
 *     description: Get user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("", (req, res) => {  
    res.json({
        user: "user"
    })
})

/**
 * @openapi
 * /users:
 *   post:
 *     description: Post a user
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: Returns new user.
 */
router.post("", (req, res) => {  
    res.json({
        user: "user"
    })
})

module.exports = router