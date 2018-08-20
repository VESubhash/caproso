(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-affiliates-manage-affiliates-module"],{

/***/ "./src/app/layout/manage-affiliates/manage-affiliates-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/manage-affiliates/manage-affiliates-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ManageAffiliatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAffiliatesRoutingModule", function() { return ManageAffiliatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_affiliates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-affiliates.component */ "./src/app/layout/manage-affiliates/manage-affiliates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_affiliates_component__WEBPACK_IMPORTED_MODULE_2__["ManageAffiliatesComponent"]
    }
];
var ManageAffiliatesRoutingModule = /** @class */ (function () {
    function ManageAffiliatesRoutingModule() {
    }
    ManageAffiliatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageAffiliatesRoutingModule);
    return ManageAffiliatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-affiliates/manage-affiliates.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-affiliates/manage-affiliates.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <h3 class=\"one\">Manage Affiliate</h3>\r\n    <button class=\"btn btn-primary float-right\" (click)=\"addAffiliate()\">Add Affiliate</button>\r\n    <div class=\"card-body table-responsive\">\r\n        <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered user-table display\">\r\n            <thead>\r\n            <tr>\r\n                <th>Affiliate Name</th>\r\n                <th>User Name</th>\r\n                <th>First name</th>\r\n                <th>Last name</th>\r\n                <th>Created Date</th>\r\n                <th>Active</th>\r\n                <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let affiliate of affiliates; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\r\n\r\n                <td>{{ affiliate.AffiliateName }}</td>\r\n                <td>{{ affiliate.UserName }}</td>\r\n                <td>{{ affiliate.FirstName }}</td>\r\n                <td>{{ affiliate.LastName }}</td>\r\n                <td>{{ affiliate.CreatedDate | date:'MM/dd/yyyy hh:mm:ss' }}</td>\r\n\r\n                <!--<td>-->\r\n                    <!--<div class=\"wrapper\">-->\r\n                        <!--<div>-->\r\n                            <!--<div class=\"dropdown\">-->\r\n                                <!--<button class=\"dropbtn\"-->\r\n                                        <!--[ngClass]=\"{'bg-success': affiliate.IsActive.toString().toLowerCase() === 'true', 'bg-danger': affiliate.IsActive.toString().toLowerCase() === 'false' }\">-->\r\n                                    <!--{{affiliate.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}-->\r\n                                <!--</button>-->\r\n                                <!--<div class=\"dropdown-content\">-->\r\n                                    <!--<a (click)=\"onStatusChange(affiliate,false)\">Active</a>-->\r\n                                    <!--<a (click)=\"onStatusChange(affiliate,true)\">InActive</a>-->\r\n                                <!--</div>-->\r\n                            <!--</div>-->\r\n                            <!--<div style=\"display: none\"> {{affiliate.IsActive.toString().toLowerCase()}}</div>-->\r\n                        <!--</div>-->\r\n                        <!--<div  class=\"button\" *ngIf=\"editActive\" >-->\r\n                            <!--{{affiliate.IsActive.toString().toLowerCase()}}-->\r\n                            <!--<select [(ngModel)]=\"affiliate.IsActive\">-->\r\n                            <!--<option *ngFor=\"let active of activeModel\" [(value)]=\"active.value\">{{active.name}}</option>-->\r\n                            <!--</select>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n\r\n                <!--</td>-->\r\n                <td>\r\n                    <button (click)=\"onStatusChange(affiliate,affiliate.IsActive)\" class=\"dropbtn\"\r\n                            [ngClass]=\"{'bg-success': affiliate.IsActive.toString().toLowerCase() === 'true', 'bg-danger': affiliate.IsActive.toString().toLowerCase() === 'false' }\">\r\n                        {{affiliate.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <button class=\"btn-space\"\r\n                            (click)=\"goToAffiliateDetail(affiliate.UserId, affiliate.AffiliateId, affiliate.AffiliateName)\">\r\n                        <i class=\"fa fa-pencil\"></i></button>\r\n                    <button btn-space><i class=\"fa fa-trash\"></i></button>\r\n                </td>\r\n\r\n            </tr>\r\n\r\n            <tr *ngIf=\"affiliate?.length == 0\">\r\n                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/manage-affiliates/manage-affiliates.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-affiliates/manage-affiliates.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n   server-side-angular-way.component.css\r\n*/\n.no-data-available {\n  text-align: center; }\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n.user-table {\n  width: 100% !important; }\n.btn-space {\n  margin-right: 5px; }\n.wrapper .btn {\n  width: 100%; }\n.button {\n  display: none; }\n.wrapper:hover div {\n  /* Change the filter in here */ }\n.wrapper:hover .button {\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/layout/manage-affiliates/manage-affiliates.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-affiliates/manage-affiliates.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageAffiliatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAffiliatesComponent", function() { return ManageAffiliatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_affiliates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/affiliates.service */ "./src/app/services/affiliates.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageAffiliatesComponent = /** @class */ (function () {
    function ManageAffiliatesComponent(httpUserService, httpService, alertService, router, route) {
        this.httpUserService = httpUserService;
        this.httpService = httpService;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.dtOptions = {};
    }
    ManageAffiliatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.userId = params['id'] || 0;
        });
        this.bindAffiliateTable();
        this.loadActiveModel();
    };
    ManageAffiliatesComponent.prototype.bindAffiliateTable = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.httpService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.affiliates = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'AffiliateName' }, { data: 'UserName' }, { data: 'FirstName' }, { data: 'LastName' }, { data: 'IsActive' }, , { data: 'CreatedDate' }]
        };
    };
    ManageAffiliatesComponent.prototype.addAffiliate = function () {
        localStorage.removeItem('affiliateId');
        localStorage.removeItem('affiliateName');
        this.router.navigate(['/affiliate-detail']);
    };
    ManageAffiliatesComponent.prototype.goToAffiliateDetail = function (userId, affiliatedId, affiliateName) {
        localStorage.setItem('affiliateId', affiliatedId.toString());
        localStorage.setItem('affiliateName', affiliateName);
        this.router.navigate(['affiliate-detail']);
    };
    ManageAffiliatesComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageAffiliatesComponent.prototype.onStatusChange = function (affiliate, isActive) {
        var _this = this;
        this.httpUserService.updateActive(affiliate.UserId, isActive)
            .subscribe(function (data) {
            if (data) {
                affiliate.IsActive = !isActive;
                _this.alertService.success(affiliate.IsActive ? 'Affiliate activate successfully' : 'Affiliate deactivate successfully', false);
            }
            else {
                _this.alertService.success('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
            // this.loading = false;
        });
    };
    ManageAffiliatesComponent.prototype.showActive = function () {
        this.editActive = !this.editActive;
    };
    ManageAffiliatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-affiliates',
            template: __webpack_require__(/*! ./manage-affiliates.component.html */ "./src/app/layout/manage-affiliates/manage-affiliates.component.html"),
            styles: [__webpack_require__(/*! ./manage-affiliates.component.scss */ "./src/app/layout/manage-affiliates/manage-affiliates.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_affiliates_service__WEBPACK_IMPORTED_MODULE_2__["AffiliatesService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ManageAffiliatesComponent);
    return ManageAffiliatesComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-affiliates/manage-affiliates.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/manage-affiliates/manage-affiliates.module.ts ***!
  \**********************************************************************/
/*! exports provided: ManageAffiliatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAffiliatesModule", function() { return ManageAffiliatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _manage_affiliates_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-affiliates-routing.module */ "./src/app/layout/manage-affiliates/manage-affiliates-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_affiliates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-affiliates.component */ "./src/app/layout/manage-affiliates/manage-affiliates.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageAffiliatesModule = /** @class */ (function () {
    function ManageAffiliatesModule() {
    }
    ManageAffiliatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_affiliates_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageAffiliatesRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_affiliates_component__WEBPACK_IMPORTED_MODULE_6__["ManageAffiliatesComponent"]]
        })
    ], ManageAffiliatesModule);
    return ManageAffiliatesModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-affiliates-manage-affiliates-module.js.map