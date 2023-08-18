const bcrypt = require("bcrypt")
const Validation = require("./Validation")
const userModel = require("./UserModel")
const jwt = require("jsonwebtoken");

class UserController{
    async RegisterUser(req, res){

        try {
            const ValidationResult = Validation(req.body, "register")

            if(ValidationResult.length > 0){
                return res.status(400).send({message:"Validation Error" , ValidationResult : ValidationResult})
            }

            let { password } = req.body
            const EncodePassword = bcrypt.hashSync(password, 8)
            
            if(!EncodePassword){
                return res.status(500).send({message: "Sopmthing went wrong"})
            }

            req.body.password = EncodePassword

            const result = await userModel.create(req.body)

            if(!result){
                return res.status(500).send({message:"Somthing went wrong"})
            }

            let user = result._doc

            delete user.password

            const token = jwt.sign({...user}, process.env.JWT_SECRATE , {expiresIn:"30d"})
            if(!token){
                return res.status(500).send({message:"Somthing went wrong"})
            }

            return res.status(200).send({message:"Success" , user:{...user , token: token}})

        }catch(error){
            console.log(error);

            if(error && error.message && error.message.includes("E11000")){
                return res.status(400).send({message:"Valiodation Error" , ValidationResult: [{key:"email", message:"email Alredy Exist"}]})            
            }

            return res.status(500).send({message:"Internal Server Error"})
        }
    }


    async UserLogin(req, res){
        try {
            const { email, password} = req.body
            const ValidationResult = Validation(req.body, "login")

            if(ValidationResult.length > 0){
                return res.status(400).send({message:"Validation Error", ValidationResult: ValidationResult})
            }

            let user = await userModel.findOne({email: email})

            if(!user){
                return res.status(400).send({message:"Validation Error", ValidationResult:[{key:"email", message:"Email not Found"}]})
            }

            user = user._doc

            if (!(bcrypt.compareSync(password, user.password))) {
                return res.status(400).send({message:"Validation Error", ValidationResult:[{key:"password", message:"Password is not match"}]})
            }

            const token = jwt.sign(user , process.env.JWT_SECRATE , {expiresIn:"30d"})
            delete user.password

            if(!token){
                return res.status(500).send({message:"Somthing went wrong"})
            }

            return res.status(200).send({message:"Success", user: {...user, token: token}})


        } catch (error) {
            console.log(error);
            return res.status(500).send({message:"Internal Server Error"})
        }
    }
}

const userController = new UserController()
module.exports = userController