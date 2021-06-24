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

    // creating user in the db.
    let user
    try {
        user = await User.create({ name, username, password: hashedPassword })
    } catch (err) {
        return res.status(500).send("something went wrong with the server. user not created.")
    }
    return res.status(201).json({ created: true })






}