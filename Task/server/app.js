// var express = require("express");
// var path = require("path");
// var cors = require("cors");
// var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// var moment = require("moment-timezone");
// const http = require("http");
// const fs = require('fs');

// var app = express();
// app.use(cors());

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Create HTTP server
// const server = http.createServer(app);


// // Sample data file structure
// const formDataFilePath = 'multiple_data.txt';

// // API endpoint to fetch multiple data
// app.get('/api/multipledata', (req, res) => {
//     fs.readFile(formDataFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error reading multiple data');
//             return;
//         }
//         const multipleData = JSON.parse(data);
//         res.json(multipleData);
//     });
// });

// // API endpoint to add data
// app.post('/api/adddata', (req, res) => {
//     const newData = req.body;
//     fs.readFile(formDataFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error reading data file');
//             return;
//         }
//         const existingData = JSON.parse(data);
//         const updatedData = { ...existingData, ...newData };
//         fs.writeFile(formDataFilePath, JSON.stringify(updatedData), (err) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Error writing data to file');
//                 return;
//             }
//             res.status(200).send('Data added successfully');
//         });
//     });
// });


// const port = 5000;
// const ipaddress = "127.0.0.1";
// server.listen(port, ipaddress, () => {
//   console.log(`Server running at http://${ipaddress}:${port}/`);
// });

// module.exports = app;



const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");
const fs = require('fs');

const app = express();
app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Create HTTP server
const server = http.createServer(app);

// Path to JSON file for storing data
const dataFilePath = 'data.json';

// Function to read data from JSON file
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data file:', error);
    return []; // Return an empty array if there's an error reading the file
  }
};

// Function to write data to JSON file
const writeDataToFile = (data) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log('Data saved successfully.');
  } catch (error) {
    console.error('Error writing data to file:', error);
  }
};

// API endpoint to fetch multiple data
app.get('/api/multipledata', (req, res) => {
  const data = readDataFromFile();
  res.json(data);
});

// API endpoint to add data
app.post('/api/adddata', (req, res) => {
  const newData = req.body;
  let existingData = readDataFromFile();
  
  // Ensure existingData is an array
  if (!Array.isArray(existingData)) {
    existingData = [];
  }

  existingData.push(newData); // Append new data to existing array
  writeDataToFile(existingData);
  res.status(200).send('Data added successfully');
});

const port = 5000;
const ipaddress = "127.0.0.1";
server.listen(port, ipaddress, () => {
  console.log(`Server running at http://${ipaddress}:${port}/`);
});

module.exports = app;
