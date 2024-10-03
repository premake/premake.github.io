"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3553],{35040:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=n(74848),t=n(28453);const l={},r=void 0,a={id:"system",title:"system",description:"Specifies the target operating system.",source:"@site/docs/system.md",sourceDirName:".",slug:"/system",permalink:"/docs/system",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/system.md",tags:[],version:"current",lastUpdatedBy:"Sam Surtees",lastUpdatedAt:1665294726e3,frontMatter:{},sidebar:"docs",previous:{title:"syslibdirs",permalink:"/docs/syslibdirs"},next:{title:"systemversion",permalink:"/docs/systemversion"}},c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Applies To",id:"applies-to",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Specifies the target operating system."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:'system ("value")\n'})}),"\n",(0,i.jsxs)(s.p,{children:["If no system is specified, Premake will identify and target the current operating system. This can be overridden with the ",(0,i.jsx)(s.code,{children:"--os"})," command line argument, providing one of the system identifiers below."]}),"\n",(0,i.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"value"})," is one of:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"aix"}),"\n",(0,i.jsx)(s.li,{children:"android"}),"\n",(0,i.jsx)(s.li,{children:"bsd"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"http://www.haiku-os.org",children:"haiku"})}),"\n",(0,i.jsx)(s.li,{children:"ios"}),"\n",(0,i.jsx)(s.li,{children:"linux"}),"\n",(0,i.jsx)(s.li,{children:"macosx"}),"\n",(0,i.jsx)(s.li,{children:"solaris"}),"\n",(0,i.jsx)(s.li,{children:"uwp"}),"\n",(0,i.jsx)(s.li,{children:"wii"}),"\n",(0,i.jsx)(s.li,{children:"windows"}),"\n",(0,i.jsx)(s.li,{children:"xbox360"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"applies-to",children:"Applies To"}),"\n",(0,i.jsx)(s.p,{children:"Project configurations."}),"\n",(0,i.jsx)(s.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(s.p,{children:"Premake 5.0 or later."}),"\n",(0,i.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-lua",children:'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n   system { "Windows", "Unix", "Mac" }\n\n   filter "system:Windows"\n      system "windows"\n\n   filter "system:Unix"\n      system "linux"\n\n   filter "system:Mac"\n      system "macosx"\n'})}),"\n",(0,i.jsx)(s.h3,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/architecture",children:"architecture"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/_OS",children:"_OS"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var i=n(96540);const t={},l=i.createContext(t);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);