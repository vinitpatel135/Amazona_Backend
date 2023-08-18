const mongoose = require("mongoose")

const ConnectionDb = async() =>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Amazona-2")
        console.log("Data Base Connection Succesfull");
    } catch (error) {
        console.log("Data Base Connection Loss");
    }
}
module.exports = ConnectionDb