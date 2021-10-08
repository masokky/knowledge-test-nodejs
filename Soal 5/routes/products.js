import express from "express";
import { addProduct, deleteProduct, getAllProducts, updateProduct } from "../controllers/products.js";
const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
