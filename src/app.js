const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');

const homeRouter = require("./routes/home");
const productRouter = require ("./routes/productDetail");
const loginRouter = require ("./routes/login");

app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.set ("views", path.resolve(__dirname, "./views/products"));



app.use("/", homeRouter);

app.use("/poductDetail", productRouter);

app.use ("/login", loginRouter);




app.get('/basket', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/basket.html'))
  })



  app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
  })
 
  app.get('/how', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/how.html'))
  })
  app.get('/how', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
  })

 
  app.listen(3030, () => { console.log(`Servidor escuchando en el puerto ${3030}`);
});
  
  

 
  
