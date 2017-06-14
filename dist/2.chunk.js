webpackJsonpac__name_([2],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration_module__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return __WEBPACK_IMPORTED_MODULE_0__configuration_module__["a"]; });



/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });


var ConfigurationComponent = (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () { };
    return ConfigurationComponent;
}());
ConfigurationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'configuration',
        styles: [__webpack_require__(455)],
        template: __webpack_require__(450)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], ConfigurationComponent);



/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_routing__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__configuration_component__ = __webpack_require__(432);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationModule; });







var ConfigurationModule = (function () {
    function ConfigurationModule() {
    }
    return ConfigurationModule;
}());
ConfigurationModule.routes = __WEBPACK_IMPORTED_MODULE_5__configuration_routing__["a" /* routes */];
ConfigurationModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            // Components / Directives/ Pipes
            __WEBPACK_IMPORTED_MODULE_6__configuration_component__["a" /* ConfigurationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__configuration_routing__["a" /* routes */])
        ],
    })
], ConfigurationModule);



/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configuration_component__ = __webpack_require__(432);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__configuration_component__["a" /* ConfigurationComponent */] },
        ] },
];


/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n:host>.container-fluid {\n    background-color: #ffffff;\n    color: #616161;\n    display: inline-block;\n    height: 100%;\n    margin: 0;\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"display-4\">Configuración</h1>\n</div>\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(445);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=2.chunk.js.map