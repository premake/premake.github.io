"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8927],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}},78068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(74848),a=n(28453);const o={title:"Community Update #8",tags:["community-updates"],authors:"starkos"},i=void 0,r={permalink:"/blog/2021/04/20/community-update-8",source:"@site/blog/2021-04-20-community-update-8.md",title:"Community Update #8",description:"Welcome Website!",date:"2021-04-20T00:00:00.000Z",tags:[{inline:!0,label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:2.245,hasTruncateMarker:!0,authors:[{name:"Jess Perkins",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://github.com/starkos.png",key:"starkos",page:null}],frontMatter:{title:"Community Update #8",tags:["community-updates"],authors:"starkos"},unlisted:!1,prevItem:{title:"Community Update #9",permalink:"/blog/2021/08/01/community-update-9"},nextItem:{title:"Community Update #7",permalink:"/blog/2021/02/24/community-update-7"}},h={authorsImageUrls:[void 0]},c=[{value:"Welcome Website!",id:"welcome-website",level:3},{value:"Premake v5.0-alpha16 Released",id:"premake-v50-alpha16-released",level:3},{value:"RFC: Branch or Backport",id:"rfc-branch-or-backport",level:3},{value:"What&#39;s Next for Next",id:"whats-next-for-next",level:3},{value:"Thanks \ud83d\ude4f",id:"thanks-",level:3}];function l(e){const t={a:"a",em:"em",h3:"h3",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"welcome-website",children:"Welcome Website!"}),"\n",(0,s.jsxs)(t.p,{children:["The biggest update this cycle: a new and very much improved Premake website. Built with ",(0,s.jsx)(t.a,{href:"https://docusaurus.io",children:"Docusaurus"}),', the new site gives us better navigation and search, a place for news (with RSS!) and it sure looks a hell of a lot better than my "make a website in 20 minutes" version we were running before.']}),"\n",(0,s.jsxs)(t.p,{children:["Many thanks to ",(0,s.jsx)(t.a,{href:"https://github.com/KyrietS",children:"@KyrietS"})," for kicking off the process and the help with bootstrapping and content migration! \ud83d\ude4c"]}),"\n",(0,s.jsxs)(t.p,{children:["On the process side, this upgrade means that the ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/tree/master/website/docs",children:"documentation now lives with the code"}),". Anyone can contribute by submitting a pull request, and the docs can now be updated right alongside the code that implements the changes. I'm optimistic this will help us improve the accuracy and timeliness of the documentation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"(The GitHub wiki served us well in its time, and is still there for the historical record. But people tended to not keep it up to date with the code. Navigation and search wasn't as nice. And permissions were all-or-nothing; there was no great way to strike a balance between community edits and preventing spam and vandalism.)"})}),"\n",(0,s.jsx)(t.p,{children:"Very happy about this."}),"\n",(0,s.jsx)(t.h3,{id:"premake-v50-alpha16-released",children:"Premake v5.0-alpha16 Released"}),"\n",(0,s.jsxs)(t.p,{children:["I\u2026did not realize how long it had been since there was a proper release. Pandemic and all that. I've corrected the matter: ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16",children:"v5.0-alpha16 is now available"}),", with lots of good improvements. See the full changelog ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha16",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"(By the way, if anyone out there has a knack for build automation I'd love to see these releases automated. Get in touch!)"}),"\n",(0,s.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,s.jsx)(t.h3,{id:"rfc-branch-or-backport",children:"RFC: Branch or Backport"}),"\n",(0,s.jsxs)(t.p,{children:["I also finally sat down and ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/discussions/1616",children:"opened an RFC"})," to figure out what to do with the work going on over at ",(0,s.jsx)(t.a,{href:"https://github.com/starkos/premake-next",children:"premake-next"}),": branch and push ahead to a v6, or backport the improvements into v5? I've gone back and forth on it but came down on the side of branching; now I'd love to hear what the community thinks. Join the discussion ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/discussions/1616",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"whats-next-for-next",children:"What's Next for Next"}),"\n",(0,s.jsxs)(t.p,{children:["While we're discussing, I'm hoping to get back to ",(0,s.jsx)(t.a,{href:"https://github.com/starkos/premake-next",children:"premake-next"}),", finish up the first few build switches (defines, include directories, that kind of thing), and show them working for both project and file-level configurations, exported for Visual Studio."]}),"\n",(0,s.jsx)(t.h3,{id:"thanks-",children:"Thanks \ud83d\ude4f"}),"\n",(0,s.jsxs)(t.p,{children:["As I do but never do enough, many thanks to ",(0,s.jsx)(t.a,{href:"https://github.com/samsinsane",children:"@samsinsane"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/KyrietS",children:"@KyrietS"}),", and ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/pulls?q=is%3Apr+is%3Aclosed+sort%3Aupdated-desc",children:"everyone who contributed code"})," and helped review PRs and issues this cycle."]}),"\n",(0,s.jsxs)(t.p,{children:["Many thanks to ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://opencollective.com/_fivem#section-contributions",children:"CitizenFX Collective"})})," and ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://opencollective.com/premake#section-contributors",children:"all our monthly backers"})})," who allow me to work on Premake instead of shilling for client work. Couldn't be doing this without your generosity."]}),"\n",(0,s.jsxs)(t.p,{children:["And as ever: I welcome questions, suggestions, and concerns. Message or DM me at ",(0,s.jsx)(t.a,{href:"https://twitter.com/premakeapp",children:"@premakeapp"}),", email at ",(0,s.jsx)(t.a,{href:"mailto:starkos@industriousone.com",children:"starkos@industriousone.com"}),", or ",(0,s.jsx)(t.a,{href:"https://github.com/premake/premake-core/discussions",children:"open a discussion on GitHub"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"~st."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);