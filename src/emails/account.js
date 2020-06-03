const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'd.damilaremay@gmail.com',
    subject: 'Thank you for joining!',
    text: `Welcome to the Task Manager App ${name}. Let me know how you get aong with the app`
  })
}


const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'd.damilaremay@gmail.com',
    subject: 'Sorry we couldnt make you stay :(',
    text: `To help us improve our service, ${name}, we are just curious, why do you want to leave us?`
  })
}


module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

// sgMail.send(msg).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })