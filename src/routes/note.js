const express = require('express');
const router = express.Router();

const Note = require('./../models/notes');

// here app.get will get the routes. secondly it takes function which takes request and result. 
// we can send the result using res.send to our route.


router.post('/list', async function(req, res){
    var notes = await Note.find({userid: req.body.userid});
    res.json(notes);
})


router.post('/add', async function(req, res){    
    // by using this deleteOne, if a note will exists, it will delete it before add it to the
    // list second time. Hence only one node with an id will be created.
    await Note.deleteOne({id: req.body.id});

    var newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
    });
    await newNote.save();
    // const response = {message: "New Note Created!"};
    res.json("New Note created!" + ` id: ${req.body.id}`);
})

router.post('/delete', async function(req, res){
    await Note.deleteOne({id: req.body.id});
    res.json('Note deleted!' + `id: ${req.body.id}`);
})


module.exports = router;