exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 8940:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6229));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4161))

/***/ }),

/***/ 779:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1797, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3643, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9846, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7834, 23))

/***/ }),

/***/ 4267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ default */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/app/GlobalNav.tsx");


/***/ }),

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1826);
/* harmony import */ var _ui_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2591);
/* harmony import */ var _ui_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1157);
/* harmony import */ var _ui_AddressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7808);
/* harmony import */ var _ui_AddressBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ui_AddressBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4267);
/* harmony import */ var _GlobalNav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_GlobalNav__WEBPACK_IMPORTED_MODULE_4__);





function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Next.js Turbopack App Directory Playground"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                className: "overflow-y-scroll bg-zinc-900",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-start-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_GlobalNav__WEBPACK_IMPORTED_MODULE_4___default()), {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "col-start-3 space-y-6",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_ui_AddressBar__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rounded-xl border border-zinc-800 bg-black p-8",
                                    children: children
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 7808:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(8262);
module.exports = createProxy("/home/runner/work/next/next/ui/AddressBar.tsx");


/***/ }),

/***/ 6229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GlobalNav)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./lib/demos.ts
const demos = [
    {
        name: "Layouts 14",
        items: [
            {
                name: "Nested Layouts 14",
                slug: "layouts",
                description: "Create UI that is shared across routes"
            },
            {
                name: "Grouped Layouts 14",
                slug: "route-groups",
                description: "Organize routes without affecting URL paths"
            },
            {
                name: "Streaming with Suspense 14",
                slug: "streaming",
                description: "Streaming data fetching from the server with React Suspense"
            },
            {
                name: "Root Layouts",
                slug: "root-layouts",
                description: "Create top-level layouts that apply to all routes",
                isDisabled: true
            }
        ]
    },
    {
        name: "File Conventions",
        items: [
            {
                name: "Loading",
                slug: "loading",
                description: "Create meaningful loading UI for specific parts of an app"
            },
            {
                name: "Error",
                slug: "error-handling",
                description: "Create error UI for specific parts of an app"
            }
        ]
    },
    {
        name: "Components",
        items: [
            {
                name: "Hooks",
                slug: "hooks",
                description: "Preview the hooks available for Client and Server Components"
            },
            {
                name: "Client Context",
                slug: "context",
                description: "Pass context between Client Components that cross Server/Client Component boundary"
            }
        ]
    },
    {
        name: "Styling",
        items: [
            {
                name: "CSS and CSS-in-JS",
                slug: "styling",
                description: "Preview the supported styling solutions"
            }
        ]
    }
];

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(4889);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/GlobalNav.tsx





function GlobalNav() {
    const [selectedLayoutSegments] = (0,navigation.useSelectedLayoutSegments)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "space-y-5",
        children: demos.map((demo)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: demo.name
                        })
                    }),
                    demo.items.map((item)=>{
                        const isActive = item.slug === selectedLayoutSegments;
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: item.isDisabled ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "block rounded-md px-3 py-2 text-sm font-medium text-zinc-600",
                                title: "Coming Soon",
                                children: item.name
                            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/${item.slug}`,
                                className: clsx_default()("block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100", {
                                    "text-zinc-400": !isActive,
                                    "text-white": isActive
                                }),
                                children: item.name
                            })
                        }, item.slug);
                    })
                ]
            }, demo.name);
        })
    });
}


/***/ }),

/***/ 4161:
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
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const AddressBar = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex w-full items-center space-x-2 rounded-xl border border-zinc-800 bg-black px-4 py-3 text-zinc-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-4",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex space-x-1 text-sm font-medium",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "px-2 text-zinc-500",
                            children: "acme.com"
                        })
                    }),
                    pathname ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-zinc-600",
                                children: "/"
                            }),
                            pathname.split("/").slice(2).map((segment)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-zinc-100",
                                                children: segment
                                            }, segment)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-zinc-600",
                                            children: "/"
                                        })
                                    ]
                                }, segment);
                            })
                        ]
                    }) : null
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressBar);


/***/ }),

/***/ 2591:
/***/ (() => {



/***/ })

};
;