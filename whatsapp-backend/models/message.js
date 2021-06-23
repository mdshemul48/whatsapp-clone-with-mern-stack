import { Schema, Model } from "mongoose"

//---
// COMPONENT_NAME: message schema and modal
// INFO: this will create a model(blueprint) for message
//---


const messageSchema = Schema({
    message: String,
    name: String,
    timestamp: String
})

export default Model("messageContent", messageSchema)