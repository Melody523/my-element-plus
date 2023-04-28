import * as r from "./src/index.mjs";
import t from "element-plus";
import "element-plus/dist/index.css";
import "./src/icon/style/iconfont/iconfont.mjs";
import { Button as a } from "./src/button/index.mjs";
import { Icon as l } from "./src/icon/index.mjs";
import { InputAndButton as s } from "./src/input-and-button/index.mjs";
import { SearchNumberList as d } from "./src/search-number-list/index.mjs";
import { DigitalRange as h } from "./src/digital-range/index.mjs";
import { DatePicker as D } from "./src/date-picker/index.mjs";
import { BasicSelectModal as I } from "./src/basic-select-modal/index.mjs";
import { SearchSelect as P } from "./src/search-select/index.mjs";
import { RCForm as b } from "./src/rc-form/index.mjs";
import { MenuButton as A } from "./src/menu-button/index.mjs";
import { SearchForm as E } from "./src/search-form/index.mjs";
import { Selection as N } from "./src/selection/index.mjs";
const n = {
  install: (o) => {
    for (let e in r)
      o.use(r[e]);
    o.use(t);
  }
};
export {
  I as BasicSelectModal,
  a as Button,
  D as DatePicker,
  h as DigitalRange,
  l as Icon,
  s as InputAndButton,
  A as MenuButton,
  b as RCForm,
  E as SearchForm,
  d as SearchNumberList,
  P as SearchSelect,
  N as Selection,
  n as default
};
