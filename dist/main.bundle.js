webpackJsonp([1],{

/***/ 135:
/***/ (function(module, exports) {

module.exports = require('path');

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigurationComponent = (function () {
    function ConfigurationComponent() {
    }
    ConfigurationComponent.prototype.ngOnInit = function () {
    };
    return ConfigurationComponent;
}());
ConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-configuration',
        template: __webpack_require__(427),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [])
], ConfigurationComponent);

//# sourceMappingURL=configuration.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_sidebar_app_sidebar_service__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorComponent = (function () {
    function EditorComponent(projectService, ngZone, appSidebarService) {
        this.projectService = projectService;
        this.ngZone = ngZone;
        this.appSidebarService = appSidebarService;
        this.showCCode = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workspaceSubscription = this.projectService.getWorkspace().subscribe(function (workspace) {
            _this.ngZone.run(function () {
                _this.workspace = workspace;
            });
        });
        this.appSidebarService.getShowCCode().subscribe(function (show) {
            _this.ngZone.run(function () {
                _this.showCCode = show;
            });
        });
    };
    EditorComponent.prototype.onBlocklyCodeChange = function (blocklyCode) {
        var _this = this;
        this.ngZone.run(function () {
            _this.projectService.setBlocklyCode(blocklyCode);
        });
    };
    EditorComponent.prototype.onBlocklyBlocksChange = function (blocklyBlocks) {
        this.projectService.setBlocklyBlocks(blocklyBlocks);
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__(428),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_sidebar_app_sidebar_service__["a" /* AppSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_sidebar_app_sidebar_service__["a" /* AppSidebarService */]) === "function" && _c || Object])
], EditorComponent);

var _a, _b, _c;
//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__(429),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.title = "App works !";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openProject = function (recentProject) {
        var _this = this;
        this.projectService.openRecentProject(recentProject).subscribe(function (success) {
            if (success) {
                _this.router.navigate(['editor']);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(430),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_project__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ciaabots_models_enum__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_path__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectComponent = (function () {
    function ProjectComponent(projectService, router, notification) {
        this.projectService = projectService;
        this.router = router;
        this.notification = notification;
        this.project = new __WEBPACK_IMPORTED_MODULE_2__models_project__["a" /* Project */]();
        this.ciaabots = __WEBPACK_IMPORTED_MODULE_3__models_ciaabots_models_enum__["a" /* CiaabotsModels */];
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.models = function () {
        var keys = Object.keys(this.ciaabots);
        return keys.slice(keys.length / 2);
    };
    ProjectComponent.prototype.saveProject = function () {
        var _this = this;
        this.directoryPath = __WEBPACK_IMPORTED_MODULE_6_path__["join"](this.directoryPath, '/' + this.toHyphenCase(this.project.name));
        this.fileName = __WEBPACK_IMPORTED_MODULE_6_path__["join"](this.directoryPath, '/' + this.toHyphenCase(this.project.name) + '.cbp');
        this.projectService.createProject(this.project, this.directoryPath, this.fileName).subscribe(function (success) {
            console.log(success);
            if (success) {
                _this.router.navigate(['editor']);
            }
            else {
                _this.notification.error('Error al crear el proyecto', '  ');
            }
        });
    };
    ProjectComponent.prototype.fileChange = function (event) {
        if (event.target.files[0]) {
            var path_1 = event.target.files[0].path;
            this.directoryPath = path_1;
        }
    };
    ProjectComponent.prototype.toHyphenCase = function (str) {
        return str.replace(/\s+/g, '-').toLowerCase();
    };
    ProjectComponent.prototype.getPathSeparator = function () {
        return __WEBPACK_IMPORTED_MODULE_6_path__["sep"];
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__(431),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _c || Object])
], ProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CiaabotsModels; });
var CiaabotsModels;
(function (CiaabotsModels) {
    CiaabotsModels[CiaabotsModels["G1"] = 0] = "G1";
})(CiaabotsModels || (CiaabotsModels = {}));
//# sourceMappingURL=ciaabots-models.enum.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ciaabots_models_enum__ = __webpack_require__(141);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });

var Project = (function () {
    function Project() {
        this.ciaabotModel = __WEBPACK_IMPORTED_MODULE_0__ciaabots_models_enum__["a" /* CiaabotsModels */].G1;
        this.blocks = '';
        this.code = '';
        this.serialPort = '';
    }
    Project.prototype.isProject = function (project) {
        return project.name != null;
    };
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_child_process___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_child_process__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompilingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompilingService = (function () {
    function CompilingService(projectService, notificationsService, ngZone) {
        var _this = this;
        this.projectService = projectService;
        this.notificationsService = notificationsService;
        this.ngZone = ngZone;
        this.projectService.getWorkspace().subscribe(function (workspace) {
            _this.ngZone.run(function () {
                _this.workspace = workspace;
            });
        });
    }
    CompilingService.prototype.verifyProgram = function () {
        console.log('Verificando en ', this.workspace.path);
        this.createMainFile();
        if (this.workspace) {
            __WEBPACK_IMPORTED_MODULE_1_child_process__["execFile"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](this.workspace.path, 'scripts/verify.bat'), function (err, stdout) {
                if (err) {
                    console.log('Error al verificar programa', err);
                    return;
                }
                console.log(stdout);
            });
        }
    };
    CompilingService.prototype.createMainFile = function () {
        var fileDescriptor;
        var file = __WEBPACK_IMPORTED_MODULE_2_path__["join"](this.workspace.path, 'app/src/main.c');
        /* Try to open file */
        try {
            fileDescriptor = __WEBPACK_IMPORTED_MODULE_3_fs__["openSync"](file, 'w');
        }
        catch (error) {
            this.notificationsService.alert('No se puede crear el archivo');
            return false;
        }
        /* Try to write to file */
        try {
            __WEBPACK_IMPORTED_MODULE_3_fs__["writeFileSync"](file, this.workspace.project.code.replace(/\n/, __WEBPACK_IMPORTED_MODULE_4_os__["EOL"]));
        }
        catch (error) {
            this.notificationsService.alert('No se puede escribir el archivo');
            /* Closing the file */
            __WEBPACK_IMPORTED_MODULE_3_fs__["closeSync"](fileDescriptor);
            return false;
        }
        /* Closing the file */
        __WEBPACK_IMPORTED_MODULE_3_fs__["closeSync"](fileDescriptor);
        return true;
    };
    return CompilingService;
}());
CompilingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* NotificationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _c || Object])
], CompilingService);

