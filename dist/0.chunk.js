webpackJsonpac__name_([0],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_module__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return __WEBPACK_IMPORTED_MODULE_0__editor_module__["a"]; });



/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });


var EditorComponent = (function () {
    function EditorComponent() {
        this.blocklyCode = '';
    }
    EditorComponent.prototype.ngOnInit = function () { };
    EditorComponent.prototype.onBlocklyCodeChange = function (blocklyCode) {
        this.blocklyCode = blocklyCode;
    };
    return EditorComponent;
}());
EditorComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'editor',
        styles: [__webpack_require__(457)],
        template: __webpack_require__(452)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [])
], EditorComponent);



/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocklyComponent; });




// Blockly.prompt = (a, b, c) => { console.log('Prompt modificado. A:', a, ' B: ', b, ' C: ', c); };
var BlocklyComponent = (function () {
    function BlocklyComponent(domSanitizer) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.onBlocklyCodeChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        Blockly.prompt = function (a, b, c) {
            _this.promptModalDesc = a;
            _this.promptCallback = c;
            _this.promptModal.show();
            console.log('prompt', c);
        };
    }
    BlocklyComponent.prototype.ngOnInit = function () {
        this.toolboxContent = this.domSanitizer.bypassSecurityTrustHtml("\n      \n  <xml id=\"toolbox\" style=\"display: none\">\n    <category name=\"L\u00F3gica\" colour=\"210\">\n      <block type=\"controls_if\"></block>\n      <block type=\"logic_compare\"></block>\n      <block type=\"logic_operation\"></block>\n      <block type=\"logic_negate\"></block>\n      <block type=\"logic_null\"></block>\n    </category>\n    <category name=\"Entradas / Salidas\" colour=\"120\">\n      <block type=\"ciaa_sapi_gpio_write\">\n        <field name=\"pin_option\">LEDR</field>\n        <field name=\"value_option\">ON</field>\n      </block>\n      <block type=\"ciaa_sapi_gpio_digital_read\" >\n        <field name=\"pin_option\">GPIO0</field>\n      </block>\n      <block type=\"ciaa_sapi_gpio_analog_read\">\n        <field name=\"pin_option\">CH1</field>\n      </block>\n      <block type=\"ciaa_sapi_dac_write\">\n        <field name=\"pin_option\">DAC</field>\n        <field name=\"value_option\">0</field>\n      </block>\n      <block type=\"ciaa_sapi_pwm_write\">\n        <field name=\"pin_option\">PWM0</field>\n        <field name=\"value_option\">50</field>\n      </block>\n      <block type=\"ciaa_sapi_pwm_read\">\n        <field name=\"pin_option\">PWM0</field>\n      </block>\n    </category>\n    <category name=\"Servo\" colour=\"230\">\n      <block type=\"ciaa_sapi_servo_write\">\n        <field name=\"pin_option\">SERVO0</field>\n        <field name=\"angle_value_option\">90</field>\n      </block>\n      <block type=\"ciaa_sapi_servo_read\">\n        <field name=\"pin_option\">SERVO0</field>\n      </block>\n    </category>\n    <category name=\"Control\" colour=\"20\">\n      <block type=\"controls_whileUntil\">\n      </block>\n      <block type=\"ciaa_sapi_blocking_delay\">\n        <value name=\"delay_time\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1000</field>\n          </block>\n        </value>\n      </block>\n      <block type=\"ciaa_sapi_sleep_until_interrupt\">\n      </block>\n      <block type=\"controls_for\">\n        <value name=\"FROM\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1</field>\n          </block>\n        </value>\n        <value name=\"TO\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">10</field>\n          </block>\n        </value>\n        <value name=\"BY\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1</field>\n          </block>\n        </value>\n      </block>\n    </category>\n    <category name=\"Variables\" custom=\"VARIABLE\" colour=\"330\"></category>\n    <category name=\"Funciones\" custom=\"PROCEDURE\" colour=\"290\"></category>\n    <category name=\"Matem\u00E1tica\">\n      <block type=\"math_number\">\n      </block>\n      <block type=\"math_arithmetic\">\n      </block>\n    </category>\n    <category name=\"Texto\">\n      <block type=\"text\"></block>\n    </category>\n  </xml>\n    ");
    };
    BlocklyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.blocklyResize();
        this.workspace.addChangeListener(function (e) { return _this.blocklyCodeChange(); });
    };
    BlocklyComponent.prototype.blocklyResize = function () {
        var _this = this;
        this.blocklyArea = document.getElementById('blocklyArea');
        this.blocklyContainer = document.getElementById('blocklyDiv');
        this.blocklyToolbox = document.getElementById('toolbox');
        this.workspace = Blockly.inject(this.blocklyContainer, {
            toolbox: this.blocklyToolbox,
            scrollbars: false
        });
        var onresize = function (e) {
            // Compute the absolute coordinates and dimensions of blocklyArea.
            var element = _this.blocklyArea;
            var x = 0;
            var y = 0;
            do {
                x += element.offsetLeft;
                y += element.offsetTop;
                element = element.offsetParent;
            } while (element);
            // Position this.blocklyContainer over blocklyArea.
            // this.blocklyContainer.style.left = x + 'px';
            // this.blocklyContainer.style.top = y + 'px';
            _this.blocklyContainer.style.width = _this.blocklyArea.offsetWidth + 'px';
            _this.blocklyContainer.style.height = _this.blocklyArea.offsetHeight + 'px';
        };
        window.addEventListener('resize', onresize, false);
        onresize(null);
        Blockly.svgResize(this.workspace);
    };
    BlocklyComponent.prototype.blocklyCodeChange = function () {
        var code = Blockly.CiaaSapi.workspaceToCode(this.workspace);
        this.onBlocklyCodeChange.emit(code);
    };
    BlocklyComponent.prototype.promptReady = function () {
        this.promptCallback(this.promptValue);
    };
    return BlocklyComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('promptModal'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_bootstrap__["c" /* ModalDirective */])
], BlocklyComponent.prototype, "promptModal", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], BlocklyComponent.prototype, "onBlocklyCodeChange", void 0);
BlocklyComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-blockly',
        template: __webpack_require__(451),
        styles: [__webpack_require__(456)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
], BlocklyComponent);



