(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-addresses-manage-addresses-module"],{

/***/ "./src/app/layout/manage-addresses/manage-addresses-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/manage-addresses/manage-addresses-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageAddressesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressesRoutingModule", function() { return ManageAddressesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_addresses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-addresses.component */ "./src/app/layout/manage-addresses/manage-addresses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_addresses_component__WEBPACK_IMPORTED_MODULE_2__["ManageAddressesComponent"]
    }
];
var ManageAddressesRoutingModule = /** @class */ (function () {
    function ManageAddressesRoutingModule() {
    }
    ManageAddressesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageAddressesRoutingModule);
    return ManageAddressesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-addresses/manage-addresses.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-addresses/manage-addresses.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h3 class=\"one\">Manage Addresses</h3>\n\n        </div>\n    </div>\n\n    <div>\n        <button  onclick=\"window.history.back();\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n        <button class=\"btn btn-primary btn-space float-right\" (click)=\"addAddress()\" >Add Address</button>\n\n        <div class=\"card-body table-responsive\">\n\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered address-table\">\n                <thead>\n                <tr>\n                    <th>Address 1</th>\n                    <th>Address 2</th>\n                    <th>City</th>\n                    <th>Postal Code</th>\n                    <th>State Name</th>\n                    <th>Country Name</th>\n                    <th>Active</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let address of addresses\">\n\n                    <td>{{ address.Address1 }}</td>\n                    <td>{{ address.Address2 }}</td>\n                    <td>{{ address.City }}</td>\n                    <td>{{ address.PostalCode }}</td>\n                    <td>{{ address.StateName }}</td>\n                    <td>{{ address.CountryName }}</td>\n                    <td> <select [(ngModel)]=\"address.IsActive\">\n                        <option *ngFor=\"let active of activeModel\" [(value)]=\"active.value\">{{active.name}}</option>\n                    </select></td>\n                    <td><button class=\"btn-space\" (click)=\"goToAddressDetails(address.AddressId)\"> <i class=\"fa fa-pencil\"></i></button> <button btn-space><i class=\"fa fa-trash\"></i> </button> </td>\n\n                </tr>\n\n                <tr *ngIf=\"address?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/manage-addresses/manage-addresses.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-addresses/manage-addresses.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-addresses/manage-addresses.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/manage-addresses/manage-addresses.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManageAddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressesComponent", function() { return ManageAddressesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_addresses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/addresses.service */ "./src/app/services/addresses.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageAddressesComponent = /** @class */ (function () {
    function ManageAddressesComponent(httpAddressesService, router, route) {
        this.httpAddressesService = httpAddressesService;
        this.router = router;
        this.route = route;
        this.dtOptions = {};
    }
    ManageAddressesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.contactId = params['id'] || 0;
        });
        this.bindAddressesTable();
        this.loadActiveModel();
    };
    ManageAddressesComponent.prototype.bindAddressesTable = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.addressOptions = {
                    contactId: localStorage.getItem('contactId'),
                };
                dataTablesParameters.addressOptions = _this.addressOptions;
                _this.httpAddressesService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.addresses = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'Address1' }, { data: 'Address2' }, { data: 'City' }, { data: 'PostalCode' }, { data: 'StateName' }, { data: 'CountryName' }]
        };
    };
    ManageAddressesComponent.prototype.addAddress = function () {
        localStorage.removeItem('addressId');
        this.router.navigate(['/address-detail']);
    };
    ManageAddressesComponent.prototype.goToAddressDetails = function (id) {
        localStorage.setItem('addressId', id.toString());
        this.router.navigate(['address-detail']);
    };
    ManageAddressesComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageAddressesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-addresses',
            template: __webpack_require__(/*! ./manage-addresses.component.html */ "./src/app/layout/manage-addresses/manage-addresses.component.html"),
            styles: [__webpack_require__(/*! ./manage-addresses.component.scss */ "./src/app/layout/manage-addresses/manage-addresses.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_addresses_service__WEBPACK_IMPORTED_MODULE_2__["AddressesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ManageAddressesComponent);
    return ManageAddressesComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-addresses/manage-addresses.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/manage-addresses/manage-addresses.module.ts ***!
  \********************************************************************/
/*! exports provided: ManageAddressesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAddressesModule", function() { return ManageAddressesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_addresses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-addresses.component */ "./src/app/layout/manage-addresses/manage-addresses.component.ts");
/* harmony import */ var _manage_addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-addresses-routing.module */ "./src/app/layout/manage-addresses/manage-addresses-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageAddressesModule = /** @class */ (function () {
    function ManageAddressesModule() {
    }
    ManageAddressesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_addresses_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageAddressesRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_addresses_component__WEBPACK_IMPORTED_MODULE_5__["ManageAddressesComponent"]]
        })
    ], ManageAddressesModule);
    return ManageAddressesModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-addresses-manage-addresses-module.js.map