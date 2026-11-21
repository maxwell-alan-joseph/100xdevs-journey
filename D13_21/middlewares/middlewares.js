const express = require ("express");

const app = express();

//
app.get("/health-checkup", (req, res) => {
    console.log(req.query);
    const kidneyId = req.query.kidneyId;
    const username = req.query.username;
    const password = req.query.password;

    if(username != "alan" || password != "123") {
        res.status(403).json({
            msg: "invalid credentials"
        });
        return; //early return so that if this case is not passed 
        //the console handler stops here 
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(402).json({
            msg: "your kidneyId is invalid"
        });
        return; //again an early return 
//return can be inside if statement too but it will not be an early return 
//scenario the handler still runs if the return is inside the if  
    }

    res.send("Your heart is healthy")
})

app.listen(3000, ()=> {
    console.log("middleware server started on port 3000")
})