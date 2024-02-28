"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6721],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19107:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const i={},l=void 0,o={unversionedId:"links",id:"links",isDocsHomePage:!1,title:"links",description:"Specifies a list of libraries and projects to link against.",source:"@site/docs/links.md",sourceDirName:".",slug:"/links",permalink:"/docs/links",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/links.md",tags:[],version:"current",lastUpdatedBy:"Nicholaus Clark",lastUpdatedAt:1648604801,formattedLastUpdatedAt:"3/30/2022",frontMatter:{},sidebar:"docs",previous:{title:"linkoptions",permalink:"/docs/linkoptions"},next:{title:"locale",permalink:"/docs/locale"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Specifies a list of libraries and projects to link against."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'links { "references" }\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"references")," is a list of library and project names."),(0,a.yg)("p",null,"When linking against another project in the same workspace, specify the project name here, rather than the library name. Premake will figure out the correct library to link against for the current configuration, and will also create a dependency between the projects to ensure a proper build order."),(0,a.yg)("p",null,"When linking against system libraries, do not include any prefix or file extension. Premake will use the appropriate naming conventions for the current platform. With two exceptions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Managed C++ projects can link against managed assemblies by explicitly specifying the ".dll" file extension. Unmanaged libraries should continue to be specified without any decoration.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'Objective C frameworks can be linked by explicitly including the ".framework" file extension.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For Visual Studio, this will add the specified project into References.  In contrast, 'dependson' generates a build order dependency in the solution between two projects."))),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"Project configurations."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 4.0 or later."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Link against some system libraries."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'filter { "system:windows" }\n   links { "user32", "gdi32" }\n\nfilter { "system:linux" }\n   links { "m", "png" }\n\nfilter { "system:macosx" }\n   -- OS X frameworks need the extension to be handled properly\n   links { "Cocoa.framework", "png" }\n')),(0,a.yg)("p",null,"  In a workspace with two projects, link the library into the executable. Note that the project name is used to specify the link; Premake will automatically figure out the correct library file name and directory and create a project dependency."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyExecutable"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "MyLibrary" }\n\n   project "MyLibrary"\n      kind "SharedLib"\n      files "**.cpp"\n')),(0,a.yg)("p",null,"You may specify the linking mechanism explicitly for each library.  To set the link type of a library explicitly, add a ",(0,a.yg)("inlineCode",{parentName:"p"},":static")," or ",(0,a.yg)("inlineCode",{parentName:"p"},":shared")," suffix to the library.  Note that this functionality is only available for the ",(0,a.yg)("inlineCode",{parentName:"p"},"gcc")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"clang")," toolsets."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyExecutable"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "LibraryA:static", "LibraryB:shared" }\n')),(0,a.yg)("p",null,"You may also create links between non-library projects. In this case, Premake will generate a build dependency (the linked project will build first), but not an actual link. In this example, MyProject uses a build dependency to ensure that MyTool gets built first. It then uses MyTool as part of its build process."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   language "C++"\n\n   project "MyProject"\n      kind "ConsoleApp"\n      files "**.cpp"\n      links { "MyTool" }\n      prebuildcommands { "MyTool --dosomething" }\n\n   project "MyTool"\n      kind "ConsoleApp"\n      files "**.cpp"\n')))}u.isMDXComponent=!0}}]);