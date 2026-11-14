const express = require("express")
const jwt = requrie("jsonwebtoken")

const app = express();

app.use(express.json());

const notesDB = [];
const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find( user => user.username === username);
    if (userExists) {
        return res.status(403).json({
            message: "username already exists"
        })
    }
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);

    if (!userExists) {
        return res.status(403).json({
            message: "incorrect credentials";
        })
    }

    const token = jwt.sign({
        username: username 
    }, "hashedsecret");

    res.json({
        token: token
    })

        users.push({
        username, password
    })

    res.json({
        message: "you have signed up"
    })
})


app.post("/notes", (req, res) => {

    //checking the right header for the, extacting the user from the header
    const token = req.headers.token;

    if(!token) {
        res.status(403).send({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, "hashedsecret")
    const username = decoded.username;

    if(!username) {
        return  res.json(403).send({
            message: "invalid token"
        })
    }


     const notesBackend = req.body.notesBackend;
     notesDB.push[notesBackend];

     res.json({
        message: "new note added"
     })
})

app.get("/notes", (req, res) => {
    res.json({
        notesDB
    })
})

app.get("/", (req, res) => {
    res.sendFile("/Users/joe/100xdevs-journey/D2_10/index.html")
})

app.listen(3000, () => {
    console.log("server started @3000")
})