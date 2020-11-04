
import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt-nodejs";

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        lowercase: true
    },
    password: String
});

userSchema.pre("save", function (next) {
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => err ? callback(err) : callback(null, isMatch));
};

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
