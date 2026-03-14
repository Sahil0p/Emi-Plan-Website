import express from "express";
import {
  getProducts,
  getProductBySlug,
  getProductEMIPlans,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/products/:slug", getProductBySlug);

router.get("/products/:slug/emiplans", getProductEMIPlans);

export default router;