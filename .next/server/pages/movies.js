"use strict";
(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ movies),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Layouts/Main.tsx + 3 modules
var Main = __webpack_require__(7097);
// EXTERNAL MODULE: ./src/components/Layouts/Meta.tsx + 1 modules
var Meta = __webpack_require__(1817);
// EXTERNAL MODULE: ./src/pages/api/graphql.ts
var graphql = __webpack_require__(3924);
;// CONCATENATED MODULE: ./src/components/NewPagination.tsx



const prefix = "v2";
function numToString(num) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = "";
    while(num > 0){
        str = alphabet[num % 26] + str;
        num = Math.floor(num / 26);
    }
    return str;
}
async function refreshToken(cat, pagenum, nextToken) {
    if (!nextToken) {
        return "ok";
    }
    (0,graphql/* doMutation */.MP)(graphql/* gql */.Ps`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: {
            joke: $joke
            type: $id
            cat: "pagination"
            nid: $nid
            price: 0
          }
        ) {
          id
        }
      }
    `, {
        joke: nextToken,
        id: `${prefix}${cat}${pagenum + 1}`,
        nid: numToString(new Date(2222, 0, 1).getTime() - Date.now())
    });
    return "notok";
}
async function getPaging(slug, page) {
    const check = await (0,graphql/* doQuery */.Rf)(graphql/* gql */.Ps`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
          }
        }
      }
    `, {
        id: `${prefix}${slug}${page}`
    });
    return check.items?.[0]?.joke;
}
function NewPagination({ pagenum , cat , nextToken  }) {
    const prev = pagenum - 1 === 1 ? "" : pagenum - 1;
    const lengths = [
        "",
        "text-lg pt-2 ",
        "text-md pt-2 ",
        "pt-2  text-xs",
        "pt-2  text-xs rotate-90"
    ];
    const className = "btn-outline btn   bg-black  dark:border-black  dark:bg-white dark:text-black";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "btn-group",
            children: [
                pagenum !== 1 && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    passHref: true,
                    href: `${cat}${prev}`,
                    className: className,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-8 h-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: className,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-10 h-10 absolute",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: lengths[pagenum.toString().length],
                            children: [
                                " ",
                                pagenum
                            ]
                        })
                    ]
                }),
                nextToken && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    passHref: true,
                    className: className,
                    href: `${cat}${pagenum + 1}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        xmlns: "http://w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-8 h-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/movies/index.tsx
/* eslint-disable no-underscore-dangle */ // import { useRouter } from 'next/router';






const Index = ({ movies , pagenum , nextToken  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        meta: /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
            title: movies[0].title,
            description: movies[0].description
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10 flex flex-wrap justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("article", {
                        className: "mb-4 w-fit sm:w-fit md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-2/5",
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
                    movies.map(({ slug , title , description , id  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            className: "mb-4 w-fit sm:w-fit md:w-3/4 lg:w-2/3 xl:w-2/4 2xl:w-2/5",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "m-2 flex h-full rounded-lg bg-base-100 dark:bg-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                            className: "relative flex w-1/2  overflow-hidden rounded-l-lg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute inset-0  h-full",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: `/movies/${id.replace("-mov", "")}`,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: `https://klounda-s3.s3.amazonaws.com/public/filmi/${id.replace("-mov", "")}.jpg`,
                                                        alt: title
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-3/4 px-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "my-4 text-2xl font-bold",
                                                    children: title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "mb-8",
                                                    children: [
                                                        id.replace("-mov", ""),
                                                        ".jpg",
                                                        description.length > 200 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                description.slice(0, 200),
                                                                " ..."
                                                            ]
                                                        }) : description
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-actions -mt-14 mr-2 justify-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/movies/m/${id}`,
                                        passHref: true,
                                        className: "btn-primary btn rounded-l-none rounded-t-none dark:btn-ghost",
                                        children: "още"
                                    })
                                })
                            ]
                        }, slug))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NewPagination, {
                pagenum: pagenum,
                cat: "/movies/p/",
                nextToken: nextToken
            })
        ]
    });
};
const MOVIES = graphql/* gql */.Ps`
  query QueryDdbsByByAppCat($start: String) {
    queryDdbsByByAppCat(type: "MoviesBG1", first: 15, after: $start) {
      items {
        id
        description
        image
        title
      }
      nextToken
    }
  }
`;
const getServerSideProps = async ({ query  })=>{
    const { page  } = query;
    const pagenum = page ? Number(page) : 1;
    const nextTokenCurrent = await getPaging("/movies/p/", pagenum);
    const data = await (0,graphql/* doQuery */.Rf)(MOVIES, {
        start: nextTokenCurrent
    });
    await refreshToken("/movies/p/", pagenum, data.nextToken);
    return {
        props: {
            movies: data.items,
            pagenum,
            nextToken: data.nextToken
        }
    };
};
/* harmony default export */ const movies = (Index);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,835,725,924], () => (__webpack_exec__(574)));
module.exports = __webpack_exports__;

})();