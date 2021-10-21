"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7730],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41556:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Community Update #5",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},l=void 0,c={permalink:"/blog/2020/08/04/community-update-5",source:"@site/blog/2020-08-04-community-update-5.md",title:"Community Update #5",description:"The new storage system has arrived",date:"2020-08-04T00:00:00.000Z",formattedDate:"August 4, 2020",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:4.955,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],prevItem:{title:"Community Update #6",permalink:"/blog/2020/11/02/community-udpate-6"},nextItem:{title:"Community Update #4",permalink:"/blog/2020/04/07/community-update-4"}},p={authorsImageUrls:[void 0]},u=[{value:"The new storage system has arrived",id:"the-new-storage-system-has-arrived",children:[]},{value:"What&#39;s new with the new system?",id:"whats-new-with-the-new-system",children:[]},{value:"On performance",id:"on-performance",children:[]},{value:"Next steps",id:"next-steps",children:[]},{value:"v5 vs. v6",id:"v5-vs-v6",children:[]},{value:"Feedback is welcome and appreciated!",id:"feedback-is-welcome-and-appreciated",children:[]}],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"the-new-storage-system-has-arrived"},"The new storage system has arrived"),(0,r.kt)("p",null,"I am happy to be able to say that I've wrapped up the first round of development on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/tree/master/core/modules/store"},"the new storage & query system"),". I threw ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next/blob/master/core/modules/store/tests/test_query.lua"},"every edge case I could think of")," at it and was able to, eventually, pass them all."),(0,r.kt)("h3",{id:"whats-new-with-the-new-system"},"What's new with the new system?"),(0,r.kt)("p",null,"Learning my lesson from past development, I did my best to make this new version as open-ended and unconstrained as possible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A proper API.")," The storage and query API have been cleaned up and condensed to make things easier and more powerful for module authors. (Sorry for the inline images, the OpenCollective editor won't allow me to author code blocks?)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- create a new query, targeting a particular \"environment\";\n-- returns the global configuration for that environment\nlocal global = store:query({ system='windows', action='vs2019' })\n\n-- from the global scope, get the configuration for a specific workspace\nlocal wks = global:select({ workspaces='Workspace1' })\n\n-- from that workspace, get the configuration for a specific project\nlocal prj = wks:select({ projects='Project1' })\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No containers."),' Unlike the v5 system, there is no hardcoded "container" hierarchy. "Scopes" are arbitrary and defined by the query author, making new or ad hoc scopes trivial to implement.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- configuration for Project1 common to all workspaces\nlocal prj1 = global:select({ projects='Project1' })\n\n-- all DLL configuration\nlocal cfg = global:select({ kind='SharedLib' })\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fine-grained inheritance."),' Inheritance in v5 was baked into the system and difficult to modify or work around. The new system allows inheritance to be enabled (or not) between any "scopes", or even on a per-fetch basis.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- this project inherits values from the workspace\nlocal prj1 = wks\n    :select({ projects='Project1' })\n    :inheritValues()\n\n-- this project does not inherit workspace values\nlocal prj2 = wks:\n    :select({ projects='Project2' })\n\n-- inheritance can then be enabled for a particular fetch\nprj2:inheritValues().fetch('defines')\n\n-- get all configuration specific to the Win64 debug build, without\n-- inheriting anything from the project. This was really difficult\n-- to do in the previous system\nlocal files = prj2\n    :select({ platforms='Win64', configurations='Debug' })\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No more file configurations.")," This one pleases me greatly: file-level configuration is now no different than anything else. This will make it much easier to implement per-file configuration settings going forward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local file = prj:select({ files='Hello.cpp' })\nlocal fileCfg = file:select({ configurations='Debug' })\nlocal fileDefines = fileCfg:fetch('defines')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'No "magic" fields.')," In v5, certain fields received special processing to enable out-of-order evaluation for situations like the one shown below. This worked for most projects, but not for everyone, and it added extra processing and overhead. The new system is able to handle situations like these as a general case, with no workarounds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"filter { kind='SharedLib' }  -- don't yet know what `kind` will be\n    defines 'DLL_EXPORT'\n\nproject 'Project1'\n    kind 'SharedLib'   -- need to go back and get that earlier define\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reduced configuration constraints.")," It now possible to share projects between workspaces, just as you would any other configuration. Containers which previously required the use of special APIs now work like any other field. Using the v5 scripting syntax (which isn't implemented in the new version), that means you can do things like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"workspaces { 'Workspace1', 'Workspace2' }\nprojects { 'Project1', 'Project2' }\n\nfilter { 'workspaces:Workspace*' }\n    projects { 'Project1' }\n")),(0,r.kt)("h3",{id:"on-performance"},"On performance"),(0,r.kt)("p",null,'When I announced that I was working on a new system, several people were quick to raise performance as a critical concern. While it is too soon for performance testing\u2014this is just the "keep it simple; make it work" version\u2014I have tried to design the overall approach for optimizability. The new system is simpler and "flatter", provides more opportunities for caching intermediate results, and should translate to C reasonably well. Once the new system has been proven fit for purpose and there are enough features in place to run a real world test I will loop back to complete those optimizations.'),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"All of these improvements and advances are academic until you can actually generate some output, so that's next on my list. In order to cut to the chase and get us to a \"v5 vs. v6\" decision as quickly as possible, without getting mired in all of the complexities of targeting a specific toolset, I'm planning to build a JSON export module over the new code. (This is something I've wanted in the past to assist with tooling, automation and visualization anyway.) That should allow me to quickly build out the scaffolding and APIs required by all exporters, as well as provide a good testbed for bringing the remaining features online as we move ahead. Feedback on that approach, or alternative suggestions, are welcome."),(0,r.kt)("h3",{id:"v5-vs-v6"},"v5 vs. v6"),(0,r.kt)("p",null,"It's my hope that with an exporter in place folks will have enough to see and touch to consider where things go next. Do we backport the new code to v5 and rework all of the existing actions, potentially breaking existing projects? Or do we flip the bit on v5, mark it \"stable\", and push ahead with a v6 instead? (I have an opinion, but keeping an open mind.) When the time comes I'll open an RFC issue on GitHub so everyone can have their say on the matter."),(0,r.kt)("h3",{id:"feedback-is-welcome-and-appreciated"},"Feedback is welcome and appreciated!"),(0,r.kt)("p",null,"These are big changes and I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set, to the coding style. You can message or DM me at ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com")),", or open an issue on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"the premake-next GitHub project"),"."),(0,r.kt)("p",null,"And as we do: a shout out to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"CitizenFX Collective"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://opencollective.com/industriousone"},"Industrious One"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://opencollective.com/premake#section-contributors"},"everyone else"))," who has helped back us so far. Getting this new system shipped crosses a big dependency off the to-do list, and I'm not sure it ever would have seen the light of day without your help. Many and sincere thanks to all of you! \ud83d\ude4c"),(0,r.kt)("p",null,"~st."))}m.isMDXComponent=!0}}]);