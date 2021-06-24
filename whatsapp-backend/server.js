// importing
import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";

// routers 
import router from "./routes/message.js"


// app config
dotenv.config()

const app = express()
const port = process.env.PORT || 9000

// configuring pusher
const pusher = new Pusher({
    appId: process.env.APP_ID,
    key: process.env.APP_KEY,
    secret: process.env.SECRET_KEY,
    cluster: "ap1",
    useTLS: true
});

// middleware
app.use(express.json())

// db config
const db_connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.91aij.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`


mongoose.connect(db_connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// configuring realtime db with pusher
const database = mongoose.connection
database.once("open", () => {
    console.log("db is connected.")

    const msgCollection = database.collection("messagecontents")
    const changeStream = msgCollection.watch();
    changeStream.on("change", (change) => {
        console.log(change)
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", messageDetails)
        }
    })
})



// ???

// api routes

app.get("/", (req, res) => res.status(200).send("hello world"))

// redirecting request to the message router.
app.use("/messages", router)
// listen

app.listen(port, () => console.log(`api rocks on http://localhost:${port}`))