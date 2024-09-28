"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6569],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>u});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,u=m["".concat(s,".").concat(y)]||m[y]||d[y]||i;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86770:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const i={id:"_OS"},o=void 0,l={unversionedId:"_OS",id:"_OS",isDocsHomePage:!1,title:"_OS",description:"This has been deprecated in Premake 5.0 alpha 12. Use the new TARGETOS instead.",source:"@site/docs/premake_OS.md",sourceDirName:".",slug:"/_OS",permalink:"/docs/_OS",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/premake_OS.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727462851,formattedLastUpdatedAt:"9/27/2024",frontMatter:{id:"_OS"},sidebar:"docs",previous:{title:"_OPTIONS",permalink:"/docs/_OPTIONS"},next:{title:"_PREMAKE_COMMAND",permalink:"/docs/_PREMAKE_COMMAND"}},s=[{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"_")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},(0,a.yg)("strong",{parentName:"p"},"This has been deprecated in Premake 5.0 alpha 12.")," Use the new ",(0,a.yg)("a",{parentName:"p",href:"/docs/_TARGET_OS"},"_TARGET_OS")," instead."))),(0,a.yg)("p",null,"Stores the name of the operating system currently being targeted; see ",(0,a.yg)("a",{parentName:"p",href:"/docs/system"},"system()")," for a complete list of OS identifiers."),(0,a.yg)("p",null,"The current OS may be overridden on the command line with the ",(0,a.yg)("inlineCode",{parentName:"p"},"--os")," option."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"$ premake5 --os=linux gmake\n")),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 4.0 or later."),(0,a.yg)("h2",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/_TARGET_OS"},"_TARGET_OS")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/Using-Premake"},"Using Premake"))))}m.isMDXComponent=!0}}]);