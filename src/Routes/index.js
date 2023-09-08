const express = require('express')
const userRoute = require("./user")

const router = express.Router()

// router.use("/users", userRoute)
router.use("/shops", require("./shop"))

module.exports = router

