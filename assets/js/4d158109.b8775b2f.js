"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8972],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Configurations & Platforms"},l=void 0,u={unversionedId:"Configurations-and-Platforms",id:"Configurations-and-Platforms",isDocsHomePage:!1,title:"Configurations & Platforms",description:'A configuration is a collection of settings to apply to a build, including flags and switches, header file and library search directories, and more. Each workspace defines its own list of configuration names; the default provided by most IDEs is "Debug" and "Release".',source:"@site/docs/Configurations-and-Platforms.md",sourceDirName:".",slug:"/Configurations-and-Platforms",permalink:"/docs/Configurations-and-Platforms",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Configurations-and-Platforms.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Configurations & Platforms"},sidebar:"docs",previous:{title:"Linking",permalink:"/docs/Linking"},next:{title:"Filters",permalink:"/docs/Filters"}},c=[{value:"Build Configurations",id:"build-configurations",children:[],level:2},{value:"Platforms",id:"platforms",children:[],level:2},{value:"Per-Project Configurations",id:"per-project-configurations",children:[],level:2}],p={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"configuration"),' is a collection of settings to apply to a build, including flags and switches, header file and library search directories, and more. Each workspace defines its own list of configuration names; the default provided by most IDEs is "Debug" and "Release".'),(0,r.kt)("h2",{id:"build-configurations"},"Build Configurations"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/Your-First-Script"},"previous examples")," showed how to specify build configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n')),(0,r.kt)("p",null,"You are not limited to these names, but can use whatever makes sense to your software project and build environment. For instance, if your project can be built as both static or shared libraries, you might use this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "DebugDLL", "Release", "ReleaseDLL" }\n')),(0,r.kt)("p",null,"It is important to note that these names have no meaning in and of themselves, and that you can use whatever names you like."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Froobniz", "Fozbat", "Cthulhu" }\n')),(0,r.kt)("p",null,"The meaning of the build configuration depends on the settings you apply to it, as shown in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Your-First-Script"},"the earlier examples"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "HelloWorld"\n   configurations { "Debug", "Release" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n      flags { "Symbols" }\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n      optimize "On"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/Filters"},"Filters")," section will cover this in more detail."),(0,r.kt)("h2",{id:"platforms"},"Platforms"),(0,r.kt)("p",null,'"Platforms" is a bit of a misnomer here; once again I am following the Visual Studio nomenclature. Really, platforms are just another set of build configuration names, providing another axis on which to configure your project.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Win32", "Win64", "Xbox360" }\n')),(0,r.kt)("p",null,'Once set, your listed platforms will appear in the Platforms list of your IDE. So you can choose a "Debug Win32" build, or a "Release Xbox360" build, or any combination of the two lists.'),(0,r.kt)("p",null,"Just like the build configurations, the platform names have no meaning on their own. You provide meaning by applying settings using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/filter"},(0,r.kt)("inlineCode",{parentName:"a"},"filter"))," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Win32", "Win64", "Xbox360" }\n\nfilter { "platforms:Win32" }\n    system "Windows"\n    architecture "x86"\n\nfilter { "platforms:Win64" }\n    system "Windows"\n    architecture "x86_64"\n\nfilter { "platforms:Xbox360" }\n    system "Xbox360"\n')),(0,r.kt)("p",null,"Unlike build configurations, platforms are completely optional. If you don't need them, just don't call the platforms function at all and the toolset's default behavior will be used."),(0,r.kt)("p",null,"Platforms are just another form of build configuration. You can use all of the same settings, and the same scoping rules apply. You can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/system"},(0,r.kt)("inlineCode",{parentName:"a"},"system"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture"},(0,r.kt)("inlineCode",{parentName:"a"},"architecture"),"()`"),' settings without platforms, and you can use otherwise non-platform settings in a platform configuration. If you\'ve ever done build configurations like "Debug Static", "Debug DLL", "Release Static", and "Release DLL", platforms can really simplify things.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'configurations { "Debug", "Release" }\nplatforms { "Static", "DLL" }\n\nfilter { "platforms:Static" }\n    kind "StaticLib"\n\nfilter { "platforms:DLL" }\n    kind "SharedLib"\n    defines { "DLL_EXPORTS" }\n')),(0,r.kt)("h2",{id:"per-project-configurations"},"Per-Project Configurations"),(0,r.kt)("p",null,"Configurations and platform lists may now be specified per-project. As an example, a project that should build for Windows, but not for a game console, can remove that platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n    configurations { "Debug", "Release" }\n    platforms { "Windows", "PS3" }\n\nproject "MyProject"\n    removeplatforms { "PS3" }\n')),(0,r.kt)("p",null,"A related feature, configuration maps, translate a workspace-level configuration to project-level values, allowing projects with different configuration and platform lists to be combined in a single workspace. For example, a unit test library might be configured with the generic debug and release configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'project "UnitTest"\n    configurations { "Debug", "Release" }\n\n')),(0,r.kt)("p",null,"To reuse that test project in a workspace which contains a more complex set of configurations, create a mapping from the workspace's configurations to the corresponding project configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n    configurations { "Debug", "Development", "Profile", "Release" }\n\nproject "UnitTest"\n    configmap {\n        ["Development"] = "Debug",\n        ["Profile"] = "Release"\n    }\n')),(0,r.kt)("p",null,"It is important to note that projects can't ",(0,r.kt)("em",{parentName:"p"},"add")," new configurations to the workspace. They can only remove support for existing workspace configurations, or map them to a different project configuration."))}f.isMDXComponent=!0}}]);