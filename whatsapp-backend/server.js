// importing
import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";

// routers 
import router from "./routes/message.js"


// app config
dotenv.config()

const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(express.json())

// db config
const db_connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.91aij.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(db_connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// ???

// api routes

app.get("/", (req, res) => res.status(200).send("hello world"))

// redirecting request to the message router.
app.use("/messages", router)
// listen

app.listen(port, () => console.log(`api rocks on http://localhost:${port}`))