webpackJsonp(["app"],{

/***/ "./client-app/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

let _ = __webpack_require__("./node_modules/underscore/underscore.js")

let stooges = [
	{ name: 'curly', age: 25 },
	{ name: 'moe', age: 21 },
	{ name: 'larry', age: 23 }
];

let youngest = _.chain(stooges)
	.sortBy(stooge => stooge.age)
	.map(stooge => `${ stooge.name } is ${ stooge.age }`)
	.first()
	.value();

console.log(youngest);
var x = 11;


/***/ }),

/***/ "./client-app/src/require-styles-app.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./client-app/src/test-1.css");
__webpack_require__("./client-app/src/test-2.css");

/***/ }),

/***/ "./client-app/src/test-1.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client-app/src/test-2.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./client-app/src/index.js");
module.exports = __webpack_require__("./client-app/src/require-styles-app.js");


/***/ })

},[0]);