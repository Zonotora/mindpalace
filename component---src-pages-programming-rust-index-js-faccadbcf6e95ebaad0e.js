(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"C/9l":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),s=a("ma3e"),m=a("7oih"),i=(a("rY4l"),a("5Wrh")),f=a("wsO/"),c=(a("HCaw"),function(e,t){var a=Math.abs(e-t),l=Math.ceil(a/864e5),n=Math.floor(l/31),r=Math.floor(l/365);return r>0?r+" year"+(r>1?"s":"")+" ago":n>0?n+" month"+(n>1?"s":"")+" ago":0===l?"today":l+" day"+(l>1?"s":"")+" ago"}),d=function(e){var t=["#ed5f5f","#ed8a5f","#eda85f","#edd35f","#e8ed5f","#c0ed5f","#9fed5f","#79ed5f","#5fed77","#5fed95","#5fedb9","#5fdfed","#5fb4ed","#5f95ed","#5f70ed","#8a5fed","#a65fed","#d55fed","#ed5fd3","#ed5f9f"];return t[function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t|=0}return Math.abs(t)}(e)%t.length]},u=function(e){var t=e.fileName,a=e.fileType,l=e.lastModified,r=e.tagsInFiles;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-icon"},"file"===a?n.a.createElement(s.b,null):n.a.createElement(s.a,null)),n.a.createElement("div",{className:"template-filesystem-item-text"},t),r[t]?n.a.createElement("div",{className:"template-filesystem-item-tags"},r[t].map((function(e,t){return n.a.createElement(s.c,{key:e,style:{color:d(e),left:-6*t+"px"}})}))):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"template-filesystem-item-last-modified"},l[t]))},o=function(e){var t=e.numberOfDirs,a=e.numberOfFiles;return n.a.createElement("div",{className:"template-filesystem-header-information"},n.a.createElement("div",null,n.a.createElement(s.a,null),n.a.createElement("span",null,t)),n.a.createElement("div",null,n.a.createElement(s.b,null),n.a.createElement("span",null,a)))},E=function(e){var t=e.search;return n.a.createElement("div",{className:"template-filesystem-item"},n.a.createElement("div",{className:"template-filesystem-item-text-header"},t.ref),n.a.createElement("div",{className:"template-filesystem-item-text",dangerouslySetInnerHTML:{__html:t.snapshot}}))};t.default=function(e){var t=e.data,a=Object(l.useState)(""),s=a[0],d=a[1],p="/programming/rust",v=[],h=["rust"],y={},g=Object(l.useState)({}),b=g[0],N=g[1],O=Object(l.useState)([]),w=O[0],M=O[1];Object(l.useEffect)((function(){var e=t.allMarkdownRemark.edges.filter((function(e){return e.node.frontmatter.slug.startsWith(p)})).map((function(e){return{slug:e.node.frontmatter.slug.substring(p.length).split("/")[1],date:e.node.frontmatter.lastModified}})),a={};e.forEach((function(e){a[e.slug]=e.date}));var l=new Date((new Date).toISOString().split("T")[0]);for(var n in a)a.hasOwnProperty(n)&&(a[n]=c(l,new Date(a[n])));N(a)}),[t]),Object(l.useEffect)((function(){var e=p.substring(p.lastIndexOf("/")+1,p.length);d(""===e?"root":e)}),[p]);var k=n.a.createElement("div",{className:"template-filesystem-searches"},w.map((function(e){return n.a.createElement(r.a,{key:e.ref,to:e.ref},n.a.createElement(E,{search:e}))}))),F=n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"template-filesystem-directories"},v.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(u,{fileName:e,fileType:"folder",lastModified:b,tagsInFiles:y}))}))),n.a.createElement("div",{className:"template-filesystem-files"},h.map((function(e){return n.a.createElement(r.a,{key:e,to:p+"/"+e},n.a.createElement(u,{fileName:e,fileType:"file",lastModified:b,tagsInFiles:y}))}))));return n.a.createElement(m.a,null,n.a.createElement("div",{className:"template-structure"},n.a.createElement(f.a,{className:"directory",setSearchResults:M}),n.a.createElement("div",{className:"template-filesystem"},n.a.createElement("div",{className:"template-filesystem-header"},"root"!==s?n.a.createElement(i.a,{parent:p.substring(0,p.lastIndexOf("/"))}):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:"template-filesystem-header-title"},s),n.a.createElement(o,{numberOfDirs:0,numberOfFiles:1})),0!==w.length?k:F)))}}}]);
//# sourceMappingURL=component---src-pages-programming-rust-index-js-faccadbcf6e95ebaad0e.js.map