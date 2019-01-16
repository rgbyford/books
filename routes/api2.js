const mongo = require("../config/connection.js");

let booksLoaded;

async function googleBooks(searchFor, res) {
  var books = require('google-books-search');
  console.log ("searchFor: ", searchFor.q);
  books.search(searchFor.q, function (error, results) {
    if (!error) {
//      console.log("Found: ", results);
      booksLoaded = results;
      res.send(JSON.stringify(results));
    } else {
      console.log(error);
    }
    return (results);
  });
}

async function mongoSave (id) {
  console.log ("mS: ", id);
  booksLoaded.forEach(book => {
    if (book.id === id) {
      console.log ("found the id");
      mongo.insertBook (book);
      return;
    }
  });
}

async function mongoGetSaved (res) {
  console.log ("mGS: ");
  let books = mongo.getSaved ();
  res.send(JSON.stringify(books));
}



module.exports = {googleBooks, mongoSave, mongoGetSaved};
