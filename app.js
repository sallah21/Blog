const express = require('express');
const app = express();
const http = require('http');
const morgan = require('morgan');
const path = require("path");
const bodyparser= require("body-parser");
const cookieparser = require('cookie-parser');
const flash = require("connect-flash");

//app.use(morgan('dev')) //pobiera dane co robi serwer
// app.get('/',(req,res)=>{
//  res.send(public/index.html);
//  res.send(console.log("Hello world"))
//})
//app.listen(3000, ()=> console.log("Master I started server for you")); // nasłuchuje na porcie 3000 i wysyłą logi na serwerze
app.set("views",path.join(__dirname, "views"));
app.set("view engine", "pug");
app.set(express.static(path.join(__dirname, "public")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieparser());
app.use(flash());
module.exports = app;
