import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Button: typeof components.Button;
    Icon: typeof components.Icon;
    BasicSelectModal: typeof components.BasicSelectModal;
    DatePicker: typeof components.DatePicker;
    DigitalRange: typeof components.DigitalRange;
    InputAndButton: typeof components.InputAndButton;
    MenuButton: typeof components.MenuButton;
    RCForm: typeof components.RCForm;
    SearchForm: typeof components.SearchForm;
    SearchNumberList: typeof components.SearchNumberList;
    SearchSelect: typeof components.SearchSelect;
    Selection: typeof components.Selection;
    ThePagination: typeof components.ThePagination;
    ToolsList: typeof components.ToolsList;
  }
}
export {};