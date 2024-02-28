"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[507],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,y=c["".concat(d,".").concat(p)]||c[p]||m[p]||a;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1343:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(58168),r=(n(96540),n(15680));const a={title:"Embedding Modules"},l=void 0,i={unversionedId:"Embedding-Modules",id:"Embedding-Modules",isDocsHomePage:!1,title:"Embedding Modules",description:"This section only applies if you want to embed your module into a custom build of Premake for easier distribution. If you're not doing that, you can skip it.",source:"@site/docs/Embedding-Modules.md",sourceDirName:".",slug:"/Embedding-Modules",permalink:"/docs/Embedding-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Embedding-Modules.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1617049134,formattedLastUpdatedAt:"3/29/2021",frontMatter:{title:"Embedding Modules"}},d=[{value:"1. Put your module where Premake can find it.",id:"1-put-your-module-where-premake-can-find-it",children:[],level:4},{value:"2. Add a manifest",id:"2-add-a-manifest",children:[],level:4},{value:"3. Add an (optional) preload script",id:"3-add-an-optional-preload-script",children:[],level:4},{value:"4. Tell Premake to load your module",id:"4-tell-premake-to-load-your-module",children:[],level:4},{value:"5. Embed and rebuild",id:"5-embed-and-rebuild",children:[],level:4}],u={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"This section only applies if you want to embed your module into a custom build of Premake for easier distribution. If you're not doing that, you can skip it.")),(0,r.yg)("p",null,"Premake includes a number of modules as part of the official builds, with more being added regularly. These modules are embedded directly into Premake along with the core scripts to enable easy distribution of a single, self-contained executable."),(0,r.yg)("p",null,"If you are creating a custom build of Premake, you can easily embed your own modules by following the instructions below. Also take a look at Premake's own set of modules in the ",(0,r.yg)("inlineCode",{parentName:"p"},"modules/")," folder for some real working examples."),(0,r.yg)("h4",{id:"1-put-your-module-where-premake-can-find-it"},"1. Put your module where Premake can find it."),(0,r.yg)("p",null,"Premake's embedding system only considers scripts which are in Premake source code tree, so the first step is to put your module where it can be found. Premake's own modules are stored in the ",(0,r.yg)("inlineCode",{parentName:"p"},"modules/")," folder."),(0,r.yg)("h4",{id:"2-add-a-manifest"},"2. Add a manifest"),(0,r.yg)("p",null,"Premake needs to know which scripts it should embed, and which it should ignore (tests, etc.). Create a file named ",(0,r.yg)("inlineCode",{parentName:"p"},"_manifest.lua")," which returns an array file names to be loaded. For example, Premake's Xcode module manifest looks like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'return {\n    "_preload.lua",\n    "xcode.lua",\n    "xcode4_workspace.lua",\n    "xcode_common.lua",\n    "xcode_project.lua",\n}\n')),(0,r.yg)("h4",{id:"3-add-an-optional-preload-script"},"3. Add an (optional) preload script"),(0,r.yg)("p",null,"As more modules get added, Premake has to do more and more work on startup to evaluate all of those script files. To help minimize that work, modules should try to defer loading until they are actually needed by the project being generated."),(0,r.yg)("p",null,"On startup, Premake will check each embedded module for script named ",(0,r.yg)("inlineCode",{parentName:"p"},"_preload.lua"),". If present, Premake will run that script, and defer loading the rest of the module. After the project script has had a chance to run, Premake will then ask the module if it needs to be loaded and, if so, load it before continuing. If no ",(0,r.yg)("inlineCode",{parentName:"p"},"_preload.lua")," script is present, the module will be fully loaded immediately on startup."),(0,r.yg)("p",null,"To enable this, create a file named ",(0,r.yg)("inlineCode",{parentName:"p"},"_preload.lua")," (be sure to also add it to your manifest). Move any settings or values that might be required by a project script\u2014new actions, command line options, or project API calls or allowed values\u2014out of your module to this file. At the very end of the script, return a function which determines whether the module can be loaded or not."),(0,r.yg)("p",null,"Here is a subset of the ",(0,r.yg)("inlineCode",{parentName:"p"},"_preload.lua")," script from Premake's Xcode module:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'    local p = premake\n\n-- Register the Xcode action.\n\n    newaction {\n        trigger     = "xcode4",\n        shortname   = "Apple Xcode 4",\n        description = "Generate Apple Xcode 4 project files",\n\n        -- \u2026\n    }\n\n-- Decide when the full module should be loaded.\n\n    return function(cfg)\n        return (_ACTION == "xcode4")\n    end\n')),(0,r.yg)("p",null,'It starts by registering the Xcode action; this allows the action to be used on the command line and appear in Premake\'s help text, even though the full module has not yet been loaded. It then returns a test function to decide when the module should be loaded: in this case, when the user requests the "xcode4" action on the command line.'),(0,r.yg)("p",null,"In the case of a new action, the test function's configuration argument is ignored. In Premake's D language module, it should only load if one of the project's specified in the user scripts wants to use the D language."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'return function(cfg)\n    return (cfg.language == "D")\nend\n')),(0,r.yg)("h4",{id:"4-tell-premake-to-load-your-module"},"4. Tell Premake to load your module"),(0,r.yg)("p",null,"If you would like your module loaded (or pre-loaded) on startup, you must add it to the list in ",(0,r.yg)("inlineCode",{parentName:"p"},"src/_modules.lua"),". Modules in this list can be used by project scripts without having to first ",(0,r.yg)("inlineCode",{parentName:"p"},"require()")," them."),(0,r.yg)("p",null,"Modules that are not in this list are still embedded and may still be used by calling ",(0,r.yg)("inlineCode",{parentName:"p"},"require()"),"."),(0,r.yg)("h4",{id:"5-embed-and-rebuild"},"5. Embed and rebuild"),(0,r.yg)("p",null,"The final step is run Premake's embedding script (",(0,r.yg)("inlineCode",{parentName:"p"},"premake5 embed"),") and then rebuild the Premake executable."))}c.isMDXComponent=!0}}]);