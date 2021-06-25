import mongoose from "mongoose"

const roomSchema = mongoose.Schema({
    person1: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    person2: {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "user"
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

export default mongoose.model("room", roomSchema)