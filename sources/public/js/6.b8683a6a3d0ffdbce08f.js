(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/form/AsyncSelectField.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/form/AsyncSelectField.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function AsyncSelectField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      loadOptions = _ref.loadOptions,
      loadValue = _ref.loadValue,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      isClearable = _ref.isClearable;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      option = _useState2[0],
      setOption = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (value && !option) {
      loadValue(value).then(function (o) {
        setOption(o);
      });
    }
  }, [loadValue, option, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: function onChange(selectedOption) {
      setFieldValue(name, selectedOption ? selectedOption.value : null);
      setOption(selectedOption);
    },
    value: value ? option : null,
    isClearable: isClearable,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    placeholder: placeholder ? placeholder : t("common.default-select-placeholder")
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors[name]
  }) : null);
}
AsyncSelectField.defaultProps = {
  isClearable: true
};
AsyncSelectField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  loadValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

/***/ }),

/***/ "./resources/js/components/widgets/faIcons/FaIcon.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/FaIcon.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function FaIcon(_ref) {
  var namespace = _ref.namespace,
      icon = _ref.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "".concat(namespace, " fa-").concat(icon)
  });
}

FaIcon.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  namespace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FaIcon));

/***/ }),

/***/ "./resources/js/components/widgets/faIcons/allFaIcons.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/allFaIcons.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var allFaIcons = {
  fas: ["ad", "address-book", "address-card", "adjust", "air-freshener", "align-center", "align-justify", "align-left", "align-right", "allergies", "ambulance", "american-sign-language-interpreting", "anchor", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "angry", "ankh", "apple-alt", "archive", "archway", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows-alt", "arrows-alt-h", "arrows-alt-v", "assistive-listening-systems", "asterisk", "at", "atlas", "atom", "audio-description", "award", "baby", "baby-carriage", "backspace", "backward", "bacon", "bacteria", "bacterium", "bahai", "balance-scale", "balance-scale-left", "balance-scale-right", "ban", "band-aid", "barcode", "bars", "baseball-ball", "basketball-ball", "bath", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-slash", "bezier-curve", "bible", "bicycle", "biking", "binoculars", "biohazard", "birthday-cake", "blender", "blender-phone", "blind", "blog", "bold", "bolt", "bomb", "bone", "bong", "book", "book-dead", "book-medical", "book-open", "book-reader", "bookmark", "border-all", "border-none", "border-style", "bowling-ball", "box", "box-open", "box-tissue", "boxes", "braille", "brain", "bread-slice", "briefcase", "briefcase-medical", "broadcast-tower", "broom", "brush", "bug", "building", "bullhorn", "bullseye", "burn", "bus", "bus-alt", "business-time", "calculator", "calendar", "calendar-alt", "calendar-check", "calendar-day", "calendar-minus", "calendar-plus", "calendar-times", "calendar-week", "camera", "camera-retro", "campground", "candy-cane", "cannabis", "capsules", "car", "car-alt", "car-battery", "car-crash", "car-side", "caravan", "caret-down", "caret-left", "caret-right", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "caret-up", "carrot", "cart-arrow-down", "cart-plus", "cash-register", "cat", "certificate", "chair", "chalkboard", "chalkboard-teacher", "charging-station", "chart-area", "chart-bar", "chart-line", "chart-pie", "check", "check-circle", "check-double", "check-square", "cheese", "chess", "chess-bishop", "chess-board", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "church", "circle", "circle-notch", "city", "clinic-medical", "clipboard", "clipboard-check", "clipboard-list", "clock", "clone", "closed-captioning", "cloud", "cloud-download-alt", "cloud-meatball", "cloud-moon", "cloud-moon-rain", "cloud-rain", "cloud-showers-heavy", "cloud-sun", "cloud-sun-rain", "cloud-upload-alt", "cocktail", "code", "code-branch", "coffee", "cog", "cogs", "coins", "columns", "comment", "comment-alt", "comment-dollar", "comment-dots", "comment-medical", "comment-slash", "comments", "comments-dollar", "compact-disc", "compass", "compress", "compress-alt", "compress-arrows-alt", "concierge-bell", "cookie", "cookie-bite", "copy", "copyright", "couch", "credit-card", "crop", "crop-alt", "cross", "crosshairs", "crow", "crown", "crutch", "cube", "cubes", "cut", "database", "deaf", "democrat", "desktop", "dharmachakra", "diagnoses", "dice", "dice-d20", "dice-d6", "dice-five", "dice-four", "dice-one", "dice-six", "dice-three", "dice-two", "digital-tachograph", "directions", "disease", "divide", "dizzy", "dna", "dog", "dollar-sign", "dolly", "dolly-flatbed", "donate", "door-closed", "door-open", "dot-circle", "dove", "download", "drafting-compass", "dragon", "draw-polygon", "drum", "drum-steelpan", "drumstick-bite", "dumbbell", "dumpster", "dumpster-fire", "dungeon", "edit", "egg", "eject", "ellipsis-h", "ellipsis-v", "envelope", "envelope-open", "envelope-open-text", "envelope-square", "equals", "eraser", "ethernet", "euro-sign", "exchange-alt", "exclamation", "exclamation-circle", "exclamation-triangle", "expand", "expand-alt", "expand-arrows-alt", "external-link-alt", "external-link-square-alt", "eye", "eye-dropper", "eye-slash", "fan", "fast-backward", "fast-forward", "faucet", "fax", "feather", "feather-alt", "female", "fighter-jet", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-contract", "file-csv", "file-download", "file-excel", "file-export", "file-image", "file-import", "file-invoice", "file-invoice-dollar", "file-medical", "file-medical-alt", "file-pdf", "file-powerpoint", "file-prescription", "file-signature", "file-upload", "file-video", "file-word", "fill", "fill-drip", "film", "filter", "fingerprint", "fire", "fire-alt", "fire-extinguisher", "first-aid", "fish", "fist-raised", "flag", "flag-checkered", "flag-usa", "flask", "flushed", "folder", "folder-minus", "folder-open", "folder-plus", "font", "football-ball", "forward", "frog", "frown", "frown-open", "funnel-dollar", "futbol", "gamepad", "gas-pump", "gavel", "gem", "genderless", "ghost", "gift", "gifts", "glass-cheers", "glass-martini", "glass-martini-alt", "glass-whiskey", "glasses", "globe", "globe-africa", "globe-americas", "globe-asia", "globe-europe", "golf-ball", "gopuram", "graduation-cap", "greater-than", "greater-than-equal", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "grip-horizontal", "grip-lines", "grip-lines-vertical", "grip-vertical", "guitar", "h-square", "hamburger", "hammer", "hamsa", "hand-holding", "hand-holding-heart", "hand-holding-medical", "hand-holding-usd", "hand-holding-water", "hand-lizard", "hand-middle-finger", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-sparkles", "hand-spock", "hands", "hands-helping", "hands-wash", "handshake", "handshake-alt-slash", "handshake-slash", "hanukiah", "hard-hat", "hashtag", "hat-cowboy", "hat-cowboy-side", "hat-wizard", "hdd", "head-side-cough", "head-side-cough-slash", "head-side-mask", "head-side-virus", "heading", "headphones", "headphones-alt", "headset", "heart", "heart-broken", "heartbeat", "helicopter", "highlighter", "hiking", "hippo", "history", "hockey-puck", "holly-berry", "home", "horse", "horse-head", "hospital", "hospital-alt", "hospital-symbol", "hospital-user", "hot-tub", "hotdog", "hotel", "hourglass", "hourglass-end", "hourglass-half", "hourglass-start", "house-damage", "house-user", "hryvnia", "i-cursor", "ice-cream", "icicles", "icons", "id-badge", "id-card", "id-card-alt", "igloo", "image", "images", "inbox", "indent", "industry", "infinity", "info", "info-circle", "italic", "jedi", "joint", "journal-whills", "kaaba", "key", "keyboard", "khanda", "kiss", "kiss-beam", "kiss-wink-heart", "kiwi-bird", "landmark", "language", "laptop", "laptop-code", "laptop-house", "laptop-medical", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "layer-group", "leaf", "lemon", "less-than", "less-than-equal", "level-down-alt", "level-up-alt", "life-ring", "lightbulb", "link", "lira-sign", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "lock-open", "long-arrow-alt-down", "long-arrow-alt-left", "long-arrow-alt-right", "long-arrow-alt-up", "low-vision", "luggage-cart", "lungs", "lungs-virus", "magic", "magnet", "mail-bulk", "male", "map", "map-marked", "map-marked-alt", "map-marker", "map-marker-alt", "map-pin", "map-signs", "marker", "mars", "mars-double", "mars-stroke", "mars-stroke-h", "mars-stroke-v", "mask", "medal", "medkit", "meh", "meh-blank", "meh-rolling-eyes", "memory", "menorah", "mercury", "meteor", "microchip", "microphone", "microphone-alt", "microphone-alt-slash", "microphone-slash", "microscope", "minus", "minus-circle", "minus-square", "mitten", "mobile", "mobile-alt", "money-bill", "money-bill-alt", "money-bill-wave", "money-bill-wave-alt", "money-check", "money-check-alt", "monument", "moon", "mortar-pestle", "mosque", "motorcycle", "mountain", "mouse", "mouse-pointer", "mug-hot", "music", "network-wired", "neuter", "newspaper", "not-equal", "notes-medical", "object-group", "object-ungroup", "oil-can", "om", "otter", "outdent", "pager", "paint-brush", "paint-roller", "palette", "pallet", "paper-plane", "paperclip", "parachute-box", "paragraph", "parking", "passport", "pastafarianism", "paste", "pause", "pause-circle", "paw", "peace", "pen", "pen-alt", "pen-fancy", "pen-nib", "pen-square", "pencil-alt", "pencil-ruler", "people-arrows", "people-carry", "pepper-hot", "percent", "percentage", "person-booth", "phone", "phone-alt", "phone-slash", "phone-square", "phone-square-alt", "phone-volume", "photo-video", "piggy-bank", "pills", "pizza-slice", "place-of-worship", "plane", "plane-arrival", "plane-departure", "plane-slash", "play", "play-circle", "plug", "plus", "plus-circle", "plus-square", "podcast", "poll", "poll-h", "poo", "poo-storm", "poop", "portrait", "pound-sign", "power-off", "pray", "praying-hands", "prescription", "prescription-bottle", "prescription-bottle-alt", "print", "procedures", "project-diagram", "pump-medical", "pump-soap", "puzzle-piece", "qrcode", "question", "question-circle", "quidditch", "quote-left", "quote-right", "quran", "radiation", "radiation-alt", "rainbow", "random", "receipt", "record-vinyl", "recycle", "redo", "redo-alt", "registered", "remove-format", "reply", "reply-all", "republican", "restroom", "retweet", "ribbon", "ring", "road", "robot", "rocket", "route", "rss", "rss-square", "ruble-sign", "ruler", "ruler-combined", "ruler-horizontal", "ruler-vertical", "running", "rupee-sign", "sad-cry", "sad-tear", "satellite", "satellite-dish", "save", "school", "screwdriver", "scroll", "sd-card", "search", "search-dollar", "search-location", "search-minus", "search-plus", "seedling", "server", "shapes", "share", "share-alt", "share-alt-square", "share-square", "shekel-sign", "shield-alt", "shield-virus", "ship", "shipping-fast", "shoe-prints", "shopping-bag", "shopping-basket", "shopping-cart", "shower", "shuttle-van", "sign", "sign-in-alt", "sign-language", "sign-out-alt", "signal", "signature", "sim-card", "sink", "sitemap", "skating", "skiing", "skiing-nordic", "skull", "skull-crossbones", "slash", "sleigh", "sliders-h", "smile", "smile-beam", "smile-wink", "smog", "smoking", "smoking-ban", "sms", "snowboarding", "snowflake", "snowman", "snowplow", "soap", "socks", "solar-panel", "sort", "sort-alpha-down", "sort-alpha-down-alt", "sort-alpha-up", "sort-alpha-up-alt", "sort-amount-down", "sort-amount-down-alt", "sort-amount-up", "sort-amount-up-alt", "sort-down", "sort-numeric-down", "sort-numeric-down-alt", "sort-numeric-up", "sort-numeric-up-alt", "sort-up", "spa", "space-shuttle", "spell-check", "spider", "spinner", "splotch", "spray-can", "square", "square-full", "square-root-alt", "stamp", "star", "star-and-crescent", "star-half", "star-half-alt", "star-of-david", "star-of-life", "step-backward", "step-forward", "stethoscope", "sticky-note", "stop", "stop-circle", "stopwatch", "stopwatch-20", "store", "store-alt", "store-alt-slash", "store-slash", "stream", "street-view", "strikethrough", "stroopwafel", "subscript", "subway", "suitcase", "suitcase-rolling", "sun", "superscript", "surprise", "swatchbook", "swimmer", "swimming-pool", "synagogue", "sync", "sync-alt", "syringe", "table", "table-tennis", "tablet", "tablet-alt", "tablets", "tachometer-alt", "tag", "tags", "tape", "tasks", "taxi", "teeth", "teeth-open", "temperature-high", "temperature-low", "tenge", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "theater-masks", "thermometer", "thermometer-empty", "thermometer-full", "thermometer-half", "thermometer-quarter", "thermometer-three-quarters", "thumbs-down", "thumbs-up", "thumbtack", "ticket-alt", "times", "times-circle", "tint", "tint-slash", "tired", "toggle-off", "toggle-on", "toilet", "toilet-paper", "toilet-paper-slash", "toolbox", "tools", "tooth", "torah", "torii-gate", "tractor", "trademark", "traffic-light", "trailer", "train", "tram", "transgender", "transgender-alt", "trash", "trash-alt", "trash-restore", "trash-restore-alt", "tree", "trophy", "truck", "truck-loading", "truck-monster", "truck-moving", "truck-pickup", "tshirt", "tty", "tv", "umbrella", "umbrella-beach", "underline", "undo", "undo-alt", "universal-access", "university", "unlink", "unlock", "unlock-alt", "upload", "user", "user-alt", "user-alt-slash", "user-astronaut", "user-check", "user-circle", "user-clock", "user-cog", "user-edit", "user-friends", "user-graduate", "user-injured", "user-lock", "user-md", "user-minus", "user-ninja", "user-nurse", "user-plus", "user-secret", "user-shield", "user-slash", "user-tag", "user-tie", "user-times", "users", "users-cog", "users-slash", "utensil-spoon", "utensils", "vector-square", "venus", "venus-double", "venus-mars", "vest", "vest-patches", "vial", "vials", "video", "video-slash", "vihara", "virus", "virus-slash", "viruses", "voicemail", "volleyball-ball", "volume-down", "volume-mute", "volume-off", "volume-up", "vote-yea", "vr-cardboard", "walking", "wallet", "warehouse", "water", "wave-square", "weight", "weight-hanging", "wheelchair", "wifi", "wind", "window-close", "window-maximize", "window-minimize", "window-restore", "wine-bottle", "wine-glass", "wine-glass-alt", "won-sign", "wrench", "x-ray", "yen-sign", "yin-yang"],
  far: ["address-book", "address-card", "angry", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "bell", "bell-slash", "bookmark", "building", "calendar", "calendar-alt", "calendar-check", "calendar-minus", "calendar-plus", "calendar-times", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "chart-bar", "check-circle", "check-square", "circle", "clipboard", "clock", "clone", "closed-captioning", "comment", "comment-alt", "comment-dots", "comments", "compass", "copy", "copyright", "credit-card", "dizzy", "dot-circle", "edit", "envelope", "envelope-open", "eye", "eye-slash", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-excel", "file-image", "file-pdf", "file-powerpoint", "file-video", "file-word", "flag", "flushed", "folder", "folder-open", "frown", "frown-open", "futbol", "gem", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "hand-lizard", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-spock", "handshake", "hdd", "heart", "hospital", "hourglass", "id-badge", "id-card", "image", "images", "keyboard", "kiss", "kiss-beam", "kiss-wink-heart", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "lemon", "life-ring", "lightbulb", "list-alt", "map", "meh", "meh-blank", "meh-rolling-eyes", "minus-square", "money-bill-alt", "moon", "newspaper", "object-group", "object-ungroup", "paper-plane", "pause-circle", "play-circle", "plus-square", "question-circle", "registered", "sad-cry", "sad-tear", "save", "share-square", "smile", "smile-beam", "smile-wink", "snowflake", "square", "star", "star-half", "sticky-note", "stop-circle", "sun", "surprise", "thumbs-down", "thumbs-up", "times-circle", "tired", "trash-alt", "user", "user-circle", "window-close", "window-maximize", "window-minimize", "window-restore"],
  fab: ["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adversal", "affiliatetheme", "airbnb", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "battle-net", "behance", "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluetooth", "bluetooth-b", "bootstrap", "btc", "buffer", "buromobelexperte", "buy-n-large", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "centos", "chrome", "chromecast", "cloudflare", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "confluence", "connectdevelop", "contao", "cotton-bureau", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dailymotion", "dashcube", "deezer", "delicious", "deploydog", "deskpro", "dev", "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble-square", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "edge-legacy", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "evernote", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "facebook-square", "fantasy-flight-games", "fedex", "fedora", "figma", "firefox", "firefox-browser", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "font-awesome-alt", "font-awesome-flag", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-alt", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "goodreads", "goodreads-g", "google", "google-drive", "google-pay", "google-play", "google-plus", "google-plus-g", "google-plus-square", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "guilded", "gulp", "hacker-news", "hacker-news-square", "hackerrank", "hips", "hire-a-helper", "hive", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "ideal", "imdb", "innosoft", "instagram", "instagram-square", "instalod", "intercom", "internet-explorer", "invision", "ioxhost", "itch-io", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "jira", "joget", "joomla", "js", "js-square", "jsfiddle", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "lastfm-square", "leanpub", "less", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "mdb", "medapps", "medium", "medium-m", "medrt", "meetup", "megaport", "mendeley", "microblog", "microsoft", "mix", "mixcloud", "mixer", "mizuni", "modx", "monero", "napster", "neos", "nimblr", "node", "node-js", "npm", "ns8", "nutritionix", "octopus-deploy", "odnoklassniki", "odnoklassniki-square", "old-republic", "opencart", "openid", "opera", "optin-monster", "orcid", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "penny-arcade", "perbyte", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pied-piper-square", "pinterest", "pinterest-p", "pinterest-square", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "raspberry-pi", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "reddit-square", "redhat", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "rust", "safari", "salesforce", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shopify", "shopware", "simplybuilt", "sistrix", "sith", "sketch", "skyatlas", "skype", "slack", "slack-hash", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "sourcetree", "speakap", "speaker-deck", "spotify", "squarespace", "stack-exchange", "stack-overflow", "stackpath", "staylinked", "steam", "steam-square", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "suse", "swift", "symfony", "teamspeak", "telegram", "telegram-plane", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "tiktok", "trade-federation", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "typo3", "uber", "ubuntu", "uikit", "umbraco", "uncharted", "uniregistry", "unity", "unsplash", "untappd", "ups", "usb", "usps", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo-square", "viber", "vimeo", "vimeo-square", "vimeo-v", "vine", "vk", "vnv", "vuejs", "watchman-monitoring", "waze", "weebly", "weibo", "weixin", "whatsapp", "whatsapp-square", "whmcs", "wikipedia-w", "windows", "wix", "wizards-of-the-coast", "wodu", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "xbox", "xing", "xing-square", "y-combinator", "yahoo", "yammer", "yandex", "yandex-international", "yarn", "yelp", "yoast", "youtube", "youtube-square", "zhihu"]
};
/* harmony default export */ __webpack_exports__["default"] = (allFaIcons);

