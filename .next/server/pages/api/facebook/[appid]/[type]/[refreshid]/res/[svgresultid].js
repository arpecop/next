"use strict";
(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 7343:
/***/ ((module) => {

module.exports = require("graphql");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5877:
/***/ ((module) => {

module.exports = require("svgo");

/***/ }),

/***/ 8720:
/***/ ((module) => {

module.exports = require("svgson");

/***/ }),

/***/ 9525:
/***/ ((module) => {

module.exports = import("satori");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rq": () => (/* binding */ getKasmet)
/* harmony export */ });
/* unused harmony exports loadImage, insertKasmet, getCookie, setCookie, useFacebookRandom */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



async function loadImage(imageUrl) {
    return new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>resolve();
        image.onerror = reject;
        image.src = imageUrl;
    });
}
const getKasmet = async (id)=>{
    const get = await (0,_pages_api_graphql__WEBPACK_IMPORTED_MODULE_1__/* .doQuery */ .Rf)(_pages_api_graphql__WEBPACK_IMPORTED_MODULE_1__/* .gql */ .Ps`
      query MyQuery($id: String!) {
        getDdb(id: $id) {
          data
        }
      }
    `, {
        id
    });
    return JSON.parse(get.data);
};
const insertKasmet = async (id, data)=>{
    const d = await doMutation(gql`
      mutation MyMutation($id: String!, $data: AWSJSON) {
        createDdb(
          input: {id: $id, subcat: $id, data: $data, nid: "A", deepness: 1}
        ) {
          id
        }
      }
    `, {
        id,
        data
    });
    return d;
};
const getCookie = (key)=>localStorage.getItem(key);
const setCookie = (key, value)=>localStorage.setItem(key, value);
function useFacebookRandom(app) {
    const cookiprefix = "v2";
    const [result, setResult] = useState(null);
    const [mod, setMod] = useState(null);
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    const throttled = useRef(throttle((newValue)=>{
        insertKasmet("test", JSON.stringify(newValue)).then((d)=>{
            setCookie("result", d.id);
        });
    }, 1500));
    useEffect(()=>throttled.current(mod), [
        mod
    ]);
    useEffect(()=>{
        const rdcoki = getCookie(app?.slug + "" + cookiprefix);
        const retrieveOld = async (data)=>{
            await loadImage(`/fbapps/${app?.slug}/back.png`);
            await loadImage(`/api/facebook/${app?.slug}/svg/${rdcoki}/res/${rdcoki}/`);
            setResult(data);
        };
        const chooseRandomJustIncase = async ()=>{
            const id = randomNumber(app?.items || 0);
            setCookie(`${app?.slug}${cookiprefix}`, id.toString());
            await loadImage(`/fbapps/${app?.slug}/back.png`);
            await loadImage(`/api/facebook/${app?.slug}/svg/${id}/res/${id}/`);
            setResult(id);
        };
        if (app && !rdcoki) {
            chooseRandomJustIncase();
        }
        if (rdcoki) {
            retrieveOld(Number(rdcoki));
        }
    }, [
        app
    ]);
    return [
        result,
        setMod
    ];
}


/***/ }),

