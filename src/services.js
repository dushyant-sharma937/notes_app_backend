// here we are getting express as a string and later on we will initialize the express as function to the app.
const express = require('express');
const app = express();
// const dotenv = require("dotenv");
// dotenv.config();
const mongoose = require('mongoose');

// true: Nested objects(correct){can read them}
// false: Nested objects(not correct){can't read them}
// Nested object:   
//      {
//          object: {
//              }
//      }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbPath="mongodb+srv://dushyantsharma1231:Iamdushyant@cluster0.o8yt63e.mongodb.net/?retryWrites=true&w=majority";
// console.log(`mongodbPath: ${process.env.mongodbPath}`);

// const mongodbPath = process.env.mongodbURI;
mongoose.connect(mongodbPath).then(function(){
    app.get('/', function(req, res){
        const response = {status: res.statusCode, message: "API is working properly...."};
        res.json(response);
    });
    const noteRouter = require('./routes/note');
    app.use("/notes", noteRouter); 
});




// using this command we can run our server to the browser. the function we added just to look
// better whenever we run a server it will show the statement we give in the console
const PORT = process.env.PORT || 5000
app.listen(PORT, function(req, res){
    console.log('Server started at port: ' + PORT);
});