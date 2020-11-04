require('dotenv').config();

import passport from "passport";
import User from "../models/user";
import {Strategy} from "passport-jwt";
import {ExtractJwt} from "passport-jwt";
import LocalStrategy from "passport-local";

const localOptions = { usernameField: "username", passwordField: "password" };
const localLogin = new LocalStrategy(localOptions, (username, password, done) => {    
    User.findOne({ username }, (err, user) => {
        if (err) { return done(err); }

        if (!user) { return done(null, false); }

        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }

            if (!isMatch) { return done(null, false); }

            return done(null, user);
        });
    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.JWT_SECRET
};

const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);