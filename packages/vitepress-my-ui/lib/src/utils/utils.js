"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("vue"),s=require("dayjs");function f(){const{appContext:{config:{globalProperties:t}}}=c.getCurrentInstance();return t.dayjs=s,{globalProperties:t}}function i(t){return t!==null&&typeof t=="object"&&Object.prototype.toString.call(t)!=="[object Date]"}function g(t){if(!i(t))return t;for(const e in t)!t[e]&&t[e]!==0&&typeof t[e]!="boolean"&&delete t[e];return t}const u=t=>!t&&typeof t!="boolean"&&t!==0;function a(t){if(!i(t))return t;const e=Array.isArray(t)?[]:{};for(const n in t)Reflect.has(t,n)&&(t[n]&&i(t[n])?e[n]=a(t[n]):e[n]=t[n]);return e}function p(){const t=c.reactive({tableLoading:!1,pager:{total:0,currentPage:1,pageSize:15}});return{hooksCommonState:t,resetInfo:o=>{var r;(r=t.formRef)==null||r.resetFields(),o()},sizeChange:function(o,r){t.pager.pageSize=o,t.pager.currentPage=1,r()},currentChange:function(o,r){t.pager.currentPage=o,r()}}}exports.deepClone=a;exports.getCommonState=p;exports.getNotEmptyObject=g;exports.isEmpty=u;exports.useCurrentInstance=f;