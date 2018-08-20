(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-detail-clients-detail-module"],{

/***/ "./src/app/layout/clients-detail/clients-detail-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/clients-detail/clients-detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ClientsDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDetailRoutingModule", function() { return ClientsDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clients_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-detail.component */ "./src/app/layout/clients-detail/clients-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _clients_detail_component__WEBPACK_IMPORTED_MODULE_2__["ClientsDetailComponent"] },
];
var ClientsDetailRoutingModule = /** @class */ (function () {
    function ClientsDetailRoutingModule() {
    }
    ClientsDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientsDetailRoutingModule);
    return ClientsDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/clients-detail/clients-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/clients-detail/clients-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Client Detail</h2>\n<div *ngIf=\"clientId > 0 \">\n    <button  onclick=\"window.history.back();\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n    <div class=\"float-left\">\n        <button class=\"btn btn-primary btn-space\" (click)=\"goToAddresses()\" >Addresses</button>\n    </div>\n</div>\n<div class=\"clearfix\"></div>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\n\n    <h5> Basic detail</h5>\n    <hr>\n\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\"/>\n        <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"LastName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\"/>\n        <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div *ngIf=\"userId == 0 \"class=\"form-group\">\n        <label>User Name(email)</label>\n        <input type=\"text\" formControlName=\"UserName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.UserName.errors }\"  />\n\n        <div *ngIf=\"registerForm.get('UserName').hasError('isEmailUnique')\" class=\"error\">\n            <div>This email has been registered already</div>\n        </div>\n\n        <div *ngIf=\"submitted && f.UserName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UserName.errors.required\">Username is required</div>\n            <div *ngIf=\"f.UserName.errors?.email\">\n                Email not valid.\n            </div>\n        </div>\n        <input type=\"hidden\" formControlName=\"UserId\" class=\"form-control\"  />\n    </div>\n    <div class=\"form-group\" *ngIf=\"userId == 0 \">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"Password\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\"/>\n        <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.Password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n\n    <div class=\"form-group\">\n        <label> Confirm Password</label>\n        <input type=\"password\" formControlName=\"ConfirmPassword\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.ConfirmPassword.errors }\"/>\n        <div *ngIf=\"submitted && f.ConfirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ConfirmPassword.errors.required\">Confirm password is required</div>\n            <div *ngIf=\"f.ConfirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n        <span *ngIf=\"registerForm.get('ConfirmPassword').hasError('isConfirmPasswordMatch')\" class=\"error\">\n              Confirm password doesn't match\n            </span>\n    </div>\n  </div>\n\n    <h5> Phone</h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 1 </label>\n                <input type=\"text\"  class=\"form-control\" formControlName='Phone' [textMask]=\"{mask: phoneMask}\"  class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors }\"/>\n                <div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.Phone.errors.required\">phone 1 is required</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 2</label>\n                <input class=\"form-control\" formControlName='Phone2' [textMask]=\"{mask: phoneMask}\"  class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone2.errors }\"/>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/layout/clients-detail/clients-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/clients-detail/clients-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.error {\n  color: red; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/clients-detail/clients-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/clients-detail/clients-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDetailComponent", function() { return ClientsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_constant_app_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app-constant/app-constant */ "./src/app/app-constant/app-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClientsDetailComponent = /** @class */ (function () {
    function ClientsDetailComponent(formBuilder, router, alertService, httpTagsService, httpClientsService, httpUserService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.httpClientsService = httpClientsService;
        this.httpUserService = httpUserService;
        this.route = route;
        this.btnName = 'Register';
        this.loading = false;
        this.submitted = false;
        this.phoneMask = _app_constant_app_constant__WEBPACK_IMPORTED_MODULE_7__["AppConstant"].phoneMask;
    }
    ClientsDetailComponent.prototype.ngOnInit = function () {
        this.userId = Number(localStorage.getItem('userId'));
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.buildForm();
        if (this.userId > 0) {
            this.btnName = 'Update';
            this.getUserDetail(this.userId);
        }
        this.getRoleList();
    };
    ClientsDetailComponent.prototype.buildForm = function () {
        if (this.userId > 0) {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
                LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)],
            });
        }
        else {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
                LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
                UserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(75)], this.isEmailUnique.bind(this)],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)],
                ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)], this.pwdMatchValidator.bind(this)],
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            });
        }
    };
    Object.defineProperty(ClientsDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClientsDetailComponent.prototype.onSubmit = function (clientDetail) {
        var _this = this;
        this.submitted = true;
        this.getFormValidationErrors(this.registerForm);
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            clientDetail.OrganizationId = this.organizationId;
            this.httpClientsService.create(clientDetail)
                .subscribe(function (data) {
                _this.router.navigate(['./manage-clients']);
                if (_this.userId > 0)
                    _this.alertService.success(_this.userId > 0 ? 'Client updated successfully' : 'Client registered successfully', true);
                _this.loading = false;
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    ClientsDetailComponent.prototype.getFormValidationErrors = function (fg) {
        Object.keys(fg.controls).forEach(function (key) {
            var controlErrors = fg.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }
        });
    };
    ClientsDetailComponent.prototype.getUserDetail = function (userId) {
        var _this = this;
        this.httpClientsService.getClientDetailByUserId(userId, true)
            .subscribe(function (userData) {
            _this.contactId = userData.ContactId;
            _this.registerForm.patchValue({
                UserId: userData.UserId,
                FirstName: userData.FirstName,
                LastName: userData.LastName,
                UserName: userData.UserName,
                Phone: userData.Phone,
                Phone2: userData.Phone2,
            });
        });
    };
    ClientsDetailComponent.prototype.getRoleList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('Customer Role', true)
            .subscribe(function (roles) {
            _this.rolesModel = roles;
        });
    };
    ClientsDetailComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            if (_this.userId == 0) {
                setTimeout(function () {
                    _this.httpUserService.isEmailRegisterd(control.value).subscribe(function (data) {
                        if (data == null) {
                            resolve(null);
                        }
                        else {
                            resolve({ 'isEmailUnique': true });
                        }
                    }, function () {
                        resolve({ 'isEmailUnique': false });
                    });
                }, 1000);
            }
        });
        return q;
    };
    ClientsDetailComponent.prototype.pwdMatchValidator = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            _this.registerForm.get('Password').value === control.value
                ? resolve(null) : resolve({ 'isConfirmPasswordMatch': true });
        });
        return q;
    };
    ClientsDetailComponent.prototype.goToAddresses = function () {
        localStorage.setItem('contactId', this.contactId.toString());
        this.router.navigate(['manage-addresses'], { queryParams: { id: this.contactId } });
    };
    ClientsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'clients-detail',
            template: __webpack_require__(/*! ./clients-detail.component.html */ "./src/app/layout/clients-detail/clients-detail.component.html"),
            styles: [__webpack_require__(/*! ./clients-detail.component.scss */ "./src/app/layout/clients-detail/clients-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClientsDetailComponent);
    return ClientsDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/clients-detail/clients-detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/clients-detail/clients-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: ClientsDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDetailModule", function() { return ClientsDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _clients_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients-detail.component */ "./src/app/layout/clients-detail/clients-detail.component.ts");
/* harmony import */ var _clients_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients-detail-routing.module */ "./src/app/layout/clients-detail/clients-detail-routing.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ClientsDetailModule = /** @class */ (function () {
    function ClientsDetailModule() {
    }
    ClientsDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _clients_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["ClientsDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"]
            ],
            declarations: [_clients_detail_component__WEBPACK_IMPORTED_MODULE_6__["ClientsDetailComponent"]
            ]
        })
    ], ClientsDetailModule);
    return ClientsDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=clients-detail-clients-detail-module.js.map