(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-info-general-info-module"],{

/***/ "./src/app/layout/general-info/general-info-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/general-info/general-info-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: GeneralInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoRoutingModule", function() { return GeneralInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general-info.component */ "./src/app/layout/general-info/general-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _general_info_component__WEBPACK_IMPORTED_MODULE_2__["GeneralInfoComponent"]
    }
];
var GeneralInfoRoutingModule = /** @class */ (function () {
    function GeneralInfoRoutingModule() {
    }
    GeneralInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GeneralInfoRoutingModule);
    return GeneralInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/general-info/general-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/general-info/general-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Content coming soon.....\n\n\n"

/***/ }),

/***/ "./src/app/layout/general-info/general-info.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/general-info/general-info.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.parent-nos {\n  padding-top: 19px !important;\n  padding-bottom: 19px !important; }\n\n.nopadding {\n  padding: 0 !important; }\n\n.stats-card {\n  padding: 1em;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);\n  border: solid 0.8px #e4e4e4;\n  text-align: center;\n  background-color: #ffffff; }\n\n.columns {\n  float: left;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.large-4 {\n  margin: 10px;\n  width: 10%;\n  display: flex;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/layout/general-info/general-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/general-info/general-info.component.ts ***!
  \***************************************************************/
/*! exports provided: GeneralInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoComponent", function() { return GeneralInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent() {
        this.alerts = [];
        this.sliders = [];
        this.userName = 'Guest';
        this.affiliateName = '';
        this.organizationName = '';
        this.roleName = localStorage.getItem('roleName');
        this.userName = localStorage.getItem('userName');
        this.affiliateName = localStorage.getItem('affiliateName');
        this.organizationName = localStorage.getItem('organizationName');
    }
    GeneralInfoComponent.prototype.ngOnInit = function () { };
    GeneralInfoComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    GeneralInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'general-info',
            template: __webpack_require__(/*! ./general-info.component.html */ "./src/app/layout/general-info/general-info.component.html"),
            styles: [__webpack_require__(/*! ./general-info.component.scss */ "./src/app/layout/general-info/general-info.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/layout/general-info/general-info.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/general-info/general-info.module.ts ***!
  \************************************************************/
/*! exports provided: GeneralInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoModule", function() { return GeneralInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _general_info_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-info-routing.module */ "./src/app/layout/general-info/general-info-routing.module.ts");
/* harmony import */ var _general_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./general-info.component */ "./src/app/layout/general-info/general-info.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GeneralInfoModule = /** @class */ (function () {
    function GeneralInfoModule() {
    }
    GeneralInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _general_info_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeneralInfoRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"]
            ],
            declarations: [
                _general_info_component__WEBPACK_IMPORTED_MODULE_4__["GeneralInfoComponent"],
            ]
        })
    ], GeneralInfoModule);
    return GeneralInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=general-info-general-info-module.js.map