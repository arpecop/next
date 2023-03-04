(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{9791:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(s=e(t[n]))&&(r&&(r+=" "),r+=s);else for(n in t)t[n]&&(r&&(r+=" "),r+=n)}return r}(e))&&(s&&(s+=" "),s+=t);return s}},1876:function(e,t,n){Promise.resolve().then(n.bind(n,4557)),Promise.resolve().then(n.bind(n,1400))},4557:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(9268);let r=[{name:"Layouts 14",items:[{name:"Nested Layouts 14",slug:"layouts",description:"Create UI that is shared across routes"},{name:"Grouped Layouts 14",slug:"route-groups",description:"Organize routes without affecting URL paths"},{name:"Streaming with Suspense 14",slug:"streaming",description:"Streaming data fetching from the server with React Suspense"},{name:"Root Layouts",slug:"root-layouts",description:"Create top-level layouts that apply to all routes",isDisabled:!0}]},{name:"File Conventions",items:[{name:"Loading",slug:"loading",description:"Create meaningful loading UI for specific parts of an app"},{name:"Error",slug:"error-handling",description:"Create error UI for specific parts of an app"}]},{name:"Components",items:[{name:"Hooks",slug:"hooks",description:"Preview the hooks available for Client and Server Components"},{name:"Client Context",slug:"context",description:"Pass context between Client Components that cross Server/Client Component boundary"}]},{name:"Styling",items:[{name:"CSS and CSS-in-JS",slug:"styling",description:"Preview the supported styling solutions"}]}];var i=n(9791),o=n(6008),a=n(5846),l=n.n(a);function c(){let[e]=(0,o.useSelectedLayoutSegments)();return(0,s.jsx)("div",{className:"space-y-5",children:r.map(t=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500",children:(0,s.jsx)("div",{children:t.name})}),t.items.map(t=>{let n=t.slug===e;return(0,s.jsx)("div",{children:t.isDisabled?(0,s.jsx)("div",{className:"block rounded-md px-3 py-2 text-sm font-medium text-zinc-600",title:"Coming Soon",children:t.name}):(0,s.jsx)(l(),{href:"/".concat(t.slug),className:(0,i.Z)("block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100",{"text-zinc-400":!n,"text-white":n}),children:t.name})},t.slug)})]},t.name))})}},1400:function(e,t,n){"use strict";n.r(t);var s=n(9268),r=n(6006),i=n(6008);let o=()=>{let e=(0,i.usePathname)();return(0,s.jsxs)("div",{className:"flex w-full items-center space-x-2 rounded-xl border border-zinc-800 bg-black px-4 py-3 text-zinc-600",children:[(0,s.jsx)("div",{children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4",viewBox:"0 0 20 20",fill:"currentColor",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})})}),(0,s.jsxs)("div",{className:"flex space-x-1 text-sm font-medium",children:[(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"px-2 text-zinc-500",children:"acme.com"})}),e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"text-zinc-600",children:"/"}),e.split("/").slice(2).map(e=>(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)("span",{children:(0,s.jsx)("span",{className:"animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-zinc-100",children:e},e)}),(0,s.jsx)("span",{className:"text-zinc-600",children:"/"})]},e))]}):null]})]})};t.default=o},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n(6006),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var s,i={},c=null,u=null;for(s in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:a.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},9268:function(e,t,n){"use strict";e.exports=n(3177)},5846:function(e,t,n){e.exports=n(2575)},6008:function(e,t,n){e.exports=n(4855)}},function(e){e.O(0,[2575,9701,1744],function(){return e(e.s=1876)}),_N_E=e.O()}]);