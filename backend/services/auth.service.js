const db = require("../modal/users");

class authService{

    //signup
    static async userSignup(data){
        try {
            const { firstName, lastName, email, password } = data;
            const userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
            const _response = await new db(userData).save();
            return _response;

        } catch (error) {
            console.log(error);
        }
    }

    //signin
    // static async userSignin(data){
    //     try {

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

module.exports = authService;