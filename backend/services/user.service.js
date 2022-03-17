const db = require("../modal/users");

class userService {

    //create
    static async createUser(data){
        try {
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                role: data.role
            }
            const _create = await new db(userData).save();
            return _create;
        } catch (error) {
            console.log(error);
        }
    }

    //update
    static async updateUser(data){
        try {
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                role: data.role,
                modifiedDate: Date.now()
            }
            const _update = await db.updateOne(userData);
            return _update;
        } catch (error) {
            console.log(error);
        }
    }

    //delete
    static async deleteUser(userId){
        try {
            if(userId){
                const _delete = await db.findByIdAndDelete(userId);
                return _delete;
            }
        } catch (error) {
            console.log(error);
        }
    }

    //findAll
    static async getUsers(){
        try {
            const _allUsers = await db.find();
            return _allUsers;
        } catch (error) {
            console.log(error);
        }
    }

    //findOne
    static async getUserById(userId){
        try {
            if(userId){
                const _singleUser = await db.findById(userId);
                return _singleUser;
            }
        } catch (error) {
            console.log(error);
        }
    }

    //findOneByEmail
    static async getUserByEmail(data){
        try {
            const { email } = data;
            
            const _res = await db.findOne({ email })
            return _res;
            
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = userService;