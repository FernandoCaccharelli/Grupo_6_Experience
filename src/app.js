const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const port = 3030;

const app = express();

const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware')

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

const publicPath = path.resolve(__dirname, '../public');

const methodOverride = require ("method-override");
app.use (methodOverride ("_method"));


const homeRouter = require("./routes/home");
const howRouter = require ("./routes/how");
const productsRouter = require ("./routes/products")
const userRoutes = require("./routes/users");

app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set ("views", path.resolve(__dirname, "views"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/", homeRouter);
app.use("/products", howRouter);
app.use("/products", productsRouter);
app.use("/user", userRoutes);

//CRUD SPRINT 7
const productsRou = require ("./routes/productsRouter")
app.use("/products", productsRou);



app.listen(port, () => { console.log(`Servidor escuchando en el puerto ${port}`);
});
  
