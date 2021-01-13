(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/*! exports provided: popperGenerator, createPopper, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return popperGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/orderModifiers.js */ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/debounce.js */ "./node_modules/@popperjs/core/lib/utils/debounce.js");
/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validateModifiers.js */ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js");
/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/uniqueBy.js */ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/mergeByName.js */ "./node_modules/@popperjs/core/lib/utils/mergeByName.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@popperjs/core/lib/enums.js");














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_12__["isElement"])(reference) ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference) : reference.contextElement ? Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(reference.contextElement) : [],
          popper: Object(_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_10__["default"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = Object(_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_8__["default"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_7__["default"])(modifiers);

          if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_9__["default"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_13__["auto"]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(reference, Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper), state.options.strategy === 'fixed'),
          popper: Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isShadowRoot"])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBoundingClientRect; });
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getClippingRect; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getViewportRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js");
/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js");
/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listScrollParents.js */ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js");
/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");














function getInnerBoundingClientRect(element) {
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_8__["default"])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_0__["viewport"] ? Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getViewportRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) : Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(_listScrollParents_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_9__["default"])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isHTMLElement"])(element) ? Object(_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(element) : element;

  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_7__["isElement"])(clippingParent) && Object(_contains_js__WEBPACK_IMPORTED_MODULE_10__["default"])(clippingParent, clipperElement) && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_11__["default"])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCompositeRect; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(offsetParent);
  var rect = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(documentElement)) {
      scroll = Object(_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent);
    }

    if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(offsetParent)) {
      offsets = Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_4__["default"])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getComputedStyle(element) {
  return Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element).getComputedStyle(element);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentElement; });
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__["isElement"])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDocumentRect; });
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var winScroll = Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element);
  var y = -winScroll.scrollTop;

  if (Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getHTMLElementScroll; });
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLayoutRect; });
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeName; });
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getNodeScroll; });
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js");




function getNodeScroll(node) {
  if (node === Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node) || !Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_2__["isHTMLElement"])(node)) {
    return Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  } else {
    return Object(_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
  }
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOffsetParent; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTableElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");








function getTrueOffsetParent(element) {
  if (!Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__["default"])(offsetParent);

    if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_5__["default"])(element);

  while (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(currentNode) && ['html', 'body'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentNode)) < 0) {
    var css = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(_isTableElement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(offsetParent) && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__["default"])(offsetParent) === 'body' && Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParentNode; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");


function getParentNode(element) {
  if (Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe[incompatible-return]: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element) // fallback

  );
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollParent; });
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(_instanceOf_js__WEBPACK_IMPORTED_MODULE_3__["isHTMLElement"])(node) && Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
    return node;
  }

  return getScrollParent(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getViewportRect; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js");



function getViewportRect(element) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var html = Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element),
    y: y
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindow; });
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScroll; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

function getWindowScroll(node) {
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWindowScrollBarX; });
/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js");



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element)).left + Object(_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(element).scrollLeft;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/*! exports provided: isElement, isHTMLElement, isShadowRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHTMLElement", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isScrollParent; });
/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTableElement; });
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) >= 0;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listScrollParents; });
/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js");
/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getParentNode.js */ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js");
/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNodeName.js */ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js");
/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isScrollParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js");





/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  var isBody = Object(_getNodeName_js__WEBPACK_IMPORTED_MODULE_2__["default"])(scrollParent) === 'body';
  var win = Object(_getWindow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(_isScrollParent_js__WEBPACK_IMPORTED_MODULE_4__["default"])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(_getParentNode_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target)));
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/*! exports provided: top, bottom, right, left, auto, basePlacements, start, end, clippingParents, viewport, popper, reference, variationPlacements, placements, beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite, modifierPhases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bottom", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auto", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePlacements", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clippingParents", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewport", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popper", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reference", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeRead", function() { return beforeRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterRead", function() { return afterRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeMain", function() { return beforeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterMain", function() { return afterMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return beforeWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return write; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterWrite", function() { return afterWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/contains.js */ "./node_modules/@popperjs/core/lib/dom-utils/contains.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");









 // eslint-disable-next-line import/no-unused-modules

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.placement);
  var axis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(basePlacement);
  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_8__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrowElement);
  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["left"];
  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_8__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_8__["right"];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_5__["default"])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_9__["isHTMLElement"])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: Object(_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof padding !== 'number' ? padding : Object(_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_7__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_8__["basePlacements"]))
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/*! exports provided: mapToStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToStyles", function() { return mapToStyles; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(popper);

    if (offsetParent === Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(popper)) {
      offsetParent = Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(popper);
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"]) {
      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"];
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]) {
      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = Object(_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js");
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"]) {
    return [];
  }

  var oppositePlacement = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  return [Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(placement), oppositePlacement, Object(_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["auto"] ? Object(_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement);

    var isStartVariation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_6__["default"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_5__["start"];
    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["right"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["left"] : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["top"];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    }

    var altVariationSide = Object(_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"], _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/*! exports provided: distanceAndSkiddingToXY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distanceAndSkiddingToXY", function() { return distanceAndSkiddingToXY; });
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["top"]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__["left"], _enums_js__WEBPACK_IMPORTED_MODULE_1__["right"]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getAltAxis.js */ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js");
/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/within.js */ "./node_modules/@popperjs/core/lib/utils/within.js");
/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js");
/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js");
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");











function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_7__["default"])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state.placement);
  var variation = Object(_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_8__["default"])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement);
  var altAxis = Object(_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_3__["default"])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];
    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_0__["start"] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__["default"])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__["default"])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["top"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["left"];

    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_0__["bottom"] : _enums_js__WEBPACK_IMPORTED_MODULE_0__["right"];

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = Object(_utils_within_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-base.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-base.js ***!
  \********************************************************/
/*! exports provided: createPopper, popperGenerator, detectOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopper.js */ "./node_modules/@popperjs/core/lib/createPopper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["createPopper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["popperGenerator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return _createPopper_js__WEBPACK_IMPORTED_MODULE_0__["detectOverflow"]; });


// eslint-disable-next-line import/no-unused-modules


/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeAutoPlacement; });
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js");
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");





/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["placements"] : _options$allowedAutoP;
  var variation = Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement);
  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"] : _enums_js__WEBPACK_IMPORTED_MODULE_1__["variationPlacements"].filter(function (placement) {
    return Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) === variation;
  }) : _enums_js__WEBPACK_IMPORTED_MODULE_1__["basePlacements"];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__["default"])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeOffsets; });
/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js");
/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ "./node_modules/@popperjs/core/lib/utils/getVariation.js");
/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__["default"])(placement) : null;
  var variation = placement ? Object(_getVariation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["top"]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["bottom"]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["right"]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums_js__WEBPACK_IMPORTED_MODULE_3__["left"]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["start"]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums_js__WEBPACK_IMPORTED_MODULE_3__["end"]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectOverflow; });
/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js");
/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js");
/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js");
/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./computeOffsets.js */ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js");
/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rectToClientRect.js */ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js");
/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mergePaddingObject.js */ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js");
/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expandToHashMap.js */ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js");








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["clippingParents"] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["viewport"] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_7__["default"])(typeof padding !== 'number' ? padding : Object(_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_8__["default"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_5__["basePlacements"]));
  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? _enums_js__WEBPACK_IMPORTED_MODULE_5__["reference"] : _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_6__["isElement"])(element) ? element : element.contextElement || Object(_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__["default"])(referenceElement);
  var popperOffsets = Object(_computeOffsets_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_5__["popper"] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["right"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_5__["top"], _enums_js__WEBPACK_IMPORTED_MODULE_5__["bottom"]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandToHashMap; });
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAltAxis; });
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBasePlacement; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFreshSideObject; });
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMainAxisFromPlacement; });
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositePlacement; });
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOppositeVariationPlacement; });
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getVariation; });
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeByName; });
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergePaddingObject; });
/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js");

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, Object(_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])()), paddingObject);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return orderModifiers; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums_js__WEBPACK_IMPORTED_MODULE_0__["modifierPhases"].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rectToClientRect; });
function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uniqueBy; });
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validateModifiers; });
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ "./node_modules/@popperjs/core/lib/utils/format.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@popperjs/core/lib/enums.js");


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].indexOf(modifier.phase) < 0) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums_js__WEBPACK_IMPORTED_MODULE_1__["modifierPhases"].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(_format_js__WEBPACK_IMPORTED_MODULE_0__["default"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });
function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCallbackRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["default"] = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useSafeState.js":
/*!*********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useSafeState.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");



function useSafeState(state) {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return [state[0], Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ __webpack_exports__["default"] = (useSafeState);

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/date-arithmetic/index.js":
/*!***********************************************!*\
  !*** ./node_modules/date-arithmetic/index.js ***!
  \***********************************************/
/*! exports provided: add, subtract, startOf, endOf, eq, neq, gt, gte, lt, lte, min, max, inRange, milliseconds, seconds, minutes, hours, day, date, month, year, decade, century, weekday, diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neq", function() { return neq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return inRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decade", function() { return decade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "century", function() { return century; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekday", function() { return weekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
var MILI    = 'milliseconds'
  , SECONDS = 'seconds'
  , MINUTES = 'minutes'
  , HOURS   = 'hours'
  , DAY     = 'day'
  , WEEK    = 'week'
  , MONTH   = 'month'
  , YEAR    = 'year'
  , DECADE  = 'decade'
  , CENTURY = 'century';

var multiplierMilli = {
  'milliseconds': 1,
  'seconds': 1000,
  'minutes': 60 * 1000,
  'hours': 60 * 60 * 1000,
  'day': 24 * 60 * 60 * 1000,
  'week': 7 * 24 * 60 * 60 * 1000 
}

var multiplierMonth = {
  'month': 1,
  'year': 12,
  'decade': 10 * 12,
  'century': 100 * 12
}

function daysOf(year) {
  return [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

function daysInFeb(year) {
  return (
      year % 4 === 0 
      && year % 100 !== 0
    ) || year % 400 === 0
      ? 29
      : 28
}

function add(d, num, unit) {
  d = new Date(d)

  switch (unit){
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit])
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit])
  }

  throw new TypeError('Invalid units: "' + unit + '"')
}

function addMillis(d, num) {
  var nextDate = new Date(+(d) + num)

  return solveDST(d, nextDate)
}

function addMonths(d, num) {
  var year = d.getFullYear()
    , month = d.getMonth()
    , day = d.getDate()
    , totalMonths = year * 12 + month + num
    , nextYear = Math.trunc(totalMonths / 12)
    , nextMonth = totalMonths % 12
    , nextDay = Math.min(day, daysOf(nextYear)[nextMonth])

  var nextDate = new Date(d)
  nextDate.setFullYear(nextYear)

  // To avoid a bug when sets the Feb month
  // with a date > 28 or date > 29 (leap year)
  nextDate.setDate(1)

  nextDate.setMonth(nextMonth)
  nextDate.setDate(nextDay)

  return nextDate
}

function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset()
    , nextOffset = nextDate.getTimezoneOffset()

  // if is DST, add the difference in minutes
  // else the difference is zero
  var diffMinutes = (nextOffset - currentOffset)

  return new Date(+(nextDate) + diffMinutes * multiplierMilli['minutes'])
}

function subtract(d, num, unit) {
  return add(d, -num, unit)
}

function startOf(d, unit, firstOfWeek) {
  d = new Date(d)

  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
        d = month(d, 0);
    case MONTH:
        d = date(d, 1);
    case WEEK:
    case DAY:
        d = hours(d, 0);
    case HOURS:
        d = minutes(d, 0);
    case MINUTES:
        d = seconds(d, 0);
    case SECONDS:
        d = milliseconds(d, 0);
  }

  if (unit === DECADE)
    d = subtract(d, year(d) % 10, 'year')

  if (unit === CENTURY)
    d = subtract(d, year(d) % 100, 'year')

  if (unit === WEEK)
    d = weekday(d, 0, firstOfWeek);

  return d
}

function endOf(d, unit, firstOfWeek){
  d = new Date(d)
  d = startOf(d, unit, firstOfWeek)
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit)
      d = subtract(d, 1, DAY)
      d.setHours(23, 59, 59, 999)
      break;
    case DAY:
      d.setHours(23, 59, 59, 999)
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit)
      d = subtract(d, 1, MILI)
  }
  return d
}

var eq =  createComparer(function(a, b){ return a === b })
var neq = createComparer(function(a, b){ return a !== b })
var gt =  createComparer(function(a, b){ return a > b })
var gte = createComparer(function(a, b){ return a >= b })
var lt =  createComparer(function(a, b){ return a < b })
var lte = createComparer(function(a, b){ return a <= b })

function min(){
  return new Date(Math.min.apply(Math, arguments))
}

function max(){
  return new Date(Math.max.apply(Math, arguments))
}

function inRange(day, min, max, unit){
  unit = unit || 'day'

  return (!min || gte(day, min, unit))
      && (!max || lte(day, max, unit))
}

var milliseconds = createAccessor('Milliseconds')
var seconds =      createAccessor('Seconds')
var minutes =      createAccessor('Minutes')
var hours =        createAccessor('Hours')
var day =          createAccessor('Day')
var date =         createAccessor('Date')
var month =        createAccessor('Month')
var year =         createAccessor('FullYear')

function decade(d, val) {
  return val === undefined
    ? year(startOf(d, DECADE))
    : add(d, val + 10, YEAR);
}

function century(d, val) {
  return val === undefined
    ? year(startOf(d, CENTURY))
    : add(d, val + 100, YEAR);
}

function weekday(d, val, firstDay) {
    var w = (day(d) + 7 - (firstDay || 0) ) % 7;

    return val === undefined
      ? w
      : add(d, val - w, DAY);
}

function diff(date1, date2, unit, asFloat) {
  var dividend, divisor, result;

  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime(); break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1); break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }

  switch (unit) {
    case MILI:
        divisor = 1; break;
    case SECONDS:
        divisor = 1000; break;
    case MINUTES:
        divisor = 1000 * 60; break;
    case HOURS:
        divisor = 1000 * 60 * 60; break;
    case DAY:
        divisor = 1000 * 60 * 60 * 24; break;
    case WEEK:
        divisor = 1000 * 60 * 60 * 24 * 7; break;
    case MONTH:
        divisor = 1; break;
    case YEAR:
        divisor = 12; break;
    case DECADE:
        divisor = 120; break;
    case CENTURY:
        divisor = 1200; break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }

  result = dividend / divisor;

  return asFloat ? result : Math.round(result);
}

function createAccessor(method){
  var hourLength = (function(method) {  
    switch(method) {
      case 'Milliseconds':
        return 3600000;
      case 'Seconds':
        return 3600;
      case 'Minutes':
        return 60;
      case 'Hours':
        return 1;
      default:
        return null;
    }
  })(method);
  
  return function(d, val){
    if (val === undefined)
      return d['get' + method]()

    var dateOut = new Date(d)
    dateOut['set' + method](val)
    
    if(hourLength && dateOut['get'+method]() != val && (method === 'Hours' || val >=hourLength && (dateOut.getHours()-d.getHours()<Math.floor(val/hourLength))) ){
      //Skip DST hour, if it occurs
      dateOut['set'+method](val+hourLength);
    }
    
    return dateOut
  }
}

function createComparer(operator) {
  return function (a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit))
  };
}


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addEventListener.js ***!
  \**********************************************************/
/*! exports provided: optionsSupported, onceSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsSupported", function() { return optionsSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceSupported", function() { return onceSupported; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ __webpack_exports__["default"] = (addEventListener);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/animationFrame.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/animationFrame.js ***!
  \********************************************************/
/*! exports provided: cancel, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");


/* https://github.com/component/raf */
var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};

if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  vendors.some(function (vendor) {
    var rafMethod = getKey(vendor, 'request');

    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore

      rafImpl = function rafImpl(cb) {
        return window[rafMethod](cb);
      };
    }

    return !!rafImpl;
  });
}

var cancel = function cancel(id) {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
var request = rafImpl;

/***/ }),

/***/ "./node_modules/dom-helpers/esm/canUseDOM.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/canUseDOM.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/closest.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/esm/closest.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closest; });
/* harmony import */ var _matches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matches */ "./node_modules/dom-helpers/esm/matches.js");

function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  var nextNode = node;

  do {
    if (Object(_matches__WEBPACK_IMPORTED_MODULE_0__["default"])(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);

  return null;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/contains.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/contains.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
/* eslint-disable no-bitwise, no-cond-assign */
// HTML DOM and SVG DOM may have different support levels,
// so we need to check on context instead of a document root element.
function contains(context, node) {
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/css.js":
/*!*********************************************!*\
  !*** ./node_modules/dom-helpers/esm/css.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getComputedStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/esm/getComputedStyle.js");
/* harmony import */ var _hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyphenateStyle */ "./node_modules/dom-helpers/esm/hyphenateStyle.js");
/* harmony import */ var _isTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isTransform */ "./node_modules/dom-helpers/esm/isTransform.js");




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property)) || Object(_getComputedStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getPropertyValue(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
    } else if (Object(_isTransform__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += Object(_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ __webpack_exports__["default"] = (style);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getComputedStyle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getComputedStyle; });
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/dom-helpers/esm/ownerWindow.js");

function getComputedStyle(node, psuedoElement) {
  return Object(_ownerWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, psuedoElement);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getScrollAccessor.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getScrollAccessor.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getscrollAccessor; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");

function getscrollAccessor(offset) {
  var prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';

  function scrollAccessor(node, val) {
    var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);

    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }

    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }

  return scrollAccessor;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/height.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/height.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return height; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");


function height(node, client) {
  var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return win ? win.innerHeight : client ? node.clientHeight : Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(node).height;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenate.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hyphenate; });
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenateStyle.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hyphenateStyleName; });
/* harmony import */ var _hyphenate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/esm/hyphenate.js");
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return Object(_hyphenate__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(msPattern, '-ms-');
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isDocument.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isDocument.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocument; });
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isTransform.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isTransform; });
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isWindow.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isWindow.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isWindow; });
/* harmony import */ var _isDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDocument */ "./node_modules/dom-helpers/esm/isDocument.js");

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (Object(_isDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) return node.defaultView || false;
  return false;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/listen.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/listen.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListener */ "./node_modules/dom-helpers/esm/addEventListener.js");
/* harmony import */ var _removeEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeEventListener */ "./node_modules/dom-helpers/esm/removeEventListener.js");



function listen(node, eventName, handler, options) {
  Object(_addEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(node, eventName, handler, options);
  return function () {
    Object(_removeEventListener__WEBPACK_IMPORTED_MODULE_1__["default"])(node, eventName, handler, options);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (listen);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/matches.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/esm/matches.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return matches; });
var matchesImpl;
function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/offset.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/esm/offset.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return offset; });
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var _scrollLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/esm/scrollLeft.js");
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");




function offset(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(node);
  var box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  var docElem = doc && doc.documentElement; // Make sure it's not a disconnected DOM node

  if (!docElem || !Object(_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + Object(_scrollTop__WEBPACK_IMPORTED_MODULE_3__["default"])(docElem) - (docElem.clientTop || 0),
    left: box.left + Object(_scrollLeft__WEBPACK_IMPORTED_MODULE_2__["default"])(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/offsetParent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/offsetParent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return offsetParent; });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");



var isHTMLElement = function isHTMLElement(e) {
  return !!e && 'offsetParent' in e;
};

function offsetParent(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_1__["default"])(node);
  var parent = node && node.offsetParent;

  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && Object(_css__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }

  return parent || doc.documentElement;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerDocument.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerDocument.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerWindow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerWindow; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc && doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/position.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/position.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return position; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");
/* harmony import */ var _offsetParent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offsetParent */ "./node_modules/dom-helpers/esm/offsetParent.js");
/* harmony import */ var _scrollLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollLeft */ "./node_modules/dom-helpers/esm/scrollLeft.js");
/* harmony import */ var _scrollTop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");







var nodeName = function nodeName(node) {
  return node.nodeName && node.nodeName.toLowerCase();
};

