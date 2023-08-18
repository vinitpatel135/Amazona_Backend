const productModel = require("./ProductModel")

// const products = [

//     // Clothes Section
  
//     {
//       name: 'Slim Shirt',
//       category: 'Shirts',
//       alias: "booShirt",
//       image: '/Images/Clothes/Shirt_1/d1.jpg',
//       image_1: '/Images/Clothes/Shirt_1/d1-1.jpg',
//       image_2: '/Images/Clothes/Shirt_1/d1-2.jpg',
//       image_3: '/Images/Clothes/Shirt_1/d1-3.jpg',
//       image_4: '/Images/Clothes/Shirt_1/d1-4.jpg',
//       price: 60,
//       brand: ' Adidas',
//       countInStock: 6,
//       rating: 4.5,
//       types: "clothes",
//       numReviews: 10,
//     },
//     {
//       name: 'Fit Shirt',
//       category: 'Shirts',
//       alias: "Fit Shirt",
//       image: '/Images/Clothes/Shirt_2/d2.jpg',
//       image_1: '/Images/Clothes/Shirt_2/d2-1.jpg',
//       image_2: '/Images/Clothes/Shirt_2/d2-2.jpg',
//       image_3: '/Images/Clothes/Shirt_2/d2-3.jpg',
//       image_4: '/Images/Clothes/Shirt_2/d2-4.jpg',
//       price: 50,
//       brand: ' Nike',
//       rating: 3.2,
//       countInStock: 6,
//       types: "clothes",
//       numReviews: 5,
  
//     },
//     {
//       name: 'Best Pants',
//       category: 'Pants',
//       alias: "Best Pants",
//       image: '/Images/Clothes/Shirt_3/d3.jpg',
//       image_1: '/Images/Clothes/Shirt_3/d3-1.jpg',
//       image_2: '/Images/Clothes/Shirt_3/d3-2.jpg',
//       image_3: '/Images/Clothes/Shirt_3/d3-3.jpg',
//       image_4: '/Images/Clothes/Shirt_3/d3-4.jpg',
//       price: 70,
//       brand: ' Puma',
//       rating: 2.5,
//       countInStock: 6,
//       numReviews: 8,
//       types: "clothes",
//     },
//     {
//       name: 'king Pants',
//       category: 'Pants',
//       alias: "king Pants",
//       image: '/Images/Clothes/Shirt_4/p1.jpg',
//       image_1: '/Images/Clothes/Shirt_4/p1-1.jpg',
//       image_2: '/Images/Clothes/Shirt_4/p2.jpg',
//       image_3: '/Images/Clothes/Shirt_4/p3.jpg',
//       image_4: '/Images/Clothes/Shirt_4/pp-4.jpg',
//       price: 70,
//       brand: ' Kingu',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 6,
//       types: "clothes"
//     },
  
  
//     /// MObile Products Section
  
//     {
//       name: 'Iphone 12',
//       category: 'mobile',
//       alias: "Iphone-12",
//       image: '/Images/Mobile/i_12/iphone-12.jpg',
//       image_1: '/Images/Mobile/i_12/iphone-12-1.jpg',
//       image_2: '/Images/Mobile/i_12/iphone-12-2.jpg',
//       image_3: '/Images/Mobile/i_12/iphone-12-3.jpg',
//       image_4: '/Images/Mobile/i_12/iphone-12-4.jpg',
//       price: 70000,
//       brand: ' Iphone',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       types: "mobile"
//     },
  
//     {
//       name: 'Iphone 13',
//       category: 'mobile',
//       alias: "Iphone-13",
//       image: '/Images/Mobile/i_13/iphone-13.jpg',
//       image_1: '/Images/Mobile/i_13/iphone-13-1.jpg',
//       image_2: '/Images/Mobile/i_13/iphone-13-2.jpg',
//       image_3: '/Images/Mobile/i_13/iphone-13-3.jpg',
//       image_4: '/Images/Mobile/i_13/iphone-13-4.jpg',
//       price: 80000,
//       brand: ' Iphone',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       types: "mobile"
//     },
  
