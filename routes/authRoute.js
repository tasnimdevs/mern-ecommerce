import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersControllerNew,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProdileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signUp", registerController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSignIn, updateProdileController);

router.get("/orders", requireSignIn, getOrdersControllerNew);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
