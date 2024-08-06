const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT ?? 3000;

    app.use(session({
        secret: "Shh, It´s a secret"
    }));

// Config. de archivos estaticos en la carpeta public
app.use(express.static("public"));

// Config. de Templates Engines
app.set("view engine", "ejs");

//Config. para capturar datos mediante POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");

app.use("/", mainRoutes);
app.use("/users", userRoutes);
app.use("/products", productsRoutes);



app.listen(PORT, (err)=>{
    console.log(
        err
        ? "Se produjo un error al levantar el servidor"
        : `Servidor levantado en http://localhost:${PORT}`
    );
})