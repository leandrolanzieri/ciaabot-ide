webpackJsonpac__name_([3],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ayuda_module__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaModule", function() { return __WEBPACK_IMPORTED_MODULE_0__ayuda_module__["a"]; });



/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaComponent; });


var AyudaComponent = (function () {
    function AyudaComponent() {
    }
    AyudaComponent.prototype.ngOnInit = function () { };
    return AyudaComponent;
}());
AyudaComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ayuda',
        styles: [__webpack_require__(454)],
        template: __webpack_require__(449)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], AyudaComponent);



/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ayuda_routing__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ayuda_component__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaModule; });







var AyudaModule = (function () {
    function AyudaModule() {
    }
    return AyudaModule;
}());
AyudaModule.routes = __WEBPACK_IMPORTED_MODULE_5__ayuda_routing__["a" /* routes */];
AyudaModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            // Components / Directives/ Pipes
            __WEBPACK_IMPORTED_MODULE_6__ayuda_component__["a" /* AyudaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__ayuda_routing__["a" /* routes */])
        ],
    })
], AyudaModule);



/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ayuda_component__ = __webpack_require__(431);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__ayuda_component__["a" /* AyudaComponent */] },
        ] },
];


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n:host>.container-fluid {\n    background-color: #ffffff;\n    color: #616161;\n    display: inline-block;\n    height: 100%;\n    margin: 0;\n    width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h1 class=\"display-4\">Ayuda</h1>\n</div>\n"

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(444);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=3.chunk.js.map