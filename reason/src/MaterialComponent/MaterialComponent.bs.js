

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as MaterialUi_Tab from "@jsiebern/bs-material-ui/src/MaterialUi_Tab.bs.js";
import * as MaterialUi_Tabs from "@jsiebern/bs-material-ui/src/MaterialUi_Tabs.bs.js";
import * as MaterialUi_Paper from "@jsiebern/bs-material-ui/src/MaterialUi_Paper.bs.js";
import * as Core from "@material-ui/core";

function MaterialComponent(Props) {
  return React.createElement(Core.Paper, MaterialUi_Paper.makeProps(Caml_option.some(React.createElement(Core.Tabs, MaterialUi_Tabs.makeProps(undefined, Caml_option.some(null), undefined, undefined, /* Primary */-791844958, undefined, undefined, undefined, undefined, undefined, /* Primary */-791844958, "value", undefined, undefined, undefined, undefined, undefined, /* () */0), React.createElement(Core.Tab, MaterialUi_Tab.makeProps(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Active", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)), React.createElement(Core.Tab, MaterialUi_Tab.makeProps(undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, "Disabled", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)), React.createElement(Core.Tab, MaterialUi_Tab.makeProps(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Active", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* () */0)))), undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, /* () */0));
}

var make = MaterialComponent;

export {
  make ,
  
}
/* react Not a pure module */
