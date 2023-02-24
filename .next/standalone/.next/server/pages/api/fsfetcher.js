"use strict";
(() => {
var exports = {};
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 871:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fbtoken": () => (/* binding */ fbtoken)
/* harmony export */ });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);

//const encrypted = Buffer.from("").toString("hex");
const fbtoken = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from("454141476641626f57445741424142493048774773434d3368357a484933596663376d536931636a35354550383477324d643848554c564e74437a4d61347a53595255784e5745507335356f5a437352796a587857394d3352727433745a434b4f5162617241664332666274496f5a426b646c676f37306d746e68755a424c70384151383138715774304547615072727856396a743444466d5a4179527161496f456b3334413066514f6f475a425a41664c3432496e5734", "hex").toString("utf8");
async function fsfetcher(req, res) {
    const url = req.query.url;
    const res2 = await fetch(`https://graph.facebook.com/?id=${encodeURIComponent(url)}&access_token=${fbtoken}`);
    const data = await res2.json();
    res.status(200).json(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fsfetcher);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2015));
module.exports = __webpack_exports__;

})();