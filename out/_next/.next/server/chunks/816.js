exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 2278:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/route-groups/CategoryNav.tsx");


/***/ }),

/***/ 6262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/ui/ClickCounter.tsx");


/***/ }),

/***/ 6785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1834);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const CategoryNav = ({ categories  })=>{
    const [selectedLayoutSegments] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSelectedLayoutSegments)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                href: "/route-groups",
                isActive: !selectedLayoutSegments,
                children: "Home"
            }),
            categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                    href: `/route-groups/${item.slug}`,
                    isActive: item.slug === selectedLayoutSegments,
                    children: item.name
                }, item.slug)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                href: "/route-groups/checkout",
                children: "Checkout"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                href: "/route-groups/blog",
                isActive: "blog" === selectedLayoutSegments,
                children: "Blog"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryNav);


/***/ }),

/***/ 7666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ClickCounter = ()=>{
    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: ()=>setCount(count + 1),
        className: "rounded-lg bg-zinc-700 px-3 py-1 text-sm font-medium tabular-nums text-zinc-100 hover:bg-zinc-500 hover:text-white",
        children: [
            count,
            " Clicks"
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickCounter);


/***/ })

};
;