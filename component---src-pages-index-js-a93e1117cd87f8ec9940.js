(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("ma3e"),i=a("7oih"),m=(a("rY4l"),a("5Wrh")),f=a("wsO/"),c=(a("HCaw"),function(e,t){var a=Math.abs(e-t),n=Math.ceil(a/864e5),l=Math.floor(n/31),r=Math.floor(n/365);return r>0?r+" year"+(r>1?"s":"")+" ago":l>0?l+" month"+(l>1?"s":"")+" ago":0===n?"today":n+" day"+(n>1?"s":"")+" ago"}),d=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},o=function(e){var t=e.fileName,a=e.fileType,n=e.lastModified,r=e.tagsInFiles;return l.a.createElement("div",{className:"template-filesystem-item"},l.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?l.a.createElement(s.b,null):l.a.createElement(s.a,null)),l.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?l.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return l.a.createElement(s.c,{key:e,style:{color:d(e),left:-6*t+"px"}})}))):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"template-filesystem-item-last-modified"},n[t]))},u=function(e){var t=e.numberOfDirs,a=e.numberOfFiles;return l.a.createElement("div",{className:"template-filesystem-header-information"},l.a.createElement("div",null,l.a.createElement(s.a,null),l.a.createElement("span",null,t)),l.a.createElement("div",null,l.a.createElement(s.b,null),l.a.createElement("span",null,a)))};t.default=function(e){var t=e.data,a=Object(n.useState)(""),s=a[0],d=a[1],p="",E=["art","machine-learning","math","meta","networking","os","programming","web"],g=["control-theory","latex"],h={"machine-learning":["machine-learning","keywords"],math:["keywords"],os:["keywords"],programming:["python","machine-learning"]},y=Object(n.useState)({}),v=y[0],b=y[1];return Object(n.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(p)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(p.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var n=new Date((new Date).toISOString().split("T")[0]);for(var l in a)a.hasOwnProperty(l)&&(a[l]=c(n,new Date(a[l])));b(a)}),[t]),Object(n.useEffect)((function(){var e=p.substring(p.lastIndexOf("/")+1,p.length);d(""===e?"root":e)}),[p]),l.a.createElement(i.a,null,l.a.createElement("div",{className:"template-structure"},l.a.createElement(f.a,{className:"directory"}),l.a.createElement("div",{className:"template-filesystem"},l.a.createElement("div",{className:"template-filesystem-header"},"root"!==s?l.a.createElement(m.a,{parent:p.substring(0,p.lastIndexOf("/"))}):l.a.createElement(l.a.Fragment,null),l.a.createElement("div",{className:"template-filesystem-header-title"},s),l.a.createElement(u,{numberOfDirs:11,numberOfFiles:43})),l.a.createElement("div",{className:"template-filesystem-directories"},E.map((function(e){return l.a.createElement(r.a,{key:e,to:p+"/"+e},l.a.createElement(o,{fileName:e,fileType:"folder",lastModified:v,tagsInFiles:h}))}))),l.a.createElement("div",{className:"template-filesystem-files"},g.map((function(e){return l.a.createElement(r.a,{key:e,to:p+"/"+e},l.a.createElement(o,{fileName:e,fileType:"file",lastModified:v,tagsInFiles:h}))}))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a93e1117cd87f8ec9940.js.map