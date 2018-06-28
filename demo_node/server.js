const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => {
  console.log("");
  console.log("Servidor Corriendo en el puerto " + port);
  console.log("Esperando...");
  console.log("");
});

app.post("/demo", (request, response) => {
  console.log(request.body.text);
  response.send({ response: "Respuesta del servidor" });
});
