"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9624],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99079:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={},c=void 0,u={unversionedId:"table.merge",id:"table.merge",isDocsHomePage:!1,title:"table.merge",description:"Adds the key-value associations from one table into another and returns the resulting merged table.",source:"@site/docs/table.merge.md",sourceDirName:".",slug:"/table.merge",permalink:"/docs/table.merge",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/table.merge.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"table.keys",permalink:"/docs/table.keys"},next:{title:"table.replace",permalink:"/docs/table.replace"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Availability",id:"availability",children:[]}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adds the key-value associations from one table into another and returns the resulting merged table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"table.merge(tbl1, tbl2, ...)\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"One or more tables to be merged."),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"A new table containing the key-value pairs from each input table, from first to last."),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 5.0 or later."))}m.isMDXComponent=!0}}]);