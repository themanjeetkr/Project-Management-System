import mongoose from "mongoose";

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
    }
);

export const User = mongoose.model("User", userSchema);