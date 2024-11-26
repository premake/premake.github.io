"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2720],{12892:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>n,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=i(74848),s=i(28453);const l={title:"Community Update #11",tags:["community-updates"],authors:"nickclark2016"},a=void 0,o={permalink:"/blog/2024/11/09/community-update-11",source:"@site/blog/2024-11-09-community-update-11.md",title:"Community Update #11",description:"It's been almost 3 years since the last community update, and over 2 years since the last beta.  Without further ado, here are the community contributions fromt the last 2 years.",date:"2024-11-09T00:00:00.000Z",tags:[{inline:!0,label:"community-updates",permalink:"/blog/tags/community-updates"}],readingTime:5.895,hasTruncateMarker:!0,authors:[{name:"Nick Clark",title:"Premake Developer",url:"https://github.com/nickclark2016",imageURL:"https://github.com/nickclark2016.png",key:"nickclark2016",page:null}],frontMatter:{title:"Community Update #11",tags:["community-updates"],authors:"nickclark2016"},unlisted:!1,nextItem:{title:"Community Update #10",permalink:"/blog/2021/11/21/community-update-10"}},n={authorsImageUrls:[void 0]},c=[{value:"Road to Premake 5.0",id:"road-to-premake-50",level:3},{value:"Community Contributions",id:"community-contributions",level:3}];function h(e){const r={a:"a",code:"code",div:"div",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"It's been almost 3 years since the last community update, and over 2 years since the last beta.  Without further ado, here are the community contributions fromt the last 2 years."}),"\n",(0,t.jsx)(r.h3,{id:"road-to-premake-50",children:"Road to Premake 5.0"}),"\n",(0,t.jsx)(r.p,{children:"Most of the heavy lifting for Premake 5.0 is done, but there are a few major milestones left for leaving beta and going to full release."}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Deprecation and removal of the ",(0,t.jsx)(r.a,{href:"https://premake.github.io/docs/flags",children:"flags"}),' API. Flags are a remenant of older models. Instead, flags will be migrated to the idiomatic Premake approach of dedicated APIs. This isn\'t going to be as trivial as "On" and "Off", as many of these flags represent a larger group of behaviors.']}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:'Deprecation and removal of the gmake exporter in favor of gmake2. This has been one of the goals for many years now, and we\'re confident that gmake2 is in a spot where it can be "promoted" to the primary GNU makefile exporter. In the next release, gmake will likely be renamed and deprecated, and gmake will describe the gmake2 exporter. This will be a breaking change, but we feel it is the best way forward to remove the bifurcation of the makefile exporter. Until the time when we do remove the legacy gmake exporter, users current leveraging the legacy exporter are encouraged to try out the gmake2 exporter and report any defects or feature deficiencies in order to make the change as seamless as possible.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In order to make sure we capture the needs of users for the 5.0 stable release, I encourage you to open issues or discussions to ensure the transition to 5.0 is an easy user experience."}),"\n",(0,t.jsx)(r.p,{children:"{/* truncate */}"}),"\n",(0,t.jsx)(r.h3,{id:"community-contributions",children:"Community Contributions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1841",children:"#1841"}),"  Update shadertype.md (@TylerDahl)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1842",children:"#1842"}),"  Update shaderobjectfileoutput.md (@TylerDahl)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1843",children:"#1843"}),"  Update shadermodel.md (@TylerDahl)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1942",children:"#1942"}),"  Release/v5.0 beta2 (@premake)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1951",children:"#1951"}),"  Fix custom build with missing directory (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1952",children:"#1952"}),"  vstudio: add usestandardpreprocessor option (@flakey5)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1954",children:"#1954"}),"  Add newoption.catagory to documentation, mark os.is as deprecated (@thomashope)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1959",children:"#1959"}),"  Use admonitions in documentation for things marked as deprecated (@thomashope)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1970",children:"#1970"}),"  Updated Android docs (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1971",children:"#1971"}),"  Fixed a couple of issues with the Custom Rules docs (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1975",children:"#1975"}),"  Strip linking decorators for sibling projects (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1976",children:"#1976"}),"  Android projects use IncludePath instead of ExternalIncludePath (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1978",children:"#1978"}),"  Added support for CopyFileToFolders via Copy buildaction (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1980",children:"#1980"}),"  Added UWP support for VS projects (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1981",children:"#1981"}),"  Update usefullpaths.md (@nepp95)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1985",children:"#1985"}),"  Update defaultplatform.md (@GiacomoMaino)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1992",children:"#1992"}),"  Add AntTarget to vsandroid project file (@0x416c69)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/1997",children:"#1997"}),"  Add validation for toolset. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2003",children:"#2003"}),'  Allow to specify "--cc=msc" as command line. (@Jarod42)']}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2004",children:"#2004"}),"  Handle entrypoint for msc. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2006",children:"#2006"}),"  ",(0,t.jsx)(r.code,{children:"externalwarnings"}),", ",(0,t.jsx)(r.code,{children:"externalanglebrackets"}),", ",(0,t.jsx)(r.code,{children:"externalincludedirs"})," was already available in vs2019 (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2009",children:"#2009"}),"  Fix typos in comment. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2010",children:"#2010"}),"  Typo fix (@brno32)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2011",children:"#2011"}),"  Add support for unity builds (@Sharlock93)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2022",children:"#2022"}),"  Fix Debian build recepie. (@KOLANICH-tools)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2023",children:"#2023"}),"  Fix support of openmp for visual studio with clang toolset. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2024",children:"#2024"}),"  Fix typo in bytecode description. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2025",children:"#2025"}),"  Fix missing targets file issue in some C++ nuget packages (@hanagasira)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2027",children:"#2027"}),"  ",(0,t.jsx)(r.code,{children:'sanitize { "Address" }'})," should set link flags too for gcc/clang. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2028",children:"#2028"}),"  Add support for idirafter flag in GCC/Clang (@nickclark2016)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2032",children:"#2032"}),"  Change to minimize differences after Codelite re-save the file (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2034",children:"#2034"}),"  Robustify ",(0,t.jsx)(r.code,{children:"http.get"})," tests with retry. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2039",children:"#2039"}),"  gmake2: Fix detecting msdos vs posix shell (@Peter0x44)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2042",children:"#2042"}),"  Fix ",(0,t.jsx)(r.code,{children:'compileas "C"'})," and ",(0,t.jsx)(r.code,{children:'"C++"'})," for gcc (shared with clang). (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2052",children:"#2052"}),"  Fix typo (@rafaelcn)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2061",children:"#2061"}),"  Fixed issue with Codelite unit test (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2064",children:"#2064"}),"  Updated actions from v2 to v3 (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2066",children:"#2066"}),"  Improve error message of ",(0,t.jsx)(r.code,{children:"include"})," (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2070",children:"#2070"}),"  Add support of prelink steps (similar to prebuild steps) for Codelite. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2072",children:"#2072"}),"  Fix prelink step dependencies for gmake (to be done after compilation). (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2075",children:"#2075"}),"  remove trailing whitespaces and add new line at eof (@hanagasira)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2076",children:"#2076"}),"  Allow to select specific version of msc in command line. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2081",children:"#2081"}),"  Add some missing flags for msc toolset (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2084",children:"#2084"}),"  Update debugdir.md docs to clarify feature support (@thomashope)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2087",children:"#2087"}),"  Add clarification for relative paths (@learn-more)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2088",children:"#2088"}),"  Fix nil indexing for codelite (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2090",children:"#2090"}),"  Add support to ",(0,t.jsx)(r.code,{children:"undefines"})," for Codelite. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2102",children:"#2102"}),"  remove reference to non existent example. (@mcarlson-nvidia)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2104",children:"#2104"}),"  Add VS2022 to list of valid kinds for Android Packaging (@premake)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2117",children:"#2117"}),"  Require unistd.h for macosx in libzip (@nickclark2016)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2118",children:"#2118"}),"  Changes target of HTTP tests to hopefully resolve test issues in CI (@nickclark2016)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2122",children:"#2122"}),"  Fix ",(0,t.jsx)(r.code,{children:"premake.findProjectScript"})," of previous commit. (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2127",children:"#2127"}),"  Fixes for using debugger under Linux (@vadz)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2131",children:"#2131"}),"  Use call array for MSVS filters file generation too (@vadz)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2135",children:"#2135"}),"  Fix libzip missing a library (@KanuX-14)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2172",children:"#2172"}),"  Custom LLVM Versions for VS2019+ (@nickclark2016)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2187",children:"#2187"}),"  Enable code analysis via clang-tidy in Visual Studio (@theComputeKid)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2194",children:"#2194"}),"  [vs*] Allow to have per-file ",(0,t.jsx)(r.code,{children:"cdialect"}),"/",(0,t.jsx)(r.code,{children:"cppdialect"}),". (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2195",children:"#2195"}),"  [vs2010+] Handle ",(0,t.jsx)(r.code,{children:"compileas"}),' for files with "unknown" extensions. (@Jarod42)']}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2203",children:"#2203"}),"  Add CA root certificate path for Haiku (@augiedoggie)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2217",children:"#2217"}),"  Add Library to available shadertypes (@vkaytsanov)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2237",children:"#2237"}),"  [CI] add dependabot.yml to maintain version action up to date (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2238",children:"#2238"}),"  Bump the github-actions group with 3 updates (@premake)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2243",children:"#2243"}),"  Fix stack manipulation in Premake's ",(0,t.jsx)(r.code,{children:"luaL_loadfilex"})," override. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2251",children:"#2251"}),"  Add a ",(0,t.jsx)(r.code,{children:"os.hostarch()"})," function to get the host system architecture. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2252",children:"#2252"}),"  Document ",(0,t.jsx)(r.code,{children:"os.rename"})," and ",(0,t.jsx)(r.code,{children:"os.getenv"})," APIs (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2253",children:"#2253"}),"  Add ",(0,t.jsx)(r.code,{children:"term.clearToEndOfLine"})," and ",(0,t.jsx)(r.code,{children:"term.moveLeft"})," API additions. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2254",children:"#2254"}),"  Adds ",(0,t.jsx)(r.code,{children:"desktop"})," system tag to desktop systems. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2255",children:"#2255"}),"  Move sanitize, visibility and inlinesvisibility to shared table. (@alex-rass-88)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2261",children:"#2261"}),"  Add tests for ",(0,t.jsx)(r.code,{children:"table.merge"}),". (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2263",children:"#2263"}),"  Adds a new ",(0,t.jsx)(r.code,{children:"os.targetarch()"})," function. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2264",children:"#2264"}),"  Show error messages from broken includes (@richard-sim)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2268",children:"#2268"}),"  Re-structure common docs files into sub-folders. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2269",children:"#2269"}),"  Upgrade docs to latest Docusaurus version. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2271",children:"#2271"}),"  Add ",(0,t.jsx)(r.code,{children:"linker"})," flag and ",(0,t.jsx)(r.code,{children:"LLD"})," support. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2272",children:"#2272"}),"  Fixed issue with include failing to find embedded files (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2274",children:"#2274"}),"  Port Premake to Cosmopolitan Libc (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2277",children:"#2277"}),"  Add C++23 cppdialect (@jlaumon)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2278",children:"#2278"}),"  Prevent empty arrays as expected values for test.contains and test.excludes (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2279",children:"#2279"}),"  Added ci job to simplify required checks in PRs (@LORgames)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2280",children:"#2280"}),"  Upgrade ",(0,t.jsx)(r.code,{children:"libcurl"})," to latest. (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2281",children:"#2281"}),"  Fix vstudio/MSC not supporting the C++23 flag yet (@jlaumon)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2283",children:"#2283"}),"  Miscelanneous cleanups (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2284",children:"#2284"}),"  Fix ",(0,t.jsx)(r.code,{children:"os.host"})," for Cosmopolitan build (@tritao)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2287",children:"#2287"}),"  [doc] Write doc for ",(0,t.jsx)(r.code,{children:"unsignedchar"})," (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2294",children:"#2294"}),"  Add projects web and github (@Jarod42)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2299",children:"#2299"}),'  Remove generated "website/node_modules"\'s files from project (@Jarod42)']}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2301",children:"#2301"}),"  Fix spelling insice -> inside (@jonesy-b-dev)"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/pull/2316",children:"#2316"}),"  Update modules.md (@day-garwood)"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Additional gratitude and good wishes to everyone who helped review pull requests and triage issues this cycle. Projects like this don't work without you."}),"\n",(0,t.jsxs)(r.div,{style:{},"'center'}}":"",children:["\n\t",(0,t.jsxs)(r.a,{href:"https://opencollective.com/_fivem",children:["\n\t\t",(0,t.jsx)(r.img,{src:"https://images.opencollective.com/_fivem/2f78b5f/logo/128.png"}),"\n\t"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["A big shout out to our premier sponsor ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://opencollective.com/_fivem",children:"Cfx.re"})})," and all ",(0,t.jsx)(r.a,{href:"https://opencollective.com/premake#section-contributors",children:"our monthly backers"}),"\u2014be sure to check out their work and support them back if you can!"]}),"\n",(0,t.jsxs)(r.p,{children:["We welcome questions, suggestions, and concerns. Message or DM us at ",(0,t.jsx)(r.a,{href:"https://twitter.com/premakeapp",children:"@premakeapp"})," or ",(0,t.jsx)(r.a,{href:"https://github.com/premake/premake-core/discussions",children:"open a discussion on GitHub"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>a,x:()=>o});var t=i(96540);const s={},l=t.createContext(s);function a(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);