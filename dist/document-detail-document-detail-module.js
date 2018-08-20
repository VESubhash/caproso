(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-detail-document-detail-module"],{

/***/ "./src/app/layout/document-detail/document-detail-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/document-detail/document-detail-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: DocumentDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailRoutingModule", function() { return DocumentDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _document_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-detail.component */ "./src/app/layout/document-detail/document-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _document_detail_component__WEBPACK_IMPORTED_MODULE_2__["DocumentDetailComponent"]
    }
];
var DocumentDetailRoutingModule = /** @class */ (function () {
    function DocumentDetailRoutingModule() {
    }
    DocumentDetailRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DocumentDetailRoutingModule);
    return DocumentDetailRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/document-detail/document-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/document-detail/document-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Documents</h2>\n<button  (click)=\"goToManageDocuments()\" class=\"btn btn-secondary btn-space float-right\">Back</button>\n<div class=\"clearfix\"></div>\n<hr>\n\n<form [formGroup]=\"documentForm\" (ngSubmit)=\"onSubmit(documentForm.value)\"  enctype=\"multipart/form-data\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Document name</label>\n            <input class=\"form-control\" formControlName='DocCaption'\n                   [ngClass]=\"{ 'is-invalid': submitted && f.DocCaption.errors }\"/>\n\n            <div *ngIf=\"submitted && f.DocCaption.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.DocCaption.errors.required\">Document is required</div>\n            </div>\n        </div>\n\n\n        <div class=\"form-group\">\n            <label> Upload</label>\n            <input class=\"form-control\" formControlName='DocPath' type=\"file\"  (change)=\"uploadFile($event)\" placeholder=\"Upload file (upload only png, gif ,jpg)\" accept=\".pdf, .png, .gif, .jpg\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.DocPath.errors }\"/>\n            <div *ngIf=\"submitted && f.DocPath.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.DocPath.errors.required\">File is required</div>\n            </div>\n        </div>\n\n\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"form-control\" formControlName='ItemId' class=\"form-control\" />\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/document-detail/document-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/document-detail/document-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/document-detail/document-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/document-detail/document-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocumentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailComponent", function() { return DocumentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/document.service */ "./src/app/services/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentDetailComponent = /** @class */ (function () {
    function DocumentDetailComponent(formBuilder, router, alertService, httpDocumentService, uploadService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpDocumentService = httpDocumentService;
        this.uploadService = uploadService;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
    }
    DocumentDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.documentId = 0;
        this.itemId = Number(localStorage.getItem('itemId'));
        this.documentId = Number(localStorage.getItem('documentId'));
        if (this.documentId > 0) {
            this.btnName = 'Update';
            this.getDocumentDetail(this.documentId);
        }
    };
    DocumentDetailComponent.prototype.buildForm = function () {
        this.documentForm = this.formBuilder.group({
            ItemId: [localStorage.getItem('itemId')],
            DocumentId: [this.documentId],
            DocCaption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DocPath: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    DocumentDetailComponent.prototype.getDocumentDetail = function (documentId) {
        var _this = this;
        this.httpDocumentService.getDocumentDetail(documentId, true)
            .subscribe(function (data) {
            _this.documentForm.patchValue({
                ItemId: data.ItemId,
                DocumentId: data.DocumentId,
                DocCaption: data.DocCaption,
                DocPath: data.DocPath
            });
        });
    };
    Object.defineProperty(DocumentDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.documentForm.controls; },
        enumerable: true,
        configurable: true
    });
    DocumentDetailComponent.prototype.onSubmit = function (documentDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.documentForm.invalid) {
            return;
        }
        documentDetail.ItemId = Number(localStorage.getItem('itemId'));
        documentDetail.DocumentId = localStorage.getItem('documentId');
        documentDetail.File = this.file;
        documentDetail.DocPath = this.file;
        this.loading = true;
        this.httpDocumentService.create(documentDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-documents']);
            _this.alertService.success(_this.documentId > 0 ? 'Document updated successfully' : 'Document save successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    DocumentDetailComponent.prototype.goToManageDocuments = function () {
        this.router.navigate(['manage-documents']);
    };
    DocumentDetailComponent.prototype.uploadFile = function (event) {
        var fileList = event.target.files;
        if (fileList.length == 0) {
            console.log("No file selected!");
            return;
        }
        // if (fileList.length > 0) {
        //     this.file = fileList[0].name;
        //     let file = fileList[0];
        //     this.uploadService.uploadFile("Documents/Upload", file, )
        //         .subscribe(
        //             event => {
        //
        //                 if (event.type == HttpEventType.UploadProgress) {
        //                     const percentDone = Math.round(100 * event.loaded / event.total);
        //                     console.log(`File is ${percentDone}% loaded.`);
        //                 } else if (event instanceof HttpResponse) {
        //                     console.log('File is completely loaded!');
        //                 }
        //             },
        //             (err) => {
        //                 console.log("Upload Error:", err);
        //             }, () => {
        //                 console.log("Upload done");
        //             }
        //         )
        // }
    };
    DocumentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'document-detail',
            template: __webpack_require__(/*! ./document-detail.component.html */ "./src/app/layout/document-detail/document-detail.component.html"),
            styles: [__webpack_require__(/*! ./document-detail.component.scss */ "./src/app/layout/document-detail/document-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], DocumentDetailComponent);
    return DocumentDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/document-detail/document-detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/document-detail/document-detail.module.ts ***!
  \******************************************************************/
/*! exports provided: DocumentDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDetailModule", function() { return DocumentDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _document_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-detail.component */ "./src/app/layout/document-detail/document-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _document_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-detail-routing.module */ "./src/app/layout/document-detail/document-detail-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DocumentDetailModule = /** @class */ (function () {
    function DocumentDetailModule() {
    }
    DocumentDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _document_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["DocumentDetailRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_document_detail_component__WEBPACK_IMPORTED_MODULE_5__["DocumentDetailComponent"]]
        })
    ], DocumentDetailModule);
    return DocumentDetailModule;
}());



/***/ })

}]);
//# sourceMappingURL=document-detail-document-detail-module.js.map