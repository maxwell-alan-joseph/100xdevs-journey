const express = require ("express");
//creating an instance of the express
const server  = express();

server.use(express.json()); //middleware 
const allNotes = []; //localstorage



server.get("/notes", (req, res) => {
    res.json ({
        allNotes
    })
})

server.listen(3000, () => {
    console.log("server started at port 3000");
})