var _a, _b, _c;
//# sourceMappingURL=compiling.service.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorGuardService = (function () {
    function EditorGuardService(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    EditorGuardService.prototype.canActivate = function () {
        var activate = this.projectService.existsOpenProject();
        if (!activate) {
            this.router.navigate(['home']);
        }
        return activate;
    };
    return EditorGuardService;
}());
EditorGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EditorGuardService);

var _a, _b;
//# sourceMappingURL=editor-guard.service.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectronService = (function () {
    function ElectronService() {
        this.isElectron = function () {
            return window && window.process && window.process.type;
        };
        // Conditional imports
        if (this.isElectron()) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.childProcess = window.require('child_process');
        }
    }
    return ElectronService;
}());
ElectronService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ElectronService);

//# sourceMappingURL=electron.service.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrowserWindow = __webpack_require__(76).remote.BrowserWindow;
var WindowService = (function () {
    function WindowService() {
    }
    WindowService.prototype.minimizeWindow = function () {
        BrowserWindow.getFocusedWindow().minimize();
    };
    WindowService.prototype.unmaximizeWindow = function () {
        BrowserWindow.getFocusedWindow().unmaximize();
    };
    WindowService.prototype.maximizeWindow = function () {
        BrowserWindow.getFocusedWindow().maximize();
    };
    WindowService.prototype.isMaximizedWindow = function () {
        if (BrowserWindow.getFocusedWindow()) {
            var max = void 0;
            try {
                max = BrowserWindow.getFocusedWindow().isMaximized();
                return max;
            }
            catch (error) {
                return false;
            }
        }
        else {
            return false;
        }
    };
    return WindowService;
}());
WindowService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowService);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ciaabot-blanco.99ba9e5ed2174ff5dc8a.svg";

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mkdirp__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mkdirp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mkdirp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_project__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_workspace__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_webstorage__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_user_preferences__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_recent_project__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProjectService = (function () {
    function ProjectService(confirmationService, notificationsService, ngZone, storage) {
        this.confirmationService = confirmationService;
        this.notificationsService = notificationsService;
        this.ngZone = ngZone;
        this.storage = storage;
        this.workspace = new __WEBPACK_IMPORTED_MODULE_8__models_workspace__["a" /* Workspace */]();
        this.workspaceSubscription = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.userPreferences = new __WEBPACK_IMPORTED_MODULE_10__models_user_preferences__["a" /* UserPreferences */]();
        this.workspaceSubscription.next(this.workspace);
        this.updatePersistedWorkspace();
        var preferences = this.storage.retrieve('user-preferences');
        if (preferences) {
            this.userPreferences = preferences;
        }
    }
    ProjectService.prototype.getWorkspace = function () {
        return this.workspaceSubscription.asObservable();
    };
    /**
     * Creates a project file and the basic folder structure with basic files
     * @param project Project to be created
     * @param directory Absolute path to the container directory
     * @param file Absolute path to the project file
     */
    ProjectService.prototype.createProject = function (project, directory, file) {
        this.workspace.project = project;
        this.workspace.path = directory;
        this.workspace.projectFile = file;
        this.workspaceSubscription.next(this.workspace);
        this.updatePersistedWorkspace();
        this.addToRecentProjects(project);
        return this.createProjectStructure(directory, file);
    };
    ProjectService.prototype.openRecentProject = function (recentProject) {
        return this.openProject(recentProject.projectFile);
    };
    ProjectService.prototype.openProject = function (filePath) {
        var _this = this;
        var retValue = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            __WEBPACK_IMPORTED_MODULE_1_fs__["readFile"](filePath, function (err, data) {
                if (err) {
                    _this.notificationsService.alert('Ocurrió un error al abrir el proyecto');
                    observer.next(false);
                    observer.complete();
                }
                else {
                    try {
                        var parsedData = JSON.parse(data);
                        if (!new __WEBPACK_IMPORTED_MODULE_7__models_project__["a" /* Project */]().isProject(parsedData)) {
                            throw new Error();
                        }
                        else {
                            _this.workspace.project = parsedData;
                            _this.workspace.projectFile = filePath;
                            _this.workspace.changes = false;
                            _this.workspace.path = __WEBPACK_IMPORTED_MODULE_2_path__["dirname"](filePath);
                            _this.workspaceSubscription.next(_this.workspace);
                            _this.updatePersistedUserPreferences();
                            _this.addToRecentProjects(_this.workspace.project);
                            observer.next(true);
                            observer.complete();
                        }
                    }
                    catch (error) {
                        console.log('Error al parsear json del proyecto');
                        _this.notificationsService.alert('Ocurrión un error al leer el proyecto');
                        observer.next(false);
                        observer.complete();
                    }
                }
            });
        });
        return retValue;
    };
    ProjectService.prototype.saveCurrentProject = function () {
        this.workspace.changes = false;
        this.workspaceSubscription.next(this.workspace);
        this.saveProjectToFile(this.workspace.projectFile);
    };
    ProjectService.prototype.registerProjectChange = function () {
        this.workspace.changes = true;
        this.workspaceSubscription.next(this.workspace);
        this.updatePersistedWorkspace();
    };
    ProjectService.prototype.getProjectChange = function () {
        return this.workspace.changes;
    };
    ProjectService.prototype.existsOpenProject = function () {
        return this.workspace.project != null;
    };
    ProjectService.prototype.setBlocklyBlocks = function (blocks) {
        if (this.workspace.project) {
            if (this.workspace.project.blocks !== blocks) {
                this.workspace.project.blocks = blocks;
                this.registerProjectChange();
            }
        }
    };
    ProjectService.prototype.getBlocklyBlocks = function () {
        if (this.workspace.project) {
            if (this.workspace.project.blocks) {
                return this.workspace.project.blocks;
            }
        }
        return null;
    };
    ProjectService.prototype.setBlocklyCode = function (code) {
        if (this.workspace.project) {
            this.workspace.project.code = code;
            this.workspaceSubscription.next(this.workspace);
            this.updatePersistedWorkspace();
        }
    };
    ProjectService.prototype.getBlocklyCode = function () {
        if (this.workspace.project) {
            if (this.workspace.project.code) {
                return this.workspace.project.code;
            }
        }
        return null;
    };
    ProjectService.prototype.getRecentProjects = function () {
        return this.userPreferences.recentProjects;
    };
    ProjectService.prototype.saveProjectToFile = function (file) {
        var _this = this;
        console.log('Trying to save', file);
        var fileDescriptor;
        /* Try to open file */
        try {
            fileDescriptor = __WEBPACK_IMPORTED_MODULE_1_fs__["openSync"](file, 'w');
        }
        catch (error) {
            this.notificationsService.alert('No se puede crear el archivo');
            return false;
        }
        /* Try to write to file */
        try {
            __WEBPACK_IMPORTED_MODULE_1_fs__["writeFileSync"](file, JSON.stringify(this.workspace.project));
        }
        catch (error) {
            this.notificationsService.alert('No se puede escribir el archivo');
            /* Closing the file */
            __WEBPACK_IMPORTED_MODULE_1_fs__["closeSync"](fileDescriptor);
            return false;
        }
        /* Closing the file */
        __WEBPACK_IMPORTED_MODULE_1_fs__["closeSync"](fileDescriptor);
        this.ngZone.run(function () {
            _this.notificationsService.success('Guardar Proyecto', 'Guardado', {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10,
                animate: 'fromRight'
            });
        });
        return true;
    };
    /**
     * Creates directories and copies the files needed to compile and load code to the board.
     * @param project Project to be created
     */
    ProjectService.prototype.createProjectStructure = function (directory, file) {
        var _this = this;
        var retValue = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"](function (observer) {
            var error = false;
            __WEBPACK_IMPORTED_MODULE_3_mkdirp__(directory, function (err) {
                if (err) {
                    console.error(err);
                    observer.next(false);
                    observer.complete();
                    return;
                }
                else {
                    if (_this.saveProjectToFile(file)) {
                        console.log('Archivo cbp creado');
                    }
                    else {
                        console.log('No se pudo crear el cbp');
                        observer.next(false);
                        observer.complete();
                        return;
                    }
                }
                __WEBPACK_IMPORTED_MODULE_3_mkdirp__(directory + '/app/src', function (err) {
                    if (err) {
                        console.error(err);
                        observer.next(false);
                        observer.complete();
                        return;
                    }
                    __WEBPACK_IMPORTED_MODULE_3_mkdirp__(directory + '/app/inc', function (err) {
                        if (err) {
                            console.error(err);
                            observer.next(false);
                            observer.complete();
                            return;
                        }
                        __WEBPACK_IMPORTED_MODULE_3_mkdirp__(directory + '/libs', function (err) {
                            if (err) {
                                console.error(err);
                                observer.next(false);
                                observer.complete();
                                return;
                            }
                            __WEBPACK_IMPORTED_MODULE_3_mkdirp__(directory + '/scripts', function (err) {
                                if (err) {
                                    console.error(err);
                                    observer.next(false);
                                    observer.complete();
                                    return;
                                }
                                else {
                                    observer.next(true);
                                    observer.complete();
                                }
                            });
                        });
                    });
                });
            });
        });
        return retValue;
    };
    ProjectService.prototype.updatePersistedWorkspace = function () {
        this.storage.store('workspace', this.workspace);
    };
    ProjectService.prototype.updatePersistedUserPreferences = function () {
        this.storage.store('user-preferences', this.userPreferences);
    };
    ProjectService.prototype.addToRecentProjects = function (project) {
        var _this = this;
        /* If the project does not exists, it is pushed into the array */
        if (this.userPreferences.recentProjects) {
            if (-1 === this.userPreferences.recentProjects.findIndex(function (recentProject) {
                return recentProject.name === project.name && recentProject.projectFile === _this.workspace.projectFile;
            })) {
                var recentProject = new __WEBPACK_IMPORTED_MODULE_11__models_recent_project__["a" /* RecentProject */]();
                recentProject.name = project.name;
                recentProject.projectFile = this.workspace.projectFile;
                this.userPreferences.recentProjects.push(recentProject);
                this.userPreferences.recentProjects.splice(0, 1);
                /* Order recent projects by date */
                this.userPreferences.recentProjects = this.userPreferences.recentProjects.sort(function (a, b) {
                    if (a.lastOpened instanceof Date && b.lastOpened instanceof Date) {
                        return b.lastOpened.getTime() - a.lastOpened.getTime();
                    }
                    else if (a.lastOpened instanceof Date) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
                this.updatePersistedUserPreferences();
            }
        }
        else {
            this.userPreferences.recentProjects = [];
            var recentProject = new __WEBPACK_IMPORTED_MODULE_11__models_recent_project__["a" /* RecentProject */]();
            recentProject.name = project.name;
            recentProject.projectFile = this.workspace.projectFile;
            this.userPreferences.recentProjects.push(recentProject);
            this.updatePersistedUserPreferences();
        }
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__confirmation_service__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__confirmation_service__["a" /* ConfirmationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["b" /* NotificationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_webstorage__["b" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_webstorage__["b" /* LocalStorageService */]) === "function" && _d || Object])
], ProjectService);

