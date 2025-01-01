"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1748],{3359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(74848),s=t(28453);const i={title:"Using Premake"},a=void 0,d={id:"Using-Premake",title:"Using Premake",description:"New to Premake? You might want to start with What is Premake?",source:"@site/docs/Using-Premake.md",sourceDirName:".",slug:"/Using-Premake",permalink:"/docs/Using-Premake",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Using-Premake.md",tags:[],version:"current",lastUpdatedBy:"Nick Clark",lastUpdatedAt:1735617731e3,frontMatter:{title:"Using Premake"},sidebar:"docs",previous:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"},next:{title:"Building Premake",permalink:"/docs/Building-Premake"}},o={},l=[{value:"Using Premake to Generate Project Files",id:"using-premake-to-generate-project-files",level:2},{value:"Using the Generated Projects",id:"using-the-generated-projects",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["New to Premake? You might want to start with ",(0,r.jsx)(n.a,{href:"/docs/What-Is-Premake",children:"What is Premake?"})]})}),"\n",(0,r.jsxs)(n.p,{children:["If you haven't already, you can ",(0,r.jsx)(n.a,{href:"/download",children:"download Premake here"}),", or ",(0,r.jsx)(n.a,{href:"/docs/Building-Premake",children:"build it from source"}),". Premake is a small command line executable, delivered as a single file. Just unpack the download and place the executable on your system search path, or anywhere else convenient."]}),"\n",(0,r.jsx)(n.h2,{id:"using-premake-to-generate-project-files",children:"Using Premake to Generate Project Files"}),"\n",(0,r.jsx)(n.p,{children:"The simplest Premake command is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"premake5 [action]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Premake defines the following list of actions out of the box; projects may also add their own custom actions."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Action"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2022"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2022 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2019"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2019 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2017"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2017 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2015"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2015 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2013"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2013 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2012"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2012 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2010"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2010 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2008"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2008 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vs2005"}),(0,r.jsx)(n.td,{children:"Generate Visual Studio 2005 project files"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gmake"}),(0,r.jsxs)(n.td,{children:["Generate GNU Makefiles (including ",(0,r.jsx)(n.a,{href:"http://www.cygwin.com/",children:"Cygwin"})," and ",(0,r.jsx)(n.a,{href:"http://www.mingw.org/",children:"MinGW"}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gmakelegacy"}),(0,r.jsx)(n.td,{children:"Generate GNU Makefiles (deprecated exporter)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xcode4"}),(0,r.jsx)(n.td,{children:"XCode projects"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codelite"}),(0,r.jsx)(n.td,{children:"CodeLite projects"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(Premake4 supported some additional actions that haven't yet been ported to this new version; see the ",(0,r.jsx)(n.a,{href:"/docs/Feature-Matrix",children:"Available Feature Matrix"})," for the whole list.)"]}),"\n",(0,r.jsx)(n.p,{children:"To generate Visual Studio 2013 project files, use the command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"premake5 vs2013\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can see a complete list of the actions and other options supported by a project with the command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"premake5 --help\n"})}),"\n",(0,r.jsx)(n.h2,{id:"using-the-generated-projects",children:"Using the Generated Projects"}),"\n",(0,r.jsx)(n.p,{children:"For toolsets like Visual Studio and Xcode, you can simply load the generated solution or workspace into your IDE and build as you normally would."}),"\n",(0,r.jsxs)(n.p,{children:["If you have generated makefiles, running ",(0,r.jsx)(n.code,{children:"make"})," with no options will build all targets using the default configuration, as set by the project author. To see the list of available configurations, type:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"make help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To build a different configuration, add the ",(0,r.jsx)(n.strong,{children:"config"})," argument:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"make config=release\n"})}),"\n",(0,r.jsx)(n.p,{children:"To remove all generated binaries and intermediate files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"make clean                 # to clean the default target\nmake config=release clean  # to clean a different target\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Premake generated makefiles do not (currently) support a ",(0,r.jsx)(n.code,{children:"make install"})," step. Instead, project owners are encouraged to ",(0,r.jsx)(n.a,{href:"/docs/Command-Line-Arguments",children:"add an install action"})," to their Premake scripts, which has the advantage of working with any toolset on any platform. You can check for the existence of an install action by viewing the help (run ",(0,r.jsx)(n.code,{children:"premake5 --help"})," in the project directory)."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);