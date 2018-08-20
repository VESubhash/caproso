(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-detail-address-detail-module"],{

/***/ "./src/app/layout/address-detail/address-detail-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/address-detail/address-detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AddressDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailRoutingModule", function() { return AddressDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _address_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-detail.component */ "./src/app/layout/address-detail/address-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _address_detail_component__WEBPACK_IMPORTED_MODULE_2__["AddressDetailComponent"]
    }
];
var AddressDetailRoutingModule = /** @class */ (function () {
    function AddressDetailRoutingModule() {
    }
    AddressDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AddressDetailRoutingModule);
    return AddressDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/address-detail/address-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/address-detail/address-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>User Address</h2>\n<br/>\n<hr>\n<button  onclick=\"window.history.back();\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n<form [formGroup]=\"addressForm\" (ngSubmit)=\"onSubmit(addressForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Address 1</label>\n            <input class=\"form-control\" formControlName='Address1' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.Address1.errors }\"/>\n\n            <div *ngIf=\"submitted && f.Address1.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Address1.errors.required\">Address 1 is required</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Address 2</label>\n            <input class=\"form-control\" formControlName='Address2' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.Address2.errors }\"/>\n\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Country</label>\n            <select class=\"form-control\" formControlName='CountryId' class=\"form-control\" [attr.disabled]=\"true\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.CountryId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let country of countriesModel\" [value]=\"country.LTagId\"\n                        [attr.selected]=\"country.TagDescr === 'United States' ? true : null\">{{country.TagDescr}}\n                </option>\n\n            </select>\n            <div *ngIf=\"submitted && f.CountryId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.CountryId.errors.required\">Country is required</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> State</label>\n            <select class=\"form-control\" formControlName='StateId' class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.StateId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let state of statesModel\" [ngValue]=\"state.LTagId\">{{state.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.StateId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.StateId.errors.required\">State is required</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> City</label>\n            <input class=\"form-control\" formControlName='City' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.City.errors }\"/>\n\n            <div *ngIf=\"submitted && f.City.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.City.errors.required\">City is required</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Postal code</label>\n            <input class=\"form-control\" formControlName='PostalCode' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.PostalCode.errors }\"/>\n\n            <div *ngIf=\"submitted && f.PostalCode.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.PostalCode.errors.required\">Postal code is required</div>\n            </div>\n        </div>\n    </div>\n</div>\n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"form-control\" formControlName='ContactId' class=\"form-control\" />\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/address-detail/address-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/address-detail/address-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/address-detail/address-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/address-detail/address-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddressDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailComponent", function() { return AddressDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_addresses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/addresses.service */ "./src/app/services/addresses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressDetailComponent = /** @class */ (function () {
    function AddressDetailComponent(formBuilder, router, alertService, httpTagsService, addressService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.addressService = addressService;
        this.route = route;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
    }
    AddressDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.addressId = Number(localStorage.getItem('addressId'));
        if (this.addressId > 0) {
            this.btnName = 'Update';
            this.getAddressDetail(this.addressId);
        }
        this.getCountryList();
        this.getStateList();
    };
    AddressDetailComponent.prototype.buildForm = function () {
        this.addressForm = this.formBuilder.group({
            ContactId: [],
            AddressId: [],
            Address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)],
            CountryId: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            StateId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(AddressDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.addressForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddressDetailComponent.prototype.onSubmit = function (addressDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.addressForm.invalid) {
            return;
        }
        addressDetail.ContactId = localStorage.getItem('contactId');
        addressDetail.AddressId = localStorage.getItem('addressId');
        this.loading = true;
        this.addressService.create(addressDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-addresses']);
            _this.alertService.success(_this.addressId > 0 ? 'Address updated successfully' : 'Address save successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    AddressDetailComponent.prototype.getCountryList = function () {
        var _this = this;
        this.httpTagsService.getTagsByType('Countries', true)
            .subscribe(function (countries) {
            _this.countriesModel = countries;
        });
    };
    AddressDetailComponent.prototype.getStateList = function () {
        var _this = this;
        this.httpTagsService.getTagsByTypeAndParentId('States', 1, true)
            .subscribe(function (states) {
            _this.statesModel = states;
        });
    };
    AddressDetailComponent.prototype.getAddressDetail = function (addressId) {
        var _this = this;
        this.addressService.getAddressByAddressId(addressId, true)
            .subscribe(function (userData) {
            _this.addressForm.patchValue({
                AddressId: userData.AddressId,
                Address1: userData.Address1,
                Address2: userData.Address2,
                CountryId: userData.CountryId,
                StateId: userData.StateId,
                City: userData.City,
                PostalCode: userData.PostalCode,
            });
        });
    };
    AddressDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'address-detail',
            template: __webpack_require__(/*! ./address-detail.component.html */ "./src/app/layout/address-detail/address-detail.component.html"),
            styles: [__webpack_require__(/*! ./address-detail.component.scss */ "./src/app/layout/address-detail/address-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_addresses_service__WEBPACK_IMPORTED_MODULE_5__["AddressesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddressDetailComponent);
    return AddressDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/address-detail/address-detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/address-detail/address-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: AddressDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDetailModule", function() { return AddressDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _address_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-detail-routing.module */ "./src/app/layout/address-detail/address-detail-routing.module.ts");
/* harmony import */ var _address_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-detail.component */ "./src/app/layout/address-detail/address-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AddressDetailModule = /** @class */ (function () {
    function AddressDetailModule() {
    }
    AddressDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _address_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_address_detail_component__WEBPACK_IMPORTED_MODULE_6__["AddressDetailComponent"]]
        })
    ], AddressDetailModule);
    return AddressDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=address-detail-address-detail-module.js.map