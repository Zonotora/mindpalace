(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sNpD:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),s=a("Wbzz"),r=a("ma3e"),i=a("7oih"),m=a("rY4l"),c=(a("HCaw"),function(e,t){var a=Math.abs(e-t),l=Math.ceil(a/864e5),n=Math.floor(l/31),s=Math.floor(l/365);return s>0?s+" year"+(s>1?"s":"")+" ago":n>0?n+" month"+(n>1?"s":"")+" ago":0===l?"today":l+" day"+(l>1?"s":"")+" ago"}),o=function(e){var t=e.fileName,a=e.fileType,l=e.lastModified;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?n.a.createElement(r.b,null):n.a.createElement(r.a,null)),n.a.createElement("div",{className:"template-filesystem-item-text"},t),n.a.createElement("div",{className:"template-filesystem-item-last-modified"},l[t]))};t.default=function(e){var t=e.data,a=Object(l.useState)(""),f=a[0],d=a[1],u="/machine-learning/models",p=[],E=["decision-tree","ensembles","random-forests"],v=Object(l.useState)({}),y=v[0],N=v[1];return Object(l.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(u)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(u.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var l=new Date((new Date).toISOString().split("T")[0]);for(var n in a)a.hasOwnProperty(n)&&(a[n]=c(l,new Date(a[n])));N(a)}),[t]),Object(l.useEffect)((function(){var e=u.substring(u.lastIndexOf("/")+1,u.length);d(""===e?"root":e)}),[u]),n.a.createElement(i.a,null,n.a.createElement(m.a,{parent:u.substring(0,u.lastIndexOf("/")),isRoot:"root"===f}),n.a.createElement("div",{className:"template-structure"},n.a.createElement("div",{className:"template-filesystem"},n.a.createElement("div",{className:"template-filesystem-container"},n.a.createElement("div",{className:"template-filesystem-header"},n.a.createElement("div",null,f)),n.a.createElement("div",{className:"template-filesystem-directories"},p.map((function(e){return n.a.createElement(s.a,{key:e,to:u+"/"+e},n.a.createElement(o,{fileName:e,fileType:"folder",lastModified:y}))}))),n.a.createElement("div",{className:"template-filesystem-files"},E.map((function(e){return n.a.createElement(s.a,{key:e,to:u+"/"+e},n.a.createElement(o,{fileName:e,fileType:"file",lastModified:y}))}))))),n.a.createElement("div",{className:"template-display"},n.a.createElement("div",{className:"template-display-information"},n.a.createElement("div",null,n.a.createElement(r.a,null),n.a.createElement("span",null,0)),n.a.createElement("div",null,n.a.createElement(r.b,null),n.a.createElement("span",null,3))))))}}}]);
//# sourceMappingURL=component---src-pages-machine-learning-models-index-js-61f70cadbf9f341eb7ce.js.map