(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GFca:function(e){e.exports=JSON.parse('{"bias":"","bagging":"Is also called bootstrap aggregation. It is a technique for reducing variances for estimated prediction functions and does so by averaging a number of noisy but approximately unbiased models.","inductive-bias":"The preference for one distinction over another. If the inductive bias is too far away from the concept that is being learned, the whole learning might fail.","cross-validation":"Is sometimes called rotation estimation which by itself describes the behaviour very well. For example, if you break up your training data into 10 equally big partitions, you use the learning alogorithm on 9 of them and test on the remaining partition for 10 cycles. Thus, every partition will be the training set once. One disadvantage is that it is computationally expensive.","normalization":"Is a good way of keeping the data consistent. There are two basic types of normalization: example and feature normalization.","feature-normalization":"Go through every feature and apply the same adjustment across all examples. There are two standard techniques to use: centering and scaling. Centering to keep the data set close around the origin. Scaling to make sure each feature has variance 1 across the training data.","example-normalization":"Go through every feature but adjust them individually. The standard technique is to make sure that each feature vector has the length of one. The advantages of example normalization is that comparisons between data sets are more straightforward.","approximation-error":"Will measure how well the model family is performing.","estimation-error":"Will measure how far off one classifer is from the optimal classifier of that type.","bias-and-variance-trade-off":"The trade-off between approximation and estimation error is usually called the bias/variance trade-off. The bias corresponding to the approximation error and the variance corrsponding to the estimation error.","imbalanced-data":"The imbalanced data problem refers to the problem where the distribution from which the data is taken has an imbalance. This is not good because machine learning algorithms will try to minimize the error, and thus, predict in favor of the imbalance majority. They can often achieve really good results by doing nothing. Hence, you probably not care about predicting accuracy.","feature-selection":"","embedded-methods":"Embedded methods are used to learn which features best contribute to the learning of a model while it is being created. Common methods are regularization methods.","regularization-methods":"Regularization methods or penalization methods introduce additional constraints which makes the model bias toward fewer constraints.","feature-imputation":"It will try to fill any missing data. We could replace the missing value with a constant (e.g. the mean value), a random value or a prediction from the other values.","null-hypothesis":"","statistically-significant":"The result is probably not due to random luck."}')},emR8:function(e,t,a){},p6fO:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("q1tI"),i=a.n(n),o=a("s/Ur"),r=a("7oih"),s=a("rY4l"),l=a("wsO/"),c=a("5Wrh"),m=a("GFca"),d=(a("vg9a"),a("HCaw"),a("emR8"),function(e){var t=e.className,a=void 0===t?"":t,n=e.name,o=e.link,r=e.section,s=e.children,l=void 0===s?[]:s,c=e.setPosX,m=e.isTabletOrMobile,d=void 0!==m&&m;return i.a.createElement("li",null,i.a.createElement("a",{href:"#"+o,onClick:function(e){d&&c(0)}},i.a.createElement("span",{className:("node "+a).trim()},i.a.createElement("div",{className:"node-bar"}),i.a.createElement("div",{className:"visibility-box"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"status"}," "),i.a.createElement("p",null,n))),l.length>0?i.a.createElement("ul",null,l):i.a.createElement(i.a.Fragment,null))}),u=function(e){var t=e.header,a=e.style,n=e.posX,o=e.setPosX;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content-tree",style:a},i.a.createElement("div",{style:{display:n>=95?"flex":"",justifyContent:"space-evenly"}},i.a.createElement(l.a,{className:"file",style:{flex:"1 1 auto"}}),n>=95?i.a.createElement(c.c,{style:{width:"30px",position:"relative",left:"0px"},onListClick:function(e){return f(e,n,o,!1)}}):i.a.createElement(i.a.Fragment,null)),i.a.createElement("div",{className:"content-tree-container"},i.a.createElement("ul",{className:"content-ul"},t))))},h=function(e){var t=e.setPosX,a=e.style,n=function e(t){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o)},o=function(e){e.preventDefault(),t(e.pageX/window.innerWidth*100)};return i.a.createElement("div",{className:"slider",onMouseDown:function(e){0===e.button&&(e.preventDefault(),document.addEventListener("mouseup",n),document.addEventListener("mousemove",o))},style:a})},f=function(e,t,a,n){a(t<5?n?100:25:0)};function p(e){var t=e.data,a=Object(n.useState)(0),l=a[0],c=a[1],p=Object(n.useState)([]),v=p[0],g=p[1],b=t.markdownRemark,y=b.frontmatter,w=b.html,E=Object(o.useMediaQuery)({query:"(max-width: 1224px)"});return Object(n.useEffect)((function(){for(var e=document.getElementsByClassName("keyword-link"),t=function(t){var a=e[t].id.split("-").slice(2).join("-"),n=document.createElement("div"),i=document.createElement("div");n.appendChild(i),n.className="keyword-popup",i.innerHTML=m[a],e[t].addEventListener("mouseenter",(function(){var a=e[t].getBoundingClientRect().x<window.innerWidth/2;n.style.left=a?"0px":"auto",n.style.right=a?"auto":"0px",e[t].appendChild(n)})),e[t].addEventListener("mouseleave",(function(){e[t].removeChild(n)}))},a=0;a<e.length;a++)t(a)}),[]),Object(n.useEffect)((function(){g(function e(t,a,n,o,r){void 0===n&&(n=!1),void 0===o&&(o=1),void 0===r&&(r="");for(var s=[],l=1!==o?r+".":"",c=1;t.length>0;){var m=t.shift(),u=1===m.depth?"root":"";if(m.depth<o)return t.unshift(m),s;if(0===t.length)s.push(i.a.createElement(d,{key:m.link,className:"last "+u,name:m.name,link:m.link,section:""+l+c,setPosX:a,isTabletOrMobile:n}));else if(t[0].depth>m.depth){var h=e(t,a,n,t[0].depth,""+l+c),f=t.length>0&&t[0].depth<m.depth?"last":"";s.push(i.a.createElement(d,{key:m.link,className:f+" "+u,name:m.name,link:m.link,section:""+l+c,children:h,setPosX:a,isTabletOrMobile:n}))}else{if(t[0].depth!==m.depth)return s.push(i.a.createElement(d,{key:m.link,className:"last",name:m.name,link:m.link,section:""+l+c,setPosX:a,isTabletOrMobile:n})),s;s.push(i.a.createElement(d,{key:m.link,className:u,name:m.name,link:m.link,section:""+l+c,setPosX:a,isTabletOrMobile:n}))}c+=1}return s}(JSON.parse(JSON.stringify(y.header)),c,E))}),[y.header,E]),Object(n.useEffect)((function(){c(E?0:25)}),[E]),i.a.createElement(r.a,null,i.a.createElement(u,{header:v,style:{width:l+"%"},posX:l,setPosX:c}),i.a.createElement(h,{setPosX:c,style:{left:l+"%"}}),i.a.createElement("div",{className:"content-container",style:{width:"calc("+(100-l)+"% - 2px)"}},i.a.createElement(s.b,{siteTitle:y.title,parent:y.slug.substring(0,y.slug.lastIndexOf("/")),onTreeViewClick:function(e){return f(e,l,c,E)}}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:w}}),i.a.createElement("footer",{style:{height:"50px"}}))))}},vg9a:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-file-js-9c8e8e1b670808a74abc.js.map