"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Nav = ({ cats , limit , prefix , formatlength  })=>{
    const newcats = cats.slice(0, limit || cats.length);
    const formatcount = (count)=>{
        if (count > 3000) {
            return `${Math.floor(count / 1000)}k`;
        }
        return count;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-3 flex w-full flex-wrap gap-3",
        children: newcats.map((d)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "w-full grow sm:w-1/2 md:w-1/3   lg:w-1/4 xl:w-1/5",
                href: d.althref ? `/${prefix}/${d.althref}` : `/${prefix}/${d.slug}/`,
                passHref: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex h-full items-center rounded border border-gray-800 bg-gray-800   p-4 dark:border-gray-500 dark:bg-slate-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1  justify-center align-middle text-white dark:text-gray-800",
                            children: formatlength ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-shadow text-xs",
                                children: d.cat
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-shadow font-black",
                                children: d.cat
                            })
                        }),
                        d.count !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "btn1-count",
                            children: formatcount(d.count)
                        }),
                        d.altcount !== undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none  rounded bg-green-700 px-2 text-2xl font-extralight",
                            children: d.altcount
                        })
                    ]
                })
            }, d.cat))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ })

};
;