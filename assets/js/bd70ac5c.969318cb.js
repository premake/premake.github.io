"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1920],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},42862:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=r(58168),i=(r(96540),r(15680));const a={title:"Linking"},o=void 0,l={unversionedId:"Linking",id:"Linking",isDocsHomePage:!1,title:"Linking",description:"Linking to external libraries is done with the links function.",source:"@site/docs/Linking.md",sourceDirName:".",slug:"/Linking",permalink:"/docs/Linking",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Linking.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Linking"},sidebar:"docs",previous:{title:"Adding Source Files",permalink:"/docs/Adding-Source-Files"},next:{title:"Configurations & Platforms",permalink:"/docs/Configurations-and-Platforms"}},s=[{value:"Finding Libraries",id:"finding-libraries",children:[],level:3}],c={toc:s},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Linking to external libraries is done with the ",(0,i.yg)("a",{parentName:"p",href:"/docs/links"},(0,i.yg)("inlineCode",{parentName:"a"},"links"))," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'links { "png", "zlib" }\n')),(0,i.yg)("p",null,"When specifying libraries, system-specific decorations, such as prefixes or file extensions, should be omitted. Premake will synthesize the correct format based on the target platform automatically. The one exception to the rule is Mac OS X frameworks, where the file extension is required to identify it as such."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'links { "Cocoa.framework" }\n')),(0,i.yg)("p",null,"To link to a sibling project (a project in the same workspace) use the ",(0,i.yg)("strong",{parentName:"p"},"project name"),". Premake will deduce the correct library path and name based on the current platform and configuration."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'workspace "MyWorkspace"\n\n   project "MyLibraryProject"\n      -- ...project settings here...\n\n   project "MyExecutableProject"\n      -- ...project settings here...\n      links { "MyLibraryProject" }\n')),(0,i.yg)("h3",{id:"finding-libraries"},"Finding Libraries"),(0,i.yg)("p",null,"You can tell Premake where to search for libraries with the ",(0,i.yg)("a",{parentName:"p",href:"/docs/libdirs"},(0,i.yg)("inlineCode",{parentName:"a"},"libdirs"))," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'libdirs { "libs", "../mylibs" }\n')),(0,i.yg)("p",null,"If you need to discover the location of a library, use the ",(0,i.yg)("a",{parentName:"p",href:"/docs/os.findlib"},(0,i.yg)("inlineCode",{parentName:"a"},"os.findlib"))," function."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-lua"},'libdirs { os.findlib("X11") }\n')))}u.isMDXComponent=!0}}]);