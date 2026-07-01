import express from "express";
import __dirname from "../util/path.js";
import path from "path";

const router = express.Router();

router.get("/", (req, res) => res.sendFile(path.join(__dirname, '../','views', 'shop.html')));

export default router