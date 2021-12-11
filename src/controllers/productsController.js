const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));





const productsController = {
    products: (req,res)=>{
        
        res.render("products/products", { productos : products})
    }
}


module.exports = productsController;