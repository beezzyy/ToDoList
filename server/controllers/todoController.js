const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

exports.getAllTodos = async (req, res) => {
  const { userEmail } = req.params;

  try {
    const todos = await pool.query(
      'SELECT * FROM todos WHERE user_email = $1',
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
};

exports.createTodo = async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  const id = uuidv4();

  try {
    const newTodo = await pool.query(
      'INSERT INTO todos (id, user_email,title, progress, date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, user_email, title, progress, date]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err);
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.taskId;
  const { user_email, title, progress, date } = req.body;

  try {
    const updatedTodo = await pool.query(
      'UPDATE todos SET user_email = $1,  title = $2, progress = $3, date = $4 WHERE id = $5 RETURNING *',
      [user_email, title, progress, date, id]
    );
    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.taskId;
  try {
    const deletedTodo = await pool.query('DELETE FROM todos WHERE id = $1', [
      id,
    ]);
    res.json(deletedTodo);
  } catch (err) {
    console.error(err);
  }
};
