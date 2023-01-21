const { Router } = require('express')
const Booking = require('../models/booking_model')

const {
  createBooking,
  getBookings,
  deleteBooking,
  getBooking,
} = require('../controller/booking_controller')

const router = Router()
router.route('/').get(getBookings).post(createBooking)
router.route('/:id').delete(deleteBooking).get(getBooking)

module.exports = router
