(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-organizations-manage-organizations-module"],{

/***/ "./src/app/layout/manage-organizations/manage-organizations-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/manage-organizations/manage-organizations-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ManageOrganizationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrganizationsRoutingModule", function() { return ManageOrganizationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_organizations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-organizations.component */ "./src/app/layout/manage-organizations/manage-organizations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_organizations_component__WEBPACK_IMPORTED_MODULE_2__["ManageOrganizationsComponent"]
    }
];
var ManageOrganizationsRoutingModule = /** @class */ (function () {
    function ManageOrganizationsRoutingModule() {
    }
    ManageOrganizationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageOrganizationsRoutingModule);
    return ManageOrganizationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-organizations/manage-organizations.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/manage-organizations/manage-organizations.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <h3 class=\"one\">Manage Client </h3>\r\n    </div>\r\n</div>\r\n<div>\r\n    <div class=\"card-body table-responsive\">\r\n            <div class=\"row mb-1\" *ngIf=\"isCaprosoAdmin\">\r\n                <div class=\"col-md-2\"><label> Select Affiliates:</label></div>\r\n                <div class=\"col-md-4\">\r\n                        <select class=\"form-control\" class=\"form-control\" [(ngModel)]=\"affiliateId\" (change)=\"onChange($event.target.value)\">\r\n                            <option value=\"0\">All</option>\r\n                            <option *ngFor=\"let affiliate of affiliateModel\" [(value)]=\"affiliate.AffiliateId\" [selected]=\"affiliate.AffiliateId == affiliateId\">{{affiliate.AffiliateName}}</option>\r\n                        </select>\r\n                </div>\r\n                <div class=\"col-md-6\"><button class=\"btn btn-primary float-right\" (click)=\"addOrganization()\" >Add Client</button></div>\r\n            </div>\r\n            <div class=\"col-md-12\" *ngIf=\"!isCaprosoAdmin\">\r\n                <button class=\"btn btn-primary float-right mb-1\" (click)=\"addOrganization()\" >Add Client</button>\r\n            </div>\r\n        <table datatable [dtOptions]=\"dtOptions\"  class=\"table table-bordered user-table display\">\r\n            <thead>\r\n            <tr>\r\n                <th *ngIf=\"isCaprosoAdmin\">Affiliate Name</th>\r\n                <th>Client Name</th>\r\n                <th>User Name</th>\r\n                <th>First name</th>\r\n                <th>Last name</th>\r\n                <th>Created Date</th>\r\n                <th>Active</th>\r\n                <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let organization of organizations; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\r\n                <td *ngIf=\"isCaprosoAdmin\">{{ organization.AffiliateName }}</td>\r\n                <td>{{ organization.OrganizationName }}</td>\r\n                <td>{{ organization.UserName }}</td>\r\n                <td>{{ organization.FirstName }}</td>\r\n                <td>{{ organization.LastName }}</td>\r\n                <td>{{ organization.CreatedDate | date:'MM/dd/yyyy hh:mm:ss' }}</td>\r\n                <td>\r\n                    <button (click)=\"onStatusChange(organization,organization.IsActive)\" class=\"dropbtn\"\r\n                            [ngClass]=\"{'bg-success': organization.IsActive.toString().toLowerCase() === 'true', 'bg-danger': organization.IsActive.toString().toLowerCase() === 'false' }\">\r\n                        {{organization.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}\r\n                    </button>\r\n                </td>\r\n                <td><button class=\"btn-space\" (click)=\"goToOrganizationDetails(organization.UserId, organization.OrganizationId, organization.OrganizationName)\"> <i class=\"fa fa-pencil\"></i></button> <button btn-space><i class=\"fa fa-trash\"></i> </button> </td>\r\n            </tr>\r\n            <tr *ngIf=\"users?.length == 0\">\r\n                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/manage-organizations/manage-organizations.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/manage-organizations/manage-organizations.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n   server-side-angular-way.component.css\r\n*/\n.no-data-available {\n  text-align: center; }\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n.user-table {\n  width: 100% !important; }\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-organizations/manage-organizations.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/manage-organizations/manage-organizations.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageOrganizationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrganizationsComponent", function() { return ManageOrganizationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_organizations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/organizations.service */ "./src/app/services/organizations.service.ts");
/* harmony import */ var _services_affiliates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/affiliates.service */ "./src/app/services/affiliates.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageOrganizationsComponent = /** @class */ (function () {
    function ManageOrganizationsComponent(httpOrganizationService, httpAffiliateService, router, route, alertService, httpUserService) {
        this.httpOrganizationService = httpOrganizationService;
        this.httpAffiliateService = httpAffiliateService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.httpUserService = httpUserService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs_index__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.organizations = [];
        this.isCaprosoAdmin = false;
    }
    ManageOrganizationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.userId = params['id'] || 0;
        });
        this.bindUserTable();
        this.affiliateId = Number(localStorage.getItem('affiliateId'));
        this.affiliateName = localStorage.getItem('affiliateName');
        this.getAffiliatesList();
        this.isCaprosoAdmin = localStorage.getItem('roleName') == 'Admin';
        this.loadActiveModel();
    };
    ManageOrganizationsComponent.prototype.bindUserTable = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.affiliateOptions = {
                    affiliateId: _this.affiliateId,
                };
                dataTablesParameters.affiliateOptions = _this.affiliateOptions;
                _this.httpOrganizationService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.organizations = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'OrganizationName' }, { data: 'UserName' }, { data: 'FirstName' }, { data: 'LastName' }, { data: 'IsActive' }]
        };
    };
    ManageOrganizationsComponent.prototype.getAffiliatesList = function () {
        var _this = this;
        this.httpAffiliateService.getAllAffiliates(true)
            .subscribe(function (affiliate) {
            _this.affiliateModel = affiliate;
        });
    };
    ManageOrganizationsComponent.prototype.addOrganization = function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('organizationName');
        this.router.navigate(['/organization-detail']);
    };
    ManageOrganizationsComponent.prototype.goToOrganizationDetails = function (id, organizationId, organization) {
        localStorage.setItem('userId', id.toString());
        localStorage.setItem('organizationId', organizationId.toString());
        localStorage.setItem('organizationName', organization);
        this.router.navigate(['organization-detail'], { queryParams: { id: id } });
    };
    ManageOrganizationsComponent.prototype.onChange = function (affiliateId) {
        this.affiliateOptions = {
            affiliateId: affiliateId,
        };
        this.organizations = [];
        this.dtElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            //dtInstance.destroy();
            //draw the table first
            dtInstance.draw();
            // Call the dtTrigger to rerender again
            // this.httpOrganizationService.get(this.affiliateOptions)
            //   .subscribe(providers => {
            //
            //     this.organizations = providers;
            //     // Calling the DT trigger to manually render the table
            //    this.dtTrigger.next();
            //   });
        });
    };
    ManageOrganizationsComponent.prototype.onStatusChange = function (user, isActive) {
        var _this = this;
        this.httpUserService.updateActive(user.UserId, isActive)
            .subscribe(function (data) {
            if (data) {
                user.IsActive = !isActive;
                _this.alertService.success(user.IsActive ? 'Client activate successfully' : 'Client deactivate successfully', false);
            }
            else {
                _this.alertService.success('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
            // this.loading = false;
        });
    };
    ManageOrganizationsComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], ManageOrganizationsComponent.prototype, "dtElement", void 0);
    ManageOrganizationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-organizations',
            template: __webpack_require__(/*! ./manage-organizations.component.html */ "./src/app/layout/manage-organizations/manage-organizations.component.html"),
            styles: [__webpack_require__(/*! ./manage-organizations.component.scss */ "./src/app/layout/manage-organizations/manage-organizations.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_organizations_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationsService"],
            _services_affiliates_service__WEBPACK_IMPORTED_MODULE_3__["AffiliatesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], ManageOrganizationsComponent);
    return ManageOrganizationsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-organizations/manage-organizations.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/manage-organizations/manage-organizations.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageOrganizationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOrganizationsModule", function() { return ManageOrganizationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _manage_organizations_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-organizations-routing.module */ "./src/app/layout/manage-organizations/manage-organizations-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_organizations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-organizations.component */ "./src/app/layout/manage-organizations/manage-organizations.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageOrganizationsModule = /** @class */ (function () {
    function ManageOrganizationsModule() {
    }
    ManageOrganizationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_organizations_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageOrganizationsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_organizations_component__WEBPACK_IMPORTED_MODULE_6__["ManageOrganizationsComponent"]]
        })
    ], ManageOrganizationsModule);
    return ManageOrganizationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-organizations-manage-organizations-module.js.map