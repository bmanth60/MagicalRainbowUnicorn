

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as MaterialUi_Types from "@jsiebern/bs-material-ui/src/MaterialUi_Types.bs.js";
import * as Core from "@material-ui/core";
import * as Theme$ReasonReactExamples from "../../Theme.bs.js";

var card = Curry._1(Css.style, {
      hd: Css.backgroundClip(Css.paddingBox),
      tl: {
        hd: Css.border(Css.px(1), Css.solid, Css.transparent),
        tl: {
          hd: Css.padding(Css.px(Curry._1(Theme$ReasonReactExamples.theme.spacing, 1))),
          tl: /* [] */0
        }
      }
    });

var Styles = {
  card: card
};

function Card(Props) {
  var children = Props.children;
  return React.createElement(Core.Paper, {
              children: children,
              className: card,
              elevation: MaterialUi_Types.$$Number.$$int(1)
            });
}

var make = Card;

export {
  Styles ,
  make ,
  
}
/* card Not a pure module */