/***/ }),

/***/ "./resources/js/components/widgets/faIcons/picker/IconsList.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/picker/IconsList.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_faIcons_allFaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/faIcons/allFaIcons */ "./resources/js/components/widgets/faIcons/allFaIcons.js");
/* harmony import */ var _components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/faIcons/FaIcon */ "./resources/js/components/widgets/faIcons/FaIcon.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");






function IconsList(_ref) {
  var namespace = _ref.namespace,
      search = _ref.search,
      _onClick = _ref.onClick,
      icons = _ref.icons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _components_widgets_faIcons_allFaIcons__WEBPACK_IMPORTED_MODULE_2__["default"][namespace].map(function (icon) {
    if (icons && !icons.includes(icon)) {
      return null;
    }

    if (search && !icon.toLowerCase().includes(search)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      key: "".concat(namespace, "-").concat(icon),
      onClick: function onClick() {
        return _onClick(Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])({
          namespace: namespace,
          icon: icon
        }));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      namespace: namespace,
      icon: icon
    }));
  }));
}

IconsList.propTypes = {
  namespace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IconsList));

/***/ }),

/***/ "./resources/js/constants/chatboxSettingsMenuItemTypes.js":
/*!****************************************************************!*\
  !*** ./resources/js/constants/chatboxSettingsMenuItemTypes.js ***!
  \****************************************************************/
