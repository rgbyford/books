//const appStuff = require("../server.js");
//import appListen from "../server.js";
//const appStuff = require ("../server.js");

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

let mongoConn = false;

//function mongoConnect () {
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});
//}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async function () {
    console.log("we're connected!");
    const BookSchema = new mongoose.Schema({
        title: String,
        authors: String,
        description: String,
        image: String,
        thumbnail: String,
        id: String
    });
    Book = mongoose.model("Book", BookSchema);
    aoAlreadySaved = await getSaved();
//    appStuff.appEmit();
//    appStuff.appListen ();
//    console.log("AS len:", aoAlreadySaved.length);
});

let Book;
let aoAlreadySaved = [];
console.log("init aoAS");

async function getSaved () {
    if (mongoConn === false) {
        setTimeout(getSaved, 100); /* this checks the flag every 100 milliseconds*/
    } else {
        return (Book.find());
    }
}

function insertBook(oBook) {
    let dbBook = new Book(oBook);
    console.log("insertBook id: ", dbBook.id);
    // if it is already saved, do nothing
    // otherwise do an insert
     for (let j = 0; j < aoAlreadySaved.length; j++) { // check if already saved
        if (aoAlreadySaved[j].id === oBook.id) {
            console.log ("already here");
            return; // already here
        }
    }
    console.log("Not here - add to AlreadySaved");
    aoAlreadySaved.push(oBook);
    dbBook.save(function (err) {
        if (err) {
            console.log ("mongo error: ", err);
            return console.error(err);
        }
        else {
            console.log ("Saved");
        }
        //            console.log(dbBook);
    });
}

module.exports = {
    insertBook: insertBook,
    getSaved: getSaved
//    mongoConnect: mongoConnect
}