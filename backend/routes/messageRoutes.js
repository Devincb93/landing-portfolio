const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


// POST: Save message and send email
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Save to database
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the message.' });
    }
});

router.post('/contact', async(req, res) => {
    const { name, email, message } = req.body;

    try {
        // Use nodemailer to send email
        await sendEmail({ name, email, message });
    
        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Failed to send message. Please try again later.' });
      }
})

module.exports = router;

