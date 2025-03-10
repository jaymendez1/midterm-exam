const express = require('express'); // Import Express.js
const app = express(); // Initialize Express app
const port = 3000; // Define the port number

// Define a route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
