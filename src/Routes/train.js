const express = require('express')
const trainController = require('../Controllers/trainController')

// const validation = require('../middleware/validation')
// const {validate} = require('../middleware/validationMiddleware')

const {authenticate} = require('../middleware/Authmiddelware')

const router = express.Router()

router.get('/:id', authenticate, trainController.getTrainById)
router.post('/', authenticate, trainController.createTrain)


module.exports = router