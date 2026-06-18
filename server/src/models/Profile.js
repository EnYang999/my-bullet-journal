import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ProfileSchema = new Schema(
	{
		account: {
			ref: "users",
			type: Schema.Types.ObjectId,
			required: true,
		},
		avatar: {
			type: String,
			required: false,
		},
		interests: { type: String, default: "" },
		goals: { type: String, default: "" },
		habits: { type: String, default: "" },
		notes: { type: String, default: "" },
		bio: { type: String, default: "" },
	},
	{ timestamps: true }
);

ProfileSchema.index({ account: 1 }, { unique: true });

const Profile = model("Profile", ProfileSchema);

export default Profile;