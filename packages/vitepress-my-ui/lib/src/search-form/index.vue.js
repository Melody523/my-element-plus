"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("./index.vue2.js"),o=require("vue");require("./index.vue3.js");const l=require("../../_virtual/_plugin-vue_export-helper.js"),i={class:"under_stick_control"};function h(e,s,d,m,S,p){const a=o.resolveComponent("ToolsList"),r=o.resolveComponent("RCForm");return o.openBlock(),o.createElementBlock("div",{class:"contant_box",style:o.normalizeStyle(`max-height:${e.maxHeight}px`)},[o.createVNode(r,o.mergeProps({ref:"RCFormRef"},{...e.$attrs,formList:e.formList,rowNumber:e.rowNumber,staticData:e.staticData,labelWidth:e.labelWidth,hasToolsCol:!0,show:e.hasShow?!1:e.show},{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=n=>e.form=n),onOnDialogShow:e.onDialogShow,onCustDialog:e.custDialog,onInputEnter:e.onSearchSubmit}),{searchButton:o.withCtx(()=>[o.createVNode(a,o.normalizeProps(o.guardReactiveProps({onReset:e.onReset,onSearchSubmit:e.onSearchSubmit,show:e.hasShow?!1:e.show,changeShow:e.hasShow?!1:e.changeShow,disabled:e.toolsListDisabled})),null,16)]),_:1},16,["modelValue","onOnDialogShow","onCustDialog","onInputEnter"]),o.withDirectives(o.createElementVNode("div",i,[o.createVNode(a,o.normalizeProps(o.guardReactiveProps({onReset:e.onReset,onSearchSubmit:e.onSearchSubmit,show:e.hasShow?!1:e.show,changeShow:e.hasShow?!1:e.changeShow,disabled:e.toolsListDisabled})),null,16)],512),[[o.vShow,!e.hasShow&&e.show]])],4)}const u=l.default(t.default,[["render",h],["__scopeId","data-v-a52653a4"]]);exports.default=u;