import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    chatRoom: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Room"
        }
    ]
})

export default mongoose.model("User", userSchema)