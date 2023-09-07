const express = require('express')
const userRoute = require("./user")

const router = express.Router()

router.use("/users", userRoute)
router.use("/trains", require("./train"))
router.use("/bookings", require("./booking"))

module.exports = router

