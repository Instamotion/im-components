const base = require("../../jest.config");
const pack = require("./package");

module.exports = {
  ...base,
  rootDir: __dirname,
  displayName: pack.name,
  name: pack.name
};