var _a, _b, _c, _d;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = require('fs');

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments__ = __webpack_require__(411);




var ipcRenderer = __webpack_require__(76).ipcRenderer;
if (__WEBPACK_IMPORTED_MODULE_3_environments__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function () {
    // Le avisamos a electron que ya estamos cargados.
    global.setTimeout(function () {
        ipcRenderer.send('app-cargada', 'ping');
    }, 0);
});
//# sourceMappingURL=main.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(37)))

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_configuration_configuration_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_editor_editor_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_help_help_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_project_project_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_editor_guard_service__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__components_home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'configuration',
        component: __WEBPACK_IMPORTED_MODULE_3__components_configuration_configuration_component__["a" /* ConfigurationComponent */]
    }, {
        path: 'editor',
        component: __WEBPACK_IMPORTED_MODULE_4__components_editor_editor_component__["a" /* EditorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__providers_editor_guard_service__["a" /* EditorGuardService */]]
    }, {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_5__components_help_help_component__["a" /* HelpComponent */]
    }, {
        path: 'project',
        component: __WEBPACK_IMPORTED_MODULE_6__components_project_project_component__["a" /* ProjectComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_window_service__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrowserWindow = __webpack_require__(76).remote.BrowserWindow;
var AppComponent = (function () {
    function AppComponent(electronService, notificationsService, windowService) {
        var _this = this;
        this.electronService = electronService;
        this.notificationsService = notificationsService;
        this.windowService = windowService;
        this.notificationsOptions = {
            position: ['top', 'right'],
            timeOut: 5000
        };
        this.isMaximizedWindow = false;
        if (electronService.isElectron()) {
            console.log('Mode electron');
            // Check if electron is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.ipcRenderer);
            // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
            console.log('c', electronService.childProcess);
        }
        else {
            console.log('Mode web');
        }
        setInterval(function () {
            _this.isMaximizedWindow = _this.maximizedWindow();
        }, 500);
    }
    AppComponent.prototype.minimizeWindow = function () {
        this.windowService.minimizeWindow();
    };
    AppComponent.prototype.unmaximizeWindow = function () {
        this.windowService.unmaximizeWindow();
    };
    AppComponent.prototype.maximizeWindow = function () {
        this.windowService.maximizeWindow();
    };
    AppComponent.prototype.maximizedWindow = function () {
        return this.windowService.isMaximizedWindow();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(423),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_electron_service__["a" /* ElectronService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_window_service__["a" /* WindowService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tooltip__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_webstorage__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_electron_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_app_sidebar_app_sidebar_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_configuration_configuration_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_help_help_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blockly_blockly_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_topbar_topbar_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_bottom_bar_bottom_bar_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_confirmation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_editor_guard_service__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_window_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_app_sidebar_app_sidebar_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_compiling_service__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_app_sidebar_app_sidebar_component__["a" /* AppSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_configuration_configuration_component__["a" /* ConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_blockly_blockly_component__["a" /* BlocklyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_topbar_topbar_component__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_bottom_bar_bottom_bar_component__["a" /* BottomBarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_webstorage__["a" /* Ng2Webstorage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__providers_electron_service__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_16__providers_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_25__providers_confirmation_service__["a" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_26__providers_editor_guard_service__["a" /* EditorGuardService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_window_service__["a" /* WindowService */],
            __WEBPACK_IMPORTED_MODULE_28__components_app_sidebar_app_sidebar_service__["a" /* AppSidebarService */],
            __WEBPACK_IMPORTED_MODULE_29__providers_compiling_service__["a" /* CompilingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_sidebar_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_compiling_service__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppSidebarComponent = (function () {
    function AppSidebarComponent(projectService, appSidebarService, compilingService) {
        this.projectService = projectService;
        this.appSidebarService = appSidebarService;
        this.compilingService = compilingService;
        this.showCCode = false;
    }
    AppSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appSidebarService.getShowCCode().subscribe(function (show) {
            _this.showCCode = show;
        });
    };
    AppSidebarComponent.prototype.toggleCCode = function () {
        this.appSidebarService.toggleCCode();
    };
    AppSidebarComponent.prototype.verifyProgram = function () {
        this.compilingService.verifyProgram();
    };
    return AppSidebarComponent;
}());
AppSidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(424),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_sidebar_service__["a" /* AppSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_sidebar_service__["a" /* AppSidebarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_compiling_service__["a" /* CompilingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_compiling_service__["a" /* CompilingService */]) === "function" && _c || Object])
], AppSidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=app-sidebar.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocklyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlocklyComponent = (function () {
    function BlocklyComponent(domSanitizer) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.onBlocklyCodeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.onBlocklyBlocksChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        Blockly.prompt = function (a, b, c) {
            _this.promptModalDesc = a;
            _this.promptCallback = c;
            _this.promptModal.show();
            console.log('prompt', c);
        };
    }
    BlocklyComponent.prototype.ngOnInit = function () {
        this.toolboxContent = this.domSanitizer.bypassSecurityTrustHtml("\n  <xml id=\"toolbox\" style=\"display: none\">\n    <category name=\"L\u00F3gica\" colour=\"210\">\n      <block type=\"controls_if\"></block>\n      <block type=\"logic_compare\"></block>\n      <block type=\"logic_operation\"></block>\n      <block type=\"logic_true\"></block>\n      <block type=\"logic_false\"></block>\n      <block type=\"logic_negate\"></block>\n      <block type=\"logic_null\"></block>\n    </category>\n    <category name=\"Entradas / Salidas\" colour=\"120\">\n      <block type=\"ciaa_sapi_gpio_write\">\n        <field name=\"pin_option\">LEDR</field>\n        <field name=\"value_option\">ON</field>\n      </block>\n      <block type=\"ciaa_sapi_gpio_digital_read\" >\n        <field name=\"pin_option\">GPIO0</field>\n      </block>\n      <block type=\"ciaa_sapi_gpio_analog_read\">\n        <field name=\"pin_option\">CH1</field>\n      </block>\n      <block type=\"ciaa_sapi_dac_write\">\n        <field name=\"pin_option\">DAC</field>\n        <field name=\"value\">0</field>\n      </block>\n      <block type=\"ciaa_sapi_pwm_write\">\n        <field name=\"pin_option\">PWM0</field>\n        <field name=\"value_option\">50</field>\n      </block>\n      <block type=\"ciaa_sapi_pwm_read\">\n        <field name=\"pin_option\">PWM0</field>\n      </block>\n    </category>\n    <category name=\"Servo\" colour=\"230\">\n      <block type=\"ciaa_sapi_servo_write\">\n        <field name=\"pin_option\">SERVO0</field>\n        <field name=\"value_option\">90</field>\n      </block>\n      <block type=\"ciaa_sapi_servo_read\">\n        <field name=\"pin_option\">SERVO0</field>\n      </block>\n    </category>\n    <category name=\"Control\" colour=\"20\">\n      <block type=\"controls_repeat_forever\">\n      </block>\n      <block type=\"controls_whileUntil\">\n      </block>\n      <block type=\"ciaa_sapi_blocking_delay\">\n        <value name=\"delay_time\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1000</field>\n          </block>\n        </value>\n      </block>\n      <block type=\"ciaa_sapi_sleep_until_interrupt\">\n      </block>\n      <block type=\"controls_for\">\n        <value name=\"FROM\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1</field>\n          </block>\n        </value>\n        <value name=\"TO\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">10</field>\n          </block>\n        </value>\n        <value name=\"BY\">\n          <block type=\"math_number\">\n            <field name=\"NUM\">1</field>\n          </block>\n        </value>\n      </block>\n    </category>\n    <category name=\"Variables\" custom=\"VARIABLE\" colour=\"330\"></category>\n    <category name=\"Funciones\" custom=\"PROCEDURE\" colour=\"290\"></category>\n    <category name=\"Matem\u00E1tica\">\n      <block type=\"math_number\">\n      </block>\n      <block type=\"math_arithmetic\">\n      </block>\n    </category>\n    <category name=\"Texto\">\n      <block type=\"text\"></block>\n    </category>\n  </xml>\n    ");
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
        if (this.blocks) {
            var xml = Blockly.Xml.textToDom(this.blocks);
            Blockly.Xml.domToWorkspace(xml, this.workspace);
        }
    };
    BlocklyComponent.prototype.blocklyCodeChange = function () {
        var code = Blockly.CiaaSapi.workspaceToCode(this.workspace);
        var xml = Blockly.Xml.workspaceToDom(this.workspace);
        var xmlText = Blockly.Xml.domToText(xml);
        this.onBlocklyCodeChange.emit(code);
        this.onBlocklyBlocksChange.emit(xmlText);
    };
    BlocklyComponent.prototype.promptReady = function () {
        this.promptCallback(this.promptValue);
    };
    return BlocklyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('promptModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalDirective */]) === "function" && _a || Object)
], BlocklyComponent.prototype, "promptModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], BlocklyComponent.prototype, "onBlocklyCodeChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], BlocklyComponent.prototype, "onBlocklyBlocksChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], BlocklyComponent.prototype, "blocks", void 0);
BlocklyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-blockly',
        template: __webpack_require__(425),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], BlocklyComponent);

