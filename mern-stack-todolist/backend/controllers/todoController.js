
const Todo = require('../models/todo')
const mongoose = require('mongoose')

exports.getTodo = async(req, res) => {
  try {
    const todos = await Todo.find()
    res.status(200).json({todos})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.addTodo = async( req, res ) => {
  const {name} = req.body;
  if(!name) {
    return res.status(400).json({message: 'Todo Name is required'})
  }
  try {
    const todo = await Todo.create({ name })
    res.status(200).json({success: 'Todo Created', todo})
  } catch(error) {
    return res.status(500).json({error: error.message})
  }

}

exports.deleteTodo = async(req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Incorrect Todo Id'})
  }
  const findTodo = await Todo.findById(id);
  if(!findTodo) {
    return res.status(400).json({message: 'Todo is not exist'})
  }
  try {
    await findTodo.deleteOne()
    res.status(200).json({success: 'Todo Deleted'})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }

}

exports.updateDoneTodo = async(req,res) => {
  const {id} = req.params;
  const {done} = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Incorrect Todo Id'})
  }
  const findTodo = await Todo.findById(id);
  if(!findTodo) {
    return res.status(400).json({message: 'Todo is not exist'})
  }
  try {
    const todo = await findTodo.updateOne({done})
    const todos = await Todo.find();
    
    res.status(200).json({success: 'Todo Updated', todos})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

exports.updateNameTodo = async(req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Incorrect Todo Id'})
  }
  const findTodo = await Todo.findById(id);
  if(!findTodo) {
    return res.status(400).json({message: 'Todo is not exist'})
  }
  try {
    await findTodo.updateOne({name})
    const todos = await Todo.find();
    res.status(200).json({ success: 'Todo Update', todos})
  } catch(error) {
    return res.status(500).json({error: error.message})
  }
}