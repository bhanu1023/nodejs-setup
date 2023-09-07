bookingService = require('../Services/bookingService');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await bookingService.getAll();
        if (bookings.length !== 0) {
            res.status(200).send({
                status: 'success',
                message: 'Booking data successfully retrieved',
                data: bookings
            });
        } else {
            res.status(404).send({
                status: 'failed',
                message: 'Booking data is empty',
                data: []
            });
        }
    } catch (error) {
        res.status(500).send({
            status: 'error',
            message: 'Internal server error',
            data: []
        });
    }
}

exports.createBooking = async (req, res) => {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).send({
            status: 'success',
            message: 'Booking data successfully created',
            data: booking
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 'error',
            message: error.message,
            data: []
        });
    }
}