/*! exports provided: TYPE_TRIGGER, TYPE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRIGGER", function() { return TYPE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_URL", function() { return TYPE_URL; });
var TYPE_TRIGGER = "trigger";
var TYPE_URL = "url";

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js ***!
  \***************************************************************************/
/*! exports provided: TAB_BUTTON_BUBBLE_SETTINGS, TAB_HEADER_SETTINGS, TAB_CONTENT_SETTINGS, TAB_CONTENT_MAIN_SETTINGS, TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS, TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS, TAB_CONTENT_USER_MESSAGE_SETTINGS, TAB_CONTENT_USER_INPUT_SETTINGS, TAB_CONTENT_USER_SEND_BUTTON_SETTINGS, TAB_FOOTER_SETTINGS, TAB_MENU_SETTINGS, TAB_GLOBAL_SETTINGS, COLORS_LIST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_BUTTON_BUBBLE_SETTINGS", function() { return TAB_BUTTON_BUBBLE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_HEADER_SETTINGS", function() { return TAB_HEADER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_SETTINGS", function() { return TAB_CONTENT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_MAIN_SETTINGS", function() { return TAB_CONTENT_MAIN_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS", function() { return TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS", function() { return TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_MESSAGE_SETTINGS", function() { return TAB_CONTENT_USER_MESSAGE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_INPUT_SETTINGS", function() { return TAB_CONTENT_USER_INPUT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_SEND_BUTTON_SETTINGS", function() { return TAB_CONTENT_USER_SEND_BUTTON_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_FOOTER_SETTINGS", function() { return TAB_FOOTER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_MENU_SETTINGS", function() { return TAB_MENU_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_GLOBAL_SETTINGS", function() { return TAB_GLOBAL_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS_LIST", function() { return COLORS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBoxConfigsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_BubbleButtonSettings_BubbleButtonSettingsContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_HeaderSettings_HeaderSettingsContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_FooterSettings_FooterSettingsContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuSettingsContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_GlobalSettings_GlobalSettingsContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/BaseNavLink */ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var TAB_BUTTON_BUBBLE_SETTINGS = "button-bubble-settings";
var TAB_HEADER_SETTINGS = "header-settings";
var TAB_CONTENT_SETTINGS = "content-settings";
var TAB_CONTENT_MAIN_SETTINGS = "content-main-settings";
var TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS = "content-chat-bot-oro-operator-settings";
var TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS = "content-bot-message-button-settings";
var TAB_CONTENT_USER_MESSAGE_SETTINGS = "content-user-message-settings";
var TAB_CONTENT_USER_INPUT_SETTINGS = "content-user-input-settings";
var TAB_CONTENT_USER_SEND_BUTTON_SETTINGS = "content-user-send-button-settings";
var TAB_FOOTER_SETTINGS = "footer-settings";
var TAB_MENU_SETTINGS = "menu-settings";
var TAB_GLOBAL_SETTINGS = "global-settings";
var COLORS_LIST = [];
function ChatBoxConfigsForm(_ref) {
  var onSubmit = _ref.onSubmit,
      defaultData = _ref.defaultData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(TAB_BUTTON_BUBBLE_SETTINGS),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeSubTab = _useState4[0],
      setActiveSubTab = _useState4[1];

  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (tab) {
    return setActiveTab(tab);
  }, [setActiveTab]);
  var toggleSubTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (tab) {
    return setActiveSubTab(tab);
  }, [setActiveSubTab]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "integration-form",
    initialValues: _objectSpread({}, defaultData),
    handleSubmit: onSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;
      var tabContent;

      switch (activeTab) {
        case TAB_BUTTON_BUBBLE_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_BubbleButtonSettings_BubbleButtonSettingsContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setFieldValue: setFieldValue,
            handleChange: handleChange,
            handleBlur: handleBlur,
            values: values,
            errors: errors
          });
          break;

        case TAB_HEADER_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_HeaderSettings_HeaderSettingsContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            errors: errors
          });
          break;

        case TAB_CONTENT_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
            activeSubTab: activeSubTab,
            setFieldValue: setFieldValue,
            values: values,
            errors: errors
          });
          break;

        case TAB_FOOTER_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_FooterSettings_FooterSettingsContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            errors: errors
          });
          break;

        case TAB_MENU_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuSettingsContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            errors: errors
          });
          break;

        case TAB_GLOBAL_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_GlobalSettings_GlobalSettingsContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            errors: errors
          });
          break;

        default:
          tabContent = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        id: "name",
        label: t("chatBoxConfigs.form.name-label"),
        placeholder: t("chatBoxConfigs.form.name-placeholder"),
        name: "name",
        value: values.name || "",
        onChange: handleChange,
        onBlur: handleBlur,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 2
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chatbox-config-tabs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: TAB_BUTTON_BUBBLE_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.bubble-button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: TAB_HEADER_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.header")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggle: toggle,
        activeTab: activeTab,
        toggleSubTab: toggleSubTab,
        activeSubTab: activeSubTab
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: TAB_FOOTER_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.footer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: TAB_MENU_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: TAB_GLOBAL_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.global-settings")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 10
      }, tabContent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        disabled: isSubmitting
      }, t("common.saveBtnText"))));
    }
  });
}
ChatBoxConfigsForm.propTypes = {
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigFontsOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadConfigFontsOptions() {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-box-configs/available-fonts").data(function (data) {
      resolve(data.map(function (item) {
        return {
          label: item,
          value: item
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prepareDataToSubmit; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function prepareDataToSubmit(values) {
  var name = values.name,
      default_chat_bot_image_id = values.default_chat_bot_image_id,
      chat_logo_id = values.chat_logo_id,
      data = _objectWithoutProperties(values, ["name", "default_chat_bot_image_id", "chat_logo_id"]);

  return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
    name: name,
    default_chat_bot_image_id: default_chat_bot_image_id && default_chat_bot_image_id.length ? default_chat_bot_image_id[0] : null,
    chat_logo_id: chat_logo_id && chat_logo_id.length ? chat_logo_id[0] : null,
    data: data
  }).toJS();
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prepareDefaultValue; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function prepareDefaultValue(data) {
  var default_chat_bot_image_id = data.default_chat_bot_image_id,
      chat_logo_id = data.chat_logo_id,
      button_start_chat_text = data.button_start_chat_text,
      bubble_button_icon = data.bubble_button_icon,
      window_title = data.window_title,
      start_btn_text = data.start_btn_text,
      user_input_placeholder_text = data.user_input_placeholder_text,
      menu_badge_text = data.menu_badge_text,
      menu_items = data.menu_items,
      normalData = _objectWithoutProperties(data, ["default_chat_bot_image_id", "chat_logo_id", "button_start_chat_text", "bubble_button_icon", "window_title", "start_btn_text", "user_input_placeholder_text", "menu_badge_text", "menu_items"]);

  return _objectSpread(_objectSpread({}, normalData), {}, {
    button_start_chat_text: button_start_chat_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(button_start_chat_text) : null,
    bubble_button_icon: bubble_button_icon ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(bubble_button_icon) : null,
    window_title: window_title ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(window_title) : null,
    start_btn_text: start_btn_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(start_btn_text) : null,
    user_input_placeholder_text: user_input_placeholder_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(user_input_placeholder_text) : null,
    menu_badge_text: menu_badge_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(menu_badge_text) : null,
    menu_items: menu_items ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(menu_items) : null,
    default_chat_bot_image_id: default_chat_bot_image_id ? [default_chat_bot_image_id] : null,
    chat_logo_id: chat_logo_id ? [chat_logo_id] : null
  });
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js ***!
  \**************************************************************************************************************/
/*! exports provided: BUTTON_POSITION_LEFT, BUTTON_POSITION_RIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_POSITION_LEFT", function() { return BUTTON_POSITION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_POSITION_RIGHT", function() { return BUTTON_POSITION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubbleButtonSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/FaChatIconField */ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var BUTTON_POSITION_LEFT = "left";
var BUTTON_POSITION_RIGHT = "right";
var fas = ["sms", "comments", "comment-dots", "comment-alt", "comment", "headset", "phone-alt", "phone"];
var far = ["comments", "comment-dots", "comment-alt", "comment"];
var fab = ["rocketchat"];
var onlyIcons = {
  far: far,
  fab: fab,
  fas: fas
};
function BubbleButtonSettingsContent(_ref) {
  var handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_13__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.button-position.".concat(BUTTON_POSITION_LEFT)),
    value: BUTTON_POSITION_LEFT
  }, {
    label: t("chatBoxConfigs.button-position.".concat(BUTTON_POSITION_RIGHT)),
    value: BUTTON_POSITION_RIGHT
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      positionOptions = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_BUTTON_BUBBLE_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "button_size",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-size-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.button-size-placeholder"),
    name: "button_size",
    value: values.button_size,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "auto_open_time",
    label: t("chatBoxConfigs.form.screen-bubble-button.auto-open-time-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.auto-open-time-placeholder"),
    name: "auto_open_time",
    value: values.auto_open_time,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: t("chatBoxConfigs.form.screen-bubble-button.button-position-label"),
    name: "button_position",
    value: values.button_position,
    setFieldValue: setFieldValue,
    options: positionOptions,
    errors: errors,
    isClearable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "button_animation",
    name: "button_animation",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-animation-label"),
    value: values.button_animation,
    setFieldValue: setFieldValue,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "button_start_chat_text",
    name: "button_start_chat_text",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-start-chat-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.button-start-chat-text-label"),
    value: values.button_start_chat_text,
    setFieldValue: setFieldValue,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "bubble_button_icon",
    name: "bubble_button_icon",
    label: t("chatBoxConfigs.form.screen-bubble-button.bubble-button-icon-label"),
    value: values.bubble_button_icon,
    setFieldValue: setFieldValue,
    errors: errors,
    onlyIcons: onlyIcons
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "button_icon_color",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-icon-color-label"),
    value: values.button_icon_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "button_bg_color",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-bg-color-label"),
    value: values.button_bg_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
BubbleButtonSettingsContent.propTypes = {
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function FooterSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_FOOTER_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "window_footer_color",
    label: t("chatBoxConfigs.form.screen-footer.window-footer-color-label"),
    value: values.window_footer_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "window_footer_bg",
    label: t("chatBoxConfigs.form.screen-footer.window-footer-bg-label"),
    value: values.window_footer_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
FooterSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var _containers_integrations_helpers_loadConfigFontsValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/helpers/loadConfigFontsValue */ "./resources/js/containers/integrations/helpers/loadConfigFontsValue.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_loadConfigFontsOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions */ "./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var FONT_SIZE_SMALL = "sm";
var FONT_SIZE_MIDDLE = "md";
var FONT_SIZE_LARGE = "lg";
function GlobalSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_SMALL)),
    value: FONT_SIZE_SMALL
  }, {
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_MIDDLE)),
    value: FONT_SIZE_MIDDLE
  }, {
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_LARGE)),
    value: FONT_SIZE_LARGE
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      fontSizeOptions = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_GLOBAL_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: t("chatBoxConfigs.form.screen-global.global-font-size-label"),
    name: "global_font_size",
    value: values.global_font_size,
    setFieldValue: setFieldValue,
    options: fontSizeOptions,
    errors: errors,
    isClearable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: t("chatBoxConfigs.form.screen-global.global-font-family-label"),
    name: "global_font_family",
    value: values.global_font_family,
    setFieldValue: setFieldValue,
    loadOptions: _containers_chatBoxConfigs_form_helpers_loadConfigFontsOptions__WEBPACK_IMPORTED_MODULE_9__["default"],
    loadValue: _containers_integrations_helpers_loadConfigFontsValue__WEBPACK_IMPORTED_MODULE_7__["default"],
    errors: errors,
    isClearable: false
  }));
}
GlobalSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _components_form_ImageField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/ImageField */ "./resources/js/components/form/ImageField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");











function HeaderSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_HEADER_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "window_header_color",
    label: t("chatBoxConfigs.form.screen-header.window-header-color-label"),
    value: values.window_header_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "window_header_bg",
    label: t("chatBoxConfigs.form.screen-header.window-header-bg-label"),
    value: values.window_header_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ImageField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "chat_logo_id",
    name: "chat_logo_id",
    label: t("chatBoxConfigs.form.screen-header.chat-logo-label"),
    setFieldValue: setFieldValue,
    value: values.chat_logo_id,
    errors: errors,
    maxFilesCount: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "window_title",
    name: "window_title",
    label: t("chatBoxConfigs.form.screen-header.window-title-label"),
    placeholder: t("chatBoxConfigs.form.screen-header.window-title-placeholder"),
    value: values.window_title,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
HeaderSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabMainSettingsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotOrOperatorMessageSettingsContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotMessageButtonsSettingsContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserMessageSettingsContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserInputSettingsContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserSendButtonSettingsContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js");









function MainSettingsContent(_ref) {
  var activeSubTab = _ref.activeSubTab,
      values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  switch (activeSubTab) {
    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_MAIN_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabMainSettingsContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotOrOperatorMessageSettingsContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotMessageButtonsSettingsContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_MESSAGE_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserMessageSettingsContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_INPUT_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserInputSettingsContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserSendButtonSettingsContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        values: values,
        setFieldValue: setFieldValue,
        errors: errors
      });

    default:
      return null;
  }
}
MainSettingsContent.propTypes = {
  activeSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSettingsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/BaseNavLink */ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js");
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function MainSettingsTab(_ref) {
  var activeTab = _ref.activeTab,
      toggle = _ref.toggle,
      activeSubTab = _ref.activeSubTab,
      toggleSubTab = _ref.toggleSubTab;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    toggle(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_SETTINGS"]);
    toggleSubTab(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_MAIN_SETTINGS"]);
  }, [toggle, toggleSubTab]);
  var isActive = _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_SETTINGS"] === activeTab;

  if (isActive) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "active my-cool-tab-with-sub-tabs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-cool-subtab-title"
    }, t("chatBoxConfigs.form.tab.content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-cool-sub-tabs-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_MAIN_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-main")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-bot-or-operator-message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-bot-message-button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_MESSAGE_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_INPUT_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-input")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-send-button"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeTab: activeTab,
    toggle: onClick,
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]
  }, t("chatBoxConfigs.form.tab.content"));
}
MainSettingsTab.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  activeSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggleSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabBotMessageButtonsSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabBotMessageButtonsSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "bot_message_button_bg",
    label: t("chatBoxConfigs.form.screen-content.bot-message-button.bot-message-button-bg-label"),
    value: values.bot_message_button_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "bot_message_button_color",
    label: t("chatBoxConfigs.form.screen-content.bot-message-button.bot-message-button-color-label"),
    value: values.bot_message_button_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabBotMessageButtonsSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabBotMessageButtonsSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _components_form_ImageField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/ImageField */ "./resources/js/components/form/ImageField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");










function SubTabBotMessageButtonsSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ImageField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "default_chat_bot_image_id",
    name: "default_chat_bot_image_id",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.default-chatbot-image-label"),
    setFieldValue: setFieldValue,
    value: values.default_chat_bot_image_id,
    errors: errors,
    maxFilesCount: 1,
    types: ["image/*"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "bot_or_operator_msg_bg",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.bot-or-operator-message-bg-label"),
    value: values.bot_or_operator_msg_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "bot_or_operator_msg_color",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.bot-or-operator-message-color-label"),
    value: values.bot_or_operator_msg_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabBotMessageButtonsSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabMainSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");










function SubTabMainSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_MAIN_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "content_bg",
    label: t("chatBoxConfigs.form.screen-content.main.content-bg-label"),
    value: values.content_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "start_btn_bg",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-bg-label"),
    value: values.start_btn_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "start_btn_color",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-color-label"),
    value: values.start_btn_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "start_btn_text",
    name: "start_btn_text",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-content.main.start-btn-text-placeholder"),
    value: values.start_btn_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
SubTabMainSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserInputSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");










function SubTabUserInputSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_INPUT_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_text_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-text-color-label"),
    value: values.user_input_text_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_placeholder_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-color-label"),
    value: values.user_input_placeholder_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_bg",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-bg-label"),
    value: values.user_input_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_file_name_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-file-name-color-label"),
    value: values.user_input_file_name_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "user_input_placeholder_text",
    name: "user_input_placeholder_text",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-placeholder"),
    value: values.user_input_placeholder_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
SubTabUserInputSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserMessageSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabUserMessageSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_MESSAGE_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_message_bg",
    label: t("chatBoxConfigs.form.screen-content.user-message.user-message-bg-label"),
    value: values.user_message_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_message_color",
    label: t("chatBoxConfigs.form.screen-content.user-message.user-message-color-label"),
    value: values.user_message_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabUserMessageSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserSendButtonSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabUserSendButtonSettingsContent(_ref) {
  var values = _ref.values,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_send_button_bg",
    label: t("chatBoxConfigs.form.screen-content.user-send-button.user-input-send-button-bg-label"),
    value: values.user_input_send_button_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "user_input_send_button_color",
    label: t("chatBoxConfigs.form.screen-content.user-send-button.user-input-send-button-color-label"),
    value: values.user_input_send_button_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabUserSendButtonSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Card */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/CardBody */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/FaChatIconField */ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");












function MenuItem(_ref) {
  var name = _ref.name,
      index = _ref.index,
      value = _ref.value,
      _setFieldValue = _ref.setFieldValue,
      onRemove = _ref.onRemove,
      typeOptions = _ref.typeOptions,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "".concat(name, ".").concat(index, ".text"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-item-text-placeholder"),
    value: value.get("text"),
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("text", val));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "".concat(name, ".").concat(index, ".icon"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-icon-label"),
    value: value.get("icon"),
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("icon", val));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "".concat(name, ".").concat(index, ".type"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-type-label"),
    value: value.get("type"),
    options: typeOptions,
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("type", val));
    },
    errors: errors,
    isClearable: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "".concat(name, ".").concat(index, ".value"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-value-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-item-value-placeholder"),
    value: value.get("value"),
    onChange: function onChange(e) {
      _setFieldValue(value.set("value", e.target.value));
    },
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !onRemove,
    type: "button",
    onClick: onRemove
  }, "-")));
}