function position(node, offsetParent) {
  var parentOffset = {
    top: 0,
    left: 0
  };
  var offset; // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent

  if (Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    var parent = offsetParent || Object(_offsetParent__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
    offset = Object(_offset__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
    if (nodeName(parent) !== 'html') parentOffset = Object(_offset__WEBPACK_IMPORTED_MODULE_2__["default"])(parent);
    var borderTop = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - Object(_scrollTop__WEBPACK_IMPORTED_MODULE_5__["default"])(parent) || 0;
    var borderLeft = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - Object(_scrollLeft__WEBPACK_IMPORTED_MODULE_4__["default"])(parent) || 0;
  }

  var marginTop = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'marginTop') || 0);
  var marginLeft = String(Object(_css__WEBPACK_IMPORTED_MODULE_1__["default"])(node, 'marginLeft') || 0); // Subtract parent offsets and node margins

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, offset, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/querySelectorAll.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return qsa; });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeEventListener.js":
/*!*************************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeEventListener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (removeEventListener);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollLeft.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollLeft.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollAccessor */ "./node_modules/dom-helpers/esm/getScrollAccessor.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__["default"])('pageXOffset'));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollTop.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollTop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollAccessor */ "./node_modules/dom-helpers/esm/getScrollAccessor.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_getScrollAccessor__WEBPACK_IMPORTED_MODULE_0__["default"])('pageYOffset'));

/***/ }),

/***/ "./node_modules/dom-helpers/esm/scrollbarSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/scrollbarSize.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollbarSize; });
/* harmony import */ var _canUseDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canUseDOM */ "./node_modules/dom-helpers/esm/canUseDOM.js");

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/width.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/esm/width.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWidth; });
/* harmony import */ var _isWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isWindow */ "./node_modules/dom-helpers/esm/isWindow.js");
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offset */ "./node_modules/dom-helpers/esm/offset.js");


function getWidth(node, client) {
  var win = Object(_isWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return win ? win.innerWidth : client ? node.clientWidth : Object(_offset__WEBPACK_IMPORTED_MODULE_1__["default"])(node).width;
}

/***/ }),

/***/ "./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/dom-helpers/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash/_baseRange.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseRange.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ "./node_modules/lodash/_createRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(/*! ./_baseRange */ "./node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "./node_modules/lodash/range.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/range.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(/*! ./_createRange */ "./node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/dist/react-big-calendar.esm.js ***!
  \************************************************************************/
/*! exports provided: Calendar, DateLocalizer, Navigate, Views, components, dateFnsLocalizer, globalizeLocalizer, momentLocalizer, move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateLocalizer", function() { return DateLocalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Views", function() { return views; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFnsLocalizer", function() { return dateFnsLocalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalizeLocalizer", function() { return globalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentLocalizer", function() { return moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return moveDate; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_arithmetic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-arithmetic */ "./node_modules/date-arithmetic/index.js");
/* harmony import */ var lodash_es_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash-es/chunk */ "./node_modules/react-big-calendar/node_modules/lodash-es/chunk.js");
/* harmony import */ var dom_helpers_position__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dom-helpers/position */ "./node_modules/dom-helpers/esm/position.js");
/* harmony import */ var dom_helpers_animationFrame__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dom-helpers/animationFrame */ "./node_modules/dom-helpers/esm/animationFrame.js");
/* harmony import */ var dom_helpers_offset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dom-helpers/offset */ "./node_modules/dom-helpers/esm/offset.js");
/* harmony import */ var dom_helpers_scrollTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! dom-helpers/scrollTop */ "./node_modules/dom-helpers/esm/scrollTop.js");
/* harmony import */ var dom_helpers_scrollLeft__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! dom-helpers/scrollLeft */ "./node_modules/dom-helpers/esm/scrollLeft.js");
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-overlays/Overlay */ "./node_modules/react-overlays/esm/Overlay.js");
/* harmony import */ var dom_helpers_height__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! dom-helpers/height */ "./node_modules/dom-helpers/esm/height.js");
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_closest__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! dom-helpers/closest */ "./node_modules/dom-helpers/esm/closest.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var lodash_es_findIndex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash-es/findIndex */ "./node_modules/react-big-calendar/node_modules/lodash-es/findIndex.js");
/* harmony import */ var lodash_es_range__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash-es/range */ "./node_modules/react-big-calendar/node_modules/lodash-es/range.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash-es/sortBy */ "./node_modules/react-big-calendar/node_modules/lodash-es/sortBy.js");
/* harmony import */ var dom_helpers_width__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! dom-helpers/width */ "./node_modules/dom-helpers/esm/width.js");
/* harmony import */ var dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! dom-helpers/scrollbarSize */ "./node_modules/dom-helpers/esm/scrollbarSize.js");
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var lodash_es_omit__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lodash-es/omit */ "./node_modules/react-big-calendar/node_modules/lodash-es/omit.js");
/* harmony import */ var lodash_es_defaults__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lodash-es/defaults */ "./node_modules/react-big-calendar/node_modules/lodash-es/defaults.js");
/* harmony import */ var lodash_es_transform__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lodash-es/transform */ "./node_modules/react-big-calendar/node_modules/lodash-es/transform.js");
/* harmony import */ var lodash_es_mapValues__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! lodash-es/mapValues */ "./node_modules/react-big-calendar/node_modules/lodash-es/mapValues.js");





































function NoopWrapper(props) {
  return props.children;
}

var navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
var views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};

var viewNames = Object.keys(views).map(function (k) {
  return views[k];
});
var accessor = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]);
var dateFormat = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any;
var dateRangeFormat = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func;
/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 */

var views$1 = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(viewNames)), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.objectOf(function (prop, key) {
  var isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';

  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.apply(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a, [prop, key].concat(args));
  }
})]);
var DayLayoutAlgorithmPropType = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['overlap', 'no-overlap']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]);

function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}

var localePropType = prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]);

function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  !(result == null || typeof result === 'string') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_7___default()(false, '`localizer format(..)` must return a string, null, or undefined') : undefined : void 0;
  return result;
}

var DateLocalizer = function DateLocalizer(spec) {
  var _this = this;

  !(typeof spec.format === 'function') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_7___default()(false, 'date localizer `format(..)` must be a function') : undefined : void 0;
  !(typeof spec.firstOfWeek === 'function') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_7___default()(false, 'date localizer `firstOfWeek(..)` must be a function') : undefined : void 0;
  this.propType = spec.propType || localePropType;
  this.startOfWeek = spec.firstOfWeek;
  this.formats = spec.formats;

  this.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
};
function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  var formats = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, localizer.formats, formatOverrides);

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, localizer, {
    messages: messages,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats[_format2] || _format2, culture);
    }
  });
}

var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return "+" + total + " more";
  }
};
function messages(msgs) {
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultMessages, msgs);
}

/* eslint no-fallthrough: off */
var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
function firstVisibleDay(date, localizer) {
  var firstOfMonth = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(date, 'month');
  return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(firstOfMonth, 'week', localizer.startOfWeek());
}
function lastVisibleDay(date, localizer) {
  var endOfMonth = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["endOf"])(date, 'month');
  return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["endOf"])(endOfMonth, 'week', localizer.startOfWeek());
}
function visibleDays(date, localizer) {
  var current = firstVisibleDay(date, localizer),
      last = lastVisibleDay(date, localizer),
      days = [];

  while (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lte"])(current, last, 'day')) {
    days.push(current);
    current = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(current, 1, 'day');
  }

  return days;
}
function ceil(date, unit) {
  var floor = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(date, unit);
  return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(floor, date) ? floor : Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(floor, 1, unit);
}
function range(start, end, unit) {
  if (unit === void 0) {
    unit = 'day';
  }

  var current = start,
      days = [];

  while (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lte"])(current, end, unit)) {
    days.push(current);
    current = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(current, 1, unit);
  }

  return days;
}
function merge(date, time) {
  if (time == null && date == null) return null;
  if (time == null) time = new Date();
  if (date == null) date = new Date();
  date = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(date, 'day');
  date = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["hours"])(date, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["hours"])(time));
  date = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["minutes"])(date, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["minutes"])(time));
  date = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["seconds"])(date, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["seconds"])(time));
  return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["milliseconds"])(date, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["milliseconds"])(time));
}
function isJustDate(date) {
  return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["hours"])(date) === 0 && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["minutes"])(date) === 0 && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["seconds"])(date) === 0 && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["milliseconds"])(date) === 0;
}
function diff(dateA, dateB, unit) {
  if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB); // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour

  return Math.round(Math.abs(+Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(dateA, unit) / MILLI[unit] - +Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(dateB, unit) / MILLI[unit]));
}

var EventCell =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(EventCell, _React$Component);

  function EventCell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventCell.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        _onKeyPress = _this$props.onKeyPress,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]);

    delete props.resizable;
    var title = accessors.title(event);
    var tooltip = accessors.tooltip(event);
    var end = accessors.end(event);
    var start = accessors.start(event);
    var allDay = accessors.allDay(event);
    var showAsAllDay = isAllDay || allDay || diff(start, ceil(end, 'day'), 'day') > 1;
    var userProps = getters.eventProp(event, start, end, selected);
    var content = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-event-content",
      title: tooltip || undefined
    }, Event ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Event, {
      event: event,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      title: title,
      isAllDay: allDay,
      localizer: localizer,
      slotStart: slotStart,
      slotEnd: slotEnd
    }) : title);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      type: "date"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      tabIndex: 0,
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userProps.style, style),
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-event', className, userProps.className, {
        'rbc-selected': selected,
        'rbc-event-allday': showAsAllDay,
        'rbc-event-continues-prior': continuesPrior,
        'rbc-event-continues-after': continuesAfter
      }),
      onClick: function onClick(e) {
        return onSelect && onSelect(event, e);
      },
      onDoubleClick: function onDoubleClick(e) {
        return _onDoubleClick && _onDoubleClick(event, e);
      },
      onKeyPress: function onKeyPress(e) {
        return _onKeyPress && _onKeyPress(event, e);
      }
    }), typeof children === 'function' ? children(content) : content));
  };

  return EventCell;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

EventCell.propTypes =  true ? {
  event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  slotStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  slotEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isAllDay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  continuesPrior: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  continuesAfter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
} : undefined;

function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return [].concat(selected).indexOf(event) !== -1;
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x,
      y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots); // cell under the mouse

  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots); // Identify row as either the initial row
  // or the row under the current mouse point

  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y; // this row's position relative to the start point

  var isAboveStart = start.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom; // this row is between the current and start rows, so entirely selected

  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }

  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }

  if (isStartRow) {
    // select the cell under the initial point
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);

    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
    } else if (start.y < box.y) {
      // the current row is below start row
      // select cells to the right of the start cell
      endIdx = lastSlotIdx;
    } else {
      // select cells to the left of the start cell
      startIdx = 0;
    }
  }

  return {
    startIdx: startIdx,
    endIdx: endIdx
  };
}

var Popup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Popup, _React$Component);

  function Popup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        _this$props$popupOffs = _this$props.popupOffset,
        popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
        popperRef = _this$props.popperRef,
        _getOffset = Object(dom_helpers_offset__WEBPACK_IMPORTED_MODULE_14__["default"])(popperRef.current),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + Object(dom_helpers_scrollTop__WEBPACK_IMPORTED_MODULE_15__["default"])(window),
        viewRight = window.innerWidth + Object(dom_helpers_scrollLeft__WEBPACK_IMPORTED_MODULE_16__["default"])(window),
        bottom = top + height,
        right = left + width;

    if (bottom > viewBottom || right > viewRight) {
      var topOffset, leftOffset;
      if (bottom > viewBottom) topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
      if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);
      this.setState({
        topOffset: topOffset,
        leftOffset: leftOffset
      }); //eslint-disable-line
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        events = _this$props2.events,
        selected = _this$props2.selected,
        getters = _this$props2.getters,
        accessors = _this$props2.accessors,
        components = _this$props2.components,
        onSelect = _this$props2.onSelect,
        onDoubleClick = _this$props2.onDoubleClick,
        onKeyPress = _this$props2.onKeyPress,
        slotStart = _this$props2.slotStart,
        slotEnd = _this$props2.slotEnd,
        localizer = _this$props2.localizer,
        popperRef = _this$props2.popperRef;
    var width = this.props.position.width,
        topOffset = (this.state || {}).topOffset || 0,
        leftOffset = (this.state || {}).leftOffset || 0;
    var style = {
      top: -topOffset,
      left: -leftOffset,
      minWidth: width + width / 2
    };
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.style, style),
      className: "rbc-overlay",
      ref: popperRef
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-overlay-header"
    }, localizer.format(slotStart, 'dayHeaderFormat')), events.map(function (event, idx) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventCell, {
        key: idx,
        type: "popup",
        event: event,
        getters: getters,
        onSelect: onSelect,
        accessors: accessors,
        components: components,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        continuesPrior: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(accessors.end(event), slotStart, 'day'),
        continuesAfter: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gte"])(accessors.start(event), slotEnd, 'day'),
        slotStart: slotStart,
        slotEnd: slotEnd,
        selected: isSelected(event, selected),
        draggable: true,
        onDragStart: function onDragStart() {
          return _this.props.handleDragStart(event);
        },
        onDragEnd: function onDragEnd() {
          return _this.props.show();
        }
      });
    }));
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Popup.propTypes =  true ? {
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  popupOffset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  handleDragStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  show: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  slotStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  slotEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  popperRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.Element
  })])
  /**
   * The Overlay component, of react-overlays, creates a ref that is passed to the Popup, and
   * requires proper ref forwarding to be used without error
   */

} : undefined;
var Popup$1 = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Popup, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    popperRef: ref
  }, props));
});

function addEventListener(type, handler, target) {
  if (target === void 0) {
    target = document;
  }

  return Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_22__["default"])(target, type, handler, {
    passive: false
  });
}

function isOverContainer(container, x, y) {
  return !container || Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_20__["default"])(container, document.elementFromPoint(x, y));
}

function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return Object(dom_helpers_closest__WEBPACK_IMPORTED_MODULE_21__["default"])(target, '.rbc-event', node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}

function getEventCoordinates(e) {
  var target = e;

  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }

  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}

var clickTolerance = 5;
var clickInterval = 250;

