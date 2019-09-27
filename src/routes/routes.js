"use strict";

const express = require('express');
const app = express();

// Route Imports
const testRoute = require('./teste-route');

// Routes
app.use("/test", testRoute);

module.exports = app;