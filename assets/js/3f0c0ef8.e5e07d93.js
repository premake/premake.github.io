"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8560],{21334:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=s(74848),n=s(28453);const l={},o=void 0,a={id:"http/http.get",title:"http.get",description:"Perform a HTTP GET request using the specified URL.",source:"@site/docs/http/http.get.md",sourceDirName:"http",slug:"/http/http.get",permalink:"/docs/http/http.get",draft:!1,unlisted:!1,editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/http/http.get.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1727531119e3,frontMatter:{},sidebar:"docs",previous:{title:"http.download",permalink:"/docs/http/http.download"},next:{title:"http.post",permalink:"/docs/http/http.post"}},i={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return Values",id:"return-values",level:3},{value:"Examples",id:"examples",level:3},{value:"Backward compatible function signature",id:"backward-compatible-function-signature",level:3},{value:"Availability",id:"availability",level:3},{value:"See Also",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Perform a HTTP GET request using the specified URL."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"http.get(url, { options })\n"})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"url"})," is the URL to be downloaded."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"options"})," is a ",(0,r.jsx)(t.a,{href:"/docs/http/http-options-table",children:"table of options"})," used for this HTTP request."]}),"\n",(0,r.jsx)(t.h3,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"There are three return values."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"resource, result_str, response_code = http.get(url, { options })\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"resource"})," is the content that was retrieved or nil if it could not be retrieved."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"result_str"}),' is set to "OK" if successful or contains a description of the failure.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"result_code"})," is the HTTP ",(0,r.jsx)(t.a,{href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html",children:"result code"})," of the get."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'local resource, result_str, response_code = http.get("http://example.com/api.json")\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:'function progress(total, current)\n  local ratio = current / total;\n  ratio = math.min(math.max(ratio, 0), 1);\n  local percent = math.floor(ratio * 100);\n  print("Download progress (" .. percent .. "%/100%)")\nend\n\nlocal resource, result_str, response_code = http.get("http://example.com/api.json", {\n    progress = progress,\n    headers = { "From: Premake", "Referer: Premake" },\n    userpwd = "username:password"\n})\n'})}),"\n",(0,r.jsx)(t.h3,{id:"backward-compatible-function-signature",children:"Backward compatible function signature"}),"\n",(0,r.jsx)(t.p,{children:"The previous signature of this function was"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"http.get(url, progress, headers)\n"})}),"\n",(0,r.jsx)(t.p,{children:"and continues to be supported. This is equivalent to"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"http.get(url, { progress = progress, headers = headers })\n"})}),"\n",(0,r.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,r.jsx)(t.p,{children:"Premake 5.0 or later."}),"\n",(0,r.jsx)(t.h3,{id:"see-also",children:"See Also"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/http/http.download",children:"http.download"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/http/http.post",children:"http.post"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);