(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{l6qA:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("ma3e"),i=a("7oih"),m=a("rY4l"),c=a("5Wrh"),f=(a("HCaw"),function(e,t){var a=Math.abs(e-t),n=Math.ceil(a/864e5),l=Math.floor(n/31),r=Math.floor(n/365);return r>0?r+" year"+(r>1?"s":"")+" ago":l>0?l+" month"+(l>1?"s":"")+" ago":0===n?"today":n+" day"+(n>1?"s":"")+" ago"}),d=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},o=function(e){var t=e.fileName,a=e.fileType,n=e.lastModified,r=e.tagsInFiles;return l.a.createElement("div",{className:"template-filesystem-item"},l.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?l.a.createElement(s.b,null):l.a.createElement(s.a,null)),l.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?l.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return l.a.createElement(s.c,{key:e,style:{color:d(e),left:-6*t+"px"}})}))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"template-filesystem-item-last-modified"},n[t]))},u=function(e){var t=e.numberOfDirs,a=e.numberOfFiles;return l.a.createElement("div",{className:"template-display-information"},l.a.createElement("div",null,l.a.createElement(s.a,null),l.a.createElement("span",null,t)),l.a.createElement("div",null,l.a.createElement(s.b,null),l.a.createElement("span",null,a)))},p=function(e){var t=e.tags;return 0===Object.keys(t).length?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"template-display-tags"},Object.keys(t).map((function(e){return l.a.createElement("div",{key:e,style:{color:d(e),border:"solid 1px "+d(e)}},l.a.createElement(s.c,null),l.a.createElement("span",null,e),l.a.createElement("span",null,t[e]))})))};t.default=function(e){var t=e.data,a=Object(n.useState)(""),s=a[0],d=a[1],E="/python",y=[],h=["matplotlib","numpy","pandas","python","scikit-learn"],g={matplotlib:["python"],numpy:["python"],pandas:["python","machine-learning"],python:["python"],"scikit-learn":["python","machine-learning"]},v=Object(n.useState)({}),b=v[0],N=v[1];return Object(n.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(E)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(E.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var n=new Date((new Date).toISOString().split("T")[0]);for(var l in a)a.hasOwnProperty(l)&&(a[l]=f(n,new Date(a[l])));N(a)}),[t]),Object(n.useEffect)((function(){var e=E.substring(E.lastIndexOf("/")+1,E.length);d(""===e?"root":e)}),[E]),l.a.createElement(i.a,null,l.a.createElement(m.a,null),l.a.createElement("div",{className:"template-structure"},l.a.createElement("div",{className:"template-filesystem"},l.a.createElement("div",{className:"template-filesystem-container"},l.a.createElement("div",{className:"template-filesystem-header"},"root"!==s?l.a.createElement(c.a,{parent:E.substring(0,E.lastIndexOf("/"))}):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",null,s)),l.a.createElement("div",{className:"template-filesystem-directories"},y.map((function(e){return l.a.createElement(r.a,{key:e,to:E+"/"+e},l.a.createElement(o,{fileName:e,fileType:"folder",lastModified:b,tagsInFiles:g}))}))),l.a.createElement("div",{className:"template-filesystem-files"},h.map((function(e){return l.a.createElement(r.a,{key:e,to:E+"/"+e},l.a.createElement(o,{fileName:e,fileType:"file",lastModified:b,tagsInFiles:g}))}))))),l.a.createElement("div",{className:"template-display"},l.a.createElement(u,{numberOfDirs:0,numberOfFiles:5}),l.a.createElement(p,{tags:{python:5,"machine-learning":2}}))))}}}]);
//# sourceMappingURL=component---src-pages-python-index-js-b2f9d57c6ffd126089b5.js.map