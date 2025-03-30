import express from "express";
import usersController from "../controllers/usersController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeRoles from "../middlewares/authorizeRoles.js";

const router = express.Router();

router.post(
  "/", 
  usersController.createUser);
router.get(
  "/",
  authenticateUser,
  authorizeRoles("administrator"),
  usersController.getAllUsers
);
router.get(
  "/:id",
  authenticateUser,
  authorizeRoles("administrator"),
  usersController.getUserById
);
router.put(
  "/:id",
  authenticateUser,
  authorizeRoles("administrator"),
  usersController.updateUser
);
router.patch(
  "/:id/soft-delete",
  authenticateUser,
  authorizeRoles("administrator"),
  usersController.softDeleteUser
);
router.delete(
  "/:id",
  authenticateUser,
  authorizeRoles("administrator"),
  usersController.deleteUser
);

export default router;
