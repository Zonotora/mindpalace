(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("ma3e"),m=a("7oih"),i=a("rY4l"),c=(a("HCaw"),function(e,t){var a=Math.abs(e-t),n=Math.ceil(a/864e5),l=Math.floor(n/31),r=Math.floor(n/365);return r>0?r+" year"+(r>1?"s":"")+" ago":l>0?l+" month"+(l>1?"s":"")+" ago":0===n?"today":n+" day"+(n>1?"s":"")+" ago"}),f=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},o=function(e){var t=e.fileName,a=e.fileType,n=e.lastModified,r=e.tagsInFiles;return l.a.createElement("div",{className:"template-filesystem-item"},l.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?l.a.createElement(s.b,null):l.a.createElement(s.a,null)),l.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?l.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return l.a.createElement(s.c,{key:e,style:{color:f(e),left:-6*t+"px"}})}))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"template-filesystem-item-last-modified"},n[t]))},d=function(e){var t=e.numberOfDirs,a=e.numberOfFiles;return l.a.createElement("div",{className:"template-display-information"},l.a.createElement("div",null,l.a.createElement(s.a,null),l.a.createElement("span",null,t)),l.a.createElement("div",null,l.a.createElement(s.b,null),l.a.createElement("span",null,a)))},u=function(e){var t=e.tags;return 0===Object.keys(t).length?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"template-display-tags"},Object.keys(t).map((function(e){return l.a.createElement("div",{key:e,style:{color:f(e),border:"solid 1px "+f(e)}},l.a.createElement(s.c,null),l.a.createElement("span",null,e),l.a.createElement("span",null,t[e]))})))};t.default=function(e){var t=e.data,a=Object(n.useState)(""),s=a[0],f=a[1],p="",E=["machine-learning","math","python","rust"],y=["control-theory","latex"],h={"control-theory":["chalmers"],"machine-learning":["chalmers","machine-learning","keywords"],math:["keywords"],python:["python","machine-learning"]},g=Object(n.useState)({}),v=g[0],b=g[1];return Object(n.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(p)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(p.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var n=new Date((new Date).toISOString().split("T")[0]);for(var l in a)a.hasOwnProperty(l)&&(a[l]=c(n,new Date(a[l])));b(a)}),[t]),Object(n.useEffect)((function(){var e=p.substring(p.lastIndexOf("/")+1,p.length);f(""===e?"root":e)}),[p]),l.a.createElement(m.a,null,l.a.createElement(i.a,{parent:p.substring(0,p.lastIndexOf("/")),isRoot:"root"===s}),l.a.createElement("div",{className:"template-structure"},l.a.createElement("div",{className:"template-filesystem"},l.a.createElement("div",{className:"template-filesystem-container"},l.a.createElement("div",{className:"template-filesystem-header"},l.a.createElement("div",null,s)),l.a.createElement("div",{className:"template-filesystem-directories"},E.map((function(e){return l.a.createElement(r.a,{key:e,to:p+"/"+e},l.a.createElement(o,{fileName:e,fileType:"folder",lastModified:v,tagsInFiles:h}))}))),l.a.createElement("div",{className:"template-filesystem-files"},y.map((function(e){return l.a.createElement(r.a,{key:e,to:p+"/"+e},l.a.createElement(o,{fileName:e,fileType:"file",lastModified:v,tagsInFiles:h}))}))))),l.a.createElement("div",{className:"template-display"},l.a.createElement(d,{numberOfDirs:5,numberOfFiles:19}),l.a.createElement(u,{tags:{chalmers:9,"machine-learning":10,keywords:2,python:5}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5d4199e75910110577c1.js.map