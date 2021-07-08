const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Probando AWS con Express"));

app.listen(3000);
console.log("Server runnign port:3000");
