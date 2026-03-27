const dotenv = require("dotenv");
dotenv.config();

const path= require("path");
const express = require("express");

const app = express();
const port = process.env.PORT;

const publicPath = path.join(__dirname,"public");
const pagesPath = path.join(publicPath, "pages");

app.listen(port, function(){
    console.log(`Rodando servidor no http://localhost:${port}`);
});

app.use("/assets", express.static(path.join(publicPath,"assets")));

app.get("/", function(req, res){
    res.sendFile(path.join(pagesPath,"index.html"))
});

