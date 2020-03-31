const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'olek130a@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcom to the app, ${name}. Let me know how you get along withe the app.`
    })
}

const sendDeleteAccEmail = (email,name) => {
    sgMail.send({
        to:email,
        from:'olek130a@gmail.com',
        subject:"I'm sad that you left :(",
        text:`Co Ty sobie myślisz ${name}, masz Ty rozum i godność człowieka?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteAccEmail
}