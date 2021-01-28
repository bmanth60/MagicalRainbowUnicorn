

import * as React from "react";
import * as MaterialUi_ThemeProvider from "@jsiebern/bs-material-ui/src/MaterialUi_ThemeProvider.bs.js";
import * as Card$MagicalRainbowUnicorn from "./components/Card/Card.bs.js";
import * as Theme$MagicalRainbowUnicorn from "./Theme.bs.js";
import * as TodoList$MagicalRainbowUnicorn from "./components/TodoList/TodoList.bs.js";
import * as BlinkingGreeting$MagicalRainbowUnicorn from "./components/BlinkingGreeting/BlinkingGreeting.bs.js";
import * as MaterialComponent$MagicalRainbowUnicorn from "./components/MaterialComponent/MaterialComponent.bs.js";
import * as ComponentWithHooks$MagicalRainbowUnicorn from "./components/ComponentWithHooks/ComponentWithHooks.bs.js";
import * as FetchedDogPictures$MagicalRainbowUnicorn from "./components/FetchedDogPictures/FetchedDogPictures.bs.js";
import * as ReducerFromReactJSDocs$MagicalRainbowUnicorn from "./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js";
import * as ReasonUsingJSUsingReason$MagicalRainbowUnicorn from "./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js";

function App(Props) {
  return React.createElement(MaterialUi_ThemeProvider.make, {
              children: React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("h1", undefined, "New Component"), React.createElement(ComponentWithHooks$MagicalRainbowUnicorn.make, {}), React.createElement(BlinkingGreeting$MagicalRainbowUnicorn.make, {
                            children: React.createElement("span", undefined, "child")
                          }), React.createElement(FetchedDogPictures$MagicalRainbowUnicorn.make, {}), React.createElement(ReasonUsingJSUsingReason$MagicalRainbowUnicorn.make, {}), React.createElement(ReducerFromReactJSDocs$MagicalRainbowUnicorn.make, {}), React.createElement(MaterialComponent$MagicalRainbowUnicorn.make, {}), React.createElement(Card$MagicalRainbowUnicorn.make, {
                            children: React.createElement("span", undefined, "test")
                          }), React.createElement(TodoList$MagicalRainbowUnicorn.make, {
                            onAdd: (function (_a) {
                                console.log("add");
                                
                              }),
                            onCheck: (function (_i) {
                                console.log("check");
                                
                              }),
                            onToggle: (function (_i) {
                                console.log("toggle");
                                
                              }),
                            onEdit: (function (_i, _s) {
                                console.log("edit");
                                
                              }),
                            editId: 0,
                            items: []
                          }))),
              theme: Theme$MagicalRainbowUnicorn.theme
            });
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
