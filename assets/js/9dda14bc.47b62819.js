"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7579],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(96540);const r={},l=s.createContext(r);function o(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:t},e.children)}},76524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=n(74848),r=n(28453);const l={},o=void 0,a={id:"http/http.download",title:"http.download",description:"Downloads an HTTP resource from the specified URL to a file.",source:"@site/docs/http/http.download.md",sourceDirName:"http",slug:"/http/http.download",permalink:"/docs/http/http.download",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http/http.download.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"verbosef",permalink:"/docs/globals/verbosef"},next:{title:"http.get",permalink:"/docs/http/http.get"}},i={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Return Values",id:"return-values",level:3},{value:"Examples",id:"examples",level:3},{value:"Backward compatible function signature",id:"backward-compatible-function-signature",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Downloads an HTTP resource from the specified URL to a file."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"http.download(url, file, { options })\n"})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"url"})," is the URL to be downloaded."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"file"})," is the destination file that will be written to."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"options"})," is a ",(0,s.jsx)(t.a,{href:"/docs/http/http-options-table",children:"table of options"})," used for this HTTP request."]}),"\n",(0,s.jsx)(t.h3,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsx)(t.p,{children:"There are two return values."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"result_str, response_code = http.download(url, file, { options })\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"result_str"}),' is set to "OK" if successful or contains a description of the failure.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"result_code"})," is the HTTP ",(0,s.jsx)(t.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"result code"})," of the download."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'local result_str, response_code = http.download("http://example.com/file.zip", "file.zip")\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'function progress(total, current)\n  local ratio = current / total;\n  ratio = math.min(math.max(ratio, 0), 1);\n  local percent = math.floor(ratio * 100);\n  print("Download progress (" .. percent .. "%/100%)")\nend\n\nlocal result_str, response_code = http.download("http://example.com/file.zip", "file.zip", {\n    progress = progress,\n    headers = { "From: Premake", "Referer: Premake" },\n    userpwd = "username:password"\n})\n'})}),"\n",(0,s.jsx)(t.h3,{id:"backward-compatible-function-signature",children:"Backward compatible function signature"}),"\n",(0,s.jsx)(t.p,{children:"The previous signature of this function was"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"http.download(url, file, progress, headers)\n"})}),"\n",(0,s.jsx)(t.p,{children:"and continues to be supported. This is equivalent to"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"http.download(url, file, { progress = progress, headers = headers })\n"})}),"\n",(0,s.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,s.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/http/http.get",children:"http.get"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);