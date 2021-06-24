import bcrypt from "bcryptjs"

import User from "../models/user"

const newUser = async (req, res) => {
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
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
    } catch (err) {
        return res.status(500).send("Something went wrong while hashing the password.")
    }

    const newUser = User.create({ name, username, password: hashedPassword })






}