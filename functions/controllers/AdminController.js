var admin = require("firebase-admin");
var serviceAccount = require("../permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  getDesease: async (req, res) => {
    try {
      await db
        .collection("penyakit")
        .doc("/" + req.params.nama + "/")
        .get()
        .then((result) => {
          return res.status(200).json(result.data());
        })
        .catch((error) => {
          return res.status(500).send(error);
        });
    } catch (error) {
      return res.status(500).send({ error: error });
    }
  },

  addDesease: (req, res) => {
    (async () => {
      try {
        await db
          .collection("penyakit")
          .doc("/" + req.body.nama + "/")
          .create({
            penyebab: req.body.penyebab,
            gejala: req.body.gejala,
            pengendalian: req.body.pengendalian,
          });

        return res.status(200).send();
      } catch (error) {
        return res.status(500).send({ error: error });
      }
    })();
  },
};
