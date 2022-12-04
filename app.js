const connectDB = require("./db/connect");
require("dotenv").config();
const express = require("express");
const app = express();
const task = require("./routes/task");
const notFound=require("./Middleware/not-found");
const port = process.env.PORT || 3004;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", task);

const url = process.env.MONGO_URI;

app.use(notFound);

const start = async () => {
    try {
        await connectDB(url)
        app.listen(port, console.log(`Server is listeining at http://localhost:${port}`));
    } catch (err) {
        console.log(err);
    }
}

start();