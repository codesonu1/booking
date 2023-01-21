const { Schema, model } = require('mongoose')

const appoinmentSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a First Name'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Please add a Last name'],
  },
  gender: {
    type: String,
    required: [true, 'Please add a Address'],
    enum: ['Male', 'Female'],
    default: 'Male',
  },
  phoneNumber: {
    type: String,
    uniqe: true,
    required: [true, 'Please add a Phone Number'],
  },
  email: {
    type: String,
    uniqe: true,
  },
  address: {
    type: String,
    required: [true, 'Please add an Address'],
  },
  bookingOn: {
    type: Date,
    default: Date.now,
    required: [true, 'Enter a valid date'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const BookingModel = model('Booking', appoinmentSchema)
module.exports = BookingModel
