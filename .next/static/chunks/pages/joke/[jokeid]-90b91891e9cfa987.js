(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{3190:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/joke/[jokeid]",function(){return a(9991)}])},8499:function(e,t,a){"use strict";var s=a(5893),l=a(1163),n=a(7294);let i=e=>{let{id:t,noWrapper:a,text:i,disabled:r,onbeforeSubmit:c}=e,[o,d]=(0,n.useState)(!1),[x,h]=(0,n.useState)(!1),m=(0,l.useRouter)(),u=(null==t?void 0:t.includes("https"))?t:"https://kloun.lol/joke/".concat(t),p=async()=>{d(!0),h(!0),"function"==typeof c&&(u=await c()),await fetch("/api/refetch/?url=".concat(u)),d(!1),h(!0),m.push("https://facebook.com/dialog/share?\n			app_id=456304742501728\n			&display=popup\n			&href=".concat(encodeURIComponent(u),"\n			&redirect_uri=").concat(encodeURIComponent(u)))};return(0,s.jsx)("button",{onClick:p,className:"text-white  transition duration-300 max-w-xs w-full rounded-3xl uppercase flex text-sm font-bold p-3  relative  ".concat(a&&" rounded-l-none rounded-t-none bg-transparent"," ").concat(x&&"btn-disabled grayscale"," ").concat(r&&"btn-disabled grayscale"),style:{backgroundColor:a?"transparent":"#1877F3"},children:a?(0,s.jsx)("svg",{className:"h-6 w-6 fill-white dark:fill-blue-600 ",role:"img",xmlns:"http://w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"absolute h-full left-3 top-0 flex justify-center items-center",children:o?(0,s.jsxs)("svg",{className:"animate-spin h-6 w-6 fill-white drop-shadow-md",xmlns:"http://w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):(0,s.jsx)("svg",{className:"h-6 w-6 fill-white drop-shadow-md",role:"img",xmlns:"http://w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),(0,s.jsx)("div",{className:"w-full ml-6 flex justify-center items-center pt-0.5 drop-shadow-md",children:i||"Сподели във Facebook"})]})})};t.Z=i},9424:function(e,t,a){"use strict";a.d(t,{H:function(){return r}});var s=a(5893),l=a(2947);let n=()=>(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"inline-block",width:300,height:130},"data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"6617253971"}),i=e=>{let t=0;return(0,l.yt)(e).split("\n").map((e,a)=>{let s=!!(e.startsWith("-")||e.startsWith(" -")||e.startsWith("–")||e.startsWith("  -"))&&((t+=1)%2==0?"even":"odd");return{key:a,line:"odd"===s||"even"===s?e.replace("-","").replace("–",""):e,...s&&{oddness:s}}})},r=e=>{let{joke:t,short:a}=e;if(a){let e=t.slice(0,150),a=t.length<=150,n=(0,l.yt)(a?t.replace(/\.../g,""):"".concat(e," ...")).split("\n").slice(0,3);return(0,s.jsx)(s.Fragment,{children:n.map(e=>(0,s.jsx)("p",{children:e.endsWith("...")?(0,s.jsxs)(s.Fragment,{children:[e.replace(/\.../g,"")," ",(0,s.jsx)("span",{className:"absolute h-6   w-8 text-4xl",children:(0,s.jsx)("span",{className:"absolute ml-1 leading-4 text-purple-600",children:"..."})})]}):(0,s.jsx)(s.Fragment,{children:e})},e))})}let r=i(t);return(0,s.jsx)(s.Fragment,{children:r.map(e=>{let{oddness:t,line:a,key:l}=e;return t?(0,s.jsx)("div",{className:"flex flex-wrap pb-4 ".concat("even"===t?"flex-row-reverse":""),children:(0,s.jsxs)("div",{className:"relative whitespace-pre-wrap rounded-lg p-2 font-sans font-medium shadow-2xl ".concat("even"===t?"bg-violet-900 text-right dark:bg-slate-200":"bg-indigo-700 text-left dark:bg-slate-400"),children:["odd"===t?(0,s.jsx)("div",{className:"absolute -left-4 top-3 inline-block w-4 overflow-hidden",children:(0,s.jsx)("div",{className:"h-16  origin-top-right -rotate-45 bg-indigo-700 dark:bg-slate-400"})}):(0,s.jsx)("div",{className:"absolute -right-4 top-3 inline-block w-4 overflow-hidden",children:(0,s.jsx)("div",{className:" h-16  origin-top-left rotate-45 bg-violet-900 dark:bg-slate-200"})}),a," ",3===l&&(0,s.jsx)(n,{})]})},l):(0,s.jsx)("div",{className:"block pb-4 text-lg",children:a},l)})})}},6623:function(e,t,a){"use strict";var s=a(5893),l=a(7294),n=a(9424),i=a(8499);let r=e=>{let{item:t,showcats:a,short:r,hideReadMore:c}=e,{joke:o,cat:d,id:x}=t,h=o.length<=150,[m,u]=(0,l.useState)(!1),[p,j]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=async()=>{let e=await fetch("/api/data/db/"+x),t=await e.json();j(t.title)};m&&e()},[m]),(0,s.jsxs)("article",{className:"joke relative",children:[a&&"Разни"!==t.cat&&(0,s.jsx)("a",{className:"joketop text-shadow",href:"/cat/".concat(d.replace(/ /g,"%20"),"/"),children:(0,s.jsx)("h2",{children:d.replace("JOK","")})}),m&&(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg z-20 overflow-auto",children:(0,s.jsxs)("div",{className:"max-w-md",children:[(0,s.jsx)(n.H,{joke:p}),(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsxs)("div",{className:"btn-group",children:[(0,s.jsx)(i.Z,{id:"https://kloun.lol/joke/".concat(t.id),text:"Сподели"}),(0,s.jsxs)("button",{className:"btn",onClick:()=>u(!1),children:["Затвори",(0,s.jsx)("svg",{xmlns:"http://w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"ml-2 h-6 w-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]})]})}),(0,s.jsxs)("a",{href:"/joke/".concat(t.id),className:"btn m-0 mt-2",children:[(0,s.jsx)("svg",{xmlns:"http://w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"mr-2 h-6 w-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"})}),"Url"]})]})}),(0,s.jsx)("div",{className:"jokewrap",children:(0,s.jsx)("div",{className:"py-5 font-black text-md",children:(0,s.jsx)(n.H,{joke:o,short:r})})}),!c&&(h?(0,s.jsx)("div",{className:"absolute right-2 -mt-12",children:(0,s.jsx)(i.Z,{id:"https://kloun.lol/joke/".concat(t.id),noWrapper:!0})}):(0,s.jsx)("a",{className:"btn absolute right-2 -mt-12 flex cursor-pointer border-gray-800 bg-black shadow-lg dark:border-gray-500 dark:bg-white rounded-l-none rounded-t-none",href:"/joke/".concat(t.id),onClick:e=>{e.preventDefault(),u(!0)},children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"})})}))]})};t.Z=r},218:function(e,t,a){"use strict";var s=a(5893),l=a(1664),n=a.n(l);let i=e=>{let{cats:t,limit:a,prefix:l,formatlength:i}=e,r=t.slice(0,a||t.length),c=e=>e>3e3?"".concat(Math.floor(e/1e3),"k"):e;return(0,s.jsx)("div",{className:"my-3 flex w-full flex-wrap gap-3",children:r.map(e=>(0,s.jsx)(n(),{className:"w-full grow sm:w-1/2 md:w-1/3   lg:w-1/4 xl:w-1/5",href:e.althref?"/".concat(l,"/").concat(e.althref):"/".concat(l,"/").concat(e.slug,"/"),passHref:!0,children:(0,s.jsxs)("div",{className:"flex h-full items-center rounded border border-gray-800 bg-gray-800   p-4 dark:border-gray-500 dark:bg-slate-100",children:[(0,s.jsx)("div",{className:"flex-1  justify-center align-middle text-white dark:text-gray-800",children:i?(0,s.jsx)("span",{className:"text-shadow text-xs",children:e.cat}):(0,s.jsx)("span",{className:"text-shadow font-black",children:e.cat})}),0!==e.count&&(0,s.jsx)("div",{className:"btn1-count",children:c(e.count)}),void 0!==e.altcount&&(0,s.jsx)("div",{className:"flex-none  rounded bg-green-700 px-2 text-2xl font-extralight",children:e.altcount})]})},e.cat))})};t.Z=i},9991:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return x},runtime:function(){return h}});var s=a(5893),l=a(9424),n=a(6623),i=a(8641),r=a(5250),c=a(218),o=a(8499);let d=e=>{var t,a,d,x,h;return(0,s.jsxs)(i.Z,{hideFooter:!0,meta:(0,s.jsx)(r.Z,{title:(null===(t=e.joke)||void 0===t?void 0:t.joke)||"",description:(null===(a=e.joke)||void 0===a?void 0:a.joke)||"",image:"https://kloun.lol/api/joke/og/?idx=".concat(null===(d=e.joke)||void 0===d?void 0:d.id),removeProfanity:!0}),children:[(0,s.jsxs)("div",{className:"my-10 flex w-full flex-col text-center",children:[(0,s.jsx)("article",{className:"mx-auto mb-6 px-10 text-xl leading-relaxed xs:px-2 sm:px-4 lg:w-2/3",children:(0,s.jsx)(l.H,{joke:null===(x=e.joke)||void 0===x?void 0:x.joke})}),(0,s.jsx)("div",{className:" flex justify-end items-center",children:(0,s.jsx)(o.Z,{id:"https://kloun.lol/joke/".concat(null===(h=e.joke)||void 0===h?void 0:h.id)})})]}),(0,s.jsxs)("div",{className:"-m-2 flex flex-wrap",children:[(0,s.jsx)("article",{className:"joke",children:(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"1374619867"})}),e.items[0].map(e=>(0,s.jsx)(n.Z,{item:e,showcats:!0,short:!0},e.id))]}),(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"1374619867"}),(0,s.jsx)(c.Z,{cats:e.cats[1],prefix:"cat"}),(0,s.jsxs)("div",{className:"-m-2 flex flex-wrap",children:[(0,s.jsx)("article",{className:"joke",children:(0,s.jsx)("div",{className:"jokewrap",children:(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"1374619867"})})}),e.items[1].map(e=>(0,s.jsx)(n.Z,{item:e,showcats:!0,short:!0},e.id))]}),(0,s.jsx)(c.Z,{cats:e.cats[2],prefix:"cat"}),(0,s.jsxs)("div",{className:"-m-2 flex flex-wrap",children:[(0,s.jsx)("article",{className:"joke",children:(0,s.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"1374619867"})}),e.items[2].map(e=>(0,s.jsx)(n.Z,{item:e,showcats:!0,short:!0},e.id))]})]})};var x=!0;let h="experimental-edge";t.default=d}},function(e){e.O(0,[340,714,774,888,179],function(){return e(e.s=3190)}),_N_E=e.O()}]);