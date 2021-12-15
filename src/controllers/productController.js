const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    productDetail: (req,res)=>{
        let idProducto = req.params.id
        let productoMostrar = products.find (element => element.id == idProducto)
        res.render("products/productDetail", {productos:productoMostrar})
    }
}


module.exports = productController;