var Selection =
/*#__PURE__*/
function () {
  function Selection(node, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$global = _ref2.global,
        global = _ref2$global === void 0 ? false : _ref2$global,
        _ref2$longPressThresh = _ref2.longPressThreshold,
        longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;

    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this); // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
    // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

    this._removeTouchMoveWindowListener = addEventListener('touchmove', function () {}, window);
    this._removeKeyDownListener = addEventListener('keydown', this._keyListener);
    this._removeKeyUpListener = addEventListener('keyup', this._keyListener);
    this._removeDropFromOutsideListener = addEventListener('drop', this._dropFromOutsideListener);
    this._onDragOverfromOutisde = addEventListener('dragover', this._dragOverFromOutsideListener);

    this._addInitialEventListener();
  }

  var _proto = Selection.prototype;

  _proto.on = function on(type, handler) {
    var handlers = this._listeners[type] || (this._listeners[type] = []);
    handlers.push(handler);
    return {
      remove: function remove() {
        var idx = handlers.indexOf(handler);
        if (idx !== -1) handlers.splice(idx, 1);
      }
    };
  };

  _proto.emit = function emit(type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var result;
    var handlers = this._listeners[type] || [];
    handlers.forEach(function (fn) {
      if (result === undefined) result = fn.apply(void 0, args);
    });
    return result;
  };

  _proto.teardown = function teardown() {
    this.isDetached = true;
    this.listeners = Object.create(null);
    this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
    this._removeInitialEventListener && this._removeInitialEventListener();
    this._removeEndListener && this._removeEndListener();
    this._onEscListener && this._onEscListener();
    this._removeMoveListener && this._removeMoveListener();
    this._removeKeyUpListener && this._removeKeyUpListener();
    this._removeKeyDownListener && this._removeKeyDownListener();
    this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
  };

  _proto.isSelected = function isSelected(node) {
    var box = this._selectRect;
    if (!box || !this.selecting) return false;
    return objectsCollide(box, getBoundsForNode(node));
  };

  _proto.filter = function filter(items) {
    var box = this._selectRect; //not selecting

    if (!box || !this.selecting) return [];
    return items.filter(this.isSelected, this);
  } // Adds a listener that will call the handler only after the user has pressed on the screen
  // without moving their finger for 250ms.
  ;

  _proto._addLongPressListener = function _addLongPressListener(handler, initialEvent) {
    var _this = this;

    var timer = null;
    var removeTouchMoveListener = null;
    var removeTouchEndListener = null;

    var handleTouchStart = function handleTouchStart(initialEvent) {
      timer = setTimeout(function () {
        cleanup();
        handler(initialEvent);
      }, _this.longPressThreshold);
      removeTouchMoveListener = addEventListener('touchmove', function () {
        return cleanup();
      });
      removeTouchEndListener = addEventListener('touchend', function () {
        return cleanup();
      });
    };

    var removeTouchStartListener = addEventListener('touchstart', handleTouchStart);

    var cleanup = function cleanup() {
      if (timer) {
        clearTimeout(timer);
      }

      if (removeTouchMoveListener) {
        removeTouchMoveListener();
      }

      if (removeTouchEndListener) {
        removeTouchEndListener();
      }

      timer = null;
      removeTouchMoveListener = null;
      removeTouchEndListener = null;
    };

    if (initialEvent) {
      handleTouchStart(initialEvent);
    }

    return function () {
      cleanup();
      removeTouchStartListener();
    };
  } // Listen for mousedown and touchstart events. When one is received, disable the other and setup
  // future event handling based on the type of event.
  ;

  _proto._addInitialEventListener = function _addInitialEventListener() {
    var _this2 = this;

    var removeMouseDownListener = addEventListener('mousedown', function (e) {
      _this2._removeInitialEventListener();

      _this2._handleInitialEvent(e);

      _this2._removeInitialEventListener = addEventListener('mousedown', _this2._handleInitialEvent);
    });
    var removeTouchStartListener = addEventListener('touchstart', function (e) {
      _this2._removeInitialEventListener();

      _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
    });

    this._removeInitialEventListener = function () {
      removeMouseDownListener();
      removeTouchStartListener();
    };
  };

  _proto._dropFromOutsideListener = function _dropFromOutsideListener(e) {
    var _getEventCoordinates = getEventCoordinates(e),
        pageX = _getEventCoordinates.pageX,
        pageY = _getEventCoordinates.pageY,
        clientX = _getEventCoordinates.clientX,
        clientY = _getEventCoordinates.clientY;

    this.emit('dropFromOutside', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    e.preventDefault();
  };

  _proto._dragOverFromOutsideListener = function _dragOverFromOutsideListener(e) {
    var _getEventCoordinates2 = getEventCoordinates(e),
        pageX = _getEventCoordinates2.pageX,
        pageY = _getEventCoordinates2.pageY,
        clientX = _getEventCoordinates2.clientX,
        clientY = _getEventCoordinates2.clientY;

    this.emit('dragOverFromOutside', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    e.preventDefault();
  };

  _proto._handleInitialEvent = function _handleInitialEvent(e) {
    if (this.isDetached) {
      return;
    }

    var _getEventCoordinates3 = getEventCoordinates(e),
        clientX = _getEventCoordinates3.clientX,
        clientY = _getEventCoordinates3.clientY,
        pageX = _getEventCoordinates3.pageX,
        pageY = _getEventCoordinates3.pageY;

    var node = this.container(),
        collides,
        offsetData; // Right clicks

    if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;

    if (!this.globalMouse && node && !Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_20__["default"])(node, e.target)) {
      var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;

      offsetData = getBoundsForNode(node);
      collides = objectsCollide({
        top: offsetData.top - top,
        left: offsetData.left - left,
        bottom: offsetData.bottom + bottom,
        right: offsetData.right + right
      }, {
        top: pageY,
        left: pageX
      });
      if (!collides) return;
    }

    var result = this.emit('beforeSelect', this._initialEventData = {
      isTouch: /^touch/.test(e.type),
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    if (result === false) return;

    switch (e.type) {
      case 'mousedown':
        this._removeEndListener = addEventListener('mouseup', this._handleTerminatingEvent);
        this._onEscListener = addEventListener('keydown', this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener('mousemove', this._handleMoveEvent);
        break;

      case 'touchstart':
        this._handleMoveEvent(e);

        this._removeEndListener = addEventListener('touchend', this._handleTerminatingEvent);
        this._removeMoveListener = addEventListener('touchmove', this._handleMoveEvent);
        break;

      default:
        break;
    }
  };

  _proto._handleTerminatingEvent = function _handleTerminatingEvent(e) {
    var _getEventCoordinates4 = getEventCoordinates(e),
        pageX = _getEventCoordinates4.pageX,
        pageY = _getEventCoordinates4.pageY;

    this.selecting = false;
    this._removeEndListener && this._removeEndListener();
    this._removeMoveListener && this._removeMoveListener();
    if (!this._initialEventData) return;
    var inRoot = !this.container || Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_20__["default"])(this.container(), e.target);
    var bounds = this._selectRect;
    var click = this.isClick(pageX, pageY);
    this._initialEventData = null;

    if (e.key === 'Escape') {
      return this.emit('reset');
    }

    if (!inRoot) {
      return this.emit('reset');
    }

    if (click && inRoot) {
      return this._handleClickEvent(e);
    } // User drag-clicked in the Selectable area


    if (!click) return this.emit('select', bounds);
  };

  _proto._handleClickEvent = function _handleClickEvent(e) {
    var _getEventCoordinates5 = getEventCoordinates(e),
        pageX = _getEventCoordinates5.pageX,
        pageY = _getEventCoordinates5.pageY,
        clientX = _getEventCoordinates5.clientX,
        clientY = _getEventCoordinates5.clientY;

    var now = new Date().getTime();

    if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
      // Double click event
      this._lastClickData = null;
      return this.emit('doubleClick', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    } // Click event


    this._lastClickData = {
      timestamp: now
    };
    return this.emit('click', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
  };

  _proto._handleMoveEvent = function _handleMoveEvent(e) {
    if (this._initialEventData === null || this.isDetached) {
      return;
    }

    var _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y;

    var _getEventCoordinates6 = getEventCoordinates(e),
        pageX = _getEventCoordinates6.pageX,
        pageY = _getEventCoordinates6.pageY;

    var w = Math.abs(x - pageX);
    var h = Math.abs(y - pageY);
    var left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting; // Prevent emitting selectStart event until mouse is moved.
    // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.

    if (this.isClick(pageX, pageY) && !old && !(w || h)) {
      return;
    }

    this.selecting = true;
    this._selectRect = {
      top: top,
      left: left,
      x: pageX,
      y: pageY,
      right: left + w,
      bottom: top + h
    };

    if (!old) {
      this.emit('selectStart', this._initialEventData);
    }

    if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect);
    e.preventDefault();
  };

  _proto._keyListener = function _keyListener(e) {
    this.ctrl = e.metaKey || e.ctrlKey;
  };

  _proto.isClick = function isClick(pageX, pageY) {
    var _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch;
    return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
  };

  return Selection;
}();
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */


function normalizeDistance(distance) {
  if (distance === void 0) {
    distance = 0;
  }

  if (typeof distance !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */


function objectsCollide(nodeA, nodeB, tolerance) {
  if (tolerance === void 0) {
    tolerance = 0;
  }

  var _getBoundsForNode = getBoundsForNode(nodeA),
      aTop = _getBoundsForNode.top,
      aLeft = _getBoundsForNode.left,
      _getBoundsForNode$rig = _getBoundsForNode.right,
      aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
      _getBoundsForNode$bot = _getBoundsForNode.bottom,
      aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;

  var _getBoundsForNode2 = getBoundsForNode(nodeB),
      bTop = _getBoundsForNode2.top,
      bLeft = _getBoundsForNode2.left,
      _getBoundsForNode2$ri = _getBoundsForNode2.right,
      bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
      _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
      bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;

  return !( // 'a' bottom doesn't touch 'b' top
  aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */

function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(),
      left = rect.left + pageOffset('left'),
      top = rect.top + pageOffset('top');
  return {
    top: top,
    left: left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}

function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}

var BackgroundCells =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(BackgroundCells, _React$Component);

  function BackgroundCells(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.state = {
      selecting: false
    };
    return _this;
  }

  var _proto = BackgroundCells.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper;
    var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
    var current = getNow();
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-row-bg"
    }, range.map(function (date, index) {
      var selected = selecting && index >= startIdx && index <= endIdx;

      var _getters$dayProp = getters.dayProp(date),
          className = _getters$dayProp.className,
          style = _getters$dayProp.style;

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Wrapper, {
        key: index,
        value: date,
        range: range
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: style,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-day-bg', className, selected && 'rbc-selected-cell', Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, current, 'day') && 'rbc-today', currentDate && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["month"])(currentDate) !== Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["month"])(date) && 'rbc-off-range-bg')
      }));
    }));
  };

  _proto._selectable = function _selectable() {
    var _this2 = this;

    var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(this);
    var selector = this._selector = new Selection(this.props.container, {
      longPressThreshold: this.props.longPressThreshold
    });

    var selectorClicksHandler = function selectorClicksHandler(point, actionType) {
      if (!isEvent(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(_this2), point)) {
        var rowBox = getBoundsForNode(node);
        var _this2$props = _this2.props,
            range = _this2$props.range,
            rtl = _this2$props.rtl;

        if (pointInBox(rowBox, point)) {
          var currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);

          _this2._selectSlot({
            startIdx: currentCell,
            endIdx: currentCell,
            action: actionType,
            box: point
          });
        }
      }

      _this2._initial = {};

      _this2.setState({
        selecting: false
      });
    };

    selector.on('selecting', function (box) {
      var _this2$props2 = _this2.props,
          range = _this2$props2.range,
          rtl = _this2$props2.rtl;
      var startIdx = -1;
      var endIdx = -1;

      if (!_this2.state.selecting) {
        notify(_this2.props.onSelectStart, [box]);
        _this2._initial = {
          x: box.x,
          y: box.y
        };
      }

      if (selector.isSelected(node)) {
        var nodeBox = getBoundsForNode(node);

        var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range.length, rtl);

        startIdx = _dateCellSelection.startIdx;
        endIdx = _dateCellSelection.endIdx;
      }

      _this2.setState({
        selecting: true,
        startIdx: startIdx,
        endIdx: endIdx
      });
    });
    selector.on('beforeSelect', function (box) {
      if (_this2.props.selectable !== 'ignoreEvents') return;
      return !isEvent(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(_this2), box);
    });
    selector.on('click', function (point) {
      return selectorClicksHandler(point, 'click');
    });
    selector.on('doubleClick', function (point) {
      return selectorClicksHandler(point, 'doubleClick');
    });
    selector.on('select', function (bounds) {
      _this2._selectSlot(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.state, {
        action: 'select',
        bounds: bounds
      }));

      _this2._initial = {};

      _this2.setState({
        selecting: false
      });

      notify(_this2.props.onSelectEnd, [_this2.state]);
    });
  };

  _proto._teardownSelectable = function _teardownSelectable() {
    if (!this._selector) return;

    this._selector.teardown();

    this._selector = null;
  };

  _proto._selectSlot = function _selectSlot(_ref) {
    var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box;
    if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
      start: startIdx,
      end: endIdx,
      action: action,
      bounds: bounds,
      box: box,
      resourceId: this.props.resourceId
    });
  };

  return BackgroundCells;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

BackgroundCells.propTypes =  true ? {
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  dayPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSelectEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  range: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date)),
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  resourceId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;

/* eslint-disable react/prop-types */

var EventRowMixin = {
  propTypes: {
    slotMetrics: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    isAllDay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
    accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
    onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
    onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected,
        _ = props.isAllDay,
        accessors = props.accessors,
        getters = props.getters,
        onSelect = props.onSelect,
        onDoubleClick = props.onDoubleClick,
        onKeyPress = props.onKeyPress,
        localizer = props.localizer,
        slotMetrics = props.slotMetrics,
        components = props.components,
        resizable = props.resizable;
    var continuesPrior = slotMetrics.continuesPrior(event);
    var continuesAfter = slotMetrics.continuesAfter(event);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventCell, {
      event: event,
      getters: getters,
      localizer: localizer,
      accessors: accessors,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable: resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key, content) {
    if (content === void 0) {
      content = ' ';
    }

    var per = Math.abs(len) / slots * 100 + '%';
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: key,
      className: "rbc-row-segment" // IE10/11 need max-width. flex-basis doesn't respect box-sizing
      ,
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};

var EventRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(EventRow, _React$Component);

  function EventRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventRow.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
    var lastEnd = 1;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(className, 'rbc-row')
    }, segments.reduce(function (row, _ref, li) {
      var event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
      var key = '_lvl_' + li;
      var gap = left - lastEnd;
      var content = EventRowMixin.renderEvent(_this.props, event);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
      row.push(EventRowMixin.renderSpan(slots, span, key, content));
      lastEnd = right + 1;
      return row;
    }, []));
  };

  return EventRow;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

EventRow.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  segments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
}, EventRowMixin.propTypes) : undefined;
EventRow.defaultProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, EventRowMixin.defaultProps);

function endOfRange(dateRange, unit) {
  if (unit === void 0) {
    unit = 'day';
  }

  return {
    first: dateRange[0],
    last: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range, accessors) {
  var _endOfRange = endOfRange(range),
      first = _endOfRange.first,
      last = _endOfRange.last;

  var slots = diff(first, last, 'day');
  var start = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["max"])(Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(accessors.start(event), 'day'), first);
  var end = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["min"])(ceil(accessors.end(event), 'day'), last);
  var padding = Object(lodash_es_findIndex__WEBPACK_IMPORTED_MODULE_23__["default"])(range, function (x) {
    return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(x, start, 'day');
  });
  var span = diff(start, end, 'day');
  span = Math.min(span, slots);
  span = Math.max(span, 1);
  return {
    event: event,
    span: span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }

  var i,
      j,
      seg,
      levels = [],
      extra = [];

  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];

    for (j = 0; j < levels.length; j++) {
      if (!segsOverlap(seg, levels[j])) break;
    }

    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }

  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function (a, b) {
      return a.left - b.left;
    }); //eslint-disable-line
  }

  return {
    levels: levels,
    extra: extra
  };
}
function inRange(e, start, end, accessors) {
  var eStart = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(accessors.start(e), 'day');
  var eEnd = accessors.end(e);
  var startsBeforeEnd = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lte"])(eStart, end, 'day'); // when the event is zero duration we need to handle a bit differently

  var endsAfterStart = !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(eStart, eEnd, 'minutes') ? Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(eEnd, start, 'minutes') : Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gte"])(eEnd, start, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function (otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortEvents(evtA, evtB, accessors) {
  var startSort = +Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(accessors.start(evtA), 'day') - +Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(accessors.start(evtB), 'day');
  var durA = diff(accessors.start(evtA), ceil(accessors.end(evtA), 'day'), 'day');
  var durB = diff(accessors.start(evtB), ceil(accessors.end(evtB), 'day'), 'day');
  return startSort || // sort by start Day first
  Math.max(durB, 1) - Math.max(durA, 1) || // events spanning multiple days go first
  !!accessors.allDay(evtB) - !!accessors.allDay(evtA) || // then allDay single day events
  +accessors.start(evtA) - +accessors.start(evtB); // then sort by start time
}

var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};

var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function (seg) {
    return isSegmentInSlot(seg, slot);
  }).length;
};

var EventEndingRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(EventEndingRow, _React$Component);

  function EventEndingRow() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EventEndingRow.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
    var rowSegments = eventLevels(segments).levels[0];
    var current = 1,
        lastEnd = 1,
        row = [];

    while (current <= slots) {
      var key = '_lvl_' + current;

      var _ref = rowSegments.filter(function (seg) {
        return isSegmentInSlot(seg, current);
      })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span; //eslint-disable-line


      if (!event) {
        current++;
        continue;
      }

      var gap = Math.max(0, left - lastEnd);

      if (this.canRenderSlotEvent(left, span)) {
        var content = EventRowMixin.renderEvent(this.props, event);

        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = current = right + 1;
      } else {
        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        lastEnd = current = current + 1;
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-row"
    }, row);
  };

  _proto.canRenderSlotEvent = function canRenderSlotEvent(slot, span) {
    var segments = this.props.segments;
    return Object(lodash_es_range__WEBPACK_IMPORTED_MODULE_24__["default"])(slot, slot + span).every(function (s) {
      var count = eventsInSlot(segments, s);
      return count === 1;
    });
  };

  _proto.renderShowMore = function renderShowMore(segments, slot) {
    var _this = this;

    var localizer = this.props.localizer;
    var count = eventsInSlot(segments, slot);
    return count ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      key: 'sm_' + slot,
      href: "#",
      className: 'rbc-show-more',
      onClick: function onClick(e) {
        return _this.showMore(slot, e);
      }
    }, localizer.messages.showMore(count)) : false;
  };

  _proto.showMore = function showMore(slot, e) {
    e.preventDefault();
    this.props.onShowMore(slot, e.target);
  };

  return EventEndingRow;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

EventEndingRow.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  segments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  slots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onShowMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}, EventRowMixin.propTypes) : undefined;
EventEndingRow.defaultProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, EventRowMixin.defaultProps);

var ScrollableWeekWrapper = function ScrollableWeekWrapper(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};

var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};

var isEqual = function isEqual(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};

function getSlotMetrics() {
  return Object(memoize_one__WEBPACK_IMPORTED_MODULE_25__["default"])(function (options) {
    var range = options.range,
        events = options.events,
        maxRows = options.maxRows,
        minRows = options.minRows,
        accessors = options.accessors;

    var _endOfRange = endOfRange(range),
        first = _endOfRange.first,
        last = _endOfRange.last;

    var segments = events.map(function (evt) {
      return eventSegments(evt, range, accessors);
    });

    var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra;

    while (levels.length < minRows) {
      levels.push([]);
    }

    return {
      first: first,
      last: last,
      levels: levels,
      extra: extra,
      range: range,
      slots: range.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics();
        return metrics(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date) {
        return range.find(function (r) {
          return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(r, date, 'day');
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function (seg) {
          return isSegmentInSlot$1(seg, slot);
        }).map(function (seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior(event) {
        return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(accessors.start(event), first, 'day');
      },
      continuesAfter: function continuesAfter(event) {
        var eventEnd = accessors.end(event);
        var singleDayDuration = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(accessors.start(event), eventEnd, 'minutes');
        return singleDayDuration ? Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gte"])(eventEnd, last, 'minutes') : Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(eventEnd, last, 'minutes');
      }
    };
  }, isEqual);
}

var DateContentRow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DateContentRow, _React$Component);

  function DateContentRow() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelectSlot = function (slot) {
      var _this$props = _this.props,
          range = _this$props.range,
          onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    };

    _this.handleShowMore = function (slot, target) {
      var _this$props2 = _this.props,
          range = _this$props2.range,
          onShowMore = _this$props2.onShowMore;

      var metrics = _this.slotMetrics(_this.props);

      var row = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_19__["default"])(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), '.rbc-row-bg')[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range[slot - 1], cell, slot, target);
    };

    _this.createHeadingRef = function (r) {
      _this.headingRow = r;
    };

    _this.createEventRef = function (r) {
      _this.eventRow = r;
    };

    _this.getContainer = function () {
      var container = _this.props.container;
      return container ? container() : Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    };

    _this.renderHeadingCell = function (date, index) {
      var _this$props3 = _this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow;
      return renderHeader({
        date: date,
        key: "header_" + index,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-date-cell', Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, getNow(), 'day') && 'rbc-now')
      });
    };

    _this.renderDummy = function () {
      var _this$props4 = _this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader,
          showAllEvents = _this$props4.showAllEvents;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: className
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable')
      }, renderHeader && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-row",
        ref: _this.createHeadingRef
      }, range.map(_this.renderHeadingCell)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-row",
        ref: _this.createEventRef
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-row-segment"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-event"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-event-content"
      }, "\xA0"))))));
    };

    _this.slotMetrics = getSlotMetrics();
    return _this;
  }

  var _proto = DateContentRow.prototype;

  _proto.getRowLimit = function getRowLimit() {
    var eventHeight = Object(dom_helpers_height__WEBPACK_IMPORTED_MODULE_18__["default"])(this.eventRow);
    var headingHeight = this.headingRow ? Object(dom_helpers_height__WEBPACK_IMPORTED_MODULE_18__["default"])(this.headingRow) : 0;
    var eventSpace = Object(dom_helpers_height__WEBPACK_IMPORTED_MODULE_18__["default"])(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(this)) - headingHeight;
    return Math.max(Math.floor(eventSpace / eventHeight), 1);
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        date = _this$props5.date,
        rtl = _this$props5.rtl,
        range = _this$props5.range,
        className = _this$props5.className,
        selected = _this$props5.selected,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        accessors = _this$props5.accessors,
        getters = _this$props5.getters,
        components = _this$props5.components,
        getNow = _this$props5.getNow,
        renderHeader = _this$props5.renderHeader,
        onSelect = _this$props5.onSelect,
        localizer = _this$props5.localizer,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        onDoubleClick = _this$props5.onDoubleClick,
        onKeyPress = _this$props5.onKeyPress,
        resourceId = _this$props5.resourceId,
        longPressThreshold = _this$props5.longPressThreshold,
        isAllDay = _this$props5.isAllDay,
        resizable = _this$props5.resizable,
        showAllEvents = _this$props5.showAllEvents;
    if (renderForMeasure) return this.renderDummy();
    var metrics = this.slotMetrics(this.props);
    var levels = metrics.levels,
        extra = metrics.extra;
    var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
    var WeekWrapper = components.weekWrapper;
    var eventRowProps = {
      selected: selected,
      accessors: accessors,
      getters: getters,
      localizer: localizer,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      resourceId: resourceId,
      slotMetrics: metrics,
      resizable: resizable
    };
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(BackgroundCells, {
      date: date,
      getNow: getNow,
      rtl: rtl,
      range: range,
      selectable: selectable,
      container: this.getContainer,
      getters: getters,
      onSelectStart: onSelectStart,
      onSelectEnd: onSelectEnd,
      onSelectSlot: this.handleSelectSlot,
      components: components,
      longPressThreshold: longPressThreshold,
      resourceId: resourceId
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable')
    }, renderHeader && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-row ",
      ref: this.createHeadingRef
    }, range.map(this.renderHeadingCell)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ScrollableWeekComponent, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WeekWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      isAllDay: isAllDay
    }, eventRowProps), levels.map(function (segs, idx) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventRow, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: idx,
        segments: segs
      }, eventRowProps));
    }), !!extra.length && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventEndingRow, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      segments: extra,
      onShowMore: this.handleShowMore
    }, eventRowProps))))));
  };

  return DateContentRow;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

DateContentRow.propTypes =  true ? {
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  range: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resourceId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  renderForMeasure: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  renderHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onShowMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  showAllEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  dayPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  isAllDay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  minRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  maxRows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
} : undefined;
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};

var Header = function Header(_ref) {
  var label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, label);
};

Header.propTypes =  true ? {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;

var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown;

  if (!drilldownView) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, label);
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "#",
    onClick: onDrillDown
  }, label);
};

