const express = require('express'); // Corrected typo
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Body parser for JSON
app.use(morgan('dev')); // HTTP request logger


app.get("/", (req, res) => {
    res.status(200).send({
        message: "server running",
    });
});
// Define a port
const PORT = process.env.PORT || 8080; // Use environment variable or default to 5000
// Start the server
app.listen(PORT, () => {
    console.log('Server running on port ${process.env.NODE_MODE}Node on port ${process.env.PORT}'.bgCyan.white); // Using colors for a nice log
});