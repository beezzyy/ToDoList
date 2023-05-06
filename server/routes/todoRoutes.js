const express = require('express');
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

router.get('/:userEmail', getAllTodos);
router.post('/', createTodo);
router.put('/:taskId', updateTodo);
router.delete('/:taskId', deleteTodo);

module.exports = router;
