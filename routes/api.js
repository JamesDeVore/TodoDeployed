const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')

router.get('/todos', async (req, res, next) => {
  let todoData = await Todo.find({})
});

router.post('/todos', async (req, res, next) => {

    await Todo.create(req.body).catch(next)
 

});

router.delete('/todos/:id', async (req, res, next) => {
    await Todo.findOneAndDelete({"_id":req.params.id}).catch(next)

})

module.exports = router;