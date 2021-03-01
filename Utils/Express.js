const express = require('express');
const app = new express();

const Logger = require("../Utils/Logger.js");

let server;

var propertiesReader = require('properties-reader');
var properties = propertiesReader('./server.properties');

/*
  Author: Hanyaku
  Use: Required to run the Server 24/7
  Version: 1.0.3
  GitHub: https://github.com/GWorks-eu/Sylveon/
*/

module.exports.start = async () => {
  app.get("/", (req, res) => {
    res.send("OK");

  });

  server = app.listen(properties.get('express.port'));

  Logger.info("Express Server is running.");
}

module.exports.stop = async () => {
  server.close();

  Logger.info("Express Server is shutting down.")
}
