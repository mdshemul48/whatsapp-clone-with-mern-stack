import jwt from "jsonwebtoken"


const authorization = async (req, res, next) => {
    // in this middleware verifying the token and attaching the user info with request. like userId, name, username etc.
    const authToken = req.headers.authorization?.split(" ")[1]

    if (!authToken) {
        return res.status(401).send("you're not allowed to access this route.")
    }

    // decrypting data from token..
    let decryptedData;

    try {
        decryptedData = jwt.verify(authToken, process.env.JWT_SECRET)
    } catch (err) {
        return res.status(500).send("something went wrong with the server. please try again.")
    }
    const { id, username } = decryptedData
    req.body = { ...req.body, id, username }
    next()
}

export default authorization