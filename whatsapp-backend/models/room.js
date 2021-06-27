import mongoose from "mongoose"

const roomSchema = mongoose.Schema({
    person1: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    person2: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    chat: [
        {
            person: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            }

        }
    ]
})

export default mongoose.model("Room", roomSchema)