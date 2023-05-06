const pool = require('../db');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup
exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const salt = bycrypt.genSaltSync(10);
  const hashPassword = bycrypt.hashSync(password, salt);

  try {
    const signup = await pool.query(
      'INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *',
      [email, hashPassword]
    );
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });

    res.json({ email, token });
  } catch (error) {
    console.error(error);
    if (err) {
      res.json({ detail: err.detail });
    }
  }
};

//login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (users.rows.length === 0) {
      return res.json({ detail: 'User does not exist!' });
    }

    const success = await bycrypt.compare(
      password,
      users.rows[0].hashed_password
    );
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });

    if (success) {
      return res.json({ email: users.rows[0].email, token });
    } else {
      return res.json({ detail: 'Login Failed!' });
    }
  } catch (error) {
    console.error(error);
  }
};
