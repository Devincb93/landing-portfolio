const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Correct SMTP server for Gmail
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.PERSONAL_PW,
  },
});

// Function to send email
async function sendEmail({ name, email, message }) {
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender's address
      to: process.env.PERSONAL_EMAIL, // Your personal email
      subject: `New Message from ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message}</p>`,
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = sendEmail;