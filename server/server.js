const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./db');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ?? 8000;

// get all todos
app.use('/todos', todoRoutes);
app.use('/', authRoutes);

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log(`Connected to PostgreSQL database at ${res.rows[0].now}`);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
