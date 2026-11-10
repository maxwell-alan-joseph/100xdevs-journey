const express = require("express")
const app = express();

app.use(express.json());

const notesDB = [];

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