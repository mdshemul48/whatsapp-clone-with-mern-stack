import mongoose from "mongoose"

//---
// COMPONENT_NAME: message schema and modal
// INFO: this will create a model(blueprint) for message
//---


const messageSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

export default mongoose.model("messageContent", messageSchema)