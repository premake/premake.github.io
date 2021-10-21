"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3496],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Filters"},l=void 0,c={unversionedId:"Filters",id:"Filters",isDocsHomePage:!1,title:"Filters",description:"Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, and more.",source:"@site/docs/Filters.md",sourceDirName:".",slug:"/Filters",permalink:"/docs/Filters",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Filters.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Filters"},sidebar:"docs",previous:{title:"Configurations & Platforms",permalink:"/docs/Configurations-and-Platforms"},next:{title:"Build Settings",permalink:"/docs/Build-Settings"}},u=[],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, ",(0,a.kt)("a",{parentName:"p",href:"/docs/filter"},"and more"),"."),(0,a.kt)("p",null,'Here is an example which sets a preprocessor symbol named "DEBUG" in a workspace\'s "Debug" build configuration, and "NDEBUG" in the Release configuration.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n')),(0,a.kt)("p",null,"Filters are always made up of two parts: a ",(0,a.kt)("em",{parentName:"p"},"prefix")," that specifies which field is being filtered against, and a ",(0,a.kt)("em",{parentName:"p"},"pattern")," that specifies which values of that field should be accepted. Here is another example that filters by the target action:"),(0,a.kt)("p",null,'Filters follow Premake\'s pseudo-declarative style for its scripts: calling filter() makes that filter condition "active". All settings which subsequently appear in the script will be filtered by this condition until a new filter or container (workspace, project) is activated.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- All of these settings will appear in the Debug configuration\nfilter "configurations:Debug"\n  defines { "DEBUG" }\n  flags { "Symbols" }\n\n-- All of these settings will appear in the Release configuration\nfilter "configurations:Release"\n  defines { "NDEBUG" }\n  optimize "On"\n\n-- This is a sneaky bug (assuming you always want to link against these lib files).\n-- Because the last filter set was Release. These libraries will only be linked for release.\n-- To fix this place this after the "Deactivate" filter call below. Or before any filter calls.\nlinks { "png", "zlib" }\n\n-- "Deactivate" the current filter; these settings will apply\n-- to the entire workspace or project (whichever is active)\nfilter {}\n  files { "**.cpp" }\n')),(0,a.kt)("p",null,'Filters are evaluated at generation time, when the workspace or project file is being created and written to disk. When it comes time to output the settings for this workspace\'s "Debug" build configuration, Premake evaluates the list of filters to find those that match the "Debug" criteria.'),(0,a.kt)("p",null,'Using the above example, Premake would first consider the filter "configurations:Debug". It would check the name of the configuration that was currently being output, see that it matched, and so include any settings up to the next filter call.'),(0,a.kt)("p",null,'The filter "configurations:Release" would be skipped, because the pattern "Release" would not match the name of the configuration currently being generated ("Debug").'),(0,a.kt)("p",null,'The last filter "{}" does not define any filtering criteria, and so does not exclude anything. Any settings applied after this filter will appear in ',(0,a.kt)("em",{parentName:"p"},"all")," configurations within the workspace or project."),(0,a.kt)("p",null,'Filters may also be combined, modified with "or" or "not", and use pattern matches. For a more complete description and lots of examples, see ',(0,a.kt)("a",{parentName:"p",href:"/docs/filter"},(0,a.kt)("inlineCode",{parentName:"a"},"filter")),"."))}f.isMDXComponent=!0}}]);