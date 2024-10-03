"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7851],{7837:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>t,toc:()=>h});var d=s(74848),r=s(28453);const i={},c=void 0,t={id:"Project-API",title:"Project-API",description:"Core APIs ###",source:"@site/docs/Project-API.md",sourceDirName:".",slug:"/Project-API",permalink:"/docs/Project-API",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Project-API.md",tags:[],version:"current",lastUpdatedBy:"Samuel Surtees",lastUpdatedAt:1681635452e3,frontMatter:{}},l={},h=[{value:"Core APIs",id:"core-apis",level:3},{value:"Builtin Extension APIs",id:"builtin-extension-apis",level:3}];function x(n){const e={a:"a",code:"code",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h3,{id:"core-apis",children:"Core APIs"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"API"}),(0,d.jsx)(e.th,{children:"Brief"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_ACTION",children:"_ACTION"})}),(0,d.jsx)(e.td,{children:"The action that will be run"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_ARGS",children:"_ARGS"})}),(0,d.jsx)(e.td,{children:"Array of action args"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_MAIN_SCRIPT",children:"_MAIN_SCRIPT"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_MAIN_SCRIPT_DIR",children:"_MAIN_SCRIPT_DIR"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_OPTIONS",children:"_OPTIONS"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_OS",children:"_OS"})}),(0,d.jsx)(e.td,{children:"The currently targeted operating system"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_PREMAKE_COMMAND",children:"_PREMAKE_COMMAND"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_PREMAKE_DIR",children:"_PREMAKE_DIR"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_PREMAKE_VERSION",children:"_PREMAKE_VERSION"})}),(0,d.jsx)(e.td,{children:"The version of the currently executing instance of Premake"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/_WORKING_DIR",children:"_WORKING_DIR"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/architecture",children:"architecture"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/atl",children:"atl"})}),(0,d.jsx)(e.td,{children:"Use Microsoft's Active Template Library"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/basedir",children:"basedir"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/bindirs",children:"bindirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildaction",children:"buildaction"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildcommands",children:"buildcommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildcustomizations",children:"buildcustomizations"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/builddependencies",children:"builddependencies"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildinputs",children:"buildinputs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildlog",children:"buildlog"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildmessage",children:"buildmessage"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildoptions",children:"buildoptions"})}),(0,d.jsx)(e.td,{children:"Additional build options (passed directly to compiler)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildoutputs",children:"buildoutputs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/buildrule",children:"buildrule"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/callingconvention",children:"callingconvention"})}),(0,d.jsx)(e.td,{children:"Sets the function calling convention"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/cdialect",children:"cdialect"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/characterset",children:"characterset"})}),(0,d.jsx)(e.td,{children:"Set the character encoding"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/cleancommands",children:"cleancommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/cleanextensions",children:"cleanextensions"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/clr",children:"clr"})}),(0,d.jsx)(e.td,{children:"Use Microsoft's Common Language Runtime"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/compileas",children:"compileas"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/compilebuildoutputs",children:"compilebuildoutputs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/configfile",children:"configfile"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/configmap",children:"configmap"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/configuration",children:"configuration"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/configurations",children:"configurations"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/copylocal",children:"copylocal"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/cppdialect",children:"cppdialect"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/customtoolnamespace",children:"customtoolnamespace"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugargs",children:"debugargs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugcommand",children:"debugcommand"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugconnectcommands",children:"debugconnectcommands"})}),(0,d.jsx)(e.td,{children:"Debugger commands to execute on remote target connection"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugconstants",children:"debugconstants"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugdir",children:"debugdir"})}),(0,d.jsx)(e.td,{children:"Working directory for debug session"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugenvs",children:"debugenvs"})}),(0,d.jsx)(e.td,{children:"Env vars for debug session"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugextendedprotocol",children:"debugextendedprotocol"})}),(0,d.jsx)(e.td,{children:"Use gdb 'extended' protocol; maintain a persistent connection"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugformat",children:"debugformat"})}),(0,d.jsx)(e.td,{children:"Format for embedded debug information"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugger",children:"debugger"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debuggertype",children:"debuggertype"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debuglevel",children:"debuglevel"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugpathmap",children:"debugpathmap"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugport",children:"debugport"})}),(0,d.jsx)(e.td,{children:"Port to use for remote debugging"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugremotehost",children:"debugremotehost"})}),(0,d.jsx)(e.td,{children:"Target for remote debugging"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugsearchpaths",children:"debugsearchpaths"})}),(0,d.jsx)(e.td,{children:"Search paths for source code while debugging"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugstartupcommands",children:"debugstartupcommands"})}),(0,d.jsx)(e.td,{children:"Debugger commands to execute on debugger startup"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugtoolargs",children:"debugtoolargs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/debugtoolcommand",children:"debugtoolcommand"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/defaultplatform",children:"defaultplatform"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/defaultplatform",children:"defaultplatform"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/defines",children:"defines"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/dependson",children:"dependson"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/deploymentoptions",children:"deploymentoptions"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/disablewarnings",children:"disablewarnings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/display",children:"display"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/display",children:"display"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/docdir",children:"docdir"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/docname",children:"docname"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/editandcontinue",children:"editandcontinue"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/editorintegration",children:"editorintegration"})}),(0,d.jsx)(e.td,{children:"Enable or disable IDE integration"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/enableunitybuild",children:"enableunitybuild"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/enablewarnings",children:"enablewarnings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/endian",children:"endian"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/entrypoint",children:"entrypoint"})}),(0,d.jsx)(e.td,{children:"Specify the program entry point function"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/exceptionhandling",children:"exceptionhandling"})}),(0,d.jsx)(e.td,{children:"Enable or disable exception handling"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/external",children:"external"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/externalanglebrackets",children:"externalanglebrackets"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/externalincludedirs",children:"externalincludedirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/externalrule",children:"externalrule"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/externalwarnings",children:"externalwarnings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/fatalwarnings",children:"fatalwarnings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/fileextension",children:"fileextension"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/filename",children:"filename"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/files",children:"files"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/filter",children:"filter"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/flags",children:"flags"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/floatingpoint",children:"floatingpoint"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/floatingpointexceptions",children:"floatingpointexceptions"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/forceincludes",children:"forceincludes"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/forceusings",children:"forceusings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/fpu",children:"fpu"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/framework",children:"framework"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/functionlevellinking",children:"functionlevellinking"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/gccprefix",children:"gccprefix"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/group",children:"group"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/headerdir",children:"headerdir"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/headername",children:"headername"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/icon",children:"icon"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/ignoredefaultlibraries",children:"ignoredefaultlibraries"})}),(0,d.jsx)(e.td,{children:"Specify a list of default libraries to ignore"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/imageoptions",children:"imageoptions"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/imagepath",children:"imagepath"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/implibdir",children:"implibdir"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/implibextension",children:"implibextension"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/implibname",children:"implibname"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/implibprefix",children:"implibprefix"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/implibsuffix",children:"implibsuffix"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/include",children:"include"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/includedirs",children:"includedirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/includedirsafter",children:"includedirsafter"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/includeexternal",children:"includeexternal"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/inlining",children:"inlining"})}),(0,d.jsx)(e.td,{children:"Tells the compiler when it should inline functions"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/intrinsics",children:"intrinsics"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/kind",children:"kind"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/language",children:"language"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/largeaddressaware",children:"largeaddressaware"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/libdirs",children:"libdirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/linkbuildoutputs",children:"linkbuildoutputs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/linkgroups",children:"linkgroups"})}),(0,d.jsx)(e.td,{children:"Turn on/off linkgroups for gcc/clang"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/linkoptions",children:"linkoptions"})}),(0,d.jsx)(e.td,{children:"Additional linker options (passed directly to linker)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/links",children:"links"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/locale",children:"locale"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/location",children:"location"})}),(0,d.jsx)(e.td,{children:"Specifies the directory for the generated workspace/project file"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/makesettings",children:"makesettings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/namespace",children:"namespace"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/nativewchar",children:"nativewchar"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/nuget",children:"nuget"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/nugetsource",children:"nugetsource"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/objdir",children:"objdir"})}),(0,d.jsx)(e.td,{children:"Output dir for object/intermediate files"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/optimize",children:"optimize"})}),(0,d.jsx)(e.td,{children:"Optimization level"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/pchheader",children:"pchheader"})}),(0,d.jsx)(e.td,{children:"Precompiled header file"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/pchsource",children:"pchsource"})}),(0,d.jsx)(e.td,{children:"Precompiled header source file (which should build the PCH)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/pic",children:"pic"})}),(0,d.jsx)(e.td,{children:"Position independent code"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/platforms",children:"platforms"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/postbuildcommands",children:"postbuildcommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/postbuildmessage",children:"postbuildmessage"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/prebuildcommands",children:"prebuildcommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/prebuildmessage",children:"prebuildmessage"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/preferredtoolarchitecture",children:"preferredtoolarchitecture"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/prelinkcommands",children:"prelinkcommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/prelinkmessage",children:"prelinkmessage"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/project",children:"project"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/propertydefinition",children:"propertydefinition"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/rebuildcommands",children:"rebuildcommands"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/resdefines",children:"resdefines"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/resincludedirs",children:"resincludedirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/resoptions",children:"resoptions"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/resourcegenerator",children:"resourcegenerator"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/rtti",children:"rtti"})}),(0,d.jsx)(e.td,{children:"Enable or disable runtime type information"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/rule",children:"rule"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/rules",children:"rules"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/runtime",children:"runtime"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/sanitize",children:"sanitize"})}),(0,d.jsxs)(e.td,{children:["Enable ",(0,d.jsx)(e.code,{children:"fsanitize"})," compiler options"]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/sharedlibtype",children:"sharedlibtype"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/startproject",children:"startproject"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/strictaliasing",children:"strictaliasing"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/stringpooling",children:"stringpooling"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/symbols",children:"symbols"})}),(0,d.jsx)(e.td,{children:"Turn symbol generation on/off"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/symbolspath",children:"symbolspath"})}),(0,d.jsx)(e.td,{children:"Allows you to specify the target location of the symbols"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/sysincludedirs",children:"sysincludedirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/syslibdirs",children:"syslibdirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/system",children:"system"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/premake-tags",children:"tags"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/targetdir",children:"targetdir"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/targetextension",children:"targetextension"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/targetname",children:"targetname"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/targetprefix",children:"targetprefix"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/targetsuffix",children:"targetsuffix"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/toolset",children:"toolset"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/toolsversion",children:"toolsversion"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/undefines",children:"undefines"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/usingdirs",children:"usingdirs"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/uuid",children:"uuid"})}),(0,d.jsx)(e.td,{children:"Set project GUID (for VS projects/workspaces)"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/vectorextensions",children:"vectorextensions"})}),(0,d.jsx)(e.td,{children:"Enable hardware vector extensions"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/versionconstants",children:"versionconstants"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/versionlevel",children:"versionlevel"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/vpaths",children:"vpaths"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/warnings",children:"warnings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/workspace",children:"workspace"})}),(0,d.jsx)(e.td,{})]})]})]}),"\n",(0,d.jsx)(e.h3,{id:"builtin-extension-apis",children:"Builtin Extension APIs"}),"\n",(0,d.jsx)(e.p,{children:"The following API reference is for use with various built-in extensions."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"D language APIs"}),(0,d.jsx)(e.th,{children:"Brief"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/debugconstants",children:"debugconstants"})}),(0,d.jsx)(e.td,{children:"Declare debug identifiers"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/debuglevel",children:"debuglevel"})}),(0,d.jsx)(e.td,{children:"Declare debug level"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/docdir",children:"docdir"})}),(0,d.jsx)(e.td,{children:"Output dir for ddoc generation"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/docname",children:"docname"})}),(0,d.jsx)(e.td,{children:"Filename for the ddoc output"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/headerdir",children:"headerdir"})}),(0,d.jsx)(e.td,{children:"Output dir for interface file generation"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/headername",children:"headername"})}),(0,d.jsx)(e.td,{children:"Filename for the interface (.di) file"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/versionconstants",children:"versionconstants"})}),(0,d.jsx)(e.td,{children:"Declare version identifiers"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"https://github.com/premake/premake-dlang/wiki/versionlevel",children:"versionlevel"})}),(0,d.jsx)(e.td,{children:"Declare version level"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Xcode APIs"}),(0,d.jsx)(e.th,{children:"Brief"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/xcodebuildsettings",children:"xcodebuildsettings"})}),(0,d.jsx)(e.td,{})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:(0,d.jsx)(e.a,{href:"/docs/xcodebuildresources",children:"xcodebuildresources"})}),(0,d.jsx)(e.td,{})]})]})]})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>t});var d=s(96540);const r={},i=d.createContext(r);function c(n){const e=d.useContext(i);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);