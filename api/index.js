require("ts-node").register({ files: true, transpileOnly: true });
const { app } = require("./app.ts");

module.exports = app;
