const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// router
const indexRouter = require("./routes/indexRouter");

var admin = require("firebase-admin");
var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dovtron..firebaseio.com",
});

const db = admin.firestore();

const app = express();

app.use(cors({ origin: true }));

// use router
app.use("/", indexRouter);

exports.app = functions.https.onRequest(app);
