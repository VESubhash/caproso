(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-group-user-group-module"],{

/***/ "./src/app/layout/user-group/user-group-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/user-group/user-group-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: UserGroupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupRoutingModule", function() { return UserGroupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-group.component */ "./src/app/layout/user-group/user-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _user_group_component__WEBPACK_IMPORTED_MODULE_2__["UserGroupComponent"]
    }
];
var UserGroupRoutingModule = /** @class */ (function () {
    function UserGroupRoutingModule() {
    }
    UserGroupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserGroupRoutingModule);
    return UserGroupRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-group/user-group.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/user-group/user-group.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Assign User Group</h2>\n<br/>\n<hr>\n\n<form [formGroup]=\"userGroupForm\" (ngSubmit)=\"onSubmit(userGroupForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> User name</label>\n            <select class=\"form-control\" formControlName='ContactId' class=\"form-control\" (change)=\"onContactChange($event.target.value)\"\n\n            [ngClass]=\"{ 'is-invalid': submitted && f.ContactId.errors }\">\n            <option value=\"\">Please select</option>\n            <option *ngFor=\"let user of userModel\" [value]=\"user.ContactId\">{{user.FirstName}} {{user.LastName}}</option>\n            </select>\n\n        </div>\n\n        <div class=\"form-group\">\n            <label> Group</label>\n            <div class=\"checkbox-list\">\n                <div *ngFor=\"let group of groupsModel\">\n\n                    <input type=\"checkbox\"  [ngModelOptions]=\"{standalone: true}\" (change)=\"onChange(group.LTagId, $event.target.checked)\" [(ngModel)]=\"group.Checked\"> {{group.TagDescr}}<br>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/user-group/user-group.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/user-group/user-group.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-list {\n  padding: 5px;\n  border: 1px solid #b7b7b7;\n  width: 100%;\n  background-color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/layout/user-group/user-group.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/user-group/user-group.component.ts ***!
  \***********************************************************/
/*! exports provided: UserGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupComponent", function() { return UserGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserGroupComponent = /** @class */ (function () {
    function UserGroupComponent(formBuilder, router, alertService, httpTagsService, httpClientService, httpGroupService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.httpClientService = httpClientService;
        this.httpGroupService = httpGroupService;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
        this.groupsModel = [];
        this.userModel = [];
    }
    UserGroupComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.lTagsId = 0;
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagsId = Number(localStorage.getItem('lTagId'));
        this.getGroupList();
        this.getUsersByOrganizationId();
    };
    UserGroupComponent.prototype.buildForm = function () {
        this.userGroupForm = this.formBuilder.group({
            UserGroupIds: this.formBuilder.array([]),
            ContactId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(UserGroupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.userGroupForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserGroupComponent.prototype.onSubmit = function (userGroup) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userGroupForm.invalid) {
            return;
        }
        this.loading = true;
        this.httpGroupService.SaveUserGroup(userGroup)
            .subscribe(function (data) {
            _this.router.navigate(['./user-group']);
            _this.alertService.success('Group assign to user successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    UserGroupComponent.prototype.getGroupList = function () {
        var _this = this;
        var organizationId = Number(localStorage.getItem('organizationId'));
        this.httpTagsService.getTagByTypeAndOrganizationId('Groups', organizationId, true)
            .subscribe(function (group) {
            _this.groupsModel = group;
        });
    };
    UserGroupComponent.prototype.getUserGroupbyContactId = function (contactId) {
        var _this = this;
        this.httpGroupService.getUserGroupByContactId(contactId, true)
            .subscribe(function (userGroup) {
            _this.userGroupsModel = userGroup;
            var _loop_1 = function (group) {
                var usergroup = _this.userGroupsModel.filter(function (x) { return x.LGroupId == group.LTagId; })[0];
                group.Checked = usergroup && usergroup.LGroupId == group.LTagId ? true : false;
            };
            for (var _i = 0, _a = _this.groupsModel; _i < _a.length; _i++) {
                var group = _a[_i];
                _loop_1(group);
            }
        });
    };
    UserGroupComponent.prototype.getUsersByOrganizationId = function () {
        var _this = this;
        var organizationId = Number(localStorage.getItem('organizationId'));
        this.httpClientService.getUsersByOrganizationId(organizationId)
            .subscribe(function (data) {
            _this.userModel = data;
        });
    };
    UserGroupComponent.prototype.onContactChange = function (contactId) {
        this.getUserGroupbyContactId(contactId);
    };
    UserGroupComponent.prototype.onChange = function (groupId, isChecked) {
        var userGroupIdsArray = this.userGroupForm.controls.UserGroupIds;
        if (isChecked) {
            userGroupIdsArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](groupId));
        }
        else {
            var index = userGroupIdsArray.controls.findIndex(function (x) { return x.value == groupId; });
            userGroupIdsArray.removeAt(index);
        }
    };
    UserGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-group',
            template: __webpack_require__(/*! ./user-group.component.html */ "./src/app/layout/user-group/user-group.component.html"),
            styles: [__webpack_require__(/*! ./user-group.component.scss */ "./src/app/layout/user-group/user-group.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _services_clients_service__WEBPACK_IMPORTED_MODULE_5__["ClientsService"],
            _services_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"]])
    ], UserGroupComponent);
    return UserGroupComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-group/user-group.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/user-group/user-group.module.ts ***!
  \********************************************************/
/*! exports provided: UserGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupModule", function() { return UserGroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _user_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-group-routing.module */ "./src/app/layout/user-group/user-group-routing.module.ts");
/* harmony import */ var _user_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-group.component */ "./src/app/layout/user-group/user-group.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserGroupModule = /** @class */ (function () {
    function UserGroupModule() {
    }
    UserGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _user_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserGroupRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            declarations: [_user_group_component__WEBPACK_IMPORTED_MODULE_6__["UserGroupComponent"]]
        })
    ], UserGroupModule);
    return UserGroupModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-group-user-group-module.js.map