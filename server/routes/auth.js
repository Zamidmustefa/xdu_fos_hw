// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; // Use a secure key in production

// Register Route
router.post('/register', async (req, res) => {
    const { email, name, password, address, phone } = req.body;

    // Validate required fields
    if (!email || !name || !password || !address || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = {
            id: users.length + 1,
            email,
            name,
            password: hashedPassword,
            address,
            phone,
        };

        // Add the user to the in-memory users array
        users.push(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    try {
        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, email: user.email });
    } catch (error) {
        res.status(500).json({ error: 'Login error' });
    }
});

// Protected Profile Route
router.get('/profile', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token missing' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = users.find(user => user.id === decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.json({ message: `Welcome, ${user.name}!` });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

module.exports = router;
