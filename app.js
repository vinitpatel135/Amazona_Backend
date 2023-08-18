const express = require("express")
const ConnecionDb = require("./Connection")
const cors = require("cors")
const productController = require("./Product/ProductController")
const userController = require("./User/UserController")
const authController = require("./Auth/Auth")
const orderController = require("./Order/OrderController")
const fileUpload = require("express-fileupload")
const randomstring = require("randomstring")
const { default: mediamodel } = require("./Admin/Media/MediaModel")
const mediaController = require("./Admin/Media/MediaController")
const AdminRouter = require("./Admin/AdminRouter")
require("dotenv").config()

const App = express()
App.use(express.json())

App.use(cors())

ConnecionDb()

App.use(fileUpload())

App.use("/uploads", express.static("./uploads"))





App.get("/", (req, res) => {
    return res.status(200).send({ message: "Success" })
})

// App.get("/product/insert/many", productController.InserProduct)

App.get("/product", productController.GetProduct)

App.get("/product/:id", productController.GetProductById)

App.post("/register", userController.RegisterUser)

App.post("/login", userController.UserLogin)

App.post("/cart", productController.Getcart)

// authController.CreateOrderAuth,
App.post("/neworder", authController.CreateOrderAuth, orderController.CreateOrder)

App.get("/order", authController.CreateOrderAuth, orderController.GetOrder)

App.get("/order/:id", authController.CreateOrderAuth, orderController.getOrderByID)

App.post("/payment/verify", authController.CreateOrderAuth, orderController.PaymentVerify)



    // Admin API

App.use("/admin", AdminRouter)



App.listen(process.env.PORT, () => {
    console.log("Sever Is Started For Serving");
})

