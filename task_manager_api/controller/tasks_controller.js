const taskModel = require('../models/tasks_model')
const asyncWrapper = require('../middleware/asyncWrapper')

const getAllTasks = asyncWrapper(async (req, res) => {
    const task = await taskModel.find()
    if (task.length > 0)
        res.status(200).json({ message: 'sucess', status: 200, data: task });
    else
        res.status(200).json({ message: 'data not found', status: 200, data: [] });
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await taskModel.create(req.body)
    res.status(200).json({ message: 'sucess', status: 200, data: task });
})

const getTaskById = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOne({ _id: taskID })
    if (!task) {
        return res.status(404).json({ message: 'No record found.', status: 200, data: null });
    }
    res.status(200).json({ message: 'sucess', status: 200, data: task });
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return res.status(404).json({ message: 'No record found.', status: 200, data: null });
    }
    res.status(200).json({ message: 'sucess', status: 200, data: task });

})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await taskModel.findOneAndDelete({ _id: taskID })
    if (!task) {
        return res.status(404).json({ message: 'No record found.', status: 200, data: null });
    }
    res.status(200).json({ message: 'sucess', status: 200, data: null });
})

module.exports = {
    getAllTasks, createTask, getTaskById, updateTask, deleteTask
}