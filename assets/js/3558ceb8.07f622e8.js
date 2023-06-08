"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92631:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Embedding Frameworks in Xcode for App Distribution"},i=void 0,l={unversionedId:"Embedding-Frameworks-in-Xcode",id:"Embedding-Frameworks-in-Xcode",isDocsHomePage:!1,title:"Embedding Frameworks in Xcode for App Distribution",description:"In order to build a distributeable mac app it is typical to embed the resources your app depends on, including libraries and frameworks, inside the .app folder structure itself. Additionally you must sign all bundled executables for the app to be accepted for notarization.",source:"@site/docs/Embedding-Frameworks-in-Xcode.md",sourceDirName:".",slug:"/Embedding-Frameworks-in-Xcode",permalink:"/docs/Embedding-Frameworks-in-Xcode",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Embedding-Frameworks-in-Xcode.md",tags:[],version:"current",lastUpdatedBy:"Thomas Hope",lastUpdatedAt:1654736617,formattedLastUpdatedAt:"6/9/2022",frontMatter:{title:"Embedding Frameworks in Xcode for App Distribution"},sidebar:"docs",previous:{title:"Sharing Configuration Settings",permalink:"/docs/Sharing-Configuration-Settings"},next:{title:"allmodulespublic",permalink:"/docs/allmodulespublic"}},s=[{value:"See Also",id:"see-also",children:[],level:3},{value:"External Resources",id:"external-resources",children:[],level:3}],d={toc:s},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to build a distributeable mac app it is typical to embed the resources your app depends on, including libraries and frameworks, inside the .app folder structure itself. Additionally you must sign all bundled executables for the app to be accepted for notarization."),(0,a.kt)("p",null,"The snippet below shows an example of the Xcode specific settings you need to set so that you can generate a ",(0,a.kt)("em",{parentName:"p"},".xcodeproj")," and have it build an app ready for distribution without needing to manually adjust settings in the Xcode UI."),(0,a.kt)("p",null,"Before attempting to setup your premake generated project make sure you are able to set all the required settings manually from the UI at least once, and export your app successfully for distribution. Doing this will allow Xcode to handle any one time setup or certificate generation for you, and provide you with a point of comparison if your generated project has issues."),(0,a.kt)("p",null,"Some things to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Info.plist")," and ",(0,a.kt)("em",{parentName:"li"},".entitlements")," files need to be specified twice. Once in the ",(0,a.kt)("inlineCode",{parentName:"li"},"files")," section where paths are relative to the premake script, and once under ",(0,a.kt)("inlineCode",{parentName:"li"},"xcodebuildsettings")," where the path is relative to the generated ",(0,a.kt)("em",{parentName:"li"},".xcodeproj"),"."),(0,a.kt)("li",{parentName:"ul"},"Adding a third party framework such as ",(0,a.kt)("em",{parentName:"li"},"SDL2.framework")," requires four steps. ",(0,a.kt)("inlineCode",{parentName:"li"},"links")," to link the framework, ",(0,a.kt)("inlineCode",{parentName:"li"},"frameworkdirs")," to tell Xcode where to find it while building, ",(0,a.kt)("inlineCode",{parentName:"li"},"sysincludedirs")," points to the framework headers, and ",(0,a.kt)("inlineCode",{parentName:"li"},"embedAndSign")," to correctly embed the framework."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@executable_path/../Frameworks")," must be added to ",(0,a.kt)("inlineCode",{parentName:"li"},'"LD_RUNPATH_SEARCH_PATHS"')," to tell the built executable where to search for frameworks inside the .app bundle.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- mac specific settings\nfilter "action:xcode4"\n    files {\n        "source/mac/Info.plist", -- add your own your .plist and .entitlements so you can customise them\n        "source/mac/app.entitlements",\n    }\n\n    links {\n        "third_party/sdl2/macos/SDL2.framework",    -- relative path to third party frameworks\n        "CoreFoundation.framework",                 -- no path needed for system frameworks\n        "OpenGL.framework",\n    }\n\n    sysincludedirs {\n        "third_party/sdl2/macos/SDL2.framework/Headers", -- need to explicitly add path to framework headers\n    }\n\n    frameworkdirs {\n        "third_party/sdl2/macos/", -- path to search for third party frameworks\n    }\n\n    embedAndSign {\n        "SDL2.framework" -- bundle the framework into the built .app and sign with your certificate\n    }\n\n    xcodebuildsettings {\n        ["MACOSX_DEPLOYMENT_TARGET"] = "10.11",\n        ["PRODUCT_BUNDLE_IDENTIFIER"] = \'com.yourdomain.yourapp\',\n        ["CODE_SIGN_STYLE"] = "Automatic",\n        ["DEVELOPMENT_TEAM"] = \'1234ABCD56\',                                    -- your dev team id\n        ["INFOPLIST_FILE"] = "../../source/mac/Info.plist",                     -- path is relative to the generated project file\n        ["CODE_SIGN_ENTITLEMENTS"] = ("../../source/mac/app.entitlements"),     -- ^\n        ["ENABLE_HARDENED_RUNTIME"] = "YES",                                    -- hardened runtime is required for notarization\n        ["CODE_SIGN_IDENTITY"] = "Apple Development",                           -- sets \'Signing Certificate\' to \'Development\'. Defaults to \'Sign to Run Locally\'. not doing this will crash your app if you upgrade the project when prompted by Xcode\n        ["LD_RUNPATH_SEARCH_PATHS"] = "$(inherited) @executable_path/../Frameworks", -- tell the executable where to find the frameworks. Path is relative to executable location inside .app bundle\n    }\n')),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/embed"},"embed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/embedandsign"},"embedAndSign"))),(0,a.kt)("h3",{id:"external-resources"},"External Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/videos/play/wwdc2019/703"},"All About Notarization at WWDC2019")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution"},"Notarizing macOS software before distribution"))))}c.isMDXComponent=!0}}]);