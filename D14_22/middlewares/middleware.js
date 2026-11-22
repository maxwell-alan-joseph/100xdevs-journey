const express = require ("express");
const server = express();

server.use(express.json());


function userValidation(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (username != "alan" || password != "123") {
        res.status(403).send("credentials are invalid")
    }
    next();
}

function kidneyValidator(req, res, next){
    const kidneyId = req.body.kidneyId;
    
    if(kidneyId != 1 && kidneyId == 2) {
        res.status(401).send("Your kidneyId's are invalid")
    }
}

server.get("/kidney-checkup", (req, res) => {
    
})

server.get("/heart-checkup", (req, res) => {

})




server.listen(3000, () => {
    console.log("middleware server started to listen on port 3000")
})