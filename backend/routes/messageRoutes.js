const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const sendEmail = require('../Email/Node.js')


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

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      // Save message to the database
      const newMessage = new Message({ name, email, message });
      await newMessage.save();
  
      // Send email using the email service
      await sendEmail({ name, email, message });
  
      res.status(200).json({ message: 'Message saved and email sent successfully!' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to save message or send email. Please try again.' });
    }
  });



module.exports = router;

