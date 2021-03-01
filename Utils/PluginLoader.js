const fs = require('fs');
const Logger = require('./Logger.js');

/*
  Author: Hanyaku
  Use: Plugin Loader of the Server
  Version: 1.0.1
  GitHub: https://github.com/GWorks-eu/Sylveon/
*/

module.exports.loadPlugins = async () => {
  if (!fs.existsSync("./Plugins")) {
    fs.mkdirSync("./Plugins");
  }

  fs.readdir("./Plugins/", (err, files) => {
      if (err) console.log(err);

      let jsfile = files.filter(f => f.split(".").pop() === "js");

      if (jsfile.length <= 0) {
          return Logger.info("No Plugins found in the Plugins Folder.");
      }

      jsfile.forEach((file, i) => {
          let plugin = require(`../Plugins/${file}`);
          Logger.info(`Plugin file ${file} loaded.`);
          plugin.onEnable();
      });
  });
}

module.exports.shutdown = async () => {
  fs.readdir("./Plugins/", (err, files) => {
      if (err) console.log(err);

      let jsfile = files.filter(f => f.split(".").pop() === "js");

      if (jsfile.length <= 0) {
          return;
      }

      jsfile.forEach(async (file, i) => {
          let plugin = require(`../Plugins/${file}`);
          await plugin.onShutdown();
      });
  });
}

module.exports.restart = async () => {
  fs.readdir("./Plugins/", (err, files) => {
      if (err) console.log(err);

      let jsfile = files.filter(f => f.split(".").pop() === "js");

      if (jsfile.length <= 0) {
          return;
      }

      jsfile.forEach(async (file, i) => {
          let plugin = require(`../Plugins/${file}`);
          await plugin.onRestart();
      });
  });
}
