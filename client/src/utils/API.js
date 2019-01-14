import axios from "axios";

export default {
  getBooks: function (query) {
    return new Promise((resolve, reject) => {
        //    let query_temp = "Harry Potter";
        resolve(axios.get("/api/books", {
          params: {
            q: query
          }
        }));
      });
    }
  };