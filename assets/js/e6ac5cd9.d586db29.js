"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1367],{52660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(74848),o=n(28453);const s={title:"Community Update #4",tags:["community-updates"],authors:"starkos"},r=void 0,i={permalink:"/blog/2020/04/07/community-update-4",source:"@site/blog/2020-04-07-community-update-4.md",title:"Community Update #4",description:"It's been much longer than anticipated since the last community update. I was out of the country for a bit, and then shortly after my return the whole Situation hit the fan and things got crazy for a while. I'm back now, up and running and looking ahead to what's next. I hope all of you are also safe and sound and getting your groove back.",date:"2020-04-07T00:00:00.000Z",tags:[{inline:!0,label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:2.46,hasTruncateMarker:!0,authors:[{name:"Jess Perkins",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://github.com/starkos.png",key:"starkos",page:null}],frontMatter:{title:"Community Update #4",tags:["community-updates"],authors:"starkos"},unlisted:!1,prevItem:{title:"Community Update #5",permalink:"/blog/2020/08/04/community-update-5"},nextItem:{title:"Community Update #3",permalink:"/blog/2020/01/08/community-update-3"}},h={authorsImageUrls:[void 0]},l=[{value:"Inbox Zero",id:"inbox-zero",level:4},{value:"Alpha-15",id:"alpha-15",level:4},{value:"Premake5 Stable?",id:"premake5-stable",level:4},{value:"Back to Next",id:"back-to-next",level:4},{value:"So long and thanks for all the fish",id:"so-long-and-thanks-for-all-the-fish",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",h4:"h4",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"It's been much longer than anticipated since the last community update. I was out of the country for a bit, and then shortly after my return the whole Situation hit the fan and things got crazy for a while. I'm back now, up and running and looking ahead to what's next. I hope all of you are also safe and sound and getting your groove back."}),"\n",(0,a.jsx)(t.h4,{id:"inbox-zero",children:"Inbox Zero"}),"\n",(0,a.jsxs)(t.p,{children:["Rather than diving right back into ",(0,a.jsx)(t.a,{href:"https://github.com/starkos/premake-next",children:"premake-next"}),", it felt best to take a turn clearing out the lingering pull requests that have been haunting our queue, in some cases for years now. ",(0,a.jsx)(t.a,{href:"https://github.com/samsinsane",children:"@saminsane"})," has been doing a fantastic job triaging your new PRs and getting them merged; I just had to deal with the older ones which, for various reasons, couldn't easily be landed."]}),"\n",(0,a.jsxs)(t.p,{children:["Long story short: after several years, we're at ",(0,a.jsx)(t.a,{href:"https://twitter.com/premakeapp/status/1250780905016303616",children:"inbox zero"}),". Check out ",(0,a.jsx)(t.a,{href:"https://github.com/premake/premake-core/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",children:"Premake's recently closed PR list"})," for the details on how we got there."]}),"\n",(0,a.jsx)(t.p,{children:"Whew!"}),"\n",(0,a.jsx)(t.h4,{id:"alpha-15",children:"Alpha-15"}),"\n",(0,a.jsxs)(t.p,{children:["With inbox zero reached, we also cut ",(0,a.jsx)(t.a,{href:"https://github.com/premake/premake-core/releases/tag/v5.0.0-alpha15",children:"a new 5.0 alpha release"})," with over 50 changes and fixes, from over 20 different contributors. Nicely done everyone, and thanks! \ud83d\ude4c"]}),"\n",(0,a.jsx)(t.p,{children:"{/* truncate */}"}),"\n",(0,a.jsx)(t.h4,{id:"premake5-stable",children:"Premake5 Stable?"}),"\n",(0,a.jsxs)(t.p,{children:["Speaking of changes and releases, ",(0,a.jsx)(t.a,{href:"https://github.com/premake/premake-core/issues/1423",children:"#1423"})," from ",(0,a.jsx)(t.a,{href:"https://github.com/dvzrv",children:"@dvzrz"})," asks whether it's (finally) time to cut a stable release of Premake5. Fair question! As I responded on the issue, ",(0,a.jsx)(t.a,{href:"https://github.com/samsinsane",children:"@saminsane"})," and I have discussed this before, and our general feeling is that there are too many big, breaking changes that still need to be made."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Gmake/Gmake2 situation needs to be sorted, the Xcode exporter needs to be made fit for use, both Gmake & Xcode need to be made module-friendly, and the toolset abstractions need to be reworked to support more real-world setups. The internal APIs really should be cleaned up and naming conventions standardized for module developers."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Help tackling those areas is, of course, very welcome."}),"\n",(0,a.jsx)(t.p,{children:"That said\u2026"}),"\n",(0,a.jsx)(t.h4,{id:"back-to-next",children:"Back to Next"}),"\n",(0,a.jsxs)(t.p,{children:["With the PRs cleared and a new alpha released, I'm now turning my attention back to ",(0,a.jsx)(t.a,{href:"https://github.com/starkos/premake-next",children:"premake-next"}),". I'm going to adjust the plan a bit and focus on getting the new storage and query systems online ASAP. Fixing these two systems is the point of whole exercise, and it seems worth getting more eyes on them sooner than later, even if the configuration blocks have to be manually assembled (i.e. the convenience functions like workspace(), project(), defines(), files(), etc. won't be there yet\u2026it will make sense when you see it)."]}),"\n",(0,a.jsx)(t.h4,{id:"so-long-and-thanks-for-all-the-fish",children:"So long and thanks for all the fish"}),"\n",(0,a.jsxs)(t.p,{children:["As ever, big and many thanks to everyone who contributed to alpha-15, and to everyone who continues to support ",(0,a.jsx)(t.a,{href:"https://opencollective.com/premake",children:"the Premake OpenCollective"}),", with an extra special \ud83c\udf89 to new sponsors ",(0,a.jsx)(t.a,{href:"https://opencollective.com/emilio-lopez",children:"Emilio Lopez"})," and ",(0,a.jsx)(t.a,{href:"https://opencollective.com/benjamin-schlotter",children:"Benjamin Schlotter"}),", and our stalwart benefactor ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://opencollective.com/_fivem",children:"CitizenFX Collective"})}),". I wouldn't be able to get any of this done without your help, and I truly appreciate it."]}),"\n",(0,a.jsx)(t.p,{children:"Stay safe!"}),"\n",(0,a.jsx)(t.p,{children:"~st."}),"\n",(0,a.jsxs)(t.p,{children:["(Your feedback is welcome and appreciated\u2014come find us at ",(0,a.jsx)(t.a,{href:"https://github.com/premake",children:"github.com/premake"})," or ",(0,a.jsx)(t.a,{href:"https://twitter.com/premakeapp",children:"@premakeapp"}),".)"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(96540);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);