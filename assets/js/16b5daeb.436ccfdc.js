"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4705],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=l,y=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34618:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(58168),l=(r(96540),r(15680));const a={},o=void 0,i={unversionedId:"enablemodules",id:"enablemodules",isDocsHomePage:!1,title:"enablemodules",description:"Sets whether or not the compiler should enable C++20 modules.",source:"@site/docs/enablemodules.md",sourceDirName:".",slug:"/enablemodules",permalink:"/docs/enablemodules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/enablemodules.md",tags:[],version:"current",lastUpdatedBy:"Nick Clark",lastUpdatedAt:1698686310,formattedLastUpdatedAt:"10/30/2023",frontMatter:{},sidebar:"docs",previous:{title:"enabledefaultcompileitems",permalink:"/docs/enabledefaultcompileitems"},next:{title:"enableunitybuild",permalink:"/docs/enableunitybuild"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3}],c={toc:p},u="wrapper";function s(e){let{components:t,...r}=e;return(0,l.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Sets whether or not the compiler should enable C++20 modules."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-lua"},'enablemodules("value")\n')),(0,l.yg)("h3",{id:"parameters"},"Parameters"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"value")," is one of:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"On")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Off"))),(0,l.yg)("h3",{id:"applies-to"},"Applies To"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"config")," scope."),(0,l.yg)("h3",{id:"availability"},"Availability"),(0,l.yg)("p",null,"Premake 5.0.0 beta 3 or later for Visual Studio 2019 and later."))}s.isMDXComponent=!0}}]);