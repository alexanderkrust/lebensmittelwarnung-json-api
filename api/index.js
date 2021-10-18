require("ts-node").register({ files: true, transpileOnly: true });
const { app } = require("./index.ts");
module.exports = app;
