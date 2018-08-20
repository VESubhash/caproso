(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-units-manage-units-module"],{

/***/ "./src/app/layout/manage-units/manage-units-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/manage-units/manage-units-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ManageUnitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUnitsRoutingModule", function() { return ManageUnitsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_units_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-units.component */ "./src/app/layout/manage-units/manage-units.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_units_component__WEBPACK_IMPORTED_MODULE_2__["ManageUnitsComponent"]
    }
];
var ManageUnitsRoutingModule = /** @class */ (function () {
    function ManageUnitsRoutingModule() {
    }
    ManageUnitsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageUnitsRoutingModule);
    return ManageUnitsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-units/manage-units.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/manage-units/manage-units.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n        <h3 class=\"one\">Manage units of {{organization}} <button class=\"btn Add-userbtn float-right\" (click)=\"addUnit(organizationId)\" >Add Unit</button></h3>\n        <div class=\"card-body table-responsive\">\n\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Unit Name</th>\n                    <th>Unit Description</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let unit of units; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n                    <td>{{ unit.TagName }}</td>\n                    <td>{{ unit.TagDescr }}</td>\n                    <!--<td>-->\n\n                        <!--<div class=\"dropdown\">-->\n                            <!--<button class=\"dropbtn\"-->\n                                    <!--[ngClass]=\"{'bg-success': unit.IsActive.toString().toLowerCase() === 'true', 'bg-danger': unit.IsActive.toString().toLowerCase() === 'false' }\">-->\n                                <!--{{unit.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}-->\n                            <!--</button>-->\n                            <!--<div class=\"dropdown-content\">-->\n                                <!--<a (click)=\"onStatusChange(unit,true)\">Active</a>-->\n                                <!--<a (click)=\"onStatusChange(unit,false)\">InActive</a>-->\n                            <!--</div>-->\n                        <!--</div>-->\n                    <!--</td>-->\n                    <td  class=\"action-btn\">\n                        <i class=\"fa fa-pencil\" (click)=\"goToUnitDetails(unit.LTagsId, organizationId)\"></i>\n                        <i class=\"fa fa-trash\"></i>\n                    </td>\n\n                </tr>\n\n                <tr *ngIf=\"units?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/layout/manage-units/manage-units.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/manage-units/manage-units.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-units/manage-units.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/manage-units/manage-units.component.ts ***!
  \***************************************************************/
/*! exports provided: ManageUnitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUnitsComponent", function() { return ManageUnitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
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




var ManageUnitsComponent = /** @class */ (function () {
    function ManageUnitsComponent(httpTagService, router, alertService) {
        this.httpTagService = httpTagService;
        this.router = router;
        this.alertService = alertService;
        this.dtOptions = {};
    }
    ManageUnitsComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindTagTables();
    };
    ManageUnitsComponent.prototype.bindTagTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.groupOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    ltagType: 'Unit'
                };
                dataTablesParameters.groupOptions = _this.groupOptions;
                _this.httpTagService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.units = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'TagName' }, { data: 'TagDescr' }, { data: 'IsActive' }]
        };
    };
    ManageUnitsComponent.prototype.addUnit = function () {
        localStorage.removeItem('lTagId');
        this.router.navigate(['/unit-detail']);
    };
    ManageUnitsComponent.prototype.goToUnitDetails = function (id) {
        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['unit-detail']);
    };
    ManageUnitsComponent.prototype.goToOrganizationDetails = function () {
        this.router.navigate(['manage-organizations']);
    };
    ManageUnitsComponent.prototype.onStatusChange = function (tag, isActive) {
        var _this = this;
        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(function (data) {
            if (data) {
                tag.IsActive = isActive;
                _this.alertService.success(tag.IsActive ? 'unit activate successfully' : 'unit deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageUnitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-units',
            template: __webpack_require__(/*! ./manage-units.component.html */ "./src/app/layout/manage-units/manage-units.component.html"),
            styles: [__webpack_require__(/*! ./manage-units.component.scss */ "./src/app/layout/manage-units/manage-units.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ManageUnitsComponent);
    return ManageUnitsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-units/manage-units.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/manage-units/manage-units.module.ts ***!
  \************************************************************/
/*! exports provided: ManageUnitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUnitsModule", function() { return ManageUnitsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_units_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-units.component */ "./src/app/layout/manage-units/manage-units.component.ts");
/* harmony import */ var _manage_units_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-units-routing.module */ "./src/app/layout/manage-units/manage-units-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageUnitsModule = /** @class */ (function () {
    function ManageUnitsModule() {
    }
    ManageUnitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_units_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageUnitsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_units_component__WEBPACK_IMPORTED_MODULE_5__["ManageUnitsComponent"]]
        })
    ], ManageUnitsModule);
    return ManageUnitsModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-units-manage-units-module.js.map