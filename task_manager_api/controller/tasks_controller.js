const taskModel = require('../models/tasks_model')

const getAllTasks = async (req, res) => {
    try {
        const task = await taskModel.find()
        if(task.length > 0)
            res.status(200).json({ message: 'sucess', status: 200,  data: task });
        else
            res.status(200).json({message: 'data not found', status: 200, data:[] });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await taskModel.create(req.body)
        res.status(200).json({ message: 'sucess', status: 200,  data: task  });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

const getTaskById = (req, res) => {
    res.json({ id: req.params.id });
}

const updateTask = (req, res) => {
    res.send('update task');
}

const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getAllTasks, createTask, getTaskById, updateTask, deleteTask
}