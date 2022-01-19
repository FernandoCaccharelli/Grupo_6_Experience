const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');


const productsController = {

    //Todos los productos
    products: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products/products", {productos : products})
    },

     //Crear producto
     create: (req,res)=>{
        res.render("products/product-create");
    },
    store: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let nuevoId = products [products.length -1].id +1;
        let newProduct = {
            id : nuevoId,
            ...req.body,
            image:req.file == undefined ? "default-image.png": req.file.filename
        }
        products.push (newProduct);
        let productsJSON = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, productsJSON);
        res.redirect("/products")
    },
    //carrito de compras 
    basket: (req,res)=>{
        res.render("users/basket")
    },
    //detalle
    productDetail: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idProducto = req.params.id
       let productoMostrar = products.find (element => element.id == idProducto)
        res.render("products/productDetail", {productos:productoMostrar})
   },
    //editar producto
   edit: (req,res)=>{
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    let idProducto = req.params.id
    let productoMostrar = products.find(element => element.id == idProducto)
   res.render("products/product-edit", {productToEdit: productoMostrar});
 },
 update:(req,res)=>{
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    let id = req.params.id
     let modifiedProducts = products.map(element => {
       if (element.id == id){
         return element = {
           id: id,
           name: element.name,
           ...req.body,
           image: req.file == undefined ? element.image : req.file.filename
        }
       }
        return element
     })

    let productsJSON = JSON.stringify(modifiedProducts, null, 2)
    fs.writeFileSync(productsFilePath,productsJSON)
    res.redirect('/products')      
},
  
    //borrar producto
    destroy: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idProducto = req.params.id;
          let finalList = products.filter(element =>element.id != idProducto);
          fs.writeFileSync(productsFilePath, JSON.stringify(finalList,null,2)) 
          res.redirect('/products') 
       
    },
    
    
}


module.exports = productsController;

