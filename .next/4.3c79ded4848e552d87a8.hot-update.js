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
            className: "itemState",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, "Neu/Neuwertig");

        case "used":
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            className: "itemState",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, "R\xFCckl\xE4ufer");

        case "demo":
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            className: "itemstate",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, "Demoartikel");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-936093384"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-936093384"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "addproduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-936093384"
      }, "Artikel hinzuf\xFCgen")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-936093384"
      }, "Sonderpostenliste"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-936093384" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        name: "whichOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-936093384"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "all",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-936093384"
      }, "Alle"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "iphone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-936093384"
      }, "iPhone"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "ipad",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-936093384"
      }, "iPad"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "mac",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-936093384"
      }, "Mac"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "watch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-936093384"
      }, "Watch"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        value: "accessories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-936093384"
      }, "Zubeh\xF6r")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-936093384"
      }, this.state.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          key: item.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          className: "jsx-936093384"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          className: "jsx-936093384"
        }, item.product), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          className: "jsx-936093384" + " " + "itemtInfo"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          className: "jsx-936093384" + " " + "itemDescription"
        }, _this3.itemState(item.state), item.price + "€"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          className: "jsx-936093384" + " " + "itemtId"
        }, item.productid), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          onClick: function onClick() {
            return _this3.removeItem(item.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          className: "jsx-936093384"
        }, "Remove Item")));
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "936093384",
        css: "body{width:100%;height:100%;background:rgb(240,240,240);z-index:-999;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;}main{margin:auto;margin-left:3vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGMkIsQUFHd0IsQUFRQyxXQVBBLENBUUksV0FQYyxLQVFoQyx1QkFQZSxhQUNpSixvSkFDaEsiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbmllbGxhZHdpZy9Eb2N1bWVudHMvV2ViL3NvbmRlcnBvc3RlbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgaXRlbXM6IFtdXG4gICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGl0ZW1zUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2l0ZW1zJylcbiAgICBpdGVtc1JlZi5vbigndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgIGxldCBpdGVtcyA9IHNuYXBzaG90LnZhbCgpXG4gICAgICBsZXQgbmV3U3RhdGUgPSBbXVxuICAgICAgZm9yIChsZXQgaXRlbSBpbiBpdGVtcykge1xuICAgICAgICBuZXdTdGF0ZS5wdXNoKHtcbiAgICAgICAgICBpZDogaXRlbSxcbiAgICAgICAgICB0eXBlOiBpdGVtc1tpdGVtXS50eXBlLFxuICAgICAgICAgIHByb2R1Y3Q6IGl0ZW1zW2l0ZW1dLnByb2R1Y3QsXG4gICAgICAgICAgcHJvZHVjdGlkOiBpdGVtc1tpdGVtXS5wcm9kdWN0aWQsXG4gICAgICAgICAgcHJpY2U6IGl0ZW1zW2l0ZW1dLnByaWNlLFxuICAgICAgICAgIHN0YXRlOiBpdGVtc1tpdGVtXS5zdGF0ZSxcbiAgICAgICAgICBudW1iZXI6IGl0ZW1zW2l0ZW1dLm51bWJlclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBuZXdTdGF0ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgY29uc3QgaXRlbVJlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGAvaXRlbXMvJHtpdGVtSWR9YCk7XG4gIGl0ZW1SZWYucmVtb3ZlKCk7XG4gIH1cblxuICBpdGVtU3RhdGUoc3RhdGUpIHtcbiAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgIGNhc2UgXCJuZXdcIjpcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVN0YXRlXCI+TmV1L05ldXdlcnRpZzwvZGl2PlxuICAgICAgY2FzZSBcInVzZWRcIjpcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVN0YXRlXCI+UsO8Y2tsw6R1ZmVyPC9kaXY+XG4gICAgICBjYXNlIFwiZGVtb1wiOlxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpdGVtc3RhdGVcIj5EZW1vYXJ0aWtlbDwvZGl2PlxuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImFkZHByb2R1Y3RcIj48YT5BcnRpa2VsIGhpbnp1ZsO8Z2VuPC9hPjwvTGluaz5cbiAgICAgICAgICA8aDE+U29uZGVycG9zdGVubGlzdGU8L2gxPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ3aGljaE9uZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlwaG9uZVwiPmlQaG9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpcGFkXCI+aVBhZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWNcIj5NYWM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2F0Y2hcIj5XYXRjaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhY2Nlc3Nvcmllc1wiPlp1YmVow7ZyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLnByb2R1Y3R9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW10SW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtRGVzY3JpcHRpb25cIj57dGhpcy5pdGVtU3RhdGUoaXRlbS5zdGF0ZSl9e2l0ZW0ucHJpY2UgKyBcIuKCrFwifTwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiaXRlbXRJZFwiPntpdGVtLnByb2R1Y3RpZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUl0ZW0oaXRlbS5pZCl9PlJlbW92ZSBJdGVtPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgICAgICAgICAgei1pbmRleDogLTk5OTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzdmg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXRlbUluZm8ge1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uIHtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGl0ZW1TdGF0ZSB7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpdGVtSWQge1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
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
//# sourceMappingURL=4.3c79ded4848e552d87a8.hot-update.js.map