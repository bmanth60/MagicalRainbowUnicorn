

import * as React from "react";
import * as Styles from "@material-ui/core/styles";
import * as Card$ReasonReactExamples from "./components/Card/Card.bs.js";
import * as MaterialUi_ThemeProvider from "@jsiebern/bs-material-ui/src/MaterialUi_ThemeProvider.bs.js";
import * as BlinkingGreeting$ReasonReactExamples from "./components/BlinkingGreeting/BlinkingGreeting.bs.js";
import * as MaterialComponent$ReasonReactExamples from "./components/MaterialComponent/MaterialComponent.bs.js";
import * as ComponentWithHooks$ReasonReactExamples from "./components/ComponentWithHooks/ComponentWithHooks.bs.js";
import * as FetchedDogPictures$ReasonReactExamples from "./components/FetchedDogPictures/FetchedDogPictures.bs.js";
import * as ReducerFromReactJSDocs$ReasonReactExamples from "./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js";
import * as ReasonUsingJSUsingReason$ReasonReactExamples from "./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js";

function App(Props) {
  return React.createElement(MaterialUi_ThemeProvider.make, {
              children: React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("h1", undefined, "New Component"), React.createElement(ComponentWithHooks$ReasonReactExamples.make, {}), React.createElement(BlinkingGreeting$ReasonReactExamples.make, {
                            children: React.createElement("span", undefined, "child")
                          }), React.createElement(FetchedDogPictures$ReasonReactExamples.make, {}), React.createElement(ReasonUsingJSUsingReason$ReasonReactExamples.make, {}), React.createElement(ReducerFromReactJSDocs$ReasonReactExamples.make, {}), React.createElement(MaterialComponent$ReasonReactExamples.make, {}), React.createElement(Card$ReasonReactExamples.make, {
                            children: React.createElement("span", undefined, "test")
                          }))),
              theme: Styles.createMuiTheme({})
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