var _a, _b;
//# sourceMappingURL=blockly.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_project_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomBarComponent = (function () {
    function BottomBarComponent(projectService, changeDetector) {
        this.projectService = projectService;
        this.changeDetector = changeDetector;
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectSubscription = this.projectService.getWorkspace().subscribe(function (workspace) {
            _this.workspace = workspace;
            _this.changeDetector.detectChanges();
        });
    };
    return BottomBarComponent;
}());
BottomBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-bottom-bar',
        template: __webpack_require__(426),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_project_service__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ChangeDetectorRef */]) === "function" && _b || Object])
], BottomBarComponent);

var _a, _b;
//# sourceMappingURL=bottom-bar.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_project_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dialog__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_confirmation_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dialog = __webpack_require__(76).remote.dialog;




var TopbarComponent = (function () {
    function TopbarComponent(projectService, confirmationService, changeDetector, router) {
        this.projectService = projectService;
        this.confirmationService = confirmationService;
        this.changeDetector = changeDetector;
        this.router = router;
        this.dialog = new __WEBPACK_IMPORTED_MODULE_3__models_dialog__["a" /* Dialog */]();
    }
    TopbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogSubscription = this.confirmationService.getDialog().subscribe(function (dialog) {
            _this.dialog = dialog;
            _this.changeDetector.detectChanges();
            _this.confirmationModal.show();
        });
    };
    TopbarComponent.prototype.saveProject = function () {
        this.projectService.saveCurrentProject();
    };
    TopbarComponent.prototype.openProject = function () {
        var _this = this;
        console.log('Open project');
        dialog.showOpenDialog({
            filters: [
                { name: 'Ciaabot Project', extensions: ['cbp'] }
            ]
        }, function (fileNames) {
            if (fileNames === undefined) {
                return;
            }
            var fileName = fileNames[0];
            _this.projectService.openProject(fileName).subscribe(function (success) {
                if (success) {
                    _this.router.navigate(['editor']);
                }
            });
        });
    };
    return TopbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('confirmationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["b" /* ModalDirective */]) === "function" && _a || Object)
], TopbarComponent.prototype, "confirmationModal", void 0);
TopbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-topbar',
        template: __webpack_require__(432),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_project_service__["a" /* ProjectService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_confirmation_service__["a" /* ConfirmationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_confirmation_service__["a" /* ConfirmationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === "function" && _e || Object])
], TopbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
var Dialog = (function () {
    function Dialog() {
        this.title = '';
        this.titleClass = '';
        this.titleIcon = '';
        this.description = '';
        this.options = [];
        this.canDismiss = true;
    }
    return Dialog;
}());

//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProject; });
var RecentProject = (function () {
    function RecentProject() {
        this.lastOpened = new Date();
    }
    return RecentProject;
}());

//# sourceMappingURL=recent-project.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPreferences; });
var UserPreferences = (function () {
    function UserPreferences() {
        this.defaultSerialPort = null;
        this.defaultCiaabotModel = null;
    }
    return UserPreferences;
}());

//# sourceMappingURL=user-preferences.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Workspace; });
var Workspace = (function () {
    function Workspace() {
        this.project = null;
        this.path = '';
        this.projectFile = '';
        this.changes = false;
    }
    return Workspace;
}());

//# sourceMappingURL=workspace.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file contains development variables. (When you work in DEV MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
// This file contains development variables. (When you work in DEV MODE)
var environment = {
    production: false
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif; }\n\na.active {\n  background-color: gray; }\n\n.contenido-principal {\n  height: 100vh;\n  width: 100vw; }\n\n.contenido-principal .row {\n  height: 100%; }\n\n.contenido {\n  background: #1f3042;\n  color: white; }\n\n#header {\n  background: #2c4762;\n  color: white;\n  font-size: 12px;\n  margin-top: 5px;\n  padding: 5px;\n  text-align: center;\n  width: 100%;\n  -webkit-app-region: drag; }\n  #header #icon {\n    float: left;\n    max-width: 20px; }\n  #header .controls {\n    -webkit-app-region: no-drag; }\n  #header button.btn, #header button.btn:focus {\n    background: transparent;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    color: #b5d1e4;\n    font-size: 12px;\n    font-weight: 100;\n    height: 22px;\n    padding: 0;\n    transition: all .3s ease;\n    vertical-align: top;\n    width: 41px; }\n    #header button.btn.close-btn:hover, #header button.btn:focus.close-btn:hover {\n      background: #D9534F;\n      color: white; }\n    #header button.btn:hover, #header button.btn:focus:hover {\n      background: #b5d1e4;\n      color: #2c4762; }\n    #header button.btn img, #header button.btn:focus img {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".sidebar {\n  min-height: calc(100vh - 98px);\n  background-color: #2c4762;\n  border-top: 2px solid #1f3042;\n  border-bottom: 2px solid #1f3042;\n  color: #b5d1e4;\n  display: inline-block;\n  float: left;\n  padding: 0;\n  width: 50px; }\n\na .row.item {\n  border-bottom: 1px solid transparent;\n  color: #b5d1e4;\n  margin: 0;\n  padding: 10px 0;\n  transition: all ease 0.3s; }\n\na:hover .row.item {\n  background-color: #2c4762; }\n\na:hover .row.item {\n  background-color: #6aa3c9;\n  color: #2c4762 !important; }\n\na.active .row.item {\n  background-color: #b5d1e4;\n  color: #2c4762 !important; }\n\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 1px;\n  background: #1f3042; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#blocklyArea {\n  height: 100%;\n  margin: 0;\n  padding: 0; }\n\n#blocklyDiv {\n  position: absolute; }\n\n.modal-body {\n  text-align: center; }\n\n.modal-body input {\n  margin: 15px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n  background-color: #2c4762;\n  color: #b5d1e4;\n  min-height: 25px;\n  float: right;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n  float: left;\n  height: 100%;\n  overflow: hidden;\n  width: 100%; }\n\n:host > .container-fluid {\n  background-color: #ffffff;\n  color: #616161;\n  display: inline-block;\n  height: 100%;\n  margin: 0;\n  width: 100%; }\n\n#codePreview {\n  background-color: #2c4762;\n  color: #b5d1e4;\n  font-family: monospace;\n  font-weight: bold;\n  margin-top: 20px;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#contenido {\n  height: 100%; }\n\n#logo {\n  opacity: 0.2;\n  width: 100%; }\n\n.recent-project-list {\n  border-left: 1px solid rgba(181, 209, 228, 0.1);\n  padding-top: 20px;\n  padding-bottom: 20px; }\n\n#recent-projects {\n  max-height: 30vh;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.recent-project {\n  border: 1px solid rgba(181, 209, 228, 0.1);\n  cursor: pointer;\n  font-size: 14px;\n  margin-bottom: 5px;\n  padding: 5px;\n  transition: all 0.3s ease-in-out;\n  width: 100%; }\n  .recent-project * {\n    cursor: pointer; }\n  .recent-project:hover {\n    background: rgba(181, 209, 228, 0.1);\n    border-color: transparent; }\n  .recent-project .path {\n    font-size: 80%;\n    width: 100%; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".project-title {\n  font-size: 2rem; }\n\n.custom-file-control {\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid white;\n  color: white; }\n\n.custom-file-control::before {\n  content: \"Navegar\";\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #464a4c;\n  background-color: #eceeef;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0; }\n\n.custom-file-control::after {\n  content: \"Seleccionar directorio...\"; }\n\nselect, select:focus {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid white;\n  border-radius: 0;\n  color: white; }\n\nselect * {\n  color: black; }\n\n.btn {\n  background: white;\n  border: 1px solid white;\n  border-radius: 0;\n  color: #1f3042;\n  transition: all 0.2s ease;\n  width: 100%; }\n  .btn:not([disabled]):hover {\n    background: #1f3042;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n  background-color: #2c4762;\n  color: #b5d1e4;\n  min-height: 40px;\n  float: right;\n  width: 100%; }\n\n#logo {\n  height: 20px;\n  border-right: 1px solid;\n  padding-right: 15px; }\n\n.container-fluid {\n  height: 40px;\n  padding-left: 5px !important; }\n\n.btn {\n  border-radius: 0;\n  border: none;\n  cursor: pointer;\n  height: 100%; }\n\n.btn-outline-primary {\n  color: #b5d1e4;\n  border-color: transparent; }\n  .btn-outline-primary:hover {\n    background: #b5d1e4;\n    border-color: transparent;\n    color: #2c4762; }\n  .btn-outline-primary:focus {\n    outline: none;\n    box-shadow: none; }\n\n.modal-content {\n  color: #2c4762; }\n  .modal-content .btn {\n    margin: 0 5px; }\n  .modal-content .modal-header {\n    margin: 0;\n    padding: 0; }\n    .modal-content .modal-header .modal-title {\n      padding: 5px; }\n    .modal-content .modal-header .close {\n      padding-right: 10px; }\n\n.cursor-pointer {\n  cursor: pointer !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<simple-notifications [options]=\"notificationsOptions\"></simple-notifications>\r\n<div id=\"header\">\r\n    <img src=\"" + __webpack_require__(771) + "\" id=\"icon\" alt=\"\">\r\n    Ciaabot IDE\r\n    <div class=\"controls float-right\">\r\n        <button class=\"btn\" (click)=\"minimizeWindow()\"><i class=\"fa fa-window-minimize\" aria-hidden=\"true\"></i></button>\r\n        <button class=\"btn\" *ngIf=\"isMaximizedWindow\" (click)=\"unmaximizeWindow()\"><i class=\"fa fa-window-restore\" aria-hidden=\"true\"></i></button>\r\n        <button class=\"btn\" *ngIf=\"!isMaximizedWindow\" (click)=\"maximizeWindow()\"><i class=\"fa fa-window-maximize\" aria-hidden=\"true\"></i></button>\r\n        <button class=\"btn close-btn\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n    </div>\r\n</div>\r\n<app-topbar></app-topbar>\r\n<app-sidebar></app-sidebar>\r\n<div class=\"container-fluid contenido\" style=\"padding: 0; width: calc(100% - 50px); float:left; height: calc(100vh - 98px);\">\r\n    <div class=\"row no-gutters\" style=\"height: 100%;\">\r\n        <div class=\"col-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-bottom-bar></app-bottom-bar>";

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid sidebar text-center\">\r\n  <i class=\"fa fa-lg fa-ellipsis-h\" aria-hidden=\"true\" style=\"color: #1f3042;\"></i>\r\n  <a [routerLink]=\"['home']\" [routerLinkActive]=\"['active']\" placement=\"right\" tooltip=\"Proyectos recientes\" container=\"body\">\r\n    <div class=\"row item\">\r\n      <div class=\"col\">\r\n        <i class=\"fa fa-list-ul fa-lg\"></i>\r\n      </div>\r\n    </div>\r\n  </a>\r\n\r\n  <!-- Editor specific actions -->\r\n  <div *ngIf=\"projectService.existsOpenProject()\">\r\n    <hr>\r\n    <a [routerLink]=\"['editor']\" [routerLinkActive]=\"['active']\" placement=\"right\" tooltip=\"Editor\">\r\n      <div class=\"row item\">\r\n        <div class=\"col\">\r\n          <i class=\"fa fa-puzzle-piece fa-lg\" style=\"padding-left: 3px;\"></i>\r\n        </div>\r\n      </div>\r\n    </a>\r\n    <a (click)=\"toggleCCode()\" [ngClass]=\"{'active': showCCode}\" placement=\"right\"\r\n      tooltip=\"Ver código en C\" container=\"body\">\r\n      <div class=\"row item\">\r\n        <div class=\"col\">\r\n          <i class=\"fa fa-code fa-lg\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </a>\r\n    <a placement=\"right\" tooltip=\"Ver código en Español\" container=\"body\">\r\n      <div class=\"row item\">\r\n        <div class=\"col\">\r\n          <strong>Es</strong>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <hr>\r\n\r\n    <a placement=\"right\" tooltip=\"Verificar programa\" (click)=\"verifyProgram()\" container=\"body\">\r\n      <div class=\"row item\">\r\n        <div class=\"col\">\r\n          <i class=\"fa fa-check-circle-o fa-lg\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <a placement=\"right\" tooltip=\"Descargar al robot\" container=\"body\">\r\n      <div class=\"row item\">\r\n        <div class=\"col\">\r\n          <i class=\"fa fa-download fa-lg\" aria-hidden=\"true\"></i>\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <!-- ===================== -->\r\n</div>";

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"blocklyArea\">\r\n  <div id=\"blocklyDiv\"></div>\r\n</div>\r\n\r\n<div [hidden]=\"true\" [outerHTML]=\"toolboxContent\"></div>\r\n\r\n<div bsModal #promptModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"promptModal\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">{{'Ingrese valor'}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{promptModalDesc}}\r\n        <input type=\"text\" [(ngModel)]=\"promptValue\" class=\"form-control\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"promptModal.hide(); promptReady();\">\r\n          Ok\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"promptModal.hide();\">\r\n          Cancelar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"workspace\">\r\n  <div *ngIf=\"workspace.project\">\r\n    <small>{{workspace.project.name || ''}} <span *ngIf=\"projectService.getProjectChange()\"> *</span></small>\r\n    <small *ngIf=\"workspace.project.ciaabotModel\">| Usando el Ciaabot {{workspace.project.ciaabotModel}}</small>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1 class=\"display-4\">Configuración</h1>\r\n</div>\r\n";

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"workspace\">\r\n  <div class=\"row\" style=\"height: 100%;\">\r\n    <div class=\"col\">\r\n\r\n      <app-blockly  (onBlocklyCodeChange)=\"onBlocklyCodeChange($event)\" (onBlocklyBlocksChange)=\"onBlocklyBlocksChange($event)\"\r\n                    [blocks]=\"workspace.project.blocks\">\r\n      </app-blockly>\r\n    </div>\r\n    <div class=\"col-3\" *ngIf=\"showCCode\">\r\n      <p class=\"lead\">Código en C</p>\r\n      <pre id=\"codePreview\">\r\n        {{workspace.project.code}}\r\n      </pre>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <h1 class=\"display-4\">Help</h1>\r\n</div>";

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"container-fluid\" id=\"contenido\">\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col-6 offset-3\">\r\n      <div class=\"row align-items-center\">\r\n        <div class=\"col-4\">\r\n          <img src=\"" + __webpack_require__(147) + "\" id=\"logo\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-8 recent-project-list\" *ngIf=\"projectService.getRecentProjects()\">\r\n          <p class=\"lead\" style=\"font-weight: 400\">Proyectos recientes</p>\r\n          <div id=\"recent-projects\">\r\n            <div *ngFor=\"let project of projectService.getRecentProjects()\" (click)=\"openProject(project)\" class=\"recent-project\">\r\n              <div class=\"ellipsis\">{{project.name}}</div>\r\n              <div class=\"path text-muted ellipsis\">{{project.projectFile}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\r\n  <div class=\"row align-items-center h-100\">\r\n    <div class=\"col-4 offset-4\">\r\n      <h1 class=\"display-4 project-title\">{{project.name ? project.name : 'Nuevo Proyecto'}}</h1>\r\n      <br>\r\n      <form>\r\n        <md-input-container class=\"w-100\">\r\n          <input mdInput type=\"text\" name=\"name\" placeholder=\"Ingrese el nombre del proyecto\" [(ngModel)]=\"project.name\" tabindex=\"1\">\r\n        </md-input-container>\r\n        <label for=\"modelo\">Modelo de Ciaabot</label>\r\n\r\n        <select class=\"form-control\" name=\"modelo\" [(ngModel)]=\"project.ciaabotModel\" tabindex=\"2\">\r\n              <option *ngFor=\"let modelo of models()\">\r\n                {{ modelo }}\r\n              </option>\r\n        </select>\r\n        <hr>\r\n        <label for=\"file\">Directorio</label>\r\n        <label class=\"custom-file d-block\">\r\n          <input type=\"file\" name=\"file\" (change)=\"fileChange($event)\" class=\"custom-file-input\" webkitdirectory tabindex=\"3\">\r\n          <span class=\"custom-file-control\"></span>\r\n        </label>\r\n      </form>\r\n      <br>\r\n      <small *ngIf=\"directoryPath\">\r\n        Se creará el directorio {{directoryPath + getPathSeparator() + toHyphenCase(project.name)}}\r\n      </small>\r\n      <button class=\"btn btn-lg btn-primary\" [disabled]=\"!project.name || !project.ciaabotModel || !directoryPath\" (click)=\"saveProject()\">Guardar</button>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"container-fluid\">\r\n  <img src=\"" + __webpack_require__(147) + "\" id=\"logo\" alt=\"\">\r\n  <button [routerLink]=\"['project']\" type=\"button\" class=\"btn btn-outline-primary\"><i class=\"cursor-pointer fa fa-file\" aria-hidden=\"true\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary cursor-pointer\" (click)=\"openProject()\"><i class=\"cursor-pointer fa fa-lg fa-folder-open-o\" aria-hidden=\"true\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary cursor-pointer\" (click)=\"saveProject()\"><i class=\"cursor-pointer fa fa-lg fa-floppy-o\" aria-hidden=\"true\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary cursor-pointer\" [routerLink]=\"['configuration']\"><i class=\"cursor-pointer fa fa-lg fa-cog\" aria-hidden=\"true\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-outline-primary cursor-pointer\" [routerLink]=\"['help']\"><i class=\"cursor-pointer fa fa-lg fa-question-circle\" aria-hidden=\"true\"></i></button>\r\n</div>\r\n\r\n<div class=\"modal fade\" *ngIf=\"dialog\" bsModal #confirmationModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header {{dialog.titleClass}}\">\r\n        <h4 class=\"modal-title pull-left\">\r\n          <i class=\"fa {{dialog.titleIcon || 'fa-exclamation-triangle'}}\" aria-hidden=\"true\"></i>\r\n          {{dialog.title || 'Atención'}}\r\n        </h4>\r\n        <button type=\"button\" class=\"close pull-right\" *ngIf=\"dialog.canDismiss\" aria-label=\"Cerrar\" (click)=\"confirmationModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{dialog.description || 'Ocurrió un problema'}}\r\n        <hr>\r\n        <button type=\"button\" class=\"btn {{option.class}}\" *ngFor=\"let option of dialog.options\" (click)=\"option.callback(); confirmationModal.hide()\">\r\n          <i class=\"fa {{option.icon || ''}}\" aria-hidden=\"true\"></i>\r\n          {{option.text}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 165,
	"./af.js": 165,
	"./ar": 172,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 172,
	"./az": 173,
	"./az.js": 173,
	"./be": 174,
	"./be.js": 174,
	"./bg": 175,
	"./bg.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 187,
	"./de-at": 185,
	"./de-at.js": 185,
	"./de-ch": 186,
	"./de-ch.js": 186,
	"./de.js": 187,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 197,
	"./es-do": 196,
	"./es-do.js": 196,
	"./es.js": 197,
	"./et": 198,
	"./et.js": 198,
	"./eu": 199,
	"./eu.js": 199,
	"./fa": 200,
	"./fa.js": 200,
	"./fi": 201,
	"./fi.js": 201,
	"./fo": 202,
	"./fo.js": 202,
	"./fr": 205,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 205,
	"./fy": 206,
	"./fy.js": 206,
	"./gd": 207,
	"./gd.js": 207,
	"./gl": 208,
	"./gl.js": 208,
	"./gom-latn": 209,
	"./gom-latn.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 236,
	"./ms-my": 235,
	"./ms-my.js": 235,
	"./ms.js": 236,
	"./my": 237,
	"./my.js": 237,
	"./nb": 238,
	"./nb.js": 238,
	"./ne": 239,
	"./ne.js": 239,
	"./nl": 241,
	"./nl-be": 240,
	"./nl-be.js": 240,
	"./nl.js": 241,
	"./nn": 242,
	"./nn.js": 242,
	"./pa-in": 243,
	"./pa-in.js": 243,
	"./pl": 244,
	"./pl.js": 244,
	"./pt": 246,
	"./pt-br": 245,
	"./pt-br.js": 245,
	"./pt.js": 246,
	"./ro": 247,
	"./ro.js": 247,
	"./ru": 248,
	"./ru.js": 248,
	"./sd": 249,
	"./sd.js": 249,
	"./se": 250,
	"./se.js": 250,
	"./si": 251,
	"./si.js": 251,
	"./sk": 252,
	"./sk.js": 252,
	"./sl": 253,
	"./sl.js": 253,
	"./sq": 254,
	"./sq.js": 254,
	"./sr": 256,
	"./sr-cyrl": 255,
	"./sr-cyrl.js": 255,
	"./sr.js": 256,
	"./ss": 257,
	"./ss.js": 257,
	"./sv": 258,
	"./sv.js": 258,
	"./sw": 259,
	"./sw.js": 259,
	"./ta": 260,
	"./ta.js": 260,
	"./te": 261,
	"./te.js": 261,
	"./tet": 262,
	"./tet.js": 262,
	"./th": 263,
	"./th.js": 263,
	"./tl-ph": 264,
	"./tl-ph.js": 264,
	"./tlh": 265,
	"./tlh.js": 265,
	"./tr": 266,
	"./tr.js": 266,
	"./tzl": 267,
	"./tzl.js": 267,
	"./tzm": 269,
	"./tzm-latn": 268,
	"./tzm-latn.js": 268,
	"./tzm.js": 269,
	"./uk": 270,
	"./uk.js": 270,
	"./ur": 271,
	"./ur.js": 271,
	"./uz": 273,
	"./uz-latn": 272,
	"./uz-latn.js": 272,
	"./uz.js": 273,
	"./vi": 274,
	"./vi.js": 274,
	"./x-pseudo": 275,
	"./x-pseudo.js": 275,
	"./yo": 276,
	"./yo.js": 276,
	"./zh-cn": 277,
	"./zh-cn.js": 277,
	"./zh-hk": 278,
	"./zh-hk.js": 278,
	"./zh-tw": 279,
	"./zh-tw.js": 279
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 433;

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = require('electron');

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSidebarService = (function () {
    function AppSidebarService() {
        this.showCCodeSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
    }
    AppSidebarService.prototype.showCCode = function () {
        this.showCCodeSubject.next(true);
    };
    AppSidebarService.prototype.hideCCode = function () {
        this.showCCodeSubject.next(false);
    };
    AppSidebarService.prototype.toggleCCode = function () {
        this.showCCodeSubject.next(!this.showCCodeSubject.getValue());
    };
    AppSidebarService.prototype.getShowCCode = function () {
        return this.showCCodeSubject.asObservable();
    };
    return AppSidebarService;
}());
AppSidebarService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppSidebarService);

//# sourceMappingURL=app-sidebar.service.js.map

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bot-icon.6ee8995bed53801dcce1.png";

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = require('child_process');

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = require('mkdirp');

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = require('os');

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(396);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationService = (function () {
    function ConfirmationService() {
        this.dialog = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    ConfirmationService.prototype.openDialog = function (dialog) {
        this.dialog.next(dialog);
    };
    ConfirmationService.prototype.clearDialog = function () {
        this.dialog.next();
    };
    ConfirmationService.prototype.getDialog = function () {
        return this.dialog.asObservable();
    };
    return ConfirmationService;
}());
ConfirmationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfirmationService);

//# sourceMappingURL=confirmation.service.js.map

/***/ })

},[775]);
//# sourceMappingURL=main.bundle.js.map