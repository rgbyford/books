async function makeApiCall(searchFor, res) {
  var books = require('google-books-search');
  //searchFor = "Harry Potter";
  console.log ("searchFor: ", searchFor.q);
  books.search(searchFor.q, function (error, results) {
    if (!error) {
//      console.log ("Got 'em");
      console.log("Found: ", results.length);
      res.send(JSON.stringify(results));
    } else {
      console.log(error);
    }
    return (results);
  });
}
module.exports = {makeApiCall};
