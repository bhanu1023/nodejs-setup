const express = require('express')

const router = express.Router()
const shopController = require('../Controllers/shopController')


const validation = require('../middleware/validation')
const {validate} = require('../middleware/validationMiddleware')


// router.get('/', shopController.getShops)
router.get('/', validate(validation.shopSearchSchema), shopController.getShops)


module.exports = router