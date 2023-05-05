const pool = require('../db');

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
