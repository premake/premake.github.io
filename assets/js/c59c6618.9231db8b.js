"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6730],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?i.createElement(f,l(l({ref:t},s),{},{components:r})):i.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36426:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],o={},p=void 0,c={unversionedId:"implibdir",id:"implibdir",isDocsHomePage:!1,title:"implibdir",description:"Specifies the import library output directory. Import libraries are generated for Windows DLL projects.",source:"@site/docs/implibdir.md",sourceDirName:".",slug:"/implibdir",permalink:"/docs/implibdir",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/implibdir.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"imagepath",permalink:"/docs/imagepath"},next:{title:"implibextension",permalink:"/docs/implibextension"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies the import library output directory. Import libraries are generated for Windows DLL projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibdir ("path")\n')),(0,a.kt)("p",null,"By default, the generated project files will place the import library in the same directory as the compiled binary. The ",(0,a.kt)("inlineCode",{parentName:"p"},"implibdir")," function allows you to change this location."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"path")," is the output directory for the library, relative to the currently executing script file."),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 4.0 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibdir "../Libraries"\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibname"},"implibname")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibextension"},"implibextension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibprefix"},"implibprefix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibsuffix"},"implibsuffix"))))}m.isMDXComponent=!0}}]);