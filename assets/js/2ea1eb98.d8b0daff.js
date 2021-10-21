"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2733],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Makefile Projects"},s=void 0,c={unversionedId:"Makefile-Projects",id:"Makefile-Projects",isDocsHomePage:!1,title:"Makefile Projects",description:"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process.",source:"@site/docs/Makefile-Projects.md",sourceDirName:".",slug:"/Makefile-Projects",permalink:"/docs/Makefile-Projects",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Makefile-Projects.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Makefile Projects"}},u=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Current Issues",id:"current-issues",children:[]},{value:"See Also",id:"see-also",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Makefile projects give you the ability to completely specify the build and clean commands for a project, and are useful when you would like to shell out to an existing Makefile or other command line process."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),(0,a.kt)("p",null,"This closely follows Visual Studio's own Makefile project feature, but it should be easy to see how it would translate to makefiles."),(0,a.kt)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination."),(0,a.kt)("p",null,"If the outputs include any object files, they will be automatically added to the link step. Ideally, any source code files included in the outputs would be fed back into the build, but that is not the case currently."),(0,a.kt)("h2",{id:"current-issues"},"Current Issues"),(0,a.kt)("p",null,"Makefile projects currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The feature only works for Visual Studio currently.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location."))),(0,a.kt)("p",null,"(Did I miss anything?)"),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Custom-Rules"},"Custom Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))))}d.isMDXComponent=!0}}]);