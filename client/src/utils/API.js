import axios from "axios";

export function getBooks (query) {
  return new Promise((resolve, reject) => {
    //    let query_temp = "Harry Potter";
    resolve(axios.get("/api/books", {
      params: {
        q: query
      }
    }));
  });
}

export function saveBook (title) {
  console.log ("sB: ", title);
  return new Promise((resolve, reject) => {
    //    let query_temp = "Harry Potter";
    resolve(axios.post("/api/books", {
      params: {
        q: title
      }
    }));
  });
}

