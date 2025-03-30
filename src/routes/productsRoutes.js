import express from "express";
import productsController from "../controllers/productsController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeRoles from "../middlewares/authorizeRoles.js";

const router = express.Router();

router.get(
  "/", 
  productsController.getAllProducts);
router.get(
  "/:id", 
  productsController.getProductById);
router.post(
  "/",
  authenticateUser,
  authorizeRoles("administrator", "collaborator", "user"),
  productsController.createProduct
);
router.put(
  "/:id",
  authenticateUser,
  authorizeRoles("administrator", "collaborator", "user"),
  productsController.updateProduct
);
router.delete(
  "/:id",
  authenticateUser,
  authorizeRoles("administrator", "collaborator", "user"),
  productsController.deleteProduct
);

export default router;
