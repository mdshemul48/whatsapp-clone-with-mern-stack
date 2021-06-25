import Room from "../models/room.js";
export const chatRoom = async (req, res) => {
    const { id: creatorId, sender, message } = req.body;
    let chatRoom;
    try {
        chatRoom = await Room.find({ $and: [{ person1: creatorId }, { person2: sender }] })
    } catch (err) {
        return res.status(500).send(err)
    }

    console.log(chatRoom)

    return res.send("hello world")
}