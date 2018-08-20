(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-documents-manage-documents-module"],{

/***/ "./src/app/layout/manage-documents/manage-documents-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/manage-documents/manage-documents-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageDocumentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDocumentsRoutingModule", function() { return ManageDocumentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_documents_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-documents.component */ "./src/app/layout/manage-documents/manage-documents.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _manage_documents_component__WEBPACK_IMPORTED_MODULE_2__["ManageDocumentsComponent"]
    }
];
var ManageDocumentsRoutingModule = /** @class */ (function () {
    function ManageDocumentsRoutingModule() {
    }
    ManageDocumentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageDocumentsRoutingModule);
    return ManageDocumentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-documents/manage-documents.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-documents/manage-documents.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h3 class=\"one\">Manage document of {{organization}}</h3>\n\n        </div>\n    </div>\n\n    <div>\n        <button  (click)=\"goToManageItems()\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n        <button class=\"btn btn-primary btn-space float-right\" (click)=\"addDocument(organizationId)\" >Add Document</button>\n\n        <div class=\"card-body table-responsive\">\n\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Document Name</th>\n                    <th>Document </th>\n                    <th>Active</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let document of documents; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n\n                    <td>{{ document.DocCaption }}</td>\n                    <td>{{ document.DocPath }}</td>\n                    <td>\n\n                        <div class=\"dropdown\">\n                            <button class=\"dropbtn\"\n                                    [ngClass]=\"{'bg-success': document.IsActive.toString().toLowerCase() === 'true', 'bg-danger': document.IsActive.toString().toLowerCase() === 'false' }\">\n                                {{document.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}\n                            </button>\n                            <div class=\"dropdown-content\">\n                                <a (click)=\"onStatusChange(document,true)\">Active</a>\n                                <a (click)=\"onStatusChange(document,false)\">InActive</a>\n                            </div>\n                        </div>\n                    </td>\n                    <td><button class=\"btn-space\" (click)=\"goToDocumentDetail(document)\"> <i class=\"fa fa-pencil\"></i></button> <button btn-space><i class=\"fa fa-trash\"></i> </button> </td>\n\n                </tr>\n\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/manage-documents/manage-documents.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-documents/manage-documents.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-documents/manage-documents.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/manage-documents/manage-documents.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManageDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDocumentsComponent", function() { return ManageDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/document.service */ "./src/app/services/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageDocumentsComponent = /** @class */ (function () {
    function ManageDocumentsComponent(router, alertService, httpDocumentService) {
        this.router = router;
        this.alertService = alertService;
        this.httpDocumentService = httpDocumentService;
        this.dtOptions = {};
    }
    ManageDocumentsComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindDocumentTables();
    };
    ManageDocumentsComponent.prototype.bindDocumentTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.documentOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                };
                dataTablesParameters.documentOptions = _this.documentOptions;
                _this.httpDocumentService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.documents = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'DocCaption' }, { data: 'DocPath' }, { data: 'IsActive' }]
        };
    };
    ManageDocumentsComponent.prototype.addDocument = function () {
        localStorage.removeItem('documentId');
        this.router.navigate(['/document-detail']);
    };
    ManageDocumentsComponent.prototype.goToManageItems = function () {
        this.router.navigate(['/manage-items']);
    };
    ManageDocumentsComponent.prototype.goToDocumentDetail = function (document) {
        localStorage.setItem('documentId', document.DocumentId.toString());
        localStorage.setItem('itemId', document.ItemId.toString());
        this.router.navigate(['document-detail']);
    };
    ManageDocumentsComponent.prototype.onStatusChange = function (document, isActive) {
        var _this = this;
        this.httpDocumentService.updateActive(document.DocumentId, isActive)
            .subscribe(function (data) {
            if (data) {
                document.IsActive = isActive;
                _this.alertService.success(document.IsActive ? 'document activate successfully' : 'document deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageDocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-documents',
            template: __webpack_require__(/*! ./manage-documents.component.html */ "./src/app/layout/manage-documents/manage-documents.component.html"),
            styles: [__webpack_require__(/*! ./manage-documents.component.scss */ "./src/app/layout/manage-documents/manage-documents.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _services_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"]])
    ], ManageDocumentsComponent);
    return ManageDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-documents/manage-documents.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/manage-documents/manage-documents.module.ts ***!
  \********************************************************************/
/*! exports provided: ManageDocumentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDocumentsModule", function() { return ManageDocumentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _manage_documents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-documents.component */ "./src/app/layout/manage-documents/manage-documents.component.ts");
/* harmony import */ var _manage_documents_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-documents-routing.module */ "./src/app/layout/manage-documents/manage-documents-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManageDocumentsModule = /** @class */ (function () {
    function ManageDocumentsModule() {
    }
    ManageDocumentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _manage_documents_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManageDocumentsRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [_manage_documents_component__WEBPACK_IMPORTED_MODULE_5__["ManageDocumentsComponent"]]
        })
    ], ManageDocumentsModule);
    return ManageDocumentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-documents-manage-documents-module.js.map