(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{l6qA:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),s=a("ma3e"),i=a("7oih"),m=a("rY4l"),c=(a("HCaw"),function(e,t){var a=Math.abs(e-t),l=Math.ceil(a/864e5),n=Math.floor(l/31),r=Math.floor(l/365);return r>0?r+" year"+(r>1?"s":"")+" ago":n>0?n+" month"+(n>1?"s":"")+" ago":0===l?"today":l+" day"+(l>1?"s":"")+" ago"}),f=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},d=function(e){var t=e.fileName,a=e.fileType,l=e.lastModified,r=e.tagsInFiles;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?n.a.createElement(s.b,null):n.a.createElement(s.a,null)),n.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?n.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return n.a.createElement(s.c,{key:e,style:{color:f(e),left:-6*t+"px"}})}))):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"template-filesystem-item-last-modified"},l[t]))};t.default=function(e){var t=e.data,a=Object(l.useState)(""),o=a[0],u=a[1],p="/python",y=[],E=["matplotlib","numpy","pandas","python","scikit-learn"],h={python:5,"machine-learning":2},v={matplotlib:["python"],numpy:["python"],pandas:["python","machine-learning"],python:["python"],"scikit-learn":["python","machine-learning"]},g=Object(l.useState)({}),b=g[0],N=g[1];return Object(l.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(p)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(p.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var l=new Date((new Date).toISOString().split("T")[0]);for(var n in a)a.hasOwnProperty(n)&&(a[n]=c(l,new Date(a[n])));N(a)}),[t]),Object(l.useEffect)((function(){var e=p.substring(p.lastIndexOf("/")+1,p.length);u(""===e?"root":e)}),[p]),n.a.createElement(i.a,null,n.a.createElement(m.a,{parent:p.substring(0,p.lastIndexOf("/")),isRoot:"root"===o}),n.a.createElement("div",{className:"template-structure"},n.a.createElement("div",{className:"template-filesystem"},n.a.createElement("div",{className:"template-filesystem-container"},n.a.createElement("div",{className:"template-filesystem-header"},n.a.createElement("div",null,o)),n.a.createElement("div",{className:"template-filesystem-directories"},y.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(d,{fileName:e,fileType:"folder",lastModified:b,tagsInFiles:v}))}))),n.a.createElement("div",{className:"template-filesystem-files"},E.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(d,{fileName:e,fileType:"file",lastModified:b,tagsInFiles:v}))}))))),n.a.createElement("div",{className:"template-display"},n.a.createElement("div",{className:"template-display-information"},n.a.createElement("div",null,n.a.createElement(s.a,null),n.a.createElement("span",null,0)),n.a.createElement("div",null,n.a.createElement(s.b,null),n.a.createElement("span",null,5))),n.a.createElement("div",{className:"template-display-tags"},Object.keys(h).map((function(e){return n.a.createElement("div",{key:e,style:{color:f(e),border:"solid 1px "+f(e)}},n.a.createElement(s.c,null),n.a.createElement("span",null,e),n.a.createElement("span",null,h[e]))}))))))}}}]);
//# sourceMappingURL=component---src-pages-python-index-js-23e519f2393c83367680.js.map