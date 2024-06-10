import { Schema, model } from "mongoose";

const ProfileSchema = new Schema(
	{
		account: {
			ref: "users",
			type: Schema.Types.ObjectId,
			unique: true,
		},
		avatar: {
			type: String,
			// default: "../uploads/post-images/img-1612019385734.jpg",
			required: false,
		},
		social: {
			facebook: {
				type: String,
				required: false,
			},
			twitter: {
				type: String,
				required: false,
			},
			linkedin: {
				type: String,
				required: false,
			},
			instagram: {
				type: String,
				required: false,
			},
			github: {
				type: String,
				required: false,
			},
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
	{ timestamps: true }
);

const Profile = model("profiles", ProfileSchema);
export default Profile;
