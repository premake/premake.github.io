"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3898],{74620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(74848),o=t(28453);const i={title:"Overrides & Call Arrays"},a=void 0,s={id:"Overrides-and-Call-Arrays",title:"Overrides & Call Arrays",description:"Premake's extensibility is built around two coding conventions: overrides, a formalized way of replacing one function with another, and call arrays, a way of sequencing a series of steps at runtime.",source:"@site/docs/Overrides-and-Call-Arrays.md",sourceDirName:".",slug:"/Overrides-and-Call-Arrays",permalink:"/docs/Overrides-and-Call-Arrays",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Overrides-and-Call-Arrays.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1631130138e3,frontMatter:{title:"Overrides & Call Arrays"},sidebar:"docs",previous:{title:"Coding Conventions",permalink:"/docs/Coding-Conventions"},next:{title:"Developing Modules",permalink:"/docs/Developing-Modules"}},c={},l=[{value:"Your First Customization",id:"your-first-customization",level:2},{value:"Use the Source!",id:"use-the-source",level:2},{value:"Introducing Overrides",id:"introducing-overrides",level:2},{value:"Introducing Call Arrays",id:"introducing-call-arrays",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Premake's extensibility is built around two coding conventions: ",(0,r.jsx)(n.em,{children:"overrides"}),", a formalized way of replacing one function with another, and ",(0,r.jsx)(n.em,{children:"call arrays"}),", a way of sequencing a series of steps at runtime."]}),"\n",(0,r.jsx)(n.h2,{id:"your-first-customization",children:"Your First Customization"}),"\n",(0,r.jsx)(n.p,{children:"Let's jump right in with a simple example. Let's say that we're planning to keep our Premake-generated Visual Studio projects around for a while and, for historical reference, we'd like to know which version of Premake was used to generate them. To do so, we would like to add an XML comment to the top of the generated project files, like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generated by Premake 5.0.0-alpha3 --\x3e\n<Project DefaultTargets="Build" ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n  <ItemGroup Label="ProjectConfigurations">\n  \x3c!-- ... and so on... --\x3e\n'})}),"\n",(0,r.jsx)(n.p,{children:"We don't want to modify Premake's own source code, because then our changes would be overwritten by each new update, and we'd be stuck maintaining our own fork of the code. It would also mean that everyone who generated our projects would need to have the customized version of Premake, otherwise we'd end up with generated projects that did not contain our version commment."}),"\n",(0,r.jsx)(n.p,{children:"Instead, we'd really like to implement this customization right in our project scripts. That way we can share the scripts with any developer, and they can then generate a new project that has the version comment in it."}),"\n",(0,r.jsx)(n.h2,{id:"use-the-source",children:"Use the Source!"}),"\n",(0,r.jsxs)(n.p,{children:["Before we can make this change, we first need to know what function in the Premake source code is emitting this particular markup. As described in the ",(0,r.jsx)(n.a,{href:"/docs/Code-Overview",children:"Code Overview"}),", the Visual Studio exporter is currently located in the ",(0,r.jsx)(n.code,{children:"src/actions/vstudio"})," folder in the Premake source tree (go ahead and find it, we'll wait!)."]}),"\n",(0,r.jsxs)(n.p,{children:["We're looking for the code which generates the ",(0,r.jsx)(n.code,{children:".vcxproj"})," files, and browsing the file names brings us to ",(0,r.jsx)(n.code,{children:"vs2010_vcxproj.lua"}),". Opening this file, we can then search for the ",(0,r.jsx)(n.code,{children:'"<Project"'})," string, which we find in the ",(0,r.jsx)(n.code,{children:"m.project()"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'\tfunction m.project(prj)\n\t\tlocal action = premake.action.current()\n\t\tp.push(\'<Project DefaultTargets="Build" ToolsVersion="%s" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\',\n\t\t\taction.vstudio.toolsVersion)\n\tend\n'})}),"\n",(0,r.jsx)(n.p,{children:"(Or, if you are using a tool which supports it, it can be quicker to just run a full text search across the Premake sources for the markup you are looking to override.)"}),"\n",(0,r.jsxs)(n.p,{children:["For the moment we don't really need to worry too much about how this code works because we aren't actually going to change it at all. Instead, we will ",(0,r.jsx)(n.em,{children:"override"})," it with a new function that outputs our version comment, and then calls the original function to output the Project element, unmodified."]}),"\n",(0,r.jsxs)(n.p,{children:["Before we can do that, we need one more bit of information: what is ",(0,r.jsx)(n.code,{children:"m"}),"? ",(0,r.jsx)(n.a,{href:"/docs/Coding-Conventions",children:"By convention"}),", ",(0,r.jsx)(n.code,{children:"m"})," is a shortcut for the module's namespace (really just a Lua table) which we declare at the top of the file. Looking at the top of ",(0,r.jsx)(n.code,{children:"vs2010_vcxproj.lua"})," we find:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local p = premake\nlocal m = p.vstudio.vc2010\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Expanding that out, we can deduce that the fully-qualified name of the function we want to override is ",(0,r.jsx)(n.code,{children:"premake.vstudio.vc2010.project()"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"introducing-overrides",children:"Introducing Overrides"}),"\n",(0,r.jsxs)(n.p,{children:["Now that we've identified the function that emits the markup we wish to change, we can override it using Premake's aptly named ",(0,r.jsx)(n.code,{children:"override()"})," function."]}),"\n",(0,r.jsx)(n.p,{children:"Note that actions don't get pulled in until they are actually used so you will need to require it in order to access it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"require('vstudio')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then (and only then) you can go ahead and call the override function !"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"premake.override(premake.vstudio.vc2010, \"project\", function(base, prj)\n\tpremake.w('\x3c!-- Generated by Premake ' .. _PREMAKE_VERSION .. ' --\x3e')\n\tbase(prj)\nend)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This snippet replaces the original implementation of ",(0,r.jsx)(n.code,{children:"m.project()"})," with my new (anonymous) function. From this point on, when someone calls ",(0,r.jsx)(n.code,{children:"m.project()"}),", Premake will call my new function, passing it the original implementation as the first argument (",(0,r.jsx)(n.code,{children:"base"}),"). If the function requires any other arguments (in this case, it receives the project being exported as ",(0,r.jsx)(n.code,{children:"prj"}),") they appear after."]}),"\n",(0,r.jsxs)(n.p,{children:["In our replacement function, we emit our comment header using ",(0,r.jsx)(n.code,{children:"premake.w()"}),', which is short for "premake write", and ',(0,r.jsx)(n.a,{href:"/docs/_PREMAKE_VERSION",children:"_PREMAKE_VERSION"}),", which is a global variable holding the version of the currently running Premake executable."]}),"\n",(0,r.jsxs)(n.p,{children:["After emitting the comment we call ",(0,r.jsx)(n.code,{children:"base(prj)"}),", the original implementation of ",(0,r.jsx)(n.code,{children:"m.project()"}),", to do the rest of the work for us. Easy!"]}),"\n",(0,r.jsx)(n.p,{children:"To enable our override, place that code anywhere in your project or system scripts. Perhaps something like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "ConsoleApp"\n   -- ... the rest of the project settings...\n\n-- Write the current Premake version into our generated files, for reference\npremake.override(premake.vstudio.vc2010, "project", function(base, prj)\n\tpremake.w(\'\x3c!-- Generated by Premake \' .. _PREMAKE_VERSION .. \' --\x3e\')\n\tbase(prj)\nend)\n'})}),"\n",(0,r.jsx)(n.p,{children:"The next time you generate a Visual Studio project from your scripts, the comment header will be placed before the Project element."}),"\n",(0,r.jsx)(n.h2,{id:"introducing-call-arrays",children:"Introducing Call Arrays"}),"\n",(0,r.jsxs)(n.p,{children:["Overrides are a great way to intercept an existing call to modify its arguments or return value or even replace it entirely. There is another, more self-contained way that we could have implemented our customization by leveraging ",(0,r.jsxs)(n.a,{href:"/docs/Coding-Conventions",children:["Premake's ",(0,r.jsx)(n.em,{children:"call array"})," convention"]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you look at the top of ",(0,r.jsx)(n.code,{children:"vs2010_vcxproj.lua"}),", you will see that ",(0,r.jsx)(n.code,{children:"m.project()"})," is called via an array of function references:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"m.elements.project = function(prj)\n\treturn {\n\t\tm.xmlDeclaration,\n\t\tm.project,\n\t\tm.projectConfigurations,\n\t\tm.globals,\n\t\tm.importDefaultProps,\n\t\tm.configurationPropertiesGroup,\n\t\tm.importExtensionSettings,\n\t\tm.propertySheetGroup,\n\t\tm.userMacros,\n\t\tm.outputPropertiesGroup,\n\t\tm.itemDefinitionGroups,\n\t\tm.assemblyReferences,\n\t\tm.files,\n\t\tm.projectReferences,\n\t\tm.importExtensionTargets,\n\t}\nend\n\nfunction m.generate(prj)\n\tio.utf8()\n\tp.callArray(m.elements.project, prj)\n\tp.out('</Project>')\nend\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Premake calls ",(0,r.jsx)(n.code,{children:"m.generate()"})," to export the project\u2014we'll talk about how that happens later. ",(0,r.jsx)(n.code,{children:"m.generate()"})," calls ",(0,r.jsx)(n.code,{children:"p.callArray()"})," (remember ",(0,r.jsxs)(n.a,{href:"/docs/Coding-Conventions",children:[(0,r.jsx)(n.code,{children:"p"})," is an alias for ",(0,r.jsx)(n.code,{children:"premake"})]}),"), which calls all of the functions in the list returned by ",(0,r.jsx)(n.code,{children:"m.elements.project()"}),", passing the provided arguments (in this case ",(0,r.jsx)(n.code,{children:"prj"}),") to each of them. This indirection allows project script authors like yourself an opportunity to modify that list of calls by adding, removing, or reordering the list."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's implement our version comment as an addition to this particular call array. To do so, we will override the ",(0,r.jsx)(n.code,{children:"m.elements.project()"})," function (remember from the earlier example that ",(0,r.jsx)(n.code,{children:"m"})," is short for ",(0,r.jsx)(n.code,{children:"premake.vstudio.vc2010"}),"). We'll call the original implementation to get the array of calls, and then add our own before returning it to ",(0,r.jsx)(n.code,{children:"m.generate()"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local function premakeVersionComment(prj)\n\tpremake.w('\x3c!-- Generated by Premake ' .. _PREMAKE_VERSION .. ' --\x3e')\nend\n\npremake.override(premake.vstudio.vc2010.elements, \"project\", function(base, prj)\n\tlocal calls = base(prj)\n\ttable.insertafter(calls, m.xmlDeclaration, premakeVersionComment)\n\treturn calls\nend)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you add that snippet to your project or system script, your new function will get called between ",(0,r.jsx)(n.code,{children:"m.xmlDeclaration()"})," and ",(0,r.jsx)(n.code,{children:"m.project()"})," and place our comment right where we'd like it."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["(Wondering ",(0,r.jsx)(n.a,{href:"/docs/Why-Do-Call-Arrays-Need-Functions",children:"why the call array is in a function and not just a global table"}),"? Hint: because otherwise overrides wouldn't work.)"]})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);