const nodemailer = require('nodemailer')

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 2525,
    auth: {
      user: 'tsonukumar300@gmail.com',
      pass: 'dopbjrqjikcccjog',
    },
  })
  const message = {
    from: options.from ? options.from : `XIEC <tsonukumar300@gmail.com>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html,
  }

  const info = await transporter.sendMail(message)
}
module.exports = sendEmail
