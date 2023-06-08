"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=l,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(y,n(n({ref:t},p),{},{components:r})):a.createElement(y,n({ref:t},p))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,n=new Array(i);n[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:l,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5697:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=r(87462),l=(r(67294),r(3905));const i={},n=void 0,s={unversionedId:"syslibdirs",id:"syslibdirs",isDocsHomePage:!1,title:"syslibdirs",description:"Specifies the system library search paths.",source:"@site/docs/syslibdirs.md",sourceDirName:".",slug:"/syslibdirs",permalink:"/docs/syslibdirs",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/syslibdirs.md",tags:[],version:"current",lastUpdatedBy:"Chad Engler",lastUpdatedAt:1641227504,formattedLastUpdatedAt:"1/3/2022",frontMatter:{},sidebar:"docs",previous:{title:"sysincludedirs",permalink:"/docs/sysincludedirs"},next:{title:"system",permalink:"/docs/system"}},o=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:o},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Specifies the system library search paths."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "paths" }\n')),(0,l.kt)("p",null,'For Visual Studio, these paths are placed in the "VC++ Directories" properties panel. For all other tools they are treated as a normal library search path.'),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"paths")," specifies a list of library search directories. Paths should be specified relative to the currently running script file."),(0,l.kt)("h3",{id:"applies-to"},"Applies To"),(0,l.kt)("p",null,"Project configurations."),(0,l.kt)("h3",{id:"availability"},"Availability"),(0,l.kt)("p",null,"Premake 5.0 or later."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Define two system library search paths."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "../lua/libs", "../zlib" }\n')),(0,l.kt)("p",null,"You can also use wildcards to match multiple directories. The * will match against a single directory, ** will recurse into subdirectories as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'syslibdirs { "../libs/**" }\n')),(0,l.kt)("h3",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/externalincludedirs"},"externalincludedirs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/libdirs"},"libdirs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/sysincludedirs"},"sysincludedirs"))))}d.isMDXComponent=!0}}]);