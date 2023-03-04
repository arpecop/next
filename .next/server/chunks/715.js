exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 78:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1467));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7666))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 7585:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/loading/CategoryNav.tsx");


/***/ }),

/***/ 131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1157);
/* harmony import */ var _lib_getCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8004);
/* harmony import */ var _ui_ClickCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6262);
/* harmony import */ var _ui_ClickCounter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ui_ClickCounter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7585);
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CategoryNav__WEBPACK_IMPORTED_MODULE_3__);





function Layout({ children  }) {
    const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)((0,_lib_getCategories__WEBPACK_IMPORTED_MODULE_4__/* .fetchCategories */ .pE)());
    if (!categories) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-9",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_CategoryNav__WEBPACK_IMPORTED_MODULE_3___default()), {
                        categories: categories
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ui_ClickCounter__WEBPACK_IMPORTED_MODULE_2___default()), {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: children
            })
        ]
    });
}


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var _ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8196);


function Loading() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl font-medium text-zinc-500",
                children: "Loading..."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SkeletonCard__WEBPACK_IMPORTED_MODULE_1__/* .SkeletonCard */ .A, {
                        isLoading: true
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3676:
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

/***/ 6262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/ui/ClickCounter.tsx");


/***/ }),

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ SkeletonCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2244);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const SkeletonCard = ({ isLoading  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-2xl bg-zinc-900/80 p-4", {
            "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent": isLoading
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-14 rounded-lg bg-zinc-700"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-3 w-11/12 rounded-lg bg-zinc-700"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-3 w-8/12 rounded-lg bg-zinc-700"
                })
            ]
        })
    });


/***/ }),

/***/ 1467:
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
                href: "/loading",
                isActive: !selectedLayoutSegments,
                children: "Home"
            }),
            categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                    href: `/loading/${item.slug}`,
                    isActive: item.slug === selectedLayoutSegments,
                    children: item.name
                }, item.slug))
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