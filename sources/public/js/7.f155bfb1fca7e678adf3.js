(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/components/form/base/ImageInput/ImageInput.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/form/base/ImageInput/ImageInput.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageInput; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_base_ImageInput_ImagePreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/base/ImageInput/ImagePreview */ "./resources/js/components/form/base/ImageInput/ImagePreview.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_form_base_ImageInput_helpers_sendImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/base/ImageInput/helpers/sendImage */ "./resources/js/components/form/base/ImageInput/helpers/sendImage.js");
/* harmony import */ var _components_form_base_ImageInput_helpers_imageDataUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/form/base/ImageInput/helpers/imageDataUrl */ "./resources/js/components/form/base/ImageInput/helpers/imageDataUrl.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function ImageInput(_ref) {
  var types = _ref.types,
      maxFilesCount = _ref.maxFilesCount,
      files = _ref.files,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      loadedImages = _useState2[0],
      setLoadedImages = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    lodash_forEach__WEBPACK_IMPORTED_MODULE_5___default()(files, function (id) {
      _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/image/".concat(id)).then(function (response) {
        setLoadedImages(function (images) {
          var newImages = images.slice();
          newImages.push({
            id: id,
            internalId: id,
            url: response.data
          });
          return newImages;
        });
      });
    });
  }, []); //eslint-disable-line

  var deleteImage = function deleteImage(internalId) {
    setLoadedImages(function (images) {
      var newImages = images.filter(function (imageData) {
        return imageData.internalId !== internalId;
      });
      setTimeout(function () {
        return onChange(newImages.map(function (image) {
          return image.id;
        }), newImages);
      }, 0);
      return newImages;
    });
  };

  var addPreviewImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (internalId, dataUrl) {
    setLoadedImages(function (images) {
      var newImages = images.slice();
      newImages.unshift({
        id: null,
        internalId: internalId,
        url: dataUrl
      });
      return maxFilesCount ? newImages.slice(0, maxFilesCount) : newImages;
    });
  }, [setLoadedImages, maxFilesCount]);

  var handleAddFile = function handleAddFile(acceptedFiles) {
    var promises = acceptedFiles.map( /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
        var internalId, dataUrl;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                internalId = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6___default()();
                _context.next = 3;
                return Object(_components_form_base_ImageInput_helpers_imageDataUrl__WEBPACK_IMPORTED_MODULE_12__["default"])(file);

              case 3:
                dataUrl = _context.sent;
                addPreviewImage(internalId, dataUrl);
                return _context.abrupt("return", new Promise(function (resolve) {
                  Object(_components_form_base_ImageInput_helpers_sendImage__WEBPACK_IMPORTED_MODULE_11__["default"])(file).then(function (response) {
                    setLoadedImages(function (images) {
                      var newImages = images.slice();
                      var index = newImages.findIndex(function (imageData) {
                        return imageData.internalId === internalId;
                      });

                      if (index !== -1) {
                        newImages[index] = {
                          id: response.data.id,
                          internalId: internalId,
                          url: dataUrl
                        };
                      }

                      resolve(loadedImages);
                      return newImages;
                    });
                  }).validation(function () {
                    deleteImage(internalId);
                    resolve(loadedImages);
                  })["catch"](function () {
                    deleteImage(internalId);
                    resolve(loadedImages);
                  });
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    Promise.all(promises).then(function () {
      setLoadedImages(function (images) {
        setTimeout(function () {
          return onChange(images.map(function (image) {
            return image.id;
          }), images);
        }, 0);
        return maxFilesCount ? images.slice(0, maxFilesCount) : images;
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDrop: handleAddFile,
    accept: types.length ? types : null
  }, function (_ref3) {
    var getRootProps = _ref3.getRootProps,
        getInputProps = _ref3.getInputProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("dropzone-class", {
        disabled: maxFilesCount ? maxFilesCount === loadedImages.length : false
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, getRootProps(), {
      className: "load-img d-flex justify-content-center flex-column align-items-center p-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps(), {
      multiple: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaArrowDown"], {
      className: "icon-size-40 color-gray"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "load-img-tip mt-3 text-center"
    }, t("common.drag-and-drop"))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, loadedImages.map(function (imageData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_form_base_ImageInput_ImagePreview__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: imageData.internalId,
      url: imageData.url,
      imageLoaded: !!imageData.id,
      onDelete: function onDelete() {
        return deleteImage(imageData.internalId);
      }
    });
  })));
}
ImageInput.propTypes = {
  types: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  files: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  maxFilesCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

/***/ }),

/***/ "./resources/js/components/form/base/ImageInput/ImagePreview.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/form/base/ImageInput/ImagePreview.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImagePreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



function ImagePreview(_ref) {
  var onDelete = _ref.onDelete,
      url = _ref.url,
      imageLoaded = _ref.imageLoaded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "image-preview position-relative mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onDelete,
    className: "btn btn-link no-shadow position-absolute image-preview-close-btn py-0 px-1 text-dec-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimesCircle"], {
    className: "color-red position-relative"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: url,
    alt: "",
    className: "img-fluid",
    style: {
      filter: imageLoaded ? "none" : "grayscale(0.7)"
    }
  }));
}
ImagePreview.propTypes = {
  imageLoaded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/components/form/base/ImageInput/helpers/imageDataUrl.js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/form/base/ImageInput/helpers/imageDataUrl.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return imageDataUrl; });
function imageDataUrl(file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onloadend = function () {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
}

/***/ }),

/***/ "./resources/js/components/form/base/ImageInput/helpers/sendImage.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/form/base/ImageInput/helpers/sendImage.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendImage; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function sendImage(file) {
  var formData = new FormData();
  formData.append("file", file);
  return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("post", "/methods/image", {}, formData);
}

/***/ })

}]);