MenuItem.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  typeOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuItem));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/chatboxSettingsMenuItemTypes */ "./resources/js/constants/chatboxSettingsMenuItemTypes.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var initialItem = Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])({
  text: {
    en: ""
  },
  type: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"],
  value: "",
  icon: null
});

function MenuItemsField(_ref) {
  var name = _ref.name,
      values = _ref.values,
      errors = _ref.errors,
      _setFieldValue = _ref.setFieldValue;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.menu-item-type.".concat(_constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"])),
    value: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"]
  }, {
    label: t("chatBoxConfigs.menu-item-type.".concat(_constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_URL"])),
    value: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_URL"]
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      typeOptions = _useState2[0];

  var canRemove = values.size > 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, values.map(function (item, index) {
    var onRemove = function onRemove() {
      _setFieldValue(name, values.remove(index));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      index: index,
      name: name,
      value: values.get(index),
      isDisabled: values.size <= 1,
      setFieldValue: function setFieldValue(value) {
        _setFieldValue(name, values.set(index, value));
      },
      onRemove: canRemove ? onRemove : null,
      typeOptions: typeOptions,
      errors: errors
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      _setFieldValue(name, values.set(values.size, initialItem));
    }
  }, "+"));
}

MenuItemsField.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuItemsField));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder */ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItemsField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");












function MenuSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_MENU_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_PreviewPlaceHolder__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "menu_show_badge",
    name: "menu_show_badge",
    label: t("chatBoxConfigs.form.screen-menu.menu-show-badge-label"),
    value: values.menu_show_badge,
    setFieldValue: setFieldValue,
    errors: errors
  })), values.menu_show_badge ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "menu_badge_bg",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-bg-label"),
    value: values.menu_badge_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "menu_badge_color",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-color-label"),
    value: values.menu_badge_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "menu_badge_text",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-badge-text-placeholder"),
    value: values.menu_badge_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "menu_bg",
    label: t("chatBoxConfigs.form.screen-menu.menu-bg-label"),
    value: values.menu_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "menu_item_color",
    label: t("chatBoxConfigs.form.screen-menu.menu-item-color-label"),
    value: values.menu_item_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItemsField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "menu_items",
    values: values.menu_items,
    errors: errors,
    setFieldValue: setFieldValue
  }))));
}
MenuSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function BaseNavLink(_ref) {
  var activeTab = _ref.activeTab,
      type = _ref.type,
      toggle = _ref.toggle,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("chatbox-tab d-block", {
      active: activeTab === type
    }),
    onClick: function onClick() {
      toggle(type);
    }
  }, children);
}

