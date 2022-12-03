const getAllTasks = (req, res) => {
    res.send("get all items");
}

const createTasks = (req, res) => {
    res.send("create items");
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