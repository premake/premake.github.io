"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7050],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>c});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},g=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,c=m["".concat(p,".").concat(d)]||m[d]||y[d]||i;return t?r.createElement(c,n(n({ref:a},g),{},{components:t})):r.createElement(c,n({ref:a},g))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,n=new Array(i);n[0]=d;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[m]="string"==typeof e?e:l,n[1]=o;for(var s=2;s<i;s++)n[s]=t[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61062:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(58168),l=(t(96540),t(15680));const i={},n=void 0,o={unversionedId:"Lua-Library-Additions",id:"Lua-Library-Additions",isDocsHomePage:!1,title:"Lua-Library-Additions",description:"Globals",source:"@site/docs/Lua-Library-Additions.md",sourceDirName:".",slug:"/Lua-Library-Additions",permalink:"/docs/Lua-Library-Additions",editUrl:"https://github.com/premake/premake-core/edit/master/website/docs/Lua-Library-Additions.md",tags:[],version:"current",lastUpdatedBy:"Joao Matos",lastUpdatedAt:1726761137,formattedLastUpdatedAt:"9/19/2024",frontMatter:{}},p=[{value:"Globals",id:"globals",children:[],level:3},{value:"Debugging",id:"debugging",children:[],level:3},{value:"HTTP/S",id:"https",children:[],level:3},{value:"I/O",id:"io",children:[],level:3},{value:"JSON",id:"json",children:[],level:3},{value:"OS",id:"os",children:[],level:3},{value:"Path",id:"path",children:[],level:3},{value:"String",id:"string",children:[],level:3},{value:"Table",id:"table",children:[],level:3},{value:"Term",id:"term",children:[],level:3},{value:"Zip",id:"zip",children:[],level:3}],s={toc:p},g="wrapper";function m(e){let{components:a,...t}=e;return(0,l.yg)(g,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h3",{id:"globals"},"Globals"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/dofileopt"},"dofileopt")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/include"},"include")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/includeexternal"},"includeexternal")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/require"},"require"))),(0,l.yg)("h3",{id:"debugging"},"Debugging"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/debug.prompt"},"debug.prompt"))),(0,l.yg)("h3",{id:"https"},"HTTP/S"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/http.download"},"http.download")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/http.get"},"http.get")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/http.post"},"http.post"))),(0,l.yg)("h3",{id:"io"},"I/O"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/io.readfile"},"io.readfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/io.writefile"},"io.writefile"))),(0,l.yg)("h3",{id:"json"},"JSON"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/json.decode"},"json.decode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/json.encode"},"json.encode"))),(0,l.yg)("h3",{id:"os"},"OS"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.chdir"},"os.chdir")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.chmod"},"os.chmod")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.comparefiles"},"os.comparefiles")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.copyfile"},"os.copyfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.executef"},"os.executef")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.findheader"},"os.findheader")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.findlib"},"os.findlib")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.get"},"os.get")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.getcwd"},"os.getcwd")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.getpass"},"os.getpass")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.getversion"},"os.getversion")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.host"},"os.host")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.is"},"os.is")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.is64bit"},"os.is64bit")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.isdir"},"os.isdir")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.isfile"},"os.isfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.islink"},"os.islink")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.locate"},"os.locate")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.matchdirs"},"os.matchdirs")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.matchfiles"},"os.matchfiles")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.mkdir"},"os.mkdir")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.outputof"},"os.outputof")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.pathsearch"},"os.pathsearch")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.realpath"},"os.realpath")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.remove"},"os.remove")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.rmdir"},"os.rmdir")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.stat"},"os.stat")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.target"},"os.target")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.touchfile"},"os.touchfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.translateCommands"},"os.translateCommands")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.uuid"},"os.uuid")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/os.writefile_ifnotequal"},"os.writefile_ifnotequal"))),(0,l.yg)("h3",{id:"path"},"Path"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.appendExtension"},"path.appendExtension")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getabsolute"},"path.getabsolute")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getbasename"},"path.getbasename")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getdirectory"},"path.getdirectory")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getdrive"},"path.getdrive")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getextension"},"path.getextension")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getname"},"path.getname")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.getrelative"},"path.getrelative")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.hasextension"},"path.hasextension")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.isabsolute"},"path.isabsolute")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.iscfile"},"path.iscfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.iscppfile"},"path.iscppfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.iscppheader"},"path.iscppheader")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.isframework"},"path.isframework")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.islinkable"},"path.islinkable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.isobjectfile"},"path.isobjectfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.isresourcefile"},"path.isresourcefile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.join"},"path.join")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.normalize"},"path.normalize")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.rebase"},"path.rebase")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.replaceextension"},"path.replaceextension")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.translate"},"path.translate")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/path.wildcards"},"path.wildcards"))),(0,l.yg)("h3",{id:"string"},"String"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.capitalized"},"string.capitalized")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.contains"},"string.contains")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.endswith"},"string.endswith")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.escapepattern"},"string.escapepattern")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.explode"},"string.explode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.findlast"},"string.findlast")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.hash"},"string.hash")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.lines"},"string.lines")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.plural"},"string.plural")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.sha1"},"string.sha1")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/string.startswith"},"string.startswith"))),(0,l.yg)("h3",{id:"table"},"Table"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.arraycopy"},"table.arraycopy")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.contains"},"table.contains")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.deepcopy"},"table.deepcopy")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.extract"},"table.extract")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.filterempty"},"table.filterempty")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.flatten"},"table.flatten")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.fold"},"table.fold")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.foreachi"},"table.foreachi")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.implode"},"table.implode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.indexof"},"table.indexof")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.insertafter"},"table.insertafter")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.insertflat"},"table.insertflat")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.isempty"},"table.isempty")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.join"},"table.join")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.keys"},"table.keys")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.merge"},"table.merge")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.replace"},"table.replace")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.tostring"},"table.tostring")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/table.translate"},"table.translate"))),(0,l.yg)("h3",{id:"term"},"Term"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.getTextColor"},"term.getTextColor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.setTextColor"},"term.setTextColor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.pushColor"},"term.pushColor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.popColor"},"term.popColor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.clearToEndOfLine"},"term.clearToEndOfLine")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/term.moveLeft"},"term.moveLeft"))),(0,l.yg)("h3",{id:"zip"},"Zip"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/zip.extract"},"zip.extract"))))}m.isMDXComponent=!0}}]);