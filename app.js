const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(3030, () => { console.log(`Servidor escuchando en el puerto ${3030}`);
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/basket', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/basket.html'))
  })

  app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
  })

  app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
  })
  app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
  })
  app.get('/how', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/how.html'))
  })
  app.get('/how', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
  })

  
  

 
  
