"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/analysisBox.js":
/*!***********************************!*\
  !*** ./components/analysisBox.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction AnalysisBox(props) {\n    var gross = Math.trunc(props.numChars * 12 / props.time);\n    var accuracy = Math.round(props.correctCount * 100 / props.totalCount);\n    var net = Math.trunc(props.correctChars * 12 / props.time);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"analysisBox\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\components\\\\analysisBox.js\",\n            lineNumber: 7\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\components\\\\analysisBox.js\",\n                    lineNumber: 8\n                },\n                __self: this,\n                children: \" Analysis \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\components\\\\analysisBox.js\",\n                    lineNumber: 9\n                },\n                __self: this,\n                children: [\n                    \"Gross Typing Speed = \",\n                    gross,\n                    \" wpm\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\components\\\\analysisBox.js\",\n                    lineNumber: 10\n                },\n                __self: this,\n                children: [\n                    \"Net Typing Speed = \",\n                    net,\n                    \" wpm\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\components\\\\analysisBox.js\",\n                    lineNumber: 11\n                },\n                __self: this,\n                children: [\n                    \"Accuracy = \",\n                    accuracy,\n                    \"%\"\n                ]\n            })\n        ]\n    }));\n}\n_c = AnalysisBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalysisBox);\nvar _c;\n$RefreshReg$(_c, \"AnalysisBox\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuYWx5c2lzQm94LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O1NBQVNBLFdBQVcsQ0FBQ0MsS0FBSyxFQUFDLENBQUM7SUFDeEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLLENBQUNJLFFBQVEsR0FBQyxFQUFFLEdBQUNKLEtBQUssQ0FBQ0ssSUFBSTtJQUNyRCxHQUFLLENBQUNDLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxLQUFLLENBQUNQLEtBQUssQ0FBQ1EsWUFBWSxHQUFDLEdBQUcsR0FBQ1IsS0FBSyxDQUFDUyxVQUFVO0lBQ25FLEdBQUssQ0FBQ0MsR0FBRyxHQUFHUixJQUFJLENBQUNDLEtBQUssQ0FBQ0gsS0FBSyxDQUFDVyxZQUFZLEdBQUMsRUFBRSxHQUFDWCxLQUFLLENBQUNLLElBQUk7SUFFdkQsTUFBTSx1RUFDRE8sQ0FBRztRQUFDQyxTQUFTLEVBQUcsQ0FBYTs7Ozs7OztpRkFDekJDLENBQUU7Ozs7OzswQkFBQyxDQUFVOztrRkFDYkMsQ0FBQzs7Ozs7OztvQkFBQyxDQUFxQjtvQkFBQ2QsS0FBSztvQkFBQyxDQUFJOzs7a0ZBQ2xDYyxDQUFDOzs7Ozs7O29CQUFDLENBQW1CO29CQUFDTCxHQUFHO29CQUFDLENBQUk7OztrRkFDOUJLLENBQUM7Ozs7Ozs7b0JBQUMsQ0FBVztvQkFBQ1QsUUFBUTtvQkFBQyxDQUFDOzs7OztBQUdyQyxDQUFDO0tBYlFQLFdBQVc7QUFlcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuYWx5c2lzQm94LmpzPzM2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQW5hbHlzaXNCb3gocHJvcHMpe1xyXG4gICAgY29uc3QgZ3Jvc3MgPSBNYXRoLnRydW5jKHByb3BzLm51bUNoYXJzKjEyL3Byb3BzLnRpbWUpO1xyXG4gICAgY29uc3QgYWNjdXJhY3kgPSBNYXRoLnJvdW5kKHByb3BzLmNvcnJlY3RDb3VudCoxMDAvcHJvcHMudG90YWxDb3VudCk7XHJcbiAgICBjb25zdCBuZXQgPSBNYXRoLnRydW5jKHByb3BzLmNvcnJlY3RDaGFycyoxMi9wcm9wcy50aW1lKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiYW5hbHlzaXNCb3hcIj5cclxuICAgICAgICAgICAgPGgyPiBBbmFseXNpcyA8L2gyPlxyXG4gICAgICAgICAgICA8cD5Hcm9zcyBUeXBpbmcgU3BlZWQgPSB7Z3Jvc3N9IHdwbTwvcD5cclxuICAgICAgICAgICAgPHA+TmV0IFR5cGluZyBTcGVlZCA9IHtuZXR9IHdwbTwvcD5cclxuICAgICAgICAgICAgPHA+QWNjdXJhY3kgPSB7YWNjdXJhY3l9JTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXNCb3g7Il0sIm5hbWVzIjpbIkFuYWx5c2lzQm94IiwicHJvcHMiLCJncm9zcyIsIk1hdGgiLCJ0cnVuYyIsIm51bUNoYXJzIiwidGltZSIsImFjY3VyYWN5Iiwicm91bmQiLCJjb3JyZWN0Q291bnQiLCJ0b3RhbENvdW50IiwibmV0IiwiY29ycmVjdENoYXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/analysisBox.js\n");

/***/ })

});