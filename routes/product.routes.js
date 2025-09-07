


import express from "express";
import { getProducts, createProduct } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProducts);// for controllers -> product.controller.js
router.post("/", createProduct);// for controllers -> product.controller.js

export default router;