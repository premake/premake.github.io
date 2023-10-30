"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7437:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},i=void 0,o={unversionedId:"callingconvention",id:"callingconvention",isDocsHomePage:!1,title:"callingconvention",description:"Sets the function calling convention.",source:"@site/docs/callingconvention.md",sourceDirName:".",slug:"/callingconvention",permalink:"/docs/callingconvention",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/callingconvention.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1631738171,formattedLastUpdatedAt:"9/15/2021",frontMatter:{},sidebar:"docs",previous:{title:"buildstlmodules",permalink:"/docs/buildstlmodules"},next:{title:"cdialect",permalink:"/docs/cdialect"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],p={toc:c},u="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sets the ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_calling_conventions"},"function calling convention"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'callingconvention ("value")\n')),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value")," is one of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Cdecl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FastCall")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"StdCall")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VectorCall"))),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 5.0 or later."))}s.isMDXComponent=!0}}]);