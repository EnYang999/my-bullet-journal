import { userAuth } from "../middlewares/auth-guard";
import { Todo } from "../models";
import { Router } from "express";
const router = Router();

/**
 * @description To Create User's today's todo
 * @api /api/todos/to-do
 * @access Private
 * @type POST
 */
router.post(
	"/to-do-line/:todoMonth/:todoWeek/:todoDay/:todoNum",
	userAuth,
	async (req, res) => {
		try {
			const { body, user } = req;
			const { todoMonth, todoWeek, todoDay, todoNum } = req.params;
			const todo = new Todo({
				account: user._id,
				description: body.description,
				todoDate: {
					todoMonth: todoMonth,
					todoWeek: todoWeek,
					todoDay: todoDay,
					todoNum: todoNum,
				},
			});
			await todo.save();
			return res.status(201).json({
				success: true,
				message: "todo created successfully.",
			});
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to create the todo.",
				error: err.message,
			});
		}
	}
);
/**
 * @description To Create User's today's 'todo's completed status
 * @api /api/todos/to-do
 * @access Private
 * @type POST
 */
router.patch(
	"/to-do-check/:todoMonth/:todoWeek/:todoDay/:todoNum",
	userAuth,
	async (req, res) => {
		try {
			const { body, user } = req;
			const { todoMonth, todoWeek, todoDay, todoNum } = req.params;
			const todoDate = {
				todoMonth: todoMonth,
				todoWeek: todoWeek,
				todoDay: todoDay,
				todoNum: todoNum,
			};
			const todos = await Todo.findOne({ todoDate, account: req.user._id });
			todos.completed = body.completed;
			await todos.save();
			res.status(201).json(todos);
		} catch (err) {
			return res.status(400).json({
				success: false,
				message: "Unable to create the todo check.",
				error: err.message,
			});
		}
	}
);
/**
 * @description To get User's today's todo by
 * @api /api/todos/to-do
 * @access Private
 * @type GET
 */
router.get(
	"to-do/:todoMonth/:todoWeek/:todoDay/:todoNum",
	userAuth,
	async (req, res) => {
		try {
			const { todoMonth, todoWeek, todoDay, todoNum } = req.params;

			const todoDate = {
				todoMonth: todoMonth,
				todoWeek: todoWeek,
				todoDay: todoDay,
				todoNum: todoNum,
			};
			const todos = await Todo.findOne({ todoDate, account: req.user._id });

			if (todos.length === 0) {
				return res
					.status(404)
					.json({ message: "No todos found matching the criteria." });
			}

			return res.status(200).json(todos);
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	}
);
/**
 * @description To get User's today's todo
 * @api /api/todos/to-do
 * @access Private
 * @type GET
 */
router.patch("/:id", async (req, res) => {
	try {
		const updatedTodoData = {
			description: req.body.description,
			todoDate: req.body.todoDate,
			completed: req.body.completed,
		};

		const updatedTodo = await Todo.findByIdAndUpdate(
			req.params.id,
			updatedTodoData,
			{ new: true }
		);
		if (!updatedTodo)
			return res.status(404).json({ message: "Todo not found" });

		res.status(200).json(updatedTodo);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});
export default router;
