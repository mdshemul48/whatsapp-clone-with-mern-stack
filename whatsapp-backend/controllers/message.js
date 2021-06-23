import NewMessage from "../models/newMessage.js"


// this will create a new message to the db.
export const createNewMessage = async (req, res) => {
    const { message, name, timestamp, received } = req.body;

    let createdMessage;
    try {
        createdMessage = await NewMessage.create({ message, name, timestamp, received })
    } catch (err) {
        return res.send(500).send(err)
    }

    return res.status(201).json(createdMessage)

}