DateHeader.propTypes =  true ? {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  drilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  isOffRange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;

var eventsForWeek = function eventsForWeek(evts, start, end, accessors) {
  return evts.filter(function (e) {
    return inRange(e, start, end, accessors);
  });
};

var MonthView =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MonthView, _React$Component);

  function MonthView() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.getContainer = function () {
      return Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    };

    _this.renderWeek = function (week, weekIdx) {
      var _this$props = _this.props,
          events = _this$props.events,
          components = _this$props.components,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          selected = _this$props.selected,
          date = _this$props.date,
          localizer = _this$props.localizer,
          longPressThreshold = _this$props.longPressThreshold,
          accessors = _this$props.accessors,
          getters = _this$props.getters,
          showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state,
          needLimitMeasure = _this$state.needLimitMeasure,
          rowLimit = _this$state.rowLimit;
      events = eventsForWeek(events, week[0], week[week.length - 1], accessors);
      events.sort(function (a, b) {
        return sortEvents(a, b, accessors);
      });
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : undefined,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow,
        date: date,
        range: week,
        events: events,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected: selected,
        selectable: selectable,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold: longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents: showAllEvents
      });
    };

    _this.readerDateHeading = function (_ref) {
      var date = _ref.date,
          className = _ref.className,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["date", "className"]);

      var _this$props2 = _this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer;
      var isOffRange = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["month"])(date) !== Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["month"])(currentDate);
      var isCurrent = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, currentDate, 'day');
      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dateFormat');
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current')
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date, drilldownView, e);
        }
      }));
    };

    _this.handleSelectSlot = function (range, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function () {
        return _this.selectDates(slotInfo);
      });
    };

    _this.handleHeadingClick = function (date, view, e) {
      e.preventDefault();

      _this.clearSelection();

      notify(_this.props.onDrillDown, [date, view]);
    };

    _this.handleSelectEvent = function () {
      _this.clearSelection();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onSelectEvent, args);
    };

    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    _this.handleKeyPressEvent = function () {
      _this.clearSelection();

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      notify(_this.props.onKeyPressEvent, args);
    };

    _this.handleShowMore = function (events, date, cell, slot, target) {
      var _this$props3 = _this.props,
          popup = _this$props3.popup,
          onDrillDown = _this$props3.onDrillDown,
          onShowMore = _this$props3.onShowMore,
          getDrilldownView = _this$props3.getDrilldownView; //cancel any pending selections so only the event click goes through.

      _this.clearSelection();

      if (popup) {
        var position = Object(dom_helpers_position__WEBPACK_IMPORTED_MODULE_12__["default"])(cell, Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)));

        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position,
            target: target
          }
        });
      } else {
        notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
      }

      notify(onShowMore, [events, date, slot]);
    };

    _this.overlayDisplay = function () {
      _this.setState({
        overlay: null
      });
    };

    _this._bgRows = [];
    _this._pendingSelection = [];
    _this.slotRowRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
    return _this;
  }

  var _proto = MonthView.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(_ref2) {
    var date = _ref2.date;
    this.setState({
      needLimitMeasure: !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, this.props.date, 'month')
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var running;
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    window.addEventListener('resize', this._resizeListener = function () {
      if (!running) {
        Object(dom_helpers_animationFrame__WEBPACK_IMPORTED_MODULE_13__["request"])(function () {
          running = false;

          _this2.setState({
            needLimitMeasure: true
          }); //eslint-disable-line

        });
      }
    }, false);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener, false);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = visibleDays(date, localizer),
        weeks = Object(lodash_es_chunk__WEBPACK_IMPORTED_MODULE_11__["default"])(month, 7);
    this._weekCount = weeks.length;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-month-view', className)
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-row rbc-month-header"
    }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
  };

  _proto.renderHeaders = function renderHeaders(row) {
    var _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components;
    var first = row[0];
    var last = row[row.length - 1];
    var HeaderComponent = components.header || Header;
    return range(first, last, 'day').map(function (day, idx) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: 'header_' + idx,
        className: "rbc-header"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderComponent, {
        date: day,
        localizer: localizer,
        label: localizer.format(day, 'weekdayFormat')
      }));
    });
  };

  _proto.renderOverlay = function renderOverlay() {
    var _this3 = this;

    var overlay = this.state && this.state.overlay || {};
    var _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected,
        popupOffset = _this$props6.popupOffset;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_17__["default"], {
      rootClose: true,
      placement: "bottom",
      show: !!overlay.position,
      onHide: function onHide() {
        return _this3.setState({
          overlay: null
        });
      },
      target: function target() {
        return overlay.target;
      }
    }, function (_ref3) {
      var props = _ref3.props;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Popup$1, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        popupOffset: popupOffset,
        accessors: accessors,
        getters: getters,
        selected: selected,
        components: components,
        localizer: localizer,
        position: overlay.position,
        show: _this3.overlayDisplay,
        events: overlay.events,
        slotStart: overlay.date,
        slotEnd: overlay.end,
        onSelect: _this3.handleSelectEvent,
        onDoubleClick: _this3.handleDoubleClickEvent,
        onKeyPress: _this3.handleKeyPressEvent,
        handleDragStart: _this3.props.handleDragStart
      }));
    });
  };

  _proto.measureRowLimit = function measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit()
    });
  };

  _proto.selectDates = function selectDates(slotInfo) {
    var slots = this._pendingSelection.slice();

    this._pendingSelection = [];
    slots.sort(function (a, b) {
      return +a - +b;
    });
    notify(this.props.onSelectSlot, {
      slots: slots,
      start: slots[0],
      end: slots[slots.length - 1],
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box
    });
  };

  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };

  return MonthView;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

MonthView.propTypes =  true ? {
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  min: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  step: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  scrollToTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onNavigate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClickEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPressEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onShowMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  showAllEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  getDrilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDragStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  popupOffset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })])
} : undefined;

MonthView.range = function (date, _ref4) {
  var localizer = _ref4.localizer;
  var start = firstVisibleDay(date, localizer);
  var end = lastVisibleDay(date, localizer);
  return {
    start: start,
    end: end
  };
};

MonthView.navigate = function (date, action) {
  switch (action) {
    case navigate.PREVIOUS:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, -1, 'month');

    case navigate.NEXT:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, 1, 'month');

    default:
      return date;
  }
};

MonthView.title = function (date, _ref5) {
  var localizer = _ref5.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};

var getDstOffset = function getDstOffset(start, end) {
  return start.getTimezoneOffset() - end.getTimezoneOffset();
};

var getKey = function getKey(min, max, step, slots) {
  return "" + +Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(min, 'minutes') + ("" + +Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(max, 'minutes')) + (step + "-" + slots);
};

function getSlotMetrics$1(_ref) {
  var start = _ref.min,
      end = _ref.max,
      step = _ref.step,
      timeslots = _ref.timeslots;
  var key = getKey(start, end, step, timeslots); // if the start is on a DST-changing day but *after* the moment of DST
  // transition we need to add those extra minutes to our minutesFromMidnight

  var daystart = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(start, 'day');
  var daystartdstoffset = getDstOffset(daystart, start);
  var totalMin = 1 + diff(start, end, 'minutes') + getDstOffset(start, end);
  var minutesFromMidnight = diff(daystart, start, 'minutes') + daystartdstoffset;
  var numGroups = Math.ceil(totalMin / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots); // Each slot date is created from "zero", instead of adding `step` to
  // the previous one, in order to avoid DST oddities

  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);

    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step; // A date with total minutes calculated from the start of the day

      slots[slotIdx] = groups[grp][slot] = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + minFromStart, 0, 0);
    }
  } // Necessary to be able to select up until the last timeslot in a day


  var lastSlotMinFromStart = slots.length * step;
  slots.push(new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + lastSlotMinFromStart, 0, 0));

  function positionFromDate(date) {
    var diff$1 = diff(start, date, 'minutes') + getDstOffset(start, date);
    return Math.min(diff$1, totalMin);
  }

  return {
    groups: groups,
    update: function update(args) {
      if (getKey(args) !== key) return getSlotMetrics$1(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["inRange"])(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
    },
    nextSlot: function nextSlot(slot) {
      var next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)]; // in the case of the last slot we won't a long enough range so manually get it

      if (next === slot) next = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(slot, step, 'minutes');
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
    },
    closestSlotFromDate: function closestSlotFromDate(date, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(date, start, 'minutes')) return slots[0];
      var diffMins = diff(start, date, 'minutes');
      return slots[(diffMins - diffMins % step) / step + offset];
    },
    startsBeforeDay: function startsBeforeDay(date) {
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(date, start, 'day');
    },
    startsAfterDay: function startsAfterDay(date) {
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(date, end, 'day');
    },
    startsBefore: function startsBefore(date) {
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(merge(start, date), start, 'minutes');
    },
    startsAfter: function startsAfter(date) {
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(merge(end, date), end, 'minutes');
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["min"])(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["max"])(start, rangeStart));
      if (!ignoreMax) rangeEnd = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["min"])(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["max"])(start, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top = rangeEndMin > step * numSlots && !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(end, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top = rangeStartMin / (step * numSlots) * 100;
      return top;
    }
  };
}

var Event =
/*#__PURE__*/
function () {
  function Event(data, _ref) {
    var accessors = _ref.accessors,
        slotMetrics = _ref.slotMetrics;

    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
        start = _slotMetrics$getRange.start,
        startDate = _slotMetrics$getRange.startDate,
        end = _slotMetrics$getRange.end,
        endDate = _slotMetrics$getRange.endDate,
        top = _slotMetrics$getRange.top,
        height = _slotMetrics$getRange.height;

    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height;
    this.data = data;
  }
  /**
   * The event's width without any overlap.
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_26__["default"])(Event, [{
    key: "_width",
    get: function get() {
      // The container event's width is determined by the maximum number of
      // events in any of its rows.
      if (this.rows) {
        var columns = this.rows.reduce(function (max, row) {
          return Math.max(max, row.leaves.length + 1);
        }, // add itself
        0) + 1; // add the container

        return 100 / columns;
      }

      var availableWidth = 100 - this.container._width; // The row event's width is the space left by the container, divided
      // among itself and its leaves.

      if (this.leaves) {
        return availableWidth / (this.leaves.length + 1);
      } // The leaf event's width is determined by its row's width


      return this.row._width;
    }
    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */

  }, {
    key: "width",
    get: function get() {
      var noOverlap = this._width;
      var overlap = Math.min(100, this._width * 1.7); // Containers can always grow.

      if (this.rows) {
        return overlap;
      } // Rows can grow if they have leaves.


      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap;
      } // Leaves can grow unless they're the last item in a row.


      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      // Containers have no offset.
      if (this.rows) return 0; // Rows always start where their container ends.

      if (this.leaves) return this.container._width; // Leaves are spread out evenly on the space left by its row.

      var _this$row = this.row,
          leaves = _this$row.leaves,
          xOffset = _this$row.xOffset,
          _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);

  return Event;
}();
/**
 * Return true if event a and b is considered to be on the same row.
 */


function onSameRow(a, b, minimumStartDifference) {
  return (// Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}

function sortByRender(events) {
  var sortedByTime = Object(lodash_es_sortBy__WEBPACK_IMPORTED_MODULE_27__["default"])(events, ['startMs', function (e) {
    return -e.endMs;
  }]);
  var sorted = [];

  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);

    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i]; // Still inside this event, look for next.

      if (event.endMs > test.startMs) continue; // We've found the first event of the next event group.
      // If that event is not right next to our current event, we have to
      // move it here.

      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      } // We've already found the next event group, so stop looking.


      break;
    }
  }

  return sorted;
}

function getStyledEvents(_ref2) {
  var events = _ref2.events,
      minimumStartDifference = _ref2.minimumStartDifference,
      slotMetrics = _ref2.slotMetrics,
      accessors = _ref2.accessors;
  // Create proxy events and order them so that we don't have
  // to fiddle with z-indexes.
  var proxies = events.map(function (event) {
    return new Event(event, {
      slotMetrics: slotMetrics,
      accessors: accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies); // Group overlapping events, while keeping order.
  // Every event is always one of: container, row or leaf.
  // Containers can contain rows, and rows can contain leaves.

  var containerEvents = [];

  var _loop = function _loop(i) {
    var event = eventsInRenderOrder[i]; // Check if this event can go into a container event.

    var container = containerEvents.find(function (c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    }); // Couldn't find a container — that means this event is a container.

    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return "continue";
    } // Found a container for the event.


    event.container = container; // Check if the event can be placed in an existing row.
    // Start looking from behind.

    var row = null;

    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }

    if (row) {
      // Found a row, so add it.
      row.leaves.push(event);
      event.row = row;
    } else {
      // Couldn't find a row – that means this event is a row.
      event.leaves = [];
      container.rows.push(event);
    }
  };

  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  } // Return the original events, along with their styles.


  return eventsInRenderOrder.map(function (event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}

function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx; // TODO : trace it by not object but kinda index or something for performance

    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }

  return maxIdx;
}

function noOverlap (_ref) {
  var events = _ref.events,
      minimumStartDifference = _ref.minimumStartDifference,
      slotMetrics = _ref.slotMetrics,
      accessors = _ref.accessors;
  var styledEvents = getStyledEvents({
    events: events,
    minimumStartDifference: minimumStartDifference,
    slotMetrics: slotMetrics,
    accessors: accessors
  });
  styledEvents.sort(function (a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;else return a.top + a.height < b.top + b.height ? 1 : -1;
  });

  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }

  for (var _i = 0; _i < styledEvents.length - 1; ++_i) {
    var se1 = styledEvents[_i];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;

    for (var j = _i + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height; // be friends when overlapped

      if (y3 <= y1 && y1 < y4 || y1 <= y3 && y3 < y2) {
        // TODO : hashmap would be effective for performance
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }

  for (var _i2 = 0; _i2 < styledEvents.length; ++_i2) {
    var se = styledEvents[_i2];
    var bitmap = [];

    for (var _j = 0; _j < 100; ++_j) {
      bitmap.push(1);
    } // 1 means available


    for (var _j2 = 0; _j2 < se.friends.length; ++_j2) {
      if (se.friends[_j2].idx !== undefined) bitmap[se.friends[_j2].idx] = 0;
    } // 0 means reserved


    se.idx = bitmap.indexOf(1);
  }

  for (var _i3 = 0; _i3 < styledEvents.length; ++_i3) {
    var size = 0;
    if (styledEvents[_i3].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i3], 0, allFriends);
    size = 100 / (maxIdx + 1);
    styledEvents[_i3].size = size;

    for (var _j3 = 0; _j3 < allFriends.length; ++_j3) {
      allFriends[_j3].size = size;
    }
  }

  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var e = styledEvents[_i4];
    e.style.left = e.idx * e.size; // stretch to maximum

    var _maxIdx = 0;

    for (var _j4 = 0; _j4 < e.friends.length; ++_j4) {
      var idx = e.friends[_j4];
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }

    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size; // padding between events
    // for this feature, `width` is not percentage based unit anymore
    // it will be used with calc()

    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(" + e.size + "% - " + padding + "px)";
    e.style.height = "calc(" + e.style.height + "% - 2px)";
    e.style.xOffset = "calc(" + e.style.left + "% + " + padding + "px)";
  }

  return styledEvents;
}

/*eslint no-unused-vars: "off"*/
var DefaultAlgorithms = {
  overlap: getStyledEvents,
  'no-overlap': noOverlap
};

function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
} //


function getStyledEvents$1(_ref) {
  var events = _ref.events,
      minimumStartDifference = _ref.minimumStartDifference,
      slotMetrics = _ref.slotMetrics,
      accessors = _ref.accessors,
      dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];

  if (!isFunction(algorithm)) {
    // invalid algorithm
    return [];
  }

  return algorithm.apply(this, arguments);
}

var TimeSlotGroup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeSlotGroup, _Component);

  function TimeSlotGroup() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TimeSlotGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        renderSlot = _this$props.renderSlot,
        resource = _this$props.resource,
        group = _this$props.group,
        getters = _this$props.getters,
        _this$props$component = _this$props.components;
    _this$props$component = _this$props$component === void 0 ? {} : _this$props$component;
    var _this$props$component2 = _this$props$component.timeSlotWrapper,
        Wrapper = _this$props$component2 === void 0 ? NoopWrapper : _this$props$component2;
    var groupProps = getters ? getters.slotGroupProp() : {};
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "rbc-timeslot-group"
    }, groupProps), group.map(function (value, idx) {
      var slotProps = getters ? getters.slotProp(value, resource) : {};
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Wrapper, {
        key: idx,
        value: value,
        resource: resource
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slotProps, {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-time-slot', slotProps.className)
      }), renderSlot && renderSlot(value, idx)));
    }));
  };

  return TimeSlotGroup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
TimeSlotGroup.propTypes =  true ? {
  renderSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  group: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;

function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%';
}
/* eslint-disable react/prop-types */


function TimeGridEvent(props) {
  var _extends2;

  var style = props.style,
      className = props.className,
      event = props.event,
      accessors = props.accessors,
      rtl = props.rtl,
      selected = props.selected,
      label = props.label,
      continuesEarlier = props.continuesEarlier,
      continuesLater = props.continuesLater,
      getters = props.getters,
      onClick = props.onClick,
      onDoubleClick = props.onDoubleClick,
      onKeyPress = props.onKeyPress,
      _props$components = props.components,
      Event = _props$components.event,
      EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end = accessors.end(event);
  var start = accessors.start(event);
  var userProps = getters.eventProp(event, start, end, selected);
  var height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset;
  var inner = [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Event, {
    event: event,
    title: title
  }) : title)];
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "time"
  }, props), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    onKeyPress: onKeyPress,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userProps.style, (_extends2 = {
      top: stringifyPercent(top)
    }, _extends2[rtl ? 'right' : 'left'] = stringifyPercent(xOffset), _extends2.width = stringifyPercent(width), _extends2.height = stringifyPercent(height), _extends2)),
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesEarlier,
      'rbc-event-continues-later': continuesLater
    })
  }, inner));
}

