webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_firebase__ = __webpack_require__("./components/firebase.js");
var _jsxFileName = "/Users/danielladwig/Documents/Web/sonderposten/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var itemsRef = __WEBPACK_IMPORTED_MODULE_3__components_firebase__["a" /* default */].database().ref('items');
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
    key: "removeItem",
    value: function removeItem(itemId) {
      var itemRef = __WEBPACK_IMPORTED_MODULE_3__components_firebase__["a" /* default */].database().ref("/items/".concat(itemId));
      itemRef.remove();
    }
  }, {
    key: "itemState",
    value: function itemState(state) {
      switch (state) {
        case "new":
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, "NEU");

        case "used":
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, "R\xFCckl\xE4ufer");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-752920389"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-752920389"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "addproduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-752920389"
      }, "Artikel hinzuf\xFCgen")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-752920389"
      }, "Sonderpostenliste"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-752920389" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-752920389"
      }, this.state.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          className: "jsx-752920389"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          className: "jsx-752920389"
        }, item.product), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          className: "jsx-752920389"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          className: "jsx-752920389"
        }, itemState(item.state), item.price), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          className: "jsx-752920389"
        }, item.productid), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: function onClick() {
            return _this3.removeItem(item.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          className: "jsx-752920389"
        }, "Remove Item")));
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "752920389",
        css: "body{width:100%;height:100%;background:rgb(240,240,240);z-index:-999;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;}main{margin:auto;margin-left:3vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFMkIsQUFHd0IsQUFRQyxXQVBBLENBUUksV0FQYyxLQVFoQyx1QkFQZSxhQUNpSixvSkFDaEsiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbGxhZHdpZy9Eb2N1bWVudHMvV2ViL3NvbmRlcnBvc3RlbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgaXRlbXM6IFtdXG4gICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2l0ZW1zJylcbiAgICBpdGVtc1JlZi5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgIGxldCBpdGVtcyA9IHNuYXBzaG90LnZhbCgpXG4gICAgICBsZXQgbmV3U3RhdGUgPSBbXVxuICAgICAgZm9yIChsZXQgaXRlbSBpbiBpdGVtcykge1xuICAgICAgICBuZXdTdGF0ZS5wdXNoKHtcbiAgICAgICAgICBpZDogaXRlbSxcbiAgICAgICAgICB0eXBlOiBpdGVtc1tpdGVtXS50eXBlLFxuICAgICAgICAgIHByb2R1Y3Q6IGl0ZW1zW2l0ZW1dLnByb2R1Y3QsXG4gICAgICAgICAgcHJvZHVjdGlkOiBpdGVtc1tpdGVtXS5wcm9kdWN0aWQsXG4gICAgICAgICAgcHJpY2U6IGl0ZW1zW2l0ZW1dLnByaWNlLFxuICAgICAgICAgIHN0YXRlOiBpdGVtc1tpdGVtXS5zdGF0ZSxcbiAgICAgICAgICBudW1iZXI6IGl0ZW1zW2l0ZW1dLm51bWJlclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBuZXdTdGF0ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgY29uc3QgaXRlbVJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGAvaXRlbXMvJHtpdGVtSWR9YCk7XG4gIGl0ZW1SZWYucmVtb3ZlKCk7XG4gIH1cblxuICBpdGVtU3RhdGUoc3RhdGUpIHtcbiAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgIGNhc2UgXCJuZXdcIjpcbiAgICAgICAgcmV0dXJuIDxkaXY+TkVVPC9kaXY+XG4gICAgICBjYXNlIFwidXNlZFwiOlxuICAgICAgICByZXR1cm4gPGRpdj5Sw7xja2zDpHVmZXI8L2Rpdj5cbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJhZGRwcm9kdWN0XCI+PGE+QXJ0aWtlbCBoaW56dWbDvGdlbjwvYT48L0xpbms+XG4gICAgICAgICAgPGgxPlNvbmRlcnBvc3Rlbmxpc3RlPC9oMT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnByb2R1Y3R9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbVN0YXRlKGl0ZW0uc3RhdGUpfXtpdGVtLnByaWNlfTwvZGl2PjxkaXY+e2l0ZW0ucHJvZHVjdGlkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlSXRlbShpdGVtLmlkKX0+UmVtb3ZlIEl0ZW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgICAgICAgICB6LWluZGV4OiAtOTk5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDN2aDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.99ae13111fb4ff65b70f.hot-update.js.map