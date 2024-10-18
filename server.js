// server.js
const express = require('express');
const path = require('path'); // Import path module for file path resolution
const app = express();
const PORT = 2000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the HTML file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});