/***/ 9118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "returnStyles": () => (/* binding */ returnStyles),
/* harmony export */   "returnStylesOg": () => (/* binding */ returnStylesOg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svgo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5877);
/* harmony import */ var svgo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svgo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var svgson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8720);
/* harmony import */ var svgson__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(svgson__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var satori__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9525);
/* harmony import */ var _components_hooks_facebookhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([satori__WEBPACK_IMPORTED_MODULE_6__]);
satori__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function collectChildren(obj) {
    if (obj.children) {
        return [
            obj,
            ...(0,lodash__WEBPACK_IMPORTED_MODULE_5__.flattenDeep)(obj.children.map(collectChildren))
        ];
    } else {
        return [
            obj
        ];
    }
}
async function replaceTextSvg(data, replacements) {
    const svg = await (0,svgson__WEBPACK_IMPORTED_MODULE_4__.parse)(data);
    const key1 = svg.children.length - 1;
    const key2 = svg.children[key1].children.length - 1;
    const lastGrandchild = svg.children[key1].children[key2];
    const rects = collectChildren(lastGrandchild).filter((x)=>x.name === "rect");
    const texts = [];
    //svg.attributes.width = "100%";
    //svg.attributes.height = "100%";
    replacements.forEach(({ lookforid , replacewith  })=>{
        lastGrandchild.children.forEach((element)=>{
            if (element.name === "text" && element.attributes.id === lookforid) {
                const wrapper = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.find)(rects, (obj)=>obj.attributes.id === lookforid);
                const fontSize = Number(element.attributes["font-size"]);
                const rectX = Number(wrapper?.attributes.x);
                const rectY = Number(wrapper?.attributes.y);
                const letterSpacing = Number(element.attributes["letter-spacing"]);
                const color = element.attributes["fill"];
                const width = Number(wrapper?.attributes.width);
                const height = Number(wrapper?.attributes.height);
                texts.push({
                    id: lookforid,
                    width,
                    height,
                    color,
                    letterSpacing,
                    rectY,
                    rectX,
                    fontSize,
                    replacewith
                });
                svg.children[key1].children[key2] = {
                    name: "text",
                    type: "element",
                    value: "",
                    attributes: element.attributes,
                    children: []
                };
            }
        });
    });
    const result = (0,svgo__WEBPACK_IMPORTED_MODULE_1__.optimize)((0,svgson__WEBPACK_IMPORTED_MODULE_4__.stringify)(svg));
    const svgopt = result.data.replace("<svg ", '<svg viewBox="' + svg.attributes.viewBox + '" ');
    return Promise.resolve({
        svg: svgopt,
        texts,
        w: Number(svg.attributes.width.replace("px", "")),
        h: Number(svg.attributes.height.replace("px", ""))
    });
}
function templateEngine(template, data) {
    const pattern = /{\s*(\w+?)\s*}/g; // {property}
    return template.replace(pattern, (_, token)=>data[token] || "");
}
function returnStyles(text) {
    return {
        display: "flex",
        position: "absolute",
        top: text.rectY,
        left: text.rectX,
        width: text.width,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        fontSize: text.fontSize,
        color: text.color,
        lineHeight: 0.94,
        padding: 0,
        margin: 0,
        height: text.height
    };
}
function returnStylesOg(text) {
    return {
        text: text.replacewith,
        id: text.id,
        style: {
            display: "flex",
            position: "absolute",
            top: Math.ceil(text.rectY),
            left: Math.ceil(text.rectX),
            width: text.width,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontSize: text.fontSize,
            color: text.color,
            lineHeight: 0.94,
            padding: 0,
            margin: 0,
            height: text.height
        }
    };
}
async function handler(req, res) {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Expires", "0");
    const rootfolder = __dirname.split(".next")[0];
    let additional;
    const { svgresultid , appid , type , refreshid  } = req.query;
    const ff = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(rootfolder, `public/images/font/Nunito-Medium.ttf`);
    const filePath = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(rootfolder, `public/fbapps/${appid}/svg.svg`);
    const res2 = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(rootfolder, `public/fbapps/${appid}/items.json`);
    const svgstring = (0,fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync)(filePath).toString();
    const items = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync)(res2).toString());
    const result = items[svgresultid];
    const params = req.query;
    if (refreshid.length > 5) {
        const checkadditional = await (0,_components_hooks_facebookhook__WEBPACK_IMPORTED_MODULE_7__/* .getKasmet */ .rq)(refreshid.replace(".png", ""));
        additional = checkadditional;
    }
    const template = JSON.parse(templateEngine(JSON.stringify(result), additional || params));
    const data = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.toPairs)({
        ...template,
        ...params,
        date: new Date().toISOString().split("T")[0]
    }).map((pair)=>({
            lookforid: pair[0],
            replacewith: pair[1]
        }));
    const rendered = await replaceTextSvg(svgstring, data);
    if (type === "svg") {
        res.setHeader("Content-Type", "image/svg+xml");
        const svgx = await (0,satori__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "flex"
            },
            children: rendered.texts.map((text)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: returnStyles(text),
                    children: text.replacewith
                }, text.id))
        }), {
            width: rendered.w,
            height: rendered.h,
            fonts: [
                {
                    name: "Nunito Medium",
                    data: (0,fs__WEBPACK_IMPORTED_MODULE_3__.readFileSync)(ff),
                    weight: 400,
                    style: "normal"
                }
            ]
        });
        res.end(svgx);
    } else {
        res.json(rendered.texts.map((item)=>returnStylesOg(item)));
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [32], () => (__webpack_exec__(9118)));
module.exports = __webpack_exports__;

})();