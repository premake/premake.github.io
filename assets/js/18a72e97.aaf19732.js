"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2255],{81412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(74848),i=n(28453);const r={title:"Custom Rules"},o=void 0,l={id:"Custom-Rules",title:"Custom Rules",description:"Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to custom build commands, but in a more generic way, and with variables that can be set in your project script.",source:"@site/docs/Custom-Rules.md",sourceDirName:".",slug:"/Custom-Rules",permalink:"/docs/Custom-Rules",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Custom-Rules.md",tags:[],version:"current",lastUpdatedBy:"Joris Dauphin",lastUpdatedAt:1709146228e3,frontMatter:{title:"Custom Rules"}},a={},c=[{value:"Your First Rule",id:"your-first-rule",level:2},{value:"Rule Properties",id:"rule-properties",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Rule file generation is a new and experimental feature of Premake 5.0, which currently only supports Visual Studio and the gmake2 action. It allows you describe how to build a particular kind of file, similar to ",(0,s.jsx)(t.a,{href:"/docs/Custom-Build-Commands",children:"custom build commands"}),", but in a more generic way, and with variables that can be set in your project script."]}),"\n",(0,s.jsxs)(t.p,{children:["At generation time, Premake will output the appropriate rule files for the target action, just as it does for workspaces and projects.  For Visual Studio 2010+, Premake will generate ",(0,s.jsx)(t.code,{children:"RuleName.props"}),", ",(0,s.jsx)(t.code,{children:"RuleName.targets"}),", and ",(0,s.jsx)(t.code,{children:"RuleName.xml"}),". Currently, no other actions are supported."]}),"\n",(0,s.jsx)(t.p,{children:"The documentation for this feature is still very incomplete."}),"\n",(0,s.jsx)(t.h2,{id:"your-first-rule",children:"Your First Rule"}),"\n",(0,s.jsx)(t.p,{children:"A simple build rule might look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'rule "MyCustomRule"\n  display "My custom compiler"\n  fileextension ".xyz"\n\n  buildmessage \'Compiling %(Filename) with MyCustomCC\'\n  buildcommands \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj"\'\n  buildoutputs \'%(IntDir)/%(Filename).obj\'\n'})}),"\n",(0,s.jsxs)(t.p,{children:['This rule will pass all files in project with the ".xyz" file extension through the specified build command. At export time, the files ',(0,s.jsx)(t.code,{children:"MyCustomRule.props"}),", ",(0,s.jsx)(t.code,{children:"MyCustomRule.targets"}),", and ",(0,s.jsx)(t.code,{children:"MyCustomRule.xml"})," will be generated in the sample directory. Like workspaces and projects, this can be changed with ",(0,s.jsx)(t.a,{href:"/docs/location",children:(0,s.jsx)(t.code,{children:"location"})})," and ",(0,s.jsx)(t.a,{href:"/docs/filename",children:(0,s.jsx)(t.code,{children:"filename"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["There are still some shortcomings with the current implementation, notably that we don't have a generic set of variables to use in the commands. The example above uses Visual Studio's own variables such as ",(0,s.jsx)(t.code,{children:"%(FullPath)"})," and ",(0,s.jsx)(t.code,{children:"%(IntDir)"}),"; obviously these won't work if rules are implemented for a different toolset."]}),"\n",(0,s.jsxs)(t.p,{children:["To use the sample rule from above in a project, list the rule name in a ",(0,s.jsx)(t.a,{href:"/docs/rules",children:(0,s.jsx)(t.code,{children:"rules"})})," statement:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'project "MyProject"\n  rules { "MyCustomRule" }\n'})}),"\n",(0,s.jsx)(t.h2,{id:"rule-properties",children:"Rule Properties"}),"\n",(0,s.jsxs)(t.p,{children:["The benefit of custom rules over ",(0,s.jsx)(t.a,{href:"/docs/Custom-Build-Commands",children:"custom build commands"})," is the ability to specify ",(0,s.jsx)(t.em,{children:"properties"}),", which can then be set like any other project or configuration value. Properties are defined with ",(0,s.jsx)(t.a,{href:"/docs/propertydefinition",children:(0,s.jsx)(t.code,{children:"propertydefinition"})})," functions, including default values which can be overridden by specific project configurations."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'rule "MyCustomRule"\n  -- ...rule settings...\n\n  propertydefinition {\n    name = "StripDebugInfo",\n    kind = "boolean",\n    display = "Strip Debug Info",\n    description = "Remove debug information from the generated object files"\n    value = false,\n    switch = "-s"\n  }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Properties may then be used in the rule commands by enclosing the name in square brackets. This, again, is a Visual Studio convention; we may switch it up if support for additional exporters becomes available. You might find in ",(0,s.jsx)(t.a,{href:"/docs/Tokens",children:"Tokens"})," some portable tokens for replacement."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'buildcommand \'MyCustomCC.exe -c "%(FullPath)" -o "%(IntDir)/%(Filename).obj" [StripDebugInfo]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The string ",(0,s.jsx)(t.code,{children:"[StripDebugInfo]"})," will be set with the switch value ",(0,s.jsx)(t.code,{children:"-s"})," if the value is set to true."]}),"\n",(0,s.jsxs)(t.p,{children:["To set the properties for a rule, Premake will create a setter function of the format ",(0,s.jsx)(t.em,{children:"ruleName"}),"Vars(). To set the example property above for a project's release configuration only:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'project "MyProject"\n  rules { "MyCustomRule" }\n\n  filter { "configurations:Release" }\n    myCustomRuleVars {\n      StripDebugInfo = true\n    }\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);