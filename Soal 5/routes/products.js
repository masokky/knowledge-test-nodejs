import express from "express";
import { getAllProducts } from "../controllers/products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", (req, res) => res.send("Router POST Products"));
router.patch("/", (req, res) => res.send("Router PATCH Products"));
router.delete("/", (req, res) => res.send("Router DELETE Products"));

export default router;
