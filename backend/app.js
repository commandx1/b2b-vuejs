const express = require("express");
const app = express();
const site1 = require("./site1");
const site2 = require("./site2");
const site3 = require("./site3");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/api/firma1", (req, res) => {
  res.status(200).send(site1);
});

app.get("/api/firma2", (req, res) => {
  res.status(200).send(site2);
});

app.get("/api/firma3", (req, res) => {
  res.status(200).send(site3);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Sunucu ayakta !");
});
