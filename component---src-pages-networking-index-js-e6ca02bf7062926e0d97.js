(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5owJ":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),s=a("ma3e"),m=a("7oih"),i=a("rY4l"),c=a("5Wrh"),f=(a("HCaw"),function(e,t){var a=Math.abs(e-t),l=Math.ceil(a/864e5),n=Math.floor(l/31),r=Math.floor(l/365);return r>0?r+" year"+(r>1?"s":"")+" ago":n>0?n+" month"+(n>1?"s":"")+" ago":0===l?"today":l+" day"+(l>1?"s":"")+" ago"}),d=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},o=function(e){var t=e.fileName,a=e.fileType,l=e.lastModified,r=e.tagsInFiles;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?n.a.createElement(s.b,null):n.a.createElement(s.a,null)),n.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?n.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return n.a.createElement(s.c,{key:e,style:{color:d(e),left:-6*t+"px"}})}))):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"template-filesystem-item-last-modified"},l[t]))},u=function(e){var t=e.numberOfDirs,a=e.numberOfFiles;return n.a.createElement("div",{className:"template-display-information"},n.a.createElement("div",null,n.a.createElement(s.a,null),n.a.createElement("span",null,t)),n.a.createElement("div",null,n.a.createElement(s.b,null),n.a.createElement("span",null,a)))},p=function(e){var t=e.tags;return 0===Object.keys(t).length?n.a.createElement(n.a.Fragment,null):n.a.createElement("div",{className:"template-display-tags"},Object.keys(t).map((function(e){return n.a.createElement("div",{key:e,style:{color:d(e),border:"solid 1px "+d(e)}},n.a.createElement(s.c,null),n.a.createElement("span",null,e),n.a.createElement("span",null,t[e]))})))};t.default=function(e){var t=e.data,a=Object(l.useState)(""),s=a[0],d=a[1],E="/networking",v=["OSI-model"],g=["firewall","ip-address","port","protocols"],y={},b=Object(l.useState)({}),h=b[0],N=b[1];return Object(l.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(E)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(E.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var l=new Date((new Date).toISOString().split("T")[0]);for(var n in a)a.hasOwnProperty(n)&&(a[n]=f(l,new Date(a[n])));N(a)}),[t]),Object(l.useEffect)((function(){var e=E.substring(E.lastIndexOf("/")+1,E.length);d(""===e?"root":e)}),[E]),n.a.createElement(m.a,null,n.a.createElement(i.a,null),n.a.createElement("div",{className:"template-structure"},n.a.createElement("div",{className:"template-filesystem"},n.a.createElement("div",{className:"template-filesystem-container"},n.a.createElement("div",{className:"template-filesystem-header"},"root"!==s?n.a.createElement(c.a,{parent:E.substring(0,E.lastIndexOf("/"))}):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",null,s)),n.a.createElement("div",{className:"template-filesystem-directories"},v.map((function(e){return n.a.createElement(r.a,{key:e,to:E+"/"+e},n.a.createElement(o,{fileName:e,fileType:"folder",lastModified:h,tagsInFiles:y}))}))),n.a.createElement("div",{className:"template-filesystem-files"},g.map((function(e){return n.a.createElement(r.a,{key:e,to:E+"/"+e},n.a.createElement(o,{fileName:e,fileType:"file",lastModified:h,tagsInFiles:y}))}))))),n.a.createElement("div",{className:"template-display"},n.a.createElement(u,{numberOfDirs:1,numberOfFiles:12}),n.a.createElement(p,{tags:{}}))))}}}]);
//# sourceMappingURL=component---src-pages-networking-index-js-e6ca02bf7062926e0d97.js.map