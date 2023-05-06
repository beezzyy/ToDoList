const express = require('express');
const {
  getAllTodos,
  createTodo,
  updateTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/:userEmail', getAllTodos);
router.post('/', createTodo);
router.put('/:taskId', updateTodo);

module.exports = router;
