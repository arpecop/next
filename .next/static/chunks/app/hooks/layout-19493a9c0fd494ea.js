(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1574],{9791:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n}},5648:function(e,t,r){Promise.resolve().then(r.bind(r,1442)),Promise.resolve().then(r.bind(r,5699)),Promise.resolve().then(r.bind(r,7533))},1442:function(e,t,r){"use strict";r.r(t);var n=r(9268),s=r(9043),o=r(6008);let i=e=>{let{categories:t}=e,[r]=(0,o.useSelectedLayoutSegments)();return(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsx)(s.f,{href:"/hooks",isActive:!r,children:"Home"}),t.map(e=>(0,n.jsx)(s.f,{href:"/hooks/".concat(e.slug,"?key=value"),isActive:e.slug===r,children:e.name},e.slug))]})};t.default=i},5699:function(e,t,r){"use strict";r.r(t);var n=r(9268),s=r(6006);let o=()=>{let[e,t]=s.useState(0);return(0,n.jsxs)("button",{onClick:()=>t(e+1),className:"rounded-lg bg-zinc-700 px-3 py-1 text-sm font-medium tabular-nums text-zinc-100 hover:bg-zinc-500 hover:text-white",children:[e," Clicks"]})};t.default=o},7533:function(e,t,r){"use strict";r.r(t);var n=r(9268);r(6006);var s=r(6008);let o=()=>{let e=(0,s.usePathname)(),t=(0,s.useSelectedLayoutSegments)(),r=(0,s.useSearchParams)();return(0,n.jsx)("div",{className:"overflow-x-auto rounded-xl py-4 px-2 text-sm text-white [color-scheme:dark]",children:(0,n.jsx)("pre",{children:JSON.stringify({usePathname:e,selectedLayoutSegments:t,useSearchParams:r,useRouter:{push:"(string) => void",softPush:"(string) => void",replace:"(string) => void",softReplace:"(string) => void",reload:"() => void",prefetch:"() => Promise<void>"}},null,2)})})};t.default=o},9043:function(e,t,r){"use strict";r.d(t,{f:function(){return u}});var n=r(9268),s=r(9791),o=r(5846),i=r.n(o);let u=e=>{let{children:t,href:r,isActive:o}=e;return(0,n.jsx)(i(),{href:r,className:(0,s.Z)("rounded-lg px-3 py-1 text-sm font-medium",{"bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white":!o,"bg-vercel-blue text-white":o}),children:t})}},3177:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:u.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},9268:function(e,t,r){"use strict";e.exports=r(3177)},5846:function(e,t,r){e.exports=r(2575)},6008:function(e,t,r){e.exports=r(4855)}},function(e){e.O(0,[2575,9701,1744],function(){return e(e.s=5648)}),_N_E=e.O()}]);