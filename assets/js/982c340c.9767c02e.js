"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3700],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>f});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(o),p=n,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||r;return o?a.createElement(f,s(s({ref:t},m),{},{components:o})):a.createElement(f,s({ref:t},m))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},57725:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={title:"Custom Build Commands"},s=void 0,i={unversionedId:"Custom-Build-Commands",id:"Custom-Build-Commands",isDocsHomePage:!1,title:"Custom Build Commands",description:"There are a few different ways that you can add custom commands to your Premake-generated builds: pre- and post-build stages, custom build commands, and custom rules.",source:"@site/docs/Custom-Build-Commands.md",sourceDirName:".",slug:"/Custom-Build-Commands",permalink:"/docs/Custom-Build-Commands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Build-Commands.md",tags:[],version:"current",lastUpdatedBy:"CeruttiNicolas",lastUpdatedAt:1657581104,formattedLastUpdatedAt:"7/11/2022",frontMatter:{title:"Custom Build Commands"}},l=[{value:"Pre- and Post-Build Stages",id:"pre--and-post-build-stages",children:[],level:2},{value:"Custom Build Commands",id:"custom-build-commands",children:[],level:2},{value:"Custom Rules",id:"custom-rules",children:[],level:2}],u={toc:l},m="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There are a few different ways that you can add custom commands to your Premake-generated builds: ",(0,n.kt)("em",{parentName:"p"},"pre- and post-build stages"),", ",(0,n.kt)("em",{parentName:"p"},"custom build commands"),", and ",(0,n.kt)("em",{parentName:"p"},"custom rules"),"."),(0,n.kt)("p",null,"You can also use ",(0,n.kt)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")," to execute external shell scripts or makefiles, rather than use the normal build system."),(0,n.kt)("h2",{id:"pre--and-post-build-stages"},"Pre- and Post-Build Stages"),(0,n.kt)("p",null,"These are the simplest to setup and use: pass one or more command lines to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/prebuildcommands"},(0,n.kt)("inlineCode",{parentName:"a"},"prebuildcommands")),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/prelinkcommands"},(0,n.kt)("inlineCode",{parentName:"a"},"prelinkcommands")),", or ",(0,n.kt)("a",{parentName:"p",href:"/docs/postbuildcommands"},(0,n.kt)("inlineCode",{parentName:"a"},"postbuildcommands"))," functions. You can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- copy a file from the objects directory to the target directory\npostbuildcommands {\n  "{COPY} %{cfg.objdir}/output.map %{cfg.targetdir}"\n}\n')),(0,n.kt)("h2",{id:"custom-build-commands"},"Custom Build Commands"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"As of this writing, the custom build commands feature is still incomplete; see the list of limitations below.")),(0,n.kt)("p",null,"Custom build commands provide the ability to compile or process new types of files, other than the C/C++ or C# files Premake supports out of the box. You can compile a Cg shader program, or process an image."),(0,n.kt)("p",null,"Here is an example which compiles all Lua files in a project to C:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"filter 'files:**.lua'\n   -- A message to display while this build step is running (optional)\n   buildmessage 'Compiling %{file.relpath}'\n\n   -- One or more commands to run (required)\n   buildcommands {\n      'luac -o \"%{cfg.objdir}/%{file.basename}.out\" \"%{file.relpath}\"'\n   }\n\n   -- One or more outputs resulting from the build (required)\n   buildoutputs { '%{cfg.objdir}/%{file.basename}.c' }\n\n   -- One or more additional dependencies for this build command (optional)\n   buildinputs { 'path/to/file1.ext', 'path/to/file2.ext' }\n\n")),(0,n.kt)("p",null,"The basic syntax follows Visual Studio's model, but it should be easy to see how it would translate to makefiles."),(0,n.kt)("p",null,"Build rules follow the same configuration scoping as the rest of the Premake API. You can apply rules to a specific platform or build configuration, to specific files or all files, or to any combination. And you can use ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tokens"},"Tokens")," to create generic commands that will work across platforms and configurations."),(0,n.kt)("p",null,"If the outputs include any object files, they will be automatically added to the link step.\nAny source code files included in the outputs might be fed back into the build with ",(0,n.kt)("a",{parentName:"p",href:"/docs/compilebuildoutputs"},"compilebuildoutputs"),"."),(0,n.kt)("p",null,"Custom build commands currently have a few shortcomings. Help fixing these issues, or any other gaps, would be most appreciated!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There is limited detection of paths in the build commands. Tokens that\nexpand to absolute paths (most of them do, i.e. %{cfg.objdir}) are properly\nmade project relative. Custom tokens, or paths hardcoded inline with the\ncommands, must be specified relative to the generated project location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Commands that output C/C++ source files are not fed into the build\nprocess yet (but commands that output object files are fed to the\nlinker).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The generated makefile rule only takes the first output into account\nfor dependency checking."))),(0,n.kt)("h2",{id:"custom-rules"},"Custom Rules"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/docs/Custom-Rules"},"custom rules feature")," is similar to custom build commands. It allows you describe how to build a particular kind of file, but in a more generic way, and with variables that can be set in your project script. ",(0,n.kt)("a",{parentName:"p",href:"/docs/Custom-Rules"},"Learn more about custom rules here"),"."))}d.isMDXComponent=!0}}]);