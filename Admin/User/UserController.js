const Validation = require("../../User/Validation");
const adminuser = require("./UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const Randomstring = require("randomstring");
const Send = require("../SendOtp/Send");

class UserController {

    async CreateUser(req, res) {
        try {
            let user = req.body

            const ValidationResult = Validation(req.body, "admin-register")

            if (ValidationResult.length > 0) {
                return res.status(400).send({ message: "Validation Error", ValidationResult: ValidationResult })
            }

            const EncodePassword = bcrypt.hashSync(user.password, 8)

            if (!EncodePassword) {
                return res.status(500).send({ message: "Somthing Went Wrong" })
            }
            user.password = EncodePassword

            const token = jwt.sign({ ...user }, process.env.JWT_SECRATE, { expiresIn: '30d' })

            if (!token) return res.status(500).send({ message: "Somthing Went Wrong" })

            user = { ...user, token: token }

            const result = await adminuser.create(user)
            
            if (!result) return res.status(400).send({ message: "Somthing Went Wrong" })

            user = result._doc

            delete user.password

            return res.status(200).send({ message: "Success", user: { ...user, token: token } })

            // if(sendmail && sendmail.match("OK")[0] === "OK"){

            //     const EncodePassword = bcrypt.hashSync(userData.password, 8)

            //     if(!EncodePassword){
            //         return res.status(500).send({message: "Sopmthing went wrong"})
            //     }

            //     userData.password = EncodePassword

            //     const token = jwt.sign({...userData}, process.env.JWT_SECRATE, {expiresIn:"30d"})

            //     if(!token){
            //         return res.status(500).send({message:"Somthing went wrong"})
            //     }
            //     const result = await adminuser.create({...userData, token : token})

            //     if(!result) return res.status(500).send({message:"Somthing Went Wrong"})

            //     let user = result._doc

            //     delete user.password

            //     return res.status(200).send({message:"Success", user: {...user , token : token}})
            // }

        } catch (error) {
            console.log(error);

            if (error && error.message && error.message.includes("E11000")) {
                return res.status(400).send({ message: "Valiodation Error", ValidationResult: [{ key: "email", message: "email Alredy Exist" }] })
            }

            return res.status(500).send({ message: "Internal Server Error" })
        }
    }


    async LoginUser(req, res) {
        try {
            const { email, password } = req.body

            const ValidationResult = Validation(req.body, "login")

            if (ValidationResult.length > 0) {
                return res.status(400).send({ message: "Validation Error", ValidationResult: ValidationResult })
            }

            const Otp = Randomstring.generate({
                charset: "numeric",
                length: 6
            })

            const userData = {
                email,
                otp: bcrypt.hashSync(Otp, 8),
                password
            }

            const mailOption = {
                from: "patelvinit135@gmail.com",
                to: userData.email,
                subject: "nodemailer test",
                html: `<p>Dear user Your one time Password-${Otp}`
            }

            const sendmail = await Send(mailOption)

            if (sendmail && sendmail.match("OK")[0] === "OK") {

                let user = await adminuser.findOne({ email: userData.email })

                if (!user) {
                    return res.status(400).send({ message: "Validation Error", ValidationResult: [{ key: "email", message: "Email not Found" }] })
                }

                let update = await adminuser.updateOne({ email: email }, { otp: userData.otp })

                user = user._doc

                if (!(bcrypt.compareSync(password, user.password))) {
                    return res.status(400).send({ message: "Validation Error", ValidationResult: [{ key: "password", message: "Password is not match" }] })
                }

                delete user.password
                delete user.otp

                const token = jwt.sign({ ...user }, process.env.JWT_SECRATE, { expiresIn: "30d" })

                if (!token) {
                    return res.status(500).send({ message: "Somthing went wrong" })
                }

                return res.status(200).send({ message: "Success", user: { ...user, token: token } })

            }

            return res.status(400).send({ message: "Somthing Went Wrong with Sending OTP" })

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }

    async GetUser(req, res) {
        try {
            const result = await adminuser.find({})
            if (!result) return res.status(400).send({ message: "Somthing Went Wrong" })

            return res.status(200).send({ message: "Success", user: result })

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }

    async UpdateUser(req, res) {
        try {
            const { id } = req.params
            const { body } = req

            console.log(id, body);
            const result = await adminuser.updateOne({ _id: id }, body)

            if (result.modifiedCount > 0 || result.matchedCount > 0) return res.status(200).send({ message: "Success" })

            return res.status(400).send({ message: "Somthing Went Wrong" })

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error" })

        }
    }

    async DeleteUser(req, res) {
        try {
            const { id } = req.params

            const result = await adminuser.deleteOne({ _id: id })
            if (result) return res.status(200).send({ message: "Success" })

            return res.status(400).send({ message: "Somthing Went Wrong" })

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }

    // async Otpverify(req, res){
    //     try {
    //         const { otp , email } = req.body   
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async OtpVerfy(req, res) {
        try {
            const { otp, email } = req.body;

            if (!otp) return res.status(400).send({ message: "Missing Dependency Otp" });
            if (!email) return res.status(400).send({ message: "Missing Dependency Email" });

            // 1. Retrieve the user record from the database based on the provided email
            const user = await adminuser.findOne({ email });

            if (!user) {
                // User with the provided email not found
                return res.status(404).send({ message: "User not found" });
            }
            // 2. Compare the provided OTP with the hashed OTP stored in the user record
            const isOtpValid = await bcrypt.compare(otp, user.otp);

            if (isOtpValid) {
                // OTP is valid, perform the desired action (e.g., grant access, update user status)
                // For example, you can send a success response with a token or update user's verification status
                return res.status(200).send({ message: "OTP verification successful" });
            } else {
                // OTP verification failed
                return res.status(400).send({ message: "Invalid OTP", ValidationResult: [{ key: "otp", message: "Invalid OTP" }] });
            }

        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Internal Server Error" });
        }
    }

}

const adminUserController = new UserController()
module.exports = adminUserController