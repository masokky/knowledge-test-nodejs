import express from "express";
import { validatePassword } from "../controller/password.js";

const router = express.Router();

router.post("/", validatePassword);

export default router;
