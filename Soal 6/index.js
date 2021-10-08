import express from "express";
import bodyParser from "body-parser";
import productsRouter from "./routes/products.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server running on port: https://localhost:${PORT}`));