/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_routing__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_blockly_blockly_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__ = __webpack_require__(269);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorModule; });









var EditorModule = (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule.routes = __WEBPACK_IMPORTED_MODULE_5__editor_routing__["a" /* routes */];
EditorModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            // Components / Directives/ Pipes
            __WEBPACK_IMPORTED_MODULE_6__editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_blockly_blockly_component__["a" /* BlocklyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__editor_routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap_modal__["a" /* ModalModule */].forRoot(),
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], EditorModule);



/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_component__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__editor_component__["a" /* EditorComponent */] },
        ] },
];


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "#blocklyArea {\n    height: calc(95% - 4.5rem); /* Header height plus margin */\n    margin: 0;\n    padding: 0;\n}\n\n#blocklyDiv {\n    position: absolute;\n}\n\n.modal-body {\n    text-align: center;\n}\n\n.modal-body input {\n    margin: 15px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/*styles for home content only*/\n:host>.container-fluid {\n    background-color: #ffffff;\n    color: #616161;\n    display: inline-block;\n    height: 100%;\n    margin: 0;\n    width: 100%;\n}\n\n#codePreview {\n    background-color: rgba(45, 131, 190, 0.14);\n    border-radius: 10px;\n    font-family: monospace;\n    margin-top: 20px;\n    padding: 10px;\n}", ""]);

// exports


/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"blocklyArea\">\n  <div id=\"blocklyDiv\"></div>\n</div>\n\n\n<div [hidden]=\"true\" [outerHTML]=\"toolboxContent\"></div>\n\n<div bsModal #promptModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"promptModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">{{promptModalTile || 'Ingrese valor'}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        {{promptModalDesc}}\n        <input type=\"text\" [(ngModel)]=\"promptValue\" class=\"form-control\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"promptModal.hide(); promptReady();\">\n          Ok\n        </button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"promptModal.hide();\">\n          Cancelar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" style=\"height: 100%;\">\n    <div class=\"col-9\">\n      <h1 class=\"display-4\">Editor</h1>\n      <app-blockly (onBlocklyCodeChange)=\"onBlocklyCodeChange($event)\"></app-blockly>\n    </div>\n    <div class=\"col-3\">\n      <p class=\"lead\">Vista previa</p>\n      <pre id=\"codePreview\">\n        {{blocklyCode}}\n      </pre>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(446);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(447);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=0.chunk.js.map