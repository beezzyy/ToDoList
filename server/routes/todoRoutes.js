const express = require('express');
const { getAllTodos, createTodo } = require('../controllers/todoController');

const router = express.Router();

router.get('/:userEmail', getAllTodos);
router.post('/', createTodo);

module.exports = router;
