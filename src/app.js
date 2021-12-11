const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');

const homeRouter = require("./routes/home");
const productRouter = require ("./routes/product");
const loginRouter = require ("./routes/login");
const basketRouter = require("./routes/basket");
const registerRouter = require ("./routes/register");
const howRouter = require ("./routes/how");

app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.set ("views", path.resolve(__dirname, "views"));



app.use("/", homeRouter);

app.use("/product", productRouter);

app.use ("/login", loginRouter);

app.use("/basket", basketRouter);

app.use ("/register", registerRouter);

app.use("/how", howRouter);


//create
const createRouter = require ("./routes/create");

app.use("/create", createRouter);



 
  app.listen(3030, () => { console.log(`Servidor escuchando en el puerto ${3030}`);
});
  
  

 
  
