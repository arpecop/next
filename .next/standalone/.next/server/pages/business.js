"use strict";
(() => {
var exports = {};
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 4556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8641);
/* harmony import */ var _components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5250);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(218);
/* harmony import */ var _utils_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2947);
/* harmony import */ var _data_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9381);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(940);








const Index = ({ cats , cat , items , pagenum , slug  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layouts_Main__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        meta: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layouts_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            title: "Бизнес фирми",
            description: "Бизнес фирми"
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "block",
                        textAlign: "center"
                    },
                    "data-ad-layout": "in-article",
                    "data-ad-format": "fluid",
                    "data-ad-client": "ca-pub-5476404733919333",
                    "data-ad-slot": "1374619867"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                cats: cats,
                prefix: "business",
                limit: 50
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-5 flex w-full flex-wrap",
                children: cat?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-1 flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                            className: "border border-1 grow flex justify-center items-center p-1 rounded-md text-center text-xs font-bold uppercase dark:bg-white shadow-lg",
                            href: `/business/company/${item.id}`,
                            children: item.value.split("    ")[0]
                        })
                    }, item.id))
            }),
            pagenum && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                noReplace: true,
                items: items || 1,
                currentPage: pagenum,
                pageSize: 100,
                prefix: `/business/${slug}_`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                    className: "adsbygoogle",
                    style: {
                        display: "block",
                        textAlign: "center"
                    },
                    "data-ad-layout": "in-article",
                    "data-ad-format": "fluid",
                    "data-ad-client": "ca-pub-5476404733919333",
                    "data-ad-slot": "1374619867"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center text-xs font-thin",
                children: "Източник на информацията: Официални регистри на Националната агенция по приходите и Комисия за защита на личните данни."
            })
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const page = query.page;
    const p = page ? page.split("_") : [
        null,
        "1"
    ];
    const pagenum = p ? Number(p[1]) : 1;
    const cats = await _data_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].view */ .Z.view("company/companiesbg", {
        stale: "ok",
        keys: '["София","Варна","Пловдив","Бургас","Русе","Стара Загора","Благоевград","Плевен","Добрич","Хасково","Сливен","Велико Търново","Шумен","Пазарджик","Петрич","Перник","Ямбол","Габрово","Враца","Асеновград","Кюстендил","Кърджали","Сандански","Несебър","Казанлък","Монтана","Димитровград","Видин","Търговище","Смолян","Ловеч","Силистра","Разград","Самоков","Дупница","Гоце Делчев","Горна Оряховица","Поморие","Троян","Севлиево","Свиленград","Велинград","Карлово","Ботевград","Харманли","Свищов","Айтос","Нова Загора","Банско","Разлог","Елхово","Бяла","Лом","Карнобат","Пещера","Балчик","Панагюрище","Раковски","Свети Влас","Созопол","Първомай","Банкя","Костинброд","Радомир","Попово","Нови Искър","Павликени","Каварна","Провадия","Чирпан","Елин Пелин","Нови пазар","Мездра","Бяла Слатина","Трявна","Ихтиман","Раднево","Червен бряг","Царево","Берковица","Стамболийски","Сливница","Приморско","Момчилград","Равда","Костенец","Левски","Дулово","Дряново","Козлодуй","Средец","Исперих","Гълъбово","Девня","Аксаково","Тетевен","Омуртаг","Симитли","Луковит","Етрополе"]',
        cache: "ok",
        update: false,
        reduce: true,
        group: true
    });
    const sortedcats = cats.rows.sort((a, z)=>z.value - a.value).slice(0, 100).map((item)=>{
        return {
            slug: (0,_utils_formatter__WEBPACK_IMPORTED_MODULE_4__/* .slugify */ .lV)(item.key),
            althref: (0,_utils_formatter__WEBPACK_IMPORTED_MODULE_4__/* .slugify */ .lV)(item.key) + "_1",
            id: item.key,
            cat: item.key,
            count: item.value
        };
    });
    if (p[0]) {
        const selected = sortedcats.find((x)=>x.slug === p[0]);
        const skip = pagenum * 100 - 100;
        const cat = await _data_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].view */ .Z.view("company/companiesbg", {
            key: selected.cat,
            limit: 100,
            skip,
            update: false,
            reduce: false
        });
        const agregate = await _data_client__WEBPACK_IMPORTED_MODULE_5__/* ["default"].view */ .Z.view("company/companiesbg", {
            key: selected.cat,
            cache: true,
            update: false,
            stale: "ok",
            reduce: true
        });
        return {
            props: {
                cats: [],
                slug: p[0],
                pagenum,
                items: agregate.value,
                cat: cat.rows
            }
        };
    } else {
        return {
            props: {
                cats: sortedcats
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


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
var __webpack_exports__ = __webpack_require__.X(0, [210,835,714,381,940,218], () => (__webpack_exec__(4556)));
module.exports = __webpack_exports__;

})();