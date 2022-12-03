const express = require("express");
const app = express();
const task=require("./routes/task");
const port = 3004;

app.use(express.json());
app.use("/api/v1/tasks",task);

app.listen(port, console.log(`Server is listeining at http://localhost:${port}`));