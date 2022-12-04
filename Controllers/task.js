const Task = require("../models/Task");

const getAllTasks = (req, res) => {
    res.send("get all items");
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (err) {
        res.status(500).json({ msg: err })
    }

}

const getTasks = (req, res) => {
    res.send("get single items");
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