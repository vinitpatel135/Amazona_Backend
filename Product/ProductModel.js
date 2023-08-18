const  mongoose  = require("mongoose");

class ProductModel {

    constructor() {
        this.schema = new mongoose.Schema({

            name: { type: String, required: true },
            alias: { type: String, required: true, unique: true },
            category: { type: String, required: true },
            image: { type: String, required: true },
            image_1: { type: String, required: true },
            image_2: { type: String, required: true },
            image_3: { type: String, required: true },
            image_4: { type: String, required: true },
            brand: { type: String, required: true },
            description: { type: String },
            rating: { type: Number, required: true },
            price: { type: Number, required: true },
            numReviews: { type: Number, required: true },
            countInStock: { type: Number, required: true },

        })
    }
}

const Product = new ProductModel ()
const productModel = mongoose.model("Products_Data" , Product.schema)
module.exports = productModel