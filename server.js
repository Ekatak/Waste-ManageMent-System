const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB (adjust the connection string if using a remote instance)
mongoose.connect('mongodb://localhost:27017/waste_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(body-parser.json()); // Enable JSON body parsing

// Define the User schema and model
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'Username or email already exists' });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
