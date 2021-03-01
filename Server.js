const express = require('./Utils/Express');
const PluginLoader = require('./Utils/PluginLoader.js');

var propertiesReader = require('properties-reader');
var properties = propertiesReader('./server.properties');

const shell = require('shelljs');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Logger = require("./Utils/Logger.js");

/*
  Author: Hanyaku
  Use: Main File of the Server
  Version: 1.0.2
  GitHub: https://github.com/GWorks-eu/Sylveon/
*/

async function stop () {
  Logger.info("Stopping Server.");
  await PluginLoader.shutdown();
  await express.stop();
  process.exit(0);
}

async function checkProperties () {
  if(properties.get("name") == null) {
    Logger.error("Please check the values in the server.properties file.");
    stop();
  }
  if(properties.get("express.port") == null) {
    Logger.error("Please check the values in the server.properties file.");
    stop();
  }
}

async function restart () {
  Logger.info("Restarting the Server. Please wait.");
  await PluginLoader.restart();
  await express.stop();
  shell.exec("./start.sh");
  process.exit(0);
}

async function boot () {
  await console.clear()
  console.log(` _________      .__                            `);
  console.log(`/   _____/__.__.|  |___  __ ____  ____   ____  `);
  console.log(`\\_____  <   |  ||  |\\  \\/ // __ \\/  _ \\ /    \\ `);
  console.log(`/        \\___  ||  |_\\   /\\  ___(  <_> )   |  \\`);
  console.log(`/________/ ____||____/\\_/  \\_____>____/|___|__/`);
  await checkProperties();
  await Logger.info(properties.get("name") + " is loading. Please Wait.");
  await Logger.info("Starting Express Server (to run Sylveon 24/7).");
  await express.start();
  await PluginLoader.loadPlugins();
  await Logger.info("Done!")
  rl.on('line', (input) => {
    if(input == "stop") return stop();
    else if(input == "restart") return restart();
    else {
      console.log("Command not found.");
    }
  });
}


boot();
