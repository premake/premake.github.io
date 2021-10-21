"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8103],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=["components"],l={title:"Command Line Arguments"},s=void 0,p={unversionedId:"Command-Line-Arguments",id:"Command-Line-Arguments",isDocsHomePage:!1,title:"Command Line Arguments",description:"Premake provides the ability to define and handle new command-line arguments from within your project script using the newaction and newoption functions.",source:"@site/docs/Command-Line-Arguments.md",sourceDirName:".",slug:"/Command-Line-Arguments",permalink:"/docs/Command-Line-Arguments",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Command-Line-Arguments.md",tags:[],version:"current",lastUpdatedBy:"starkos",lastUpdatedAt:1631875623,formattedLastUpdatedAt:"9/17/2021",frontMatter:{title:"Command Line Arguments"},sidebar:"docs",previous:{title:"Build Settings",permalink:"/docs/Build-Settings"},next:{title:"Using Modules",permalink:"/docs/Using-Modules"}},c=[{value:"Actions and Options",id:"actions-and-options",children:[]},{value:"Creating New Options",id:"creating-new-options",children:[]},{value:"Creating New Actions",id:"creating-new-actions",children:[]}],u={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Premake provides the ability to define and handle new command-line arguments from within your project script using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/newaction"},"newaction")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/newoption"},"newoption")," functions."),(0,i.kt)("h2",{id:"actions-and-options"},"Actions and Options"),(0,i.kt)("p",null,"Premake recognizes two types of arguments: ",(0,i.kt)("em",{parentName:"p"},"actions")," and ",(0,i.kt)("em",{parentName:"p"},"options"),"."),(0,i.kt)("p",null,"An ",(0,i.kt)("em",{parentName:"p"},"action")," indicates what Premake should do on any given run. For instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"vs2013")," action indicates that Visual Studio 2013 project files should be generated. The ",(0,i.kt)("inlineCode",{parentName:"p"},"clean")," action causes all generated files to be deleted. Only one action may be specified at a time."),(0,i.kt)("p",null,"An ",(0,i.kt)("em",{parentName:"p"},"option")," modifies the behavior of the action. For instance, the ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet")," option is used to change which .NET compiler set is used in the generated files. Options can accept a value, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"--dotnet=mono")," or act as a flag, like ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-opengl"),"."),(0,i.kt)("p",null,"From within your script, you can identify the current action with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/_ACTION"},(0,i.kt)("inlineCode",{parentName:"a"},"_ACTION"))," global variable, a string value. You can check for an option using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/_OPTIONS"},(0,i.kt)("inlineCode",{parentName:"a"},"_OPTIONS")),' table, which contains a list of key-value pairs. The key is the option identifier ("dotnet"), which references the command line value ("mono") or an empty string for valueless options.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- delete a file if the clean action is running\nif _ACTION == "clean" then\n   -- do something\nend\n\n-- use an option value in a configuration\ntargetdir ( _OPTIONS["outdir"] or "out" )\n')),(0,i.kt)("h2",{id:"creating-new-options"},"Creating New Options"),(0,i.kt)("p",null,"New command-line options are created using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/newoption"},(0,i.kt)("inlineCode",{parentName:"a"},"newoption"))," function, passing a table which fully describes the option. This is best illustrated with some examples."),(0,i.kt)("p",null,"Here is an option intended to force the use of OpenGL in a 3D application. It serves as a simple flag, and does not take any value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger = "with-opengl",\n   description = "Force the use of OpenGL for rendering, regardless of platform"\n}\n')),(0,i.kt)("p",null,"Note the commas after each key-value pair; this is required Lua syntax for a table. Once added to your script, the option will appear in the help text, and you may use the trigger as a keyword in your configuration blocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter { "options:with-opengl" }\n   links { "opengldrv" }\n\nfilter { "not options:with-opengl" }\n   links { "direct3ddrv" }\n')),(0,i.kt)("p",null,"The next example shows an option with a fixed set of allowed values. Like the example above, it is intended to allow the user to specify a 3D API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger = "gfxapi",\n   value = "API",\n   description = "Choose a particular 3D API for rendering",\n   allowed = {\n      { "opengl",    "OpenGL" },\n      { "direct3d",  "Direct3D (Windows only)" },\n      { "software",  "Software Renderer" }\n   },\n   default = "opengl"\n}\n')),(0,i.kt)("p",null,"As before, this new option will be integrated into the help text, along with a description of each of the allowed values. Premake will check the option value at startup, and raise an error on invalid values. The ",(0,i.kt)("b",null,"value")," field appears in the help text, and is intended to give the user a clue about the type of value that is expected. In this case, the help text will appear like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--gfxapi=API      Choose a particular 3D API for rendering; one of:\n    opengl        OpenGL\n    direct3d      Direct3D (Windows only)\n    software      Software Renderer\n")),(0,i.kt)("p",null,"Unlike the example above, you now use the ",(0,i.kt)("em",{parentName:"p"},"value")," as a keyword in your configuration blocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'filter { "options:gfxapi=opengl" }\n   links { "opengldrv" }\n\nfilter { "options:gfxapi=direct3d" }\n    links { "direct3ddrv" }\n\nfilter { "options:gfxapi=software" }\n    links { "softwaredrv" }\n')),(0,i.kt)("p",null,"As a last example of options, you may want to specify an option that accepts an unconstrained value, such as an output path. Just leave off the list of allowed values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'newoption {\n   trigger     = "outdir",\n   value       = "path",\n   description = "Output directory for the compiled executable"\n}\n')),(0,i.kt)("h2",{id:"creating-new-actions"},"Creating New Actions"),(0,i.kt)("p",null,"Actions are defined in much the same way as options, and can be as simple as this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'newaction {\n   trigger     = "install",\n   description = "Install the software",\n   execute = function ()\n      -- copy files, etc. here\n   end\n}\n')),(0,i.kt)("p",null,"The actual code to be executed when the action is fired should be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," function."),(0,i.kt)("p",null,"That's the simple version, which is great for one-off operations that don't need to access to the specific project information. For a tutorial for writing a more complete action, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/Adding-New-Action"},"Adding a New Action"),"."))}d.isMDXComponent=!0}}]);