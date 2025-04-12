
const nodemailer =require("nodemailer")
require("dotenv").config()



const transporter = nodemailer.createTransport(
    {
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.MAIL_PASS
        }
    }
)

module.exports = transporter