"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5765],{30788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(74848),o=n(28453);const a={title:"Community Update #5",tags:["community-updates"],authors:"starkos"},i=void 0,r={permalink:"/blog/2020/08/04/community-update-5",source:"@site/blog/2020-08-04-community-update-5.md",title:"Community Update #5",description:"The new storage system has arrived",date:"2020-08-04T00:00:00.000Z",tags:[{inline:!0,label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:4.97,hasTruncateMarker:!0,authors:[{name:"Jess Perkins",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://github.com/starkos.png",key:"starkos",page:null}],frontMatter:{title:"Community Update #5",tags:["community-updates"],authors:"starkos"},unlisted:!1,prevItem:{title:"Community Update #6",permalink:"/blog/2020/11/02/community-udpate-6"},nextItem:{title:"Community Update #4",permalink:"/blog/2020/04/07/community-update-4"}},l={authorsImageUrls:[void 0]},c=[{value:"The new storage system has arrived",id:"the-new-storage-system-has-arrived",level:3},{value:"What&#39;s new with the new system?",id:"whats-new-with-the-new-system",level:3},{value:"On performance",id:"on-performance",level:3},{value:"Next steps",id:"next-steps",level:3},{value:"v5 vs. v6",id:"v5-vs-v6",level:3},{value:"Feedback is welcome and appreciated!",id:"feedback-is-welcome-and-appreciated",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"the-new-storage-system-has-arrived",children:"The new storage system has arrived"}),"\n",(0,s.jsxs)(t.p,{children:["I am happy to be able to say that I've wrapped up the first round of development on ",(0,s.jsx)(t.a,{href:"https://github.com/starkos/premake-next/tree/master/core/modules/store",children:"the new storage & query system"}),". I threw ",(0,s.jsx)(t.a,{href:"https://github.com/starkos/premake-next/blob/master/core/modules/store/tests/test_query.lua",children:"every edge case I could think of"})," at it and was able to, eventually, pass them all."]}),"\n",(0,s.jsx)(t.h3,{id:"whats-new-with-the-new-system",children:"What's new with the new system?"}),"\n",(0,s.jsx)(t.p,{children:"Learning my lesson from past development, I did my best to make this new version as open-ended and unconstrained as possible."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"A proper API."})," The storage and query API have been cleaned up and condensed to make things easier and more powerful for module authors. (Sorry for the inline images, the OpenCollective editor won't allow me to author code blocks?)"]}),"\n",(0,s.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"-- create a new query, targeting a particular \"environment\";\n-- returns the global configuration for that environment\nlocal global = store:query({ system='windows', action='vs2019' })\n\n-- from the global scope, get the configuration for a specific workspace\nlocal wks = global:select({ workspaces='Workspace1' })\n\n-- from that workspace, get the configuration for a specific project\nlocal prj = wks:select({ projects='Project1' })\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"No containers."}),' Unlike the v5 system, there is no hardcoded "container" hierarchy. "Scopes" are arbitrary and defined by the query author, making new or ad hoc scopes trivial to implement.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"-- configuration for Project1 common to all workspaces\nlocal prj1 = global:select({ projects='Project1' })\n\n-- all DLL configuration\nlocal cfg = global:select({ kind='SharedLib' })\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Fine-grained inheritance."}),' Inheritance in v5 was baked into the system and difficult to modify or work around. The new system allows inheritance to be enabled (or not) between any "scopes", or even on a per-fetch basis.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"-- this project inherits values from the workspace\nlocal prj1 = wks\n\t:select({ projects='Project1' })\n\t:inheritValues()\n\n-- this project does not inherit workspace values\nlocal prj2 = wks:\n\t:select({ projects='Project2' })\n\n-- inheritance can then be enabled for a particular fetch\nprj2:inheritValues().fetch('defines')\n\n-- get all configuration specific to the Win64 debug build, without\n-- inheriting anything from the project. This was really difficult\n-- to do in the previous system\nlocal files = prj2\n\t:select({ platforms='Win64', configurations='Debug' })\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"No more file configurations."})," This one pleases me greatly: file-level configuration is now no different than anything else. This will make it much easier to implement per-file configuration settings going forward."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"local file = prj:select({ files='Hello.cpp' })\nlocal fileCfg = file:select({ configurations='Debug' })\nlocal fileDefines = fileCfg:fetch('defines')\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:'No "magic" fields.'})," In v5, certain fields received special processing to enable out-of-order evaluation for situations like the one shown below. This worked for most projects, but not for everyone, and it added extra processing and overhead. The new system is able to handle situations like these as a general case, with no workarounds."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"filter { kind='SharedLib' }  -- don't yet know what `kind` will be\n\tdefines 'DLL_EXPORT'\n\nproject 'Project1'\n\tkind 'SharedLib'   -- need to go back and get that earlier define\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Reduced configuration constraints."})," It now possible to share projects between workspaces, just as you would any other configuration. Containers which previously required the use of special APIs now work like any other field. Using the v5 scripting syntax (which isn't implemented in the new version), that means you can do things like:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"workspaces { 'Workspace1', 'Workspace2' }\nprojects { 'Project1', 'Project2' }\n\nfilter { 'workspaces:Workspace*' }\n\tprojects { 'Project1' }\n"})}),"\n",(0,s.jsx)(t.h3,{id:"on-performance",children:"On performance"}),"\n",(0,s.jsx)(t.p,{children:'When I announced that I was working on a new system, several people were quick to raise performance as a critical concern. While it is too soon for performance testing\u2014this is just the "keep it simple; make it work" version\u2014I have tried to design the overall approach for optimizability. The new system is simpler and "flatter", provides more opportunities for caching intermediate results, and should translate to C reasonably well. Once the new system has been proven fit for purpose and there are enough features in place to run a real world test I will loop back to complete those optimizations.'}),"\n",(0,s.jsx)(t.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(t.p,{children:"All of these improvements and advances are academic until you can actually generate some output, so that's next on my list. In order to cut to the chase and get us to a \"v5 vs. v6\" decision as quickly as possible, without getting mired in all of the complexities of targeting a specific toolset, I'm planning to build a JSON export module over the new code. (This is something I've wanted in the past to assist with tooling, automation and visualization anyway.) That should allow me to quickly build out the scaffolding and APIs required by all exporters, as well as provide a good testbed for bringing the remaining features online as we move ahead. Feedback on that approach, or alternative suggestions, are welcome."}),"\n",(0,s.jsx)(t.h3,{id:"v5-vs-v6",children:"v5 vs. v6"}),"\n",(0,s.jsx)(t.p,{children:"It's my hope that with an exporter in place folks will have enough to see and touch to consider where things go next. Do we backport the new code to v5 and rework all of the existing actions, potentially breaking existing projects? Or do we flip the bit on v5, mark it \"stable\", and push ahead with a v6 instead? (I have an opinion, but keeping an open mind.) When the time comes I'll open an RFC issue on GitHub so everyone can have their say on the matter."}),"\n",(0,s.jsx)(t.h3,{id:"feedback-is-welcome-and-appreciated",children:"Feedback is welcome and appreciated!"}),"\n",(0,s.jsxs)(t.p,{children:["These are big changes and I welcome questions, suggestions, and concerns. Everything is up for discussion, from the feature set, to the coding style. You can message or DM me at ",(0,s.jsx)(t.a,{href:"https://twitter.com/premakeapp",children:"@premakeapp"}),", email at ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"mailto:starkos@industriousone.com",children:"starkos@industriousone.com"})}),", or open an issue on ",(0,s.jsx)(t.a,{href:"https://github.com/starkos/premake-next",children:"the premake-next GitHub project"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["And as we do: a shout out to ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://opencollective.com/_fivem",children:"CitizenFX Collective"})})," and ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://opencollective.com/industriousone",children:"Industrious One"})})," and ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://opencollective.com/premake#section-contributors",children:"everyone else"})})," who has helped back us so far. Getting this new system shipped crosses a big dependency off the to-do list, and I'm not sure it ever would have seen the light of day without your help. Many and sincere thanks to all of you! \ud83d\ude4c"]}),"\n",(0,s.jsx)(t.p,{children:"~st."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);