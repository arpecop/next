"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 8004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ev": () => (/* binding */ fetchCategoryBySlug),
/* harmony export */   "pE": () => (/* binding */ fetchCategories),
/* harmony export */   "qX": () => (/* binding */ fetchSubCategory)
/* harmony export */ });
/* unused harmony export getCategories */
const getCategories = ()=>[
        {
            name: "Electronics",
            slug: "electronics",
            count: 11,
            items: [
                {
                    name: "Phones",
                    slug: "phones",
                    count: 4
                },
                {
                    name: "Tablets",
                    slug: "tablets",
                    count: 5
                },
                {
                    name: "Laptops",
                    slug: "laptops",
                    count: 2
                }
            ]
        },
        {
            name: "Clothing",
            slug: "clothing",
            count: 12,
            items: [
                {
                    name: "Tops",
                    slug: "tops",
                    count: 3
                },
                {
                    name: "Shorts",
                    slug: "shorts",
                    count: 4
                },
                {
                    name: "Shoes",
                    slug: "shoes",
                    count: 5
                }
            ]
        },
        {
            name: "Books",
            slug: "books",
            count: 10,
            items: [
                {
                    name: "Fiction",
                    slug: "fiction",
                    count: 5
                },
                {
                    name: "Biography",
                    slug: "biography",
                    count: 2
                },
                {
                    name: "Education",
                    slug: "education",
                    count: 3
                }
            ]
        }
    ];
async function fetchCategoryBySlug(slug) {
    // Assuming it always return expected categories
    return getCategories().find((category)=>category.slug === slug);
}
async function fetchCategories() {
    return getCategories();
}
async function findSubCategory(category, subCategorySlug) {
    return category?.items.find((category)=>category.slug === subCategorySlug);
}
async function fetchSubCategory(categorySlug, subCategorySlug) {
    const category = await fetchCategoryBySlug(categorySlug);
    return findSubCategory(category, subCategorySlug);
}


/***/ }),

/***/ 1834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ TabNavItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4889);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const TabNavItem = ({ children , href , isActive  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg px-3 py-1 text-sm font-medium", {
            "bg-zinc-700 text-zinc-100 hover:bg-zinc-500 hover:text-white": !isActive,
            "bg-vercel-blue text-white": isActive
        }),
        children: children
    });
};


/***/ })

};
;