const { productService } = require("../services");

class productController{
    
    //create
    static async createProduct(req, res, next){
        try {
            const _create = await productService.createProduct(req.body);
            res.json({ status: true, data: _create });
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    //update
    static async updateProduct(req, res, next){
        try {
            const { title, description, price, rating } = req.body;
            const requestData = {
                title: title,
                description: description,
                price: price,
                rating: rating
            };

            const _update = await productService.updateProduct(requestData)

            if(_update.modifiedCount === 0){
                throw new Error("Unable to update product, error occurs.")
            }

            res.json({ status: true, data: _update });
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    //delete
    static async deleteProduct(req, res, next){
        try {
            const id = req.params.id;
            console.log(`id`,id);
            const _delete = await productService.deleteProduct(id);

            res.json({ status: true, data: _delete })
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    //find
    static async getProducts(req, res, next){
        try {
            const _allProducts = await productService.getProducts();
            res.json({ status: true, data: _allProducts })
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    //findOne
    static async getProductById(req, res, next){
        try {
            const id = req.params.id;
            const _productList = await productService.getProductByID(id);

            res.json({ status: true, data: _productList});
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

}

module.exports = productController;