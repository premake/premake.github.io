"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,b=d["".concat(c,".").concat(y)]||d[y]||p[y]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59945:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"table.keys",id:"table.keys",isDocsHomePage:!1,title:"table.keys",description:"Return an array of all keys used in a table.",source:"@site/docs/table.keys.md",sourceDirName:".",slug:"/table.keys",permalink:"/docs/table.keys",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.keys.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"table.join",permalink:"/docs/table.join"},next:{title:"table.merge",permalink:"/docs/table.merge"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return an array of all keys used in a table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"table.keys(tbl)\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tbl")," is the table to be enumerated."),(0,a.kt)("h3",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"A new array containing all of the keys encountered in the table."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 5.0 or later."))}s.isMDXComponent=!0}}]);