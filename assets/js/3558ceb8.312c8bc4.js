"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1298],{270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(74848),i=n(28453);const o={title:"Embedding Frameworks in Xcode for App Distribution"},s=void 0,a={id:"Embedding-Frameworks-in-Xcode",title:"Embedding Frameworks in Xcode for App Distribution",description:"In order to build a distributeable mac app it is typical to embed the resources your app depends on, including libraries and frameworks, inside the .app folder structure itself. Additionally you must sign all bundled executables for the app to be accepted for notarization.",source:"@site/docs/Embedding-Frameworks-in-Xcode.md",sourceDirName:".",slug:"/Embedding-Frameworks-in-Xcode",permalink:"/docs/Embedding-Frameworks-in-Xcode",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Embedding-Frameworks-in-Xcode.md",tags:[],version:"current",lastUpdatedBy:"Rsu",lastUpdatedAt:1690122355e3,frontMatter:{title:"Embedding Frameworks in Xcode for App Distribution"},sidebar:"docs",previous:{title:"Sharing Configuration Settings",permalink:"/docs/Sharing-Configuration-Settings"},next:{title:"allmodulespublic",permalink:"/docs/allmodulespublic"}},d={},l=[{value:"See Also",id:"see-also",level:3},{value:"External Resources",id:"external-resources",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In order to build a distributeable mac app it is typical to embed the resources your app depends on, including libraries and frameworks, inside the .app folder structure itself. Additionally you must sign all bundled executables for the app to be accepted for notarization."}),"\n",(0,r.jsxs)(t.p,{children:["The snippet below shows an example of the Xcode specific settings you need to set so that you can generate a ",(0,r.jsx)(t.em,{children:".xcodeproj"})," and have it build an app ready for distribution without needing to manually adjust settings in the Xcode UI."]}),"\n",(0,r.jsx)(t.p,{children:"Before attempting to setup your premake generated project make sure you are able to set all the required settings manually from the UI at least once, and export your app successfully for distribution. Doing this will allow Xcode to handle any one time setup or certificate generation for you, and provide you with a point of comparison if your generated project has issues."}),"\n",(0,r.jsx)(t.p,{children:"Some things to note:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"Info.plist"})," and ",(0,r.jsx)(t.em,{children:".entitlements"})," files need to be specified twice. Once in the ",(0,r.jsx)(t.code,{children:"files"})," section where paths are relative to the premake script, and once under ",(0,r.jsx)(t.code,{children:"xcodebuildsettings"})," where the path is relative to the generated ",(0,r.jsx)(t.em,{children:".xcodeproj"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Adding a third party framework such as ",(0,r.jsx)(t.em,{children:"SDL2.framework"})," requires four steps. ",(0,r.jsx)(t.code,{children:"links"})," to link the framework, ",(0,r.jsx)(t.code,{children:"frameworkdirs"})," to tell Xcode where to find it while building, ",(0,r.jsx)(t.code,{children:"sysincludedirs"})," points to the framework headers, and ",(0,r.jsx)(t.code,{children:"embedAndSign"})," to correctly embed the framework."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"@executable_path/../Frameworks"})," must be added to ",(0,r.jsx)(t.code,{children:'"LD_RUNPATH_SEARCH_PATHS"'})," to tell the built executable where to search for frameworks inside the .app bundle."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'-- mac specific settings\nfilter "action:xcode4"\n\tfiles {\n\t\t"source/mac/Info.plist", -- add your own your .plist and .entitlements so you can customise them\n\t\t"source/mac/app.entitlements",\n\t}\n\n\tlinks {\n\t\t"third_party/sdl2/macos/SDL2.framework",    -- relative path to third party frameworks\n\t\t"CoreFoundation.framework",                 -- no path needed for system frameworks\n\t\t"OpenGL.framework",\n\t}\n\n\tsysincludedirs {\n\t\t"third_party/sdl2/macos/SDL2.framework/Headers", -- need to explicitly add path to framework headers\n\t}\n\n\tframeworkdirs {\n\t\t"third_party/sdl2/macos/", -- path to search for third party frameworks\n\t}\n\n\tembedAndSign {\n\t\t"SDL2.framework" -- bundle the framework into the built .app and sign with your certificate\n\t}\n\n\txcodebuildsettings {\n\t\t["MACOSX_DEPLOYMENT_TARGET"] = "10.11",\n\t\t["PRODUCT_BUNDLE_IDENTIFIER"] = \'com.yourdomain.yourapp\',\n\t\t["CODE_SIGN_STYLE"] = "Automatic",\n\t\t["DEVELOPMENT_TEAM"] = \'1234ABCD56\',                                    -- your dev team id\n\t\t["INFOPLIST_FILE"] = "../../source/mac/Info.plist",                     -- path is relative to the generated project file\n\t\t["CODE_SIGN_ENTITLEMENTS"] = ("../../source/mac/app.entitlements"),     -- ^\n\t\t["ENABLE_HARDENED_RUNTIME"] = "YES",                                    -- hardened runtime is required for notarization\n\t\t["CODE_SIGN_IDENTITY"] = "Apple Development",                           -- sets \'Signing Certificate\' to \'Development\'. Defaults to \'Sign to Run Locally\'. not doing this will crash your app if you upgrade the project when prompted by Xcode\n\t\t["LD_RUNPATH_SEARCH_PATHS"] = "$(inherited) @executable_path/../Frameworks", -- tell the executable where to find the frameworks. Path is relative to executable location inside .app bundle\n\t}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/embed",children:"embed"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/embedandsign",children:"embedAndSign"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"external-resources",children:"External Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.apple.com/videos/play/wwdc2019/703",children:"All About Notarization at WWDC2019"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution",children:"Notarizing macOS software before distribution"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);