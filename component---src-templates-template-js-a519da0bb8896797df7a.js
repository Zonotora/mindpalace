/*! For license information please see component---src-templates-template-js-a519da0bb8896797df7a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("8ypT");t.a=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("main",null,t)))}},GYiX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n("q1tI"),a=n.n(r),o=n("s/Ur"),i=n("Bl7J"),c=n("Wbzz"),u=n("X13+"),s=function(e){var t=e.onTreeviewClick;return a.a.createElement("div",{className:"header-button",style:{left:"10px"},onClick:t},a.a.createElement(u.b,{size:20}))},l=function(e){var t=e.parent;return a.a.createElement("div",{className:"header-button",style:{left:"50px"}},a.a.createElement(c.a,{to:""===t?"/":t},a.a.createElement(u.a,{size:20})))},f=function(e){var t=e.siteTitle,n=e.parent,r=e.onTreeViewClick;return a.a.createElement("header",null,a.a.createElement("div",null,a.a.createElement(s,{onTreeviewClick:r}),a.a.createElement(l,{parent:n}),a.a.createElement("h1",{style:{margin:0}},a.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};f.defaultProps={siteTitle:""};var p=f,m=(n("vg9a"),n("HCaw"),n("emR8"),function(e){var t=e.className,n=void 0===t?"":t,r=e.name,o=e.link,i=e.section,c=e.children,u=void 0===c?[]:c,s=e.setPosX,l=e.isTabletOrMobile,f=void 0!==l&&l;return a.a.createElement("li",null,a.a.createElement("a",{href:"#"+o,onClick:function(e){console.log("test"),f&&s(0)}},a.a.createElement("span",{className:("node "+n).trim()},a.a.createElement("div",{className:"node-bar"}),a.a.createElement("div",{className:"visibility-box"},a.a.createElement("p",null,i)),a.a.createElement("div",{className:"status"}," "),a.a.createElement("p",null,r))),u.length>0?a.a.createElement("ul",null,u):a.a.createElement(a.a.Fragment,null))}),d=function(e){var t=e.header,n=e.style;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"content-tree",style:n},a.a.createElement("div",{className:"content-tree-search"},a.a.createElement("div",{className:"content-tree-search-container"},a.a.createElement("div",{className:"content-tree-search-icon"}),a.a.createElement("input",{placeholder:"Search..."}))),a.a.createElement("div",{className:"content-tree-container"},a.a.createElement("ul",{className:"content-ul"},t))))},y=function(e){var t=e.setPosX,n=e.style,r=function e(t){document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",o)},o=function(e){e.preventDefault(),t(e.pageX/window.innerWidth*100)};return a.a.createElement("div",{className:"slider",onMouseDown:function(e){0===e.button&&(e.preventDefault(),document.addEventListener("mouseup",r),document.addEventListener("mousemove",o))},style:n})};function v(e){var t=e.data,n=Object(r.useState)(25),c=n[0],u=n[1],s=Object(r.useState)([]),l=s[0],f=s[1],v=t.markdownRemark,b=v.frontmatter,h=v.html,g=Object(o.useMediaQuery)({query:"(max-width: 1224px)"});return Object(r.useEffect)((function(){f(function e(t,n,r,o,i){void 0===r&&(r=!1),void 0===o&&(o=1),void 0===i&&(i="");for(var c=[],u=1!==o?i+".":"",s=1;t.length>0;){var l=t.shift(),f=1===l.depth?"root":"";if(l.depth<o)return t.unshift(l),c;if(0===t.length)c.push(a.a.createElement(m,{key:l.link,className:"last "+f,name:l.name,link:l.link,section:""+u+s,setPosX:n,isTabletOrMobile:r}));else if(t[0].depth>l.depth){var p=e(t,n,r,t[0].depth,""+u+s),d=t.length>0&&t[0].depth<l.depth?"last":"";c.push(a.a.createElement(m,{key:l.link,className:d+" "+f,name:l.name,link:l.link,section:""+u+s,children:p,setPosX:n,isTabletOrMobile:r}))}else{if(t[0].depth!==l.depth)return c.push(a.a.createElement(m,{key:l.link,className:"last",name:l.name,link:l.link,section:""+u+s,setPosX:n,isTabletOrMobile:r})),c;c.push(a.a.createElement(m,{key:l.link,className:f,name:l.name,link:l.link,section:""+u+s,setPosX:n,isTabletOrMobile:r}))}s+=1}return c}(JSON.parse(JSON.stringify(b.header)),u,g))}),[b.header,g]),Object(r.useEffect)((function(){u(g?0:25)}),[g]),a.a.createElement(i.a,null,a.a.createElement(d,{header:l,style:{width:c+"%"}}),a.a.createElement(y,{setPosX:u,style:{left:c+"%"}}),a.a.createElement("div",{className:"content-container",style:{width:"calc("+(100-c)+"% - 2px)"}},a.a.createElement(p,{siteTitle:b.title,parent:b.slug.substring(0,b.slug.lastIndexOf("/")),onTreeViewClick:function(e){return function(e,t,n,r){n(t<5?r?100:25:0)}(0,c,u,g)}}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:h}}),a.a.createElement("footer",{style:{height:"50px"}}))))}},HCaw:function(e,t,n){},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.a.createContext&&a.a.createContext(o),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function s(e){return function(t){return a.a.createElement(l,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return a.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,r=e.attr,o=e.size,i=e.title,s=u(e,["attr","size","title"]),l=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&a.a.createElement("title",null,i),e.children)};return void 0!==i?a.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},emR8:function(e,t,n){},"s/Ur":function(e,t,n){var r;n("E9XD"),"undefined"!=typeof self&&self,e.exports=(r=n("q1tI"),function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=n(1),i=n.n(o),c=n(8),u=n.n(c),s=n(2),l=n(10),f=n.n(l),p=n(3),m=n(6),d=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,n){return t[Object(s.a)(n)]=e[n],t}),{})},y=function(){var e=i.a.useRef(!1);return i.a.useEffect((function(){e.current=!0}),[]),e.current},v=function(e){var t=function(){return function(e){return e.query||Object(p.a)(e)}(e)},n=r(i.a.useState(t),2),a=n[0],o=n[1];return i.a.useEffect((function(){var e=t();a!==e&&o(e)}),[e]),a};t.a=function(e,t,n){var a=function(e){var t=i.a.useContext(m.a),n=function(){return d(e)||d(t)},a=r(i.a.useState(n),2),o=a[0],c=a[1];return i.a.useEffect((function(){var e=n();f()(o,e)||c(e)}),[e,t]),o}(t),o=v(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var c=function(e){var t=r(i.a.useState(e.matches),2),n=t[0],a=t[1];return i.a.useEffect((function(){var t=function(){a(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),n}(function(e,t){var n=function(){return u()(e,t||{},!!t)},a=r(i.a.useState(n),2),o=a[0],c=a[1],s=y();return i.a.useEffect((function(){return s&&c(n()),function(){o.dispose()}}),[e,t]),o}(o,a)),s=y();return i.a.useEffect((function(){s&&n&&n(c)}),[c]),c}},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return"-"+e.toLowerCase()}var a=/[A-Z]/g,o=/^ms-/,i={};t.a=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(a,r);return i[e]=o.test(t)?"-"+t:t}},function(e,t,n){"use strict";var r=n(2),a=n(11);t.a=function(e){var t=[];return Object.keys(a.a.all).forEach((function(n){var a=e[n];null!=a&&t.push(function(e,t){var n=Object(r.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,a))})),t.join(" and ")}},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n(17),o=n(3),i=n(6);n.d(t,"default",(function(){return a.a})),n.d(t,"useMediaQuery",(function(){return r.a})),n.d(t,"toQuery",(function(){return o.a})),n.d(t,"Context",(function(){return i.a}))},function(e,t,n){"use strict";function r(e,t,n){function r(e){i.matches=e.matches,i.media=e.media}var i=this;if(o&&!n){var c=o.call(window,e);this.matches=c.matches,this.media=c.media,c.addListener(r)}else this.matches=a(e,t),this.media=e;this.addListener=function(e){c&&c.addListener(e)},this.removeListener=function(e){c&&c.removeListener(e)},this.dispose=function(){c&&c.removeListener(r)}}var a=n(9).match,o="undefined"!=typeof window?window.matchMedia:null;e.exports=function(e,t,n){return new r(e,t,n)}},function(e,t,n){"use strict";function r(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),n=t[1],r=t[2],a=t[3]||"",o={};return o.inverse=!!n&&"not"===n.toLowerCase(),o.type=r?r.toLowerCase():"all",a=a.match(/\([^\)]+\)/g)||[],o.expressions=a.map((function(e){var t=e.match(u),n=t[1].toLowerCase().match(s);return{modifier:n[1],feature:n[2],value:t[2]}})),o}))}function a(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function o(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function i(e){var t=parseFloat(e);switch(String(e).match(l)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=function(e,t){return r(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var c=e.expressions.every((function(e){var n=e.feature,r=e.modifier,c=e.value,u=t[n];if(!u)return!1;switch(n){case"orientation":case"scan":return u.toLowerCase()===c.toLowerCase();case"width":case"height":case"device-width":case"device-height":c=i(c),u=i(u);break;case"resolution":c=o(c),u=o(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":c=a(c),u=a(u);break;case"grid":case"color":case"color-index":case"monochrome":c=parseInt(c,10)||1,u=parseInt(u,10)||0}switch(r){case"min":return u>=c;case"max":return u<=c;default:return u===c}}));return c&&!n||!c&&n}))},t.parse=r;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,u=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,s=/^(?:(min|max)-)?(.+)/,l=/(em|rem|px|cm|mm|in|pt|pc)?$/,f=/(dpi|dpcm|dppx)?$/},function(e,t,n){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var i=n[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}},function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=n(12),c=n.n(i),u=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:u},l=a({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:u,maxResolution:u},s),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=a(a({},f),l);s.type=Object.keys(f),t.a={all:p,types:f,matchers:s,features:l}},function(e,t,n){var r=n(4);e.exports=n(14)(r.isElement,!0)},function(e,t,n){"use strict";!function(){function e(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:var n=e.type;switch(n){case f:case p:case i:case u:case c:case d:return n;default:var r=n&&n.$$typeof;switch(r){case l:case m:case b:case v:case s:return r;default:return t}}case o:return t}}}function n(t){return e(t)===p}var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119,E=f,x=p,j=l,S=s,k=a,P=m,C=i,I=b,T=v,N=o,R=u,A=c,$=d,M=!1;t.AsyncMode=E,t.ConcurrentMode=x,t.ContextConsumer=j,t.ContextProvider=S,t.Element=k,t.ForwardRef=P,t.Fragment=C,t.Lazy=I,t.Memo=T,t.Portal=N,t.Profiler=R,t.StrictMode=A,t.Suspense=$,t.isAsyncMode=function(t){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(t)||e(t)===f},t.isConcurrentMode=n,t.isContextConsumer=function(t){return e(t)===l},t.isContextProvider=function(t){return e(t)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(t){return e(t)===m},t.isFragment=function(t){return e(t)===i},t.isLazy=function(t){return e(t)===b},t.isMemo=function(t){return e(t)===v},t.isPortal=function(t){return e(t)===o},t.isProfiler=function(t){return e(t)===u},t.isStrictMode=function(t){return e(t)===c},t.isSuspense=function(t){return e(t)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===u||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===v||e.$$typeof===s||e.$$typeof===l||e.$$typeof===m||e.$$typeof===g||e.$$typeof===O||e.$$typeof===w||e.$$typeof===h)},t.typeOf=e}()},function(e,t,n){"use strict";function r(){return null}var a,o=n(4),i=n(15),c=n(5),u=n(16),s=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){function n(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function l(e){this.message=e,this.stack=""}function f(e){function n(n,i,u,s,f,p,m){if(s=s||g,p=p||u,m!==c){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){var y=s+":"+u;!r[y]&&o<3&&(a("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,o++)}}return null==i[u]?n?new l(null===i[u]?"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+f+" `"+p+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(i,u,s,f,p)}var r={},o=0,i=n.bind(null,!1);return i.isRequired=n.bind(null,!0),i}function p(e){return f((function(t,n,r,a,o,i){var c=t[n];return d(c)!==e?new l("Invalid "+a+" `"+o+"` of type `"+y(c)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var n=function(e){var t=e&&(b&&e[b]||e[h]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,a=n.call(t);if(n!==t.entries){for(;!(r=a.next()).done;)if(!m(r.value))return!1}else for(;!(r=a.next()).done;){var o=r.value;if(o&&!m(o[1]))return!1}return!0;default:return!1}}function d(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=d(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var b="function"==typeof Symbol&&Symbol.iterator,h="@@iterator",g="<<anonymous>>",O={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r),arrayOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+a+" `"+o+"` of type `"+d(i)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<i.length;u++){var s=e(i,u,r,a,o+"["+u+"]",c);if(s instanceof Error)return s}return null}))},element:f((function(t,n,r,a,o){var i=t[n];return e(i)?null:new l("Invalid "+a+" `"+o+"` of type `"+d(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(e,t,n,r,a){var i=e[t];return o.isValidElementType(i)?null:new l("Invalid "+r+" `"+a+"` of type `"+d(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||g;return new l("Invalid "+a+" `"+o+"` of type `"+((c=t[n]).constructor&&c.constructor.name?c.constructor.name:g)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var c;return null}))},node:f((function(e,t,n,r,a){return m(e[t])?null:new l("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,a,o){if("function"!=typeof e)return new l("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],u=d(i);if("object"!==u)return new l("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var f in i)if(s(i,f)){var p=e(i,f,r,a,o+"."+f,c);if(p instanceof Error)return p}return null}))},oneOf:function(e){function t(t,r,a,o,i){for(var c=t[r],u=0;u<e.length;u++)if(n(c,e[u]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new l("Invalid "+o+" `"+i+"` of value `"+String(c)+"` supplied to `"+a+"`, expected one of "+s+".")}return Array.isArray(e)?f(t):(a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),r)},oneOfType:function(e){if(!Array.isArray(e))return a("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(n)+" at index "+t+"."),r}return f((function(t,n,r,a,o){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,a,o,c))return null;return new l("Invalid "+a+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,a,o){var i=t[n],u=d(i);if("object"!==u)return new l("Invalid "+a+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(i,s,r,a,o+"."+s,c);if(p)return p}}return null}))},exact:function(e){return f((function(t,n,r,a,o){var u=t[n],s=d(u);if("object"!==s)return new l("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var m=e[p];if(!m)return new l("Invalid "+a+" `"+o+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(u,p,r,a,o+"."+p,c);if(y)return y}return null}))}};return l.prototype=Error.prototype,O.checkPropTypes=u,O.resetWarningCache=u.resetWarningCache,O.PropTypes=O,O}},function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,c,u=r(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(u[l]=n[l]);if(a){c=a(n);for(var f=0;f<c.length;f++)i.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}},function(e,t,n){"use strict";function r(e,t,n,r,u){for(var s in e)if(c(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,r,n,null,o)}catch(m){l=m}if(!l||l instanceof Error||a((r||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";a("Failed "+n+" type: "+l.message+(null!=p?p:""))}}}var a=function(){},o=n(5),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},r.resetWarningCache=function(){i={}},e.exports=r},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.children,n=e.device,o=e.onChange,i=r(e,["children","device","onChange"]),c=Object(a.a)(i,n,o);return"function"==typeof t?t(c):c?t:null};var a=n(0)}]))},vg9a:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-template-js-a519da0bb8896797df7a.js.map