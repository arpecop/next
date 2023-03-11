"use strict";
exports.id = 27;
exports.ids = [27];
exports.modules = {

/***/ 6027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//const url = "http://d1ooh4ppc5c6x6.cloudfront.net/";
//const url = "http://d1ooh4ppc5c6x6.cloudfront.net/";
const url = "http://db.kloun.lol/";
const urlnocdn = "http://db.kloun.lol/";
const serialize = (obj)=>{
    return Object.entries(obj).map(([key, val])=>`${key}=${key === "key" ? `"${val}"` : val}`).join("&");
};
async function fetcher(query) {
    const { db , id , _view , _design , params , insert , nocdn  } = query;
    const body = JSON.stringify(query);
    const isPost = body?.includes("_id") || insert;
    const buildurl = `${nocdn || params.includes("nocdn") ? urlnocdn : url}${db ? db + "/" : "db/"}${_design ? `_design/${_design}/_view/${_view}?${params}` : ""}${id || ""}`;
    //console.log(buildurl)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ })

};
;