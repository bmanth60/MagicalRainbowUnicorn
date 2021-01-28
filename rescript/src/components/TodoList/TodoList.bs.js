

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as MaterialUi_Grid from "@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js";
import * as Core from "@material-ui/core";
import * as Card$MagicalRainbowUnicorn from "../Card/Card.bs.js";
import * as Theme$MagicalRainbowUnicorn from "../../Theme.bs.js";
import * as MUITextField$MagicalRainbowUnicorn from "../MUITextField/MUITextField.bs.js";

var margin = Curry._1(Css.style, {
      hd: Css.margin(Css.px(Curry._1(Theme$MagicalRainbowUnicorn.theme.spacing, 1))),
      tl: /* [] */0
    });

var Styles = {
  margin: margin
};

function TodoList(Props) {
  var onAdd = Props.onAdd;
  var onCheck = Props.onCheck;
  var onToggle = Props.onToggle;
  var onEdit = Props.onEdit;
  var editId = Props.editId;
  var items = Props.items;
  Curry._2(onEdit, 1, "test");
  Curry._1(onCheck, 1);
  Curry._1(onToggle, 1);
  Curry._1(onAdd, "test");
  if (editId > 1) {
    console.log("edit");
  }
  if (items.length > 1) {
    console.log("items");
  }
  return React.createElement("div", undefined, React.createElement(Card$MagicalRainbowUnicorn.make, {
                  children: React.createElement("div", {
                        className: margin
                      }, React.createElement(Core.Grid, {
                            alignItems: "flex-end",
                            children: null,
                            container: true,
                            spacing: 1
                          }, React.createElement(Core.Grid, {
                                children: React.createElement(Theme$MagicalRainbowUnicorn.Icons.AddCircle.make, {
                                      color: "Primary"
                                    }),
                                item: true,
                                xs: MaterialUi_Grid.Xs._2
                              }), React.createElement(Core.Grid, {
                                children: React.createElement(MUITextField$MagicalRainbowUnicorn.make, {
                                      props: {
                                        fullWidth: true,
                                        placeholder: "test place holder",
                                        onKeyPress: (e => {
                                    if (e.key === "return") {
                                        onAdd(e.target.value)
                                    }
                                })
                                      }
                                    }),
                                item: true,
                                xs: MaterialUi_Grid.Xs._10
                              }))),
                  className: Curry._1(Css.style, {
                        hd: Css.marginBottom(Css.px(10)),
                        tl: /* [] */0
                      })
                }));
}

var make = TodoList;

export {
  Styles ,
  make ,
  
}
/* margin Not a pure module */
