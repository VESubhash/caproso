(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-items-manage-items-module"],{

/***/ "./src/app/layout/manage-items/manage-items-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/manage-items/manage-items-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ManageItemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemsRoutingModule", function() { return ManageItemsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-items.component */ "./src/app/layout/manage-items/manage-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_items_component__WEBPACK_IMPORTED_MODULE_2__["ManageItemsComponent"]
    }
];
var ManageItemsRoutingModule = /** @class */ (function () {
    function ManageItemsRoutingModule() {
    }
    ManageItemsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageItemsRoutingModule);
    return ManageItemsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-items/manage-items.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/manage-items/manage-items.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h3 class=\"one\">Manage Items of {{organization}}</h3>\n\n        </div>\n    </div>\n    <div>\n        <button class=\"btn btn-primary btn-space float-right\" (click)=\"addItems(organizationId)\" >Add Items</button>\n        <div class=\"card-body table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Item Code</th>\n                    <th>Item Description</th>\n                    <th>Sub Category Name</th>\n                    <th>Category Name</th>\n                    <th>Unit</th>\n                    <th>Unit Price</th>\n                    <th>Active</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of items; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n                    <td>{{ item.ItemCode }}</td>\n                    <td>{{ item.ItemDescr }}</td>\n                    <td>{{ item.SubCategoryName }}</td>\n                    <td>{{ item.CategoryName }}</td>\n                    <td>{{ item.Unit }}</td>\n                    <td class=\"text-right\">{{ item.UnitPrice  | currency }}</td>\n                    <td>\n                        <button (click)=\"onStatusChange(item, !item.IsActive)\" class=\"dropbtn\"\n                                [ngClass]=\"{'bg-success': item.IsActive.toString().toLowerCase() === 'true', 'bg-danger': item.IsActive.toString().toLowerCase() === 'false' }\">\n                            {{item.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}\n                        </button>\n                    </td>\n                    <td><button class=\"btn-space\"  title=\"edit item\" (click)=\"goToItemDetail(item.ItemId)\"> <i class=\"fa fa-pencil\"></i></button> <button title=\"delete item\" class=\"btn-space\"><i class=\"fa fa-trash\"></i> </button> </td>\n                </tr>\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"4\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/manage-items/manage-items.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/manage-items/manage-items.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-items/manage-items.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/manage-items/manage-items.component.ts ***!
  \***************************************************************/
/*! exports provided: ManageItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemsComponent", function() { return ManageItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageItemsComponent = /** @class */ (function () {
    function ManageItemsComponent(httpItemService, router, alertService) {
        this.httpItemService = httpItemService;
        this.router = router;
        this.alertService = alertService;
        this.dtOptions = {};
    }
    ManageItemsComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        // if (this.organizationId == 0) {
        //     this.router.navigate(['manage-organizations']);
        // }
        this.bindItemTables();
        this.loadActiveModel();
    };
    ManageItemsComponent.prototype.bindItemTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.itemOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                };
                dataTablesParameters.itemOptions = _this.itemOptions;
                _this.httpItemService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.items = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'ItemCode' }, { data: 'ItemName' }, { data: 'CategoryName' }, { data: 'SubCategoryName' }, { data: 'UnitName' }, { data: 'UnitPrice' }]
        };
    };
    ManageItemsComponent.prototype.addItems = function () {
        localStorage.removeItem('itemId');
        this.router.navigate(['/item-detail']);
    };
    ManageItemsComponent.prototype.goToItemDetail = function (id) {
        localStorage.setItem('itemId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['item-detail']);
    };
    ManageItemsComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageItemsComponent.prototype.onStatusChange = function (item, isActive) {
        var _this = this;
        this.httpItemService.updateActive(item.ItemId, isActive)
            .subscribe(function (data) {
            if (data) {
                item.IsActive = isActive;
                _this.alertService.success(item.IsActive ? 'Item activate successfully' : 'item deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-items',
            template: __webpack_require__(/*! ./manage-items.component.html */ "./src/app/layout/manage-items/manage-items.component.html"),
            styles: [__webpack_require__(/*! ./manage-items.component.scss */ "./src/app/layout/manage-items/manage-items.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ManageItemsComponent);
    return ManageItemsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-items/manage-items.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/manage-items/manage-items.module.ts ***!
  \************************************************************/
/*! exports provided: ManageItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemsModule", function() { return ManageItemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-items.component */ "./src/app/layout/manage-items/manage-items.component.ts");
/* harmony import */ var _manage_items_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-items-routing.module */ "./src/app/layout/manage-items/manage-items-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageItemsModule = /** @class */ (function () {
    function ManageItemsModule() {
    }
    ManageItemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_items_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageItemsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_items_component__WEBPACK_IMPORTED_MODULE_5__["ManageItemsComponent"]]
        })
    ], ManageItemsModule);
    return ManageItemsModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-items-manage-items-module.js.map