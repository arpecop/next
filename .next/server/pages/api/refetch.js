"use strict";
(() => {
var exports = {};
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 871:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 7681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fbtoken": () => (/* binding */ fbtoken)
/* harmony export */ });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(871);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);

//const encrypted = Buffer.from("").toString("hex");
const fbtoken = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from("454141476641626f574457414241416b476f4845654e5063425a414874586331466c486e5a4245774f6f4f4f44496b4a6f514868514545784f68734f79375a4143633072415a41587249494931585a4241665a427142596d56635242344534394657626b347a48586255534a484e6c3246526b6f7151655844703750566b3664554b45346371635952386e486853455a41376465684e5079716f53485770777a3971654473424d7a586e594d5059446f65546131544c554c", "hex").toString("utf8");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const url = req.query.url;
    const apiurl = `https://graph.facebook.com/?id=${encodeURIComponent(url)}&scrape=true&access_token=${fbtoken}`;
    const res2 = await fetch(apiurl, {
        method: "POST"
    });
    const data = await res2.json();
    res.status(200).json(data);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7681));
module.exports = __webpack_exports__;

})();