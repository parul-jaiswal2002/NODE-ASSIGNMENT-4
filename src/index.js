const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req,res) => {
    res.send("Hello World!")
})
app.post("/add" , (req,res) => {
    // const n1 = (req.body.firstnum);
    // const n2 = (req.body.secnum);
    const {n1,n2} = req.body;
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        res.status(400).json({
            status: "error",
            message: "Invalid Data types", 
        })
    }
    sum = n1+n2 
    if(sum < -1000000){
       res.status(400).json({
        message : "Underflow"
       })
    }
    if(sum > 1000000){
        res.status(400).json({
            message : "Overflow"
        })
     }
    else{
        // const {n1,n2} = req.body;
        res.status(200).json({
            status: "success",
            message: "the sum of given two numbers", 
           result: sum
        })
    }
});
app.post("/sub" , (req,res) => {
    const {n1,n2} = req.body;
    console.log(n1,n2)
    if(typeof n1 !== "number" || typeof n2 !== "number"){
        res.status(400).json({
            status: "error",
            message: "Invalid Data types", 
        })
    }
    sum = n1-n2 
    if(sum < -1000000){
       res.status(400).json({
        message : "Underflow"
       })
    }
    if(sum > 1000000){
        res.status(400).json({
            message : "Overflow"
        })
     }
    else{
        res.status(200).json({
            status: "success",
            message: "the difference of given two numbers", 
           result: sum
        })
    }
});
app.post("/multiply" , (req,res) => {
    const {n1,n2} = req.body
    if(typeof(n1) == "string" || typeof(n2) == "string"){
        res.status(400).json({
            status: "error",
            message: "Invalid Data types", 
        })
    }
    sum = n1*n2 
    if(sum < -1000000){
       res.status(400).json({
        message : "Underflow"
       })
    }
    if(sum > 1000000){
        res.status(400).json({
            message : "Overflow"
        })
     }
    else{
        res.status(200).json({
            status: "success",
            message: "the product of given numbers", 
            result : sum
        })
    }
});
app.post("/divide" , (req,res) => {
    const {n1,n2} = req.body
    if(typeof(n1) == "string" || typeof(n2) == "string"){
        res.status(400).json({
            status: "error",
            message: "Invalid Data types", 
        })
    }
    if(n2 === 0){
        res.status(400).json({
            status: "error",
            message: "Cannot divide by zero", 
        })
    }
    sum = n1/n2 
    if(sum < -1000000){
       res.status(400).json({
        message : "Underflow"
       })
    }
    if(sum > 1000000){
        res.status(400).json({
            message : "Overflow"
        })
     }
    else{
        res.status(200).json({
            status: "success",
            message: "the product of given numbers", 
            result : sum
        })
    }
});



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;