const fs = require("fs")
const path = require("path");

let noteData;

module.exports = function (app) {
    fs.readFile("db.json", "utf8", function (err, data) {
        if (err) throw err;
        noteData = JSON.parse(data);
    })

    app.get("/api/notes", function (req, res) {
        res.json(noteData);
    });


    app.post("/api/notes", function (req, res) {
        console.log("test");
        let newNote = req.body;
        noteData.push(newNote);
        let parseData = JSON.stringify(noteData)
        fs.writeFile(path.join('db.json'), parseData, (err) => {
            if (err) throw err;
        })
        res.json(noteData);
    });

    app.delete("/api/notes/:id", function (req, res) {
        console.log("erase");
        let deleteData = req.params.id;
        for (i=0; i<noteData.length; i++) {
    
            if (deleteData === noteData[i].title) {
                noteData.splice(i, 1)
            };
        };
        let parseData = JSON.stringify(noteData)
        fs.writeFile(path.join('db.json'), parseData, (err) => {
           if (err) throw err;
       })
        console.log(noteData)
        res.json(noteData)
    })}