(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(417)),i={},l={unversionedId:"require",id:"require",isDocsHomePage:!1,title:"require",description:"An extension of Lua's require() function which adds support for Premake modules and version checking.",source:"@site/docs/require.md",slug:"/require",permalink:"/docs/require",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/require.md",version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1618068955,sidebar:"docs",previous:{title:"printf",permalink:"/docs/printf"},next:{title:"verbosef",permalink:"/docs/verbosef"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An extension of ",Object(o.b)("a",{parentName:"p",href:"http://www.lua.org/pil/8.1.html"},"Lua's require() function")," which adds support for Premake modules and version checking."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require ("modname", "versions")\n')),Object(o.b)("p",null,"Premake will use its ",Object(o.b)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"extended set of module locations")," when locating the requested module."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"modname")," is the name of the module to be loaded. See ",Object(o.b)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"Locating Scripts")," for more information about how Premake modules are located."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"versions")," is an optional string of a version requirements. See the examples below for more information on the format of the requirements string. If the requirements are not met, an error will be raised."),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)("p",null,"The module object."),Object(o.b)("h3",{id:"availability"},"Availability"),Object(o.b)("p",null,"Premake 5.0 or later."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Require Premake version 5.0 or later."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("premake", ">=5.0")\n')),Object(o.b)("p",null,'If no operator is specified, defaults to ">=". I think it is a little more readable to include it though.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("premake", "5.0")\n')),Object(o.b)("p",null,"Require a version 5.0 alpha 3 or later."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("premake", ">=5.0.0-alpha3")\n')),Object(o.b)("p",null,"Require anything between Premake version 5.1 and 6.0."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("premake", ">=5.0 <6.0")\n')),Object(o.b)("p",null,"The same rules apply to third-party modules."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-lua"},'require("foo", ">=1.1")\n')),Object(o.b)("h3",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/_PREMAKE_VERSION"},"_PREMAKE_VERSION"))))}p.isMDXComponent=!0},417:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return t?a.a.createElement(d,l(l({ref:r},u),{},{components:t})):a.a.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);