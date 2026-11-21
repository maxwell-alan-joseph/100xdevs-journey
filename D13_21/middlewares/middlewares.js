const express = require ("express");

const app = express();

app.get("/health-checkup", (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.query.username;
    const password = req.query.password;


    res.send("Your heart is healthy")
})

app.listen(3000, ()=> {
    console.log("middleware server started on port 3000")
})