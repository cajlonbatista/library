const express = require("express");
const mongoose = require("mongoose")
const requireDir = require("require-dir");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://kauton:cajlon4321@spacenews.uyvba.mongodb.net/library?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models/');
app.get("/", (req, res) => {
    res.json({title: "Library API", author: "Francisco Cajlon", version: "1.1"})
})
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3000);