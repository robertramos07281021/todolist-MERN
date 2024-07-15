const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

router.get('/todos',todoController.getTodo);
router.post('/add',todoController.addTodo)
router.delete('/delete/:id',todoController.deleteTodo)
router.put('/update/:id',todoController.updateDoneTodo)
router.patch('/update/:id', todoController.updateNameTodo)

module.exports = router;