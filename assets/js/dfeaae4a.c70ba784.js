"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4084],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98621:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={},u=void 0,c={unversionedId:"printf",id:"printf",isDocsHomePage:!1,title:"printf",description:"The printf performs like its C counterpart, printing a formatted string.",source:"@site/docs/printf.md",sourceDirName:".",slug:"/printf",permalink:"/docs/printf",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/printf.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"includeexternal",permalink:"/docs/includeexternal"},next:{title:"require",permalink:"/docs/require"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}],s={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"printf")," performs like its C counterpart, printing a formatted string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'printf("format", ...)\n')),(0,o.kt)("p",null,"It is equivalent to this Lua code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"print(string.format(format, unpack(arg))\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"format")," is a formatting string containing C ",(0,o.kt)("inlineCode",{parentName:"p"},"printf()")," style formatting codes. It is followed by a list of arguments to be substituted into the format string."),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"None."))}f.isMDXComponent=!0}}]);