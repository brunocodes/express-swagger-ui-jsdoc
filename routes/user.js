const router = require('express').Router();


/**
 * @openapi
 * /users:
 *   get:
 *     description: Get user
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("", (req, res) => {  
    res.json({
        user: "user"
    })
})

module.exports = router;