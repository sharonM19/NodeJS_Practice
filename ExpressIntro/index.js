const express = require("express");
const app = express();

//app.use((req , res) => {
     //console.log("WE GOT A NEW REQUEST")
    // res.send(" WE GOT YOUR REQUEST , THIS IS THE RESPONSE")
     //res.send({color : red})
    // res.send("<h4>This is my webpage</h4>")
//})

app.get('/',(req,res) => {
   res.send(" this is my home page");
})

app.get('/cats',(req,res) => {
    res.send("MEOW");
 })

 app.post('/cats',(req,res) => {
    res.send("this is a post request");
 })

 app.get('/dogs',(req,res) => {
    res.send(" BOW BOW");
 })

 app.get('*',(req,res) => {
    res.send("I CANNOT FIND THE PATH");
 })

app.listen(3000 , () => {
    console.log("LISTENING TO PORT 3000")
})