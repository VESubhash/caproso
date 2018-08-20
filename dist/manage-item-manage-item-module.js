(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-item-manage-item-module"],{

/***/ "./src/app/layout/manage-item/manage-item-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/manage-item/manage-item-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ManageItemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemRoutingModule", function() { return ManageItemRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-item.component */ "./src/app/layout/manage-item/manage-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_item_component__WEBPACK_IMPORTED_MODULE_2__["ManageItemComponent"]
    }
];
var ManageItemRoutingModule = /** @class */ (function () {
    function ManageItemRoutingModule() {
    }
    ManageItemRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageItemRoutingModule);
    return ManageItemRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-item/manage-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/manage-item/manage-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n        <h3 class=\"one\">Manage Items of {{organization}} <button class=\"btn Add-userbtn float-right\" (click)=\"addItems(organizationId)\" >Add Item</button></h3>\r\n        <div class=\"card-body table-responsive\">\r\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered item-table display\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Item Code</th>\r\n                    <th>Item Description</th>\r\n                    <th>Category </th>\r\n                    <th>Sub Category </th>\r\n                    <th>Unit</th>\r\n                    <th>Unit Price</th>\r\n                    <!--<th>Active</th>-->\r\n                    <th>Action</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of items; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\r\n                    <td>{{ item.ItemCode }}</td>\r\n                    <td>{{ item.ItemDescr }}</td>\r\n                    <td>{{ item.CategoryName }}</td>\r\n                    <td>{{ item.SubCategoryName }}</td>\r\n                    <td>{{ item.Unit }}</td>\r\n                    <td class=\"text-right\">{{ item.UnitPrice  | currency }}</td>\r\n                    <!--<td>-->\r\n                        <!--<button (click)=\"onStatusChange(item, !item.IsActive)\" class=\"dropbtn\"-->\r\n                                <!--[ngClass]=\"{'bg-success': item.IsActive.toString().toLowerCase() === 'true', 'bg-danger': item.IsActive.toString().toLowerCase() === 'false' }\">-->\r\n                            <!--{{item.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}-->\r\n                        <!--</button>-->\r\n                    <!--</td>-->\r\n                    <td  class=\"action-btn\">\r\n                         <i class=\"fa fa-pencil\" (click)=\"goToItemDetail(item.ItemId)\"></i>\r\n                         <i class=\"fa fa-trash\"></i>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"tags?.length == 0\">\r\n                    <td colspan=\"4\" class=\"no-data-available\">No data!</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/manage-item/manage-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/manage-item/manage-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n   server-side-angular-way.component.css\r\n*/\n.no-data-available {\n  text-align: center; }\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n.item-table {\n  width: 100% !important; }\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-item/manage-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/manage-item/manage-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ManageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemComponent", function() { return ManageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageItemComponent = /** @class */ (function () {
    function ManageItemComponent(httpItemService, router, route, alertService) {
        this.httpItemService = httpItemService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.dtOptions = {};
        this.organizations = [];
    }
    ManageItemComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        // if (this.organizationId == 0) {
        //     this.router.navigate(['manage-organizations']);
        // }
        this.bindItemTables();
    };
    ManageItemComponent.prototype.bindItemTables = function () {
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
    ManageItemComponent.prototype.onStatusChange = function (item, isActive) {
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
    ManageItemComponent.prototype.addItems = function () {
        localStorage.removeItem('itemId');
        this.router.navigate(['/item-detail']);
    };
    ManageItemComponent.prototype.goToItemDetail = function (id) {
        localStorage.setItem('itemId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['item-detail']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"])
    ], ManageItemComponent.prototype, "dtElement", void 0);
    ManageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-item',
            template: __webpack_require__(/*! ./manage-item.component.html */ "./src/app/layout/manage-item/manage-item.component.html"),
            styles: [__webpack_require__(/*! ./manage-item.component.scss */ "./src/app/layout/manage-item/manage-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ManageItemComponent);
    return ManageItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-item/manage-item.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/manage-item/manage-item.module.ts ***!
  \**********************************************************/
/*! exports provided: ManageItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageItemModule", function() { return ManageItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _manage_item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-item-routing.module */ "./src/app/layout/manage-item/manage-item-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-item.component */ "./src/app/layout/manage-item/manage-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageItemModule = /** @class */ (function () {
    function ManageItemModule() {
    }
    ManageItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_item_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageItemRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_item_component__WEBPACK_IMPORTED_MODULE_6__["ManageItemComponent"]]
        })
    ], ManageItemModule);
    return ManageItemModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-item-manage-item-module.js.map