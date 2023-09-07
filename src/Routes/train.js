const express = require('express')
const trainController = require('../Controllers/trainController')

// const validation = require('../middleware/validation')
// const {validate} = require('../middleware/validationMiddleware')

const router = express.Router()

router.get('/:id',trainController.getTrainById)
router.post('/', trainController.createTrain)


module.exports = router