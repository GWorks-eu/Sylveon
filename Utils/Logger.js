/*
  Author: Hanyaku
  Use: Required for the Console
  Version: 1.0.0
  GitHub: https://github.com/GWorks-eu/Sylveon/
*/

function info (text) {
  console.log("[INFO]" + text);
}
function warn (text) {
  console.log("[WARNING]" + text);
}
function error (text) {
  console.log("[ERROR]" + text);
}

module.exports.info = async (text) => info(text);

module.exports.warn = async (text) => warn(text);

module.exports.error = async (text) => error(text);
