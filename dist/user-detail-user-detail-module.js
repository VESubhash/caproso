(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-detail-user-detail-module"],{

/***/ "./src/app/layout/Shared/address/address.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layout/Shared/address/address.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5> Billing Address</h5>\r\n<hr>\r\n\r\n<ng-container [formGroup]=\"group.control.get(groupName)\">\r\n    <div class=\"row\" >\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Address 1</label>\r\n                <input class=\"form-control\" formControlName='Address1' class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && group.control.get(groupName+'.Address1').errors }\"/>\r\n\r\n                <div *ngIf=\"group.control.get(groupName+'.Address1').errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"group.control.get(groupName+'.Address1').hasError('required')\">Address 1 is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Address 2</label>\r\n                <input class=\"form-control\" formControlName='Address2' class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid':  submitted && group.control.get(groupName+'.Address2').errors }\"/>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Country</label>\r\n                <select class=\"form-control\" formControlName='CountryId' class=\"form-control\" [attr.disabled]=\"true\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && group.control.get(groupName+'.CountryId').errors  }\">\r\n                    <option value=\"\">Please select</option>\r\n                    <option *ngFor=\"let country of countriesModel\" [value]=\"country.LTagId\"\r\n                            [attr.selected]=\"country.TagDescr === 'United States' ? true : null\">{{country.TagDescr}}\r\n                    </option>\r\n\r\n                </select>\r\n                <div *ngIf=\"submitted && group.control.get(groupName+'.CountryId').errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"group.control.get(groupName+'.CountryId').hasError('required')\">Country is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> State</label>\r\n                <select class=\"form-control\" formControlName='StateId' class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && group.control.get(groupName+'.StateId').errors  }\">\r\n                    <option value=\"\">Please select</option>\r\n                    <option *ngFor=\"let state of statesModel\" [ngValue]=\"state.LTagId\">{{state.TagDescr}}</option>\r\n                </select>\r\n                <div *ngIf=\"submitted && group.control.get(groupName+'.StateId').errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"group.control.get(groupName+'.StateId').hasError('required')\">State is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> City</label>\r\n                <input class=\"form-control\" formControlName='City' class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && group.control.get(groupName+'.City').errors }\"/>\r\n\r\n                <div *ngIf=\"submitted && group.control.get(groupName+'.City').errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"group.control.get(groupName+'.City').hasError('required')\">City is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n                <label> Postal code</label>\r\n                <input class=\"form-control\" formControlName='PostalCode' class=\"form-control\"\r\n                       [ngClass]=\"{ 'is-invalid': submitted && group.control.get(groupName+'.PostalCode').errors }\"/>\r\n\r\n                <div *ngIf=\"submitted && group.control.get(groupName+'.PostalCode').errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"group.control.get(groupName+'.PostalCode').hasError('required')\">Postal code is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/Shared/address/address.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layout/Shared/address/address.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/layout/Shared/address/address.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/Shared/address/address.component.ts ***!
  \************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddressComponent = /** @class */ (function () {
    function AddressComponent(group, httpTagsService) {
        this.group = group;
        this.httpTagsService = httpTagsService;
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.getCountryList();
        this.getStateList();
    };
    AddressComponent.prototype.getCountryList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('Countries', true)
            .subscribe(function (countries) {
            _this.countriesModel = countries;
        });
    };
    AddressComponent.prototype.getStateList = function () {
        var _this = this;
        this.httpTagsService.getTagsByTypeAndParentId('States', 1, true)
            .subscribe(function (states) {
            _this.statesModel = states;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddressComponent.prototype, "groupName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddressComponent.prototype, "submitted", void 0);
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cip-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/layout/Shared/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/layout/Shared/address/address.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-detail/user-detail-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/user-detail/user-detail-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailRoutingModule", function() { return UserDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-detail.component */ "./src/app/layout/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    // {
    //     path: '', component: UserDetailComponent,
    //     path: 'user-detail/:id', component: UserDetailComponent
    // }
    { path: '', component: _user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"] },
    { path: 'user-detail', component: _user_detail_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailComponent"] }
];
var UserDetailRoutingModule = /** @class */ (function () {
    function UserDetailRoutingModule() {
    }
    UserDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserDetailRoutingModule);
    return UserDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-detail/user-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/user-detail/user-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>User Registration</h2>\n<br/>\n<!--<div *ngIf=\"userId > 0 \">-->\n<!--<button class=\"btn btn-primary float-right\" (click)=\"goToAddresses()\" >Addresses</button>-->\n<!--</div>-->\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm.value)\">\n\n    <h5> Basic detail</h5>\n    <hr>\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\"/>\n        <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"LastName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\"/>\n        <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"userId == 0 \">\n        <label>User Name(email)</label>\n        <input type=\"text\" formControlName=\"UserName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.UserName.errors }\"  />\n\n        <div *ngIf=\"registerForm.get('UserName').hasError('isEmailUnique')\" class=\"error\">\n            <div>This email has been registered already</div>\n        </div>\n\n        <div *ngIf=\"submitted && f.UserName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UserName.errors.required\">Username is required</div>\n            <div *ngIf=\"f.UserName.errors?.email\">\n                Email not valid.\n            </div>\n        </div>\n        <input type=\"hidden\" formControlName=\"UserId\" class=\"form-control\"  />\n\n\n\n    </div>\n    <div *ngIf=\"userId == 0 \">\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"Password\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\"/>\n        <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.Password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label> Confirm Password</label>\n        <input type=\"password\" formControlName=\"ConfirmPassword\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.ConfirmPassword.errors }\"/>\n        <div *ngIf=\"submitted && f.ConfirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ConfirmPassword.errors.required\">Confirm password is required</div>\n            <div *ngIf=\"f.ConfirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n        <span *ngIf=\"registerForm.get('ConfirmPassword').hasError('isConfirmPasswordMatch')\" class=\"error\">\n              Confirm password doesn't match\n            </span>\n\n    </div>\n    </div>\n    <h5> Role detail</h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label> User Role</label>\n                <select class=\"form-control\" formControlName='UserRoleId'  class=\"form-control\" #UserRoleId\n                        (change)=\"onRoleChange(registerForm.value.UserRoleId)\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.UserRoleId.errors }\">\n                    <option value=\"\">Please select</option>\n                    <option *ngFor=\"let role of rolesModel\" [ngValue]=\"role.LTagId\">{{role.TagDescr}}</option>\n                </select>\n                <div *ngIf=\"submitted && f.UserRoleId.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.UserRoleId.errors.required\">Role is required</div>\n                </div>\n            </div>\n        </div>\n        <!--<div class=\"col-md-6\">-->\n            <!--<div class=\"form-group\">-->\n                <!--<label> User Group</label>-->\n                <!--<select class=\"form-control\" formControlName='UserGroupId' class=\"form-control\"-->\n                        <!--[ngClass]=\"{ 'is-invalid': submitted && f.UserGroupId.errors }\">-->\n                    <!--<option value=\"\"> Please select</option>-->\n                    <!--<option *ngFor=\"let group of userGroupsModel\" [ngValue]=\"group.LTagId\">{{group.TagDescr}}</option>-->\n\n                <!--</select>-->\n                <!--<div *ngIf=\"submitted && f.UserGroupId.errors\" class=\"invalid-feedback\">-->\n                    <!--<div *ngIf=\"f.UserGroupId.errors.required\">Group is required</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    </div>\n    <!--<div *ngIf=\"showOrganization\">-->\n        <!--<h5> Organization Info</h5>-->\n        <!--<hr>-->\n        <!--<div class=\"row\">-->\n            <!--<div class=\"col-md-12\">-->\n                <!--<div class=\"form-group\">-->\n                    <!--<label> Organization name </label>-->\n                    <!--<input type=\"text\" class=\"form-control\" formControlName='OrganizationName' class=\"form-control\"-->\n                           <!--[ngClass]=\"{ 'is-invalid':  submitted && f.OrganizationName.errors }\"/>-->\n                    <!--<div *ngIf=\"submitted && f.OrganizationName.errors\" class=\"invalid-feedback\">-->\n                        <!--<div *ngIf=\"f.OrganizationName.errors.required\">Organization is required</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n\n        <!--</div>-->\n    <!--</div>-->\n\n    <h5> Phone</h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 1 </label>\n                <input type=\"text\"  class=\"form-control\" [textMask]=\"{mask: phoneMask}\" formControlName='Phone' class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors }\"/>\n                <div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.Phone.errors.required\">phone 1 is required</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 2</label>\n                <input class=\"form-control\" formControlName='Phone2' [textMask]=\"{mask: phoneMask}\" class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone2.errors }\"/>\n                <div *ngIf=\"submitted && f.Phone2.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.Phone2.errors?.minlength\">Invalid Phone</div>\n                </div>\n            </div>\n        </div>\n    </div>\n<!--<cip-address groupName=\"Addresses\" [submitted]=\"submitted\"></cip-address>-->\n\n\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/layout/user-detail/user-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/user-detail/user-detail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/layout/user-detail/user-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/user-detail/user-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_constant_app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-constant/app-constant */ "./src/app/app-constant/app-constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(formBuilder, router, alertService, httpTagsService, userService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.userService = userService;
        this.route = route;
        this.btnName = 'Register';
        this.showOrganization = false;
        this.loading = false;
        this.submitted = false;
        this.phoneMask = _app_constant_app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstant"].phoneMask;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.userId = params['id'] || 0;
        });
        this.buildForm();
        if (this.userId > 0) {
            this.btnName = 'Update';
            this.getUserDetail(this.userId);
        }
        else {
        }
        this.getRoleList();
        // this.getUserGroupList();
        // this.registerForm.get('UserRoleId').valueChanges
        //     .subscribe(value => this.setNotification(value));
    };
    UserDetailComponent.prototype.buildForm = function () {
        if (this.userId > 0) {
            this.registerForm = this.formBuilder.group({
                UserId: [0],
                FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
                LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
                UserRoleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
                UserRoleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)],
                ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)], this.pwdMatchValidator.bind(this)],
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            });
        }
    };
    Object.defineProperty(UserDetailComponent.prototype, "f", {
        // setNotification(notifyVia): void {
        //
        //     const organizationNameControl = this.registerForm.get('OrganizationName');
        //     if (notifyVia === 56341) {
        //         organizationNameControl.setValidators(Validators.required);
        //     } else {
        //         organizationNameControl.clearValidators();
        //     }
        //     organizationNameControl.updateValueAndValidity();
        // }
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    UserDetailComponent.prototype.onSubmit = function (userDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        // var preImplementationGroup = <FormGroup>this.registerForm.get('Addresses');
        // this.getFormValidationErrors(preImplementationGroup);
        if (this.registerForm.invalid) {
            return;
        }
        if (this.userId > 0) {
        }
        this.loading = true;
        this.userService.create(userDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-users']);
            if (_this.userId > 0)
                _this.alertService.success(_this.userId > 0 ? 'User updated successfully' : 'User registered successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    UserDetailComponent.prototype.getUserDetail = function (userId) {
        var _this = this;
        this.userService.getUserDetailByUserId(userId, true)
            .subscribe(function (userData) {
            _this.contactId = userData.ContactId;
            _this.registerForm.patchValue({
                UserId: userData.UserId,
                FirstName: userData.FirstName,
                LastName: userData.LastName,
                UserName: userData.UserName,
                UserRoleId: userData.UserRoleId,
                Phone: userData.Phone,
                Phone2: userData.Phone2,
            });
        });
    };
    UserDetailComponent.prototype.getRoleList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('Admin Role', true)
            .subscribe(function (roles) {
            _this.rolesModel = roles;
        });
    };
    UserDetailComponent.prototype.getUserGroupList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('User Group', true)
            .subscribe(function (userGrpup) {
            _this.userGroupsModel = userGrpup;
        });
    };
    // getFormValidationErrors(fg: FormGroup) {
    //     Object.keys(fg.controls).forEach(key => {
    //
    //         const controlErrors: ValidationErrors = fg.get(key).errors;
    //         if (controlErrors != null) {
    //             Object.keys(controlErrors).forEach(keyError => {
    //                 console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
    //             });
    //         }
    //     });
    // }
    UserDetailComponent.prototype.onRoleChange = function (newRoleId) {
        if (newRoleId === 56341) {
            this.showOrganization = true;
        }
        else {
            this.showOrganization = false;
        }
    };
    UserDetailComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            if (_this.userId == 0) {
                setTimeout(function () {
                    _this.userService.isEmailRegisterd(control.value).subscribe(function (data) {
                        if (data == null) {
                            resolve(null);
                            // this.emailFound = (data == null? false: true);
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
    UserDetailComponent.prototype.pwdMatchValidator = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            _this.registerForm.get('Password').value === control.value
                ? resolve(null) : resolve({ 'isConfirmPasswordMatch': true });
        });
        return q;
    };
    UserDetailComponent.prototype.goToAddresses = function () {
        localStorage.setItem('contactId', this.contactId.toString());
        this.router.navigate(['manage-addresses'], { queryParams: { id: this.contactId } });
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/layout/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/layout/user-detail/user-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-detail/user-detail.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/user-detail/user-detail.module.ts ***!
  \**********************************************************/
/*! exports provided: UserDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailModule", function() { return UserDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-detail.component */ "./src/app/layout/user-detail/user-detail.component.ts");
/* harmony import */ var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-detail-routing.module */ "./src/app/layout/user-detail/user-detail-routing.module.ts");
/* harmony import */ var _Shared_address_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Shared/address/address.component */ "./src/app/layout/Shared/address/address.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserDetailModule = /** @class */ (function () {
    function UserDetailModule() {
    }
    UserDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["UserDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_9__["TextMaskModule"]
            ],
            declarations: [_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"], _Shared_address_address_component__WEBPACK_IMPORTED_MODULE_8__["AddressComponent"]
            ]
        })
    ], UserDetailModule);
    return UserDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-detail-user-detail-module.js.map