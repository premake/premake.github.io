"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3548],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93281:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Using Premake"},p=void 0,s={unversionedId:"Using-Premake",id:"Using-Premake",isDocsHomePage:!1,title:"Using Premake",description:"New to Premake? You might want to start with What is Premake?",source:"@site/docs/Using-Premake.md",sourceDirName:".",slug:"/Using-Premake",permalink:"/docs/Using-Premake",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Using-Premake.md",tags:[],version:"current",lastUpdatedBy:"Enhex",lastUpdatedAt:1640907889,formattedLastUpdatedAt:"12/30/2021",frontMatter:{title:"Using Premake"},sidebar:"docs",previous:{title:"What is Premake?",permalink:"/docs/What-Is-Premake"},next:{title:"Building Premake",permalink:"/docs/Building-Premake"}},u=[{value:"Using Premake to Generate Project Files",id:"using-premake-to-generate-project-files",children:[],level:2},{value:"Using the Generated Projects",id:"using-the-generated-projects",children:[],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"New to Premake? You might want to start with ",(0,l.kt)("a",{parentName:"em",href:"/docs/What-Is-Premake"},"What is Premake?"))),(0,l.kt)("p",null,"If you haven't already, you can ",(0,l.kt)("a",{parentName:"p",href:"/download"},"download Premake here"),", or ",(0,l.kt)("a",{parentName:"p",href:"/docs/Building-Premake"},"build it from source"),". Premake is a small command line executable, delivered as a single file. Just unpack the download and place the executable on your system search path, or anywhere else convenient."),(0,l.kt)("h2",{id:"using-premake-to-generate-project-files"},"Using Premake to Generate Project Files"),(0,l.kt)("p",null,"The simplest Premake command is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"premake5 [action]\n")),(0,l.kt)("p",null,"Premake defines the following list of actions out of the box; projects may also add their own custom actions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2022"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2022 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2019"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2019 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2017"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2017 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2015"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2015 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2013"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2013 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2012"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2012 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2010"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2010 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2008"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2008 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vs2005"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate Visual Studio 2005 project files")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gmake"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate GNU Makefiles (This generator is deprecated by gmake2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gmake2"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate GNU Makefiles (including ",(0,l.kt)("a",{parentName:"td",href:"http://www.cygwin.com/"},"Cygwin")," and ",(0,l.kt)("a",{parentName:"td",href:"http://www.mingw.org/"},"MinGW"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xcode4"),(0,l.kt)("td",{parentName:"tr",align:null},"XCode projects")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"codelite"),(0,l.kt)("td",{parentName:"tr",align:null},"CodeLite projects")))),(0,l.kt)("p",null,"(Premake4 supported some additional actions that haven't yet been ported to this new version; see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/Feature-Matrix"},"Available Feature Matrix")," for the whole list.)"),(0,l.kt)("p",null,"To generate Visual Studio 2013 project files, use the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"premake5 vs2013\n")),(0,l.kt)("p",null,"You can see a complete list of the actions and other options supported by a project with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"premake5 --help\n")),(0,l.kt)("h2",{id:"using-the-generated-projects"},"Using the Generated Projects"),(0,l.kt)("p",null,"For toolsets like Visual Studio and Xcode, you can simply load the generated solution or workspace into your IDE and build as you normally would."),(0,l.kt)("p",null,"If you have generated makefiles, running ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," with no options will build all targets using the default configuration, as set by the project author. To see the list of available configurations, type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make help\n")),(0,l.kt)("p",null,"To build a different configuration, add the ",(0,l.kt)("strong",{parentName:"p"},"config")," argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make config=release\n")),(0,l.kt)("p",null,"To remove all generated binaries and intermediate files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"make clean                 # to clean the default target\nmake config=release clean  # to clean a different target\n")),(0,l.kt)("p",null,"Premake generated makefiles do not (currently) support a ",(0,l.kt)("inlineCode",{parentName:"p"},"make install")," step. Instead, project owners are encouraged to ",(0,l.kt)("a",{parentName:"p",href:"/docs/Command-Line-Arguments"},"add an install action")," to their Premake scripts, which has the advantage of working with any toolset on any platform. You can check for the existence of an install action by viewing the help (run ",(0,l.kt)("inlineCode",{parentName:"p"},"premake5 --help")," in the project directory)."))}m.isMDXComponent=!0}}]);