"use strict";

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
const server = http.createServer(app);
const port = 3000;

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use("/server", routes);

server.listen(port, () => {
  console.log("Server Listening on port: " + port);
})