var DayColumn =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DayColumn, _React$Component);

  function DayColumn() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;

    _this.renderEvents = function () {
      var _this$props = _this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selected = _this$props.selected,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          getters = _this$props.getters,
          components = _this$props.components,
          step = _this$props.step,
          timeslots = _this$props.timeslots,
          dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm,
          resizable = _this$props.resizable;

      var _assertThisInitialize = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this),
          slotMetrics = _assertThisInitialize.slotMetrics;

      var messages = localizer.messages;
      var styledEvents = getStyledEvents$1({
        events: events,
        accessors: accessors,
        slotMetrics: slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm: dayLayoutAlgorithm
      });
      return styledEvents.map(function (_ref, idx) {
        var event = _ref.event,
            style = _ref.style;
        var end = accessors.end(event);
        var start = accessors.start(event);
        var format = 'eventTimeRangeFormat';
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
        if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
          start: start,
          end: end
        }, format);
        var continuesEarlier = startsBeforeDay || slotMetrics.startsBefore(start);
        var continuesLater = startsAfterDay || slotMetrics.startsAfter(end);
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGridEvent, {
          style: style,
          event: event,
          label: label,
          key: 'evt_' + idx,
          getters: getters,
          rtl: rtl,
          components: components,
          continuesEarlier: continuesEarlier,
          continuesLater: continuesLater,
          accessors: accessors,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select(event, e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable: resizable
        });
      });
    };

    _this._selectable = function () {
      var node = Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
      var selector = _this._selector = new Selection(function () {
        return Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
      }, {
        longPressThreshold: _this.props.longPressThreshold
      });

      var maybeSelect = function maybeSelect(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate,
            end = state.endDate;

        if (onSelecting) {
          if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(current.startDate, start, 'minutes') && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(current.endDate, end, 'minutes') || onSelecting({
            start: start,
            end: end,
            resourceId: _this.props.resource
          }) === false) return;
        }

        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };

      var selectionState = function selectionState(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));

        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }

        var initialSlot = _this._initialSlot;

        if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lte"])(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }

        var selectRange = _this.slotMetrics.getRange(Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["min"])(initialSlot, currentSlot), Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["max"])(initialSlot, currentSlot));

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectRange, {
          selecting: true,
          top: selectRange.top + "%",
          height: selectRange.height + "%"
        });
      };

      var selectorClicksHandler = function selectorClicksHandler(box, actionType) {
        if (!isEvent(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), box)) {
          var _selectionState = selectionState(box),
              startDate = _selectionState.startDate,
              endDate = _selectionState.endDate;

          _this._selectSlot({
            startDate: startDate,
            endDate: endDate,
            action: actionType,
            box: box
          });
        }

        _this.setState({
          selecting: false
        });
      };

      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('beforeSelect', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !isEvent(Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this)), box);
      });
      selector.on('click', function (box) {
        return selectorClicksHandler(box, 'click');
      });
      selector.on('doubleClick', function (box) {
        return selectorClicksHandler(box, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state, {
            action: 'select',
            bounds: bounds
          }));

          _this.setState({
            selecting: false
          });
        }
      });
      selector.on('reset', function () {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };

    _this._teardownSelectable = function () {
      if (!_this._selector) return;

      _this._selector.teardown();

      _this._selector = null;
    };

    _this._selectSlot = function (_ref2) {
      var startDate = _ref2.startDate,
          endDate = _ref2.endDate,
          action = _ref2.action,
          bounds = _ref2.bounds,
          box = _ref2.box;
      var current = startDate,
          slots = [];

      while (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lte"])(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1000); // using Date ensures not to create an endless loop the day DST begins
      }

      notify(_this.props.onSelectSlot, {
        slots: slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action: action,
        bounds: bounds,
        box: box
      });
    };

    _this._select = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onSelectEvent, args);
    };

    _this._doubleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    _this._keyPress = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      notify(_this.props.onKeyPressEvent, args);
    };

    _this.slotMetrics = getSlotMetrics$1(_this.props);
    return _this;
  }

  var _proto = DayColumn.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();

    if (this.props.isNow) {
      this.setTimeIndicatorPositionUpdateInterval();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();

    this.clearTimeIndicatorInterval();
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
    this.slotMetrics = this.slotMetrics.update(nextProps);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var getNowChanged = !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(prevProps.getNow(), this.props.getNow(), 'minutes');

    if (prevProps.isNow !== this.props.isNow || getNowChanged) {
      this.clearTimeIndicatorInterval();

      if (this.props.isNow) {
        var tail = !getNowChanged && Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(prevProps.date, this.props.date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(tail);
      }
    } else if (this.props.isNow && (!Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(prevProps.min, this.props.min, 'minutes') || !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(prevProps.max, this.props.max, 'minutes'))) {
      this.positionTimeIndicator();
    }
  }
  /**
   * @param tail {Boolean} - whether `positionTimeIndicator` call should be
   *   deferred or called upon setting interval (`true` - if deferred);
   */
  ;

  _proto.setTimeIndicatorPositionUpdateInterval = function setTimeIndicatorPositionUpdateInterval(tail) {
    var _this2 = this;

    if (tail === void 0) {
      tail = false;
    }

    if (!this.intervalTriggered && !tail) {
      this.positionTimeIndicator();
    }

    this._timeIndicatorTimeout = window.setTimeout(function () {
      _this2.intervalTriggered = true;

      _this2.positionTimeIndicator();

      _this2.setTimeIndicatorPositionUpdateInterval();
    }, 60000);
  };

  _proto.clearTimeIndicatorInterval = function clearTimeIndicatorInterval() {
    this.intervalTriggered = false;
    window.clearTimeout(this._timeIndicatorTimeout);
  };

  _proto.positionTimeIndicator = function positionTimeIndicator() {
    var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        getNow = _this$props2.getNow;
    var current = getNow();

    if (current >= min && current <= max) {
      var top = this.slotMetrics.getCurrentTimePosition(current);
      this.intervalTriggered = true;
      this.setState({
        timeIndicatorPosition: top
      });
    } else {
      this.clearTimeIndicatorInterval();
    }
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        max = _this$props3.max,
        rtl = _this$props3.rtl,
        isNow = _this$props3.isNow,
        resource = _this$props3.resource,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer,
        _this$props3$getters = _this$props3.getters,
        dayProp = _this$props3$getters.dayProp,
        getters = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3$getters, ["dayProp"]),
        _this$props3$componen = _this$props3.components,
        EventContainer = _this$props3$componen.eventContainerWrapper,
        components = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3$componen, ["eventContainerWrapper"]);

    var slotMetrics = this.slotMetrics;
    var _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    var selectDates = {
      start: startDate,
      end: endDate
    };

    var _dayProp = dayProp(max),
        className = _dayProp.className,
        style = _dayProp.style;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: style,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today', // WHY
      selecting && 'rbc-slot-selecting')
    }, slotMetrics.groups.map(function (grp, idx) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeSlotGroup, {
        key: idx,
        group: grp,
        resource: resource,
        getters: getters,
        components: components
      });
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EventContainer, {
      localizer: localizer,
      resource: resource,
      accessors: accessors,
      getters: getters,
      components: components,
      slotMetrics: slotMetrics
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-events-container', rtl && 'rtl')
    }, this.renderEvents())), selecting && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-slot-selection",
      style: {
        top: top,
        height: height
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, localizer.format(selectDates, 'selectRangeFormat'))), isNow && this.intervalTriggered && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-current-time-indicator",
      style: {
        top: this.state.timeIndicatorPosition + "%"
      }
    }));
  };

  return DayColumn;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

DayColumn.propTypes =  true ? {
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired,
  min: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired,
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired,
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  isNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  showMultiDayTimes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  culture: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  timeslots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  eventOffset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onSelecting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onSelectEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onDoubleClickEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onKeyPressEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  dragThroughEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  dayLayoutAlgorithm: DayLayoutAlgorithmPropType
} : undefined;
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};

var TimeGutter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeGutter, _Component);

  function TimeGutter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.renderSlot = function (value, idx) {
      if (idx !== 0) return null;
      var _this$props = _this.props,
          localizer = _this$props.localizer,
          getNow = _this$props.getNow;

      var isNow = _this.slotMetrics.dateIsInGroup(getNow(), idx);

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-label', isNow && 'rbc-now')
      }, localizer.format(value, 'timeGutterFormat'));
    };

    var _this$props2 = _this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        timeslots = _this$props2.timeslots,
        step = _this$props2.step;
    _this.slotMetrics = getSlotMetrics$1({
      min: min,
      max: max,
      timeslots: timeslots,
      step: step
    });
    return _this;
  }

  var _proto = TimeGutter.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var min = nextProps.min,
        max = nextProps.max,
        timeslots = nextProps.timeslots,
        step = nextProps.step;
    this.slotMetrics = this.slotMetrics.update({
      min: min,
      max: max,
      timeslots: timeslots,
      step: step
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        resource = _this$props3.resource,
        components = _this$props3.components,
        getters = _this$props3.getters;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-time-gutter rbc-time-column"
    }, this.slotMetrics.groups.map(function (grp, idx) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeSlotGroup, {
        key: idx,
        group: grp,
        resource: resource,
        components: components,
        renderSlot: _this2.renderSlot,
        getters: getters
      });
    }));
  };

  return TimeGutter;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
TimeGutter.propTypes =  true ? {
  min: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired,
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired,
  timeslots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;

var ResourceHeader = function ResourceHeader(_ref) {
  var label = _ref.label;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, label);
};

ResourceHeader.propTypes =  true ? {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  resource: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;

var TimeGridHeader =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeGridHeader, _React$Component);

  function TimeGridHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date, view]);
    };

    _this.renderRow = function (resource) {
      var _this$props = _this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          range = _this$props.range,
          getters = _this$props.getters,
          localizer = _this$props.localizer,
          accessors = _this$props.accessors,
          components = _this$props.components,
          resizable = _this$props.resizable;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function (event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DateContentRow, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: eventsToDisplay,
        resourceId: resourceId,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this.props.onSelectEvent,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable: resizable
      });
    };

    return _this;
  }

  var _proto = TimeGridHeader.prototype;

  _proto.renderHeaderCells = function renderHeaderCells(range) {
    var _this2 = this;

    var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
    var today = getNow();
    return range.map(function (date, i) {
      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dayFormat');

      var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style;

      var header = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderComponent, {
        date: date,
        label: label,
        localizer: localizer
      });
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        key: i,
        style: style,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-header', className, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, today, 'day') && 'rbc-today')
      }, drilldownView ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          return _this2.handleHeaderClick(date, drilldownView, e);
        }
      }, header) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, header));
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        isOverflowing = _this$props3.isOverflowing,
        _this$props3$componen = _this$props3.components,
        TimeGutterHeader = _this$props3$componen.timeGutterHeader,
        _this$props3$componen2 = _this$props3$componen.resourceHeader,
        ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2,
        resizable = _this$props3.resizable;
    var style = {};

    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = Object(dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_29__["default"])() + "px";
    }

    var groupedEvents = resources.groupEvents(events);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: style,
      ref: scrollRef,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-time-header', isOverflowing && 'rbc-overflowing')
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-label rbc-time-header-gutter",
      style: {
        width: width,
        minWidth: width,
        maxWidth: width
      }
    }, TimeGutterHeader && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGutterHeader, null)), resources.map(function (_ref, idx) {
      var id = _ref[0],
          resource = _ref[1];
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-time-header-content",
        key: id || idx
      }, resource && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-row rbc-row-resource",
        key: "resource_" + idx
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-header"
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ResourceHeaderComponent, {
        index: idx,
        label: accessors.resourceTitle(resource),
        resource: resource
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "rbc-row rbc-time-header-cell" + (range.length <= 1 ? ' rbc-time-header-cell-single-day' : '')
      }, _this3.renderHeaderCells(range)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DateContentRow, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: groupedEvents.get(id) || [],
        resourceId: resource && id,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this3.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this3.props.onSelectEvent,
        onDoubleClick: _this3.props.onDoubleClickEvent,
        onKeyPress: _this3.props.onKeyPressEvent,
        onSelectSlot: _this3.props.onSelectSlot,
        longPressThreshold: _this3.props.longPressThreshold,
        resizable: resizable
      }));
    }));
  };

  return TimeGridHeader;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

TimeGridHeader.propTypes =  true ? {
  range: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  resources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  isOverflowing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClickEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPressEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  getDrilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  scrollRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;

var NONE = {};
function Resources(resources, accessors) {
  return {
    map: function map(fn) {
      if (!resources) return [fn([NONE, null], 0)];
      return resources.map(function (resource, idx) {
        return fn([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = new Map();

      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }

      events.forEach(function (event) {
        var id = accessors.resource(event) || NONE;
        var resourceEvents = eventsByResource.get(id) || [];
        resourceEvents.push(event);
        eventsByResource.set(id, resourceEvents);
      });
      return eventsByResource;
    }
  };
}

var TimeGrid =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TimeGrid, _Component);

  function TimeGrid(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleScroll = function (e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };

    _this.handleResize = function () {
      Object(dom_helpers_animationFrame__WEBPACK_IMPORTED_MODULE_13__["cancel"])(_this.rafHandle);
      _this.rafHandle = Object(dom_helpers_animationFrame__WEBPACK_IMPORTED_MODULE_13__["request"])(_this.checkOverflow);
    };

    _this.gutterRef = function (ref) {
      _this.gutter = ref && Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(ref);
    };

    _this.handleSelectAlldayEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      notify(_this.props.onSelectEvent, args);
    };

    _this.handleSelectAllDaySlot = function (slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      notify(onSelectSlot, {
        slots: slots,
        start: slots[0],
        end: slots[slots.length - 1],
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };

    _this.checkOverflow = function () {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      var isOverflowing = content.scrollHeight > content.clientHeight;

      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;

        _this.setState({
          isOverflowing: isOverflowing
        }, function () {
          _this._updatingOverflow = false;
        });
      }
    };

    _this.memoizedResources = Object(memoize_one__WEBPACK_IMPORTED_MODULE_25__["default"])(function (resources, accessors) {
      return Resources(resources, accessors);
    });
    _this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    _this.scrollRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    _this.contentRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    _this._scrollRatio = null;
    return _this;
  }

  var _proto = TimeGrid.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this.calculateScroll();
  };

  _proto.componentDidMount = function componentDidMount() {
    this.checkOverflow();

    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll();
    window.addEventListener('resize', this.handleResize);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    Object(dom_helpers_animationFrame__WEBPACK_IMPORTED_MODULE_13__["cancel"])(this.rafHandle);

    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll(); //this.checkOverflow()
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var _this$props = this.props,
        range = _this$props.range,
        scrollToTime = _this$props.scrollToTime; // When paginating, reset scroll

    if (!Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(nextProps.range[0], range[0], 'minute') || !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(nextProps.scrollToTime, scrollToTime, 'minute')) {
      this.calculateScroll(nextProps);
    }
  };

  _proto.renderEvents = function renderEvents(range, events, now) {
    var _this2 = this;

    var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        components = _this$props2.components,
        accessors = _this$props2.accessors,
        localizer = _this$props2.localizer,
        dayLayoutAlgorithm = _this$props2.dayLayoutAlgorithm;
    var resources = this.memoizedResources(this.props.resources, accessors);
    var groupedEvents = resources.groupEvents(events);
    return resources.map(function (_ref, i) {
      var id = _ref[0],
          resource = _ref[1];
      return range.map(function (date, jj) {
        var daysEvents = (groupedEvents.get(id) || []).filter(function (event) {
          return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["inRange"])(date, accessors.start(event), accessors.end(event), 'day');
        });
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DayColumn, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this2.props, {
          localizer: localizer,
          min: merge(date, min),
          max: merge(date, max),
          resource: resource && id,
          components: components,
          isNow: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(date, now, 'day'),
          key: i + '-' + jj,
          date: date,
          events: daysEvents,
          dayLayoutAlgorithm: dayLayoutAlgorithm
        }));
      });
    });
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        events = _this$props3.events,
        range = _this$props3.range,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        selected = _this$props3.selected,
        getNow = _this$props3.getNow,
        resources = _this$props3.resources,
        components = _this$props3.components,
        accessors = _this$props3.accessors,
        getters = _this$props3.getters,
        localizer = _this$props3.localizer,
        min = _this$props3.min,
        max = _this$props3.max,
        showMultiDayTimes = _this$props3.showMultiDayTimes,
        longPressThreshold = _this$props3.longPressThreshold,
        resizable = _this$props3.resizable;
    width = width || this.state.gutterWidth;
    var start = range[0],
        end = range[range.length - 1];
    this.slots = range.length;
    var allDayEvents = [],
        rangeEvents = [];
    events.forEach(function (event) {
      if (inRange(event, start, end, accessors)) {
        var eStart = accessors.start(event),
            eEnd = accessors.end(event);

        if (accessors.allDay(event) || isJustDate(eStart) && isJustDate(eEnd) || !showMultiDayTimes && !Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(eStart, eEnd, 'day')) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });
    allDayEvents.sort(function (a, b) {
      return sortEvents(a, b, accessors);
    });
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('rbc-time-view', resources && 'rbc-time-view-resources')
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGridHeader, {
      range: range,
      events: allDayEvents,
      width: width,
      rtl: rtl,
      getNow: getNow,
      localizer: localizer,
      selected: selected,
      resources: this.memoizedResources(resources, accessors),
      selectable: this.props.selectable,
      accessors: accessors,
      getters: getters,
      components: components,
      scrollRef: this.scrollRef,
      isOverflowing: this.state.isOverflowing,
      longPressThreshold: longPressThreshold,
      onSelectSlot: this.handleSelectAllDaySlot,
      onSelectEvent: this.handleSelectAlldayEvent,
      onDoubleClickEvent: this.props.onDoubleClickEvent,
      onKeyPressEvent: this.props.onKeyPressEvent,
      onDrillDown: this.props.onDrillDown,
      getDrilldownView: this.props.getDrilldownView,
      resizable: resizable
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      ref: this.contentRef,
      className: "rbc-time-content",
      onScroll: this.handleScroll
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGutter, {
      date: start,
      ref: this.gutterRef,
      localizer: localizer,
      min: merge(start, min),
      max: merge(start, max),
      step: this.props.step,
      getNow: this.props.getNow,
      timeslots: this.props.timeslots,
      components: components,
      className: "rbc-time-gutter",
      getters: getters
    }), this.renderEvents(range, rangeEvents, getNow())));
  };

  _proto.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };

  _proto.measureGutter = function measureGutter() {
    var _this3 = this;

    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }

    this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function () {
      var width = Object(dom_helpers_width__WEBPACK_IMPORTED_MODULE_28__["default"])(_this3.gutter);

      if (width && _this3.state.gutterWidth !== width) {
        _this3.setState({
          gutterWidth: width
        });
      }
    });
  };

  _proto.applyScroll = function applyScroll() {
    if (this._scrollRatio != null) {
      var content = this.contentRef.current;
      content.scrollTop = content.scrollHeight * this._scrollRatio; // Only do this once

      this._scrollRatio = null;
    }
  };

  _proto.calculateScroll = function calculateScroll(props) {
    if (props === void 0) {
      props = this.props;
    }

    var _props = props,
        min = _props.min,
        max = _props.max,
        scrollToTime = _props.scrollToTime;
    var diffMillis = scrollToTime - Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(scrollToTime, 'day');
    var totalMillis = diff(max, min);
    this._scrollRatio = diffMillis / totalMillis;
  };

  return TimeGrid;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);
TimeGrid.propTypes =  true ? {
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  resources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  step: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  timeslots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  range: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date)),
  min: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  scrollToTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  showMultiDayTimes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  resizable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onNavigate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onSelectEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDoubleClickEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onKeyPressEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  getDrilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  dayLayoutAlgorithm: DayLayoutAlgorithmPropType
} : undefined;
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(new Date(), 'day'),
  max: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["endOf"])(new Date(), 'day'),
  scrollToTime: Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(new Date(), 'day')
};

var Day =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Day, _React$Component);

  function Day() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Day.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["date"]);

    var range = Day.range(date);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGrid, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      range: range,
      eventOffset: 10
    }));
  };

  return Day;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Day.propTypes =  true ? {
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired
} : undefined;

Day.range = function (date) {
  return [Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(date, 'day')];
};

Day.navigate = function (date, action) {
  switch (action) {
    case navigate.PREVIOUS:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, -1, 'day');

    case navigate.NEXT:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, 1, 'day');

    default:
      return date;
  }
};

Day.title = function (date, _ref) {
  var localizer = _ref.localizer;
  return localizer.format(date, 'dayHeaderFormat');
};

var Week =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Week, _React$Component);

  function Week() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Week.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["date"]);

    var range = Week.range(date, this.props);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGrid, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      range: range,
      eventOffset: 15
    }));
  };

  return Week;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Week.propTypes =  true ? {
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired
} : undefined;
Week.defaultProps = TimeGrid.defaultProps;

Week.navigate = function (date, action) {
  switch (action) {
    case navigate.PREVIOUS:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, -1, 'week');

    case navigate.NEXT:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, 1, 'week');

    default:
      return date;
  }
};

Week.range = function (date, _ref) {
  var localizer = _ref.localizer;
  var firstOfWeek = localizer.startOfWeek();
  var start = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(date, 'week', firstOfWeek);
  var end = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["endOf"])(date, 'week', firstOfWeek);
  return range(start, end);
};

Week.title = function (date, _ref2) {
  var localizer = _ref2.localizer;

  var _Week$range = Week.range(date, {
    localizer: localizer
  }),
      start = _Week$range[0],
      rest = _Week$range.slice(1);

  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

function workWeekRange(date, options) {
  return Week.range(date, options).filter(function (d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}

var WorkWeek =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(WorkWeek, _React$Component);

  function WorkWeek() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = WorkWeek.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        date = _this$props.date,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["date"]);

    var range = workWeekRange(date, this.props);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeGrid, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      range: range,
      eventOffset: 15
    }));
  };

  return WorkWeek;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

WorkWeek.propTypes =  true ? {
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date).isRequired
} : undefined;
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;

