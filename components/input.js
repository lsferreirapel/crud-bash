const { terminal } = require("terminal-kit");

async function input(label, options = {}) {
  terminal.bold(label);
  return await terminal.inputField(options).promise;
}

module.exports = { input };
