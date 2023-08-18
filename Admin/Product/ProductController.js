const adminproductmodel = require("./ProductModel")

class ProductController {

    async InsertProducts(req, res) {
        try {
            const { title, alias, price, discription, discount, countInStock, totalPrice, Brand, featureImg, relevantImg } = req.body
            
            if (!title) return res.status(400).send({ message: "Missing Dipendency Of Title" })
            if (!price) return res.status(400).send({ message: "Missing Dipendency Of Price" })
            if (!alias) return res.status(400).send({ message: "Missing Dipendency Of alias" })
            if (!discription) return res.status(400).send({ message: "Missing Dipendency Of Discription" })
            if (!discount) return res.status(400).send({ message: "Missing Dipendency Of Discount" })
            if (!countInStock) return res.status(400).send({ message: "Missing Dipendency Of CountInStock" })
            if (!totalPrice) return res.status(400).send({ message: "Missing Dipendency Of TotalPrice" })
            if (!Brand) return res.status(400).send({ message: "Missing Dipendency Of Brand" })
            if (!featureImg) return res.status(400).send({ message: "Missing Dipendency Of FeatureImages" })
            if (!relevantImg) return res.status(400).send({ message: "Missing Dipendency Of RelevantImages" })
            
            const result = await adminproductmodel.AddProduct(req.body)
            console.log(result);

            if (!result) return res.status(400).send({ message: "Somthing went wrong" })

            return res.status(200).send({ message: "Success", product: result })

        } catch (error) {
            console.log(error);
            return res.status(500).send({message:"Internal Server Error"})

        }
    }
}

const productcontroller = new ProductController()
module.exports = productcontroller