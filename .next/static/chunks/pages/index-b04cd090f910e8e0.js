(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8065)}])},218:function(e,t,r){"use strict";var s=r(5893),a=r(1664),n=r.n(a);let c=e=>{let{cats:t,limit:r,prefix:a,formatlength:c}=e,l=t.slice(0,r||t.length),o=e=>e>3e3?"".concat(Math.floor(e/1e3),"k"):e;return(0,s.jsx)("div",{className:"my-3 flex w-full flex-wrap gap-3",children:l.map(e=>(0,s.jsx)(n(),{className:"w-full grow sm:w-1/2 md:w-1/3   lg:w-1/4 xl:w-1/5",href:e.althref?"/".concat(a,"/").concat(e.althref):"/".concat(a,"/").concat(e.slug,"/"),passHref:!0,children:(0,s.jsxs)("div",{className:"flex h-full items-center rounded border border-gray-800 bg-gray-800   p-4 dark:border-gray-500 dark:bg-slate-100",children:[(0,s.jsx)("div",{className:"flex-1  justify-center align-middle text-white dark:text-gray-800",children:c?(0,s.jsx)("span",{className:"text-shadow text-xs",children:e.cat}):(0,s.jsx)("span",{className:"text-shadow font-black",children:e.cat})}),0!==e.count&&(0,s.jsx)("div",{className:"btn1-count",children:o(e.count)}),void 0!==e.altcount&&(0,s.jsx)("div",{className:"flex-none  rounded bg-green-700 px-2 text-2xl font-extralight",children:e.altcount})]})},e.cat))})};t.Z=c},8065:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f},default:function(){return h}});var s=r(5893),a=r(1664),n=r.n(a),c=r(1163),l=r(8641),o=r(5250),i=r(218),d=r(7294);let m=e=>{let{limit:t,className:r}=e,[a,n]=(0,d.useState)([]),[c,l]=(0,d.useState)(null),o=(0,d.useRef)(null);async function i(e){let t=await fetch("https://api.codetabs.com/v1/proxy?quest=https://pr0gramm.com/api/items/get?flags=1&promoted=1".concat(e?"&older=".concat(e):"")),r=await t.json();e?n(e=>e.concat(r.items)):n(r.items)}return((0,d.useEffect)(()=>{let e=()=>{o.current&&(o.current.checked?document.body.style.overflow="hidden":(l(null),document.body.style.overflow="auto"))};return o.current&&o.current.addEventListener("change",e),()=>{o.current&&o.current.removeEventListener("change",e)}},[o]),(0,d.useEffect)(()=>{i()},[]),a)?(0,s.jsxs)("div",{className:r,children:[a.slice(0,t||a.length).map(e=>{let{thumb:t,id:r,image:a}=e;return(0,s.jsx)("label",{className:"hover:animate-pulse snap-center",htmlFor:"my-modal",onClick:()=>l("".concat(a)),children:(0,s.jsx)("div",{className:"rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 p-1 dark:from-white dark:to-slate-400 relative m-1 cursor-pointer relative",style:{minHeight:128},children:(0,s.jsx)("picture",{children:(0,s.jsx)("img",{className:"rounded-lg w-full h-full",alt:"pr0gramm",loading:"lazy",style:{minWidth:128},src:"https://thumb.pr0gramm.com/".concat(t)})})})},r)}),(0,s.jsx)("input",{type:"checkbox",id:"my-modal",className:"invisible",ref:o}),c&&(0,s.jsx)("label",{htmlFor:"my-modal",className:"cursor-pointer fixed top-0 left-0 w-screen h-screen  z-60 flex justify-center items-center backdrop-blur-md bg-black/30",children:(0,s.jsx)("div",{className:"w-3/4  flex items-center justify-center",children:(null==c?void 0:c.includes("mp4"))?(0,s.jsx)("video",{controls:!0,autoPlay:!0,className:"rounded-md   z-50 aspect-auto max-h-screen rounded-md w-auto border border-4  border-black",children:(0,s.jsx)("source",{src:"https://vid.pr0gramm.com/"+c})}):(0,s.jsx)("picture",{className:"z-50",children:(0,s.jsx)("img",{src:"https://img.pr0gramm.com/"+c,alt:"",className:"aspect-auto max-h-screen rounded-md border border-4  border-black"})})})})]}):(0,s.jsx)("div",{children:"Loading..."})},u=e=>{let{text:t,type:r}=e;return(0,s.jsx)(n(),{href:{pathname:"/",query:{type:r}},passHref:!0,className:"btn dark:btn-ghost border-2 border",children:t})},x=e=>{let{cats:t}=e,r=(0,c.useRouter)(),{query:{type:a}}=r;return(0,s.jsxs)(l.Z,{meta:(0,s.jsx)(o.Z,{title:"Вицове и забавни котки и мемета",description:"Вицове и забавни котки и мемета"}),children:["Jokes"===a&&(0,s.jsx)(i.Z,{cats:t,prefix:"cat"}),"Program"===a&&(0,s.jsx)(m,{className:"container flex flex-wrap items-center justify-center sm:mx-auto"}),!a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{cats:t,limit:9,prefix:"cat"}),(0,s.jsx)("div",{className:"flex flex-wrap justify-end mb-2",children:(0,s.jsx)(u,{text:"още категории",type:"Jokes"})}),(0,s.jsx)(m,{limit:12,className:"snap-x flex overflow-auto py-2 snap-proximity programmindex"}),(0,s.jsx)("div",{className:"flex flex-wrap justify-end my-2",children:(0,s.jsx)(u,{text:"Oще Memeта",type:"Program"})})]})]})};var f=!0,h=x}},function(e){e.O(0,[340,714,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);