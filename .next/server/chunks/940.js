"use strict";
exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function makeArray({ pagesToShow , items , pageSize , currentPage  }) {
    const middle = Math.floor(pagesToShow / 2);
    const isArr = Array.isArray(items);
    let startIndex = currentPage - middle;
    let endIndex = currentPage + middle;
    const pagesCount = Math.ceil(isArr ? items.length : items / pageSize);
    const pages = Array.from({
        length: pagesCount
    }, (_, i)=>i + 1);
    if (startIndex < 1) {
        startIndex = 1;
        endIndex = startIndex + pagesToShow;
        if (endIndex > pagesCount) {
            endIndex = pagesCount;
        }
    }
    if (endIndex > pagesCount) {
        endIndex = pagesCount;
        startIndex = endIndex - pagesToShow;
        if (startIndex < 1) {
            startIndex = 1;
        }
    }
    const pagesToRender = pages.slice(startIndex - 1, endIndex);
    return pagesToRender;
}
const Pagination = ({ items , pageSize , currentPage , prefix , noReplace  })=>{
    const pagesToRender = makeArray({
        pagesToShow: 9,
        items,
        pageSize,
        currentPage
    });
    const pagesToRenderMobile = makeArray({
        pagesToShow: 3,
        items,
        pageSize,
        currentPage
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "btn-group hidden sm:flex",
                children: pagesToRender.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        passHref: true,
                        href: page === currentPage ? "#" : `${prefix}${page === 1 ? prefix.includes("_") ? 1 : "" : page}/`,
                        className: page === currentPage ? "btn px-4 font-bold bg-gray-700 dark:bg-gray-500" : "btn px-4 font-bold",
                        children: page
                    }, page))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "btn-group   flex sm:hidden",
                children: pagesToRenderMobile.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        passHref: false,
                        href: page === currentPage ? "#" : `${prefix}${page === 1 ? "" : page}/`,
                        className: page === currentPage ? "btn px-4 font-bold bg-gray-700 dark:bg-gray-500" : "btn px-4 font-bold",
                        children: page
                    }, page))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ })

};
;