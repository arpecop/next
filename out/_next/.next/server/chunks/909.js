exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 9888:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7982));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2462))

/***/ }),

/***/ 2163:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7982))

/***/ }),

/***/ 1150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/context/SubCategoryNav.tsx");


/***/ }),

/***/ 4597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var _lib_getCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8004);
/* harmony import */ var _ui_Boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3483);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1157);
/* harmony import */ var _ClickCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9099);
/* harmony import */ var _ClickCounter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ClickCounter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubCategoryNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1150);
/* harmony import */ var _SubCategoryNav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SubCategoryNav__WEBPACK_IMPORTED_MODULE_4__);






function Layout({ children , params  }) {
    const category = (0,react__WEBPACK_IMPORTED_MODULE_2__.use)((0,_lib_getCategories__WEBPACK_IMPORTED_MODULE_5__/* .fetchCategoryBySlug */ .Ev)(params.categorySlug));
    if (!category) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Boundary__WEBPACK_IMPORTED_MODULE_1__/* .Boundary */ .E, {
        labels: [
            "Layout [Server Component]"
        ],
        animateRerendering: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-9",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_SubCategoryNav__WEBPACK_IMPORTED_MODULE_4___default()), {
                    category: category
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClickCounter__WEBPACK_IMPORTED_MODULE_3__.Counter, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 2462:
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



const SubCategoryNav = ({ category  })=>{
    const [selectedLayoutSegments] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSelectedLayoutSegments)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                href: `/context/${category.slug}`,
                isActive: !selectedLayoutSegments,
                children: "All"
            }),
            category.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                    href: `/context/${category.slug}/${item.slug}`,
                    isActive: item.slug === selectedLayoutSegments,
                    children: item.name
                }, item.slug))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubCategoryNav);


/***/ })

};
;