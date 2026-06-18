import passport from "passport";
import pkg from "passport-jwt";
import { User } from "../models/index.js";
import { SECRET as secretOrKey } from "../constants/index.js";

const { Strategy, ExtractJwt } = pkg;

const opts = {
	secretOrKey,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
	new Strategy(opts, async (payload, done) => {
		try {
			const user = await User.findById(payload.id);

			if (!user) {
				return done(null, false);
			}

			return done(null, user.getUserInfo());
		} catch (err) {
			return done(err, false);
		}
	})
);

export default passport;