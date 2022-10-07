"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},97709:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"newaction",id:"newaction",isDocsHomePage:!1,title:"newaction",description:"Registers a new command-line action argument. For more information, see Command Line Arguments.",source:"@site/docs/newaction.md",sourceDirName:".",slug:"/newaction",permalink:"/docs/newaction",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/newaction.md",tags:[],version:"current",lastUpdatedBy:"Thomas Hope",lastUpdatedAt:1663530177,formattedLastUpdatedAt:"9/18/2022",frontMatter:{},sidebar:"docs",previous:{title:"nativewchar",permalink:"/docs/nativewchar"},next:{title:"newoption",permalink:"/docs/newoption"}},p=[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Availability",id:"availability",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"See Also",id:"see-also",children:[],level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Registers a new command-line action argument. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/Command-Line-Arguments"},"Command Line Arguments"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"newaction { description }\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"description")," is a table describing the new action. It may contain the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trigger"),(0,r.kt)("td",{parentName:"tr",align:null},'What the user would type on the command line to select the action, e.g. "vs2013".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shortname"),(0,r.kt)("td",{parentName:"tr",align:null},'A short summary for the help text, e.g. "Visual Studio 2013".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},'A description of the action\'s result, e.g. "Generate Visual Studio 2013 project files".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"execute"),(0,r.kt)("td",{parentName:"tr",align:null},"A function to be executed when the action is fired.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetos"),(0,r.kt)("td",{parentName:"tr",align:null},"If the toolset targets a specific OS, the ",(0,r.kt)("a",{parentName:"td",href:"/docs/system"},"identifier")," for that OS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"valid_kinds"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of ",(0,r.kt)("a",{parentName:"td",href:"/docs/kind"},"project kinds")," supported by the action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"valid_languages"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of ",(0,r.kt)("a",{parentName:"td",href:"/docs/language"},"languages")," supported by the action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"valid_tools"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of ",(0,r.kt)("a",{parentName:"td",href:"/docs/toolset"},"tools")," supported by the action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toolset"),(0,r.kt)("td",{parentName:"tr",align:null},"Default ",(0,r.kt)("a",{parentName:"td",href:"/docs/toolset"},"tools"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onStart"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback marking the start of action processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onWorkspace"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each workspace specified in the user script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onProject"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each project specified in the user script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRule"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each rule specified in the user script.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback marking the end of action processing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCleanWorkspace"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each workspace, when the clean action is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCleanProject"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each project, when the clean action is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCleanTarget"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback for each target, when the clean action is selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathVars"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of Premake tokens to toolset specific identifiers.")))),(0,r.kt)("p",null,"The callbacks will fire in this order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"onStart()"),"\n2a. ",(0,r.kt)("inlineCode",{parentName:"li"},"onWorkspace()")," for each workspace\n2b. ",(0,r.kt)("inlineCode",{parentName:"li"},"onProject()")," for each project in each workspace"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"onRule()")," for each rule"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"execute()")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"onEnd()"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The following fields have been deprecated:"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"os"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated, use targetos instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSolution"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated, use onWorkspace instead.")))),(0,r.kt)("h3",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Premake 5.0 and later."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Register a new action to install the software project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'newaction {\n   trigger     = "install",\n   description = "Install the software",\n   execute     = function ()\n      os.copyfile("bin/debug/myprogram", "/usr/local/bin/myprogram")\n   end\n}\n')),(0,r.kt)("h3",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Command-Line-Arguments"},"Command Line Arguments"))))}d.isMDXComponent=!0}}]);