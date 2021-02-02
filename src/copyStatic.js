const fs = require("fs");

const path = require("path");

function catchError(err) {
  if (err) throw err;
}

module.exports = function () {
  fs.mkdirSync(
    process.cwd() + "/clockanilla/assets",
    { recursive: true },
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/index.html",
    process.cwd() + "/clockanilla/index.html",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/assets/index.js",
    process.cwd() + "/clockanilla/assets/index.js",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/assets/index.css",
    process.cwd() + "/clockanilla/assets/index.css",
    catchError
  );
}
