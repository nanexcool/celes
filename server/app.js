// server/app.js

const  exec = require('child_process').exec;

const puts = (error, stdout, stderr) => { console.log(stdout) }

const express = require('express');

const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.get('/api', (req, res) => {
  exec('seth ls', (error, stdout, stderr) => {
    res.send(stdout);
  });
});

module.exports = app;
