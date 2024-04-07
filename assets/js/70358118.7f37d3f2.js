"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3196],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?a.createElement(m,l(l({ref:t},s),{},{components:r})):a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},38907:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"location",id:"location",isDocsHomePage:!1,title:"location",description:"Sets the destination directory for a generated workspace or project file.",source:"@site/docs/location.md",sourceDirName:".",slug:"/location",permalink:"/docs/location",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/location.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1631130138,formattedLastUpdatedAt:"9/8/2021",frontMatter:{},sidebar:"docs",previous:{title:"locale",permalink:"/docs/locale"},next:{title:"llvmdir",permalink:"/docs/llvmdir"}},c=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(s,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Sets the destination directory for a generated workspace or project file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'location ("path")\n')),(0,n.yg)("p",null,"By default, workspace and project files are generated into the same directory as the script that defines them. The ",(0,n.yg)("inlineCode",{parentName:"p"},"location")," function allows you to change this location."),(0,n.yg)("p",null,"Note that unlike other values, ",(0,n.yg)("inlineCode",{parentName:"p"},"location")," does not automatically propagate to the contained projects. Projects will use their default location unless explicitly overridden."),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"path")," is the directory where the generated files should be stored, specified relative to the currently executing script file."),(0,n.yg)("h3",{id:"applies-to"},"Applies To"),(0,n.yg)("p",null,"Workspaces and projects."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.0 or later."),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("p",null,"Set the destination directory for a workspace. Setting the location for a project works the same way."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n  location "../build"\n')),(0,n.yg)("p",null,"If you plan to build with multiple tools from the same source tree you might want to split up the project files by toolset. The ",(0,n.yg)("a",{parentName:"p",href:"/docs/_ACTION"},"_ACTION")," global variable contains the current toolset identifier, as specified on the command line. Note that Lua syntax requires parenthesis around the function parameters in this case."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'location ("../build/" .. _ACTION)\n')))}u.isMDXComponent=!0}}]);