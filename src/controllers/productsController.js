const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req,res)=>{
        
        res.render("products/products", {productos : products})
    },
  
    create: (req,res)=>{
        res.render("products/product-create");
    },
    store: (req,res)=>{
        let nuevoId = products [products.length -1].id ++;
        let newProduct = {
            id : nuevoId,
            ...req.body,
            image: null
        }
        products.push (newProduct);
        let productsJSON = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect("/products")
    },
    edit: (req,res)=>{
        let idProducto = req.params.id
        let productoMostrar = products.find(element => element.id == idProducto)
        res.render("products/product-edit", {productToEdit: productoMostrar});
    },
    update:(req,res)=>{
        res.send("recibidos los cambios");
     }


}


module.exports = productsController;