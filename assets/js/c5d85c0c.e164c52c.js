"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5268],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}},69430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(74848),o=t(28453);const a={title:"Command Line Arguments"},s=void 0,r={id:"Command-Line-Arguments",title:"Command Line Arguments",description:"Premake provides the ability to define and handle new command-line arguments from within your project script using the newaction and newoption functions.",source:"@site/docs/Command-Line-Arguments.md",sourceDirName:".",slug:"/Command-Line-Arguments",permalink:"/docs/Command-Line-Arguments",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Command-Line-Arguments.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{title:"Command Line Arguments"},sidebar:"docs",previous:{title:"Build Settings",permalink:"/docs/Build-Settings"},next:{title:"Using Modules",permalink:"/docs/Using-Modules"}},c={},l=[{value:"Actions and Options",id:"actions-and-options",level:2},{value:"Creating New Options",id:"creating-new-options",level:2},{value:"Creating New Actions",id:"creating-new-actions",level:2}];function d(e){const n={a:"a",b:"b",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Premake provides the ability to define and handle new command-line arguments from within your project script using the ",(0,i.jsx)(n.a,{href:"/docs/newaction",children:"newaction"})," and ",(0,i.jsx)(n.a,{href:"/docs/newoption",children:"newoption"})," functions."]}),"\n",(0,i.jsx)(n.h2,{id:"actions-and-options",children:"Actions and Options"}),"\n",(0,i.jsxs)(n.p,{children:["Premake recognizes two types of arguments: ",(0,i.jsx)(n.em,{children:"actions"})," and ",(0,i.jsx)(n.em,{children:"options"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.em,{children:"action"})," indicates what Premake should do on any given run. For instance, the ",(0,i.jsx)(n.code,{children:"vs2013"})," action indicates that Visual Studio 2013 project files should be generated. The ",(0,i.jsx)(n.code,{children:"clean"})," action causes all generated files to be deleted. Only one action may be specified at a time."]}),"\n",(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.em,{children:"option"})," modifies the behavior of the action. For instance, the ",(0,i.jsx)(n.code,{children:"dotnet"})," option is used to change which .NET compiler set is used in the generated files. Options can accept a value, such as ",(0,i.jsx)(n.code,{children:"--dotnet=mono"})," or act as a flag, like ",(0,i.jsx)(n.code,{children:"--with-opengl"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["From within your script, you can identify the current action with the ",(0,i.jsx)(n.a,{href:"/docs/globals/_ACTION",children:(0,i.jsx)(n.code,{children:"_ACTION"})})," global variable, a string value. You can check for an option using the ",(0,i.jsx)(n.a,{href:"/docs/globals/_OPTIONS",children:(0,i.jsx)(n.code,{children:"_OPTIONS"})}),' table, which contains a list of key-value pairs. The key is the option identifier ("dotnet"), which references the command line value ("mono") or an empty string for valueless options.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'-- delete a file if the clean action is running\nif _ACTION == "clean" then\n   -- do something\nend\n\n-- use an option value in a configuration\ntargetdir ( _OPTIONS["outdir"] or "out" )\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-new-options",children:"Creating New Options"}),"\n",(0,i.jsxs)(n.p,{children:["New command-line options are created using the ",(0,i.jsx)(n.a,{href:"/docs/newoption",children:(0,i.jsx)(n.code,{children:"newoption"})})," function, passing a table which fully describes the option. This is best illustrated with some examples."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an option intended to force the use of OpenGL in a 3D application. It serves as a simple flag, and does not take any value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'newoption {\n   trigger = "with-opengl",\n   description = "Force the use of OpenGL for rendering, regardless of platform"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Note the commas after each key-value pair; this is required Lua syntax for a table. Once added to your script, the option will appear in the help text, and you may use the trigger as a keyword in your configuration blocks."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'filter { "options:with-opengl" }\n   links { "opengldrv" }\n\nfilter { "not options:with-opengl" }\n   links { "direct3ddrv" }\n'})}),"\n",(0,i.jsx)(n.p,{children:"The next example shows an option with a fixed set of allowed values. Like the example above, it is intended to allow the user to specify a 3D API."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'newoption {\n   trigger = "gfxapi",\n   value = "API",\n   description = "Choose a particular 3D API for rendering",\n   allowed = {\n      { "opengl",    "OpenGL" },\n      { "direct3d",  "Direct3D (Windows only)" },\n      { "software",  "Software Renderer" }\n   },\n   default = "opengl"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As before, this new option will be integrated into the help text, along with a description of each of the allowed values. Premake will check the option value at startup, and raise an error on invalid values. The ",(0,i.jsx)(n.b,{children:"value"})," field appears in the help text, and is intended to give the user a clue about the type of value that is expected. In this case, the help text will appear like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--gfxapi=API      Choose a particular 3D API for rendering; one of:\n\topengl        OpenGL\n\tdirect3d      Direct3D (Windows only)\n\tsoftware      Software Renderer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Unlike the example above, you now use the ",(0,i.jsx)(n.em,{children:"value"})," as a keyword in your configuration blocks."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'filter { "options:gfxapi=opengl" }\n   links { "opengldrv" }\n\nfilter { "options:gfxapi=direct3d" }\n    links { "direct3ddrv" }\n\nfilter { "options:gfxapi=software" }\n    links { "softwaredrv" }\n'})}),"\n",(0,i.jsx)(n.p,{children:"As a last example of options, you may want to specify an option that accepts an unconstrained value, such as an output path. Just leave off the list of allowed values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'newoption {\n   trigger     = "outdir",\n   value       = "path",\n   description = "Output directory for the compiled executable"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-new-actions",children:"Creating New Actions"}),"\n",(0,i.jsx)(n.p,{children:"Actions are defined in much the same way as options, and can be as simple as this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'newaction {\n   trigger     = "install",\n   description = "Install the software",\n   execute = function ()\n      -- copy files, etc. here\n   end\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The actual code to be executed when the action is fired should be placed in the ",(0,i.jsx)(n.code,{children:"execute()"})," function."]}),"\n",(0,i.jsxs)(n.p,{children:["That's the simple version, which is great for one-off operations that don't need to access to the specific project information. For a tutorial for writing a more complete action, see ",(0,i.jsx)(n.a,{href:"/docs/Adding-New-Action",children:"Adding a New Action"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);