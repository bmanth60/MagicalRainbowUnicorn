

import * as React from "react";
import * as BlinkingGreeting$ReasonReactExamples from "./BlinkingGreeting/BlinkingGreeting.bs.js";
import * as MaterialComponent$ReasonReactExamples from "./MaterialComponent/MaterialComponent.bs.js";
import * as ComponentWithHooks$ReasonReactExamples from "./ComponentWithHooks/ComponentWithHooks.bs.js";
import * as FetchedDogPictures$ReasonReactExamples from "./FetchedDogPictures/FetchedDogPictures.bs.js";
import * as ReducerFromReactJSDocs$ReasonReactExamples from "./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js";
import * as ReasonUsingJSUsingReason$ReasonReactExamples from "./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js";

function App(Props) {
  return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("h1", undefined, "New Component"), React.createElement(ComponentWithHooks$ReasonReactExamples.make, { }), React.createElement(BlinkingGreeting$ReasonReactExamples.make, {
                      children: React.createElement("span", undefined, "child")
                    }), React.createElement(FetchedDogPictures$ReasonReactExamples.make, { }), React.createElement(ReasonUsingJSUsingReason$ReasonReactExamples.make, { }), React.createElement(ReducerFromReactJSDocs$ReasonReactExamples.make, { }), React.createElement(MaterialComponent$ReasonReactExamples.make, { })));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
