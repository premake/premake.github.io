"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7139],{72529:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=n(74848),s=n(28453);const l={},r=void 0,a={id:"propertydefinition",title:"propertydefinition",description:"Creates a new property for a custom rule.",source:"@site/docs/propertydefinition.md",sourceDirName:".",slug:"/propertydefinition",permalink:"/docs/propertydefinition",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/propertydefinition.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355e3,frontMatter:{},sidebar:"docs",previous:{title:"project",permalink:"/docs/project"},next:{title:"rebuildcommands",permalink:"/docs/rebuildcommands"}},o={},d=[{value:"Parameters",id:"parameters",level:3},{value:"name",id:"name",level:4},{value:"kind",id:"kind",level:4},{value:"display",id:"display",level:4},{value:"description",id:"description",level:4},{value:"value",id:"value",level:4},{value:"values",id:"values",level:4},{value:"switch",id:"switch",level:4},{value:"separator",id:"separator",level:4},{value:"category",id:"category",level:4},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"Old Version issues",id:"old-version-issues",level:3}];function p(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Creates a new property for a ",(0,t.jsx)(i.a,{href:"/docs/Custom-Rules",children:"custom rule"}),"."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'propertydefinition {\n  name = "name",\n  kind = "kind",\n  display = "label",\n  description = "message"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"Custom rules, and therefore property definitions, are currently only supported for Visual Studio 2010+."}),"\n",(0,t.jsx)(i.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(i.p,{children:"The property definition is specified as a table with the following values. Note that no data validation is currently performed on property definition parameters at this time."}),"\n",(0,t.jsx)(i.h4,{id:"name",children:"name"}),"\n",(0,t.jsx)(i.p,{children:"Required; a name for the rule that will be unique in the projects where it is used. This name will be used as the name of the corresponding XML elements in Visual Studio rule files, so avoid spaces and other special characters."}),"\n",(0,t.jsx)(i.h4,{id:"kind",children:"kind"}),"\n",(0,t.jsx)(i.p,{children:"The expected data type of the values assigned to this property. Allowed values are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"boolean"})," - a yes or no value."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"integer"})," - an integer number."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"list"})," - a list of string values."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"number"})," - a floating point number."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"path"})," - a single file system path value."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"string"})," - a single string value."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For enum properties, this field is ignored and can be omitted. Otherwise it is required."}),"\n",(0,t.jsx)(i.h4,{id:"display",children:"display"}),"\n",(0,t.jsx)(i.p,{children:"A short description of the property to display in the toolset UI (property sheets, etc.)"}),"\n",(0,t.jsx)(i.h4,{id:"description",children:"description"}),"\n",(0,t.jsx)(i.p,{children:"A longer description of the property to display in the toolset UI (property sheets, etc.)"}),"\n",(0,t.jsx)(i.h4,{id:"value",children:"value"}),"\n",(0,t.jsx)(i.p,{children:"The default value of the property, if any."}),"\n",(0,t.jsx)(i.h4,{id:"values",children:"values"}),"\n",(0,t.jsx)(i.p,{children:"For enum properties, a key-value table of the possible values of the property, along with their text equivalent. See the examples below for more information."}),"\n",(0,t.jsx)(i.h4,{id:"switch",children:"switch"}),"\n",(0,t.jsx)(i.p,{children:"The value to be placed into the command line for this property. See the examples below for more information."}),"\n",(0,t.jsx)(i.h4,{id:"separator",children:"separator"}),"\n",(0,t.jsx)(i.p,{children:"For list properties, this sets the value of the list item separator in the command line.\nIf set, the list is concatenated by the separator and placed behind a single switch. If not set, the switch is duplicated."}),"\n",(0,t.jsx)(i.h4,{id:"category",children:"category"}),"\n",(0,t.jsx)(i.p,{children:'Visual Studio only.\nIf set, the property is placed in a subcategory with the specified name in the VS project properties section. If not set, the property is placed in the subcategory "General".'}),"\n",(0,t.jsx)(i.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,t.jsx)(i.p,{children:"Rules."}),"\n",(0,t.jsx)(i.h3,{id:"availability",children:"Availability"}),"\n",(0,t.jsx)(i.p,{children:"Available in Premake 5.0 or later for Visual Studio 2010 or later."}),"\n",(0,t.jsx)(i.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.p,{children:"A simple boolean property to control a switch."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'propertydefinition {\n  name = "DebuggingSymbols",\n  kind = "boolean",\n  display = "Debugging Symbols",\n  description = "Add debugging information to the generated output",\n  value = false,\n  switch = "-g"\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"To use this property in the rule:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'-- If set to true, evaluates to: `tool.exe -g`\nbuildcommand "tool.exe [DebuggingSymbols]"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Enum properties allow selection from a list of possible values."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'propertydefinition {\n  name = "OptimizationLevel",\n  display = "Optimization Level",\n  values = {\n    [0] = "None",\n    [1] = "Size",\n    [2] = "Speed",\n  },\n  switch = {\n    [0] = "-O0",\n    [1] = "-O1",\n    [2] = "-O3",\n  },\n  value = 2,\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"Enum properties are set using the value names."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'filter "configurations:Release"\n  myCustomRuleVars { OptimizationLevel = "None" }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"old-version-issues",children:"Old Version issues"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"As of premake 5.0 alpha13 and earlier, list properties in VS did not work as intended, contents could only be added once as a single element (preprocessed by a table.concat call) or else the project would be illformatted."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},l=t.createContext(s);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);