(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GFca:function(e){e.exports=JSON.parse('{"bias":"","inductive-bias":"The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.","cross-validation":"Is sometimes called rotation estimation which by itself describes the behaviour very well."}')},emR8:function(e,t,n){},p6fO:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("q1tI"),i=n.n(a),l=(n("i8i4"),n("s/Ur")),s=n("7oih"),r=n("rY4l"),o=n("wsO/"),c=n("5Wrh"),m=n("GFca"),u=(n("vg9a"),n("HCaw"),n("emR8"),function(e){var t=e.className,n=void 0===t?"":t,a=e.name,l=e.link,s=e.section,r=e.children,o=void 0===r?[]:r,c=e.setPosX,m=e.isTabletOrMobile,u=void 0!==m&&m;return i.a.createElement("li",null,i.a.createElement("a",{href:"#"+l,onClick:function(e){u&&c(0)}},i.a.createElement("span",{className:("node "+n).trim()},i.a.createElement("div",{className:"node-bar"}),i.a.createElement("div",{className:"visibility-box"},i.a.createElement("p",null,s)),i.a.createElement("div",{className:"status"}," "),i.a.createElement("p",null,a))),o.length>0?i.a.createElement("ul",null,o):i.a.createElement(i.a.Fragment,null))}),d=function(e){var t=e.header,n=e.style,a=e.posX,l=e.setPosX;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content-tree",style:n},i.a.createElement("div",{style:{display:a>=95?"flex":"",justifyContent:"space-evenly"}},i.a.createElement(o.a,{className:"file",style:{flex:"1 1 auto"}}),a>=95?i.a.createElement(c.c,{style:{width:"30px",position:"relative",left:"0px"},onListClick:function(e){return h(e,a,l,!1)}}):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"content-tree-container"},i.a.createElement("ul",{className:"content-ul"},t))))},f=function(e){var t=e.setPosX,n=e.style,a=function e(t){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",l)},l=function(e){e.preventDefault(),t(e.pageX/window.innerWidth*100)};return i.a.createElement("div",{className:"slider",onMouseDown:function(e){0===e.button&&(e.preventDefault(),document.addEventListener("mouseup",a),document.addEventListener("mousemove",l))},style:n})},h=function(e,t,n,a){n(t<5?a?100:25:0)};function v(e){var t=e.data,n=Object(a.useState)(0),o=n[0],c=n[1],v=Object(a.useState)([]),p=v[0],E=v[1],b=t.markdownRemark,y=b.frontmatter,k=b.html,w=Object(l.useMediaQuery)({query:"(max-width: 1224px)"});return Object(a.useEffect)((function(){for(var e=document.getElementsByClassName("keyword-link"),t=function(t){var n=e[t].id.split("-").slice(2).join("-"),a=document.createElement("div"),i=document.createElement("div");a.appendChild(i),a.className="keyword-popup",i.innerHTML=m[n],e[t].addEventListener("mouseenter",(function(){var n=e[t].getBoundingClientRect().x<window.innerWidth/2;a.style.left=n?"0px":"auto",a.style.right=n?"auto":"0px",e[t].appendChild(a)})),e[t].addEventListener("mouseleave",(function(){e[t].removeChild(a)}))},n=0;n<e.length;n++)t(n)}),[]),Object(a.useEffect)((function(){E(function e(t,n,a,l,s){void 0===a&&(a=!1),void 0===l&&(l=1),void 0===s&&(s="");for(var r=[],o=1!==l?s+".":"",c=1;t.length>0;){var m=t.shift(),d=1===m.depth?"root":"";if(m.depth<l)return t.unshift(m),r;if(0===t.length)r.push(i.a.createElement(u,{key:m.link,className:"last "+d,name:m.name,link:m.link,section:""+o+c,setPosX:n,isTabletOrMobile:a}));else if(t[0].depth>m.depth){var f=e(t,n,a,t[0].depth,""+o+c),h=t.length>0&&t[0].depth<m.depth?"last":"";r.push(i.a.createElement(u,{key:m.link,className:h+" "+d,name:m.name,link:m.link,section:""+o+c,children:f,setPosX:n,isTabletOrMobile:a}))}else{if(t[0].depth!==m.depth)return r.push(i.a.createElement(u,{key:m.link,className:"last",name:m.name,link:m.link,section:""+o+c,setPosX:n,isTabletOrMobile:a})),r;r.push(i.a.createElement(u,{key:m.link,className:d,name:m.name,link:m.link,section:""+o+c,setPosX:n,isTabletOrMobile:a}))}c+=1}return r}(JSON.parse(JSON.stringify(y.header)),c,w))}),[y.header,w]),Object(a.useEffect)((function(){c(w?0:25)}),[w]),i.a.createElement(s.a,null,i.a.createElement(d,{header:p,style:{width:o+"%"},posX:o,setPosX:c}),i.a.createElement(f,{setPosX:c,style:{left:o+"%"}}),i.a.createElement("div",{className:"content-container",style:{width:"calc("+(100-o)+"% - 2px)"}},i.a.createElement(r.b,{siteTitle:y.title,parent:y.slug.substring(0,y.slug.lastIndexOf("/")),onTreeViewClick:function(e){return h(e,o,c,w)}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:k}}),i.a.createElement("footer",{style:{height:"50px"}}))))}},vg9a:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-file-js-16e23c0869c843080a96.js.map