WorkWeek.title = function (date, _ref) {
  var localizer = _ref.localizer;

  var _workWeekRange = workWeekRange(date, {
    localizer: localizer
  }),
      start = _workWeekRange[0],
      rest = _workWeekRange.slice(1);

  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

function Agenda(_ref) {
  var selected = _ref.selected,
      getters = _ref.getters,
      accessors = _ref.accessors,
      localizer = _ref.localizer,
      components = _ref.components,
      length = _ref.length,
      date = _ref.date,
      events = _ref.events;
  var headerRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var dateColRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var timeColRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var tbodyRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _adjustHeader();
  });

  var renderDay = function renderDay(day, events, dayKey) {
    var Event = components.event,
        AgendaDate = components.date;
    events = events.filter(function (e) {
      return inRange(e, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["startOf"])(day, 'day'), Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["endOf"])(day, 'day'), accessors);
    });
    return events.map(function (event, idx) {
      var title = accessors.title(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var userProps = getters.eventProp(event, start, end, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
      var first = idx === 0 ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        rowSpan: events.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AgendaDate, {
        day: day,
        label: dateLabel
      }) : dateLabel) : false;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", {
        key: dayKey + '_' + idx,
        className: userProps.className,
        style: userProps.style
      }, first, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day, event)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td", {
        className: "rbc-agenda-event-cell"
      }, Event ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Event, {
        event: event,
        title: title
      }) : title));
    }, []);
  };

  var timeRangeLabel = function timeRangeLabel(day, event) {
    var labelClass = '',
        TimeComponent = components.time,
        label = localizer.messages.allDay;
    var end = accessors.end(event);
    var start = accessors.start(event);

    if (!accessors.allDay(event)) {
      if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end, 'day')) {
        label = localizer.format({
          start: start,
          end: end
        }, 'agendaTimeRangeFormat');
      } else if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(day, start, 'day')) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(day, end, 'day')) {
        label = localizer.format(end, 'agendaTimeFormat');
      }
    }

    if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["gt"])(day, start, 'day')) labelClass = 'rbc-continues-prior';
    if (Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["lt"])(day, end, 'day')) labelClass += ' rbc-continues-after';
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TimeComponent, {
      event: event,
      day: day,
      label: label
    }) : label);
  };

  var _adjustHeader = function _adjustHeader() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [Object(dom_helpers_width__WEBPACK_IMPORTED_MODULE_28__["default"])(firstRow.children[0]), Object(dom_helpers_width__WEBPACK_IMPORTED_MODULE_28__["default"])(firstRow.children[1])];

    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + 'px';
      timeColRef.current.style.width = _widths[1] + 'px';
    }

    if (isOverflowing) {
      Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_30__["default"])(header, 'rbc-header-overflowing');
      header.style.marginRight = Object(dom_helpers_scrollbarSize__WEBPACK_IMPORTED_MODULE_29__["default"])() + 'px';
    } else {
      Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_31__["default"])(header, 'rbc-header-overflowing');
    }
  };

  var messages = localizer.messages;
  var end = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, length, 'day');
  var range$1 = range(date, end, 'day');
  events = events.filter(function (event) {
    return inRange(event, date, end, accessors);
  });
  events.sort(function (a, b) {
    return +accessors.start(a) - +accessors.start(b);
  });
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages.date), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages.time), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th", {
    className: "rbc-header"
  }, messages.event)))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", {
    className: "rbc-agenda-table"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody", {
    ref: tbodyRef
  }, range$1.map(function (day, idx) {
    return renderDay(day, events, idx);
  }))))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages.noEventsInRange));
}

Agenda.propTypes =  true ? {
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),
  length: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  accessors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  getters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
} : undefined;
Agenda.defaultProps = {
  length: 30
};

Agenda.range = function (start, _ref2) {
  var _ref2$length = _ref2.length,
      length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length;
  var end = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(start, length, 'day');
  return {
    start: start,
    end: end
  };
};

Agenda.navigate = function (date, action, _ref3) {
  var _ref3$length = _ref3.length,
      length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length;

  switch (action) {
    case navigate.PREVIOUS:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, -length, 'day');

    case navigate.NEXT:
      return Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(date, length, 'day');

    default:
      return date;
  }
};

Agenda.title = function (start, _ref4) {
  var _ref4$length = _ref4.length,
      length = _ref4$length === void 0 ? Agenda.defaultProps.length : _ref4$length,
      localizer = _ref4.localizer;
  var end = Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["add"])(start, length, 'day');
  return localizer.format({
    start: start,
    end: end
  }, 'agendaHeaderFormat');
};

var _VIEWS;
var VIEWS = (_VIEWS = {}, _VIEWS[views.MONTH] = MonthView, _VIEWS[views.WEEK] = Week, _VIEWS[views.WORK_WEEK] = WorkWeek, _VIEWS[views.DAY] = Day, _VIEWS[views.AGENDA] = Agenda, _VIEWS);

function moveDate(View, _ref) {
  var action = _ref.action,
      date = _ref.date,
      today = _ref.today,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["action", "date", "today"]);

  View = typeof View === 'string' ? VIEWS[View] : View;

  switch (action) {
    case navigate.TODAY:
      date = today || new Date();
      break;

    case navigate.DATE:
      break;

    default:
      !(View && typeof View.navigate === 'function') ?  true ? invariant__WEBPACK_IMPORTED_MODULE_7___default()(false, 'Calendar View components must implement a static `.navigate(date, action)` method.s') : undefined : void 0;
      date = View.navigate(date, action, props);
  }

  return date;
}

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };

    _this.view = function (view) {
      _this.props.onView(view);
    };

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "rbc-toolbar"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "rbc-btn-group"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.TODAY)
    }, messages.today), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.PREVIOUS)
    }, messages.previous), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.NEXT)
    }, messages.next)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "rbc-toolbar-label"
    }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "rbc-btn-group"
    }, this.viewNamesGroup(messages)));
  };

  _proto.viewNamesGroup = function viewNamesGroup(messages) {
    var _this2 = this;

    var viewNames = this.props.views;
    var view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
          type: "button",
          key: name,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])({
            'rbc-active': view === name
          }),
          onClick: _this2.view.bind(null, name)
        }, messages[name]);
      });
    }
  };

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Toolbar.propTypes =  true ? {
  view: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  onNavigate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
} : undefined;

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor$1(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && typeof data === 'object' && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor(acc) {
  return function (data) {
    return accessor$1(data, acc);
  };
};

function viewNames$1(_views) {
  return !Array.isArray(_views) ? Object.keys(_views) : _views;
}

function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames$1(_views);
  return names.indexOf(view) !== -1;
}
/**
 * react-big-calendar is a full featured Calendar component for managing events and dates. It uses
 * modern `flexbox` for layout, making it super responsive and performant. Leaving most of the layout heavy lifting
 * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
 * height (feel free to adjust the styles to suit your specific needs).
 *
 * Big Calendar is unopiniated about editing and moving events, preferring to let you implement it in a way that makes
 * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
 * how to find the start and end datetimes and you can pass it whatever you want.
 *
 * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
 * which means that the event spans up to, but not including, the end date. In the case
 * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
 * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
 * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
 * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
 */


