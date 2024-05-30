import { Schema, model } from "mongoose";
import { compare, hash } from "bcryptjs";
import { SECRET } from "../constants";
import { randomBytes } from "crypto";
import { sign } from "jsonwebtoken";
import { pick } from "lodash";
const TodoDateSchema = new Schema(
	{
		todoMonth: {
			type: String,
		},
		todoWeek: {
			type: String,
			enum: ["1", "2", "3", "4", "5"],
		},
		todoDay: {
			type: String,
		},
		todoNum: {
			type: String,
			enum: ["1", "2", "3", "4", "5"],
		},
	},
	{ _id: false } // Disable automatic _id generation for subdocuments
);
const TodosSchema = new Schema(
	{
		account: {
			ref: "users",
			type: Schema.Types.ObjectId,
			// unique: true,
			required: true,
		},
		description: {
			type: String,
			default: "",
			trim: true,
		},
		todoDate: {
			type: TodoDateSchema,
			required: true,
			unique: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);
TodosSchema.index(
	{
		account: 1,
		"todoDate.todoMonth": 1,
		"todoDate.todoWeek": 1,
		"todoDate.todoDay": 1,
		"todoDate.todoNum": 1,
	},
	{ unique: true }
);
// TodosSchema.pre("save", async function (next) {
// 	next();
// });
const Todo = model("todos", TodosSchema);
export default Todo;
