const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

//@route    Get api/todos
//@desc     Retrieve all todos
//@access   Private
router.get('/', async (req, res) => {
    try {
        //find all
        const todos = await Todo.find({});
        res.json({ todos })

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

//@route   POST api/todos
//@desc    add new todo
//@access  Private
router.post('/', async (req, res) => {
 console.log(req.body)
 const { todo } = req.body
    try {
        let item = new Todo({ todo });
        await item.save()

        res.json({ msg: 'Todo Successfully Saved' })

    } catch (err) {
        console.error('error with saving todos: ', err.message);
        res.status(500).send('Server Error')
    }
});

//@route   DELETE api/todos
//@desc    Delete todo item
//@access  Private
router.delete('/', async (req, res) => {

    try {
        await Todo.deleteOne(req.body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

})




module.exports = router;