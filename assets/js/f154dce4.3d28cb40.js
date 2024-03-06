"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5367],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>u});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,u=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?n.createElement(u,o(o({ref:a},g),{},{components:t})):n.createElement(u,o({ref:a},g))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},674:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={title:"Tokens"},o=void 0,i={unversionedId:"Tokens",id:"Tokens",isDocsHomePage:!1,title:"Tokens",description:"Tokens provide the ability to substitute computed values into a configuration setting. Using tokens, you can specify a single value that automatically adjusts itself to different platforms and configurations.",source:"@site/docs/Tokens.md",sourceDirName:".",slug:"/Tokens",permalink:"/docs/Tokens",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Tokens.md",tags:[],version:"current",lastUpdatedBy:"VXP",lastUpdatedAt:1709747737,formattedLastUpdatedAt:"3/6/2024",frontMatter:{title:"Tokens"}},s=[{value:"Value Tokens",id:"value-tokens",children:[],level:2},{value:"Command Tokens",id:"command-tokens",children:[{value:"Path in commands",id:"path-in-commands",children:[],level:3}],level:2},{value:"Tokens and Filters",id:"tokens-and-filters",children:[],level:2}],p={toc:s},g="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Tokens provide the ability to substitute computed values into a configuration setting. Using tokens, you can specify a single value that automatically adjusts itself to different platforms and configurations."),(0,r.yg)("p",null,"Tokens come in two varieties: ",(0,r.yg)("em",{parentName:"p"},"value tokens"),", and ",(0,r.yg)("em",{parentName:"p"},"command tokens"),"."),(0,r.yg)("h2",{id:"value-tokens"},"Value Tokens"),(0,r.yg)("p",null,"Value tokens are expressions wrapped in a ",(0,r.yg)("inlineCode",{parentName:"p"},"%{}")," sequence. Tokens have access to one or more context objects, depending on their scope within the project: ",(0,r.yg)("inlineCode",{parentName:"p"},"wks"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"prj"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cfg"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"file"),". You can access all of the fields of these context objects within the token."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},"%{wks.name}\n%{prj.location}\n%{cfg.targetdir}\n")),(0,r.yg)("p",null,"The contents of the %{} are run through ",(0,r.yg)("inlineCode",{parentName:"p"},"loadstring()")," and executed at token-replacement time, so more complex replacements can be used. You can access any global value."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},"%{wks.name:gsub(' ', '_')}\n")),(0,r.yg)("p",null,"You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"wks"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"prj"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cfg"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"file")," to represent the current workspace, project, configuration, and file configuration respectively. Note that these values must be in scope for the type of value you are trying to substitute or the object will be nil. You'll have to hunt around for the available fields until I have a chance to document them, but in general they follow the API names (includedirs, location, flags, etc.)."),(0,r.yg)("p",null,"Some known tokens (feel free to add more as you use them):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'wks.name\nwks.location -- (location where the workspace/solution is written, not the premake-wks.lua file)\n\nprj.name\nprj.location -- (location where the project is written, not the premake-prj.lua file)\nprj.language\nprj.group\n\ncfg.longname\ncfg.shortname\ncfg.kind\ncfg.architecture\ncfg.platform\ncfg.system\ncfg.buildcfg\ncfg.buildtarget -- (see [target], below)\ncfg.linktarget -- (see [target], below)\ncfg.objdir\n\nfile.path\nfile.abspath\nfile.relpath\nfile.directory\nfile.reldirectory\nfile.name\nfile.basename -- (file part without extension)\nfile.extension -- (including \'.\'; eg ".cpp")\n\n-- These values are available on build and link targets\n-- Replace [target] with one of "cfg.buildtarget" or "cfg.linktarget"\n--   Eg: %{cfg.buildtarget.abspath}\n[target].abspath\n[target].relpath\n[target].directory\n[target].name\n[target].basename -- (file part without extension)\n[target].extension -- (including \'.\'; eg ".cpp")\n[target].bundlename\n[target].bundlepath\n[target].prefix\n[target].suffix\n')),(0,r.yg)("p",null,"The paths are expanded relative to premake script, to obtain absolute paths, you have to add ",(0,r.yg)("inlineCode",{parentName:"p"},"!")," as in ",(0,r.yg)("inlineCode",{parentName:"p"},"%{!file.path}"),"."),(0,r.yg)("h2",{id:"command-tokens"},"Command Tokens"),(0,r.yg)("p",null,"Command tokens represent a system level command in a platform-neutral way."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'postbuildcommands {\n    "{COPYFILE} %[file1.txt] %[file2.txt]"\n}\n')),(0,r.yg)("p",null,"You can use command tokens anywhere you specify a command line, including:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/cleancommands"},"cleancommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/os.execute"},"os.execute")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/os.executef"},"os.executef")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/postbuildcommands"},"postbuildcommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/prebuildcommands"},"prebuildcommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/prelinkcommands"},"prelinkcommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))),(0,r.yg)("p",null,"Command tokens are replaced with an appropriate command for the target platform. For Windows, path separators in the commmand arguments are converted to backslashes."),(0,r.yg)("p",null,"The available tokens, and their replacements:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Token"),(0,r.yg)("th",{parentName:"tr",align:null},"DOS"),(0,r.yg)("th",{parentName:"tr",align:null},"Posix"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{CHDIR}"),(0,r.yg)("td",{parentName:"tr",align:null},"chdir {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"cd {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{COPYFILE}"),(0,r.yg)("td",{parentName:"tr",align:null},"copy /B /Y {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"cp -f {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{COPYDIR}"),(0,r.yg)("td",{parentName:"tr",align:null},"xcopy /Q /E /Y /I {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"cp -rf {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{DELETE}"),(0,r.yg)("td",{parentName:"tr",align:null},"del {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"rm -rf {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{ECHO}"),(0,r.yg)("td",{parentName:"tr",align:null},"echo {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"echo {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{MKDIR}"),(0,r.yg)("td",{parentName:"tr",align:null},"IF NOT EXIST {args} (mkdir {args})"),(0,r.yg)("td",{parentName:"tr",align:null},"mkdir -p {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{MOVE}"),(0,r.yg)("td",{parentName:"tr",align:null},"move /Y {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"mv -f {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{RMDIR}"),(0,r.yg)("td",{parentName:"tr",align:null},"rmdir /S /Q {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"rm -rf {args}")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{TOUCH}"),(0,r.yg)("td",{parentName:"tr",align:null},"type nul >> {arg} && copy /b {arg}+,, {arg}"),(0,r.yg)("td",{parentName:"tr",align:null},"touch {args}")))),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"The following tokens are deprecated:"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Token"),(0,r.yg)("th",{parentName:"tr",align:null},"DOS"),(0,r.yg)("th",{parentName:"tr",align:null},"Posix"),(0,r.yg)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"{COPY}"),(0,r.yg)("td",{parentName:"tr",align:null},"xcopy /Q /E /Y /I {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"cp -rf {args}"),(0,r.yg)("td",{parentName:"tr",align:null},"Use {COPYDIR} or {COPYFILE} instead")))),(0,r.yg)("h3",{id:"path-in-commands"},"Path in commands"),(0,r.yg)("p",null,"Paths in Premake should be relative to premake script in which they appears."),(0,r.yg)("p",null,"When you specify a path inside a commands, you have to wrap path insice ",(0,r.yg)("inlineCode",{parentName:"p"},"%[]")," to allow correct trnasformation for the generator."),(0,r.yg)("p",null,"i.e."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'buildcommands {\n    "{COPYFILE} %[%{!file.abspath}] %[%{!sln.location}/%{file.basename}]"\n}\n')),(0,r.yg)("h2",{id:"tokens-and-filters"},"Tokens and Filters"),(0,r.yg)("p",null,"Tokens are not expanded in filters. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1036#issuecomment-379685035"},"issue 1306")," for some illustrative examples."))}m.isMDXComponent=!0}}]);