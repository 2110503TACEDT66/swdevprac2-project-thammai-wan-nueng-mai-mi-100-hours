import mongoose from "mongoose"
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        tel_number: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        resetPasswordToken: {
            type: String,
            required: true
        },
        resetPasswordExpire: {
            type: Date,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        },
    }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User 