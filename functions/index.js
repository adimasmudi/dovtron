const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// router
const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(cors({ origin: true }));

// use router
app.use("/", indexRouter);

exports.app = functions.https.onRequest(app);
