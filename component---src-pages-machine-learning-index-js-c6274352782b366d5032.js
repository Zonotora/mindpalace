(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{eVgQ:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("ma3e"),i=t("7oih"),m=t("rY4l"),c=(t("HCaw"),function(e,a){var t=Math.abs(e-a),l=Math.ceil(t/864e5),n=Math.floor(l/31),r=Math.floor(l/365);return r>0?r+" year"+(r>1?"s":"")+" ago":n>0?n+" month"+(n>1?"s":"")+" ago":0===l?"today":l+" day"+(l>1?"s":"")+" ago"}),f=function(e){var a=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return a[function(e){var a=0;if(0===e.length)return a;for(var t=0;t<e.length;t++){a=(a<<5)-a+e.charCodeAt(t),a|=0}return Math.abs(a)}(e)%a.length]},d=function(e){var a=e.fileName,t=e.fileType,l=e.lastModified,r=e.tagsInFiles;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===t?n.a.createElement(s.b,null):n.a.createElement(s.a,null)),n.a.createElement("div",{className:"template-filesystem-item-text"},a),r[a]?n.a.createElement("div",{className:"template-filesystem-item-tags"},r[a].map((function(e,a){return n.a.createElement(s.c,{key:e,style:{color:f(e),left:-6*a+"px"}})}))):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"template-filesystem-item-last-modified"},l[a]))};a.default=function(e){var a=e.data,t=Object(l.useState)(""),o=t[0],u=t[1],p="/machine-learning",E=["models"],h=["feature-selection","hyperparameters","keywords","machine-learning","preprocessing"],g={chalmers:8,"machine-learning":8,keywords:1},y={"feature-selection":["chalmers","machine-learning"],hyperparameters:["chalmers","machine-learning"],keywords:["chalmers","machine-learning","keywords"],"machine-learning":["chalmers","machine-learning"],preprocessing:["chalmers","machine-learning"],models:["chalmers","machine-learning"]},v=Object(l.useState)({}),b=v[0],N=v[1];return Object(l.useEffect)((function(){var e=a.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(p)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(p.length).split("/")[1],date:e.node.frontmatter.lastModified}})),t={};e.forEach((function(e){t[e.slug]=e.date}));var l=new Date((new Date).toISOString().split("T")[0]);for(var n in t)t.hasOwnProperty(n)&&(t[n]=c(l,new Date(t[n])));N(t)}),[a]),Object(l.useEffect)((function(){var e=p.substring(p.lastIndexOf("/")+1,p.length);u(""===e?"root":e)}),[p]),n.a.createElement(i.a,null,n.a.createElement(m.a,{parent:p.substring(0,p.lastIndexOf("/")),isRoot:"root"===o}),n.a.createElement("div",{className:"template-structure"},n.a.createElement("div",{className:"template-filesystem"},n.a.createElement("div",{className:"template-filesystem-container"},n.a.createElement("div",{className:"template-filesystem-header"},n.a.createElement("div",null,o)),n.a.createElement("div",{className:"template-filesystem-directories"},E.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(d,{fileName:e,fileType:"folder",lastModified:b,tagsInFiles:y}))}))),n.a.createElement("div",{className:"template-filesystem-files"},h.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(d,{fileName:e,fileType:"file",lastModified:b,tagsInFiles:y}))}))))),n.a.createElement("div",{className:"template-display"},n.a.createElement("div",{className:"template-display-information"},n.a.createElement("div",null,n.a.createElement(s.a,null),n.a.createElement("span",null,1)),n.a.createElement("div",null,n.a.createElement(s.b,null),n.a.createElement("span",null,8))),n.a.createElement("div",{className:"template-display-tags"},Object.keys(g).map((function(e){return n.a.createElement("div",{key:e,style:{color:f(e),border:"solid 1px "+f(e)}},n.a.createElement(s.c,null),n.a.createElement("span",null,e),n.a.createElement("span",null,g[e]))}))))))}}}]);
//# sourceMappingURL=component---src-pages-machine-learning-index-js-c6274352782b366d5032.js.map