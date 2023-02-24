"use strict";
(() => {
var exports = {};
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 4287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/data/client.ts
//const url = "http://d1ooh4ppc5c6x6.cloudfront.net/";
const url = "http://d1ooh4ppc5c6x6.cloudfront.net/";
const urlnocdn = "http://arpecop.click:5984/";
const serialize = (obj)=>{
    return Object.entries(obj).map(([key, val])=>`${key}=${key === "key" ? `"${val}"` : val}`).join("&");
};
async function fetcher(query) {
    const { db , id , _view , _design , params , insert , nocdn  } = query;
    const body = JSON.stringify(query);
    const isPost = body?.includes("_id") || insert;
    const buildurl = `${nocdn || params.includes("nocdn") ? urlnocdn : url}${db ? db + "/" : "db/"}${_design ? `_design/${_design}/_view/${_view}?${params}` : ""}${id || ""}`;
    const response = await fetch(buildurl, {
        method: isPost ? "POST" : "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: isPost ? body : null
    });
    const d = await response.json();
    return d;
}
async function get(id) {
    const d = await fetcher({
        id,
        nocdn: "yes"
    });
    d.id = d._id;
    return Promise.resolve(d);
}
async function view(id, params) {
    const split = id.split("/");
    const d = await fetcher({
        _design: split[0],
        _view: split[1],
        params: serialize(params)
    });
    const rows = d.rows.map((x)=>{
        const val = typeof x.value === "string" ? {
            value: x.value
        } : {
            ...x.value
        };
        return {
            ...val,
            id: x.id,
            key: x.key,
            value: x.value
        };
    });
    if (rows.length === 1) {
        return Promise.resolve(rows[0]);
    }
    return Promise.resolve({
        ...d,
        rows
    });
}
async function insert(obj) {
    const ins = await fetcher(obj);
    return Promise.resolve(ins);
}
const db = {
    view,
    get,
    insert
};
/* harmony default export */ const client = (db);

;// CONCATENATED MODULE: ./src/pages/api/data/db/[id].ts

async function handler(req, res) {
    const { id  } = req.query;
    const data = await client.get(id);
    res.json(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4287));
module.exports = __webpack_exports__;

})();