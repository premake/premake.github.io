(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{377:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(417)),l={},i={unversionedId:"http.post",id:"http.post",isDocsHomePage:!1,title:"http.post",description:"Perform a HTTP POST request to the specified URL.",source:"@site/docs/http.post.md",slug:"/http.post",permalink:"/docs/http.post",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http.post.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1618068955,sidebar:"docs",previous:{title:"http.get",permalink:"/docs/http.get"},next:{title:"HTTP Options",permalink:"/docs/http-options-table"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Values",id:"return-values",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Perform a HTTP POST request to the specified URL."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"http.post(url, data, { options })\n")),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"url")," is the URL to POST to."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"data")," is a string containing the data to post."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"options")," is a ",Object(o.b)("a",{parentName:"p",href:"/docs/http-options-table"},"table of options")," used for this HTTP request. "),Object(o.b)("h3",{id:"return-values"},"Return Values"),Object(o.b)("p",null,"There are three return values."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},"resource, result_str, response_code = http.post(url, data, { options })\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resource")," is the content that was retrieved or nil if it could not be retrieved."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"result_str"),' is set to "OK" if successful or contains a description of the failure.'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"result_code")," is the HTTP ",Object(o.b)("a",{parentName:"li",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"result code")," of the get. ")),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'local resource, result_str, response_code = http.post("http://example.com/api.json", "somedata")\n')),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/http.download"},"http.download")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/http.get"},"http.get"))))}s.isMDXComponent=!0},417:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);