import passport from "passport";
import { AUTHENTICATE_TOKEN_NAME } from "../constants";
export const userAuth = passport.authenticate(AUTHENTICATE_TOKEN_NAME, {
	session: false,
});
// passport.use(
// 	new JwtStrategy(opts, (jwt_payload, done) => {
// 		console.log("JWT payload:", jwt_payload); // Log payload data
// 	})
// );
