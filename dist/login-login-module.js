(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginPage\">\r\n<div class=\"container-fluid login-section\">\r\n    <div class=\"loginBox\">\r\n        <div class=\"logoIcon\"><img src=\"assets/images/login-icon.png\" alt=\"\"></div>\r\n        <div class=\"loginInner mx-auto py-5 \">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"heading pt-5\">\r\n                    <h2>Caproso <span>Log In</span></h2>\r\n                    <p>Capital Program Solutions</p>\r\n                </div>\r\n\r\n                <form class=\"loginForm\" [formGroup]=\"form\" (ngSubmit)=\"onLoggedin(form.value)\">\r\n                    <div class=\"alert\" *ngIf=\"ui.loading\" [ngClass]=\"ui.css\">\r\n                    <strong>{{ui.text}}</strong>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"intSec user\">\r\n                                    <input type=\"text\" id=\"UserName\" class=\"form-control int\" placeholder=\"Username\" formControlName=\"UserName\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"intSec pass\">\r\n                                    <input type=\"password\" id=\"PassWord\" class=\"form-control int\" placeholder=\"Enter password\" formControlName=\"PassWord\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"form-group form-check\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6 col-6\">\r\n                                <label class=\"form-check-label remember\">\r\n                                    <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-sm-6 col-xs-6 col-6 forgotPass\">\r\n                                <a href=\"#\">Forgot Password?</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                        <button type=\"submit\" class=\"btn btn-primary loginButt\" [disabled]=\"!form.valid\">\r\n                        Login</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"createNew py-5\">\r\n            <a href=\"#\">Create new account <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CSS Document */\n.loginPage {\n  background: url('login-bg.jpg') no-repeat center center fixed;\n  background-size: cover;\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n.login-section {\n  display: table;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n.loginBox {\n  padding-top: 0;\n  font-family: 'Poppins', sans-serif;\n  display: table-cell;\n  vertical-align: middle; }\n.loginBox .loginInner {\n  width: 530px;\n  background: #fff; }\n.loginBox .logoIcon {\n  text-align: center;\n  margin: 0 auto -50px auto;\n  position: relative;\n  z-index: 1; }\n.loginBox .loginInner .heading {\n  text-align: center; }\n.loginBox .loginInner .heading h2 {\n  font-weight: 500;\n  color: #282828;\n  font-size: 26px; }\n.loginBox .loginInner .heading h2 span {\n  font-weight: 300;\n  color: #35a2d7; }\n.loginBox .loginInner .heading p {\n  font-weight: 400;\n  font-size: 13px;\n  color: #a6a6a6; }\n.loginInner .loginForm {\n  padding: 20px 0 0 0; }\n.loginInner .loginForm .intSec {\n  border-bottom: 2px solid #efefef;\n  padding: 10px;\n  position: relative; }\n.loginInner .loginForm .intSec .int {\n  border: 0;\n  padding: 0 0 0 24px; }\n.loginInner .loginForm .user:before {\n  content: \"\\f007\";\n  font-family: \"FontAwesome\";\n  left: 9px;\n  position: absolute;\n  top: 8px;\n  padding-right: 5px;\n  color: #7fcaff; }\n.loginInner .loginForm .pass:before {\n  content: \"\\f023\";\n  font-family: \"FontAwesome\";\n  left: 9px;\n  position: absolute;\n  top: 8px;\n  color: #7fcaff; }\n.loginInner .loginForm .intSec .int:focus {\n  box-shadow: none; }\n.loginInner .loginForm .remember {\n  color: #939393;\n  font-size: 12px;\n  font-weight: 400; }\n.form-check-input {\n  top: 0.2rem; }\n.loginInner .loginForm .forgotPass {\n  text-align: right; }\n.loginInner .loginForm .forgotPass a {\n  color: #35a1d7;\n  text-decoration: underline;\n  font-size: 12px;\n  font-family: 'Poppins', sans-serif; }\n.loginButt {\n  margin: 40px auto 20px;\n  border-radius: 30px;\n  height: 55px;\n  background: #4bc1fb;\n  width: 215px;\n  border: none;\n  display: block; }\n.createNew {\n  text-align: center;\n  font-size: 16px; }\n.createNew a {\n  color: #fff; }\n.loginInner .loginForm .email:before {\n  content: \"\\f0e0\";\n  font-family: \"FontAwesome\";\n  left: 12px;\n  position: absolute;\n  top: 15px;\n  color: #7fcaff; }\n/*Registration Page CSS Start*/\n.loginBox.registratinBox {\n  padding-top: 60px; }\n.loginBox.registratinBox .loginInner {\n  width: 1050px;\n  margin: 0 auto;\n  padding: 0; }\n.regisLeft {\n  background: url('login-bg.jpg') no-repeat left top;\n  height: 750px;\n  display: table;\n  font-family: 'Poppins', sans-serif; }\n.regisLeft .logoBig {\n  display: table-cell;\n  vertical-align: middle; }\n.regisLeft .logoBig img {\n  padding: 0 0 30px; }\n.regisLeft h2 {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #fff;\n  font-size: 30px;\n  padding: 0 15px 10px; }\n.regisLeft p {\n  text-transform: uppercase;\n  font-weight: 600;\n  color: #fff;\n  font-size: 15px;\n  padding: 0 15px 0; }\n.regisRigt {\n  margin: 70px 0 0 0;\n  padding: 0 30px 0 0; }\n.loginBox.registratinBox .loginInner .heading {\n  text-align: left; }\n.loginInner .loginForm .organization:before {\n  content: \"\\f1ad\";\n  font-family: \"FontAwesome\";\n  left: 12px;\n  position: absolute;\n  top: 8px;\n  color: #7fcaff; }\n.loginBox.registratinBox .loginInner .loginForm .intSec {\n  margin-bottom: 10px; }\n.loginBox.registratinBox .loginButt {\n  margin: 40px 0 20px; }\n@media (max-width: 530px) {\n  .loginBox .loginInner {\n    width: 100%; } }\n/*@media(max-width:360px) {\r\n    .login-section{ position:inherit;}\r\n}*/\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-cookie/core */ "./node_modules/angular2-cookie/core.js");
/* harmony import */ var angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, loginService, _cookieService, formBuilder) {
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this._cookieService = _cookieService;
        this.formBuilder = formBuilder;
        this.ui = { loading: false, text: 'Matching Info...' };
        this.organizationId = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            UserName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            PassWord: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    LoginComponent.prototype.onLoggedin = function (user) {
        var _this = this;
        this.ui = { loading: true, text: 'Matching Info...', css: 'text-success' };
        this.loginService.login(user).subscribe(function (response) {
            _this.user = response;
            _this.setLocalStorageValue();
            _this._cookieService.put('LM.JWT', response['Token'], { 'path': '/' });
            _this.router.navigate(['/dashboard']);
            _this._cookieService.put('currentUser', JSON.stringify(response), { 'path': '/' });
            _this.ui.loading = !_this.ui.loading;
        }, function (error) {
            _this.ui.text = error.error.Message;
            _this.ui.css = 'text-danger';
        });
    };
    LoginComponent.prototype.setLocalStorageValue = function () {
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimator');
        localStorage.setItem('roleName', this.user.RoleName);
        localStorage.setItem('userName', this.user.FirstName + " " + this.user.LastName + " (" + this.user.RoleName + ")");
        localStorage.setItem('isLoggedin', 'true');
        if (this.user.RoleName === 'Affiliate') {
            localStorage.setItem('userName', this.user.FirstName + " " + this.user.LastName + " (" + this.user.AffiliateName + ")");
        }
        if (this.user.RoleName === 'Client Admin' || this.user.RoleName == 'Client') {
            localStorage.setItem('userName', this.user.FirstName + " " + this.user.LastName + " (" + this.user.OrganizationName + ")");
        }
        if (this.user.UserId > 0)
            localStorage.setItem('userId', this.user.UserId.toString());
        if (this.user.OrganizationId > 0)
            localStorage.setItem('organizationId', this.user.OrganizationId);
        if (this.user.OrganizationName)
            localStorage.setItem('organizationName', this.user.OrganizationName);
        if (this.user.AffiliateId > 0)
            localStorage.setItem('affiliateId', this.user.AffiliateId);
        if (this.user.AffiliateName)
            localStorage.setItem('affiliateName', this.user.AffiliateName);
        if (this.user.ContactId > 0)
            localStorage.setItem('contactId', this.user.ContactId);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LogInService"],
            angular2_cookie_core__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map