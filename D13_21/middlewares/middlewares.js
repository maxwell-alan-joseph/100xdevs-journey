const express = require ("express");

const app = express();

//adding middleware functions 

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

app.get("/kidney-checkup", userValidator, kidneyValidator, (req, res) => {
    res.send("Your kidney is healthy")
})


app.get("/heart-checkup", userValidator, (req, res) => {
    res.send("Your heart is healthy")
})

app.listen(3000, ()=> {
    console.log("middleware server started on port 3000")
})