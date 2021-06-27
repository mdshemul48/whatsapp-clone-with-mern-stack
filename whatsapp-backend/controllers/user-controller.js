import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.js"

export const auth = async (req, res) => {
    const { username, password } = req.body
    // checking if user already exist or not in out db.
    let existingUser
    try {
        existingUser = await User.findOne({ username })
    } catch (err) {
        return res.status(500).send("Something went wrong while checking for existing user.")
    }
    if (existingUser) {
        // checking the user password
        try {
            const passwordCheck = await bcrypt.compare(password, existingUser.password)
            if (passwordCheck) {
                // creating token for user login.
                const token = await jwt.sign({ id: existingUser._id, username: existingUser.username }, process.env.JWT_SECRET)
                return res.status(200).json({ successful: true, token, userId: existingUser._id })
            }

        } catch (err) {

        }

        return res.status(409).send("user already exist. please choose different username.")
    }
    // already checking done. if user already exist then request won't pass bellow this line.


    // hashing the password
    let hashedPassword
    try {
        hashedPassword = await bcrypt.hash(password, 10)
    } catch (err) {
        return res.status(500).send("Something went wrong while hashing the password.")
    }

    // creating user in the db.
    let user
    try {
        user = await User.create({ username, password: hashedPassword })
    } catch (err) {
        return res.status(500).send("something went wrong with the server. user not created.")
    }

    // creating token for login.
    const token = jwt.sign({ id: user._id, username }, process.env.JWT_SECRET)

    return res.status(201).json({ successful: true, token, userId: user._id })
}