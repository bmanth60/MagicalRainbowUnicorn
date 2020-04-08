

import * as React from "react";
import * as NewComponent$ReasonReactExamples from "./NewComponent/NewComponent.bs.js";

function App(Props) {
  return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("h1", undefined, "New Component"), React.createElement(NewComponent$ReasonReactExamples.make, { })));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
