const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "chatapp"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySql...");
});

const app = express();

app.get("/", () => {
  return "eG94Yi0xMTExMjA5MTYwNjUtQVROd20zVTF0WGxURDdLUHdQMmkyQjNI"
});

app.listen("5000", () => {
  console.log("Server started on port 5000");
});
