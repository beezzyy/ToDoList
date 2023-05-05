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
