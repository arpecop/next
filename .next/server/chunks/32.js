"use strict";
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MP": () => (/* binding */ doMutation),
/* harmony export */   "Ps": () => (/* reexport safe */ graphql_tag__WEBPACK_IMPORTED_MODULE_1__.gql),
/* harmony export */   "Rf": () => (/* binding */ doQuery)
/* harmony export */ });
/* unused harmony exports default, runtime */
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7343);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


async function fetcher({ query , variables , operationName  }) {
    const response = await fetch("https://n5hlcijfibe3zacynh4p3mk4w4.appsync-api.eu-west-1.amazonaws.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "da2-lyxskmkifbcrzbjbczvujpzhwa"
        },
        body: JSON.stringify({
            query,
            variables: variables,
            operationName: operationName
        })
    });
    const d = await response.json();
    return d.data;
}
async function doQuery(query, variables) {
    const opname = query.definitions[0];
    const d = await fetcher({
        query: (0,graphql__WEBPACK_IMPORTED_MODULE_0__.print)(query),
        variables,
        operationName: opname.name.value
    });
    return variables.multi ? d : Object.values(d)[0];
}
function handler() {
    return new Response(JSON.stringify({}), {
        status: 200,
        headers: {
            "content-type": "application/json"
        }
    });
}
async function doMutation(query, variables) {
    const d = await doQuery(query, variables);
    return d;
}
const runtime = "edge";



/***/ })

};
;