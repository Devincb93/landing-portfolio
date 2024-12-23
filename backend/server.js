const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.use('/api/messages', require('./routes/messageRoutes.js'));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));