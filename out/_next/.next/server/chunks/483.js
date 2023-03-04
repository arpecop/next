"use strict";
exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 2244:
/***/ ((module) => {


function e(r) {
    var o, t, f = "";
    if ("string" == typeof r || "number" == typeof r) f += r;
    else if ("object" == typeof r) if (Array.isArray(r)) for(o = 0; o < r.length; o++)r[o] && (t = e(r[o])) && (f && (f += " "), f += t);
    else for(o in r)r[o] && (f && (f += " "), f += o);
    return f;
}
function r() {
    for(var r, o, t = 0, f = ""; t < arguments.length;)(r = arguments[t++]) && (o = e(r)) && (f && (f += " "), f += o);
    return f;
}
module.exports = r, module.exports.clsx = r;


/***/ }),

/***/ 3483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Boundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2244);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1157);



const Label = ({ children , animateRerendering , color  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-full px-1.5 shadow-[0_0_1px_4px_black]", {
            "bg-zinc-800 text-zinc-500": color === "default",
            "bg-vercel-pink text-pink-100": color === "pink",
            "bg-vercel-blue text-blue-100": color === "blue",
            "bg-vercel-cyan text-cyan-100": color === "cyan",
            "bg-vercel-violet text-violet-100": color === "violet",
            "bg-vercel-orange text-orange-100": color === "orange",
            "animate-[highlight_1s_ease-in-out_1]": animateRerendering
        }),
        children: children
    });
};
const Boundary = ({ children , labels =[
    "children"
] , size ="default" , color ="default" , animateRerendering =true  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative rounded-xl border border-dashed", {
            "p-5": size === "small",
            "p-9": size === "default",
            "border-zinc-700": color === "default",
            "border-vercel-pink": color === "pink",
            "border-vercel-blue": color === "blue",
            "border-vercel-cyan": color === "cyan",
            "border-vercel-violet": color === "violet",
            "border-vercel-orange": color === "orange",
            "animate-[rerender_1s_ease-in-out_1] text-vercel-pink": animateRerendering
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("absolute -top-2.5 flex space-x-1 text-[9px] uppercase leading-4 tracking-widest", {
                    "left-5": size === "small",
                    "left-9": size === "default"
                }),
                children: labels.map((label)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                        color: color,
                        animateRerendering: animateRerendering,
                        children: label
                    }, label);
                })
            }),
            children
        ]
    });
};


/***/ })

};
;