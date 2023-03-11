"use strict";
(() => {
var exports = {};
exports.id = 308;
exports.ids = [308,15];
exports.modules = {

/***/ 871:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

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

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cronidjokes": () => (/* binding */ cronidjokes),
  "default": () => (/* binding */ cron)
});

// EXTERNAL MODULE: ./src/pages/api/graphql.ts
var graphql = __webpack_require__(583);
// EXTERNAL MODULE: ./src/pages/api/refetch.ts
var refetch = __webpack_require__(7681);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
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

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(7262);
;// CONCATENATED MODULE: ./src/components/NewPagination.tsx



const prefix = "v2";
function numToString(num) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = "";
    while(num > 0){
        str = alphabet[num % 26] + str;
        num = Math.floor(num / 26);
    }
    return str;
}
async function refreshToken(cat, pagenum, nextToken) {
    if (!nextToken) {
        return "ok";
    }
    doMutation(gql`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: {
            joke: $joke
            type: $id
            cat: "pagination"
            nid: $nid
            price: 0
          }
        ) {
          id
        }
      }
    `, {
        joke: nextToken,
        id: `${prefix}${cat}${pagenum + 1}`,
        nid: numToString(new Date(2222, 0, 1).getTime() - Date.now())
    });
    return "notok";
}
async function getPaging(slug, page) {
    const check = await doQuery(gql`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
          }
        }
      }
    `, {
        id: `${prefix}${slug}${page}`
    });
    return check.items?.[0]?.joke;
}
function NewPagination({ pagenum , cat , nextToken  }) {
    const prev = pagenum - 1 === 1 ? "" : pagenum - 1;
    const lengths = [
        "",
        "text-lg pt-2 ",
        "text-md pt-2 ",
        "pt-2  text-xs",
        "pt-2  text-xs rotate-90"
    ];
    const className = "btn-outline btn   bg-black  dark:border-black  dark:bg-white dark:text-black";
    return /*#__PURE__*/ _jsx("div", {
        className: "fixed bottom-0 left-0 z-20 flex w-full justify-center bg-black/30 p-4 backdrop-blur-sm rounded-t-xl",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "btn-group",
            children: [
                pagenum !== 1 && /*#__PURE__*/ _jsx(Link, {
                    passHref: true,
                    href: `${cat}${prev}`,
                    className: className,
                    children: /*#__PURE__*/ _jsx("svg", {
                        xmlns: "http://w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-8 h-8",
                        children: /*#__PURE__*/ _jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                        })
                    })
                }),
                /*#__PURE__*/ _jsxs("button", {
                    className: className,
                    children: [
                        /*#__PURE__*/ _jsx("svg", {
                            xmlns: "http://w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            className: "w-10 h-10 absolute",
                            children: /*#__PURE__*/ _jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: lengths[pagenum.toString().length],
                            children: [
                                " ",
                                pagenum
                            ]
                        })
                    ]
                }),
                nextToken && /*#__PURE__*/ _jsx(Link, {
                    passHref: true,
                    className: className,
                    href: `${cat}${pagenum + 1}`,
                    children: /*#__PURE__*/ _jsx("svg", {
                        xmlns: "http://w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-8 h-8",
                        children: /*#__PURE__*/ _jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/api/joke/cron.ts





const cronidjokes = "crommercheim";
async function prepare() {
    const data1 = await (0,graphql/* doQuery */.Rf)(graphql/* gql */.Ps`
      query MyQuery($id: String = "") {
        queryDdbsByByAppCat(type: $id, first: 1) {
          items {
            id
            joke
            nid
          }
        }
      }
    `, {
        id: cronidjokes
    });
    const tok = data1.items[0].joke;
    const data = await (0,graphql/* doQuery */.Rf)(graphql/* gql */.Ps`
      query MyQuery($cat: String!, $nextToken: String) {
        queryDdbsByByCat(cat: $cat, first: 30, after: $nextToken) {
          items {
            id
            joke: title
          }
          nextToken
        }
      }
    `, {
        cat: `JOKРазни`,
        nextToken: tok
    });
    await (0,graphql/* doMutation */.MP)(graphql/* gql */.Ps`
      mutation MyMutation(
        $joke: String = ""
        $id: String = ""
        $nid: String = ""
      ) {
        createDdb(
          input: {joke: $joke, type: $id, cat: $id, nid: $nid, price: 0}
        ) {
          id
        }
      }
    `, {
        joke: data.nextToken,
        id: cronidjokes,
        nid: numToString(new Date(2222, 0, 1).getTime() - Date.now())
    });
    return data.items;
}
/* harmony default export */ const cron = (async (_req, res)=>{
    const data = await prepare();
    const child_attachments = data.sort((a, z)=>z.joke.length - a.joke.length).map((item)=>({
            link: `https://kloun.lol/joke/${item.id}`,
            name: profanityRemove((0,external_lodash_.shuffle)(item.joke.split(" ")).filter((i)=>i.length >= 5).slice(0, 25).join(" ").toLowerCase()),
            picture: `https://kloun.lol/api/joke/og/?idx=${item.id}&w=550&h=550`
        })).slice(0, 5);
    const res2 = await fetch(`https://graph.facebook.com/me/accounts?access_token=${refetch.fbtoken}`);
    // "103340854630134" <- old one
    const datax = await res2.json();
    const jokestoken = datax.data.find((x)=>x.id === "111266738511276").access_token;
    const rawResponse = await fetch(`https://graph.facebook.com/111266738511276/feed?access_token=${jokestoken}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: "#виц #вицове #забавно",
            link: "https://kloun.lol/cat/razni/",
            multi_share_end_card: false,
            child_attachments
        })
    });
    const resp = await rawResponse.json();
    res.json({
        child_attachments,
        resp
    });
});


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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [262,583], () => (__webpack_exec__(4489)));
module.exports = __webpack_exports__;

})();