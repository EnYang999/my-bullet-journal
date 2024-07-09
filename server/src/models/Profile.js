import { Schema, model } from "mongoose";

const ProfileSchema = new Schema(
	{
		account: {
			ref: "users",
			type: Schema.Types.ObjectId,
			unique: true,
			required: true,
		},
		avatar: {
			type: String,
			// default: "../uploads/post-images/img-1612019385734.jpg",
			required: false,
		},
		interests: { type: String, default: "" },
		goals: { type: String, default: "" },
		habits: { type: String, default: "" },
		notes: {
			type: String,
			default: "",
			required: false,
		},
		bio: {
			type: String,
			default: "",
			required: false,
		},
	},
	{ _id: false },
	{ timestamps: true }
);
ProfileSchema.index({ account: 1 }, { unique: true });
const Profile = model("profiles", ProfileSchema);
export default Profile;
