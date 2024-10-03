"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1496],{3030:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(74848),s=i(28453);const a={title:"Filters"},r=void 0,o={id:"Filters",title:"Filters",description:"Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, and more.",source:"@site/docs/Filters.md",sourceDirName:".",slug:"/Filters",permalink:"/docs/Filters",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Filters.md",tags:[],version:"current",lastUpdatedBy:"Mark Carlson",lastUpdatedAt:1687988834e3,frontMatter:{title:"Filters"},sidebar:"docs",previous:{title:"Configurations & Platforms",permalink:"/docs/Configurations-and-Platforms"},next:{title:"Build Settings",permalink:"/docs/Build-Settings"}},l={},c=[];function d(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Premake's filter system allows you target build settings to the exact configurations in which you want them to appear. You can filter by specific build configurations or platforms, operating system, target actions, ",(0,n.jsx)(t.a,{href:"/docs/filter",children:"and more"}),"."]}),"\n",(0,n.jsx)(t.p,{children:'Here is an example which sets a preprocessor symbol named "DEBUG" in a workspace\'s "Debug" build configuration, and "NDEBUG" in the Release configuration.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\n   filter "configurations:Debug"\n      defines { "DEBUG" }\n\n   filter "configurations:Release"\n      defines { "NDEBUG" }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Filters are always made up of two parts: a ",(0,n.jsx)(t.em,{children:"prefix"})," that specifies which field is being filtered against, and a ",(0,n.jsx)(t.em,{children:"pattern"})," that specifies which values of that field should be accepted."]}),"\n",(0,n.jsx)(t.p,{children:'Filters follow Premake\'s pseudo-declarative style for its scripts: calling filter() makes that filter condition "active". All settings which subsequently appear in the script will be filtered by this condition until a new filter or container (workspace, project) is activated.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'-- All of these settings will appear in the Debug configuration\nfilter "configurations:Debug"\n  defines { "DEBUG" }\n  flags { "Symbols" }\n\n-- All of these settings will appear in the Release configuration\nfilter "configurations:Release"\n  defines { "NDEBUG" }\n  optimize "On"\n\n-- This is a sneaky bug (assuming you always want to link against these lib files).\n-- Because the last filter set was Release. These libraries will only be linked for release.\n-- To fix this place this after the "Deactivate" filter call below. Or before any filter calls.\nlinks { "png", "zlib" }\n\n-- "Deactivate" the current filter; these settings will apply\n-- to the entire workspace or project (whichever is active)\nfilter {}\n  files { "**.cpp" }\n'})}),"\n",(0,n.jsx)(t.p,{children:'Filters are evaluated at generation time, when the workspace or project file is being created and written to disk. When it comes time to output the settings for this workspace\'s "Debug" build configuration, Premake evaluates the list of filters to find those that match the "Debug" criteria.'}),"\n",(0,n.jsx)(t.p,{children:'Using the above example, Premake would first consider the filter "configurations:Debug". It would check the name of the configuration that was currently being output, see that it matched, and so include any settings up to the next filter call.'}),"\n",(0,n.jsx)(t.p,{children:'The filter "configurations:Release" would be skipped, because the pattern "Release" would not match the name of the configuration currently being generated ("Debug").'}),"\n",(0,n.jsxs)(t.p,{children:['The last filter "{}" does not define any filtering criteria, and so does not exclude anything. Any settings applied after this filter will appear in ',(0,n.jsx)(t.em,{children:"all"})," configurations within the workspace or project."]}),"\n",(0,n.jsxs)(t.p,{children:['Filters may also be combined, modified with "or" or "not", and use pattern matches. For a more complete description and lots of examples, see ',(0,n.jsx)(t.a,{href:"/docs/filter",children:(0,n.jsx)(t.code,{children:"filter"})}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);