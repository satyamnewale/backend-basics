import express from "express";
import __dirname from "../util/path.js";
import path from "path";

const router = express.Router();

// 3. creating use middleware
router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../','views', 'add-product.html'))
});

router.post("/add-product", (req , res , next) => {
    console.log(req.body);
    res.redirect("/");
})

export default router