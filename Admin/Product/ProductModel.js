const { default: mongoose } = require("mongoose");

class AdminProductModel {
    constructor() {
        this.schema = new mongoose.Schema({
            title: { type: String, required: true },
            Brand: { type: String, required: true },
            alias: { type: String, required: true, unique: true },
            featureImg: { type: mongoose.Types.ObjectId, required: true },
            relevantImg: { type: Array, required: true },
            price: { type: Number, required: true },
            discription: { type: String, required: true, default: null },
            discount: { type: Number, default: null },
            countInStock: { type: Number, required: true },
            totalPrice: { type: Number, required: true },
        }, { timestamps: true })

        this.Product = new mongoose.model("tbl_AdminProduct", this.schema)
    }

    AddProduct(data){
        return this.Product.create(data)
    }

}

const adminproductmodel = new AdminProductModel()
module.exports = adminproductmodel