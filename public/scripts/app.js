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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.jsx":
/*!*****************************!*\
  !*** ./src/scripts/app.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar IndecisionApp =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(IndecisionApp, _React$Component);\n\n  function IndecisionApp(props) {\n    var _this;\n\n    _classCallCheck(this, IndecisionApp);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));\n    _this.state = {\n      options: props.options // [\"Thing one\", \"Thing two\", \"Thing three\", \"Thing four\"]\n\n    };\n    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.deleteOption = _this.deleteOption.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(IndecisionApp, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      try {\n        var json = localStorage.getItem('options');\n        var options = JSON.parse(json);\n        if (options && options.length !== 0) this.setState(function () {\n          return {\n            options: options\n          };\n        });else {\n          this.setState(function () {\n            return {\n              options: []\n            };\n          });\n        }\n        ;\n      } catch (e) {}\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevState.options.length !== this.state.options.length) {\n        var json = JSON.stringify(this.state.options);\n        localStorage.setItem('options', json);\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      console.log('component unmounted');\n    }\n  }, {\n    key: \"handleDeleteOptions\",\n    value: function handleDeleteOptions() {\n      this.setState(function () {\n        return {\n          options: []\n        };\n      });\n    }\n  }, {\n    key: \"deleteOption\",\n    value: function deleteOption(option) {\n      // this.setState( (prevState)=> {\n      //     const arr = prevState.options;\n      //     const idx = arr.indexOf(option);\n      //     if(idx > -1) arr.splice(idx,1);\n      //     return { options: arr }\n      // });\n      this.setState(function (prevState) {\n        return {\n          options: prevState.options.filter(function (el) {\n            return el !== option;\n          })\n        };\n      });\n    }\n  }, {\n    key: \"handleAddOption\",\n    value: function handleAddOption(option) {\n      option = option.trim();\n\n      if (!option) {\n        // console.log(\"App\", this.state);\n        return \"Enter a valid value to the option\";\n      } else if (this.state.options.indexOf(option) > -1) {\n        return \"Entered option already exists\";\n      } else {\n        this.setState(function (prevState) {\n          return {\n            options: prevState.options.concat(option)\n          };\n        });\n      }\n    }\n  }, {\n    key: \"handlePick\",\n    value: function handlePick() {\n      var numOptions = this.state.options.length;\n\n      if (numOptions > 0) {\n        var randomNum = Math.floor(Math.random() * numOptions);\n        console.log(this.state.options[randomNum]);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var subtitle = \"Put your life in the hands of the  computer\";\n      return React.createElement(\"div\", null, React.createElement(Header, {\n        subtitle: subtitle\n      }), React.createElement(Action, {\n        hasOptions: this.state.options.length > 0,\n        pick: this.handlePick\n      }), React.createElement(Options, {\n        options: this.state.options,\n        handleDeleteOptions: this.handleDeleteOptions,\n        deleteOption: this.deleteOption\n      }), React.createElement(AddOption, {\n        add: this.handleAddOption\n      }));\n    }\n  }]);\n\n  return IndecisionApp;\n}(React.Component);\n\nIndecisionApp.defaultProps = {\n  options: []\n};\n\nvar Header = function Header(props) {\n  return React.createElement(\"div\", null, React.createElement(\"h1\", null, props.title), props.subtitle && React.createElement(\"h2\", null, props.subtitle));\n};\n\nHeader.defaultProps = {\n  title: 'Indecision App v1'\n};\n\nvar Action = function Action(props) {\n  return React.createElement(\"button\", {\n    disabled: !props.hasOptions,\n    onClick: props.pick\n  }, \"What should I do\");\n};\n\nvar Options = function Options(props) {\n  return React.createElement(\"div\", null, React.createElement(\"button\", {\n    onClick: props.handleDeleteOptions\n  }, \"Remove all\"), props.options.length === 0 && React.createElement(\"p\", null, \"There are no options\"), props.options.map(function (optionName) {\n    return React.createElement(Option, {\n      key: optionName,\n      optionText: optionName,\n      deleteOption: props.deleteOption\n    });\n  }));\n};\n\nvar Option = function Option(props) {\n  return React.createElement(\"div\", null, props.optionText, React.createElement(\"button\", {\n    onClick: function onClick(e) {\n      props.deleteOption(props.optionText); // el = (e.target);\n      // el.parentNode.removeChild(el);\n      // props.deleteOption;\n    }\n  }, \" \\xD7\"));\n};\n\nvar AddOption =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(AddOption, _React$Component2);\n\n  function AddOption(props) {\n    var _this2;\n\n    _classCallCheck(this, AddOption);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));\n    _this2.processOption = _this2.processOption.bind(_assertThisInitialized(_assertThisInitialized(_this2)));\n    _this2.state = {\n      error: undefined\n    };\n    return _this2;\n  }\n\n  _createClass(AddOption, [{\n    key: \"processOption\",\n    value: function processOption(e) {\n      e.preventDefault();\n      var option = e.target.elements.option.value.trim();\n      var error = this.props.add(option);\n      this.setState(function () {\n        return {\n          error: error\n        };\n      });\n\n      if (!error) {\n        e.target.elements.option.value = \"\";\n      }\n\n      console.log(\"Add option\", this.state);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"form\", {\n        action: \"\",\n        onSubmit: this.processOption\n      }, this.state.error && React.createElement(\"p\", null, this.state.error), React.createElement(\"input\", {\n        type: \"text\",\n        name: \"option\",\n        id: \"\"\n      }), React.createElement(\"button\", null, \"Add Option\")));\n    }\n  }]);\n\n  return AddOption;\n}(React.Component);\n\nReactDOM.render(React.createElement(IndecisionApp, {\n  options: [\"thing One\", \"Thing two\"]\n}), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./src/scripts/app.jsx?");

/***/ })

/******/ });