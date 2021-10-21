"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7851],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],s={title:"Scopes & Inheritance"},i=void 0,p={unversionedId:"Scopes-and-Inheritance",id:"Scopes-and-Inheritance",isDocsHomePage:!1,title:"Scopes & Inheritance",description:"As you may have noticed from the previous samples, Premake uses a pseudo-declarative syntax for specifying project information. You specify a scope (i.e. a workspace or project) for the settings, and then the settings to be placed in that scope.",source:"@site/docs/Scopes-and-Inheritance.md",sourceDirName:".",slug:"/Scopes-and-Inheritance",permalink:"/docs/Scopes-and-Inheritance",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Scopes-and-Inheritance.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Scopes & Inheritance"},sidebar:"docs",previous:{title:"Workspaces & Projects",permalink:"/docs/Workspaces-and-Projects"},next:{title:"Adding Source Files",permalink:"/docs/Adding-Source-Files"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you may have noticed from the previous samples, Premake uses a pseudo-declarative syntax for specifying project information. You specify a ",(0,a.kt)("em",{parentName:"p"},"scope")," (i.e. a workspace or project) for the settings, and then the settings to be placed in that scope."),(0,a.kt)("p",null,"Scopes have a hierarchy: a ",(0,a.kt)("em",{parentName:"p"},"global")," scope containing workspaces, which in turn contains projects. Values placed into the outer scopes are inherited by the inner ones, so workspaces inherit the values stored at the global scope, and projects inherit values stored in workspaces."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- global scope, all workspaces will receive these values\ndefines { "GLOBAL" }\n\nworkspace "MyWorkspaces"\n  -- workspace scope inherits the global scope; the list value\n  -- will now be { "GLOBAL", "WORKSPACE" }\n  defines { "WORKSPACE" }\n\nproject "MyProject"\n  -- project scope inherits from its workspace; the list value\n  -- will now be { "GLOBAL", "WORKSPACE", "PROJECT" }\n  defines { "PROJECT" }\n')),(0,a.kt)("p",null,"Sometimes it can be helpful to go back and add values to a previously declared scope. You can do this the same way you declared it in the first place: by calling ",(0,a.kt)("a",{parentName:"p",href:"/docs/workspace"},(0,a.kt)("inlineCode",{parentName:"a"},"workspace"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/project"},(0,a.kt)("inlineCode",{parentName:"a"},"project")),", using the same name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- declare my workspace\nworkspace "MyWorkspace"\n  defines { "WORKSPACE1" }\n\n-- declare a project or two\nproject "MyProject"\n  defines { "PROJECT" }\n\n-- re-select my workspace to add more settings, which will be inherited\n-- by all projects in the workspace\nworkspace "MyWorkspace"\n  defines { "WORKSPACE2" }  -- value is now { "WORKSPACE1", "WORKSPACE2" }\n')),(0,a.kt)("p",null,'You can also select the parent or container of the current scope without having to know its name by using the special "*" name.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- declare my workspace\nworkspace "MyWorkspace"\n  defines { "WORKSPACE1" }\n\n-- declare a project or two\nproject "MyProject"\n  defines { "PROJECT" }\n\n-- re-select my workspace to add more settings\nproject "*"\n  defines { "WORKSPACE2" }  -- value is now { "WORKSPACE1", "WORKSPACE2" }\n\n-- re-select the global scope\nworkspace "*"\n')),(0,a.kt)("p",null,'Think of the "*" as a wilcard meaning "all projects in my parent container" or "all workspaces in the global scope".'))}d.isMDXComponent=!0}}]);