"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31840:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Custom Rules"},i=void 0,l={unversionedId:"Custom-Rules",id:"Custom-Rules",isDocsHomePage:!1,title:"Custom Rules",description:"Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to custom build commands, but in a more generic way, and with variables that can be set in your project script.",source:"@site/docs/Custom-Rules.md",sourceDirName:".",slug:"/Custom-Rules",permalink:"/docs/Custom-Rules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Rules.md",tags:[],version:"current",lastUpdatedBy:"Sam Surtees",lastUpdatedAt:1664781889,formattedLastUpdatedAt:"10/3/2022",frontMatter:{title:"Custom Rules"}},s=[{value:"Your First Rule",id:"your-first-rule",children:[],level:2},{value:"Rule Properties",id:"rule-properties",children:[],level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to ",(0,a.kt)("a",{parentName:"p",href:"/docs/Custom-Build-Commands"},"custom build commands"),", but in a more generic way, and with variables that can be set in your project script."),(0,a.kt)("p",null,"At generation time, Premake will output the appropriate rule files for the target action, just as it does for workspaces and projects.  For Visual Studio 2010+, Premake will generate ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleName.props"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleName.targets"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"RuleName.xml"),". Currently, no other actions are supported."),(0,a.kt)("p",null,"The documentation for this feature is still very incomplete."),(0,a.kt)("h2",{id:"your-first-rule"},"Your First Rule"),(0,a.kt)("p",null,"A simple build rule might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'rule "MyCustomRule"\n  display "My custom compiler"\n  fileextension ".xyz"\n\n  buildmessage \'Compiling %(Filename) with MyCustomCC\'\n  buildcommands \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj"\'\n  buildoutputs \'%(IntDir)/%(Filename).obj\'\n')),(0,a.kt)("p",null,'This rule will pass all files in project with the ".xyz" file extension through the specified build command. At export time, the files ',(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomRule.props"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomRule.targets"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomRule.xml")," will be generated in the sample directory. Like workspaces and projects, this can be changed with ",(0,a.kt)("a",{parentName:"p",href:"/docs/location"},(0,a.kt)("inlineCode",{parentName:"a"},"location"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/filename"},(0,a.kt)("inlineCode",{parentName:"a"},"filename")),"."),(0,a.kt)("p",null,"There are still some shortcomings with the current implementation, notably that we don't have a generic set of variables to use in the commands. The example above uses Visual Studio's own variables such as ",(0,a.kt)("inlineCode",{parentName:"p"},"%(FullPath)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"%(IntDir)"),"; obviously these won't work if rules are implemented for a different toolset."),(0,a.kt)("p",null,"To use the sample rule from above in a project, list the rule name in a ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules"},(0,a.kt)("inlineCode",{parentName:"a"},"rules"))," statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  rules { "MyCustomRule" }\n')),(0,a.kt)("h2",{id:"rule-properties"},"Rule Properties"),(0,a.kt)("p",null,"The benefit of custom rules over ",(0,a.kt)("a",{parentName:"p",href:"/docs/Custom-Build-Commands"},"custom build commands")," is the ability to specify ",(0,a.kt)("em",{parentName:"p"},"properties"),", which can then be set like any other project or configuration value. Properties are defined with ",(0,a.kt)("a",{parentName:"p",href:"/docs/propertydefinition"},(0,a.kt)("inlineCode",{parentName:"a"},"propertydefinition"))," functions, including default values which can be overridden by specific project configurations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'rule "MyCustomRule"\n  -- ...rule settings...\n\n  propertydefinition {\n    name = "StripDebugInfo",\n    kind = "boolean",\n    display = "Strip Debug Info",\n    description = "Remove debug information from the generated object files"\n    value = false,\n    switch = "-s"\n  }\n')),(0,a.kt)("p",null,"Properties may then be used in the rule commands by enclosing the name in square brackets. This, again, is a Visual Studio convention; we may switch it up if support for additional exporters becomes available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'buildcommand \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj" [StripDebugInfo]\n')),(0,a.kt)("p",null,"The string ",(0,a.kt)("inlineCode",{parentName:"p"},"[StripDebugInfo]")," will be set with the switch value ",(0,a.kt)("inlineCode",{parentName:"p"},"-s")," if the value is set to true."),(0,a.kt)("p",null,"To set the properties for a rule, Premake will create a setter function of the format ",(0,a.kt)("em",{parentName:"p"},"ruleName"),"Vars(). To set the example property above for a project's release configuration only:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n  rules { "MyCustomRule" }\n\n  filter { "configurations:Release" }\n    myCustomRuleVars {\n      StripDebugInfo = true\n    }\n')))}c.isMDXComponent=!0}}]);