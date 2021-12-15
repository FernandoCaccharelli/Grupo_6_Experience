const fs = require ("fs");
const path = require('path');

const createController = {
    create: (req,res)=>{
        res.render("products/product-create");
    },
    
}

module.exports = createController;