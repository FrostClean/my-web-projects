var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(t,n)=>{var a={};for(var e in t)p.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&r)for(var e of r(t))n.indexOf(e)<0&&u.call(t,e)&&(a[e]=t[e]);return a};import{d as _,n as v,f,q as m}from"./vendor.0989948f.js";import{_ as b}from"./plugin-vue_export-helper.5a098b48.js";var g=_({props:{label:String,value:String},setup(t,{slots:n}){const o=t,{label:a,value:e}=o,d=s(o,["label","value"]),i=()=>n.default?n.default():a,l=v("select-context"),c=()=>{l.isDown.value=!1,l.emit("on-change",{label:a,value:e}),l.emit("update:modelValue",e),l.selectValue.value=a};return()=>f("div",m({class:"mini-web-option"},d,{onClick:c,"data-label":a,"data-value":e}),[i()])}});var j=b(g,[["__scopeId","data-v-eddbc07e"]]);export{j as default};
