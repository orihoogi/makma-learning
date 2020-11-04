require('dotenv').config();

import jwt from "jwt-simple";
import User from "../models/user";

function tokenForUser (user) {
    const timestamp = new Date().getTime();

    return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}

export const signin = (req, res) => {
    res.send({ username: req.user.username, token: tokenForUser(req.user) });
};

export const signup = (req, res, next) => {
    const { username, firstname, lastname, email, password } = req.body;

    if (!username || !firstname || !lastname || !email || !password) {
        return res.status(422).send({ error: "Please provide all user fields." });
    }

    User.findOne({ username: username }, (err, existingUser) => {
        if (err) { return next(err); }

        if (existingUser) {
            return res.status(422).send({ error: "Username is already in use." });
        }

        const user = new User({
            username,
            firstname,
            lastname,
            email,
            password
        });

        user.save(err => {
            if (err) { return next(err); }

            res.json({ username, token: tokenForUser(user) });
        });
    });
};
