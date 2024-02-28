"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5848],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(y,l(l({ref:r},c),{},{components:t})):a.createElement(y,l({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12240:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(58168),n=(t(96540),t(15680));const i={},l=void 0,o={unversionedId:"prebuildmessage",id:"prebuildmessage",isDocsHomePage:!1,title:"prebuildmessage",description:"Specifies a message to display to the user before starting execution of any specified pre-build commands.",source:"@site/docs/prebuildmessage.md",sourceDirName:".",slug:"/prebuildmessage",permalink:"/docs/prebuildmessage",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/prebuildmessage.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"prebuildcommands",permalink:"/docs/prebuildcommands"},next:{title:"preferredtoolarchitecture",permalink:"/docs/preferredtoolarchitecture"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],p={toc:s},c="wrapper";function d(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Specifies a message to display to the user before starting execution of any specified ",(0,n.yg)("a",{parentName:"p",href:"/docs/prebuildcommands"},"pre-build commands"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'prebuildmessage ("message")\n')),(0,n.yg)("h3",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"message")," is the message to be displayed."),(0,n.yg)("h3",{id:"applies-to"},"Applies To"),(0,n.yg)("p",null,"Project configurations."),(0,n.yg)("h3",{id:"availability"},"Availability"),(0,n.yg)("p",null,"Premake 4.4 or later."),(0,n.yg)("h3",{id:"examples"},"Examples"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-lua"},'project "MyProject"\n   prebuildcommands { "copy dependencies/*.lib bin" }\n   prebuildmessage "Copying dependencies..."\n')),(0,n.yg)("h3",{id:"see-also"},"See Also"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/prebuildcommands"},"prebuildcommands")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/postbuildmessage"},"postbuildmessage")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/prelinkmessage"},"prelinkmessage"))))}d.isMDXComponent=!0}}]);