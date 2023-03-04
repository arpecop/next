exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 132:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 130))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 1856:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/styling/StylingNav.tsx");


/***/ }),

/***/ 7124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1157);
/* harmony import */ var _StylingNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1856);
/* harmony import */ var _StylingNav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StylingNav__WEBPACK_IMPORTED_MODULE_2__);



function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-9",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_StylingNav__WEBPACK_IMPORTED_MODULE_2___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Template)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var _ui_Boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3483);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1157);



function Template({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Boundary__WEBPACK_IMPORTED_MODULE_1__/* .Boundary */ .E, {
        children: children
    });
}


/***/ }),

/***/ 130:
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



const items = [
    {
        name: "Home",
        slug: ""
    },
    {
        name: "Global CSS",
        slug: "global-css"
    },
    {
        name: "CSS Modules",
        slug: "css-modules"
    },
    {
        name: "Styled Components",
        slug: "styled-components"
    },
    {
        name: "Styled JSX",
        slug: "styled-jsx"
    },
    {
        name: "Tailwind CSS",
        slug: "tailwind"
    }
];
const StylingNav = ()=>{
    const [selectedLayoutSegments = ""] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSelectedLayoutSegments)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center space-x-4",
        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                href: `/styling${item.slug ? `/${item.slug}` : ""}`,
                isActive: item.slug === selectedLayoutSegments,
                children: item.name
            }, item.slug))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StylingNav);


/***/ }),

/***/ 1834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ TabNavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const TabNavItem = ({ children , href , isActive  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg px-3 py-1 text-sm font-medium", {
            "bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white": !isActive,
            "bg-vercel-blue text-white": isActive
        }),
        children: children
    });
};


/***/ })

};
;