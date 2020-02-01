'use strict';

var React = require("react");

function NewComponent(Props) {
  return React.createElement("div", undefined, "Hello World");
}

var make = NewComponent;

exports.make = make;
/* react Not a pure module */
