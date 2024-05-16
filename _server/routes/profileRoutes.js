import { Router } from "express";
import uploader from "../middlewares/uploader";
import { userAuth } from "../middlewares/auth-guard";
import profileController from "../controller/profileController";

const router = Router();
/**
 * @description To create profile of the authenticated User
 * @type POST <multipart-form> request
 * @api /profiles/api/create-profile
 * @access Private
 */
router.post(
	"/api/create-profile",
	userAuth,
	uploader.single("avatar"),
	profileController.profile_post
);
/**
 * @description To Get the authenticated user's profile
 * @api /profiles/api/my-profile
 * @access Private
 * @type GET
 */
router.get("/api/my-profile", userAuth, profileController.profile_get);
/**
 * @description To update autheticated user's profile
 * @type PUT <multipart-form> request
 * @api /profiles/api/update-profile
 * @access Private
 */
router.put(
	"/api/update-profile",
	userAuth,
	uploader.single("avatar"),
	profileController.profile_put
);
/**
 * @description To get user's profile with the username
 * @api /profiles/api/profile-user/:username"
 * @access Public
 * @type GET
 */
router.get("/api/profile-user/:username", profile_get_public);

export default router;
