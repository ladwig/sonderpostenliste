module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var config = {
  apiKey: "AIzaSyCy6RYP2fHqCzP_LF68zvJlKG8UBzJIUA0",
  authDomain: "sonderpostenliste.firebaseapp.com",
  databaseURL: "https://sonderpostenliste.firebaseio.com",
  projectId: "sonderpostenliste",
  storageBucket: "sonderpostenliste.appspot.com",
  messagingSenderId: "388109605764"
};
/* harmony default export */ __webpack_exports__["a"] = (!__WEBPACK_IMPORTED_MODULE_0_firebase__["apps"].length ? __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](config) : __WEBPACK_IMPORTED_MODULE_0_firebase__["app"]());

/***/ }),

/***/ "./pages/addproduct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_firebase__ = __webpack_require__("./components/firebase.js");
var _jsxFileName = "/Users/danielladwig/Documents/Web/sonderposten/pages/addproduct.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var AddProduct =
/*#__PURE__*/
function (_Component) {
  _inherits(AddProduct, _Component);

  function AddProduct(props) {
    var _this;

    _classCallCheck(this, AddProduct);

    _this = _possibleConstructorReturn(this, (AddProduct.__proto__ || Object.getPrototypeOf(AddProduct)).call(this, props));
    _this.state = {
      type: 'iPhone',
      product: '',
      productid: '',
      price: '',
      state: 'new',
      number: '1',
      items: []
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var itemsRef = __WEBPACK_IMPORTED_MODULE_2__components_firebase__["a" /* default */].database().ref('items');
      itemsRef.on('value', function (snapshot) {
        var items = snapshot.val();
        var newState = [];

        for (var item in items) {
          newState.push({
            id: item,
            type: items[item].type,
            product: items[item].product,
            productid: items[item].productid,
            price: items[item].price,
            state: items[item].state,
            number: items[item].number
          });
        }

        _this2.setState({
          items: newState
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var itemsRef = __WEBPACK_IMPORTED_MODULE_2__components_firebase__["a" /* default */].database().ref('items');
      var item = {
        product: this.state.product,
        type: this.state.type,
        productid: this.state.productid,
        price: this.state.price,
        state: this.state.state,
        number: this.state.number
      };
      itemsRef.push(item);
      this.setState({
        product: '',
        type: 'iPhone',
        productid: '',
        price: '',
        state: 'new',
        number: '1'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Sonderpostenliste"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/addproduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Artikel hinzuf\xFCgen")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        name: "type",
        onChange: this.handleChange,
        value: this.state.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "iphone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "iPhone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "ipad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "iPad"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "mac",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Mac"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "watch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "Watch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "Zubeh\xF6r")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "product",
        placeholder: "Produktname",
        onChange: this.handleChange,
        value: this.state.product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "price",
        placeholder: "Preis",
        onChange: this.handleChange,
        value: this.state.price,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "productid",
        placeholder: "ID",
        onChange: this.handleChange,
        value: this.state.productid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        name: "state",
        onChange: this.handleChange,
        value: this.state.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Neu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "used",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "R\xFCckl\xE4ufer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Demoger\xE4t")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "number",
        placeholder: "Anzahl",
        onChange: this.handleChange,
        value: this.state.number,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Hinzuf\xFCgen")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "display-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.state.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, item.product), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, item.state, item.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, item.productid)));
      })))));
    }
  }]);

  return AddProduct;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/addproduct.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=addproduct.js.map