const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const booking = require('./route/booking_route')
mongoose.set('strictQuery', false)

mongoose
  .connect('mongodb://127.0.0.1:27017/book', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log(`Mongoose Connected at: ${conn.connection.host}`)
  })

app.use('/api/v1/book', booking)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running in development mode on port ${PORT}`)
})
process.on('unhandledRejection', (err, _) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})
