exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 3783:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8059));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7666))

/***/ }),

/***/ 3691:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 636))

/***/ }),

/***/ 4649:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8418))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 4378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/error-handling/CategoryNav.tsx");


/***/ }),

/***/ 598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/error-handling/error.tsx");


/***/ }),

/***/ 6446:
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
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4378);
/* harmony import */ var _CategoryNav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CategoryNav__WEBPACK_IMPORTED_MODULE_3__);






function Layout({ children  }) {
    const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.use)((0,_lib_getCategories__WEBPACK_IMPORTED_MODULE_4__/* .fetchCategories */ .pE)());
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

/***/ 7050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var _ui_Boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3483);


function Page({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Boundary__WEBPACK_IMPORTED_MODULE_1__/* .Boundary */ .E, {
        children: children
    });
}


/***/ }),

/***/ 8935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/ui/BuggyButton.tsx");


/***/ }),

/***/ 6262:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/ui/ClickCounter.tsx");


/***/ }),

/***/ 8059:
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
                href: "/error-handling",
                isActive: !selectedLayoutSegments,
                children: "Home"
            }),
            categories.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_TabNavItem__WEBPACK_IMPORTED_MODULE_1__/* .TabNavItem */ .f, {
                    href: `/error-handling/${item.slug}`,
                    isActive: item.slug === selectedLayoutSegments,
                    children: item.name
                }, item.slug))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryNav);


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4645);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6129);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function Error({ error , reset  }) {
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
    //console.log('logging error:', error);
    }, [
        error
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Boundary__WEBPACK_IMPORTED_MODULE_1__/* .Boundary */ .E, {
        labels: [
            "Home page Error UI"
        ],
        color: "pink",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-sm text-vercel-pink",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            className: "font-bold",
                            children: "Error:"
                        }),
                        " ",
                        error?.message
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        onClick: ()=>reset(),
                        children: "Try Again"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 8418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuggyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6129);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function BuggyButton() {
    const [clicked, setClicked] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    if (clicked) {
        throw new Error("Oh no! Something went wrong.");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        kind: "error",
        onClick: ()=>{
            setClicked(true);
        },
        children: "Trigger Error"
    });
}


/***/ }),

/***/ 6129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Button({ kind ="default" , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg  px-3 py-1 text-sm font-medium", {
            "bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white": kind === "default",
            "bg-red-600 text-red-50 hover:bg-red-500 hover:text-white": kind === "error"
        }),
        ...props
    });
}


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