(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subcategory-detail-subcategory-detail-module"],{

/***/ "./src/app/layout/subcategory-detail/subcategory-detail-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/subcategory-detail/subcategory-detail-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SubcategoryDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryDetailRoutingModule", function() { return SubcategoryDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subcategory_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subcategory-detail.component */ "./src/app/layout/subcategory-detail/subcategory-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _subcategory_detail_component__WEBPACK_IMPORTED_MODULE_2__["SubcategoryDetailComponent"]
    }
];
var SubcategoryDetailRoutingModule = /** @class */ (function () {
    function SubcategoryDetailRoutingModule() {
    }
    SubcategoryDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SubcategoryDetailRoutingModule);
    return SubcategoryDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/subcategory-detail/subcategory-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/subcategory-detail/subcategory-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Organization Sub Category</h2>\n\n<hr>\n\n<form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit(groupForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Category</label>\n            <select class=\"form-control\" formControlName='ParentTagId' class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.ParentTagId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let category of categoryModel\" [ngValue]=\"category.LTagId\">{{category.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.ParentTagId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.ParentTagId.errors.required\">Category is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Sub Category name</label>\n            <input class=\"form-control\" formControlName='TagDescr' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.TagDescr.errors }\"/>\n\n            <div *ngIf=\"submitted && f.TagDescr.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.TagDescr.errors.required\">Sub Category is required</div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"form-control\" formControlName='OrganizationId' class=\"form-control\" />\n        <input type=\"hidden\" class=\"form-control\" formControlName='LTagsId' class=\"form-control\" />\n        <input type=\"hidden\" class=\"form-control\" formControlName='LTagType' class=\"form-control\" />\n\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/subcategory-detail/subcategory-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/subcategory-detail/subcategory-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/subcategory-detail/subcategory-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/subcategory-detail/subcategory-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubcategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryDetailComponent", function() { return SubcategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubcategoryDetailComponent = /** @class */ (function () {
    function SubcategoryDetailComponent(formBuilder, router, alertService, httpTagsService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.route = route;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
    }
    SubcategoryDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.lTagsId = 0;
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagsId = Number(localStorage.getItem('lTagId'));
        this.getCategoryList();
        if (this.lTagsId > 0) {
            this.btnName = 'Update';
            this.getTagDetail(this.lTagsId);
        }
    };
    SubcategoryDetailComponent.prototype.buildForm = function () {
        this.groupForm = this.formBuilder.group({
            OrganizationId: [this.organizationId],
            LTagsId: [this.lTagsId],
            ParentTagId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            TagDescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LTagType: ['Sub Category']
        });
        // let parentTagId= localStorage.getItem('parentTagId');
        //    this.groupForm.patchValue({
        //        ParentTagId: parentTagId,
        //    });
    };
    Object.defineProperty(SubcategoryDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.groupForm.controls; },
        enumerable: true,
        configurable: true
    });
    SubcategoryDetailComponent.prototype.onSubmit = function (tagDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.groupForm.invalid) {
            return;
        }
        tagDetail.OrganizationId = Number(localStorage.getItem('organizationId'));
        tagDetail.LTagId = localStorage.getItem('lTagId');
        this.loading = true;
        this.httpTagsService.create(tagDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-subcategories']);
            _this.alertService.success(_this.lTagsId > 0 ? 'Category updated successfully' : 'Category save successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    SubcategoryDetailComponent.prototype.getTagDetail = function (ltagId) {
        var _this = this;
        this.httpTagsService.getTagDetailByTagId(ltagId, true)
            .subscribe(function (data) {
            _this.groupForm.patchValue({
                LTagId: data.LTagId,
                OrganizationId: data.OrganizationId,
                TagDescr: data.TagDescr,
                ParentTagId: data.ParentTagId,
            });
        });
    };
    SubcategoryDetailComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', this.organizationId, true)
            .subscribe(function (categories) {
            _this.categoryModel = categories;
        });
    };
    SubcategoryDetailComponent.prototype.goToManageSubCategories = function () {
        this.router.navigate(['manage-subcategories']);
    };
    SubcategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'subcategory-detail',
            template: __webpack_require__(/*! ./subcategory-detail.component.html */ "./src/app/layout/subcategory-detail/subcategory-detail.component.html"),
            styles: [__webpack_require__(/*! ./subcategory-detail.component.scss */ "./src/app/layout/subcategory-detail/subcategory-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubcategoryDetailComponent);
    return SubcategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/subcategory-detail/subcategory-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/subcategory-detail/subcategory-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: SubcategoryDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryDetailModule", function() { return SubcategoryDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _subcategory_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subcategory-detail.component */ "./src/app/layout/subcategory-detail/subcategory-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subcategory_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subcategory-detail-routing.module */ "./src/app/layout/subcategory-detail/subcategory-detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SubcategoryDetailModule = /** @class */ (function () {
    function SubcategoryDetailModule() {
    }
    SubcategoryDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _subcategory_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["SubcategoryDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_subcategory_detail_component__WEBPACK_IMPORTED_MODULE_5__["SubcategoryDetailComponent"]]
        })
    ], SubcategoryDetailModule);
    return SubcategoryDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=subcategory-detail-subcategory-detail-module.js.map