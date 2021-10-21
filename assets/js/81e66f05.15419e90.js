"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[730],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),s=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||a;return r?i.createElement(d,l(l({ref:t},c),{},{components:r})):i.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22147:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=r(87462),n=r(63366),a=(r(67294),r(3905)),l=["components"],p={},o=void 0,s={unversionedId:"implibprefix",id:"implibprefix",isDocsHomePage:!1,title:"implibprefix",description:"Specifies the import library file name prefix. Import libraries are generated for Windows DLL projects.",source:"@site/docs/implibprefix.md",sourceDirName:".",slug:"/implibprefix",permalink:"/docs/implibprefix",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/implibprefix.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"implibname",permalink:"/docs/implibname"},next:{title:"implibsuffix",permalink:"/docs/implibsuffix"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Applies To",id:"applies-to",children:[]},{value:"Availability",id:"availability",children:[]},{value:"Examples",id:"examples",children:[]},{value:"See Also",id:"see-also",children:[]}],m={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specifies the import library file name prefix. Import libraries are generated for Windows DLL projects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix ("prefix")\n')),(0,a.kt)("p",null,"By default, the system naming convention will be used: no prefix on Windows, a prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," (as in ",(0,a.kt)("inlineCode",{parentName:"p"},"libMyProject.a"),") on other systems. The ",(0,a.kt)("inlineCode",{parentName:"p"},"implibprefix")," function allows you to change this default."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prefix")," is the new file name prefix."),(0,a.kt)("h3",{id:"applies-to"},"Applies To"),(0,a.kt)("p",null,"Project configurations."),(0,a.kt)("h3",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Premake 4.0 or later."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix "plugin"\n')),(0,a.kt)("p",null,"The prefix may also be set to an empty string for no prefix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'implibprefix ""\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibname"},"implibname")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibdir"},"implibdir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibextension"},"implibextension")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/implibsuffix"},"implibsuffix"))))}u.isMDXComponent=!0}}]);