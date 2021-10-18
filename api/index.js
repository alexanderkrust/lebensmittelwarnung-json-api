require("ts-node").register({ files: true, transpileOnly: true });
const { app } = require("../src/app.ts");

module.exports = app;
