const express = require("express")
const mediaController = require("./Media/MediaController")
const adminUserController = require("./User/UserController")
const productcontroller = require("./Product/ProductController")

const AdminRouter = express.Router()

AdminRouter.post("/upload", mediaController.GetMedia)

AdminRouter.post("/adduser", adminUserController.CreateUser)

AdminRouter.post("/login", adminUserController.LoginUser)

AdminRouter.get("/getuser", adminUserController.GetUser)

AdminRouter.delete("/deluser/:id", adminUserController.DeleteUser)

AdminRouter.put("/update/:id", adminUserController.UpdateUser)

AdminRouter.post("/verify", adminUserController.OtpVerfy)

AdminRouter.get("/getmeida", mediaController.Showmedia)

AdminRouter.post("/insertproduct", productcontroller.InsertProducts)

module.exports = AdminRouter
