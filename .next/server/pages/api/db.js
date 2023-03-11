"use strict";
(() => {
var exports = {};
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "POST") {
        // Read the "key" and "value" fields from the request body
        const { key , value  } = req.body;
        // Validate the input
        if (!key || !value) {
            res.status(400).send("Missing required fields");
            return;
        }
        // Write the value to a file in the /tmp directory with the key as the file name
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(`/tmp/${key}.json`, JSON.stringify(value));
        res.status(200).send("Success");
    } else if (req.method === "GET") {
        // Read the "key" field from the query string
        const { key  } = req.query;
        // Validate the input
        if (!key) {
            res.status(400).json({
                e: "Missing required fields"
            });
            return;
        }
        // Read the value from the file in the /tmp directory with the key as the file name
        const value = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(`/tmp/${key}.json`).toString();
        // Try to parse the value as JSON
        let parsedValue;
        try {
            parsedValue = JSON.parse(value);
        } catch (error) {
            parsedValue = value;
        }
        res.status(200).send(parsedValue);
    } else {
        res.status(405).json({
            e: "Method Not Allowed"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3590));
module.exports = __webpack_exports__;

})();