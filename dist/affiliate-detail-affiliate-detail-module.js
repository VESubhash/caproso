(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["affiliate-detail-affiliate-detail-module"],{

/***/ "./src/app/layout/affiliate-detail/affiliate-detail-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/affiliate-detail/affiliate-detail-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AffiliateDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliateDetailRoutingModule", function() { return AffiliateDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _affiliate_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affiliate-detail.component */ "./src/app/layout/affiliate-detail/affiliate-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _affiliate_detail_component__WEBPACK_IMPORTED_MODULE_2__["AffiliateDetailComponent"] },
];
var AffiliateDetailRoutingModule = /** @class */ (function () {
    function AffiliateDetailRoutingModule() {
    }
    AffiliateDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AffiliateDetailRoutingModule);
    return AffiliateDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/affiliate-detail/affiliate-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/affiliate-detail/affiliate-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Affiliate Detail</h2>\n<div *ngIf=\"affiliateId > 0 \">\n    <button  onclick=\"window.history.back();\" (click)=\"goToManageAffiliates()\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n    <div class=\"float-left\">\n        <button class=\"btn btn-primary btn-space\" (click)=\"goToOrganization()\" >Clients</button>\n\n    </div>\n</div>\n\n<div class=\"clearfix\"></div>\n<form [formGroup]=\"affiliateForm\" (ngSubmit)=\"onSubmit(affiliateForm.value)\">\n\n    <h5> Basic detail</h5>\n    <hr>\n    <div class=\"form-group\">\n        <label>Affiliates Name</label>\n        <input type=\"text\" formControlName=\"AffiliateName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.AffiliateName.errors }\"/>\n        <div *ngIf=\"submitted && f.AffiliateName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.AffiliateName.errors.required\">Affiliate name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>First Name</label>\n        <input type=\"text\" formControlName=\"FirstName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.FirstName.errors }\"/>\n        <div *ngIf=\"submitted && f.FirstName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.FirstName.errors.required\">First Name is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" formControlName=\"LastName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.LastName.errors }\"/>\n        <div *ngIf=\"submitted && f.LastName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.LastName.errors.required\">Last Name is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"affiliateId == 0 \">\n        <label>User Name(email)</label>\n        <input type=\"text\" formControlName=\"UserName\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.UserName.errors }\"  />\n\n        <div *ngIf=\"affiliateForm.get('UserName').hasError('isEmailUnique')\" class=\"error\">\n            <div>This email has been registered already</div>\n        </div>\n\n        <div *ngIf=\"submitted && f.UserName.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.UserName.errors.required\">Username is required</div>\n            <div *ngIf=\"f.UserName.errors?.email\">\n                Email not valid.\n            </div>\n        </div>\n        <input type=\"hidden\" formControlName=\"UserId\" class=\"form-control\"  />\n        <input type=\"hidden\" formControlName=\"AffiliateId\" class=\"form-control\">\n    </div>\n    <div *ngIf=\"affiliateId == 0 \">\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" formControlName=\"Password\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.Password.errors }\"/>\n        <div *ngIf=\"submitted && f.Password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.Password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.Password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label> Confirm Password</label>\n        <input type=\"password\" formControlName=\"ConfirmPassword\" class=\"form-control\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.ConfirmPassword.errors }\"/>\n        <div *ngIf=\"submitted && f.ConfirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.ConfirmPassword.errors.required\">Confirm password is required</div>\n            <div *ngIf=\"f.ConfirmPassword.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n        <span *ngIf=\"affiliateForm.get('ConfirmPassword').hasError('isConfirmPasswordMatch')\" class=\"error\">\n              Confirm password doesn't match\n            </span>\n\n    </div>\n    </div>\n    <h5> Phone</h5>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 1 </label>\n                <input type=\"text\"  class=\"form-control\" formControlName='Phone' class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors }\"/>\n                <div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.Phone.errors.required\">phone 1 is required</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"form-group\">\n                <label> Phone 2</label>\n                <input class=\"form-control\" formControlName='Phone2' class=\"form-control\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.Phone2.errors }\"/>\n                <div *ngIf=\"submitted && f.Phone2.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.Phone2.errors?.minlength\">Invalid Phone, Phone must be minimum 12 character long. example- 111-111-1111 </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a  (click)=\"goToManageAffiliates()\"  class=\"btn btn-link\">Cancel</a>\n    </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/layout/affiliate-detail/affiliate-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/affiliate-detail/affiliate-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.error {\n  color: red; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/affiliate-detail/affiliate-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/affiliate-detail/affiliate-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: AffiliateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliateDetailComponent", function() { return AffiliateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_affiliates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/affiliates.service */ "./src/app/services/affiliates.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AffiliateDetailComponent = /** @class */ (function () {
    function AffiliateDetailComponent(formBuilder, router, alertService, httpTagsService, affiliateService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.affiliateService = affiliateService;
        this.route = route;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
        this.affiliateId = 0;
    }
    AffiliateDetailComponent.prototype.ngOnInit = function () {
        this.affiliateId = Number(localStorage.getItem('affiliateId'));
        this.buildForm();
        if (this.affiliateId > 0) {
            this.btnName = 'Update';
            this.getAffiliateDetail(this.affiliateId);
        }
        else {
        }
        this.getRoleList();
    };
    AffiliateDetailComponent.prototype.buildForm = function () {
        if (this.affiliateId > 0) {
            this.affiliateForm = this.formBuilder.group({
                UserId: [0],
                AffiliateId: [0],
                FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
                LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
                //    UserName: ['', [Validators.required, Validators.email, Validators.maxLength(75)], this.isEmailUnique.bind(this)],
                AffiliateName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)],
            });
        }
        else {
            this.affiliateForm = this.formBuilder.group({
                UserId: [0],
                AffiliateId: [0],
                FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
                LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(80)]],
                UserName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(75)], this.isEmailUnique.bind(this)],
                AffiliateName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)],
                ConfirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)], this.pwdMatchValidator.bind(this)],
                Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            });
        }
    };
    Object.defineProperty(AffiliateDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.affiliateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AffiliateDetailComponent.prototype.onSubmit = function (detail) {
        var _this = this;
        this.submitted = true;
        this.getFormValidationErrors(this.affiliateForm);
        if (this.affiliateForm.invalid) {
            return;
        }
        else {
            this.loading = true;
            this.affiliateService.create(detail)
                .subscribe(function (data) {
                var roleName = localStorage.getItem('roleName');
                _this.alertService.success(_this.affiliateId > 0 ? 'affiliate updated successfully' : 'affiliates registered successfully', true);
                if (roleName == 'Admin') {
                    _this.router.navigate(['./manage-affiliates']);
                }
                else {
                    _this.router.navigate(['./affiliate-detail']);
                }
                _this.loading = false;
            }, function (error) {
                _this.alertService.error(error);
                _this.loading = false;
            });
        }
    };
    AffiliateDetailComponent.prototype.getFormValidationErrors = function (fg) {
        Object.keys(fg.controls).forEach(function (key) {
            var controlErrors = fg.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(function (keyError) {
                    console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
                });
            }
        });
    };
    AffiliateDetailComponent.prototype.getAffiliateDetail = function (userId) {
        var _this = this;
        this.affiliateService.getAffiliateDetailByUserId(userId, true)
            .subscribe(function (userData) {
            _this.contactId = userData.ContactId;
            _this.affiliateForm.patchValue({
                UserId: userData.UserId,
                AffiliateId: userData.AffiliateId,
                AffiliateName: userData.AffiliateName,
                FirstName: userData.FirstName,
                LastName: userData.LastName,
                UserName: userData.UserName,
                UserRoleId: userData.UserRoleId,
                Phone: userData.Phone,
                Phone2: userData.Phone2,
            });
        });
    };
    AffiliateDetailComponent.prototype.getRoleList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('Customer Role', true)
            .subscribe(function (roles) {
            _this.rolesModel = roles;
        });
    };
    AffiliateDetailComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            if (_this.affiliateId == 0) {
                setTimeout(function () {
                    _this.affiliateService.isEmailRegisterd(control.value).subscribe(function (data) {
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
    AffiliateDetailComponent.prototype.pwdMatchValidator = function (control) {
        var _this = this;
        var q = new Promise(function (resolve) {
            _this.affiliateForm.get('Password').value === control.value
                ? resolve(null) : resolve({ 'isConfirmPasswordMatch': true });
        });
        return q;
    };
    AffiliateDetailComponent.prototype.goToOrganization = function (affiliateId) {
        this.router.navigate(['manage-organizations']);
    };
    AffiliateDetailComponent.prototype.goToManageAffiliates = function () {
        localStorage.removeItem('organizationId');
        this.router.navigate(['manage-affiliates']);
    };
    AffiliateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'affiliate-detail',
            template: __webpack_require__(/*! ./affiliate-detail.component.html */ "./src/app/layout/affiliate-detail/affiliate-detail.component.html"),
            styles: [__webpack_require__(/*! ./affiliate-detail.component.scss */ "./src/app/layout/affiliate-detail/affiliate-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_affiliates_service__WEBPACK_IMPORTED_MODULE_5__["AffiliatesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AffiliateDetailComponent);
    return AffiliateDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/affiliate-detail/affiliate-detail.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/affiliate-detail/affiliate-detail.module.ts ***!
  \********************************************************************/
/*! exports provided: AffiliateDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliateDetailModule", function() { return AffiliateDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _affiliate_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./affiliate-detail.component */ "./src/app/layout/affiliate-detail/affiliate-detail.component.ts");
/* harmony import */ var _affiliate_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./affiliate-detail-routing.module */ "./src/app/layout/affiliate-detail/affiliate-detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AffiliateDetailModule = /** @class */ (function () {
    function AffiliateDetailModule() {
    }
    AffiliateDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _affiliate_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["AffiliateDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_affiliate_detail_component__WEBPACK_IMPORTED_MODULE_6__["AffiliateDetailComponent"]
            ]
        })
    ], AffiliateDetailModule);
    return AffiliateDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=affiliate-detail-affiliate-detail-module.js.map