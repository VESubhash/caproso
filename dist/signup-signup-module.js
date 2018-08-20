(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"150px\" />\n            <h1>SB Admin BS4 Angular5</h1>\n            <form role=\"form\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Full Name\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Email\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\" id=\"\" placeholder=\"Repeat Password\">\n                    </div>\n                </div>\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/dashboard']\"> Register </a>&nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\"> Log in </a>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS Document */\n.loginPage {\n  background: url('login-bg.jpg') no-repeat center center fixed;\n  background-size: cover;\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n.login-section {\n  display: table;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n.loginBox {\n  padding-top: 0;\n  font-family: 'Poppins', sans-serif;\n  display: table-cell;\n  vertical-align: middle; }\n.loginBox .loginInner {\n  width: 530px;\n  background: #fff; }\n.loginBox .logoIcon {\n  text-align: center;\n  margin: 0 auto -50px auto;\n  position: relative;\n  z-index: 1; }\n.loginBox .loginInner .heading {\n  text-align: center; }\n.loginBox .loginInner .heading h2 {\n  font-weight: 500;\n  color: #282828;\n  font-size: 26px; }\n.loginBox .loginInner .heading h2 span {\n  font-weight: 300;\n  color: #35a2d7; }\n.loginBox .loginInner .heading p {\n  font-weight: 400;\n  font-size: 13px;\n  color: #a6a6a6; }\n.loginInner .loginForm {\n  padding: 20px 0 0 0; }\n.loginInner .loginForm .intSec {\n  border-bottom: 2px solid #efefef;\n  padding: 10px;\n  position: relative; }\n.loginInner .loginForm .intSec .int {\n  border: 0;\n  padding: 0 0 0 24px; }\n.loginInner .loginForm .user:before {\n  content: \"\\f007\";\n  font-family: \"FontAwesome\";\n  left: 9px;\n  position: absolute;\n  top: 8px;\n  padding-right: 5px;\n  color: #7fcaff; }\n.loginInner .loginForm .pass:before {\n  content: \"\\f023\";\n  font-family: \"FontAwesome\";\n  left: 9px;\n  position: absolute;\n  top: 8px;\n  color: #7fcaff; }\n.loginInner .loginForm .intSec .int:focus {\n  box-shadow: none; }\n.loginInner .loginForm .remember {\n  color: #939393;\n  font-size: 12px;\n  font-weight: 400; }\n.form-check-input {\n  top: 0.2rem; }\n.loginInner .loginForm .forgotPass {\n  text-align: right; }\n.loginInner .loginForm .forgotPass a {\n  color: #35a1d7;\n  text-decoration: underline;\n  font-size: 12px;\n  font-family: 'Poppins', sans-serif; }\n.loginButt {\n  margin: 40px auto 20px;\n  border-radius: 30px;\n  height: 55px;\n  background: #4bc1fb;\n  width: 215px;\n  border: none;\n  display: block; }\n.createNew {\n  text-align: center;\n  font-size: 16px; }\n.createNew a {\n  color: #fff; }\n.loginInner .loginForm .email:before {\n  content: \"\\f0e0\";\n  font-family: \"FontAwesome\";\n  left: 12px;\n  position: absolute;\n  top: 15px;\n  color: #7fcaff; }\n/*Registration Page CSS Start*/\n.loginBox.registratinBox {\n  padding-top: 60px; }\n.loginBox.registratinBox .loginInner {\n  width: 1050px;\n  margin: 0 auto;\n  padding: 0; }\n.regisLeft {\n  background: url('login-bg.jpg') no-repeat left top;\n  height: 750px;\n  display: table;\n  font-family: 'Poppins', sans-serif; }\n.regisLeft .logoBig {\n  display: table-cell;\n  vertical-align: middle; }\n.regisLeft .logoBig img {\n  padding: 0 0 30px; }\n.regisLeft h2 {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #fff;\n  font-size: 30px;\n  padding: 0 15px 10px; }\n.regisLeft p {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #fff;\n  font-size: 15px;\n  padding: 0 15px 0; }\n.regisRigt {\n  margin: 70px 0 0 0;\n  padding: 0 30px 0 0; }\n.loginBox.registratinBox .loginInner .heading {\n  text-align: left; }\n.loginInner .loginForm .organization:before {\n  content: \"\\f1ad\";\n  font-family: \"FontAwesome\";\n  left: 12px;\n  position: absolute;\n  top: 8px;\n  color: #7fcaff; }\n.loginBox.registratinBox .loginInner .loginForm .intSec {\n  margin-bottom: 10px; }\n.loginBox.registratinBox .loginButt {\n  margin: 40px 0 20px; }\n@media (max-width: 530px) {\n  .loginBox .loginInner {\n    width: 100%; } }\n/*@media(max-width:360px) {\r\n    .login-section{ position:inherit;}\r\n}*/\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map