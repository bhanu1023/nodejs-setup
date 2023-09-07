const express = require('express');
const bookingController = require('../Controllers/BookingController');
const router = express.Router();

router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBooking);

module.exports = router;