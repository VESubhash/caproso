(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-detail-item-detail-module"],{

/***/ "./src/app/layout/item-detail/item-detail-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/item-detail/item-detail-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ItemDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailRoutingModule", function() { return ItemDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-detail.component */ "./src/app/layout/item-detail/item-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _item_detail_component__WEBPACK_IMPORTED_MODULE_2__["ItemDetailComponent"]
    }
];
var ItemDetailRoutingModule = /** @class */ (function () {
    function ItemDetailRoutingModule() {
    }
    ItemDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ItemDetailRoutingModule);
    return ItemDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/item-detail/item-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/item-detail/item-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Item Detail</h2>\n<!--<button class=\"btn btn-primary btn-space\" (click)=\"goToDocuments()\"  *ngIf=\"itemId > 0 \">Documents</button>-->\n<button  (click)=\"gotoManageItem();\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n<br/>\n<hr>\n\n<form [formGroup]=\"itemForm\" (ngSubmit)=\"onSubmit(itemForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Item Code</label>\n            <input class=\"form-control\" formControlName='ItemCode' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.ItemCode.errors }\"/>\n\n            <div *ngIf=\"submitted && f.ItemCode.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.ItemCode.errors.required\">Item code is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Item Description</label>\n            <input class=\"form-control\" formControlName='ItemDescr' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.ItemDescr.errors }\"/>\n\n            <div *ngIf=\"submitted && f.ItemDescr.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.ItemDescr.errors.required\">Item Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Category</label>\n            <select class=\"form-control\" formControlName='LCategoryId'   class=\"form-control\" (change)=\"onCategoryChange($event.target.value)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.LCategoryId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let category of categoryModel\" [(value)]=\"category.LTagId\" >{{category.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.LCategoryId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.LCategoryId.errors.required\">Category is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Sub Category name</label>\n            <select class=\"form-control\" formControlName='LSubCategoryId' [(ngModel)]=\"LSubCategoryId\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.LSubCategoryId.errors }\" >\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let subcategory of subCategoryModel\"  [(value)]=\"subcategory.LTagId\">{{subcategory.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.LSubCategoryId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.LSubCategoryId.errors.required\">Sub Category is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Unit</label>\n            <select class=\"form-control\" formControlName='LUnitId' class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.LUnitId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let unit of unitModel\" [ngValue]=\"unit.LTagId\">{{unit.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.LUnitId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.LUnitId.errors.required\">Unit is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Unit Price</label>\n            <input class=\"form-control\"  formControlName='UnitPrice' class=\"form-control\" currencyMask [options]=\"{ align:'left' }\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.UnitPrice.errors }\"/>\n\n            <div *ngIf=\"submitted && f.UnitPrice.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.UnitPrice.errors.required\">Price is required</div>\n                <div *ngIf=\"f.UnitPrice.errors\">Invalid price</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label> Note/Source Data</label>\n            <input class=\"form-control\" formControlName='Note' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.Note.errors }\"/>\n\n            <div *ngIf=\"submitted && f.Note.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Note.errors.required\">Note is required</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/item-detail/item-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/item-detail/item-detail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/item-detail/item-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/item-detail/item-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(formBuilder, router, alertService, httpTagsService, httpItemsService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.httpItemsService = httpItemsService;
        this.route = route;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.itemId = Number(localStorage.getItem('itemId'));
        this.getCategoryList();
        this.getUnitList();
        if (this.itemId > 0) {
            this.btnName = 'Update';
            this.getItemDetail(this.itemId);
        }
    };
    ItemDetailComponent.prototype.buildForm = function () {
        this.itemForm = this.formBuilder.group({
            OrganizationId: [this.organizationId],
            ItemCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            ItemDescr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            LCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LSubCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LUnitId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            UnitPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
            Note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2000)]],
        });
    };
    Object.defineProperty(ItemDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.itemForm.controls; },
        enumerable: true,
        configurable: true
    });
    ItemDetailComponent.prototype.onSubmit = function (itemDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.itemForm.invalid) {
            return;
        }
        itemDetail.OrganizationId = Number(localStorage.getItem('organizationId'));
        if (this.itemId > 0) {
            itemDetail.itemId = this.itemId;
        }
        this.loading = true;
        this.httpItemsService.create(itemDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-item']);
            _this.alertService.success(_this.itemId > 0 ? 'Item updated successfully' : 'Item save successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ItemDetailComponent.prototype.getItemDetail = function (itemId) {
        var _this = this;
        this.httpItemsService.getItemDetail(itemId, true)
            .subscribe(function (data) {
            _this.getSubCategoryList(data.LCategoryId);
            _this.itemForm.patchValue({
                OrganizationId: data.organizationId,
                ItemCode: data.ItemCode,
                ItemDescr: data.ItemDescr,
                LCategoryId: data.LCategoryId,
                LSubCategoryId: data.LSubCategoryId,
                LUnitId: data.LUnitId,
                UnitPrice: data.UnitPrice,
                Note: data.Note,
            });
        });
    };
    ItemDetailComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', this.organizationId, true)
            .subscribe(function (categories) {
            _this.categoryModel = categories;
        });
    };
    ItemDetailComponent.prototype.getSubCategoryList = function (categoryId) {
        var _this = this;
        this.httpTagsService.getTagsByTypeAndParentId('Sub Category', categoryId, true)
            .subscribe(function (subcategories) {
            _this.subCategoryModel = subcategories;
        });
    };
    ItemDetailComponent.prototype.getUnitList = function () {
        var _this = this;
        this.httpTagsService.getTagByTypeAndOrganizationId('Unit', this.organizationId, true)
            .subscribe(function (unit) {
            _this.unitModel = unit;
        });
    };
    ItemDetailComponent.prototype.onCategoryChange = function (categoryId) {
        this.getSubCategoryList(categoryId);
    };
    ItemDetailComponent.prototype.goToDocuments = function () {
        localStorage.setItem('itemId', this.itemId.toString());
        this.router.navigate(['./manage-documents']);
    };
    ItemDetailComponent.prototype.gotoManageItem = function () {
        localStorage.removeItem('itemId');
        this.router.navigate(['./manage-items']);
    };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'item-detail',
            template: __webpack_require__(/*! ./item-detail.component.html */ "./src/app/layout/item-detail/item-detail.component.html"),
            styles: [__webpack_require__(/*! ./item-detail.component.scss */ "./src/app/layout/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/item-detail/item-detail.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/item-detail/item-detail.module.ts ***!
  \**********************************************************/
/*! exports provided: ItemDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailModule", function() { return ItemDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-detail.component */ "./src/app/layout/item-detail/item-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-detail-routing.module */ "./src/app/layout/item-detail/item-detail-routing.module.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ItemDetailModule = /** @class */ (function () {
    function ItemDetailModule() {
    }
    ItemDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _item_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["ItemDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"]
            ],
            declarations: [_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"]]
        })
    ], ItemDetailModule);
    return ItemDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=item-detail-item-detail-module.js.map