"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4075],{49888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(74848),i=n(28453);const l={},a=void 0,s={id:"externalrule",title:"externalrule",description:"Provides a way to reference rules that were created manually, outside of Premake.",source:"@site/docs/externalrule.md",sourceDirName:".",slug:"/externalrule",permalink:"/docs/externalrule",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/externalrule.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424e3,frontMatter:{},sidebar:"docs",previous:{title:"externalproject",permalink:"/docs/externalproject"},next:{title:"externalwarnings",permalink:"/docs/externalwarnings"}},o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Provides a way to reference rules that were created manually, outside of Premake."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'externalrule ("name")\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"externalrule()"})," function behaves just like ",(0,r.jsx)(t.a,{href:"/docs/rule",children:"rule()"}),", except that it does not output any rule file(s) at project generation time. You may use it to reference a hand-written or pre-existing rule file."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"name"})," is name of the rule. As with ",(0,r.jsx)(t.a,{href:"/docs/rule",children:"rule()"}),", it is used as the default file name, and may be overridden with ",(0,r.jsx)(t.a,{href:"/docs/filename",children:"filename"})," and ",(0,r.jsx)(t.a,{href:"/docs/location",children:"location"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,r.jsx)(t.p,{children:"Premake 5.0 or later; currently Visual Studio only."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'externalrule "luac"\n  location "../rules"  -- optional; if the file lives somewhere other than the script folder\n  filename "lua-to-c"  -- optional; if the file has a name different than the rule\n  fileextension ".lua" -- required; which files should be associated with the rule?\n\n  propertydefinition {\n    name = "StripDebugInfo",\n    kind = "boolean",\n  }\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"fileextension()"})," is required; this tells Premake which files in the project should be associated with the rule. ",(0,r.jsx)(t.code,{children:"location()"})," is optional, and only needs to be specified if the rule files lives somewhere other than the folder containing the script. Likewise, ",(0,r.jsx)(t.code,{children:"filename()"})," only needs to be specified if the rule file has a different name than the rule itself."]}),"\n",(0,r.jsx)(t.p,{children:"You do not need to specify all of the properties in the rule, only those you intend to set from your project scripts."}),"\n",(0,r.jsx)(t.p,{children:"The external rule file does not need to exist at the time the workspace is generated."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const i={},l=r.createContext(i);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);