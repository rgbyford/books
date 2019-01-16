import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import mongoConnect from "config/connection";
//import registerServiceWorker from "./registerServiceWorker";

//mongoConnect ();
console.log ("rendering app");


//export function renderApp () {
ReactDOM.render(<App />, document.getElementById("root"));
//registerServiceWorker();
//}

