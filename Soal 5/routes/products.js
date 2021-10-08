import express from "express";
import { addProduct, getAllProducts, updateProduct } from "../controllers/products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/", (req, res) => res.send("Router DELETE Products"));

export default router;
