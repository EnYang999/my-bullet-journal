import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import lodash from "lodash";
import { randomBytes } from "crypto";
import { SECRET } from "../constants/index.js";

const { Schema, model } = mongoose;
const { compare, hash } = bcrypt;
const { pick } = lodash;
const { sign, verify } = jwt;

const TodoDateSchema = new Schema(
	{
		todoMonth: String,
		todoWeek: {
			type: String,
			enum: ["1", "2", "3", "4", "5"],
		},
		todoDay: String,
		todoNum: {
			type: String,
			enum: ["1", "2", "3", "4", "5"],
		},
	},
	{ _id: false }
);

const TodosSchema = new Schema(
	{
		account: {
			type: Schema.Types.ObjectId,
			ref: "users",
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

const Todo = model("todos", TodosSchema);

export default Todo;