const { default: mongoose } = require("mongoose");

class UserModel {

    constructor() {
        this.schema = new mongoose.Schema({
            fullName: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            roll: { type: String, required: true },
            token: { type: String, default: null },
            otp: { type: String, default: null }
        },
        {
            timestamps: true
        })
    }
}
const adminUserModel = new UserModel()
const adminuser = mongoose.model("tbl_admins", adminUserModel.schema)
module.exports = adminuser