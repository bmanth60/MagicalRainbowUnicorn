

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

function padNumber(numString) {
  if (Caml_format.caml_int_of_string(numString) < 10) {
    return "0" + numString;
  } else {
    return numString;
  }
}

function formatTime(seconds) {
  var mins = seconds / 60 | 0;
  var minsString = padNumber(String(mins));
  var seconds$1 = seconds % 60;
  var secondsString = padNumber(String(seconds$1));
  return minsString + (":" + secondsString);
}

function NewComponent$Button(Props) {
  var label = Props.label;
  var onClick = Props.onClick;
  return React.createElement("button", {
              onClick: onClick
            }, label);
}

var Button = {
  make: NewComponent$Button
};

var updateTitle = (
  function updateTitle(remaining) {
    document.title = "⏰ " + remaining + " ⏰";
  });

function NewComponent(Props) {
  var match = React.useReducer((function (state, action) {
          switch (action) {
            case /* Start */0 :
                return /* record */[
                        /* seconds */state[/* seconds */0],
                        /* isTicking */true
                      ];
            case /* Stop */1 :
                return /* record */[
                        /* seconds */state[/* seconds */0],
                        /* isTicking */false
                      ];
            case /* Reset */2 :
                return /* record */[
                        /* seconds */30,
                        /* isTicking */state[/* isTicking */1]
                      ];
            case /* Tick */3 :
                var match = state[/* isTicking */1] && state[/* seconds */0] > 0;
                if (match) {
                  Curry._1(updateTitle, formatTime(state[/* seconds */0] - 1 | 0));
                  return /* record */[
                          /* seconds */state[/* seconds */0] - 1 | 0,
                          /* isTicking */state[/* isTicking */1]
                        ];
                } else {
                  return state;
                }
            
          }
        }), /* record */[
        /* seconds */30,
        /* isTicking */false
      ]);
  var dispatch = match[1];
  var state = match[0];
  React.useEffect((function () {
          var timerId = setInterval((function (param) {
                  return Curry._1(dispatch, /* Tick */3);
                }), 1000);
          return (function (param) {
                    clearInterval(timerId);
                    return /* () */0;
                  });
        }), ([]));
  var match$1 = state[/* isTicking */1];
  return React.createElement("div", {
              style: {
                border: "1px solid black",
                maxWidth: "180px",
                textAlign: "center",
                borderRadius: "8px"
              }
            }, React.createElement("p", {
                  style: {
                    color: "#444444",
                    fontSize: "42px",
                    margin: "16px 0"
                  }
                }, formatTime(state[/* seconds */0])), match$1 ? React.createElement(NewComponent$Button, {
                    label: "STOP",
                    onClick: (function (_event) {
                        return Curry._1(dispatch, /* Stop */1);
                      })
                  }) : React.createElement(React.Fragment, undefined, React.createElement(NewComponent$Button, {
                        label: "START",
                        onClick: (function (_event) {
                            return Curry._1(dispatch, /* Start */0);
                          })
                      }), React.createElement(NewComponent$Button, {
                        label: "RESET",
                        onClick: (function (_event) {
                            return Curry._1(dispatch, /* Reset */2);
                          })
                      })));
}

var make = NewComponent;

export {
  padNumber ,
  formatTime ,
  Button ,
  updateTitle ,
  make ,
  
}
/* updateTitle Not a pure module */
