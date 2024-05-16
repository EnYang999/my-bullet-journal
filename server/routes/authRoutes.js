import Router from "express";
import authController from "../controller/authController.js";

const router = Router();

router.post("/signup", authController.signup_post);

router.post("/login", authController.login_post);
router.get("/logout", authController.logout_get);

export default router;
