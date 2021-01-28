

import * as React from "react";
import * as Core from "@material-ui/core";

function MUITextField(Props) {
  var props = Props.props;
  return React.cloneElement(React.createElement(Core.TextField, {}), props);
}

var make = MUITextField;

export {
  make ,
  
}
/* react Not a pure module */
