const express = require('express');
const { getAllTodos } = require('../controllers/todoController');

const router = express.Router();

// get all todos
router.get('/:userEmail', getAllTodos);

module.exports = router;
