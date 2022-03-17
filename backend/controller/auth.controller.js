const { userService } = require("../services");
const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();

class authController{

    //signup
    static async authSignup(req, res, next){
        const { firstName, lastName, email, password } = req.body;
        const _isEmailExist = await userService.getUserByEmail({ email });

        if(!_isEmailExist){
            bcrypt.hash(password, 10, async (error, hash) => {
                const authData = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hash
                }
                if(error){
                    res.status(500).json({ error: error });
                }else{
                    const _response = await authService.userSignup(authData);

                    if(_response){
                        //transporter
                        let transporter = nodemailer.createTransport(smtpTransport({
                            service: "gmail",
                            host: 'smtp.gmail.com',
                            port: 587,
                            secure: false,
                            auth: {
                                user: process.env.SENDER_EMAIL,
                                pass: process.env.EMAIL_PASSWORD,
                            }
                        }))

                        transporter.sendMail({
                            from: process.env.SENDER_EMAIL,
                            to: `${email}`,
                            subject: "Welcome to E-Store",
                            text: `Hello Dear ${email}`,
                            html: `Hello <b>${firstName+' '+lastName}</b>,<br />Welcome to E-store feel free to get awesome deals here. <br /><img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/maq07rzwhayt5qvwarw6.jpg" alt="mail_banner" height="300px" width="500px"/><br /> We are happy to have you with us. Let's dig here and browse awesome products for your daily life.<br />`,
                        })
                        .then(
                            res => console.log(`email sent successfully...`)
                        ).catch(
                            err => console.log(err)
                        )

                        res.json({ status: true, data: _response, message: "registration successfull." });
                    }else{
                        res.json({ status: false, message: "registration failed." });
                    }
                }
            })
            
        }else{
            res.json({ status: false, message: "email already exist." });
        }

    }

    //signin
    static async authSignin(req, res, next){
        const { email, password } = req.body;
        const _isEmailExist = await userService.getUserByEmail({ email });
        
        if(_isEmailExist){
            // console.log(`sign in data ----->`,_isEmailExist.password)
            bcrypt.compare(password, _isEmailExist.password, async (error, result) => {
                if(error){
                    res.status(500).json({ error: error });
                }else if(result){
                    const { _id, email, password } = _isEmailExist;
                    const storeData = {
                        id: _id,
                        email: email,
                        password: password
                    }
                    const token = jwt.sign(storeData, process.env.SECRET_KEY, { expiresIn: "365d" });
                    // localStorage.setItem("authToken", token);
                    res.json({ status: true, token: token, message: "authentication has been successfull." })
                }else{
                    res.status(401).json({ error: "entered password is incorrect." })
                }
            })
        }else{
            res.json({ status: false, message: "no user match found with this email" });
        }

        // const _response = await authService.userSignin(req.body);
        // if(_response){
        //     res.json({ status: true, data: _response, message: "login successfull." });
        // }else{
        //     res.json({ status: false, message: "login failed." });
        // }
    }

}

module.exports = authController;