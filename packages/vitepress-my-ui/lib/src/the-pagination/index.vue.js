"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("./index.vue2.js"),t=require("vue");require("./index.vue3.js");const a=require("../../_virtual/_plugin-vue_export-helper.js"),r=e=>(t.pushScopeId("data-v-fdcdcec9"),e=e(),t.popScopeId(),e),u={class:"page-suffix"},p=r(()=>t.createElementVNode("span",null,null,-1));function s(e,i,c,d,g,_){const n=t.resolveComponent("el-pagination");return t.openBlock(),t.createElementBlock("div",u,[t.renderSlot(e.$slots,"default",{},()=>[p],!0),t.createVNode(n,{background:"",small:"","page-sizes":e.pageSizeArr,total:e.total,"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:e.sizeChange,onCurrentChange:e.currentChange,"pager-count":e.pagerCount},null,8,["page-sizes","total","current-page","page-size","onSizeChange","onCurrentChange","pager-count"])])}const l=a.default(o.default,[["render",s],["__scopeId","data-v-fdcdcec9"]]);exports.default=l;