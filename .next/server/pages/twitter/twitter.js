"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 2168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ twitter),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Layouts/Main.tsx + 3 modules
var Main = __webpack_require__(7097);
// EXTERNAL MODULE: ./src/components/Layouts/Meta.tsx + 1 modules
var Meta = __webpack_require__(1817);
// EXTERNAL MODULE: ./src/components/Pagination.tsx
var Pagination = __webpack_require__(5485);
// EXTERNAL MODULE: ./src/data/client.ts
var client = __webpack_require__(6027);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages/twitter/twitter.tsx
/* eslint-disable no-underscore-dangle */ // import { useRouter } from 'next/router';







const Index = ({ twusers , pagenum , items , letter , sections  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        hideFooter: true,
        meta: /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
            title: (0,external_lodash_namespaceObject.shuffle)(twusers).slice(0, 5).map((item)=>item.id).join(" "),
            description: "Twitter DB"
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-wrap justify-center items-center gap-1 mb-3",
                children: sections.map(({ key  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: "/tw/" + key + "_1",
                        className: "bg-slate-900 p-2 font-bold text-white dark:bg-white dark:text-slate-900 rounded-md",
                        children: key
                    }, key))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-row flex-wrap justify-center p-0 gap-2",
                children: twusers.map((user)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        passHref: true,
                        href: `/tw/u/${user.id.replace("_tw", "")}`,
                        className: "active flex  bg-slate-900 font-bold text-white dark:bg-white dark:text-slate-900 px-3 rounded-xl text-sm",
                        children: user.id.replace("_tw", "")
                    }, user.id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ins", {
                    className: "adsbygoogle w-full",
                    style: {
                        dislay: "block",
                        minWidth: 250
                    },
                    "data-ad-format": "fluid",
                    "data-ad-layout-key": "-hh-7+2h-1m-4u",
                    "data-ad-client": "ca-pub-5476404733919333",
                    "data-ad-slot": "6719003089"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                items: items,
                currentPage: pagenum,
                pageSize: 150,
                prefix: `/tw/${letter}_`
            })
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const p = query.page;
    const pagenum = p ? Number(query.page.split("_")[1]) : 1 || 0;
    const letter = p ? p.split("_")[0] : "a" || 0;
    const data = await client/* default.view */.Z.view("twitter/byletter", {
        limit: 150,
        reduce: false,
        update: "lazy",
        key: letter,
        skip: pagenum * 150 - 150
    });
    const agregate = await client/* default.view */.Z.view("twitter/byletter", {
        key: letter,
        reduce: true,
        update: "lazy",
        cache: "ok"
    });
    return {
        props: {
            twusers: data.rows,
            items: agregate.value,
            letter,
            pagenum,
            sections
        }
    };
};
const sections = [
    {
        key: "a",
        value: 87263
    },
    {
        key: "b",
        value: 63283
    },
    {
        key: "c",
        value: 78089
    },
    {
        key: "d",
        value: 64504
    },
    {
        key: "e",
        value: 36381
    },
    {
        key: "f",
        value: 35884
    },
    {
        key: "g",
        value: 40043
    },
    {
        key: "h",
        value: 44788
    },
    {
        key: "i",
        value: 36530
    },
    {
        key: "j",
        value: 54206
    },
    {
        key: "k",
        value: 58601
    },
    {
        key: "l",
        value: 49968
    },
    {
        key: "m",
        value: 102589
    },
    {
        key: "n",
        value: 50468
    },
    {
        key: "o",
        value: 27438
    },
    {
        key: "p",
        value: 52241
    },
    {
        key: "q",
        value: 4738
    },
    {
        key: "r",
        value: 53878
    },
    {
        key: "s",
        value: 112918
    },
    {
        key: "t",
        value: 79638
    },
    {
        key: "u",
        value: 16650
    },
    {
        key: "v",
        value: 16875
    },
    {
        key: "w",
        value: 26262
    },
    {
        key: "x",
        value: 6392
    },
    {
        key: "y",
        value: 21792
    },
    {
        key: "z",
        value: 10569
    }
];
/* harmony default export */ const twitter = (Index);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,835,725,27,485], () => (__webpack_exec__(2168)));
module.exports = __webpack_exports__;

})();