

import * as React from "react";

function ReasonReactCard(Props) {
  var style = Props.style;
  return React.createElement("div", {
              style: style
            }, "This is a ReasonReact card");
}

var make = ReasonReactCard;

export {
  make ,
  
}
/* react Not a pure module */
