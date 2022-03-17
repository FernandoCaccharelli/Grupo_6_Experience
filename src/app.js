const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const port = 3030;

const app = express();

const rememberMiddleware = require("./middlewares/rememberMiddleware")
const userLoggedMiddleware = require ('./middlewares/userLoggedMiddleware')

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(rememberMiddleware);
app.use(userLoggedMiddleware);

const publicPath = path.resolve(__dirname, '../public');

const methodOverride = require ("method-override");
app.use (methodOverride ("_method"));


const homeRouter = require("./routes/home");
const howRouter = require ("./routes/how");
const productsRouter = require ("./routes/products")
const userRoutes = require("./routes/users");

//Aquí llamo a la ruta de las api de movies
const apiProductsRouter = require('./routes/api/productsA')
const apiUsersRouter = require("./routes/api/usersA");

app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set ("views", path.resolve(__dirname, "views"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/", homeRouter);
app.use("/products", howRouter);
app.use("/products", productsRouter);
app.use("/user", userRoutes);

//mis recursos(APIs)
app.use("/api", apiProductsRouter);
app.use("/api/users", apiUsersRouter);


app.listen(port, () => { console.log(`Servidor escuchando en el puerto ${port}`);
});
  
