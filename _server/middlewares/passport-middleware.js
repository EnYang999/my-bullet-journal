import passport from "passport";
import User from "../models/User.js";
import { Strategy, ExtractJwt } from "passport-jwt";
import { SECRET as secretOrKey } from "../constants.js";

const opts = {
	secretOrKey,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
	new Strategy(opts, async ({ id }, done) => {
		try {
			let user = await User.findById(id);
			if (!user) {
				throw new Error("User not found.");
			}
			return done(null, user.getUserInfo());
		} catch (err) {
			done(null, false);
		}
	})
);
