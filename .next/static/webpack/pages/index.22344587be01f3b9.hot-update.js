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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_analysisBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/analysisBox */ \"./components/analysisBox.js\");\n/* harmony import */ var _components_inputBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inputBox */ \"./components/inputBox.js\");\n/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/textArea */ \"./components/textArea.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s = $RefreshSig$();\nvar maxlen = 30; //Maximum length of word that can be entered in input box\nvar para = \"Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data.\";\nvar total = para.length + 1;\npara = para.split(' ');\nvar numWords = para.length;\nvar min = function(a, b) {\n    return a < b ? a : b;\n};\nfunction HomePage() {\n    _s();\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), time = ref10[0], setTime = ref10[1]; //time in seconds if timer running\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), running = ref1[0], setRunning = ref1[1]; //whether timer running\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), text = ref2[0], setText = ref2[1]; //text inside the input box\n    var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); //reference to the inputBox\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentWord = ref3[0], setCurrentWord = ref3[1]; //current word index in the para\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), numOfCharsEntered = ref4[0], setNumOfCharsEntered = ref4[1]; //number of characters entered\n    var ref5 //Number of characters entered correctly\n     = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), correctChars = ref5[0], setCorrectChars = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), match = ref6[0], setMatch = ref6[1]; //number of matching characters with the current word\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), incorrectWords = ref7[0], setIncorrectWords = ref7[1]; //list of indices of words entered incorrectly\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), firstTime = ref8[0], setFirstTime = ref8[1]; //whether it is the first time user will start a test in the current session\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), intervalId = ref9[0], setIntervalId = ref9[1];\n    //Effect to set/unset an interval to run timer\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (running) {\n            setIntervalId(setInterval(function() {\n                setTime(function(prev) {\n                    return prev + 1;\n                });\n            }, 1000));\n        } else if (intervalId != null) {\n            clearInterval(intervalId);\n            setIntervalId(null);\n        }\n    }, [\n        running\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n    });\n    //set input box to focus when running or text changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inputRef != null) {\n            var ref;\n            (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.focus();\n        }\n    }, [\n        running,\n        text\n    ]);\n    //Click handler for start button\n    var handleClick = function(_event) {\n        setText('');\n        setRunning(true);\n        setFirstTime(false);\n        setCurrentWord(0);\n        setNumOfCharsEntered(0);\n        setCorrectChars(0);\n        setIncorrectWords([]);\n        setTime(0);\n    };\n    //Change handler for input box\n    var handleChange = function(param) {\n        var target = param.target;\n        var change = target.value.length - text.length;\n        var newMatch = 0;\n        if (change > 1 || change < -1 || target.value.length > maxlen) {\n            return;\n        }\n        while(newMatch < min(target.value.length, para[currentWord].length) && target.value[newMatch] == para[currentWord][newMatch]){\n            newMatch++;\n        }\n        if (target.value[target.value.length - 1] == ' ') {\n            var myBool = target.value.length - 1 != para[currentWord].length || newMatch != para[currentWord].length;\n            if (myBool) {\n                setIncorrectWords(function(prev) {\n                    return _toConsumableArray(prev).concat([\n                        currentWord\n                    ]);\n                });\n            }\n            var correct = 0;\n            for(var i = 0; i < min(target.value.length, para[currentWord].length); i++){\n                correct += target.value[i] == para[currentWord][i];\n            }\n            setCorrectChars(function(prev) {\n                return prev + newMatch + !myBool;\n            });\n            if (currentWord == numWords - 1) {\n                setRunning(false);\n            }\n            setNumOfCharsEntered(function(prev) {\n                return prev + target.value.length;\n            });\n            setCurrentWord(function(prev) {\n                return prev + 1;\n            });\n            setMatch(0);\n            setText('');\n        } else {\n            setMatch(newMatch);\n            setText(target.value);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n            lineNumber: 101\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 102\n                },\n                __self: this,\n                children: [\n                    \"Typing Speed Test \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        className: \"fastCar\",\n                        src: fast_car,\n                        alt: \"fast_car\",\n                        height: 90,\n                        width: 130,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                            lineNumber: 102\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"buttonTime\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 103\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"row\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                        lineNumber: 104\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-4\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                                lineNumber: 105\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                                lineNumber: 106\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                                onClick: handleClick,\n                                title: \"Click to take a quick typing speed test\",\n                                disabled: running,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                                    lineNumber: 107\n                                },\n                                __self: this,\n                                children: \"Start\"\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"col time\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                                lineNumber: 109\n                            },\n                            __self: this,\n                            children: [\n                                Math.trunc(time / 60),\n                                \" : \",\n                                time % 60 < 10 ? 0 : '',\n                                time % 60\n                            ]\n                        })\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_textArea__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                content: para,\n                disabled: !running,\n                currentWord: currentWord,\n                match: match,\n                totLen: text.length,\n                incorrectWords: incorrectWords,\n                firstTime: firstTime,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 114\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_inputBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                rf: inputRef,\n                value: text,\n                onChange: handleChange,\n                disabled: !running,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 115\n                },\n                __self: this\n            }),\n            !running && !firstTime ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_analysisBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                numChars: numOfCharsEntered,\n                time: time,\n                correctCount: correctChars,\n                totalCount: total,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 116\n                },\n                __self: this\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\acer\\\\Downloads\\\\GitHub\\\\typing-app\\\\pages\\\\index.js\",\n                    lineNumber: 116\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n_s(HomePage, \"U/+hVkiEdPPegJhchfhPOxQp7Qw=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFuYWx5c2lzQm94IGZyb20gXCIuLi9jb21wb25lbnRzL2FuYWx5c2lzQm94XCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dEJveFwiO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dEFyZWFcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IG1heGxlbiA9IDMwOy8vTWF4aW11bSBsZW5ndGggb2Ygd29yZCB0aGF0IGNhbiBiZSBlbnRlcmVkIGluIGlucHV0IGJveFxyXG5cclxudmFyIHBhcmEgPSBcIk1hY2hpbmUgbGVhcm5pbmcgKE1MKSBpcyB0aGUgc3R1ZHkgb2YgY29tcHV0ZXIgYWxnb3JpdGhtcyB0aGF0IGNhbiBpbXByb3ZlIGF1dG9tYXRpY2FsbHkgdGhyb3VnaCBleHBlcmllbmNlIGFuZCBieSB0aGUgdXNlIG9mIGRhdGEuXCI7XHJcbmNvbnN0IHRvdGFsID0gcGFyYS5sZW5ndGggKyAxO1xyXG5wYXJhID0gcGFyYS5zcGxpdCgnICcpO1xyXG5jb25zdCBudW1Xb3JkcyA9IHBhcmEubGVuZ3RoO1xyXG52YXIgbWluID0gKGEsIGIpID0+IGEgPCBiID8gYSA6IGI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xyXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7Ly90aW1lIGluIHNlY29uZHMgaWYgdGltZXIgcnVubmluZ1xyXG4gICAgY29uc3QgW3J1bm5pbmcsIHNldFJ1bm5pbmddID0gdXNlU3RhdGUoZmFsc2UpOy8vd2hldGhlciB0aW1lciBydW5uaW5nXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7Ly90ZXh0IGluc2lkZSB0aGUgaW5wdXQgYm94XHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTsvL3JlZmVyZW5jZSB0byB0aGUgaW5wdXRCb3hcclxuICAgIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGUoMCk7Ly9jdXJyZW50IHdvcmQgaW5kZXggaW4gdGhlIHBhcmFcclxuICAgIGNvbnN0IFtudW1PZkNoYXJzRW50ZXJlZCwgc2V0TnVtT2ZDaGFyc0VudGVyZWRdID0gdXNlU3RhdGUoMCk7Ly9udW1iZXIgb2YgY2hhcmFjdGVycyBlbnRlcmVkXHJcbiAgICBjb25zdCBbY29ycmVjdENoYXJzLCBzZXRDb3JyZWN0Q2hhcnNdID0gdXNlU3RhdGUoMCkvL051bWJlciBvZiBjaGFyYWN0ZXJzIGVudGVyZWQgY29ycmVjdGx5XHJcbiAgICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoXSA9IHVzZVN0YXRlKDApOy8vbnVtYmVyIG9mIG1hdGNoaW5nIGNoYXJhY3RlcnMgd2l0aCB0aGUgY3VycmVudCB3b3JkXHJcbiAgICBjb25zdCBbaW5jb3JyZWN0V29yZHMsIHNldEluY29ycmVjdFdvcmRzXSA9IHVzZVN0YXRlKFtdKTsvL2xpc3Qgb2YgaW5kaWNlcyBvZiB3b3JkcyBlbnRlcmVkIGluY29ycmVjdGx5XHJcbiAgICBjb25zdCBbZmlyc3RUaW1lLCBzZXRGaXJzdFRpbWVdID0gdXNlU3RhdGUodHJ1ZSk7Ly93aGV0aGVyIGl0IGlzIHRoZSBmaXJzdCB0aW1lIHVzZXIgd2lsbCBzdGFydCBhIHRlc3QgaW4gdGhlIGN1cnJlbnQgc2Vzc2lvblxyXG4gICAgY29uc3QgW2ludGVydmFsSWQsIHNldEludGVydmFsSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy9FZmZlY3QgdG8gc2V0L3Vuc2V0IGFuIGludGVydmFsIHRvIHJ1biB0aW1lclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocnVubmluZyl7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsSWQoc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZSgocHJldikgPT4gcHJldiArIDEpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGludGVydmFsSWQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsSWQobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3J1bm5pbmddKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfSwgKTtcclxuXHJcbiAgICAvL3NldCBpbnB1dCBib3ggdG8gZm9jdXMgd2hlbiBydW5uaW5nIG9yIHRleHQgY2hhbmdlc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXRSZWYgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3J1bm5pbmcsIHRleHRdKTtcclxuXHJcbiAgICAvL0NsaWNrIGhhbmRsZXIgZm9yIHN0YXJ0IGJ1dHRvblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoX2V2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgICAgc2V0UnVubmluZyh0cnVlKTtcclxuICAgICAgICBzZXRGaXJzdFRpbWUoZmFsc2UpO1xyXG4gICAgICAgIHNldEN1cnJlbnRXb3JkKDApO1xyXG4gICAgICAgIHNldE51bU9mQ2hhcnNFbnRlcmVkKDApO1xyXG4gICAgICAgIHNldENvcnJlY3RDaGFycygwKTtcclxuICAgICAgICBzZXRJbmNvcnJlY3RXb3JkcyhbXSk7XHJcbiAgICAgICAgc2V0VGltZSgwKTtcclxuICAgIH07XHJcblxyXG4gICAgLy9DaGFuZ2UgaGFuZGxlciBmb3IgaW5wdXQgYm94XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IHRhcmdldC52YWx1ZS5sZW5ndGggLSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgbmV3TWF0Y2ggPSAwO1xyXG4gICAgICAgIGlmIChjaGFuZ2UgPiAxIHx8IGNoYW5nZSA8IC0xIHx8IHRhcmdldC52YWx1ZS5sZW5ndGggPiBtYXhsZW4pe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChuZXdNYXRjaCA8IG1pbih0YXJnZXQudmFsdWUubGVuZ3RoLCBwYXJhW2N1cnJlbnRXb3JkXS5sZW5ndGgpICYmIHRhcmdldC52YWx1ZVtuZXdNYXRjaF0gPT0gcGFyYVtjdXJyZW50V29yZF1bbmV3TWF0Y2hdKXtcclxuICAgICAgICAgICAgbmV3TWF0Y2grKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldC52YWx1ZVt0YXJnZXQudmFsdWUubGVuZ3RoIC0gMV0gPT0gJyAnKXtcclxuICAgICAgICAgICAgY29uc3QgbXlCb29sID0gdGFyZ2V0LnZhbHVlLmxlbmd0aCAtIDEgIT0gcGFyYVtjdXJyZW50V29yZF0ubGVuZ3RoIHx8IG5ld01hdGNoICE9IHBhcmFbY3VycmVudFdvcmRdLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKG15Qm9vbCl7XHJcbiAgICAgICAgICAgICAgICBzZXRJbmNvcnJlY3RXb3JkcygocHJldikgPT4gWy4uLnByZXYsIGN1cnJlbnRXb3JkXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvcnJlY3QgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1pbih0YXJnZXQudmFsdWUubGVuZ3RoLCBwYXJhW2N1cnJlbnRXb3JkXS5sZW5ndGgpOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29ycmVjdCArPSAodGFyZ2V0LnZhbHVlW2ldID09IHBhcmFbY3VycmVudFdvcmRdW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDb3JyZWN0Q2hhcnMoKHByZXYpID0+IHByZXYgKyBuZXdNYXRjaCArICFteUJvb2wpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFdvcmQgPT0gbnVtV29yZHMgLSAxKXtcclxuICAgICAgICAgICAgICAgIHNldFJ1bm5pbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldE51bU9mQ2hhcnNFbnRlcmVkKChwcmV2KSA9PiBwcmV2ICsgdGFyZ2V0LnZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRXb3JkKChwcmV2KSA9PiBwcmV2ICsgMSk7XHJcbiAgICAgICAgICAgIHNldE1hdGNoKDApO1xyXG4gICAgICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc2V0TWF0Y2gobmV3TWF0Y2gpO1xyXG4gICAgICAgICAgICBzZXRUZXh0KHRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5UeXBpbmcgU3BlZWQgVGVzdCA8SW1hZ2UgY2xhc3NOYW1lID0ge1wiZmFzdENhclwifSBzcmMgPSB7ZmFzdF9jYXJ9IGFsdCA9IHtcImZhc3RfY2FyXCJ9IGhlaWdodCA9IHs5MH0gd2lkdGggPSB7MTMwfS8+PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImJ1dHRvblRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLTRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtoYW5kbGVDbGlja30gdGl0bGUgPSB7XCJDbGljayB0byB0YWtlIGEgcXVpY2sgdHlwaW5nIHNwZWVkIHRlc3RcIn0gZGlzYWJsZWQgPSB7cnVubmluZ30+U3RhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sIHRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge01hdGgudHJ1bmModGltZS82MCl9IDogeyh0aW1lJTYwIDwgMTApID8gMCA6ICcnfXt0aW1lJTYwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgY29udGVudCA9IHtwYXJhfSBkaXNhYmxlZCA9IHshcnVubmluZ30gY3VycmVudFdvcmQgPSB7Y3VycmVudFdvcmR9IG1hdGNoID0ge21hdGNofSB0b3RMZW4gPSB7dGV4dC5sZW5ndGh9IGluY29ycmVjdFdvcmRzID0ge2luY29ycmVjdFdvcmRzfSBmaXJzdFRpbWUgPSB7Zmlyc3RUaW1lfT48L1RleHRBcmVhPlxyXG4gICAgICAgICAgICA8SW5wdXRCb3ggcmYgPSB7aW5wdXRSZWZ9IHZhbHVlID0ge3RleHR9IG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX0gZGlzYWJsZWQgPSB7IXJ1bm5pbmd9PjwvSW5wdXRCb3g+XHJcbiAgICAgICAgICAgIHsoIXJ1bm5pbmcgJiYgIWZpcnN0VGltZSkgPyA8QW5hbHlzaXNCb3ggbnVtQ2hhcnMgPSB7bnVtT2ZDaGFyc0VudGVyZWR9IHRpbWUgPSB7dGltZX0gY29ycmVjdENvdW50ID0ge2NvcnJlY3RDaGFyc30gdG90YWxDb3VudCA9IHt0b3RhbH0vPiA6IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW5hbHlzaXNCb3giLCJJbnB1dEJveCIsIlRleHRBcmVhIiwiUmVhY3QiLCJJbWFnZSIsIm1heGxlbiIsInBhcmEiLCJ0b3RhbCIsImxlbmd0aCIsInNwbGl0IiwibnVtV29yZHMiLCJtaW4iLCJhIiwiYiIsIkhvbWVQYWdlIiwidGltZSIsInNldFRpbWUiLCJydW5uaW5nIiwic2V0UnVubmluZyIsInRleHQiLCJzZXRUZXh0IiwiaW5wdXRSZWYiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwibnVtT2ZDaGFyc0VudGVyZWQiLCJzZXROdW1PZkNoYXJzRW50ZXJlZCIsImNvcnJlY3RDaGFycyIsInNldENvcnJlY3RDaGFycyIsIm1hdGNoIiwic2V0TWF0Y2giLCJpbmNvcnJlY3RXb3JkcyIsInNldEluY29ycmVjdFdvcmRzIiwiZmlyc3RUaW1lIiwic2V0Rmlyc3RUaW1lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlQ2xpY2siLCJfZXZlbnQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjaGFuZ2UiLCJ2YWx1ZSIsIm5ld01hdGNoIiwibXlCb29sIiwiY29ycmVjdCIsImkiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInNyYyIsImZhc3RfY2FyIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJidXR0b24iLCJvbkNsaWNrIiwidGl0bGUiLCJkaXNhYmxlZCIsIk1hdGgiLCJ0cnVuYyIsImNvbnRlbnQiLCJ0b3RMZW4iLCJyZiIsIm9uQ2hhbmdlIiwibnVtQ2hhcnMiLCJjb3JyZWN0Q291bnQiLCJ0b3RhbENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});