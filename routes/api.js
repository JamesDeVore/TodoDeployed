const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

router.get('/todos', async (req, res, next) => {
  let todoData = await Todo.find({})
});

router.post('/todos', (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  } else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/todos/:id', async (req, res, next) => {
    await Todo.findOneAndDelete({"_id":req.params.id}).catch(next)

})

module.exports = router;