var Calendar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Calendar, _React$Component);

  function Calendar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.getViews = function () {
      var views = _this.props.views;

      if (Array.isArray(views)) {
        return Object(lodash_es_transform__WEBPACK_IMPORTED_MODULE_34__["default"])(views, function (obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }

      if (typeof views === 'object') {
        return Object(lodash_es_mapValues__WEBPACK_IMPORTED_MODULE_35__["default"])(views, function (value, key) {
          if (value === true) {
            return VIEWS[key];
          }

          return value;
        });
      }

      return VIEWS;
    };

    _this.getView = function () {
      var views = _this.getViews();

      return views[_this.props.view];
    };

    _this.getDrilldownView = function (date) {
      var _this$props = _this.props,
          view = _this$props.view,
          drilldownView = _this$props.drilldownView,
          getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(_this.getViews()));
    };

    _this.handleRangeChange = function (date, viewComponent, view) {
      var _this$props2 = _this.props,
          onRangeChange = _this$props2.onRangeChange,
          localizer = _this$props2.localizer;

      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date, {
            localizer: localizer
          }), view);
        } else {
          if (true) {
            console.error('onRangeChange prop not supported for this view');
          }
        }
      }
    };

    _this.handleNavigate = function (action, newDate) {
      var _this$props3 = _this.props,
          view = _this$props3.view,
          date = _this$props3.date,
          getNow = _this$props3.getNow,
          onNavigate = _this$props3.onNavigate,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3, ["view", "date", "getNow", "onNavigate"]);

      var ViewComponent = _this.getView();

      var today = getNow();
      date = moveDate(ViewComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        action: action,
        date: newDate || date || today,
        today: today
      }));
      onNavigate(date, view, action);

      _this.handleRangeChange(date, ViewComponent);
    };

    _this.handleViewChange = function (view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }

      var views = _this.getViews();

      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views[view], view);
    };

    _this.handleSelectEvent = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onSelectEvent, args);
    };

    _this.handleDoubleClickEvent = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    _this.handleKeyPressEvent = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      notify(_this.props.onKeyPressEvent, args);
    };

    _this.handleSelectSlot = function (slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };

    _this.handleDrillDown = function (date, view) {
      var onDrillDown = _this.props.onDrillDown;

      if (onDrillDown) {
        onDrillDown(date, view, _this.drilldownView);
        return;
      }

      if (view) _this.handleViewChange(view);

      _this.handleNavigate(navigate.DATE, date);
    };

    _this.state = {
      context: _this.getContext(_this.props)
    };
    return _this;
  }

  var _proto = Calendar.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      context: this.getContext(nextProps)
    });
  };

  _proto.getContext = function getContext(_ref2) {
    var startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        slotGroupPropGetter = _ref2.slotGroupPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats;
    var names = viewNames$1(views);
    var msgs = messages(messages$1);
    return {
      viewNames: names,
      localizer: mergeWithDefaults(localizer, culture, formats, msgs),
      getters: {
        eventProp: function eventProp() {
          return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
        },
        slotProp: function slotProp() {
          return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
        },
        slotGroupProp: function slotGroupProp() {
          return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
        },
        dayProp: function dayProp() {
          return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
        }
      },
      components: Object(lodash_es_defaults__WEBPACK_IMPORTED_MODULE_33__["default"])(components[view] || {}, Object(lodash_es_omit__WEBPACK_IMPORTED_MODULE_32__["default"])(components, names), {
        eventWrapper: NoopWrapper,
        eventContainerWrapper: NoopWrapper,
        dateCellWrapper: NoopWrapper,
        weekWrapper: NoopWrapper,
        timeSlotWrapper: NoopWrapper
      }),
      accessors: {
        start: wrapAccessor(startAccessor),
        end: wrapAccessor(endAccessor),
        allDay: wrapAccessor(allDayAccessor),
        tooltip: wrapAccessor(tooltipAccessor),
        title: wrapAccessor(titleAccessor),
        resource: wrapAccessor(resourceAccessor),
        resourceId: wrapAccessor(resourceIdAccessor),
        resourceTitle: wrapAccessor(resourceTitleAccessor)
      }
    };
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        onShowMore = _this$props4.onShowMore,
        _0 = _this$props4.components,
        _1 = _this$props4.formats,
        _2 = _this$props4.messages,
        _3 = _this$props4.culture,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props4, ["view", "toolbar", "events", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "components", "formats", "messages", "culture"]);

    current = current || getNow();
    var View = this.getView();
    var _this$state$context = this.state.context,
        accessors = _this$state$context.accessors,
        components = _this$state$context.components,
        getters = _this$state$context.getters,
        localizer = _this$state$context.localizer,
        viewNames = _this$state$context.viewNames;
    var CalToolbar = components.toolbar || Toolbar;
    var label = View.title(current, {
      localizer: localizer,
      length: length
    });
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementProps, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
      style: style
    }), toolbar && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(CalToolbar, {
      date: current,
      view: view,
      views: viewNames,
      label: label,
      onView: this.handleViewChange,
      onNavigate: this.handleNavigate,
      localizer: localizer
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(View, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      events: events,
      date: current,
      getNow: getNow,
      length: length,
      localizer: localizer,
      getters: getters,
      components: components,
      accessors: accessors,
      showMultiDayTimes: showMultiDayTimes,
      getDrilldownView: this.getDrilldownView,
      onNavigate: this.handleNavigate,
      onDrillDown: this.handleDrillDown,
      onSelectEvent: this.handleSelectEvent,
      onDoubleClickEvent: this.handleDoubleClickEvent,
      onKeyPressEvent: this.handleKeyPressEvent,
      onSelectSlot: this.handleSelectSlot,
      onShowMore: onShowMore
    })));
  }
  /**
   *
   * @param date
   * @param viewComponent
   * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
   * parameter. It appears when range change on view changing. It could be handy
   * when you need to have both: range and view type at once, i.e. for manage rbc
   * state via url
   */
  ;

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Calendar.defaultProps = {
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views.MONTH,
  views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
  step: 30,
  length: 30,
  drilldownView: views.DAY,
  titleAccessor: 'title',
  tooltipAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end',
  resourceAccessor: 'resourceId',
  resourceIdAccessor: 'id',
  resourceTitleAccessor: 'title',
  longPressThreshold: 250,
  getNow: function getNow() {
    return new Date();
  },
  dayLayoutAlgorithm: 'overlap'
};
Calendar.propTypes =  true ? {
  localizer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * Props passed to main calendar `<div>`.
   *
   */
  elementProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The current date value of the calendar. Determines the visible view range.
   * If `date` is omitted then the result of `getNow` is used; otherwise the
   * current date is used.
   *
   * @controllable onNavigate
   */
  date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),

  /**
   * The current view of the calendar.
   *
   * @default 'month'
   * @controllable onView
   */
  view: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The initial view set for the Calendar.
   * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @default 'month'
   */
  defaultView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * An array of event objects to display on the calendar. Events objects
   * can be any shape, as long as the Calendar knows how to retrieve the
   * following details of the event:
   *
   *  - start time
   *  - end time
   *  - title
   *  - whether its an "all day" event or not
   *  - any resource the event may be related to
   *
   * Each of these properties can be customized or generated dynamically by
   * setting the various "accessor" props. Without any configuration the default
   * event should look like:
   *
   * ```js
   * Event {
   *   title: string,
   *   start: Date,
   *   end: Date,
   *   allDay?: boolean
   *   resource?: any,
   * }
   * ```
   */
  events: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),

  /**
   * Accessor for the event title, used to display event information. Should
   * resolve to a `renderable` value.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  titleAccessor: accessor,

  /**
   * Accessor for the event tooltip. Should
   * resolve to a `renderable` value. Removes the tooltip if null.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  tooltipAccessor: accessor,

  /**
   * Determines whether the event should be considered an "all day" event and ignore time.
   * Must resolve to a `boolean` value.
   *
   * ```js
   * string | (event: Object) => boolean
   * ```
   *
   * @type {(func|string)}
   */
  allDayAccessor: accessor,

  /**
   * The start date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  startAccessor: accessor,

  /**
   * The end date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  endAccessor: accessor,

  /**
   * Returns the id of the `resource` that the event is a member of. This
   * id should match at least one resource in the `resources` array.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  resourceAccessor: accessor,

  /**
   * An array of resource objects that map events to a specific resource.
   * Resource objects, like events, can be any shape or have any properties,
   * but should be uniquly identifiable via the `resourceIdAccessor`, as
   * well as a "title" or name as provided by the `resourceTitleAccessor` prop.
   */
  resources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),

  /**
   * Provides a unique identifier for each resource in the `resources` array
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceIdAccessor: accessor,

  /**
   * Provides a human readable name for the resource object, used in headers.
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceTitleAccessor: accessor,

  /**
   * Determines the current date/time which is highlighted in the views.
   *
   * The value affects which day is shaded and which time is shown as
   * the current time. It also affects the date used by the Today button in
   * the toolbar.
   *
   * Providing a value here can be useful when you are implementing time zones
   * using the `startAccessor` and `endAccessor` properties.
   *
   * @type {func}
   * @default () => new Date()
   */
  getNow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the `date` value changes.
   *
   * @controllable date
   */
  onNavigate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the `view` value changes.
   *
   * @controllable view
   */
  onView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when date header, or the truncated events links are clicked
   *
   */
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   *
   * ```js
   * (dates: Date[] | { start: Date; end: Date }, view: 'month'|'week'|'work_week'|'day'|'agenda'|undefined) => void
   * ```
   *
   * Callback fired when the visible date range changes. Returns an Array of dates
   * or an object with start and end dates for BUILTIN views. Optionally new `view`
   * will be returned when callback called after view change.
   *
   * Custom views may return something different.
   */
  onRangeChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
   *
   * ```js
   * (
   *   slotInfo: {
   *     start: Date,
   *     end: Date,
   *     resourceId:  (number|string),
   *     slots: Array<Date>,
   *     action: "select" | "click" | "doubleClick",
   *     bounds: ?{ // For "select" action
   *       x: number,
   *       y: number,
   *       top: number,
   *       right: number,
   *       left: number,
   *       bottom: number,
   *     },
   *     box: ?{ // For "click" or "doubleClick" actions
   *       clientX: number,
   *       clientY: number,
   *       x: number,
   *       y: number,
   *     },
   *   }
   * ) => any
   * ```
   */
  onSelectSlot: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when a calendar event is selected.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => any
   * ```
   *
   * @controllable selected
   */
  onSelectEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when a calendar event is clicked twice.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => void
   * ```
   */
  onDoubleClickEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when a focused calendar event recieves a key press.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => void
   * ```
   */
  onKeyPressEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when dragging a selection in the Time views.
   *
   * Returning `false` from the handler will prevent a selection.
   *
   * ```js
   * (range: { start: Date, end: Date, resourceId: (number|string) }) => ?boolean
   * ```
   */
  onSelecting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when a +{count} more is clicked
   *
   * ```js
   * (events: Object, date: Date) => any
   * ```
   */
  onShowMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Displays all events on the month view instead of
   * having some hidden behind +{count} more. This will
   * cause the rows in the month view to be scrollable if
   * the number of events exceed the height of the row.
   */
  showAllEvents: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The selected event, if any.
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * An array of built-in view names to allow the calendar to display.
   * accepts either an array of builtin view names,
   *
   * ```jsx
   * views={['month', 'day', 'agenda']}
   * ```
   * or an object hash of the view name and the component (or boolean for builtin).
   *
   * ```jsx
   * views={{
   *   month: true,
   *   week: false,
   *   myweek: WorkWeekViewComponent,
   * }}
   * ```
   *
   * Custom views can be any React component, that implements the following
   * interface:
   *
   * ```js
   * interface View {
   *   static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
   *   static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
   * }
   * ```
   *
   * @type Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @View
   ['month', 'week', 'day', 'agenda']
   */
  views: views$1,

  /**
   * The string name of the destination view for drill-down actions, such
   * as clicking a date header, or the truncated events links. If
   * `getDrilldownView` is also specified it will be used instead.
   *
   * Set to `null` to disable drill-down actions.
   *
   * ```js
   * <Calendar
   *   drilldownView="agenda"
   * />
   * ```
   */
  drilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Functionally equivalent to `drilldownView`, but accepts a function
   * that can return a view name. It's useful for customizing the drill-down
   * actions depending on the target date and triggering view.
   *
   * Return `null` to disable drill-down actions.
   *
   * ```js
   * <Calendar
   *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
   *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
   *       return 'week'
   *
   *     return null;
   *   }}
   * />
   * ```
   */
  getDrilldownView: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Determines the end date from date prop in the agenda view
   * date prop + length (in number of days) = end date
   */
  length: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Determines whether the toolbar is displayed
   */
  toolbar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Show truncated events in an overlay when you click the "+_x_ more" link.
   */
  popup: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
   *
   * ```jsx
   * <Calendar popupOffset={30}/>
   * <Calendar popupOffset={{x: 30, y: 20}}/>
   * ```
   */
  popupOffset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),

  /**
   * Allows mouse selection of ranges of dates/times.
   *
   * The 'ignoreEvents' option prevents selection code from running when a
   * drag begins over an event. Useful when you want custom event click or drag
   * logic
   */
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([true, false, 'ignoreEvents']),

  /**
   * Specifies the number of miliseconds the user must press and hold on the screen for a touch
   * to be considered a "long press." Long presses are used for time slot selection on touch
   * devices.
   *
   * @type {number}
   * @default 250
   */
  longPressThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Determines the selectable time increments in week and day views, in minutes.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The number of slots per "section" in the time grid views. Adjust with `step`
   * to change the default of 1 hour long groups, with 30 minute slots.
   */
  timeslots: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   *Switch the calendar to a `right-to-left` read direction.
   */
  rtl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the event node.
   *
   * ```js
   * (
   * 	event: Object,
   * 	start: Date,
   * 	end: Date,
   * 	isSelected: boolean
   * ) => { className?: string, style?: Object }
   * ```
   */
  eventPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the time-slot node. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date, resourceId: (number|string)) => { className?: string, style?: Object }
   * ```
   */
  slotPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Optionally provide a function that returns an object of props to be applied
   * to the time-slot group node. Useful to dynamically change the sizing of time nodes.
   * ```js
   * () => { style?: Object }
   * ```
   */
  slotGroupPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the day background. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date) => { className?: string, style?: Object }
   * ```
   */
  dayPropGetter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Support to show multi-day events with specific start and end times in the
   * main time grid (rather than in the all day header).
   *
   * **Note: This may cause calendars with several events to look very busy in
   * the week and day views.**
   */
  showMultiDayTimes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Constrains the minimum _time_ of the Day and Week views.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),

  /**
   * Constrains the maximum _time_ of the Day and Week views.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),

  /**
   * Determines how far down the scroll pane is initially scrolled down.
   */
  scrollToTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date),

  /**
   * Specify a specific culture code for the Calendar.
   *
   * **Note: it's generally better to handle this globally via your i18n library.**
   */
  culture: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Localizer specific formats, tell the Calendar how to format and display dates.
   *
   * `format` types are dependent on the configured localizer; both Moment and Globalize
   * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
   *
   * ```jsx
   * let formats = {
   *   dateFormat: 'dd',
   *
   *   dayFormat: (date, , localizer) =>
   *     localizer.format(date, 'DDD', culture),
   *
   *   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
   *     localizer.format(start, { date: 'short' }, culture) + ' – ' +
   *     localizer.format(end, { date: 'short' }, culture)
   * }
   *
   * <Calendar formats={formats} />
   * ```
   *
   * All localizers accept a function of
   * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
   */
  formats: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat: dateFormat,

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat: dateFormat,

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat: dateFormat,

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat: dateFormat,

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat: dateFormat,

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat: dateRangeFormat,

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat: dateFormat,

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 – 5/1/2015"
     */
    agendaHeaderFormat: dateRangeFormat,

    /**
     * A time range format for selecting time slots, e.g "8:00am – 2:00pm"
     */
    selectRangeFormat: dateRangeFormat,
    agendaDateFormat: dateFormat,
    agendaTimeFormat: dateFormat,
    agendaTimeRangeFormat: dateRangeFormat,

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat: dateRangeFormat,

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat: dateFormat,

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat: dateFormat
  }),

  /**
   * Customize how different sections of the calendar render by providing custom Components.
   * In particular the `Event` component can be specified for the entire calendar, or you can
   * provide an individual component for each view type.
   *
   * ```jsx
   * let components = {
   *   event: MyEvent, // used by each view (Month, Day, Week)
   *   eventWrapper: MyEventWrapper,
   *   eventContainerWrapper: MyEventContainerWrapper,
   *   dateCellWrapper: MyDateCellWrapper,
   *   timeSlotWrapper: MyTimeSlotWrapper,
   *   timeGutterHeader: MyTimeGutterWrapper,
   *   toolbar: MyToolbar,
   *   agenda: {
   *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
   *     time: MyAgendaTime,
   *     date: MyAgendaDate,
   *   },
   *   day: {
   *     header: MyDayHeader,
   *     event: MyDayEvent,
   *   },
   *   week: {
   *     header: MyWeekHeader,
   *     event: MyWeekEvent,
   *   },
   *   month: {
   *     header: MyMonthHeader,
   *     dateHeader: MyMonthDateHeader,
   *     event: MyMonthEvent,
   *   }
   * }
   * <Calendar components={components} />
   * ```
   */
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    eventWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    eventContainerWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    dateCellWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    timeSlotWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    timeGutterHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    resourceHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    toolbar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
    agenda: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      time: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType
    }),
    day: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType
    }),
    week: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType
    }),
    month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      dateHeader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,
      event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType
    })
  }),

  /**
   * String messages used throughout the component, override to provide localizations
   */
  messages: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    allDay: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    previous: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    next: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    today: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    month: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    week: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    day: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    agenda: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    date: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    time: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    event: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    noEventsInRange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    showMore: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
  }),

  /**
   * A day event layout(arrangement) algorithm.
   * `overlap` allows events to be overlapped.
   * `no-overlap` resizes events to avoid overlap.
   * or custom `Function(events, minimumStartDifference, slotMetrics, accessors)`
   */
  dayLayoutAlgorithm: DayLayoutAlgorithmPropType
} : undefined;
var Calendar$1 = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["uncontrollable"])(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});

var dateRangeFormat$1 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};

var timeRangeFormat = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};

var timeRangeStartFormat = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 'LT', culture) + ' – ';
};

var timeRangeEndFormat = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, 'LT', culture);
};

var weekRangeFormat = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' + local.format(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};

var formats = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
};
function moment (moment) {
  var locale = function locale(m, c) {
    return c ? m.locale(c) : m;
  };

  return new DateLocalizer({
    formats: formats,
    firstOfWeek: function firstOfWeek(culture) {
      var data = culture ? moment.localeData(culture) : moment.localeData();
      return data ? data.firstDayOfWeek() : 0;
    },
    format: function format(value, _format, culture) {
      return locale(moment(value), culture).format(_format);
    }
  });
}

var dateRangeFormat$2 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
};

var timeRangeFormat$1 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};

var timeRangeStartFormat$1 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 't', culture) + ' – ';
};

var timeRangeEndFormat$1 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, 't', culture);
};

var weekRangeFormat$1 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

var formats$1 = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$2,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$1
};
function oldGlobalize (globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }

  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }

  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$1,
    format: function format(value, _format, culture) {
      return globalize.format(value, _format, culture);
    }
  });
}

var dateRangeFormat$3 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, {
    date: 'short'
  }, culture) + ' – ' + local.format(end, {
    date: 'short'
  }, culture);
};

var timeRangeFormat$2 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};

var timeRangeStartFormat$2 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ';
};

var timeRangeEndFormat$2 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};

var weekRangeFormat$2 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

var formats$2 = {
  dateFormat: 'dd',
  dayFormat: 'eee dd/MM',
  weekdayFormat: 'eee',
  selectRangeFormat: timeRangeFormat$2,
  eventTimeRangeFormat: timeRangeFormat$2,
  eventTimeRangeStartFormat: timeRangeStartFormat$2,
  eventTimeRangeEndFormat: timeRangeEndFormat$2,
  timeGutterFormat: {
    time: 'short'
  },
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'eeee MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$2,
  agendaHeaderFormat: dateRangeFormat$3,
  agendaDateFormat: 'eee MMM dd',
  agendaTimeFormat: {
    time: 'short'
  },
  agendaTimeRangeFormat: timeRangeFormat$2
};
function globalize (globalize) {
  var locale = function locale(culture) {
    return culture ? globalize(culture) : globalize;
  }; // return the first day of the week from the locale data. Defaults to 'world'
  // territory if no territory is derivable from CLDR.
  // Failing to use CLDR supplemental (not loaded?), revert to the original
  // method of getting first day of week.


  function firstOfWeek(culture) {
    try {
      var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      var cldr = locale(culture).cldr;
      var territory = cldr.attributes.territory;
      var weekData = cldr.get('supplemental').weekData;
      var firstDay = weekData.firstDay[territory || '001'];
      return days.indexOf(firstDay);
    } catch (e) {
      if (true) {
        console.error('Failed to accurately determine first day of the week.' + ' Is supplemental data loaded into CLDR?');
      } // maybe cldr supplemental is not loaded? revert to original method


      var date = new Date(); //cldr-data doesn't seem to be zero based

      var localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
        raw: 'e'
      }), 10) - 1, 0);
      return Math.abs(date.getDay() - localeDay);
    }
  }

  if (!globalize.load) return oldGlobalize(globalize);
  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$2,
    format: function format(value, _format, culture) {
      _format = typeof _format === 'string' ? {
        raw: _format
      } : _format;
      return locale(culture).formatDate(value, _format);
    }
  });
}

var dateRangeFormat$4 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
      end = _ref.end;
  return local.format(start, 'P', culture) + " \u2013 " + local.format(end, 'P', culture);
};

var timeRangeFormat$3 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 'p', culture) + " \u2013 " + local.format(end, 'p', culture);
};

var timeRangeStartFormat$3 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 'h:mma', culture) + " \u2013 ";
};

var timeRangeEndFormat$3 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return " \u2013 " + local.format(end, 'h:mma', culture);
};

var weekRangeFormat$3 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMMM dd', culture) + " \u2013 " + local.format(end, Object(date_arithmetic__WEBPACK_IMPORTED_MODULE_10__["eq"])(start, end, 'month') ? 'dd' : 'MMMM dd', culture);
};

var formats$3 = {
  dateFormat: 'dd',
  dayFormat: 'dd eee',
  weekdayFormat: 'cccc',
  selectRangeFormat: timeRangeFormat$3,
  eventTimeRangeFormat: timeRangeFormat$3,
  eventTimeRangeStartFormat: timeRangeStartFormat$3,
  eventTimeRangeEndFormat: timeRangeEndFormat$3,
  timeGutterFormat: 'p',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'cccc MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$3,
  agendaHeaderFormat: dateRangeFormat$4,
  agendaDateFormat: 'ccc MMM dd',
  agendaTimeFormat: 'p',
  agendaTimeRangeFormat: timeRangeFormat$3
};

var dateFnsLocalizer = function dateFnsLocalizer(_ref6) {
  var startOfWeek = _ref6.startOfWeek,
      getDay = _ref6.getDay,
      _format = _ref6.format,
      locales = _ref6.locales;
  return new DateLocalizer({
    formats: formats$3,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay(startOfWeek(new Date(), {
        locale: locales[culture]
      }));
    },
    format: function format(value, formatString, culture) {
      return _format(new Date(value), formatString, {
        locale: locales[culture]
      });
    }
  });
};

var components = {
  eventWrapper: NoopWrapper,
  timeSlotWrapper: NoopWrapper,
  dateCellWrapper: NoopWrapper
};




/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_DataView.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_DataView.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["default"] = (DataView);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Hash.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Hash.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Hash);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (ListCache);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Map.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Map.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_MapCache.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_MapCache.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapCache);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Promise.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Promise.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Set.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Set.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_SetCache.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_SetCache.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_MapCache.js");
/* harmony import */ var _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_setCacheAdd.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheAdd.js");
/* harmony import */ var _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setCacheHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheHas.js");




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd_js__WEBPACK_IMPORTED_MODULE_1__["default"];
SetCache.prototype.has = _setCacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (SetCache);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Stack.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Stack.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_Uint8Array.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_Uint8Array.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ __webpack_exports__["default"] = (Uint8Array);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_WeakMap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_WeakMap.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_apply.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_apply.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ __webpack_exports__["default"] = (apply);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayEach.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arrayEach.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEach);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayFilter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arrayFilter.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayFilter);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayLikeKeys.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isArg = !isArr && Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      isType = !isArr && !isArg && !isBuff && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(_baseTimes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayLikeKeys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayMap.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arrayMap.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayPush.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arrayPush.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayPush);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_arraySome.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_arraySome.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (arraySome);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_assignValue.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_assignValue.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (assocIndexOf);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssign.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssign.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssign);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignIn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignIn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js");



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignValue.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignValue);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseClone.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseClone.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Stack.js");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseAssign.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssign.js");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseAssignIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignIn.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_copySymbols.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbols.js");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbolsIn.js");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeys.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeysIn.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneArray.js");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_initCloneByTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneByTag.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isMap.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./keys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js");























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_18__["default"])(value)) {
    return value;
  }
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value);
  if (isArr) {
    result = Object(_initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value);
    if (!isDeep) {
      return Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, result);
    }
  } else {
    var tag = Object(_getTag_js__WEBPACK_IMPORTED_MODULE_11__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if (Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_16__["default"])(value)) {
      return Object(_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : Object(_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? Object(_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, Object(_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result, value))
          : Object(_copySymbols_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value, Object(_baseAssign_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = Object(_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (Object(_isSet_js__WEBPACK_IMPORTED_MODULE_19__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (Object(_isMap_js__WEBPACK_IMPORTED_MODULE_17__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__["default"])
    : (isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_21__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_20__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  Object(_arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClone);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseCreate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseCreate.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseEach.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseEach.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseForOwn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseForOwn.js");
/* harmony import */ var _createBaseEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_createBaseEach.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseEach.js");



/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = Object(_createBaseEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (baseEach);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFindIndex.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseFindIndex.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (baseFindIndex);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFlatten.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseFlatten.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isFlattenable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isFlattenable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isFlattenable.js");



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseFlatten);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseFor.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createBaseFor.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseFor.js");


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = Object(_createBaseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (baseFor);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseForOwn.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseForOwn.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFor.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && Object(_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, iteratee, _keys_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (baseForOwn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js");



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[Object(_toKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (baseGet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetAllKeys.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) ? result : Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetAllKeys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseHasIn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseHasIn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseHasIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsArguments.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsArguments.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsArguments);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqual.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqual.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqualDeep.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqualDeep.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && !Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other))) {
    return value !== value && other !== other;
  }
  return Object(_baseIsEqualDeep_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsEqual);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqualDeep.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqualDeep.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Stack.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _equalByTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_equalByTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalByTag.js");
/* harmony import */ var _equalObjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_equalObjects.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalObjects.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isTypedArray.js");









/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object),
      othIsArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(other),
      objTag = objIsArr ? arrayTag : Object(_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object),
      othTag = othIsArr ? arrayTag : Object(_getTag_js__WEBPACK_IMPORTED_MODULE_4__["default"])(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object)) {
    if (!Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return (objIsArr || Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object))
      ? Object(_equalArrays_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, other, bitmask, customizer, equalFunc, stack)
      : Object(_equalByTag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return Object(_equalObjects_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsEqualDeep);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMap.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMap.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == mapTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMap);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMatch.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMatch.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Stack.js");
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqual.js");



/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_1__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMatch);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsNative.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsNative.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsNative);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsSet.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsSet.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == setTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsTypedArray.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) &&
    Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsTypedArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseMatches_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseMatches.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatches.js");
/* harmony import */ var _baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMatchesProperty.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatchesProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/identity.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/property.js");






/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  if (typeof value == 'object') {
    return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)
      ? Object(_baseMatchesProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value[0], value[1])
      : Object(_baseMatches_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  }
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseIteratee);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeys.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeysIn.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeysIn.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  }
  var isProto = Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseMap.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseEach.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseEach.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js");



/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection) ? Array(collection.length) : [];

  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMap);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatches.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatches.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMatch.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMatch.js");
/* harmony import */ var _getMatchData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getMatchData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMatchData.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_matchesStrictComparable.js");




/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = Object(_getMatchData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return Object(_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || Object(_baseIsMatch_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, source, matchData);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseMatches);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatchesProperty.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseMatchesProperty.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsEqual.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsEqual.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/get.js");
/* harmony import */ var _hasIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/hasIn.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKey.js");
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_matchesStrictComparable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_matchesStrictComparable.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js");








/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (Object(_isKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path) && Object(_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue)) {
    return Object(_matchesStrictComparable_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_toKey_js__WEBPACK_IMPORTED_MODULE_6__["default"])(path), srcValue);
  }
  return function(object) {
    var objValue = Object(_get_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? Object(_hasIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, path)
      : Object(_baseIsEqual_js__WEBPACK_IMPORTED_MODULE_0__["default"])(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseMatchesProperty);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseOrderBy.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseOrderBy.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _baseMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseMap.js");
/* harmony import */ var _baseSortBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseSortBy.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSortBy.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _compareMultiple_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_compareMultiple.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_compareMultiple.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/identity.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");










/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function(iteratee) {
      if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(iteratee)) {
        return function(value) {
          return Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [_identity_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
  }

  var index = -1;
  iteratees = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"]));

  var result = Object(_baseMap_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, function(value, key, collection) {
    var criteria = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return Object(_baseSortBy_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result, function(object, other) {
    return Object(_compareMultiple_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object, other, orders);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (baseOrderBy);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseProperty.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseProperty);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_basePropertyDeep.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_basePropertyDeep.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js");


/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (basePropertyDeep);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseRange.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseRange.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseRange);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseRest.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/identity.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_setToString.js");




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return Object(_setToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, start, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"]), func + '');
}

/* harmony default export */ __webpack_exports__["default"] = (baseRest);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSetToString.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseSetToString.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/constant.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_defineProperty.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/identity.js");




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? _identity_js__WEBPACK_IMPORTED_MODULE_2__["default"] : function(func, string) {
  return Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string),
    'writable': true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (baseSetToString);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSlice.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseSlice.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSlice);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSortBy.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseSortBy.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSortBy);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseTimes.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseTimes.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTimes);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseToString.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseToString.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseUnary);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnset.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnset.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js");
/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/last.js");
/* harmony import */ var _parent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_parent.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_parent.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js");





/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);
  object = Object(_parent_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, path);
  return object == null || delete object[Object(_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_last_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path))];
}

/* harmony default export */ __webpack_exports__["default"] = (baseUnset);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cacheHas.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cacheHas.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (cacheHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKey.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toString.js");





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  return Object(_isKey_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, object) ? [value] : Object(_stringToPath_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_toString_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (castPath);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneBuffer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneBuffer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneDataView.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneDataView.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDataView);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneRegExp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneRegExp.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneRegExp);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneSymbol.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneSymbol.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSymbol);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneTypedArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_cloneTypedArray.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_compareAscending.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_compareAscending.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js");


/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (compareAscending);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_compareMultiple.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_compareMultiple.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compareAscending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_compareAscending.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_compareAscending.js");


/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = Object(_compareAscending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

/* harmony default export */ __webpack_exports__["default"] = (compareMultiple);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_copyArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    } else {
      Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbols.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbols.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbols.js");



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbols);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbolsIn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_copySymbolsIn.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbolsIn.js");



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbolsIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_coreJsData.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_coreJsData.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["default"] = (coreJsData);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseEach.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseEach.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js");


/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBaseEach);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseFor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_createBaseFor.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createBaseFor);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_createRange.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_createRange.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRange.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseRange.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js");
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toFinite.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toFinite.js");




/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = Object(_toFinite_js__WEBPACK_IMPORTED_MODULE_2__["default"])(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = Object(_toFinite_js__WEBPACK_IMPORTED_MODULE_2__["default"])(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : Object(_toFinite_js__WEBPACK_IMPORTED_MODULE_2__["default"])(step);
    return Object(_baseRange_js__WEBPACK_IMPORTED_MODULE_0__["default"])(start, end, step, fromRight);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createRange);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_customOmitClone.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_customOmitClone.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isPlainObject.js");


/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return Object(_isPlainObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? undefined : value;
}

/* harmony default export */ __webpack_exports__["default"] = (customOmitClone);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_defineProperty.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_defineProperty.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (defineProperty);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalArrays.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_equalArrays.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SetCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_SetCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_SetCache.js");
/* harmony import */ var _arraySome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arraySome.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arraySome.js");
/* harmony import */ var _cacheHas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cacheHas.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cacheHas.js");




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!Object(_arraySome_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other, function(othValue, othIndex) {
            if (!Object(_cacheHas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (equalArrays);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalByTag.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_equalByTag.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Uint8Array.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eq.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js");
/* harmony import */ var _equalArrays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_equalArrays.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalArrays.js");
/* harmony import */ var _mapToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapToArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapToArray.js");
/* harmony import */ var _setToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_setToArray.js");







/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](object), new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_1__["default"](other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return Object(_eq_js__WEBPACK_IMPORTED_MODULE_2__["default"])(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"];

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = Object(_equalArrays_js__WEBPACK_IMPORTED_MODULE_3__["default"])(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (equalByTag);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_equalObjects.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_equalObjects.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeys.js");


/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = Object(_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object),
      objLength = objProps.length,
      othProps = Object(_getAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (equalObjects);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_flatRest.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_flatRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flatten.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/flatten.js");
/* harmony import */ var _overRest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_overRest.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_overRest.js");
/* harmony import */ var _setToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_setToString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_setToString.js");




/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return Object(_setToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_overRest_js__WEBPACK_IMPORTED_MODULE_1__["default"])(func, undefined, _flatten_js__WEBPACK_IMPORTED_MODULE_0__["default"]), func + '');
}

/* harmony default export */ __webpack_exports__["default"] = (flatRest);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_freeGlobal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_freeGlobal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeys.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeysIn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeysIn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbolsIn.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js");




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeysIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return Object(_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["default"] = (getMapData);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMatchData.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getMatchData.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isStrictComparable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isStrictComparable.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isStrictComparable.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js");



/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, Object(_isStrictComparable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getMatchData);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  return Object(_baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (getNative);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getRawTag.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getRawTag.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbols.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return Object(_arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbols);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbolsIn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbolsIn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stubArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/stubArray.js");





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_3__["default"] : function(object) {
  var result = [];
  while (object) {
    Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbolsIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getTag.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataView.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Promise.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Set.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toSource.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    promiseCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    weakMapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getTag);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_getValue.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_getValue.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["default"] = (getValue);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hasPath.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hasPath.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isLength.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js");







/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_0__["default"])(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = Object(_toKey_js__WEBPACK_IMPORTED_MODULE_5__["default"])(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_4__["default"])(length) && Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"])(key, length) &&
    (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object));
}

/* harmony default export */ __webpack_exports__["default"] = (hasPath);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashClear.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hashClear.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (hashClear);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashDelete.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hashDelete.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (hashDelete);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hashGet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (hashGet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashHas.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hashHas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["default"] = (hashHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_hashSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_hashSet.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (hashSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneArray.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneByTag.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneByTag.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneDataView.js");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneRegExp.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneRegExp.js");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_cloneTypedArray.js");






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return Object(_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return Object(_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return Object(_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return Object(_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneByTag);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneObject.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_initCloneObject.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object))
    : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isFlattenable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isFlattenable.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");




/** Built-in value references. */
var spreadableSymbol = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ __webpack_exports__["default"] = (isFlattenable);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIndex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isIndex.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["default"] = (isIndex);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) && Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[index], value);
  }
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (isIterateeCall);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKey.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isKey.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js");



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ __webpack_exports__["default"] = (isKey);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKeyable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isKeyable.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ __webpack_exports__["default"] = (isKeyable);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isMasked.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isMasked.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ __webpack_exports__["default"] = (isMasked);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isPrototype.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isPrototype.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["default"] = (isPrototype);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_isStrictComparable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_isStrictComparable.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");


/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isStrictComparable);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheClear.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheClear.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheClear);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheDelete.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheDelete.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheDelete);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheGet.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheGet.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheGet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheHas.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheHas.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheSet.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_listCacheSet.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheClear.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheClear.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheClear);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheDelete.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheDelete.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheDelete);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheGet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheGet.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheGet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheHas.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheHas.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheSet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapCacheSet.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_mapToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_mapToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapToArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_matchesStrictComparable.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_matchesStrictComparable.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (matchesStrictComparable);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_memoizeCapped.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_memoizeCapped.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = Object(_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeCapped);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_nativeCreate.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ __webpack_exports__["default"] = (nativeCreate);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeys.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeys.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["default"] = (nativeKeys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeysIn.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_nativeKeysIn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (nativeKeysIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_nodeUtil.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_nodeUtil.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_objectToString.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_objectToString.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_overArg.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_overArg.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_overRest.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_overRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_apply.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_apply.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return Object(_apply_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, this, otherArgs);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overRest);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_parent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_parent.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js");
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSlice.js");



/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path, 0, -1));
}

/* harmony default export */ __webpack_exports__["default"] = (parent);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_root.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheAdd.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheAdd.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (setCacheAdd);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheHas.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_setCacheHas.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ __webpack_exports__["default"] = (setCacheHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_setToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_setToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (setToArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_setToString.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_setToString.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSetToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSetToString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSetToString.js");
/* harmony import */ var _shortOut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shortOut.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_shortOut.js");



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = Object(_shortOut_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_baseSetToString_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (setToString);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_shortOut.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_shortOut.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (shortOut);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackClear.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stackClear.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (stackClear);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackDelete.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stackDelete.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (stackDelete);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackGet.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stackGet.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackGet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackHas.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stackHas.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackHas);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stackSet.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stackSet.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (stackSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_stringToPath.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_stringToPath.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = Object(_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (stringToPath);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (toKey);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/_toSource.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/_toSource.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (toSource);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/chunk.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/chunk.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSlice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseSlice.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseSlice.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toInteger.js");




/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = Object(_baseSlice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, index, (index += size));
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (chunk);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/constant.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/constant.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (constant);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/defaults.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/defaults.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js");





/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = Object(_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_2__["default"])(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_3__["default"])(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

/* harmony default export */ __webpack_exports__["default"] = (defaults);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/eq.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/eq.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["default"] = (eq);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/findIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/findIndex.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFindIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFindIndex.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFindIndex.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _toInteger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toInteger.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toInteger.js");




/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : Object(_toInteger_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return Object(_baseFindIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__["default"])(predicate, 3), index);
}

/* harmony default export */ __webpack_exports__["default"] = (findIndex);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/flatten.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/flatten.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFlatten.js");


/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? Object(_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, 1) : [];
}

/* harmony default export */ __webpack_exports__["default"] = (flatten);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/get.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/get.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGet.js");


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : Object(_baseGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ __webpack_exports__["default"] = (get);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/hasIn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/hasIn.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseHasIn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseHasIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseHasIn.js");
/* harmony import */ var _hasPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hasPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_hasPath.js");



/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && Object(_hasPath_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, path, _baseHasIn_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (hasIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/identity.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/identity.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ __webpack_exports__["default"] = (identity);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isArguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isArguments.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = Object(_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLike);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isFunction.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isFunction.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isLength.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isLength.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["default"] = (isLength);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isMap.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isMap.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isMap);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isPlainObject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isPlainObject.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isSet.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsSet.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsSet.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isSet);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/isTypedArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/isTypedArray.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isTypedArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/keys.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) : Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keys);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/keysIn.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, true) : Object(_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/last.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/last.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (last);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/mapValues.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/mapValues.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseForOwn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseForOwn.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js");




/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, 3);

  Object(_baseForOwn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, function(value, key, object) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, key, iteratee(value, key, object));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapValues);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/memoize.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/memoize.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/omit.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/omit.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseClone.js");
/* harmony import */ var _baseUnset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseUnset.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseUnset.js");
/* harmony import */ var _castPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_castPath.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_castPath.js");
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _customOmitClone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_customOmitClone.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_customOmitClone.js");
/* harmony import */ var _flatRest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_flatRest.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_flatRest.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getAllKeysIn.js");









/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = Object(_flatRest_js__WEBPACK_IMPORTED_MODULE_6__["default"])(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paths, function(path) {
    path = Object(_castPath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, Object(_getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_7__["default"])(object), result);
  if (isDeep) {
    result = Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, _customOmitClone_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
  var length = paths.length;
  while (length--) {
    Object(_baseUnset_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result, paths[length]);
  }
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (omit);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/property.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseProperty.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseProperty.js");
/* harmony import */ var _basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_basePropertyDeep.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_basePropertyDeep.js");
/* harmony import */ var _isKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isKey.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toKey.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_toKey.js");





/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return Object(_isKey_js__WEBPACK_IMPORTED_MODULE_2__["default"])(path) ? Object(_baseProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_toKey_js__WEBPACK_IMPORTED_MODULE_3__["default"])(path)) : Object(_basePropertyDeep_js__WEBPACK_IMPORTED_MODULE_1__["default"])(path);
}

/* harmony default export */ __webpack_exports__["default"] = (property);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/range.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/range.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createRange.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_createRange.js");


/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = Object(_createRange_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (range);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/sortBy.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/sortBy.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFlatten.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseFlatten.js");
/* harmony import */ var _baseOrderBy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseOrderBy.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseOrderBy.js");
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseRest.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseRest.js");
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_isIterateeCall.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_isIterateeCall.js");





/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = Object(_baseRest_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && Object(_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return Object(_baseOrderBy_js__WEBPACK_IMPORTED_MODULE_1__["default"])(collection, Object(_baseFlatten_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratees, 1), []);
});

/* harmony default export */ __webpack_exports__["default"] = (sortBy);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/stubArray.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/stubArray.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (stubArray);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/stubFalse.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/stubFalse.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (stubFalse);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/toFinite.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/toFinite.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toNumber.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toFinite);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/toInteger.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/toInteger.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toFinite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFinite.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/toFinite.js");


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = Object(_toFinite_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (toInteger);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/toNumber.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/toNumber.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isSymbol.js");



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/toString.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/toString.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);


/***/ }),

/***/ "./node_modules/react-big-calendar/node_modules/lodash-es/transform.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-big-calendar/node_modules/lodash-es/transform.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _baseForOwn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseForOwn.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseForOwn.js");
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseIteratee.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_baseIteratee.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isFunction.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isObject.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/react-big-calendar/node_modules/lodash-es/isTypedArray.js");











/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object),
      isArrLike = isArr || Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(object) || Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(object);

  iteratee = Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_3__["default"])(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_8__["default"])(object)) {
      accumulator = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Ctor) ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseForOwn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (transform);


/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : undefined;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : undefined : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : undefined : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : undefined;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "./node_modules/react-overlays/esm/Overlay.js":
/*!****************************************************!*\
  !*** ./node_modules/react-overlays/esm/Overlay.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popper */ "./node_modules/react-overlays/esm/popper.js");
/* harmony import */ var _usePopper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./usePopper */ "./node_modules/react-overlays/esm/usePopper.js");
/* harmony import */ var _useRootClose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useRootClose */ "./node_modules/react-overlays/esm/useRootClose.js");
/* harmony import */ var _useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useWaitForDOMRef */ "./node_modules/react-overlays/esm/useWaitForDOMRef.js");
/* harmony import */ var _mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mergeOptionsWithPopperConfig */ "./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js");













/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, outerRef) {
  var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = Object(_restart_hooks_useCallbackRef__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_6__["default"])(attachRef, outerRef);
  var container = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__["default"])(props.container);
  var target = Object(_useWaitForDOMRef__WEBPACK_IMPORTED_MODULE_10__["default"])(props.target);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePopper = Object(_usePopper__WEBPACK_IMPORTED_MODULE_8__["default"])(target, rootElement, Object(_mergeOptionsWithPopperConfig__WEBPACK_IMPORTED_MODULE_11__["default"])({
    placement: placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip,
    offset: offset,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  Object(_useRootClose__WEBPACK_IMPORTED_MODULE_9__["default"])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popper, {
    show: !!props.show,
    props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(_popper__WEBPACK_IMPORTED_MODULE_7__["placements"]),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (props.rootClose) {
      var _PropTypes$func;

      return (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }

    return prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.apply(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js ***!
  \*************************************************************************/
/*! exports provided: toModifierMap, toModifierArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierMap", function() { return toModifierMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toModifierArray", function() { return toModifierArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeOptionsWithPopperConfig; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js");

function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    modifiers: toModifierArray(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers.preventOverflow, {
        options: containerPadding ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/ownerDocument.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-overlays/esm/ownerDocument.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-overlays/esm/safeFindDOMNode.js");


/* harmony default export */ __webpack_exports__["default"] = (function (componentOrElement) {
  return Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_1__["default"])(componentOrElement));
});

/***/ }),

/***/ "./node_modules/react-overlays/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/react-overlays/esm/popper.js ***!
  \***************************************************/
/*! exports provided: createPopper, placements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony import */ var _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/arrow */ "./node_modules/@popperjs/core/lib/modifiers/arrow.js");
/* harmony import */ var _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/computeStyles */ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js");
/* harmony import */ var _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/eventListeners */ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js");
/* harmony import */ var _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/flip */ "./node_modules/@popperjs/core/lib/modifiers/flip.js");
/* harmony import */ var _popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/hide */ "./node_modules/@popperjs/core/lib/modifiers/hide.js");
/* harmony import */ var _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/offset */ "./node_modules/@popperjs/core/lib/modifiers/offset.js");
/* harmony import */ var _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/popperOffsets */ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js");
/* harmony import */ var _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @popperjs/core/lib/modifiers/preventOverflow */ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js");
/* harmony import */ var _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @popperjs/core/lib/enums */ "./node_modules/@popperjs/core/lib/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _popperjs_core_lib_enums__WEBPACK_IMPORTED_MODULE_8__["placements"]; });

/* harmony import */ var _popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @popperjs/core/lib/popper-base */ "./node_modules/@popperjs/core/lib/popper-base.js");









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var createPopper = Object(_popperjs_core_lib_popper_base__WEBPACK_IMPORTED_MODULE_9__["popperGenerator"])({
  defaultModifiers: [_popperjs_core_lib_modifiers_hide__WEBPACK_IMPORTED_MODULE_4__["default"], _popperjs_core_lib_modifiers_popperOffsets__WEBPACK_IMPORTED_MODULE_6__["default"], _popperjs_core_lib_modifiers_computeStyles__WEBPACK_IMPORTED_MODULE_1__["default"], _popperjs_core_lib_modifiers_eventListeners__WEBPACK_IMPORTED_MODULE_2__["default"], _popperjs_core_lib_modifiers_offset__WEBPACK_IMPORTED_MODULE_5__["default"], _popperjs_core_lib_modifiers_flip__WEBPACK_IMPORTED_MODULE_3__["default"], _popperjs_core_lib_modifiers_preventOverflow__WEBPACK_IMPORTED_MODULE_7__["default"], _popperjs_core_lib_modifiers_arrow__WEBPACK_IMPORTED_MODULE_0__["default"]]
});


/***/ }),

/***/ "./node_modules/react-overlays/esm/safeFindDOMNode.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/esm/safeFindDOMNode.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return safeFindDOMNode; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

/***/ }),

/***/ "./node_modules/react-overlays/esm/usePopper.js":
/*!******************************************************!*\
  !*** ./node_modules/react-overlays/esm/usePopper.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useSafeState */ "./node_modules/@restart/hooks/esm/useSafeState.js");
/* harmony import */ var _popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper */ "./node_modules/react-overlays/esm/popper.js");






var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};

var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // until docjs supports type exports...

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper;

      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;

    var state = _ref2.state;
    var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, ["enabled", "placement", "strategy", "modifiers"]);

  var popperInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var update = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);

  var _useSafeState = Object(_restart_hooks_useSafeState__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    placement: placement,
    update: update,
    forceUpdate: forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })),
      popperState = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = Object(_popper__WEBPACK_IMPORTED_MODULE_4__["createPopper"])(referenceElement, popperElement, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ __webpack_exports__["default"] = (usePopper);

/***/ }),

/***/ "./node_modules/react-overlays/esm/useRootClose.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/esm/useRootClose.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/contains */ "./node_modules/dom-helpers/esm/contains.js");
/* harmony import */ var dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/react-overlays/esm/ownerDocument.js");






var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    var currentTarget = getRefTarget(ref);
    warning__WEBPACK_IMPORTED_MODULE_4___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!Object(dom_helpers_contains__WEBPACK_IMPORTED_MODULE_0__["default"])(currentTarget, e.target);
  }, [ref]);
  var handleMouse = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_5__["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    var removeKeyupListener = Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return Object(dom_helpers_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["default"] = (useRootClose);

/***/ }),

/***/ "./node_modules/react-overlays/esm/useWaitForDOMRef.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-overlays/esm/useWaitForDOMRef.js ***!
  \*************************************************************/
/*! exports provided: resolveContainerRef, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveContainerRef", function() { return resolveContainerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWaitForDOMRef; });
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return Object(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) == null ? void 0 : _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-select/creatable/dist/react-select.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, defaultProps, makeCreatableSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCreatableSelect", function() { return makeCreatableSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dist/index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dist/Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dist/stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");












function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var compareOption = function compareOption(inputValue, option) {
  if (inputValue === void 0) {
    inputValue = '';
  }

  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"" + inputValue + "\"";
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps = _extends({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Creatable, _Component);

    function Creatable(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.select = void 0;

      _this.onChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value,
            name = _this$props.name;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option',
              name: name
            };

            if (isMulti) {
              onChange([].concat(Object(_dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["e"])(value), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      };

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    var _proto = Creatable.prototype;

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
          createOptionPosition = nextProps.createOptionPosition,
          formatCreateLabel = nextProps.formatCreateLabel,
          getNewOptionData = nextProps.getNewOptionData,
          inputValue = nextProps.inputValue,
          isLoading = nextProps.isLoading,
          isValidNewOption = nextProps.isValidNewOption,
          value = nextProps.value;
      var options = nextProps.options || [];
      var newOption = this.state.newOption;

      if (isValidNewOption(inputValue, Object(_dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["e"])(value), options)) {
        newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
      } else {
        newOption = undefined;
      }

      this.setState({
        newOption: newOption,
        options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(options) : [].concat(options, [newOption]) : options
      });
    };

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    };

    _proto.render = function render() {
      var _this2 = this;

      var options = this.state.options;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, this.props, {
        ref: function ref(_ref) {
          _this2.select = _ref;
        },
        options: options,
        onChange: this.onChange
      }));
    };

    return Creatable;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(_dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);
var Creatable = Object(_dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(SelectCreatable);

/* harmony default export */ __webpack_exports__["default"] = (Creatable);



/***/ }),

/***/ "./node_modules/uncontrollable/esm/hook.js":
/*!*************************************************!*\
  !*** ./node_modules/uncontrollable/esm/hook.js ***!
  \*************************************************/
/*! exports provided: useUncontrolledProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUncontrolledProp", function() { return useUncontrolledProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUncontrolled; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(propValue !== undefined);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName)],
        propsValue = _ref[fieldName],
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, [_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/uncontrollable/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uncontrollable/esm/index.js ***!
  \**************************************************/
/*! exports provided: useUncontrolled, useUncontrolledProp, uncontrollable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/uncontrollable/esm/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUncontrolled", function() { return _hook__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUncontrolledProp", function() { return _hook__WEBPACK_IMPORTED_MODULE_0__["useUncontrolledProp"]; });

/* harmony import */ var _uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uncontrollable */ "./node_modules/uncontrollable/esm/uncontrollable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncontrollable", function() { return _uncontrollable__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/uncontrollable/esm/uncontrollable.js":
/*!***********************************************************!*\
  !*** ./node_modules/uncontrollable/esm/uncontrollable.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uncontrollable; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/esm/utils.js");







function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_6__["canAcceptRef"](Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_6__["defaultKey"]);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_5___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : undefined : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[_utils__WEBPACK_IMPORTED_MODULE_6__["defaultKey"](key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!_utils__WEBPACK_IMPORTED_MODULE_6__["isProp"](props, key) && _utils__WEBPACK_IMPORTED_MODULE_6__["isProp"](prevProps, key)) {
          nextState.values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_6__["defaultKey"](key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_6__["uncontrolledPropTypes"](controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(UncontrolledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        innerRef: ref
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/uncontrollable/esm/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/uncontrollable/esm/utils.js ***!
  \**************************************************/
/*! exports provided: uncontrolledPropTypes, isProp, defaultKey, canAcceptRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncontrolledPropTypes", function() { return uncontrolledPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProp", function() { return isProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKey", function() { return defaultKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAcceptRef", function() { return canAcceptRef; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : undefined : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

}]);