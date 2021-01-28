

import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Styles from "@material-ui/core/styles";
import AddCircle from "@material-ui/icons/AddCircle";

var theme = Styles.createMuiTheme({});

var _map = {"Default":"default","Error":"error","Inherit":"inherit","Primary":"primary","Secondary":"secondary","TextPrimary":"textPrimary","TextSecondary":"textSecondary"};

var _revMap = {"default":"Default","error":"Error","inherit":"Inherit","primary":"Primary","secondary":"Secondary","textPrimary":"TextPrimary","textSecondary":"TextSecondary"};

function colorToJs(param) {
  return _map[param];
}

function colorFromJs(param) {
  return _revMap[param];
}

var _map$1 = {"Default":"default","Inherit":"inherit","Small":"small","Large":"large"};

var _revMap$1 = {"default":"Default","inherit":"Inherit","small":"Small","large":"Large"};

function fontSizeToJs(param) {
  return _map$1[param];
}

function fontSizeFromJs(param) {
  return _revMap$1[param];
}

function Make(Icon) {
  var reactClass = Icon.reactClass;
  var Theme$Icons$Make = function (Props) {
    var color = Props.color;
    var className = Props.className;
    var fontSize = Props.fontSize;
    var nativeColor = Props.nativeColor;
    var titleAccess = Props.titleAccess;
    var viewBox = Props.viewBox;
    var tmp = {};
    if (className !== undefined) {
      tmp.className = Caml_option.valFromOption(className);
    }
    var tmp$1 = Belt_Option.map(color, colorToJs);
    if (tmp$1 !== undefined) {
      tmp.color = Caml_option.valFromOption(tmp$1);
    }
    var tmp$2 = Belt_Option.map(fontSize, fontSizeToJs);
    if (tmp$2 !== undefined) {
      tmp.fontSize = Caml_option.valFromOption(tmp$2);
    }
    if (nativeColor !== undefined) {
      tmp.nativeColor = Caml_option.valFromOption(nativeColor);
    }
    if (titleAccess !== undefined) {
      tmp.titleAccess = Caml_option.valFromOption(titleAccess);
    }
    if (viewBox !== undefined) {
      tmp.viewBox = Caml_option.valFromOption(viewBox);
    }
    return React.createElement(reactClass, tmp);
  };
  return {
          reactClass: reactClass,
          make: Theme$Icons$Make
        };
}

var Icon = {
  reactClass: AddCircle
};

var reactClass = Icon.reactClass;

function Theme$Icons$Make(Props) {
  var color = Props.color;
  var className = Props.className;
  var fontSize = Props.fontSize;
  var nativeColor = Props.nativeColor;
  var titleAccess = Props.titleAccess;
  var viewBox = Props.viewBox;
  var tmp = {};
  if (className !== undefined) {
    tmp.className = Caml_option.valFromOption(className);
  }
  var tmp$1 = Belt_Option.map(color, colorToJs);
  if (tmp$1 !== undefined) {
    tmp.color = Caml_option.valFromOption(tmp$1);
  }
  var tmp$2 = Belt_Option.map(fontSize, fontSizeToJs);
  if (tmp$2 !== undefined) {
    tmp.fontSize = Caml_option.valFromOption(tmp$2);
  }
  if (nativeColor !== undefined) {
    tmp.nativeColor = Caml_option.valFromOption(nativeColor);
  }
  if (titleAccess !== undefined) {
    tmp.titleAccess = Caml_option.valFromOption(titleAccess);
  }
  if (viewBox !== undefined) {
    tmp.viewBox = Caml_option.valFromOption(viewBox);
  }
  return React.createElement(reactClass, tmp);
}

var AddCircle$1 = {
  reactClass: reactClass,
  make: Theme$Icons$Make
};

var Icons = {
  colorToJs: colorToJs,
  colorFromJs: colorFromJs,
  fontSizeToJs: fontSizeToJs,
  fontSizeFromJs: fontSizeFromJs,
  Make: Make,
  AddCircle: AddCircle$1
};

export {
  theme ,
  Icons ,
  
}
/* theme Not a pure module */
