const nodemailer = require("nodemailer")

const Send = (mailOption) => {
    return new Promise((resolve, reject) => {
        const Transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"patelvinit135@gmail.com",
                pass:"flcddhvnkuatgmzt"
            }
        })

        Transporter.sendMail(mailOption, function(error, info){
            if(error){
                reject(error)
            }else{
                resolve("Email sent" + info.response)
            }
        })

    })
}

module.exports = Send