"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5834],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Introducing Modules"},u=void 0,c={unversionedId:"Introducing-Modules",id:"Introducing-Modules",isDocsHomePage:!1,title:"Introducing Modules",description:"A Premake module is simply a Lua script that follows a few extra conventions:",source:"@site/docs/Introducing-Modules.md",sourceDirName:".",slug:"/Introducing-Modules",permalink:"/docs/Introducing-Modules",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Introducing-Modules.md",tags:[],version:"current",lastUpdatedBy:"KyrietS",lastUpdatedAt:1622582682,formattedLastUpdatedAt:"6/1/2021",frontMatter:{title:"Introducing Modules"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Premake module is simply a Lua script that follows a few extra conventions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the name of the script file is the name of the module"),(0,o.kt)("li",{parentName:"ul"},"the script should be placed in a folder of the same name"),(0,o.kt)("li",{parentName:"ul"},"the folder should be placed ",(0,o.kt)("a",{parentName:"li",href:"/docs/Locating-Scripts"},"somewhere Premake can find it"))),(0,o.kt)("p",null,"Let's start with a simple example. Create a new module by creating a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"lucky")," and placing it ",(0,o.kt)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"somewhere where Premake can find it"),". Create a new file inside this folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"lucky.lua"),", with this simple starter module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- lucky.lua\n-- My lucky Premake module\n\n-- Start by defining a table to hold the interface to my module. By\n-- convention we call this "m".\n\n    local m = {}\n\n-- Print out a message to show that our module has loaded.\n\n    print("The lucky module has loaded!")\n\n-- Finish by returning my module\'s interface\n\n    return m\n')),(0,o.kt)("p",null,"To use our new module, we just need to require it in any of our project scripts, something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'require "lucky"\n\nworkspace "MyWorkspace"\n    configurations { "Debug", "Release" }\n\nproject "MyProject"\n    -- and so on...\n')),(0,o.kt)("p",null,"When we generate this project, we should see our message displayed in the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ premake5 vs2012\nThe lucky module has loaded!\nBuilding configurations...\nRunning action 'vs2010'...\nGenerating MyWorkspace.sln...\nGenerating MyProject.vcxproj...\nDone.\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"require()")," is ",(0,o.kt)("a",{parentName:"p",href:"http://www.lua.org/pil/8.1.html"},"Lua's standard module loading function")," (though the version in Premake has been extended to support ",(0,o.kt)("a",{parentName:"p",href:"/docs/Locating-Scripts"},"more search locations"),"). The first time a module is required, Lua will load it and return the module's interface (the table we assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," in the example). If the module is later required again, the same table instance will be returned, without reloading the scripts."),(0,o.kt)("p",null,"Any local variables or functions you define in your module will be private, and only accessible from your module script. Variables or functions you assign to the module table will public, and accessible through the module interface returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"require()"),"."),(0,o.kt)("p",null,"Here is an example of a public function which accesses a private variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- lucky.lua\n-- My lucky Premake module\n\n    local m = {}\n\n-- This variable is private and won't be accessible elsewhere\n\n    local secretLuckyNumber = 7\n\n-- This function is public, and can be called via the interface\n\n    function m.makeNumberLucky(number)\n        return number * secretLuckyNumber\n    end\n\n    return m\n")),(0,o.kt)("p",null,"You could then use this module's functions in your project scripts like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local lucky = require "lucky"\nlocal luckyEight = lucky.makeNumberLucky(8)\n')),(0,o.kt)("p",null,"That's all there to it!"),(0,o.kt)("p",null,"Note that if you decide you want to ",(0,o.kt)("a",{parentName:"p",href:"/community/modules"},"share your module")," with other people, there are a ",(0,o.kt)("a",{parentName:"p",href:"/docs/Sharing-Your-Module"},"few other considerations to make"),"."))}d.isMDXComponent=!0}}]);