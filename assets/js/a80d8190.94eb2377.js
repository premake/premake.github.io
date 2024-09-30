"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2678],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=l,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54351:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(58168),l=(r(96540),r(15680));const a={},i=void 0,o={unversionedId:"linker",id:"linker",isDocsHomePage:!1,title:"linker",description:"Specifies the linker.",source:"@site/docs/linker.md",sourceDirName:".",slug:"/linker",permalink:"/docs/linker",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/linker.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727635129,formattedLastUpdatedAt:"9/29/2024",frontMatter:{},sidebar:"docs",previous:{title:"linkbuildoutputs",permalink:"/docs/linkbuildoutputs"},next:{title:"linkgroups",permalink:"/docs/linkgroups"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],c={toc:p},s="wrapper";function u(e){let{components:t,...r}=e;return(0,l.yg)(s,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Specifies the linker."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-lua"},'linker("value")\n')),(0,l.yg)("h3",{id:"parameters"},"Parameters"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"value")," string, one of:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Default")," - uses the toolset platform default linker."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"LLD")," - uses LLVM's LLD linker (supported on ",(0,l.yg)("inlineCode",{parentName:"li"},"gcc")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"clang")," toolsets).")),(0,l.yg)("h3",{id:"applies-to"},"Applies To"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"config")," scope."),(0,l.yg)("h3",{id:"availability"},"Availability"),(0,l.yg)("p",null,"Premake 5.0 beta 3 or later."),(0,l.yg)("h3",{id:"examples"},"Examples"),(0,l.yg)("p",null,"Sets ",(0,l.yg)("inlineCode",{parentName:"p"},"LLD")," as the linker."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-lua"},'filter { "toolset:clang" }\n   linker { "LLD" }\n')))}u.isMDXComponent=!0}}]);