BaseNavLink.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BaseNavLink));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");





function ContentPanel(_ref) {
  var type = _ref.type,
      children = _ref.children,
      renderPreview = _ref.renderPreview;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sm: renderPreview ? 6 : 12
  }, children), renderPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sm: 6
  }, renderPreview()) : null));
}

ContentPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ContentPanel));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var _components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/faIcons/picker/IconsList */ "./resources/js/components/widgets/faIcons/picker/IconsList.js");
/* harmony import */ var _components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/faIcons/FaIcon */ "./resources/js/components/widgets/faIcons/FaIcon.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Modal */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/ModalBody */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Picker(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onlyIcons = _ref.onlyIcons;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  var toggle = function toggle() {
    if (open) {
      setOpen(false);
      setSearch("");
    } else {
      setOpen(true);
    }
  };

  var handleChange = function handleChange(val) {
    onChange(val);
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("my-cool-dropdown", {
      open: open
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: toggle
  }, value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: value.get("icon"),
    namespace: value.get("namespace")
  }) : t("chatBoxConfigs.form.select-icon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: open,
    toggle: toggle,
    className: "my-cool-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxHeight: 500,
      overflow: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "fas",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["fas"] : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "far",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["far"] : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "fab",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["fab"] : null
  })))));
}

Picker.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onlyIcons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function FaChatIconField(_ref2) {
  var _errors$name;

  var id = _ref2.id,
      name = _ref2.name,
      label = _ref2.label,
      value = _ref2.value,
      setFieldValue = _ref2.setFieldValue,
      errors = _ref2.errors,
      onlyIcons = _ref2.onlyIcons;
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return setFieldValue(name, value);
  }, [name, setFieldValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_2__["default"], null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picker, {
    value: value,
    onChange: onChange,
    onlyIcons: onlyIcons
  }), errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    errors: errors[name]
  }) : null);
}

FaChatIconField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onlyIcons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FaChatIconField));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/PreviewPlaceHolder.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PreviewPlaceHolder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "preview placeholder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur maxime modi natus nemo nihil quibusdam, quidem vero vitae. Animi blanditiis commodi consequuntur cum, dolorem fugiat incidunt modi provident quibusdam ullam, velit voluptas? Alias asperiores beatae corporis cum, dignissimos doloremque dolores, ducimus eligendi eveniet inventore ipsam optio quas ullam unde."));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PreviewPlaceHolder));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_commonData_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/commonData/actionCreators */ "./resources/js/redux/reducers/commonData/actionCreators.js");
/* harmony import */ var reactstrap_es_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Spinner */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function TranslatableTextField(_ref) {
  var _errors$name;

  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      label = _ref.label,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  if (value) {
    value = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["isImmutable"])(value) ? value : Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])(value);
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var locales = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$commonData$get;

    return (_state$commonData$get = state.commonData.get("availableLocales")) === null || _state$commonData$get === void 0 ? void 0 : _state$commonData$get.toJS();
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_commonData_actionCreators__WEBPACK_IMPORTED_MODULE_4__["loadAvailableLocales"])()).then(function (data) {
      var _data$;

      if ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.locale) {
        var _data$2;

        setActiveTab((_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.locale);
      }
    });
  }, [dispatch]);

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (!locales) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_8__["default"], null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    tabs: true
  }, locales.map(function (localeItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
      key: localeItem.locale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        active: activeTab === localeItem.locale
      }),
      onClick: function onClick() {
        toggle(localeItem.locale);
      }
    }, localeItem.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabContent"], {
    activeTab: activeTab
  }, locales.map(function (localeItem) {
    var fieldValue = value && value.get(localeItem.locale) ? value.get(localeItem.locale) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
      key: localeItem.locale,
      tabId: localeItem.locale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "".concat(name, "[").concat(localeItem.locale, "]"),
      value: fieldValue || "",
      placeholder: placeholder,
      onChange: function onChange(e) {
        var newValue = value;

        if (newValue) {
          newValue = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["isImmutable"])(newValue) ? newValue : Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])(newValue);
        } else {
          newValue = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])({});
        }

        newValue = newValue.set(localeItem.locale, e.target.value);
        setFieldValue(name, newValue);
      }
    }));
  })), errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_9__["default"], {
    errors: errors[name]
  }) : null);
}

TranslatableTextField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TranslatableTextField));

/***/ }),

/***/ "./resources/js/containers/integrations/helpers/loadConfigFontsValue.js":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/integrations/helpers/loadConfigFontsValue.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigFontsValue; });
function loadConfigFontsValue(font) {
  return new Promise(function (resolve) {
    resolve({
      label: font,
      value: font
    });
  });
}

/***/ }),

/***/ "./resources/js/redux/reducers/commonData/actionCreators.js":
/*!******************************************************************!*\
  !*** ./resources/js/redux/reducers/commonData/actionCreators.js ***!
  \******************************************************************/
/*! exports provided: loadAvailableLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAvailableLocales", function() { return loadAvailableLocales; });
/* harmony import */ var _redux_reducers_commonData_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/commonData/actionTypes */ "./resources/js/redux/reducers/commonData/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");



var availableLocalesLoaded = function availableLocalesLoaded(item) {
  return {
    type: _redux_reducers_commonData_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].AVAILABLE_LOCALES_LOADED,
    payload: item
  };
};

var loadAvailableLocales = function loadAvailableLocales() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      var availableLocales = getState().commonData.get("availableLocales");

      if (!availableLocales) {
        _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", window.availableLanguagesListUrl).data(function (data) {
          dispatch(availableLocalesLoaded(data));
          resolve(data);
        });
      } else {
        resolve(availableLocales.toJS());
      }
    });
  };
};

/***/ })

}]);