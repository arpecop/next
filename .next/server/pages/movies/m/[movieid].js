"use strict";
(() => {
var exports = {};
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USERS": () => (/* binding */ USERS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8641);
/* harmony import */ var _components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5250);
/* harmony import */ var _pages_api_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7299);




const Item = ({ movie  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Main__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        hideFooter: true,
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            title: movie.title,
            description: movie.description
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mt-6 flex flex-row flex-wrap justify-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-wrap overflow-hidden rounded-lg bg-indigo-700 p-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute top-0 left-0 z-20 rounded-md   bg-indigo-700 p-3  font-bold uppercase",
                            children: movie.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute bottom-0 right-0 z-20 rounded-md bg-indigo-700 p-3 font-light",
                            children: movie.year
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `https://klounda-s3.s3.amazonaws.com/public/filmi/${movie.id.replace("-mov", "")}.jpg`,
                            alt: movie.title,
                            width: 342,
                            height: 513
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "my-4 text-2xl font-bold",
                            children: movie.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "mb-8",
                            children: movie.description
                        })
                    ]
                })
            ]
        })
    });
};
const USERS = _pages_api_graphql__WEBPACK_IMPORTED_MODULE_3__/* .gql */ .Ps`
  query MyQuery2($offset: Int!) {
    movies_aggregate {
      aggregate {
        count
      }
    }
    movies(limit: 30, offset: $offset) {
      id
      slug
      title
      year
      description
    }
  }
`;
const getServerSideProps = async ({ query  })=>{
    const { movieid  } = query;
    const data = await (0,_pages_api_graphql__WEBPACK_IMPORTED_MODULE_3__/* .doQuery */ .Rf)(_pages_api_graphql__WEBPACK_IMPORTED_MODULE_3__/* .gql */ .Ps`
      query MyQuery($id: String!) {
        getDdb(id: $id) {
          id
          title
          description
          image
        }
      }
    `, {
        id: movieid
    });
    return {
        props: {
            movie: data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ 7343:
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("html-entities");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,835,714,299], () => (__webpack_exec__(799)));
module.exports = __webpack_exports__;

})();