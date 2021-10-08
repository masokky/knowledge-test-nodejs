import express from "express";
import db from "../configs/database.js";

const router = express.Router();

router.get("/", (req, res) => res.send("Router GET Products"));
router.post("/", (req, res) => res.send("Router POST Products"));
router.patch("/", (req, res) => res.send("Router PATCH Products"));
router.delete("/", (req, res) => res.send("Router DELETE Products"));

export default router;
