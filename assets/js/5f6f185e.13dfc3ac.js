"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8553],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92283:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p=void 0,c={unversionedId:"objdir",id:"objdir",isDocsHomePage:!1,title:"objdir",description:"Sets the directory where object and other intermediate files should be placed when building a project.",source:"@site/docs/objdir.md",sourceDirName:".",slug:"/objdir",permalink:"/docs/objdir",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/objdir.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"nugetsource",permalink:"/docs/nugetsource"},next:{title:"omitframepointer",permalink:"/docs/omitframepointer"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sets the directory where object and other intermediate files should be placed when building a project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'objdir ("path")\n')),(0,o.kt)("p",null,'By default, intermediate files will be stored in a directory named "obj" in the same directory as the project. The ',(0,o.kt)("inlineCode",{parentName:"p"},"objdir")," function allows you to change this location."),(0,o.kt)("p",null,'To avoid conflicts between build configurations, Premake will ensure that each intermediate directory is unique by appending one or more of the build configuration name, platform name, or project name. You may use the "!" prefix to prevent this behavior, and allow overlapping intermediate directories. See the examples below for more information.'),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"path")," is the directory where the object and intermediate files should be stored, specified relative to the currently executing script file. ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tokens"},"Tokens")," maybe be used."),(0,o.kt)("h3",{id:"applies-to"},"Applies To"),(0,o.kt)("p",null,"Project configurations."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,'Premake 4.0 or later. The "!" prefix was introduced in Premake 5.0.'),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,'Use a directory named "obj" (the default) for intermediate files. Actual directories will be ',(0,o.kt)("inlineCode",{parentName:"p"},"obj/Debug")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/Release"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   objdir "obj"\n')),(0,o.kt)("p",null,'Use a directory named "obj" (the default) for intermediate files. Actual directories will be ',(0,o.kt)("inlineCode",{parentName:"p"},"obj/Debug/x32"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/Debug/x64"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/Release/x32"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/Release/x64"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "obj"\n')),(0,o.kt)("p",null,"Use tokens to reformat the path. Since the end result is unique, Premake will not append any extra directories. Actual directories will be ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/x32_Debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/x64_Debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/x32_Release"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"obj/x64_Release"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "obj/%{cfg.platform}_%{cfg.buildcfg}"\n')),(0,o.kt)("p",null,'Use the "!" prefix to force a specific directory using Visual Studio\'s provided environment variables instead of Premake tokens.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   platforms { "x32", "x64" }\n\nproject "MyProject"\n   objdir "!obj/$(Platform)_$(Configuration)"\n')))}d.isMDXComponent=!0}}]);