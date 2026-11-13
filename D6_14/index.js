const express = require ("express");
const app  = express();

app.use(express.json());
const notesDb = []

app.post("/notes", (req, res) => {
    const note = req.body.note;
    notesDb.push(note);

    res.json({
        message: "Done"
    })
})

app.get("/notes", (req, res) => {
    res.json({
        notesDb
    })
})

app.get("/", (req, res) => {
    res.sendFile("/Users/joe/100xdevs-journey/D6_14/index.js")
})

app.listen( 3000, () => {
    console.log("server starting @3000");
})