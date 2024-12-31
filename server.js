// Import required modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Initialize Express app
const app = express();

// Middleware for JSON and URL-encoded data with increased payload limit
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

// MySQL database connection setup
const connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net", // Replace with your database host
  user: "sql12754840", // Replace with your database username
  password: "v3CStLahMf", // Replace with your database password
  database: "sql12754840", // Replace with your database name
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Handle GET request to serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API endpoint to handle survey submissions
app.post("/submit-survey", (req, res) => {
  const {
    firstname,
    lastname,
    email,
    phonenumber,
    owncar,
    carbrand,
    kmPerMonth,
    travelFrequent,
    preferredTransportation,
    feedbackrating,
    fileUpload,
    additionalfeedback,
  } = req.body;

  // Validate required fields
  if (!firstname || !lastname || !email || !phonenumber) {
    return res.status(400).send({ error: "Missing required fields." });
  }

  // Serialize JSON fields
  const preferredTransportationJSON = JSON.stringify(preferredTransportation || []);
  const feedbackRatingJSON = JSON.stringify(feedbackrating || {});
  const fileUploadJSON = JSON.stringify(fileUpload || []);

  // MySQL query to insert data
  const query = `
    INSERT INTO survey2 (
      firstname, lastname, email, phonenumber, owncar, carbrand, kmPerMonth,
      travelFrequent, preferredTransportation, feedbackrating, fileUpload, additionalfeedback
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    firstname,
    lastname,
    email,
    phonenumber,
    owncar,
    carbrand,
    kmPerMonth,
    travelFrequent,
    preferredTransportationJSON,
    feedbackRatingJSON,
    fileUploadJSON,
    additionalfeedback,
  ];

  // Execute the query
  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into database:", err);
      return res.status(500).send({ error: "Database error." });
    }
    res.status(200).send({ message: "Survey submitted successfully.", results });
  });
});

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable for flexibility
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
