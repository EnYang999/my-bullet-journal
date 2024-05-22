import { constant } from "lodash";
import * as Constants from "../../../common/constants";
import { config } from "dotenv";

config();

export const DB = process.env.APP_DB;
export const SECRET = process.env.APP_SECRET;
export const DOMAIN = process.env.APP_DOMAIN;
export const HOST_EMAIL = process.env.APP_HOST_EMAIL;
export const SENDGRID_API = process.env.APP_SENDGRID_API;
export const PORT =
	Constants.APP_BACKEND_PORT || process.env.PORT || process.env.APP_PORT;
export const USER_API = Constants.APP_USER_API;
export const PROFILE_API = Constants.APP_PROFILE_API;
export const SIGNUP_URL = Constants.APP_SIGNUP_URL;
export const LOGIN_URL = Constants.APP_LOGIN_URL;
export const RESET_PASSWORD = Constants.APP_RESET_PASSWORD;
export const RESET_PASSWORD_NOW = Constants.APP_RESET_PASSWORD_NOW;
export const API_ENDPOINT = Constants.API_ENDPOINT;
export const FRONTEND_PORT = Constants.APP_FRONTEND_PORT;
