"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),h=s(a),c=n,k=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35638:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return m},toc:function(){return u},default:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Community Update #9",tags:["community-updates"],author:"starkos",author_url:"https://github.com/starkos",author_image_url:"https://avatars.githubusercontent.com/u/249247?v=4",author_title:"Premake Admin & Developer"},l=void 0,s={permalink:"/blog/2021/08/01/community-update-9",source:"@site/blog/2021-08-01-community-update-9.md",title:"Community Update #9",description:"I can't believe we're already eight months into 2021, how did this happen.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:3.035,truncated:!1,authors:[{name:"starkos",title:"Premake Admin & Developer",url:"https://github.com/starkos",imageURL:"https://avatars.githubusercontent.com/u/249247?v=4"}],nextItem:{title:"Community Update #8",permalink:"/blog/2021/04/20/community-update-8"}},m={authorsImageUrls:[void 0]},u=[{value:"<strong>Branch, don&#39;t backport</strong>",id:"branch-dont-backport",children:[]},{value:"The Path to 5.0",id:"the-path-to-50",children:[]},{value:"Premake6",id:"premake6",children:[]},{value:"Community Contributions",id:"community-contributions",children:[]}],h={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I can't believe we're already eight months into 2021, how did this happen."),(0,o.kt)("h3",{id:"branch-dont-backport"},(0,o.kt)("strong",{parentName:"h3"},"Branch, don't backport")),(0,o.kt)("p",null,"In the last update, I asked for input on where the work going into ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/starkos/premake-next"},"premake-next")," should end up: branch a new 6.x major version, or backport the changes to 5.x? There was ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions/1616"},"solid consensus")," that premake-next should be treated as a new major version, with v5 upgraded to a stable release for on-going support. Thanks to everyone who participated and offered feedback!"),(0,o.kt)("p",null,"With that settled, I've archived the premake-next repository and moved all development to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/tree/6.x"},"a new 6.x branch on premake-core"),". As of the next release, I'll be upgrading the status of 5.0 from alpha to beta, with the intention of making the first stable release shortly."),(0,o.kt)("h3",{id:"the-path-to-50"},"The Path to 5.0"),(0,o.kt)("p",null,"Premake's perpetual alpha status ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1536"},"causes confusion")," and makes it ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/issues/1423"},"difficult for some people to adopt"),". We've been hanging on to that label in the hope we'd get a chance to overhaul the makefile and Xcode exporters. But now that we have a v6 branch it makes sense break things over there instead, and get v5 to a stable release sooner rather than later."),(0,o.kt)("p",null,"I've ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/milestone/3"},"opened a 5.0 milestone")," on the project and will be assigning a few issues to myself there. If you have a backward-compatibility breaking change that you feel must get in before 5.0 becomes stable, open or escalate an issue ASAP so we can get it on the roadmap. And as ever, we're all really busy, so any help getting this over the finish line is much appreciated!"),(0,o.kt)("h3",{id:"premake6"},"Premake6"),(0,o.kt)("p",null,"In other news, Premake6 can now generate its own Visual Studio project files and bootstrap itself. That doesn't sound very impressive, but it does means that all of the under the hood stuff is now online and working as intended, and a full vertical slice has been completed. \ud83c\udf89"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nickclark2016"},"@nickclark2016")," has volunteered to begin looking into a new-and-improved makefile exporter, which frees me up to start looking at Xcode and improving the way we represent toolsets like Clang and GCC. The stable release of 5.0 is likely to take up all the air in the room for a bit, but hopefully I can report progress on those soon."),(0,o.kt)("h3",{id:"community-contributions"},"Community Contributions"),(0,o.kt)("p",null,"The community keeps things rolling\u2014many thanks to everyone listed here!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1570"},"#1570")," Initial C++20 module support for Visual Studio (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/hannes-harnisch"},"@hannes-harnisch"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1625"},"#1625"),' Remove "*ng" action deprecation and auto-fix (',(0,o.kt)("a",{parentName:"li",href:"https://github.com/noresources"},"@noresources"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1635"},"#1635")," Fix typo in Using Premake documentation (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/abhiss"},"@abhiss"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1638"},"#1638")," Fix broken links in docs (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1642"},"#1642")," Fix spelling mistake (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Troplo"},"@Troplo"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1644"},"#1644")," Fix author name and update time on pages (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KyrietS"},"@KyrietS"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1645"},"#1645")," Add missing support for prebuildmessage/postbuildmessage for Codelite (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarod42"},"@Jarod42"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1649"},"#1649")," Fix curl header search path (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/depinxi"},"@depinxi"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1654"},"#1654")," xcode4: Fix missing link of sibling project with custom targetextension (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/depinxi"},"@depinxi"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1655"},"#1655")," Compiler Version support for Visual Studion 2017+ (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1657"},"#1657")," Renormalize line endings (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1663"},"#1663")," compilebuildoutputs make some comments obsolete (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarod42"},"@Jarod42"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1668"},"#1668")," Fix v6 bootstrapping from v5 (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/starkos"},"@starkos"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1673"},"#1673")," Updated sidebar to include toolsversion link (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1662"},"#1662")," Handle buildcommand for Codelite (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Jarod42"},"@Jarod42"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/premake/premake-core/pull/1658"},"#1658")," Fix D module compiler output for visual studio (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nickclark2016"},"@nickclark2016"),")")),(0,o.kt)("p",null,"Additional gratitude and good wishes to everyone who helped review pull requests and triage issues this cycle. Projects like this don't work without you."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://opencollective.com/_fivem"},(0,o.kt)("img",{src:"https://images.opencollective.com/_fivem/2f78b5f/logo/128.png"}))),(0,o.kt)("p",null,"A big shout out to our premier sponsor ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://opencollective.com/_fivem"},"Cfx.re"))," and all ",(0,o.kt)("a",{parentName:"p",href:"https://opencollective.com/premake#section-contributors"},"our monthly backers"),"\u2014be sure to check out their work and support them back if you can!"),(0,o.kt)("p",null,"I welcome questions, suggestions, and concerns. Message or DM me at ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/premakeapp"},"@premakeapp"),", email at ",(0,o.kt)("a",{parentName:"p",href:"mailto:starkos@industriousone.com"},"starkos@industriousone.com"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/premake/premake-core/discussions"},"open a discussion on GitHub"),"."))}c.isMDXComponent=!0}}]);