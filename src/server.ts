import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/calcular", (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === "add") {
    return res.send({ resultado: operacion.num1 + operacion.num2 });
  } else if (operacion.operacion === "min") {
    return res.send({ resultado: operacion.num1 - operacion.num2 });
  } else if (operacion.operacion === "div") {
    return res.send({ resultado: operacion.num1 / operacion.num2 });
  } else if (operacion.operacion === "mul") {
    return res.send({ resultado: operacion.num1 * operacion.num2 });
  }
  return res.send({ resultado: "debes ingresar una operacion valida" });
});

export default  app ;