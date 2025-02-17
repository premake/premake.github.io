"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1375],{28453:(e,l,n)=>{n.d(l,{R:()=>a,x:()=>r});var i=n(96540);const t={},s=i.createContext(t);function a(e){const l=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:l},e.children)}},38782:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(74848),t=n(28453);const s={},a=void 0,r={id:"globals/include",title:"include",description:"Looks for and executes another script file, if it hasn't been run previously.",source:"@site/docs/globals/include.md",sourceDirName:"globals",slug:"/globals/include",permalink:"/docs/globals/include",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/globals/include.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"iif",permalink:"/docs/globals/iif"},next:{title:"includeexternal",permalink:"/docs/globals/includeexternal"}},c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Availability",id:"availability",level:3},{value:"Examples",id:"examples",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const l={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.p,{children:"Looks for and executes another script file, if it hasn't been run previously."}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-lua",children:'include("path")\n'})}),"\n",(0,i.jsx)(l.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"path"})," is the file system path to a script file or a directory. If a directory is specified, Premake looks for a file named ",(0,i.jsx)(l.code,{children:"premake5.lua"})," in that directory and runs it if found."]}),"\n",(0,i.jsxs)(l.p,{children:["If the file or directory specified has already been included previously, the call is ignored. If you want to execute the same script multiple times, use Lua's ",(0,i.jsx)(l.a,{href:"http://www.lua.org/manual/5.1/manual.html#pdf-dofile",children:"dofile()"})," instead."]}),"\n",(0,i.jsx)(l.h3,{id:"return-value",children:"Return Value"}),"\n",(0,i.jsx)(l.p,{children:"Any values returned by the included script are passed through to the caller."}),"\n",(0,i.jsx)(l.h3,{id:"availability",children:"Availability"}),"\n",(0,i.jsx)(l.p,{children:"Premake 5.0 or later."}),"\n",(0,i.jsx)(l.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-lua",children:'-- runs "src/MyApplication/premake5.lua"\ninclude "src/MyApplication"\n\n-- runs "my_script.lua" just once\ninclude "my_script.lua"\ninclude "my_script.lua"\n'})}),"\n",(0,i.jsx)(l.h3,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"/docs/globals/dofileopt",children:"dofileopt"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.a,{href:"/docs/globals/includeexternal",children:"includeexternal"})}),"\n"]})]})}function u(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);