const express = require ("express");
const server = express();

server.use(express.json());


function userValidation(req, res, next) {
    const username = req.query.username;
    const password = req.query.password;

    if (username != "alan" || password != "123") {
        res.status(403).send("credentials are invalid")
    }
    next();
}

function kidneyValidator(req, res, next){
    const kidneyId = req.query.kidneyId;
    
    if(kidneyId != 1 && kidneyId == 2) {
        res.status(401).send("Your kidneyId's are invalid")
    }
    next();
}

server.get("/kidney-checkup", userValidation, kidneyValidator,  (req, res) => {
    res.send("Your kidney is healthy")
})

server.get("/heart-checkup", userValidation, (req, res) => {
    res.send("Your heart is healthy")
})

server.use( (err, req, res, next) => {
    res.send("something wrong with the server")
})


server.listen(3000, () => {
    console.log("middleware server started to listen on port 3000")
})