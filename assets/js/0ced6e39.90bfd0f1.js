"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5132],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>m});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||l;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},90292:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=r(58168),a=(r(96540),r(15680));const l={},i=void 0,o={unversionedId:"runcodeanalysis",id:"runcodeanalysis",isDocsHomePage:!1,title:"runcodeanalysis",description:"Runs code analysis during the build process for Visual Studio projects.",source:"@site/docs/runcodeanalysis.md",sourceDirName:".",slug:"/runcodeanalysis",permalink:"/docs/runcodeanalysis",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/runcodeanalysis.md",tags:[],version:"current",lastUpdatedBy:"theComputeKid",lastUpdatedAt:1709146044,formattedLastUpdatedAt:"2/28/2024",frontMatter:{},sidebar:"docs",previous:{title:"rules",permalink:"/docs/rules"},next:{title:"runpathdirs",permalink:"/docs/runpathdirs"}},s=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Applies To",id:"applies-to",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:s},p="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Runs code analysis during the build process for Visual Studio projects."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"runcodeanalysis")," option enforces code analysis during the build process in Visual Studio projects. This may significantly increase build time for projects."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'runcodeanalysis("value")\n')),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"value")," is one of:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"On")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Off"))),(0,a.yg)("h3",{id:"applies-to"},"Applies To"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"config")," scope."),(0,a.yg)("h3",{id:"availability"},"Availability"),(0,a.yg)("p",null,"Premake 5.0.0 beta 3 or later for Visual Studio 2019 and later."),(0,a.yg)("h3",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Run clang-tidy code analysis during the build process."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-lua"},'clangtidy("On")\nruncodeanalysis("On")\n')),(0,a.yg)("h3",{id:"see-also"},"See Also"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cpp/code-quality/quick-start-code-analysis-for-c-cpp?view=msvc-170#run-code-analysis"},"Run Code Analysis")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/cpp/code-quality/clang-tidy?view=msvc-170"},"Using Clang-Tidy in Visual Studio")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/clangtidy"},"clangtidy"))))}u.isMDXComponent=!0}}]);