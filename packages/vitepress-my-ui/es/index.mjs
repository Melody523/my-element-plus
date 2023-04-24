import * as t from "./src/index.mjs";
import m from "element-plus";
import "element-plus/dist/index.css";
import "./src/icon/style/iconfont/iconfont.mjs";
import { Icon as e } from "./src/icon/index.mjs";
import { Button as u } from "./src/button/index.mjs";
import { InputAndButton as s } from "./src/input-and-button/index.mjs";
import { SearchNumberList as d } from "./src/search-number-list/index.mjs";
import { DigitalRange as B } from "./src/digital-range/index.mjs";
import { DatePicker as h } from "./src/date-picker/index.mjs";
import { BasicSelectModal as F } from "./src/basic-select-modal/index.mjs";
import { SearchSelect as P } from "./src/search-select/index.mjs";
import { RCForm as b } from "./src/rc-form/index.mjs";
import { MenuButton as v } from "./src/menu-button/index.mjs";
import { SearchForm as C } from "./src/search-form/index.mjs";
import { Selection as L } from "./src/selection/index.mjs";
const p = {
  install: (o) => {
    for (let r in t)
      o.use(t[r]), r == "Icon" && (o.component("SvgIcon", e), o.component("Icon", e));
    o.use(m);
  }
};
export {
  F as BasicSelectModal,
  u as Button,
  h as DatePicker,
  B as DigitalRange,
  e as Icon,
  s as InputAndButton,
  v as MenuButton,
  b as RCForm,
  C as SearchForm,
  d as SearchNumberList,
  P as SearchSelect,
  L as Selection,
  p as default
};
