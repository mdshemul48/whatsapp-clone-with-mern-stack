import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    chatRoom: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Room"
        }
    ]
})

export default mongoose.model("user", userSchema)