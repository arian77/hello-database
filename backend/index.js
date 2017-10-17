const express = require("express");
const app = express();
const request = require("request");

// -----------------------------------------------------------------------------

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../socialmedia.db");

// -----------------------------------------------------------------------------

const databaseInit = require("./controller/init");
const databaseSelect = require("./controller/select");
const databaseInsert = require("./controller/insert");

// -----------------------------------------------------------------------------

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// -----------------------------------------------------------------------------

// INITIALIZE
app.post("/init", (req, res) => {
  databaseInit(db);
  res.send("DATABASE INITIALIZED");
});

// -----------------------------------------------------------------------------
// SELECT

app.get("/", async (req, res) => {
  // res.send(await databaseSelect(db))

  db.all("SELECT * FROM users", (err, data) => {
    res.send(data);
  });
});

// -----------------------------------------------------------------------------

// INSERT
app.post("/insert", (req, res) => {
  databaseInsert(db);
  res.send("DATA INSERTED");
});

// -----------------------------------------------------------------------------

app.listen(3000, () => {
  console.log("RUNNING ON localhost:3000");
});

process.on("SIGINT", () => {
  db.close();
});
