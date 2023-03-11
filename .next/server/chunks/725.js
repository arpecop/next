"use strict";
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layouts_Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/MenuNavBar.tsx



const MenuNavBar = ({ className , hrefPass  })=>{
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const switchTheme = ()=>{
        if (theme === "light") {
            setTheme("dark");
        }
        if (theme === "dark") {
            setTheme("light");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        tabIndex: 0,
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "text-shadow font-bold",
                    children: "Начало"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "text-shadow font-bold",
                    href: "/?type=Jokes",
                    passHref: hrefPass,
                    children: "Вицове"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/fb/",
                    passHref: hrefPass,
                    className: "text-shadow font-bold",
                    children: "Късметчета"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "hidden",
                            type: "checkbox",
                            defaultChecked: true,
                            onClick: ()=>switchTheme(),
                            onChange: ()=>null
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "swap-off h-10 w-10 fill-white block dark:hidden cursor-pointer rotate-swap",
                            xmlns: "http://w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "h-10 w-10 fill-gray-800 hidden dark:block cursor-pointer rotate-swap",
                            xmlns: "http://w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_MenuNavBar = (MenuNavBar);

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/components/Layouts/Header.tsx





function Header() {
    const [menu, setMenu] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5476404733919333",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                async: true,
                "custom-element": "amp-ad",
                src: "https://cdn.ampproject.org/v0/amp-ad-0.1.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex w-full items-center justify-center sm:justify-start md:justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        viewBox: "0 0 1440 190",
                        xmlns: "http://w3.org/2000/svg",
                        className: "w-full block   fill-gray-800 dark:fill-blue-500 absolute top-0 z-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 128h48c48 0 144 0 240-16s192-48 288-42.7c96 5.7 192 47.7 288 48 96-.3 192-42.3 288-42.6 96 .3 192 42.3 240 64l48 21.3V0H0z"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                        className: "w-24 sm:w-24 md:w-fit relative z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "https://kloun.lol/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://kloun.pages.dev/images/logodark.png",
                                    alt: "",
                                    className: "dark:sepia",
                                    width: 140,
                                    height: 181
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://kloun.pages.dev/images/logodark.png",
                                    width: 140,
                                    height: 181,
                                    alt: "",
                                    className: "absolute dark:grayscale absolute blur-lg duration-500 dark:blur-none top-0"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuNavBar, {
                        className: "hidden sm:flex justify-end w-full items-center space-x-4 pr-2 -mt-12 z-10",
                        hrefPass: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "z-40 top-0 fixed",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: `cursor-pointer visible xs:visible sm:invisible  backdrop-blur-sm bg-black/30 dark:bg-white/30 ${menu && "flex w-screen h-screen"}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                className: "hidden",
                                checked: menu,
                                onChange: ()=>null,
                                onClick: ()=>setMenu(!menu)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://w3.org/2000/svg",
                                className: "h-8 w-8 m-2",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M4 6h16M4 12h16M4 18h7"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: menu ? "absolute" : "hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_MenuNavBar, {
                            className: "mt-3 w-52 p-2 shadow  bg flex flex-col fixed top-8 left-2 rounded-md border border-2 border-white dark:border-black gap-4",
                            hrefPass: false
                        })
                    })
                ]
            })
        ]
    });
} //test

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Layouts/Footer.tsx




const Analytics = ({ className  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://w3.org/2000/svg",
                viewBox: "0 0 1440 320",
                className: "w-full  z-10 hidden dark:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#00b894",
                    d: "m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://w3.org/2000/svg",
                viewBox: "0 0 1440 320",
                className: "w-full  z-10 dark:hidden block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#2d3748",
                    d: "m0 224 48 10.7C96 245 192 267 288 240c96-27 192-101 288-96s192 91 288 101.3c96 10.7 192-53.3 288-90.6 96-37.7 192-47.7 240-53.4l48-5.3v224H0Z"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-center items-center text-xs text-gray-600   z-10   absolute w-full bottom-2 drop-shadow-md dark:text-white",
                children: "2023 kloUn | All Rights Reserved \xae"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "preload",
                    href: "https://kloun.pages.dev/ads.js",
                    as: "script"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "https://kloun.pages.dev/ads.js"
            })
        ]
    });
//analytics
function Footer({ hideFooter  }) {
    return !hideFooter ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6  pb-6 bg gap-3 container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-10 text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "headingbottom",
                                children: "Services"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/?type=Jokes",
                                passHref: true,
                                className: "block",
                                children: "Вицове"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/news",
                                passHref: true,
                                className: "block",
                                children: "Новини"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://eziktok.com/",
                                passHref: true,
                                className: "block",
                                children: "ezikTok"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/business/",
                                passHref: true,
                                className: "block",
                                children: "Бизнес"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-10 text-sm text-right sm:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "headingbottom",
                                children: "\xa0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/movies/",
                                passHref: true,
                                className: "block",
                                children: "Филми"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/tw",
                                passHref: true,
                                className: "block",
                                children: "Туитър ДБ (бета)"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://rudixops.eu/",
                                passHref: true,
                                className: "block",
                                children: "DevOps"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "z-10 text-sm text-right sm:text-left hidden sm:block"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "z-10 text-sm text-right sm:text-left hidden md:block"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-10 text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "headingbottom",
                                children: "Company"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/other/about/",
                                className: "block",
                                children: "За"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/other/contact/",
                                className: "block",
                                children: "Контакт"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-10 text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "headingbottom text-right",
                                children: "Legal"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/other/terms/",
                                passHref: true,
                                className: "block text-right",
                                children: "Terms of use"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/other/privacy/",
                                passHref: true,
                                className: "block text-right",
                                children: "Privacy policy"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Analytics, {
                className: "w-full absolute z-0 bottom-0"
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative   py-14",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Analytics, {
            className: "w-full absolute z-10 bottom-0"
        })
    });
}
/* harmony default export */ const Layouts_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Layouts/Main.tsx



const Main = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-screen",
        children: [
            props.meta,
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.noContainer ? /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "flex z-20 grow",
                children: props.children
            }) : /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container mx-auto z-20 grow px-1",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layouts_Footer, {
                hideFooter: props.hideFooter
            })
        ]
    });
};
// dasd
/* harmony default export */ const Layouts_Main = (Main);


/***/ }),

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layouts_Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/utils/AppConfig.ts
const AppConfig = {
    site_name: "kloun.lol",
    title: "Най-яките вицове и меметалики за клоуни",
    description: "Най-яките вицове и меметалики за клоуни",
    locale: "bg_BG",
    prefix: "https://kloun.lol",
    link: process.env.USER && process.env.USER === "rudix" ? "http://localhost:3000" : "https://kloun.lol"
};

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: external "html-entities"
var external_html_entities_ = __webpack_require__(9816);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/formatter.ts + 3 modules
var formatter = __webpack_require__(1041);
;// CONCATENATED MODULE: ./src/components/Layouts/Meta.tsx



//import Head from "next/head";



const Meta = (props)=>{
    const canonicalURL = AppConfig.prefix + (0,router_.useRouter)().asPath;
    let title = (props.title || "").replace(/\s+/g, " ").replace(/\n/g, " ").slice(0, 60);
    let description = (props.description || "").replace(/\s+/g, " ").replace(/\n/g, " ").slice(0, 150);
    title = (0,external_html_entities_.encode)(props.removeProfanity ? (0,formatter/* profanityRemove */.hu)(title) : title);
    description = (0,external_html_entities_.encode)(props.removeProfanity ? (0,formatter/* profanityRemove */.hu)(description) : description);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
        title: title,
        description: description,
        canonical: canonicalURL.split(/[?#]/)[0],
        noindex: props.noIndex ? true : false,
        nofollow: props.noIndex ? true : false,
        facebook: {
            appId: "281985576166744"
        },
        openGraph: {
            url: canonicalURL.split(/[?#]/)[0],
            title: title,
            description: description,
            type: "article",
            images: props.image ? [
                {
                    url: props.image,
                    width: 1200,
                    height: 630,
                    alt: title,
                    type: props.imgtype || "image/png"
                }
            ] : [
                {
                    url: "https://kloun.pages.dev/images/og.jpg",
                    width: 800,
                    height: 600,
                    alt: "Og Image Alt",
                    type: "image/jpeg"
                }
            ],
            siteName: "kloun.lol"
        },
        twitter: {
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image"
        }
    });
};
/* harmony default export */ const Layouts_Meta = (Meta);


/***/ }),

/***/ 1041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hu": () => (/* binding */ profanityRemove),
  "lV": () => (/* binding */ slugify)
});

// UNUSED EXPORTS: businessdata, catsdata, deslugify, formattedjoke, profanityFilter

;// CONCATENATED MODULE: ./src/utils/badwords.ts
const badwords = [
    "ай сиктир",
    "алманах",
    "Амбреаж",
    "арабеска",
    "бай Грую",
    "Бай Х",
    "Балуш",
    "Бацикурковец",
    "баш говню",
    "бей",
    "белка",
    "вазелин",
    "бешлик",
    "путката",
    "блондинка под прикритие",
    "бляд",
    "бляд",
    "божлек",
    "боклик",
    "боклик",
    "Боклук-таба",
    "ботор",
    "Брадата на Фидел Кастро",
    "бълха",
    "бълхар",
    "бяга като бит педераст",
    "в гъзът му не можеш проникна и с лазерен лъч",
    "в устенцата",
    "вампиряга",
    "вертикална локва",
    "византиец",
    "вол",
    "въй, въй, въй",
    "върви и кендза",
    "гагауз",
    "гагаузин",
    "гагаузин",
    "гаджал",
    "гаджал",
    "главок",
    "глопак",
    "глупендер",
    "глуха кучка",
    "говедовъд",
    "говнарка",
    "говню",
    "говнювизатор",
    "говнюсерко",
    "голям си прос",
    "голяма бяла птица",
    "готопотам",
    "гурел",
    "гърлица да та улуй",
    "гърци",
    "гяурин",
    "гяурин",
    "да са ебъ в гъзъ",
    "да та еба у лешперо (леспера)",
    "да те шибат манафите",
    "да те шибат мъртвите",
    "да ти сера в устата",
    "да ти серъ в устата",
    "ДВИБ",
    "ДВИБУГЗ",
    "дейба баба ти дейба",
    "дембелин",
    "джапанка",
    "джармун",
    "джидия",
    "джурналист",
    "диск",
    "дреме като мисир на слънце",
    "дрисла",
    "дрисливщина",
    "дришняр",
    "дрондзул",
    "другия Георги",
    "дръндьо",
    "дръпнат",
    "ДТИБ",
    "дтибвгз",
    "дулица",
    "дундурма",
    "духач",
    "Душкюру",
    "Дъ Въ И Бъ",
    "дървеняк",
    "дърт говню",
    "дърта каракуда",
    "дърта флигорна",
    "дъртулка",
    "ебан гургуль",
    "Ермен Дуду гащи наду",
    "женски",
    "жидово чедо",
    "жълтур",
    "жълтурко",
    "заебал",
    "заспал мисир",
    "заспала путка",
    "засранец",
    "засрок",
    "златен камшик",
    "зубър",
    "изпъква като барабонка в мляко",
    "изпърдян шибаняк",
    "Изчезни със скоростта на бит педерас",
    "Кажи му (еди-какво си) и не го обиждай повече",
    "Каишев",
    "камилар",
    "карам се на мивката",
    "катър без история",
    "кацап",
    "Кво мъ гледаш кат лайно в пудра захар",
    "кекерица",
    "кендел",
    "кендзано",
    "кенлер",
    "кестен",
    "Кефал",
    "кикипръч",
    "килър",
    "клекопикаещо",
    "клепар",
    "клепар",
    "клесна",
    "клефук",
    "Ковра",
    "кондил",
    "конска муха",
    "копеле",
    "копеле фалшиво",
    "копър",
    "кофа",
    "кофпомпа",
    "Кранта",
    "кръндак",
    "курве",
    "курдак",
    "куропоглъщач",
    "куроспиралооблизвачо-лизач",
    "курчо",
    "кучи син",
    "кюмюр",
    "лайнер",
    "лайно",
    "лайномел",
    "Лайношак",
    "лайнце",
    "лайньо",
    "Лайньо",
    "ласпер",
    "леФскар",
    "лешпер",
    "лигня",
    "магарица",
    "маджури",
    "маиз",
    "Майдаебае",
    "майка ти да еба педерас грозен",
    "майка ти е мъж",
    "майка ти е мъж",
    "Майка ти и гад ибаам",
    "Маймуно мръсна",
    "мамицата ти",
    "мангал",
    "мангалоид",
    "мангасар",
    "манго",
    "мангуста",
    "Маризиш",
    "марула",
    "маскара",
    "мека Мария",
    "меки цици",
    "мекотело",
    "мида",
    "мингеч",
    "мингянин",
    "миризлив говню",
    "мирша",
    "михлюзаджийница",
    "мундю",
    "муньо",
    "мутра",
    "мутреса",
    "муха без глава",
    "мухъл",
    "мушмул",
    "Мъдеядка",
    "мъдьо",
    "мъж като лайно на дъжд",
    "мъж, като лайно на дъжд",
    "мърда",
    "мърда",
    "мърша",
    "мършавел",
    "на стар гъз-зелен бъз",
    "надупен",
    "напикано мушкато",
    "напълни калеврите",
    "науйник",
    "нимбус",
    "нищожество",
    "обиждалото",
    "овца",
    "Овчо Сънлев",
    "оли",
    "опулен шизофреник",
    "орляк",
    "паздерка",
    "пайтал",
    "папун",
    "парантия",
    "парашутист пробит",
    "парясница",
    "патка",
    "пацавура",
    "пацулан",
    "педал изсипан",
    "педерак",
    "педерас",
    "педераси",
    "педераст",
    "педераст с главно Б",
    "педерасуля",
    "педерахуйник",
    "педерунгел",
    "педесар",
    "Пеерун, Пиирун",
    "пезевенк",
    "пеизан",
    "пендел",
    "Пендехо",
    "пеницилин",
    "пенюга",
    "перекенде",
    "печка",
    "пигмей",
    "пидераз",
    "пикае клекнал",
    "пикаеща крава",
    "пикла",
    "пикльо",
    "пиндос",
    "пиче",
    "пичка ти материна",
    "пиш ми яжката",
    "пишкарак",
    "плазмодий",
    "плитко ми е обиждалото",
    "Плюнко",
    "подгъзуване",
    "покемон",
    "помия",
    "посран",
    "прашляк",
    "презерватив",
    "прокиш",
    "пролетна диария",
    "прост като гъз",
    "проста маса",
    "просто момче",
    "пръдлив гъз",
    "пръцсекар",
    "психически парцал",
    "пукел",
    "пульо",
    "пульо пулев",
    "пуси",
    "пустиняк",
    "путка",
    "путка ти на врата",
    "путкообразен",
    "путьо",
    "пълен с идеи като магаре с пръдня",
    "разциврена крава",
    "ранен бръмбар",
    "рапунгел",
    "резняк",
    "ритнитопковец",
    "ръбел",
    "ръп",
    "рътница",
    "ръфлек",
    "рязан",
    "рязан кореец",
    "рязан турчин",
    "рязана пушка",
    "с говно да го трампиш, ша сбъркаш",
    "С кур да го мериш, с ташаци да го плащаш",
    "свинкя от говна не се отказва",
    "свински очички",
    "свиньо блатска",
    "свиня блатска",
    "селянин",
    "Семкар",
    "семкари",
    "силиконка",
    "сипвам с големия черпак",
    "скенджа",
    "скумрия",
    "Скълцаняк",
    "слаба ракия",
    "слабист",
    "слива",
    "Сливия",
    "смачкана гайда",
    "смотла",
    "смукач",
    "смърф",
    "содомит",
    "сопол",
    "сополкьо",
    "спрънджа",
    "Спукан кондом",
    "срах ти на фасона",
    "стара пъстърма",
    "стара чанта",
    "суек",
    "сука блят",
    "сумляк",
    "сумостряк",
    "тепърва баба за дърва",
    "ти па си много убав",
    "тропа ти дъската",
    "тулуп",
    "тупан",
    "турчуля",
    "тъпа крава",
    "тъпо говедо",
    "Тъпото",
    "ударен с мокър парцал",
    "улеро",
    "умри от песак",
    "урод небесен",
    "уртомуртодук",
    "усерко",
    "усра",
    "УСРО",
    "усрьо",
    "адски",
    "амфети",
    "анал",
    "анален",
    "анална",
    "анални",
    "анално",
    "аналфабет",
    "анархиста",
    "анус",
    "ануси",
    "анусу",
    "бабалюга",
    "баллсацк",
    "балък",
    "барбар",
    "баси",
    "безбожник",
    "белезници",
    "биатцх",
    "бисексуален",
    "бисексуална",
    "близу",
    "боклук",
    "боклуци",
    "боллоцк",
    "бомба",
    "бонер",
    "брутален",
    "бтк",
    "бубашваба",
    "будала",
    "буттплуг",
    "ваг",
    "вагаигаи",
    "вагина",
    "вагинален",
    "вагинална",
    "вагинални",
    "вагинално",
    "вагине",
    "вагини",
    "вампир",
    "варалицу",
    "взрив",
    "вибратор",
    "виваком",
    "вулва",
    "гаргамел",
    "глобул",
    "глопак",
    "глопаци",
    "глупак",
    "глупане",
    "глупаци",
    "говнар",
    "говно",
    "говнян",
    "гранясал",
    "гръмвам",
    "гръмна",
    "гувнар",
    "гувно",
    "гуза",
    "гъз",
    "гъзове",
    "дейба",
    "джендър",
    "дилдо",
    "допара",
    "дрога",
    "дроља",
    "дупара",
    "дупе",
    "дявол",
    "е*а",
    "е*ан",
    "е*ано",
    "еакулирам",
    "еба",
    "ебавка",
    "ебал",
    "ебала",
    "ебали",
    "ебан",
    "ебана",
    "ебане",
    "ебано",
    "ебаси",
    "ебати",
    "ебач",
    "ебачи",
    "еби",
    "евреи",
    "евреин",
    "егзибициониста",
    "екскремент",
    "експлозив",
    "експлозия",
    "екстази",
    "екстаси",
    "ерекция",
    "еякулация",
    "еякулирам",
    "задник",
    "задници",
    "заебавам",
    "заебан",
    "заебана",
    "заебано",
    "заскакао",
    "зверски",
    "зле",
    "зленца",
    "злета",
    "ибем",
    "иби",
    "ибъ",
    "идиот",
    "идиоти",
    "кака",
    "калъф",
    "камила",
    "камшик",
    "капут",
    "келеш",
    "келеши",
    "кенеф",
    "кир",
    "клитор",
    "клиторис",
    "клитур",
    "кловн",
    "ковра",
    "коз",
    "кокаин",
    "компаньонка",
    "кондом",
    "кооцх",
    "коп",
    "копеле",
    "копеленце",
    "копелета",
    "копиле",
    "кор",
    "крада",
    "крвав",
    "кретен",
    "кретени",
    "кретенка",
    "кретену",
    "кривопишков",
    "куеер",
    "кунилингус",
    "кур",
    "кура",
    "курац",
    "курва",
    "курвар",
    "курви",
    "курове",
    "курцоглави",
    "кучка",
    "кучки",
    "лайнар",
    "лайната",
    "лайно",
    "лайнян",
    "лекарство",
    "лесбийка",
    "лесбийки",
    "лесбийство",
    "лесбо",
    "лизане",
    "лсд",
    "луд",
    "луди",
    "лъскане",
    "любовник",
    "любовница",
    "мадо",
    "мазохист",
    "малоумен",
    "малоумна",
    "малоумни",
    "малоумник",
    "малоумници",
    "малоумно",
    "малтретиране",
    "мамалига",
    "мамурлук",
    "манаф",
    "мангал",
    "мангали",
    "марихуана",
    "мастурбация",
    "мастурбирам",
    "мафетамин",
    "маца",
    "мегалан",
    "ментел",
    "мескалин",
    "мет",
    "метадон",
    "миндил",
    "мирене",
    "мозак-прдеж",
    "мотика",
    "мъде",
    "мъдо",
    "мъдя",
    "мъртва",
    "мъртъв",
    "навлаке",
    "наебан",
    "наебана",
    "наебано",
    "накозен",
    "накозена",
    "накозено",
    "напомпан",
    "напомпана",
    "напушен",
    "наркотици",
    "насран",
    "нашушена",
    "негър",
    "недоебан",
    "недоклатен",
    "недоклатена",
    "недоклатени",
    "недъгав",
    "нещастна",
    "нещастни",
    "нещастник",
    "нещастница",
    "нещастници",
    "нуке",
    "нуклеарна",
    "оргазми",
    "оргазъм",
    "оргии",
    "оргия",
    "осран",
    "пакао",
    "парцал",
    "пачавра",
    "пачаври",
    "педал",
    "педали",
    "педалски",
    "педер",
    "педерас",
    "педераски",
    "педераст",
    "педерастия",
    "педерастки",
    "педеру",
    "педеруга",
    "педерунгел",
    "пендел",
    "пенис",
    "пениса",
    "пецкерхеад",
    "пи4е",
    "пи4ка",
    "пи4ки",
    "пидал",
    "пидали",
    "пикла",
    "пикльо",
    "пиклю",
    "пикоч",
    "пимпек",
    "писс",
    "писсфлапс",
    "пистолет",
    "пиче",
    "пичка",
    "пичке",
    "пички",
    "пичко",
    "пишка",
    "пишонка",
    "пиштољ",
    "повращам",
    "повръщам",
    "повръщано",
    "подка",
    "покварен",
    "покварени",
    "порно",
    "порнографска",
    "порнографски",
    "порнографско",
    "посран",
    "потка",
    "похотлив",
    "прасе",
    "преебавам",
    "преебан",
    "преебана",
    "презерватив",
    "прирубница",
    "проклет",
    "проклети",
    "проклетство",
    "проститутка",
    "проститутке",
    "пръдла",
    "пръдлив",
    "пръдльо",
    "пръдня",
    "псувам",
    "пубе",
    "путе",
    "путка",
    "путо",
    "путьо",
    "пушене",
    "пушење",
    "пушка",
    "пушке",
    "пцовам",
    "пърдене",
    "пъшкам",
    "разпори",
    "ракун",
    "ритка",
    "ром",
    "роми",
    "садист",
    "садо-мазо",
    "садомазо",
    "самоубиство",
    "свирка",
    "свирки",
    "секс",
    "секс-играчки",
    "сељака",
    "сера",
    "сере",
    "сероњо",
    "сиренясал",
    "сиса",
    "скапан",
    "скапана",
    "скапани",
    "скапаняк",
    "скитница",
    "скротум",
    "слива",
    "смегма",
    "смърт",
    "содомия",
    "спектърнет",
    "сперма",
    "сране",
    "срање",
    "тапанар",
    "тапанари",
    "тапанарски",
    "тапанарско",
    "тард",
    "теленор",
    "терор",
    "терорист",
    "терористи",
    "титфуцк",
    "травестит",
    "транссексуален",
    "транссексуална",
    "трева",
    "тъп",
    "тъпак",
    "тъпанар",
    "тъпанари",
    "тъпанарски",
    "тъпанарско",
    "тъпаци",
    "тъпи",
    "убийство",
    "убиство",
    "уй",
    "умрети",
    "умри",
    "умрял",
    "умряла",
    "фагбаг",
    "федърка",
    "фекалии",
    "фекалира",
    "фекалия",
    "фелацио",
    "феллате",
    "фелцхинг",
    "фудгепацкер",
    "хемероиди",
    "хенди",
    "хероин",
    "хой",
    "хомосексуален",
    "хомосексуалист",
    "храброст",
    "хуй",
    "хуя",
    "минет",
    "гомнян",
    "хуйове",
    "цигани",
    "циганин",
    "цигара",
    "цигари",
    "црњо",
    "чекии",
    "чекий",
    "чекия",
    "чеп",
    "черва",
    "чикибоец",
    "чикии",
    "чикий",
    "чикия",
    "чоребе",
    "чукам",
    "чукане",
    "шаврантия",
    "шафрантия",
    "швестер",
    "шейба",
    "шибай",
    "шибам",
    "шибан",
    "шибана",
    "шибани",
    "шибано",
    "шибаняк",
    "шибаняци",
    "шпакла",
    "шунда",
    "шунди"
];

;// CONCATENATED MODULE: ./src/utils/data/business.json
const business_namespaceObject = JSON.parse('[{"count":252346,"cat":"София"},{"count":62692,"cat":"Варна"},{"count":56469,"cat":"Пловдив"},{"count":36904,"cat":"Бургас"},{"count":22544,"cat":"Русе"},{"count":19454,"cat":"Стара Загора"},{"count":12950,"cat":"Благоевград"},{"count":12541,"cat":"Плевен"},{"count":11950,"cat":"Добрич"},{"count":10899,"cat":"Хасково"},{"count":10632,"cat":"Сливен"},{"count":10411,"cat":"Велико Търново"},{"count":9531,"cat":"Шумен"},{"count":9201,"cat":"Петрич"},{"count":8934,"cat":"Пазарджик"},{"count":8658,"cat":"Перник"},{"count":8237,"cat":"Ямбол"},{"count":8193,"cat":"Габрово"},{"count":7295,"cat":"Враца"},{"count":6246,"cat":"Кюстендил"},{"count":6194,"cat":"Асеновград"},{"count":5700,"cat":"Кърджали"},{"count":5599,"cat":"Казанлък"},{"count":5548,"cat":"Сандански"},{"count":5525,"cat":"Несебър"},{"count":4927,"cat":"Монтана"},{"count":4911,"cat":"Видин"},{"count":4761,"cat":"Димитровград"},{"count":4625,"cat":"Търговище"},{"count":4405,"cat":"Смолян"},{"count":4319,"cat":"Силистра"},{"count":4207,"cat":"Разград"},{"count":3961,"cat":"Ловеч"},{"count":3680,"cat":"Самоков"},{"count":3635,"cat":"Дупница"},{"count":3093,"cat":"Гоце Делчев"},{"count":3088,"cat":"Горна Оряховица"},{"count":3017,"cat":"Поморие"},{"count":2609,"cat":"Севлиево"},{"count":2461,"cat":"Троян"},{"count":2426,"cat":"Карлово"},{"count":2352,"cat":"Велинград"},{"count":2324,"cat":"Свиленград"},{"count":2203,"cat":"Ботевград"},{"count":2071,"cat":"Свищов"},{"count":2006,"cat":"Айтос"},{"count":1892,"cat":"Харманли"},{"count":1832,"cat":"Нова Загора"},{"count":1810,"cat":"Банско"},{"count":1659,"cat":"Карнобат"}]');
;// CONCATENATED MODULE: ./src/utils/data/jokes.json
const jokes_namespaceObject = JSON.parse('[{"cat":"Разни","count":51785},{"cat":"Семейни","count":8115},{"cat":"Бисери","count":7511},{"cat":"Жени","count":7400},{"cat":"Мръсни","count":3035},{"cat":"Професионални","count":2377},{"cat":"Животни","count":2319},{"cat":"Блондинки","count":2242},{"cat":"Любими Герои","count":2084},{"cat":"Черен хумор","count":1892},{"cat":"Програмисти","count":1861},{"cat":"Политически","count":1750},{"cat":"Иванчо и Марийка","count":1485},{"cat":"Пиянски","count":1410},{"cat":"Лекари","count":1074},{"cat":"Полицаи","count":934},{"cat":"Други","count":801},{"cat":"Спортни","count":768},{"cat":"Проститутки","count":762},{"cat":"Студентски","count":762},{"cat":"Борци","count":696},{"cat":"Деца","count":694},{"cat":"Иванчо","count":575},{"cat":"Цигани","count":529},{"cat":"Младоженци","count":481},{"cat":"Фармацевти","count":471},{"cat":"Ученически","count":468},{"cat":"Монаси","count":465},{"cat":"Шофьори","count":439},{"cat":"Свалки","count":434},{"cat":"Тъщи","count":431},{"cat":"Глупави","count":430},{"cat":"Надписи","count":421},{"cat":"Радио Ереван","count":401},{"cat":"Доктори","count":400},{"cat":"Адвокати","count":399},{"cat":"Фейсбук","count":397},{"cat":"Евреи","count":396},{"cat":"Гинеколози","count":387},{"cat":"Съседи","count":380},{"cat":"Цигари","count":378},{"cat":"Америка","count":364},{"cat":"Мъже","count":362},{"cat":"Огледало","count":361},{"cat":"Щерки","count":359},{"cat":"Тоалетна","count":355},{"cat":"Умрели","count":349},{"cat":"Плажове","count":342},{"cat":"Родители","count":341},{"cat":"Професии","count":341},{"cat":"Младежи","count":340},{"cat":"Прасета","count":340},{"cat":"Принцове и принцеси","count":335},{"cat":"Вино","count":331},{"cat":"Подаръци","count":329},{"cat":"С*кс","count":329},{"cat":"Дядовци","count":326},{"cat":"Ракия","count":322},{"cat":"Рожденици","count":319},{"cat":"Тъпизми","count":316},{"cat":"Радио ереван","count":316},{"cat":"Катаджии","count":314},{"cat":"SMS","count":314},{"cat":"Военни","count":313},{"cat":"Кръчми","count":311},{"cat":"Дебели","count":310},{"cat":"Психиатрия","count":306},{"cat":"Празнични","count":293},{"cat":"Градове","count":277},{"cat":"Затворници","count":276},{"cat":"Влакове","count":275},{"cat":"Каква е разликата","count":270},{"cat":"Бебета","count":268},{"cat":"Филми","count":267},{"cat":"Лято","count":266},{"cat":"Сутиени","count":265},{"cat":"Гадории","count":265},{"cat":"Петък","count":261},{"cat":"Уиски","count":261},{"cat":"Секретарки","count":257},{"cat":"Математика","count":255},{"cat":"Любовник","count":255},{"cat":"Марийка","count":254},{"cat":"Купони","count":250},{"cat":"Плуване","count":250},{"cat":"Отслабване","count":248},{"cat":"Обувки","count":244},{"cat":"Командировки","count":244},{"cat":"Крави","count":244},{"cat":"Овчари","count":243},{"cat":"Наркомански","count":240},{"cat":"Директори","count":240},{"cat":"Професори","count":239},{"cat":"Кокошки","count":234},{"cat":"Слонове","count":234},{"cat":"Хляб","count":233},{"cat":"Чък Норис","count":229},{"cat":"Шоколад","count":228},{"cat":"Зима","count":226},{"cat":"Маймуни","count":226},{"cat":"Китай","count":223},{"cat":"Грозни","count":219},{"cat":"Любовница","count":218},{"cat":"Храна","count":215},{"cat":"Усмивки","count":211},{"cat":"Такси","count":210},{"cat":"Перничани","count":209},{"cat":"Русия","count":205},{"cat":"Татковци","count":202},{"cat":"Водка","count":201},{"cat":"Нова година","count":200},{"cat":"Капитани","count":199},{"cat":"Котки","count":197},{"cat":"Съдии","count":197},{"cat":"Маса","count":197},{"cat":"Готвачи","count":195},{"cat":"Планина","count":195},{"cat":"София","count":194},{"cat":"Супи","count":188},{"cat":"Чукчи","count":184},{"cat":"Франция","count":181},{"cat":"Луди","count":181},{"cat":"Хотели","count":179},{"cat":"България","count":177},{"cat":"Мутри","count":177}]');
;// CONCATENATED MODULE: ./src/utils/formatter.ts



function slugify(string) {
    let slug = string.replace(/\s+/g, "-");
    slug = slug.toLowerCase();
    const CYRILLIC_TO_LATIN_MAP = {
        а: "a",
        б: "b",
        в: "v",
        г: "g",
        д: "d",
        е: "e",
        ё: "e",
        ж: "zh",
        з: "z",
        и: "i",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "sht",
        ъ: "",
        ы: "y",
        ь: "",
        э: "e",
        ю: "iu",
        я: "ia"
    };
    // Replace spaces with dashes
    slug = Array.from(slug).map((ch)=>CYRILLIC_TO_LATIN_MAP[ch.toLowerCase()] || ch).join("");
    // Remove any remaining non-alphanumeric characters and replace them with a dash
    slug = slug.replace(/[^a-z0-9-]+/g, "-").replace(/[-]+/g, "-");
    return slug || "404";
}
const catsdata = jokes_namespaceObject.map((item)=>{
    return {
        ...item,
        slug: slugify(item.cat)
    };
});
const businessdata = business_namespaceObject.map((item)=>{
    return {
        ...item,
        slug: slugify(item.cat)
    };
});
function profanityFilter(title, character) {
    let tags = [];
    const words = title.replace(/[^А-Яа-я]/g, " ").split(" ");
    const filteredWords = words.map((word)=>{
        return badwords.includes(word.toLowerCase()) ? character.repeat(word.length) : word;
    });
    tags = filteredWords.map((word)=>word);
    return tags.join(" ");
}
function profanityRemove(title) {
    const filter = profanityFilter(title, "*").split(" ").filter((word)=>!word.includes("*")).join(" ");
    return filter;
}
const formattedjoke = (joke)=>{
    const formatted = joke.replace(/([.!?])[:]/g, "$1\n\n").replace(/—/g, "\n-").replace(/— ([А-Я])/g, "\n- $1").replace(/-([А-Я])/g, "\n- $1").replace(/[ ]+- ([А-Я])/g, "\n- $1").replace(/\?/g, "?\n").replace(/\n+/g, "\n").split("\n").filter((x)=>x.length > 2).map((x)=>x.trim()).join("\n");
    return formatted;
};
const deslugify = (slug)=>{
    const item = [
        ...businessdata,
        ...catsdata
    ].find((x)=>x.slug === slug);
    return item ? item.cat : "";
}; // SEO keywords


/***/ })

};
;