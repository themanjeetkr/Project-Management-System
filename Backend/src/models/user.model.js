import mongoose from "mongoose";
import brypt from "bcrypt";
const userSchema = new mongoose.Schema({
    avatar: {
        url: {
            type: String,
            default: "https://placehold.co/600x400",
        },
        localPath: {
            type: String,
        },
    },

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    fullname: {
        type: String,
        trim: true,
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
    },

    isEmailVerified: {
        type: Boolean,
        default: false,
    },

    forgetPasswordToken: {
        type: String,
    },

    forgetPasswordExpires: {
        type: Date,
    },

    emailVerificationToken: {
        type: String,
    },

    emailVerificationExpires: {
        type: Date,
    },


}
    ,
    {
        timestamps: true,
    },

    userSchema.pre("save", async function (next) {
        if(!this.isModified("password")) {
            return next();
        }
        this.password = await brypt.hash(this.password, 10);
        next();
    }

    ));
    

export const User = mongoose.model("User", userSchema);