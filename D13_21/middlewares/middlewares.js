const express = require ("express");
const app = express(); //instance of the express module

let requestCount = 0;
//middleware
function calculateRequests (req, res, next){
    requestCount ++;
    console.log(requestCount);
    next();
}

app.use(calculateRequests);// a global middleware function that will be applicable for the whole routes that 
//comes after this line of code

//adding middleware functions 

//middleware
function userValidator (req, res, next) {
    const username = req.query.username;
    const password = req.query.password;

    if(!(username === "alan" && password === "123")){
        res.status(403).json({
            message: "User Credentials"
        })
    } else {
        next();
    }
}

//middleware
function kidneyValidator(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId !=2){
        res.status(403).json({
            message: "Your kidneyId is invalid"
        })
    } else {
        next();
    }
}

//get handler for the route /kidney-checkup
app.get("/kidney-checkup", userValidator, kidneyValidator, (req, res) => {
    res.send("Your kidney is healthy")
})

//get handler for the route /heart-checkup
app.get("/heart-checkup", userValidator, (req, res) => {
    res.send("Your heart is healthy")
})


app.listen(3000, ()=> {
    console.log("middleware server started on port 3000")
})