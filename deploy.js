var client = require("firebase-tools");
client
  .deploy({
    project: "devopstutorial-d9959",
    token:
      "1//0c_KGSMpJ3CesCgYIARAAGAwSNwF-L9IrzhD6PuT3dQ27f5CHnwNyJ1Ea9fe5RGhi09XWNpgZ4L9t3cGFr45mDP6-Y8nHWor90MM",
    force: true,
  })
  .then(function () {
    console.log("Rules have been deployed!");
  })
  .catch(function (err) {
    // handle error
    console.log("Error! " + err);
  });