//     {
//       name: 'Iphone 14',
//       category: 'mobile',
//       alias: "Iphone-14",
//       image: '/Images/Mobile/i_14/iphone-14.jpg',
//       image_1: '/Images/Mobile/i_14/iphone-14-1.jpg',
//       image_2: '/Images/Mobile/i_14/iphone-14-2.jpg',
//       image_3: '/Images/Mobile/i_14/iphone-14-3.jpg',
//       image_4: '/Images/Mobile/i_14/iphone-14-4.jpg',
//       price: 90000,
//       brand: ' Iphone',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       types: "mobile"
//     },
  
//     {
//       name: 'Iphone 14 Pro Max',
//       category: 'mobile',
//       alias: "Iphone-14 Pro Max",
//       image: '/Images/Mobile/i_pro/iphone-14-pro-max.jpg',
//       image_1: '/Images/Mobile/i_pro/iphone-14-pro-max-1.jpg',
//       image_2: '/Images/Mobile/i_pro/iphone-14-pro-max-2.jpg',
//       image_3: '/Images/Mobile/i_pro/iphone-14-pro-max-3.jpg',
//       image_4: '/Images/Mobile/i_pro/iphone-14-pro-max-4.jpg',
//       price: 190000,
//       brand: ' Iphone',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       types: "mobile"
//     },
  
//     //// Bag Section Data
  
  
//     {
//       name: 'Uppercase Bag',
//       category: 'bag',
//       alias: "Uppercase Bag",
//       image: '/Images/Bags/Bag_1/bag-1.jpg',
//       image_1: '/Images/Bags/Bag_1/bag-1-1.jpg',
//       image_2: '/Images/Bags/Bag_1/bag-1-2.jpg',
//       image_3: '/Images/Bags/Bag_1/bag-1-3.jpg',
//       image_4: '/Images/Bags/Bag_1/bag-1-4.jpg',
//       price: 1900,
//       brand: ' Uppercase',
//       rating: 4.5,
//       numReviews: 8,
//       countInStock: 20,
//       types: "bag"
//     },
  
//     {
//       name: 'wesly Bag',
//       category: 'bag',
//       alias: "wesly Bag",
//       image: '/Images/Bags/Bag_2/bag-2.jpg',
//       image_1: '/Images/Bags/Bag_2/bag-2-1.jpg',
//       image_2: '/Images/Bags/Bag_2/bag-2-2.jpg',
//       image_3: '/Images/Bags/Bag_2/bag-2-3.jpg',
//       image_4: '/Images/Bags/Bag_2/bag-2-4.jpg',
//       price: 1500,
//       brand: ' wesly',
//       rating: 4,
//       numReviews: 8,
//       countInStock: 50,
//       types: "bag"
//     },
  
//     {
//       name: 'American turister',
//       category: 'bag',
//       alias: "American turister",
//       image: '/Images/Bags/Bag_3/bag-3.jpg',
//       image_1: '/Images/Bags/Bag_3/bag-3-1.jpg',
//       image_2: '/Images/Bags/Bag_3/bag-3-2.jpg',
//       image_3: '/Images/Bags/Bag_3/bag-3-3.jpg',
//       image_4: '/Images/Bags/Bag_3/bag-3-4.jpg',
//       price: 1500,
//       brand: ' wesly',
//       rating: 4,
//       numReviews: 8,
//       countInStock: 50,
//       types: "bag"
//     },
  
//     {
//       name: 'SkyBag',
//       category: 'bag',
//       alias: "Sky Bag",
//       image: '/Images/Bags/Bag_4/bag-4.jpg',
//       image_1: '/Images/Bags/Bag_4/bag-4-1.jpg',
//       image_2: '/Images/Bags/Bag_4/bag-4-2.jpg',
//       image_3: '/Images/Bags/Bag_4/bag-4-3.jpg',
//       image_4: '/Images/Bags/Bag_4/bag-4-4.jpg',
//       price: 3500,
//       brand: ' Sky',
//       rating: 4,
//       numReviews: 8,
//       countInStock: 50,
//       types: "bag"
//     },
  
  
//     /// Graphics Product Data
  
