

import * as React from "react";
import * as Caml_splice_call from "bs-platform/lib/es6/caml_splice_call.js";
import * as Core from "@material-ui/core";

function MUITypography(Props) {
  var props = Props.props;
  var childrenOpt = Props.children;
  var children = childrenOpt !== undefined ? childrenOpt : [];
  return Caml_splice_call.spliceApply(React.cloneElement, [
              React.createElement(Core.Typography, {}),
              props,
              children
            ]);
}

var make = MUITypography;

export {
  make ,
  
}
/* react Not a pure module */
