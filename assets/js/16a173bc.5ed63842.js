"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4463],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}},72035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(74848),s=n(28453);const i={title:"Community Update #6",tags:["community-updates"],authors:"starkos"},r=void 0,a={permalink:"/blog/2020/11/02/community-udpate-6",source:"@site/blog/2020-11-02-community-udpate-6.md",title:"Community Update #6",description:"Enter the Exporters",date:"2020-11-02T00:00:00.000Z",tags:[{inline:!0,label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:4.565,hasTruncateMarker:!0,authors:[{name:"Jess Perkins",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://github.com/starkos.png",key:"starkos",page:null}],frontMatter:{title:"Community Update #6",tags:["community-updates"],authors:"starkos"},unlisted:!1,prevItem:{title:"Community Update #7",permalink:"/blog/2021/02/24/community-update-7"},nextItem:{title:"Community Update #5",permalink:"/blog/2020/08/04/community-update-5"}},l={authorsImageUrls:[void 0]},c=[{value:"Enter the Exporters",id:"enter-the-exporters",level:3},{value:"What&#39;s Next for Next",id:"whats-next-for-next",level:3}];function d(e){const t={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"enter-the-exporters",children:"Enter the Exporters"}),"\n",(0,o.jsx)(t.p,{children:"The focus for this cycle was getting an exporter\u2014I settled on Visual Studio\u2014up and running and able to generate a basic, mostly hardcoded workspace and project. More details below, but TL;DR:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"All of the core systems are now in play, with the exception of toolsets and token expansion (more on those below)"}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"workspace"}),", ",(0,o.jsx)(t.strong,{children:"project"}),", ",(0,o.jsx)(t.strong,{children:"location"}),", and ",(0,o.jsx)(t.strong,{children:"filename"})," scripting APIs are implemented, as well as the ability to declare conditional configuration blocks"]}),"\n",(0,o.jsx)(t.li,{children:"A very rudimentary Visual Studio exporter is now in place, with the ability to generate mostly hardcoded C/C++ solutions and projects at the specified locations and filenames"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"whats-next-for-next",children:"What's Next for Next"}),"\n",(0,o.jsx)(t.p,{children:'For those of you who are more interested in "is it done yet?" than "what\'s new?", here\'s my current thinking on what comes next:'}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Decide if/how/when/where these improvements get merged (or not) with Premake5. I have some thoughts of course, and will be opening an RFC on the issue tracker shortly to gather feedback. I'l announce it on ",(0,o.jsx)(t.a,{href:"https://twitter.com/premakeapp",children:"@premakeapp"})," when I do."]}),"\n",(0,o.jsx)(t.li,{children:"Get build configurations & files online\u2014be able to generate simple Visual Studio C/C++ projects with no extra switches or dependencies"}),"\n",(0,o.jsx)(t.li,{children:"Get Make and Xcode up to same level as Visual Studio\u2014going to be some rewriting here as that code has seen a lot of wear and tear, and needs to be brought up to the latest code conventions"}),"\n",(0,o.jsx)(t.li,{children:"Decide on and build out the new solution for toolset adapters\u2014I'll open an RFC on the issue tracker for this as well"}),"\n",(0,o.jsxs)(t.li,{children:["Add ",(0,o.jsx)(t.strong,{children:"kind, links,"})," and the most important switches (e.g. ",(0,o.jsx)(t.strong,{children:"includedirs, symbols, optimize"}),")\u2014be able to support the most common C/C++ builds"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Somewhere in there I should also backfill the documentation so people know what's working. All of this is subject to change and peer pressure, feedback welcome."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);