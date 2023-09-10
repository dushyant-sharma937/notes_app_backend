// Steps:
// 1. Define Schema-> Note: id, userid, title, content, dateAdded
// 2. Create Model: <model name> <schema>

const mongoose = require('mongoose');


// Step 1:-
const noteSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    }, 
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date.now,  
    },
});


// Step 2:-
// also we have to export this schema so that we can use it outside anywhere
module.exports = mongoose.model("Note", noteSchema);


