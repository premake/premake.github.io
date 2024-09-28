"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3790],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36674:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={id:"_TARGET_OS"},i=void 0,l={unversionedId:"_TARGET_OS",id:"_TARGET_OS",isDocsHomePage:!1,title:"_TARGET_OS",description:"Stores the name of the operating system currently being targeted; see system() for a complete list of OS identifiers.",source:"@site/docs/premake_TARGET_OS.md",sourceDirName:".",slug:"/_TARGET_OS",permalink:"/docs/_TARGET_OS",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/premake_TARGET_OS.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727462851,formattedLastUpdatedAt:"9/27/2024",frontMatter:{id:"_TARGET_OS"},sidebar:"docs",previous:{title:"_TARGET_ARCH",permalink:"/docs/_TARGET_ARCH"},next:{title:"iif",permalink:"/docs/iif"}},c=[{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Stores the name of the operating system currently being targeted; see ",(0,a.yg)("a",{parentName:"p",href:"/docs/system"},"system()")," for a complete list of OS identifiers."),(0,a.yg)("p",null,"The current OS may be overridden on the command line with the ",(0,a.yg)("inlineCode",{parentName:"p"},"--os")," option."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ premake5 --os=linux gmake\n")),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0 alpha 12 or later."),(0,a.yg)("h2",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/_TARGET_ARCH"},"_TARGET_ARCH"))))}u.isMDXComponent=!0}}]);