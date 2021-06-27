import Room from "../models/room.js";

export const chatRoom = async (req, res) => {

    const { id: creatorId, receiver, message } = req.body;


    let chatRoom;
    try {
        chatRoom = await Room.findOne({ $or: [{ $and: [{ person1: creatorId }, { person2: receiver }] }, { $and: [{ person1: receiver }, { person2: creatorId }] }] })
    } catch (err) {
        return res.status(500).send(err)
    }



    if (chatRoom) {
        chatRoom.chat.push({
            person: creatorId,
            message
        })
        await chatRoom.save()
        return res.status(201).json({ sended: "sended..." })
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

    return res.status(201).json({ successful: true })
}


export const getMessageRoom = async (req, res) => {
    // in this controller. this will return all message room that user has.. with message.
    const { id } = req.body

    let messageRoom
    try {
        messageRoom = await Room.find({ $or: [{ person1: id }, { person2: id }] })
    } catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong with the server. please try again.")
    }

    return res.status(200).json(messageRoom)
}