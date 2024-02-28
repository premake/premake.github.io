"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1080],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),s=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=s(e.components);return t.createElement(i.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,y=p["".concat(i,".").concat(u)]||p[u]||d[u]||l;return n?t.createElement(y,o(o({ref:a},m),{},{components:n})):t.createElement(y,o({ref:a},m))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71645:(e,a,n)=>{n.r(a),n.d(a,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var t=n(58168),r=(n(96540),n(15680));const l={},o=void 0,c={unversionedId:"cleancommands",id:"cleancommands",isDocsHomePage:!1,title:"cleancommands",description:"Specifies one or more shell commands to be executed to clean a Makefile project.",source:"@site/docs/cleancommands.md",sourceDirName:".",slug:"/cleancommands",permalink:"/docs/cleancommands",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/cleancommands.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"clangtidy",permalink:"/docs/clangtidy"},next:{title:"cleanextensions",permalink:"/docs/cleanextensions"}},i=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2},{value:"See Also",id:"see-also",children:[],level:2}],s={toc:i},m="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Specifies one or more shell commands to be executed to clean a ",(0,r.yg)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'cleancommands { "commands" }\n')),(0,r.yg)("h3",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"commands")," specifies a list of one or more shell commands to be executed. The commands may use tokens."),(0,r.yg)("h3",{id:"applies-to"},"Applies To"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile projects")),(0,r.yg)("h3",{id:"availability"},"Availability"),(0,r.yg)("p",null,"Premake 5.0 or later."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Use a ",(0,r.yg)("a",{parentName:"p",href:"/docs/Makefile-Projects"},"Makefile project")," to execute an external makefile."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n   configurations { "Debug", "Release" }\n\nproject "MyProject"\n   kind "Makefile"\n\n   buildcommands {\n      "make %{cfg.buildcfg}"\n   }\n\n   rebuildcommands {\n      "make %{cfg.buildcfg} rebuild"\n   }\n\n   cleancommands {\n      "make clean %{cfg.buildcfg}"\n   }\n\n')),(0,r.yg)("h2",{id:"see-also"},"See Also"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/Custom-Build-Commands"},"Custom Build Commands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/Makefile-Projects"},"Makefile Projects")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/buildcommands"},"buildcommands")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/buildmessage"},"buildmessage")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/buildoutputs"},"buildoutputs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/rebuildcommands"},"rebuildcommands"))))}p.isMDXComponent=!0}}]);