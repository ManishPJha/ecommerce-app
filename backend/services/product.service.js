const db = require("../modal/products");

class productService {
    
    //create
    static async createProduct(data){
        try{
            const productData = {
                title: data.title,
                description: data.description,
                price: data.price,
                rating: data.rating,
            }
            const _create = await new db(productData).save();
            return _create;
        }
        catch(err){
            console.log(err);
        }
    }

    //update
    static async updateProduct(data){
        try {
            const produsctData = {
                title: data.title,
                description: data.description,
                price: data.price,
                rating: data.rating,
                modifiedDate: data.modifiedDate
            }
            // const _update = await db.findByIdAndUpdate
            // const _update = await db.updateOne(produsctData, {
            //     $set: {
            //         modifiedDate: Date.now()
            //     }
            // });
            const _update = await db.updateOne(produsctData);
            return _update; 
        } catch (error) {
            console.log(error);
        }
    }

    //delete
    static async deleteProduct(productId){
        try {
            if(productId){
                const _delete = await db.findOneAndDelete(productId);
                return _delete;
            }
        } catch (error) {
            console.log(error);
        }
    }

    //find
    static async getProducts(){
        try {
            const _getAll = db.find();
            return _getAll;
        } catch (error) {
            console.log(error);
        }
    }

    //findOne
    static async getProductByID(productId){
        try {
            if(productId){
                const _getById = await db.findById(productId);
                return _getById;
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = productService;