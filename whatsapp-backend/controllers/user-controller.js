import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.js"

export const newUser = async (req, res) => {
    const { name, username, password } = req.body
    // checking if user already exist or not in out db.
    let existingUser
    try {
        existingUser = await User.findOne({ username })
    } catch (err) {
        return res.status(500).send("Something went wrong while checking for existing user.")
    }
    if (existingUser) {
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
        user = await User.create({ name, username, password: hashedPassword })
    } catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong with the server. user not created.")
    }

    // creating token for login.
    const token = jwt.sign({ id: user._id, username, name, }, process.env.JWT_SECRET)

    return res.status(201).json({ created: true, token })
}