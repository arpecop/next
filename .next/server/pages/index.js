"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Layouts/Main.tsx + 3 modules
var Main = __webpack_require__(8641);
// EXTERNAL MODULE: ./src/components/Layouts/Meta.tsx + 1 modules
var Meta = __webpack_require__(5250);
// EXTERNAL MODULE: ./src/components/Nav.tsx
var Nav = __webpack_require__(218);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Program.tsx


const Program = ({ limit , className  })=>{
    const [items, setItems] = (0,external_react_.useState)([]);
    const [img, setImg] = (0,external_react_.useState)(null);
    const checkboxRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const handleChange = ()=>{
            if (checkboxRef.current) {
                //console.log(checkboxRef.current.checked);
                if (!checkboxRef.current.checked) {
                    setImg(null);
                    document.body.style.overflow = "auto";
                } else {
                    document.body.style.overflow = "hidden";
                }
            }
        };
        if (checkboxRef.current) {
            checkboxRef.current.addEventListener("change", handleChange);
        }
        return ()=>{
            if (checkboxRef.current) {
                checkboxRef.current.removeEventListener("change", handleChange);
            }
        };
    }, [
        checkboxRef
    ]);
    async function fetchMyAPI(older) {
        const res2 = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://pr0gramm.com/api/items/get?flags=1&promoted=1${older ? `&older=${older}` : ""}`);
        const response = await res2.json();
        if (older) {
            setItems((itemz)=>itemz.concat(response.items));
        // setItem(response.data.items[response.data.items.length - 1].promoted);
        } else {
            setItems(response.items);
        //  setItem(response.data.items[response.data.items.length - 1].promoted);
        }
    }
    (0,external_react_.useEffect)(()=>{
        // initial fetch
        fetchMyAPI();
    }, []);
    if (!items) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            items.slice(0, limit || items.length).map(({ thumb , id , image  })=>/*#__PURE__*/ jsx_runtime_.jsx("label", {
                    className: "hover:animate-pulse snap-center",
                    htmlFor: "my-modal",
                    onClick: ()=>setImg(`${image}`),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "rounded-lg bg-gradient-to-r from-purple-900 to-pink-600 p-1 dark:from-white dark:to-slate-400 relative m-1 cursor-pointer relative",
                        style: {
                            minHeight: 128
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "rounded-lg w-full h-full",
                                alt: "pr0gramm",
                                loading: "lazy",
                                style: {
                                    minWidth: 128
                                },
                                src: `https://thumb.pr0gramm.com/${thumb}`
                            })
                        })
                    })
                }, id)),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                id: "my-modal",
                className: "invisible",
                ref: checkboxRef
            }),
            img && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "my-modal",
                className: "cursor-pointer fixed top-0 left-0 w-screen h-screen  z-60 flex justify-center items-center backdrop-blur-md bg-black/30",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-3/4  flex items-center justify-center",
                    children: img?.includes("mp4") ? /*#__PURE__*/ jsx_runtime_.jsx("video", {
                        controls: true,
                        autoPlay: true,
                        className: "rounded-md   z-50 aspect-auto max-h-screen rounded-md w-auto border border-4  border-black",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                            src: "https://vid.pr0gramm.com/" + img
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                        className: "z-50",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://img.pr0gramm.com/" + img,
                            alt: "",
                            className: "aspect-auto max-h-screen rounded-md border border-4  border-black"
                        })
                    })
                })
            })
        ]
    });
};


// EXTERNAL MODULE: ./src/utils/formatter.ts + 3 modules
var formatter = __webpack_require__(2947);
// EXTERNAL MODULE: ./src/data/client.ts
var client = __webpack_require__(9381);
;// CONCATENATED MODULE: ./src/pages/index.tsx









const MoreButton = ({ text , type  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: {
            pathname: "/",
            query: {
                type
            }
        },
        passHref: true,
        className: "btn dark:btn-ghost border-2 border",
        children: text
    });
const Index = ({ cats  })=>{
    const router = (0,router_.useRouter)();
    const { query: { type  }  } = router;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        meta: /*#__PURE__*/ jsx_runtime_.jsx(Meta/* default */.Z, {
            title: "Вицове и забавни котки и мемета",
            description: "Вицове и забавни котки и мемета"
        }),
        children: [
            type === "Jokes" && /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {
                cats: cats,
                prefix: "cat"
            }),
            type === "Program" && /*#__PURE__*/ jsx_runtime_.jsx(Program, {
                className: "container flex flex-wrap items-center justify-center sm:mx-auto"
            }),
            !type && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {
                        cats: cats,
                        limit: 9,
                        prefix: "cat"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap justify-end mb-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MoreButton, {
                            text: "още категории",
                            type: "Jokes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Program, {
                        limit: 12,
                        className: "snap-x flex overflow-auto py-2 snap-proximity programmindex"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-wrap justify-end my-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(MoreButton, {
                            text: "Oще Memeта",
                            type: "Program"
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const catsx = await client/* default.view */.Z.view("joke/cat", {
        reduce: true,
        update: "lazy",
        group: true
    });
    const cats = catsx.rows.filter((x)=>x.value > 156).map((x)=>({
            cat: x.key.replace("JOK", ""),
            slug: (0,formatter/* slugify */.lV)(x.key.replace("JOK", "")),
            count: x.value
        })).sort((a, b)=>b.count - a.count);
    return {
        props: {
            cats,
            lastupdate: new Date().toISOString()
        }
    };
}
/* harmony default export */ const pages = (Index);


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
var __webpack_exports__ = __webpack_require__.X(0, [210,835,714,381,218], () => (__webpack_exec__(8065)));
module.exports = __webpack_exports__;

})();