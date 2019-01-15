const api2 = require ('../routes/api2.js');
const router = require("express").Router();

router.get("/books", (req, res) => {
  console.log("server get books");
  console.log ("Books wanted: ", req.query);
  api2.makeApiCall(req.query, res);
});

router.post("/books", (req, res) => {
  console.log ("Book to be saved: ", req.body.params.q);
  api2.mongoSave (req.body.params.q);
});

module.exports = router;


//module.exports = router;
// these two make the app come up, but router complains
// Commenting them both out does the same thing!
//module.exports = {makeApiCall};
// and reversing the order reverses the output

// substituting the following causes no router complaints
// but the app doesn't come up.
// Commenting out the second line does the same thing
//module.exports = makeApiCall;

// this goes back to app up, router complaining
//module.exports = {makeApiCall, router};

// this goes back to app up, router complaining
//module.exports.router = router;
//module.exports.makeApiCall = makeApiCall;

// this makes the router happy, but not the app
// (along with calling apiRoutes.router)
//module.exports = {makeApiCall: makeApiCall, router: router};

// ditto this
//module.exports = {router: router};
