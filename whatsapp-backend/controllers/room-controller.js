import Room from "../models/room.js";

export const chatRoom = async (req, res) => {

    const { id: creatorId, receiver, message } = req.body;


    let chatRoom;
    try {
        chatRoom = await Room.findOne({ $and: [{ person1: creatorId }, { person2: receiver }] })
    } catch (err) {
        return res.status(500).send(err)
    }



    if (chatRoom) {
        chatRoom.chat.push({
            person: creatorId,
            message
        })
        await chatRoom.save()
        return res.status(201).send("sended.")
    }





    try {
        const newMessage = Room({
            person1: creatorId,
            person2: receiver,
            chat: [
                {
                    person: creatorId,
                    message
                }
            ]
        })
        await newMessage.save()
    } catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong with the server.")
    }

    return res.send("hello world")
}