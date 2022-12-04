const mongoose = require("mongoose");

// const link = ;

const connectDB = (url) => {
    return mongoose
        .connect(url, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
}
module.exports=connectDB;
    // .then(() => console.log("CONNECTED TO THE DB..."))
    // .catch((err) => console.log(err))