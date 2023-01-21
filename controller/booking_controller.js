const Booking = require('../models/booking_model')
const asyncHandler = require('../middleware/asynchandler')
const ErrorResponse = require('../utils/ErrorResponse')
/**
 * @desc    Creates Booking
 * @route   POST /api/v1/Booking
 * @access  Public
 */
exports.createBooking = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    address,
    gender,
    phoneNumber,
    email,
    bookingOn,
  } = req.body
  const booking = await Booking.create({
    firstName,
    middleName,
    lastName,
    address,
    gender,
    phoneNumber,
    email,
    bookingOn,
  })
  res.status(201).json({
    success: true,
    data: booking,
  })
})

/**
 * @desc    Get Bookings
 * @route   GET /api/v1/Booking
 * @access  Private
 */

exports.getBookings = asyncHandler(async (req, res, next) => {
  const data = await Booking.find({})
  res.json({
    success: true,
    data: data,
  })
})

/**
 * @desc    Delete Booking
 * @route   DELETE /api/v1/Booking:id
 * @access  Private
 */

exports.deleteBooking = asyncHandler(async (req, res, next) => {
  let Booking = await Booking.findById(req.params.id)
  if (!Booking) {
    return next(
      new ErrorResponse(`Booking not found of id ${req.params.id}`, 404)
    )
  }

  Booking.remove()
  res.status(201).json({
    success: true,
    data: {},
  })
})

/**
 * @desc    Get Booking
 * @route   GET /api/v1/Booking/:id
 * @access  Private
 */
exports.getBooking = asyncHandler(async (req, res, next) => {
  const Booking = await Booking.findById(req.params.id)
  if (!Booking) {
    return next(
      new ErrorResponse(`Booking not found of id ${req.params.id}`, 404)
    )
  }
  res.status(201).json({
    success: true,
    data: Booking,
  })
})
