const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}

const getTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params;
        const task = await Task.findOne({ _id: taskId });
        if (!task) {
            return res.send(404).json({ msg: `No Task with id:${taskId}` })
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateTasks = (req, res) => {
    res.send("update items");
}

const deleteTasks = (req, res) => {
    res.send("delete items");
}


module.exports = {
    getAllTasks, getTasks, updateTasks, createTasks, deleteTasks
}