import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// redner takes App component (what to render) and 'root' - where to render
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
