

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as MaterialUi_Paper from "@jsiebern/bs-material-ui/src/MaterialUi_Paper.bs.js";
import * as Core from "@material-ui/core";

var card = Curry._1(Css.style, /* :: */[
      Css.backgroundClip(Css.paddingBox),
      /* :: */[
        Css.border(Css.px(1), Css.solid, Css.transparent),
        /* [] */0
      ]
    ]);

var Styles = {
  card: card
};

function Card(Props) {
  var children = Props.children;
  return React.createElement(Core.Paper, MaterialUi_Paper.makeProps(Caml_option.some(children), card, undefined, /* `Int */[
                  3654863,
                  1
                ], undefined, undefined, undefined, undefined, undefined, undefined, /* () */0));
}

var make = Card;

export {
  Styles ,
  make ,
  
}
/* card Not a pure module */