//     {
//       name: 'MSI GEFORCE RTX 4090',
//       category: 'graphics',
//       alias: "MSI GEFORCE RTX 4090",
//       image: '/Images/Graphics/Card-1/card-1.jpg',
//       image_1: '/Images/Graphics/Card-1/card-1-1.jpg',
//       image_2: '/Images/Graphics/Card-1/card-1-2.jpg',
//       image_3: '/Images/Graphics/Card-1/card-1-3.jpg',
//       image_4: '/Images/Graphics/Card-1/card-1-4.jpg',
//       price: 150000,
//       brand: ' MSI',
//       rating: 4.9,
//       numReviews: 8,
//       countInStock: 5,
//       space: 16,
//       types: "graphics"
//     },
  
//     {
//       name: 'MSI GEFORCE RTX 4090 SUPRIM',
//       category: 'graphics',
//       alias: "MSI GEFORCE RTX 4090 SUPRIM",
//       image: '/Images/Graphics/Card-2/card-2.jpg',
//       image_1: '/Images/Graphics/Card-2/card-2-1.jpg',
//       image_2: '/Images/Graphics/Card-2/card-2-2.jpg',
//       image_3: '/Images/Graphics/Card-2/card-2-3.jpg',
//       image_4: '/Images/Graphics/Card-2/card-2-4.jpg',
//       price: 130000,
//       brand: ' MSI',
//       rating: 3.5,
//       numReviews: 8,
//       countInStock: 15,
//       space: 24,
//       types: "graphics"
//     },
  
//     {
//       name: 'ZOTAC GAMING RTX 4090',
//       category: 'graphics',
//       alias: "ZOTAC GAMING",
//       image: '/Images/Graphics/Card-3/card-3.jpg',
//       image_1: '/Images/Graphics/Card-3/card-3-1.jpg',
//       image_2: '/Images/Graphics/Card-3/card-3-2.jpg',
//       image_3: '/Images/Graphics/Card-3/card-3-3.jpg',
//       image_4: '/Images/Graphics/Card-3/card-3-4.jpg',
//       price: 230000,
//       brand: ' ZOTAC',
//       rating: 3,
//       numReviews: 8,
//       countInStock: 13,
//       space: 24,
//       types: "graphics"
//     },
  
//     {
//       name: 'AORUS XTREAM RTX 4090',
//       category: 'graphics',
//       alias: "AORUS XTREAM",
//       image: '/Images/Graphics/Card-4/card-4.jpg',
//       image_1: '/Images/Graphics/Card-4/card-4-1.jpg',
//       image_2: '/Images/Graphics/Card-4/card-4-2.jpg',
//       image_3: '/Images/Graphics/Card-4/card-4-3.jpg',
//       image_4: '/Images/Graphics/Card-4/card-4-4.jpg',
//       price: 230000,
//       brand: ' AORUS',
//       rating: 3,
//       numReviews: 8,
//       countInStock: 13,
//       space: 16,
//       types: "graphics"
//     },
  
//   ]

class ProductController {

  async InserProduct(req, res) {

    try {
      const result = await productModel.insertMany(products)
      if (result) return res.status(200).send({ message: "Succcesss", result: result })
      return res.status(500).send({ message: "Somthing Went Wrong " })
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: "Internal Sever Error" })
    }
  }


  async GetProduct(req, res){
    try {
      const result = await productModel.find({})
      if(result) return res.status(200).send({message:"success", Product:result})
      return res.status(500).send({message:"Somthing went wrong"})
    } catch (error) {
      return res.status(500).send({message:"Internal Sever Error"})
    }
  }


  async GetProductById(req, res){
    try {
      const { id } = req.params
      
      if(!id){
        return res.status(200).send({message:"Product not found"})
      }

      const result = await productModel.findById({_id : id})
      if(result) return res.status(200).send({message:"Success", product:result})
    
      return res.status(500).send({message:"Somthing went wrong"})
    } catch (error) {
      return res.status(500).send({message:"Intenal server error"})
    } 
  }

  async Getcart(req, res){
    try {
      const { products } = req.body
      if(!products){
        return res.status(400).send({message:"Missing Dependancy Products"})
      }
      
      const cart = await productModel.find({_id: products}).select(["name", "image", "price", "_id", "category", "brand", "type", "countInStock"])

      if(!cart){
        return res.status(500).send({message:"Sommthing went wrong"})
      }
      return res.status(200).send({message:"Success", cart:cart})

    } catch (error) {
      console.log(error);
      return res.status(500).send({message:"Internal Serer Error"})
    }
  }
}


const productController = new ProductController()
module.exports = productController
