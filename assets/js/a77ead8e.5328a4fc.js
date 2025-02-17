"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2781],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}},33790:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(74848),r=s(28453);const t={title:"Code Overview"},o=void 0,c={id:"Code-Overview",title:"Code Overview",description:"A Quick Tour of Premake ##",source:"@site/docs/Code-Overview.md",sourceDirName:".",slug:"/Code-Overview",permalink:"/docs/Code-Overview",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Code-Overview.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682e3,frontMatter:{title:"Code Overview"},sidebar:"docs",previous:{title:"Extending Premake",permalink:"/docs/Extending-Premake"},next:{title:"Coding Conventions",permalink:"/docs/Coding-Conventions"}},a={},d=[{value:"A Quick Tour of Premake",id:"a-quick-tour-of-premake",level:2},{value:"Code Execution Overview",id:"code-execution-overview",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a-quick-tour-of-premake",children:"A Quick Tour of Premake"}),"\n",(0,i.jsx)(n.p,{children:"The Premake source code is organized into a few different folders:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/actions"}),' contains the code for the built-on actions and exporters, e.g. "vs2012" or "gmake". We are gradually migrating these into independent modules, but for now they live here.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/base"})," contains the core Lua scripts, the code that is used to read and process your project scripts, and supporting logic for the actions and exporters."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/host"})," contains all of the C language code, logic that either can't easily be written in Lua because of the way it needs to interact with the underlying operating system, or because a Lua implementation would be too slow. We try to keep C code to a minimum and use Lua whenever we can, to enable ",(0,i.jsx)(n.a,{href:"/docs/Overrides-and-Call-Arrays",children:"overrides and call arrays"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/tools"})," contains the adapters for command line toolsets like GCC and Clang. We will probably be migrating these toward modules in the near-ish future as well."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"modules"})," contains the official set of modules which are distributed as part of Premake. These modules add support for additional languages and toolsets to the core code in the ",(0,i.jsx)(n.code,{children:"src"})," folder."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition to those general categories, there are a few special files of note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/_premake_main.lua"})," contains the Lua-side program entry point, and is responsible for the main application flow. The C-side program entry point ",(0,i.jsx)(n.code,{children:"main()"})," is located in ",(0,i.jsx)(n.code,{children:"src/host/premake_main.c"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/_premake_init.lua"})," sets up much of the initial configuration, including all of the project scripting functions, the default set of command line arguments, and the default project configurations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/_modules.lua"})," contains the list of built-in modules which are automatically loaded in startup. See ",(0,i.jsx)(n.a,{href:"/docs/Embedding-Modules",children:"Embedding Modules"})," for more information."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/_manifest.lua"})," lists the Lua scripts that should be embedded into the Premake executable when making the release builds. There are separate manifests for Premake's core scripts and each embedded module."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-execution-overview",children:"Code Execution Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Execution starts at ",(0,i.jsx)(n.code,{children:"main()"})," in ",(0,i.jsx)(n.code,{children:"src/host/premake_main.c"}),", which calls into to ",(0,i.jsx)(n.code,{children:"src/host/premake.c"})," to do the real bootstrapping work:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"premake_init()"})," installs all of Premake's native C extensions to the Lua scripting environment."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"premake_execute()"})," finds and runs ",(0,i.jsx)(n.code,{children:"src/_premake_main.lua"}),", which may be embedded into the executable for a release build, or located on the filesystem."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"src/_premake_main.lua"})," in turn reads ",(0,i.jsx)(n.code,{children:"src/_manifest.lua"})," and loads all of the scripts listed there. Notably, this includes ",(0,i.jsx)(n.code,{children:"src/_premake_init.lua"})," which does"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once ",(0,i.jsx)(n.code,{children:"src/premake_main.lua"})," has finished, ",(0,i.jsx)(n.code,{children:"premake_execute()"})," calls ",(0,i.jsx)(n.code,{children:"_premake_main()"}),", which located at the end of ",(0,i.jsx)(n.code,{children:"src/_premake_main.lua"}),", and waits for it to return."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["At this point, execution has moved into and remains in Lua; ",(0,i.jsx)(n.a,{href:"/docs/Overrides-and-Call-Arrays",children:"extending Premake by overriding functions and call arrays"})," now becomes possible."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"_premake_main()"})," uses a ",(0,i.jsx)(n.a,{href:"/docs/Overrides-and-Call-Arrays",children:"call array"})," to control the high-level process of evaluating the user scripts and acting on the results. Notable functions in this list include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"prepareEnvironment()"})," sets more global variables and otherwise gets the script environment ready to use."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"locateUserScript()"})," handles finding the user's project script, i.e. ",(0,i.jsx)(n.code,{children:"premake5.lua"})," on the file system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"checkInteractive()"})," is responsible for launching the REPL prompt, if requested."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"runSystemScript()"})," runs ",(0,i.jsx)(n.a,{href:"/docs/System-Scripts",children:"the user's system script"}),", and ",(0,i.jsx)(n.code,{children:"runUserScript()"})," runs the project script found by ",(0,i.jsx)(n.code,{children:"locateUserScript()"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"processCommandLine()"})," handles any command line options and sets the target action and arguments. This needs to happen after the project script has run, in case it defines new options or modifies the behavior of existing options\u2014a common point of confusion."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bake()"})," takes all of the project and configuration information that has been specified in the user's project script and prepares it for use by the target action, a somewhat convoluted process that is implemented in ",(0,i.jsx)(n.code,{children:"src/base/oven.lua"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"validate()"})," examines the processed configuration information and tries to make sure it all makes sense, and that all required data is available. The main validation logic is located in ",(0,i.jsx)(n.code,{children:"src/base/validation.lua"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"callAction()"})," passes each workspace, project, rule, and other container to the target action, causing the appropriate result--like generating a Visual Studio project or GNU makefile--to occur. This container iteration is done in ",(0,i.jsx)(n.code,{children:"action.call()"})," in ",(0,i.jsx)(n.code,{children:"src/base/action.lua"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Calling the action, via ",(0,i.jsx)(n.code,{children:"callAction()"}),", is where the interesting part for most people begins. Control now transfers to one of exporters, causing the project files to be written. For more information on how ",(0,i.jsx)(n.em,{children:"that"})," happens, see ",(0,i.jsx)(n.a,{href:"/docs/Adding-New-Action",children:"Creating a New Action"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);