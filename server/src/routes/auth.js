import { Router } from "express";
const router = Router();

import * as authController from "../controllers/auth.js";

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

export default router;
