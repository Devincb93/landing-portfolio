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

module.exports = router;

