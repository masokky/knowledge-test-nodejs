import express from "express";
import passwordRouter from "./routes/password.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/password", passwordRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
