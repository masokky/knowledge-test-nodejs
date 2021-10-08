import express from "express";
import { addProduct, getAllProducts } from "../controllers/products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.patch("/", (req, res) => res.send("Router PATCH Products"));
router.delete("/", (req, res) => res.send("Router DELETE Products"));

export default router;
