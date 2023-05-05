const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ?? 8000;

// get all todos
app.use('/todos', todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
