"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2388],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60679:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={},s=void 0,p={unversionedId:"http.get",id:"http.get",isDocsHomePage:!1,title:"http.get",description:"Perform a HTTP GET request using the specified URL.",source:"@site/docs/http.get.md",sourceDirName:".",slug:"/http.get",permalink:"/docs/http.get",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http.get.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1615583424,formattedLastUpdatedAt:"3/12/2021",frontMatter:{},sidebar:"docs",previous:{title:"http.download",permalink:"/docs/http.download"},next:{title:"http.post",permalink:"/docs/http.post"}},u=[{value:"Parameters",id:"parameters",children:[]},{value:"Return Values",id:"return-values",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Backward compatible function signature",id:"backward-compatible-function-signature",children:[]},{value:"Availability",id:"availability",children:[]},{value:"See Also",id:"see-also",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Perform a HTTP GET request using the specified URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"http.get(url, { options })\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"url")," is the URL to be downloaded. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"options")," is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/http-options-table"},"table of options")," used for this HTTP request. "),(0,o.kt)("h3",{id:"return-values"},"Return Values"),(0,o.kt)("p",null,"There are three return values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"resource, result_str, response_code = http.get(url, { options })\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource")," is the content that was retrieved or nil if it could not be retrieved."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result_str"),' is set to "OK" if successful or contains a description of the failure.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result_code")," is the HTTP ",(0,o.kt)("a",{parentName:"li",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html"},"result code")," of the get. ")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local resource, result_str, response_code = http.get("http://example.com/api.json")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function progress(total, current)\n  local ratio = current / total;\n  ratio = math.min(math.max(ratio, 0), 1);\n  local percent = math.floor(ratio * 100);\n  print("Download progress (" .. percent .. "%/100%)")\nend\n\nlocal resource, result_str, response_code = http.get("http://example.com/api.json", {\n    progress = progress,\n    headers = { "From: Premake", "Referer: Premake" }, \n    userpwd = "username:password"\n})\n')),(0,o.kt)("h3",{id:"backward-compatible-function-signature"},"Backward compatible function signature"),(0,o.kt)("p",null,"The previous signature of this function was"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"http.get(url, progress, headers)\n")),(0,o.kt)("p",null,"and continues to be supported. This is equivalent to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"http.get(url, { progress = progress, headers = headers })\n")),(0,o.kt)("h3",{id:"availability"},"Availability"),(0,o.kt)("p",null,"Premake 5.0 or later."),(0,o.kt)("h3",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/http.download"},"http.download")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/http.post"},"http.post"))))}d.isMDXComponent=!0}}]);