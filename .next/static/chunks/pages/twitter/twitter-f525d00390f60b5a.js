(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{6043:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/twitter/twitter",function(){return a(7610)}])},940:function(e,t,a){"use strict";var r=a(5893),s=a(1664),l=a.n(s);function n(e){let{pagesToShow:t,items:a,pageSize:r,currentPage:s}=e,l=Math.floor(t/2),n=Array.isArray(a),i=s-l,c=s+l,d=Math.ceil(n?a.length:a/r),o=Array.from({length:d},(e,t)=>t+1);i<1&&(c=(i=1)+t)>d&&(c=d),c>d&&(i=(c=d)-t)<1&&(i=1);let f=o.slice(i-1,c);return f}let i=e=>{let{items:t,pageSize:a,currentPage:s,prefix:i,noReplace:c}=e,d=n({pagesToShow:9,items:t,pageSize:a,currentPage:s}),o=n({pagesToShow:3,items:t,pageSize:a,currentPage:s});return(0,r.jsxs)("div",{className:"fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl",children:[(0,r.jsx)("div",{className:"btn-group hidden sm:flex",children:d.map(e=>(0,r.jsx)(l(),{passHref:!0,href:e===s?"#":"".concat(i).concat(1===e?i.includes("_")?1:"":e,"/"),className:e===s?"btn px-4 font-bold bg-gray-700 dark:bg-gray-500":"btn px-4 font-bold",children:e},e))}),(0,r.jsx)("div",{className:"btn-group   flex sm:hidden",children:o.map(e=>(0,r.jsx)(l(),{passHref:!1,href:e===s?"#":"".concat(i).concat(1===e?"":e,"/"),className:e===s?"btn px-4 font-bold bg-gray-700 dark:bg-gray-500":"btn px-4 font-bold",children:e},e))})]})};t.Z=i},7610:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return f}});var r=a(5893),s=a(8641),l=a(5250),n=a(940),i=a(6486),c=a(1664),d=a.n(c);let o=e=>{let{twusers:t,pagenum:a,items:c,letter:o,sections:f}=e;return(0,r.jsxs)(s.Z,{hideFooter:!0,meta:(0,r.jsx)(l.Z,{title:(0,i.shuffle)(t).slice(0,5).map(e=>e.id).join(" "),description:"Twitter DB"}),children:[(0,r.jsx)("div",{className:"flex flex-wrap justify-center items-center gap-1 mb-3",children:f.map(e=>{let{key:t}=e;return(0,r.jsx)(d(),{passHref:!0,href:"/tw/"+t+"_1",className:"bg-slate-900 p-2 font-bold text-white dark:bg-white dark:text-slate-900 rounded-md",children:t},t)})}),(0,r.jsx)("div",{className:"flex flex-row flex-wrap justify-center p-0 gap-2",children:t.map(e=>(0,r.jsx)(d(),{passHref:!0,href:"/tw/u/".concat(e.id.replace("_tw","")),className:"active flex  bg-slate-900 font-bold text-white dark:bg-white dark:text-slate-900 px-3 rounded-xl text-sm",children:e.id.replace("_tw","")},e.id))}),(0,r.jsx)("div",{className:" flex justify-center items-center",children:(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5476404733919333","data-ad-slot":"1374619867"})}),(0,r.jsx)(n.Z,{noReplace:!0,items:c,currentPage:a,pageSize:150,prefix:"/tw/".concat(o,"_")})]})};var f=!0;t.default=o}},function(e){e.O(0,[662,340,714,774,888,179],function(){return e(e.s=6043)}),_N_E=e.O()}]);