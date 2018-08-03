webpackHotUpdate(5,{

/***/ "./pages/addproduct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
      type: 'iphone',
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
      if (this.state.product == null || this.state.productid == null || this.state.price == null) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "errorMsg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, "F\xFClle alle Felder aus");
      } else {
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
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Zur\xFCck")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Artikel Hinzuf\xFCgen"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        name: "type",
        onChange: this.handleChange,
        value: this.state.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "iphone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "iPhone"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "ipad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "iPad"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "mac",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Mac"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "watch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Watch"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Zubeh\xF6r")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "product",
        placeholder: "Produktname",
        onChange: this.handleChange,
        value: this.state.product,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "price",
        placeholder: "Preis",
        onChange: this.handleChange,
        value: this.state.price,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "productid",
        placeholder: "ID",
        onChange: this.handleChange,
        value: this.state.productid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        name: "state",
        onChange: this.handleChange,
        value: this.state.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "new",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Neu"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "used",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "R\xFCckl\xE4ufer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Demoger\xE4t")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        name: "number",
        placeholder: "Anzahl",
        onChange: this.handleChange,
        value: this.state.number,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Hinzuf\xFCgen")));
    }
  }]);

  return AddProduct;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddProduct);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/addproduct")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.35c3520bb99dd4aa3bab.hot-update.js.map