

import * as React from "react";
import * as Core from "@material-ui/core";

function MaterialComponent(Props) {
  return React.createElement(Core.Paper, {
              children: React.createElement(Core.Tabs, {
                    children: null,
                    indicatorColor: "primary",
                    textColor: "primary"
                  }, React.createElement(Core.Tab, {
                        label: "Active"
                      }), React.createElement(Core.Tab, {
                        disabled: true,
                        label: "Disabled"
                      }), React.createElement(Core.Tab, {
                        label: "Active"
                      })),
              square: true
            });
}

var make = MaterialComponent;

export {
  make ,
  
}
/* react Not a pure module */
