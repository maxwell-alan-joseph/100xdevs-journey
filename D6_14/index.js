const express = require("express")
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

    users.push({
        username, password
    })

    res.json({
        message: "you have signed up"
    })
})

app.post("/notes", (req, res) => {
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