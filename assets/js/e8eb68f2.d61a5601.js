"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2823],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43038:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=r(58168),n=(r(96540),r(15680));const i={},l=void 0,p={unversionedId:"path.iscppfile",id:"path.iscppfile",isDocsHomePage:!1,title:"path.iscppfile",description:"Returns true if the specified path represents a C++ source code file, based on its file extension.",source:"@site/docs/path.iscppfile.md",sourceDirName:".",slug:"/path.iscppfile",permalink:"/docs/path.iscppfile",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/path.iscppfile.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"path.iscfile",permalink:"/docs/path.iscfile"},next:{title:"path.iscppheader",permalink:"/docs/path.iscppheader"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],s={toc:o},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Returns true if the specified path represents a C++ source code file, based on its file extension."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'path.iscppfile("path")\n')),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"path")," is the file system path to be tested."),(0,n.yg)("h3",{id:"return-value"},"Return Value"),(0,n.yg)("p",null,"True if the path matches a well-known C file extension, which currently includes ",(0,n.yg)("inlineCode",{parentName:"p"},".cc"),", ",(0,n.yg)("inlineCode",{parentName:"p"},".cpp"),", ",(0,n.yg)("inlineCode",{parentName:"p"},".cxx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},".c"),", ",(0,n.yg)("inlineCode",{parentName:"p"},".s"),", ",(0,n.yg)("inlineCode",{parentName:"p"},".m"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},".mm"),"."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.0 or later."),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.islinkable"},"path.islinkable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile"))))}u.isMDXComponent=!0}}]);