const express = require('express')
const userController = require('../Controllers/userController')

const validation = require('../middleware/validation')
const {validate} = require('../middleware/validationMiddleware')

const router = express.Router()

router.get('/:id',userController.getUsers)
router.get('/', userController.getAllUsers)
router.post('/', validate(validation.userSchema), userController.createUser)
router.put('/:id', validate(validation.userSchema),userController.updateUser)


module.exports = router