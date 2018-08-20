(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js ***!
  \*******************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵb, ɵc, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListItem = /** @class */ (function () {
    function ListItem(source) {
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
        }
    }
    return ListItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MultiSelectComponent; }),
    multi: true
};
var /** @type {?} */ noop = function () { };
var MultiSelectComponent = /** @class */ (function () {
    function MultiSelectComponent(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = false;
        this._placeholder = 'Select';
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'text',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: 'Search',
            closeDropDownOnSelection: false
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(MultiSelectComponent.prototype, "placeholder", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._placeholder = value;
            }
            else {
                this._placeholder = 'Select';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "settings", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._settings = Object.assign(this.defaultSettings, value);
            }
            else {
                this._settings = Object.assign(this.defaultSettings);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectComponent.prototype, "data", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this._data = [];
            }
            else {
                var /** @type {?} */ _items = value.filter(function (item) {
                    if (typeof item === 'string' || (typeof item === 'object' && item && item[_this._settings.idField] && item[_this._settings.textField])) {
                        return item;
                    }
                });
                this._data = _items.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField]
                        });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    MultiSelectComponent.prototype.onFilterTextChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.onFilterChange.emit($event);
    };
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.onItemClick = /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    function ($event, item) {
        if (this.disabled) {
            return false;
        }
        var /** @type {?} */ found = this.isSelected(item);
        var /** @type {?} */ allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MultiSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        var /** @type {?} */ firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === 'string'
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField]
                                })
                        ];
                    }
                }
                catch (/** @type {?} */ e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                var /** @type {?} */ _data = value.map(function (item) {
                    return typeof item === 'string'
                        ? new ListItem(item)
                        : new ListItem({
                            id: item[_this._settings.idField],
                            text: item[_this._settings.textField]
                        });
                });
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    };
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    MultiSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this.closeDropdown();
        this.onTouchedCallback();
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.trackByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.id;
    };
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    MultiSelectComponent.prototype.isSelected = /**
     * @param {?} clickedItem
     * @return {?}
     */
    function (clickedItem) {
        var /** @type {?} */ found = false;
        this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.isLimitSelectionReached = /**
     * @return {?}
     */
    function () {
        return this._settings.limitSelection === this.selectedItems.length;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.isAllItemsSelected = /**
     * @return {?}
     */
    function () {
        return this._data.length === this.selectedItems.length;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.showButton = /**
     * @return {?}
     */
    function () {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.itemShowRemaining = /**
     * @return {?}
     */
    function () {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MultiSelectComponent.prototype.addSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    };
    /**
     * @param {?} itemSel
     * @return {?}
     */
    MultiSelectComponent.prototype.removeSelected = /**
     * @param {?} itemSel
     * @return {?}
     */
    function (itemSel) {
        var _this = this;
        this.selectedItems.forEach(function (item) {
            if (itemSel.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MultiSelectComponent.prototype.emittedValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        var /** @type {?} */ selected = [];
        if (Array.isArray(val)) {
            val.map(function (item) {
                if (item.id === item.text) {
                    selected.push(item.text);
                }
                else {
                    selected.push(_this.objectify(item));
                }
            });
        }
        else {
            if (val) {
                if (val.id === val.text) {
                    return val.text;
                }
                else {
                    return this.objectify(val);
                }
            }
        }
        return selected;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MultiSelectComponent.prototype.objectify = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var /** @type {?} */ obj = {};
        obj[this._settings.idField] = val.id;
        obj[this._settings.textField] = val.text;
        return obj;
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    MultiSelectComponent.prototype.toggleDropdown = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this.isDropdownOpen = !this.isDropdownOpen;
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.closeDropdown = /**
     * @return {?}
     */
    function () {
        this.isDropdownOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = '';
        }
    };
    /**
     * @return {?}
     */
    MultiSelectComponent.prototype.toggleSelectAll = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            this.selectedItems = this._data.slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    };
    MultiSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ng-multiselect-dropdown',
                    template: "<div tabindex=\"=0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        {{item.text}}\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </span>\n      <span style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span [ngClass]=\"isDropdownOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!isDropdownOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"_data.length > 0 && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\"\n        class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"_settings.allowSearchFilter\">\n        <input type=\"text\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | ng2ListFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item))\"\n        />\n        <div>{{item.text}}</div>\n      </li>\n      <li *ngIf=\"_data.length == 0\">\n        <h5>No data available</h5>\n      </li>\n    </ul>\n  </div>\n</div>",
                    styles: [".multiselect-dropdown{position:relative;width:100%}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:'';color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:'';transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MultiSelectComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    MultiSelectComponent.propDecorators = {
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "settings": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onFilterChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onFilterChange',] },],
        "onSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelect',] },],
        "onDeSelect": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelect',] },],
        "onSelectAll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onSelectAll',] },],
        "onDeSelectAll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['onDeSelectAll',] },],
        "onTouched": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
    };
    return MultiSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    ClickOutsideDirective.propDecorators = {
        "clickOutside": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ListFilterPipe = /** @class */ (function () {
    function ListFilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    ListFilterPipe.prototype.applyFilter = /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    function (item, filter) {
        return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    };
    ListFilterPipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'ng2ListFilter',
                    pure: false
                },] },
    ];
    return ListFilterPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgMultiSelectDropDownModule = /** @class */ (function () {
    function NgMultiSelectDropDownModule() {
    }
    /**
     * @return {?}
     */
    NgMultiSelectDropDownModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgMultiSelectDropDownModule
        };
    };
    NgMultiSelectDropDownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
                    declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                    exports: [MultiSelectComponent]
                },] },
    ];
    return NgMultiSelectDropDownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbXVsdGlzZWxlY3QtZHJvcGRvd24uanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLW11bHRpc2VsZWN0LWRyb3Bkb3duL211bHRpc2VsZWN0Lm1vZGVsLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9tdWx0aXNlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL25nLW11bHRpc2VsZWN0LWRyb3Bkb3duL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9saXN0LWZpbHRlci5waXBlLnRzIiwibmc6Ly9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi9uZy1tdWx0aXNlbGVjdC1kcm9wZG93bi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpc3RJdGVtIHtcclxuICBpZDogU3RyaW5nO1xyXG4gIHRleHQ6IFN0cmluZztcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHNvdXJjZTogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5pZCA9IHRoaXMudGV4dCA9IHNvdXJjZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc291cmNlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB0aGlzLmlkID0gc291cmNlLmlkO1xyXG4gICAgICB0aGlzLnRleHQgPSBzb3VyY2UudGV4dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE15RXhjZXB0aW9uIHtcclxuICBzdGF0dXM6IG51bWJlcjtcclxuICBib2R5OiBhbnk7XHJcbiAgY29uc3RydWN0b3Ioc3RhdHVzOiBudW1iZXIsIGJvZHk6IGFueSkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICcuL211bHRpc2VsZWN0Lm1vZGVsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25TZXR0aW5ncyB7XHJcbiAgc2luZ2xlU2VsZWN0aW9uOiBib29sZWFuO1xyXG4gIGlkRmllbGQ/OiBzdHJpbmc7XHJcbiAgdGV4dEZpZWxkPzogc3RyaW5nO1xyXG4gIGVuYWJsZUNoZWNrQWxsOiBib29sZWFuO1xyXG4gIHNlbGVjdEFsbFRleHQ/OiBzdHJpbmc7XHJcbiAgdW5TZWxlY3RBbGxUZXh0Pzogc3RyaW5nO1xyXG4gIGFsbG93U2VhcmNoRmlsdGVyPzogYm9vbGVhbjtcclxuICBjbGVhclNlYXJjaEZpbHRlcj86IGJvb2xlYW47XHJcbiAgbWF4SGVpZ2h0PzogbnVtYmVyO1xyXG4gIGl0ZW1zU2hvd0xpbWl0PzogbnVtYmVyO1xyXG4gIGxpbWl0U2VsZWN0aW9uPzogbnVtYmVyO1xyXG4gIHNlYXJjaFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcclxuICBjbG9zZURyb3BEb3duT25TZWxlY3Rpb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRFJPUERPV05fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE11bHRpU2VsZWN0Q29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLW11bHRpc2VsZWN0LWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgdGFiaW5kZXg9XCI9MFwiIChibHVyKT1cIm9uVG91Y2hlZCgpXCIgY2xhc3M9XCJtdWx0aXNlbGVjdC1kcm9wZG93blwiIChjbGlja091dHNpZGUpPVwiY2xvc2VEcm9wZG93bigpXCI+XHJcbiAgPGRpdiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgIDxzcGFuIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cImRyb3Bkb3duLWJ0blwiIChjbGljayk9XCJ0b2dnbGVEcm9wZG93bigkZXZlbnQpXCI+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwic2VsZWN0ZWRJdGVtcy5sZW5ndGggPT0gMFwiPnt7X3BsYWNlaG9sZGVyfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0ZWQtaXRlbVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdGVkSXRlbXM7dHJhY2tCeTogdHJhY2tCeUZuO2xldCBrID0gaW5kZXhcIiBbaGlkZGVuXT1cImsgPiBfc2V0dGluZ3MuaXRlbXNTaG93TGltaXQtMVwiPlxyXG4gICAgICAgIHt7aXRlbS50ZXh0fX1cclxuICAgICAgICA8YSBzdHlsZT1cInBhZGRpbmctdG9wOjJweDtwYWRkaW5nLWxlZnQ6MnB4O2NvbG9yOndoaXRlXCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxpdGVtKVwiPng8L2E+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodCAhaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6NHB4XCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA2cHg7XCIgKm5nSWY9XCJpdGVtU2hvd1JlbWFpbmluZygpPjBcIj4re3tpdGVtU2hvd1JlbWFpbmluZygpfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwiaXNEcm9wZG93bk9wZW4gPyAnZHJvcGRvd24tdXAnIDogJ2Ryb3Bkb3duLWRvd24nXCI+PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWxpc3RcIiBbaGlkZGVuXT1cIiFpc0Ryb3Bkb3duT3BlblwiPlxyXG4gICAgPHVsIGNsYXNzPVwiaXRlbTFcIj5cclxuICAgICAgPGxpIChjbGljayk9XCJ0b2dnbGVTZWxlY3RBbGwoKVwiICpuZ0lmPVwiX2RhdGEubGVuZ3RoID4gMCAmJiAhX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbiAmJiBfc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgJiYgX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uPT09LTFcIlxyXG4gICAgICAgIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveFwiIHN0eWxlPVwiYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7cGFkZGluZzoxMHB4XCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtjaGVja2VkXT1cImlzQWxsSXRlbXNTZWxlY3RlZCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkIHx8IGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKClcIiAvPlxyXG4gICAgICAgIDxkaXY+e3shaXNBbGxJdGVtc1NlbGVjdGVkKCkgPyBfc2V0dGluZ3Muc2VsZWN0QWxsVGV4dCA6IF9zZXR0aW5ncy51blNlbGVjdEFsbFRleHR9fTwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItdGV4dGJveFwiICpuZ0lmPVwiX3NldHRpbmdzLmFsbG93U2VhcmNoRmlsdGVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3JlYWRPbmx5XT1cImRpc2FibGVkXCIgW3BsYWNlaG9sZGVyXT1cIl9zZXR0aW5ncy5zZWFyY2hQbGFjZWhvbGRlclRleHRcIiBbKG5nTW9kZWwpXT1cImZpbHRlci50ZXh0XCIgKG5nTW9kZWxDaGFuZ2UpPVwib25GaWx0ZXJUZXh0Q2hhbmdlKCRldmVudClcIj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgY2xhc3M9XCJpdGVtMlwiIFtzdHlsZS5tYXhIZWlnaHRdPVwiX3NldHRpbmdzLm1heEhlaWdodCsncHgnXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZGF0YSB8IG5nMkxpc3RGaWx0ZXI6ZmlsdGVyOyBsZXQgaSA9IGluZGV4O1wiIChjbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQsaXRlbSlcIiBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3hcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2NoZWNrZWRdPVwiaXNTZWxlY3RlZChpdGVtKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCAoaXNMaW1pdFNlbGVjdGlvblJlYWNoZWQoKSAmJiAhaXNTZWxlY3RlZChpdGVtKSlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj57e2l0ZW0udGV4dH19PC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSAqbmdJZj1cIl9kYXRhLmxlbmd0aCA9PSAwXCI+XHJcbiAgICAgICAgPGg1Pk5vIGRhdGEgYXZhaWxhYmxlPC9oNT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYC5tdWx0aXNlbGVjdC1kcm9wZG93bntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2FkYWRhZDt3aWR0aDoxMDAlO3BhZGRpbmc6NnB4IDEycHg7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjUyODU3MTQzO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1pbWFnZTpub25lO2JvcmRlci1yYWRpdXM6NHB4fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVte2JvcmRlcjoxcHggc29saWQgIzMzN2FiNzttYXJnaW4tcmlnaHQ6NHB4O2JhY2tncm91bmQ6IzMzN2FiNztwYWRkaW5nOjAgNXB4O2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7ZmxvYXQ6bGVmdH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5zZWxlY3RlZC1pdGVtOmhvdmVye2JveC1zaGFkb3c6MXB4IDFweCAjOTU5NTk1fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIC5kcm9wZG93bi1kb3due2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RvcDoxMHB4O3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICNhZGFkYWQ7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuZHJvcGRvd24tdXB7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXItYm90dG9tOjEwcHggc29saWQgI2FkYWRhZDtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50fS5tdWx0aXNlbGVjdC1kcm9wZG93biAuZGlzYWJsZWQ+c3BhbntiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWZ9LmRyb3Bkb3duLWxpc3R7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZy10b3A6NnB4O3dpZHRoOjEwMCU7ei1pbmRleDo5OTk5O2JvcmRlcjoxcHggc29saWQgI2NjYztib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luLXRvcDoxMHB4O2JveC1zaGFkb3c6MCAxcHggNXB4ICM5NTk1OTV9LmRyb3Bkb3duLWxpc3QgdWx7cGFkZGluZzowO2xpc3Qtc3R5bGU6bm9uZTtvdmVyZmxvdzphdXRvO21hcmdpbjowfS5kcm9wZG93bi1saXN0IGxpe3BhZGRpbmc6NnB4IDEwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fS5kcm9wZG93bi1saXN0IC5maWx0ZXItdGV4dGJveHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTBweH0uZHJvcGRvd24tbGlzdCAuZmlsdGVyLXRleHRib3ggaW5wdXR7Ym9yZGVyOjA7d2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAwIDI2cHh9LmRyb3Bkb3duLWxpc3QgLmZpbHRlci10ZXh0Ym94IGlucHV0OmZvY3Vze291dGxpbmU6MH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XXtib3JkZXI6MDtjbGlwOnJlY3QoMCAwIDAgMCk7aGVpZ2h0OjFweDttYXJnaW46LTFweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweH0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1cytkaXY6YmVmb3JlLC5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmhvdmVyK2RpdjpiZWZvcmV7Ym9yZGVyLWNvbG9yOiMzMzdhYjc7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmFjdGl2ZStkaXY6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246MHN9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF0rZGl2e3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmctbGVmdDoyZW07dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjdXJzb3I6cG9pbnRlcjttYXJnaW46MDtjb2xvcjojMDAwfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjpiZWZvcmV7Ym94LXNpemluZzpjb250ZW50LWJveDtjb250ZW50OicnO2NvbG9yOiMzMzdhYjc7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7d2lkdGg6MTRweDtoZWlnaHQ6MTRweDttYXJnaW4tdG9wOi05cHg7Ym9yZGVyOjJweCBzb2xpZCAjMzM3YWI3O3RleHQtYWxpZ246Y2VudGVyO3RyYW5zaXRpb246YWxsIC40cyBlYXNlfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdK2RpdjphZnRlcntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCU7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dCwtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0b3A6NTAlO2xlZnQ6NHB4O3dpZHRoOjhweDtoZWlnaHQ6M3B4O21hcmdpbi10b3A6LTRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOiNmZmY7Ym9yZGVyLXdpZHRoOjAgMCAzcHggM3B4Oy1vLWJvcmRlci1pbWFnZTpub25lO2JvcmRlci1pbWFnZTpub25lOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpkaXNhYmxlZCtkaXY6YmVmb3Jle2JvcmRlci1jb2xvcjojY2NjfS5tdWx0aXNlbGVjdC1pdGVtLWNoZWNrYm94IGlucHV0W3R5cGU9Y2hlY2tib3hdOmRpc2FibGVkOmZvY3VzK2RpdjpiZWZvcmUgLm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6aG92ZXIrZGl2OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXR9Lm11bHRpc2VsZWN0LWl0ZW0tY2hlY2tib3ggaW5wdXRbdHlwZT1jaGVja2JveF06ZGlzYWJsZWQ6Y2hlY2tlZCtkaXY6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2NjY30ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjphZnRlcntjb250ZW50OicnO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O3RyYW5zaXRpb246dHJhbnNmb3JtIC4ycyBlYXNlLW91dDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKX0ubXVsdGlzZWxlY3QtaXRlbS1jaGVja2JveCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkK2RpdjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246LjJzIGVhc2UtaW4gYm9yZGVyc2NhbGU7YW5pbWF0aW9uOi4ycyBlYXNlLWluIGJvcmRlcnNjYWxlO2JhY2tncm91bmQ6IzMzN2FiN31ALXdlYmtpdC1rZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fUBrZXlmcmFtZXMgYm9yZGVyc2NhbGV7NTAle2JveC1zaGFkb3c6MCAwIDAgMnB4ICMzMzdhYjd9fWBdLFxyXG4gIHByb3ZpZGVyczogW0RST1BET1dOX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBwdWJsaWMgX3NldHRpbmdzOiBEcm9wZG93blNldHRpbmdzO1xyXG4gIHB1YmxpYyBfZGF0YTogQXJyYXk8TGlzdEl0ZW0+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGVkSXRlbXM6IEFycmF5PExpc3RJdGVtPiA9IFtdO1xyXG4gIHB1YmxpYyBpc0Ryb3Bkb3duT3BlbiA9IGZhbHNlO1xyXG4gIF9wbGFjZWhvbGRlciA9ICdTZWxlY3QnO1xyXG4gIGZpbHRlcjogTGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0odGhpcy5kYXRhKTtcclxuICBkZWZhdWx0U2V0dGluZ3M6IERyb3Bkb3duU2V0dGluZ3MgPSB7XHJcbiAgICBzaW5nbGVTZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgaWRGaWVsZDogJ2lkJyxcclxuICAgIHRleHRGaWVsZDogJ3RleHQnLFxyXG4gICAgZW5hYmxlQ2hlY2tBbGw6IHRydWUsXHJcbiAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgYWxsb3dTZWFyY2hGaWx0ZXI6IGZhbHNlLFxyXG4gICAgbGltaXRTZWxlY3Rpb246IC0xLFxyXG4gICAgY2xlYXJTZWFyY2hGaWx0ZXI6IHRydWUsXHJcbiAgICBtYXhIZWlnaHQ6IDE5NyxcclxuICAgIGl0ZW1zU2hvd0xpbWl0OiA5OTk5OTk5OTk5OTksXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlclRleHQ6ICdTZWFyY2gnLFxyXG4gICAgY2xvc2VEcm9wRG93bk9uU2VsZWN0aW9uOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gJ1NlbGVjdCc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzZXR0aW5ncyh2YWx1ZTogRHJvcGRvd25TZXR0aW5ncykge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRTZXR0aW5ncywgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdFNldHRpbmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBkYXRhKHZhbHVlOiBBcnJheTxhbnk+KSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF9pdGVtcyA9IHZhbHVlLmZpbHRlcigoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyB8fCAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgaXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSAmJiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9kYXRhID0gX2l0ZW1zLm1hcChcclxuICAgICAgICAoaXRlbTogYW55KSA9PlxyXG4gICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgID8gbmV3IExpc3RJdGVtKGl0ZW0pXHJcbiAgICAgICAgICAgIDogbmV3IExpc3RJdGVtKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbVt0aGlzLl9zZXR0aW5ncy50ZXh0RmllbGRdXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoJ29uRmlsdGVyQ2hhbmdlJykgb25GaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxMaXN0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25TZWxlY3QnKSBvblNlbGVjdDogRXZlbnRFbWl0dGVyPExpc3RJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdvbkRlU2VsZWN0Jykgb25EZVNlbGVjdDogRXZlbnRFbWl0dGVyPExpc3RJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAT3V0cHV0KCdvblNlbGVjdEFsbCcpIG9uU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8QXJyYXk8TGlzdEl0ZW0+PiA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcclxuXHJcbiAgQE91dHB1dCgnb25EZVNlbGVjdEFsbCcpIG9uRGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxBcnJheTxMaXN0SXRlbT4+ID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xyXG5cclxuICBwcml2YXRlIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcclxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICBvbkZpbHRlclRleHRDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgb25JdGVtQ2xpY2soJGV2ZW50OiBhbnksIGl0ZW06IExpc3RJdGVtKSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLmlzU2VsZWN0ZWQoaXRlbSk7XHJcbiAgICBjb25zdCBhbGxvd0FkZCA9IHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSAtMSB8fCAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwICYmIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPCB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbik7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGlmIChhbGxvd0FkZCkge1xyXG4gICAgICAgIHRoaXMuYWRkU2VsZWN0ZWQoaXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmNsb3NlRHJvcERvd25PblNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW1xyXG4gICAgICAgICAgICAgIHR5cGVvZiBmaXJzdEl0ZW0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBMaXN0SXRlbShmaXJzdEl0ZW0pXHJcbiAgICAgICAgICAgICAgICA6IG5ldyBMaXN0SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpcnN0SXRlbVt0aGlzLl9zZXR0aW5ncy5pZEZpZWxkXSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmaXJzdEl0ZW1bdGhpcy5fc2V0dGluZ3MudGV4dEZpZWxkXVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZS5ib2R5Lm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gdmFsdWUubWFwKFxyXG4gICAgICAgICAgKGl0ZW06IGFueSkgPT5cclxuICAgICAgICAgICAgdHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgPyBuZXcgTGlzdEl0ZW0oaXRlbSlcclxuICAgICAgICAgICAgICA6IG5ldyBMaXN0SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiBpdGVtW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdLFxyXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBfZGF0YS5zcGxpY2UoMCwgdGhpcy5fc2V0dGluZ3MubGltaXRTZWxlY3Rpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBfZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICB9XHJcblxyXG4gIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIHB1YmxpYyBvblRvdWNoZWQoKSB7XHJcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKGNsaWNrZWRJdGVtOiBMaXN0SXRlbSkge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGNsaWNrZWRJdGVtLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3VuZDtcclxuICB9XHJcblxyXG4gIGlzTGltaXRTZWxlY3Rpb25SZWFjaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLmxpbWl0U2VsZWN0aW9uID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxJdGVtc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J1dHRvbigpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA+IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy5fc2V0dGluZ3MuZW5hYmxlQ2hlY2tBbGwgPSB0aGlzLl9zZXR0aW5ncy5saW1pdFNlbGVjdGlvbiA9PT0gLTEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyAhdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uICYmIHRoaXMuX3NldHRpbmdzLmVuYWJsZUNoZWNrQWxsICYmIHRoaXMuX2RhdGEubGVuZ3RoID4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHNob3VsZCBiZSBkaXNhYmxlZCBpbiBzaW5nbGUgc2VsZWN0aW9uIG1vZGVcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXRlbVNob3dSZW1haW5pbmcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gdGhpcy5fc2V0dGluZ3MuaXRlbXNTaG93TGltaXQ7XHJcbiAgfVxyXG5cclxuICBhZGRTZWxlY3RlZChpdGVtOiBMaXN0SXRlbSkge1xyXG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLnNpbmdsZVNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcclxuICAgIHRoaXMub25TZWxlY3QuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZShpdGVtKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZChpdGVtU2VsOiBMaXN0SXRlbSkge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtU2VsLmlkID09PSBpdGVtLmlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZSh0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZW1pdHRlZFZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtcykpO1xyXG4gICAgdGhpcy5vbkRlU2VsZWN0LmVtaXQodGhpcy5lbWl0dGVkVmFsdWUoaXRlbVNlbCkpO1xyXG4gIH1cclxuXHJcbiAgZW1pdHRlZFZhbHVlKHZhbDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gW107XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIHZhbC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGl0ZW0udGV4dCkge1xyXG4gICAgICAgICAgc2VsZWN0ZWQucHVzaChpdGVtLnRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZWxlY3RlZC5wdXNoKHRoaXMub2JqZWN0aWZ5KGl0ZW0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIGlmICh2YWwuaWQgPT09IHZhbC50ZXh0KSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsLnRleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdGlmeSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgb2JqZWN0aWZ5KHZhbDogTGlzdEl0ZW0pIHtcclxuICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLmlkRmllbGRdID0gdmFsLmlkO1xyXG4gICAgb2JqW3RoaXMuX3NldHRpbmdzLnRleHRGaWVsZF0gPSB2YWwudGV4dDtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wZG93bihldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5fc2V0dGluZ3Muc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSAhdGhpcy5pc0Ryb3Bkb3duT3BlbjtcclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICAvLyBjbGVhciBzZWFyY2ggdGV4dFxyXG4gICAgaWYgKHRoaXMuX3NldHRpbmdzLmNsZWFyU2VhcmNoRmlsdGVyKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyLnRleHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5pc0FsbEl0ZW1zU2VsZWN0ZWQoKSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLl9kYXRhLnNsaWNlKCk7XHJcbiAgICAgIHRoaXMub25TZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLm9uRGVTZWxlY3RBbGwuZW1pdCh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcclxuICAgIH1cclxuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLmVtaXR0ZWRWYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbXMpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tjbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXHJcbiAgICBwdWJsaWMgb25DbGljayhldmVudDogTW91c2VFdmVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcclxuICAgICAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnLi9tdWx0aXNlbGVjdC5tb2RlbCc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnbmcyTGlzdEZpbHRlcicsXHJcbiAgICBwdXJlOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpdGVtczogTGlzdEl0ZW1bXSwgZmlsdGVyOiBMaXN0SXRlbSk6IExpc3RJdGVtW10ge1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgIWZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW06IExpc3RJdGVtKSA9PiB0aGlzLmFwcGx5RmlsdGVyKGl0ZW0sIGZpbHRlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVyKGl0ZW06IExpc3RJdGVtLCBmaWx0ZXI6IExpc3RJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEoZmlsdGVyLnRleHQgJiYgaXRlbS50ZXh0ICYmIGl0ZW0udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRleHQudG9Mb3dlckNhc2UoKSkgPT09IC0xKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZURpcmVjdGl2ZSB9IGZyb20gJy4vY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMaXN0RmlsdGVyUGlwZSB9IGZyb20gJy4vbGlzdC1maWx0ZXIucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtNdWx0aVNlbGVjdENvbXBvbmVudCwgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlLCBMaXN0RmlsdGVyUGlwZV0sXHJcbiAgZXhwb3J0czogW011bHRpU2VsZWN0Q29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5nTXVsdGlTZWxlY3REcm9wRG93bk1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuZ01vZHVsZTogTmdNdWx0aVNlbGVjdERyb3BEb3duTW9kdWxlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBQTtzQkFJcUIsTUFBVztRQUM1QixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN6Qjs7bUJBWEw7SUFhQyxDQUFBOzs7Ozs7QUNiRCxxQkE2QmEsK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsR0FBQSxDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUNGLHFCQUFNLElBQUksR0FBRyxlQUFRLENBQUM7O0lBOEhwQiw4QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7cUJBL0VWLEVBQUU7NkJBQ00sRUFBRTs4QkFDbEIsS0FBSzs0QkFDZCxRQUFRO3NCQUNKLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7K0JBQ047WUFDbEMsZUFBZSxFQUFFLEtBQUs7WUFDdEIsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsTUFBTTtZQUNqQixjQUFjLEVBQUUsSUFBSTtZQUNwQixhQUFhLEVBQUUsWUFBWTtZQUMzQixlQUFlLEVBQUUsY0FBYztZQUMvQixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixTQUFTLEVBQUUsR0FBRztZQUNkLGNBQWMsRUFBRSxZQUFZO1lBQzVCLHFCQUFxQixFQUFFLFFBQVE7WUFDL0Isd0JBQXdCLEVBQUUsS0FBSztTQUNoQzt3QkFVbUIsS0FBSzs4QkFpQzBDLElBQUksWUFBWSxFQUFPO3dCQUVuQyxJQUFJLFlBQVksRUFBTzswQkFFbkIsSUFBSSxZQUFZLEVBQU87MkJBRWQsSUFBSSxZQUFZLEVBQWM7NkJBRTFCLElBQUksWUFBWSxFQUFjO2lDQUU5RCxJQUFJO2dDQUNDLElBQUk7S0FNSDswQkF6RG5DLDZDQUFXOzs7OztrQkFBQyxLQUFhO1lBQ2xDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO2FBQzlCOzs7OzswQkFLUSwwQ0FBUTs7Ozs7a0JBQUMsS0FBdUI7WUFDekMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDN0Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUN0RDs7Ozs7MEJBSVEsc0NBQUk7Ozs7O2tCQUFDLEtBQWlCOztZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLHFCQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUztvQkFDcEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEtBQUssT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO3dCQUNwSSxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUNyQixVQUFDLElBQVM7b0JBQ1IsT0FBQSxPQUFPLElBQUksS0FBSyxRQUFROzBCQUNwQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7MEJBQ2xCLElBQUksUUFBUSxDQUFDOzRCQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7NEJBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7eUJBQ3JDLENBQUM7aUJBQUEsQ0FDVCxDQUFDO2FBQ0g7Ozs7Ozs7OztJQWdCSCxpREFBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBTTtRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQzs7Ozs7O0lBSUQsMENBQVc7Ozs7O0lBQVgsVUFBWSxNQUFXLEVBQUUsSUFBYztRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMxSixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixFQUFFO1lBQzdFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQXJCLGlCQXNDQztRQXJDQyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO2dCQUNsQyxJQUFJO29CQUNGLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ3JCLHFCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUc7NEJBQ25CLE9BQU8sU0FBUyxLQUFLLFFBQVE7a0NBQ3pCLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQztrQ0FDdkIsSUFBSSxRQUFRLENBQUM7b0NBQ1gsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztvQ0FDckMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztpQ0FDMUMsQ0FBQzt5QkFDUCxDQUFDO3FCQUNIO2lCQUNGO2dCQUFDLHdCQUFPLENBQUMsRUFBRTs7aUJBRVg7YUFDRjtpQkFBTTtnQkFDTCxxQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FDckIsVUFBQyxJQUFTO29CQUNSLE9BQUEsT0FBTyxJQUFJLEtBQUssUUFBUTswQkFDcEIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDOzBCQUNsQixJQUFJLFFBQVEsQ0FBQzs0QkFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDOzRCQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO3lCQUNyQyxDQUFDO2lCQUFBLENBQ1QsQ0FBQztnQkFDRixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNyRTtxQkFBTTtvQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztpQkFDNUI7YUFDRjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5Qjs7Ozs7O0lBR0QsK0NBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7O0lBR0QsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztLQUM3Qjs7OztJQUlNLHdDQUFTOzs7O1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOzs7Ozs7O0lBRzNCLHdDQUFTOzs7OztJQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFDbkIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7OztJQUVELHlDQUFVOzs7O0lBQVYsVUFBVyxXQUFxQjtRQUM5QixxQkFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM3QixJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7S0FDZDs7OztJQUVELHNEQUF1Qjs7O0lBQXZCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUNwRTs7OztJQUVELGlEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztLQUN4RDs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtnQkFDckMsT0FBTyxLQUFLLENBQUM7YUFDZDs7WUFFRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07O1lBRUwsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGOzs7O0lBRUQsZ0RBQWlCOzs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0tBQ2xFOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxJQUFjO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVELDZDQUFjOzs7O0lBQWQsVUFBZSxPQUFpQjtRQUFoQyxpQkFRQztRQVBDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtZQUM3QixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEU7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDbEQ7Ozs7O0lBRUQsMkNBQVk7Ozs7SUFBWixVQUFhLEdBQVE7UUFBckIsaUJBb0JDO1FBbkJDLHFCQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO2dCQUNWLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksR0FBRyxFQUFFO2dCQUNQLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxRQUFRLENBQUM7S0FDakI7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEdBQWE7UUFDckIscUJBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDckMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QyxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7OztJQUVELDZDQUFjOzs7O0lBQWQsVUFBZSxHQUFHO1FBQ2hCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUU7WUFDbkQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUM7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7UUFFNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsOENBQWU7OztJQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztLQUM5RDs7Z0JBL1RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsMndFQW9DTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxnK0hBQWcrSCxDQUFDO29CQUMxK0gsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF0RUMsaUJBQWlCOzs7Z0NBOEZoQixLQUFLOzZCQVFMLEtBQUs7NkJBRUwsS0FBSzt5QkFTTCxLQUFLO21DQXNCTCxNQUFNLFNBQUMsZ0JBQWdCOzZCQUV2QixNQUFNLFNBQUMsVUFBVTsrQkFFakIsTUFBTSxTQUFDLFlBQVk7Z0NBRW5CLE1BQU0sU0FBQyxhQUFhO2tDQUVwQixNQUFNLFNBQUMsZUFBZTs4QkFpRnRCLFlBQVksU0FBQyxNQUFNOzsrQkF4T3RCOzs7Ozs7O0FDQUE7SUFNSSwrQkFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7NEJBSXJCLElBQUksWUFBWSxFQUFjO0tBSG5EOzs7Ozs7SUFNTSx1Q0FBTzs7Ozs7Y0FBQyxLQUFpQixFQUFFLGFBQTBCO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBRUQscUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7Z0JBbkJSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs7OztnQkFKa0IsVUFBVTs7O2lDQVN4QixNQUFNOzRCQUdOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7O2dDQVovRDs7Ozs7OztBQ0FBOzs7Ozs7OztJQVNJLGtDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxNQUFnQjtRQUE3QyxpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFjLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBQSxDQUFDLENBQUM7S0FDM0U7Ozs7OztJQUVELG9DQUFXOzs7OztJQUFYLFVBQVksSUFBYyxFQUFFLE1BQWdCO1FBQ3hDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0c7O2dCQWRKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsZUFBZTtvQkFDckIsSUFBSSxFQUFFLEtBQUs7aUJBQ2Q7O3lCQVBEOzs7Ozs7O0FDQUE7Ozs7OztJQWNXLG1DQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDLENBQUM7S0FDSDs7Z0JBWEosUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBQ3BDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLGNBQWMsQ0FBQztvQkFDM0UsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2hDOztzQ0FYRDs7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./src/app/directives/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/directives/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  [@visibilityChanged]=\"visiblityState\"  *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}} <a  (click)=\"close()\" class=\"close\">×</a></div>\r\n"

/***/ }),

/***/ "./src/app/directives/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.visiblityState = 'shown';
    }
    AlertComponent.prototype.toggle = function () {
        if (this.visiblityState === 'hidden')
            this.visiblityState = 'hidden';
        else
            this.visiblityState = 'shown';
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
            _this.visiblityState = 'shown';
            setTimeout(function () {
                _this.visiblityState = 'hidden';
                _this.message = '';
            }, 2000);
        });
    };
    AlertComponent.prototype.close = function () {
        this.visiblityState = 'hidden';
        this.message = '';
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directives/alert.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibilityChanged', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/directives/index.ts":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button mat-button class=\"primary-button\" [id]=\"'btnPrimary-' + id\" [style.width.%]=\"width\"><ng-content></ng-content></button>\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-button {\n  height: 46px;\n  color: #ffffff;\n  border-radius: 23px;\n  background-color: #ba25b2;\n  font-size: 18px;\n  min-width: unset;\n  cursor: pointer; }\n\n.mat-button {\n  min-width: 120px; }\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.ts ***!
  \********************************************************************************/
/*! exports provided: PaButtonPrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaButtonPrimaryComponent", function() { return PaButtonPrimaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaButtonPrimaryComponent = /** @class */ (function () {
    function PaButtonPrimaryComponent() {
        this.id = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaButtonPrimaryComponent.prototype, "width", void 0);
    PaButtonPrimaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pa-button-primary',
            template: __webpack_require__(/*! ./pa-button-primary.component.html */ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.html"),
            styles: [__webpack_require__(/*! ./pa-button-primary.component.scss */ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaButtonPrimaryComponent);
    return PaButtonPrimaryComponent;
}());



/***/ }),

/***/ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pa-modal #modal dialogName=\"{{dialogName}}\" [hideHeaderAndFooter]=\"true\" (modalClosed)=\"modal.resolve()\">\r\n  <div class=\"modal-overlay\"></div>\r\n  <div content class=\"modal-content\">\r\n      <div class=\"alert-text\">\r\n          <!--<div class=\"icon\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></div>-->\r\n        <div class=\"header-message\">{{headerMessage}}</div>\r\n          <br/>\r\n        <div class=\"inner-message\">{{innerMessage}}</div>\r\n      </div>\r\n\r\n      <div class=\"buttons\">\r\n        <pa-button-primary id=\"delete-observation-delete-button\" (click)=\"onDeleteButton()\" class=\"deleteButton\">Yes</pa-button-primary >\r\n\r\n        <button (click)= \"onCancelButton()\" id=\"delete-observation-cancel-button\" class=\"cancel-button\">No</button>\r\n\r\n      </div>\r\n  </div>\r\n</pa-modal>\r\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  color: #7e6787;\n  width: 499px;\n  max-width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-color: #ffffff;\n  font-family: Roboto, sans-serif;\n  position: relative;\n  z-index: 999;\n  margin: auto;\n  border: none; }\n\n.icon {\n  font-size: 100px;\n  color: #f1af2c;\n  padding-top: 10px; }\n\n.buttons {\n  padding-top: 15px;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\n.alert-text {\n  text-align: center;\n  padding-bottom: 10px; }\n\n.header-message {\n  font-size: 30px;\n  margin-top: 6px; }\n\n.inner-message {\n  white-space: pre-wrap;\n  font-size: medium; }\n\n/deep/.primary-button {\n  background: #a21111 !important;\n  color: #fff !important;\n  font-size: 16px !important;\n  border-radius: 0 !important;\n  border: none;\n  width: 150px;\n  cursor: pointer; }\n\n.cancel-button {\n  width: 150px;\n  height: 46px;\n  border: none;\n  cursor: pointer;\n  background: #0d587d;\n  color: #fff;\n  font-size: 16px;\n  margin-left: 10px; }\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #320d42;\n  opacity: 0.7;\n  z-index: 998; }\n\n/deep/.modal {\n  height: 240px !important;\n  top: 0px !important; }\n\n/deep/.modal-body {\n  height: auto !important; }\n\n@media (min-width: 993px) and (max-width: 1424px) {\n  /deep/.modal {\n    max-width: 41% !important; } }\n\n@media (max-width: 992px) {\n  /deep/.modal {\n    max-width: 50% !important; } }\n\n@media (max-width: 684px) {\n  /deep/.modal {\n    max-width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PaDeleteConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaDeleteConfirmationModalComponent", function() { return PaDeleteConfirmationModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pa-modal/pa-modal.component */ "./src/app/layout/Shared/pa-modal/pa-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaDeleteConfirmationModalComponent = /** @class */ (function () {
    function PaDeleteConfirmationModalComponent() {
    }
    PaDeleteConfirmationModalComponent.prototype.onCancelButton = function () {
        this.modal.resolve(false);
    };
    PaDeleteConfirmationModalComponent.prototype.onDeleteButton = function () {
        this.modal.resolve(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"])
    ], PaDeleteConfirmationModalComponent.prototype, "draftObservationId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaDeleteConfirmationModalComponent.prototype, "headerMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaDeleteConfirmationModalComponent.prototype, "innerMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaDeleteConfirmationModalComponent.prototype, "dialogName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_2__["PaModalComponent"])
    ], PaDeleteConfirmationModalComponent.prototype, "modal", void 0);
    PaDeleteConfirmationModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pa-delete-confirmation-modal-component',
            template: __webpack_require__(/*! ./pa-delete-confirmation-modal-component.html */ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.html"),
            styles: [__webpack_require__(/*! ./pa-delete-confirmation-modal-component.scss */ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.scss")],
        })
    ], PaDeleteConfirmationModalComponent);
    return PaDeleteConfirmationModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/Shared/pa-golfball-checklist/Golfball.model.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/Shared/pa-golfball-checklist/Golfball.model.ts ***!
  \***********************************************************************/
/*! exports provided: Golfball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Golfball", function() { return Golfball; });
var Golfball = /** @class */ (function () {
    function Golfball(stage, label, complete, current) {
        this.stage = stage;
        this.label = label;
        this.complete = complete;
        this.current = current;
    }
    return Golfball;
}());



/***/ }),

/***/ "./src/app/layout/Shared/pa-modal/pa-modal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/Shared/pa-modal/pa-modal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isShown\">\n  <div class=\"modal-overlay\"></div>\n  <div class=\"{{modalDesign}}\">\n    <div class=\"modal-header\" [hidden]=\"hideHeaderAndFooter\">\n\n    <span class=\"title\">\n      {{titleText}}\n    </span>\n  <!--<div *ngIf=\"widePillTextTitle && widePillTextTitle.length > 0\" class=\"wide-pill-margin\">-->\n    <!--<pa-wide-pill [class]=\"class\"   [textTitle]=\"widePillTextTitle\" [subTitle]=\"widePillSubTitle\" [iconClass]=\"widePillIconClass\"></pa-wide-pill>-->\n  <!--</div>-->\n\n  <span class=\"cross fa fa-times\" [id]=\"titleText + ' modal close'\" (click)=\"closeModal()\"></span>\n\n\n      <div class=\"clear\"></div>\n    </div>\n    <div class=\"{{modalBodyCss}}\">\n      <ng-content select=\"[content]\"></ng-content>\n    </div>\n    <div class=\"modal-footer\" [hidden]=\"hideHeaderAndFooter\">\n      <ng-content select=\"[footer]\"></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-modal/pa-modal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/Shared/pa-modal/pa-modal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #320d42;\n  opacity: 0.7;\n  z-index: 998; }\n\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-height: 100px;\n  max-width: 24%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  margin: auto;\n  border-radius: 10px;\n  background-color: #ffffff;\n  z-index: 999;\n  display: inline-block;\n  height: 390px; }\n\n.full-modal {\n  padding: 10px;\n  position: fixed;\n  top: 50%;\n  left: 40%;\n  min-height: 100px;\n  width: 65%;\n  -webkit-transform: translate(-25%, -50%);\n          transform: translate(-25%, -50%);\n  margin: auto;\n  border-radius: 10px;\n  background-color: #ffffff;\n  z-index: 999;\n  display: inline-block;\n  max-height: 514px; }\n\n.modal-header {\n  border-bottom: solid 1px #dcd0e2; }\n\n.title {\n  font-size: 30px;\n  font-weight: 300;\n  height: 82px;\n  line-height: 82px;\n  text-align: left;\n  color: #595959;\n  margin-left: 30px;\n  float: left; }\n\n.cross {\n  font-size: 24px;\n  color: #a98ab6;\n  cursor: pointer;\n  float: right;\n  margin-right: 30px;\n  line-height: 82px; }\n\n.modal-body {\n  color: #595959;\n  height: 90%; }\n\n.modal-body[hidden=false] {\n    border-bottom: solid 1px #dcd0e2; }\n\n.modal-full-body {\n  color: #595959;\n  height: 450px;\n  overflow-y: scroll; }\n\n.modal-footer {\n  padding-left: 30px;\n  padding-right: 30px;\n  height: 106px;\n  line-height: 106px;\n  display: block;\n  width: calc(100% - 30px - 30px);\n  border-top: solid 1px #dcd0e2; }\n\n.modal-footer[hidden] {\n    display: none; }\n\n.wide-pill-margin {\n  width: 81%;\n  float: left;\n  margin-top: 20px;\n  margin-left: 10px; }\n\n.clear {\n  clear: both; }\n\n@media only screen and (min-width: 320px) and (max-width: 767px) {\n  .title {\n    font-size: 20px;\n    height: 40px;\n    line-height: 40px;\n    margin-left: 10px; }\n  .wide-pill-margin {\n    margin-top: 10px;\n    width: 40px; }\n  .modal {\n    max-width: 98%; }\n  .wide-pill-margin {\n    margin-top: 0px;\n    width: 96%;\n    margin-bottom: 10px; }\n  .cross {\n    font-size: 20px;\n    line-height: 40px;\n    margin-right: 10px;\n    position: absolute;\n    right: 0; } }\n"

/***/ }),

/***/ "./src/app/layout/Shared/pa-modal/pa-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/Shared/pa-modal/pa-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: PaModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaModalComponent", function() { return PaModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pa_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/scroll-service */ "./src/app/services/scroll-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaModalComponent = /** @class */ (function () {
    function PaModalComponent(modalService, scrollService) {
        this.modalService = modalService;
        this.scrollService = scrollService;
        this.modalDesign = 'modal';
        this.modalBodyCss = 'modal-body';
        this.keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        this.modalClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.deRegisterDialog(this.dialogName);
    };
    PaModalComponent.prototype.ngOnChanges = function (changes) {
        if (!this.dialogName)
            return;
        if (changes.name && this.isRegistered) {
            throw new Error('Dialog name cannot be changed after registration.');
        }
        this.modalService.registerDialog(this.dialogName, this);
    };
    PaModalComponent.prototype.resolve = function (result) {
        this.scrollService.enableScroll();
        this.modalService.resolveDialog(this.dialogName, result);
        this.isShown = false;
    };
    PaModalComponent.prototype.closeModal = function () {
        this.modalClosed.emit(true);
    };
    PaModalComponent.prototype.show = function () {
        this.scrollService.disableScroll();
        this.isShown = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PaModalComponent.prototype, "hideHeaderAndFooter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaModalComponent.prototype, "dialogName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaModalComponent.prototype, "titleText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaModalComponent.prototype, "class", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaModalComponent.prototype, "modalDesign", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaModalComponent.prototype, "modalBodyCss", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaModalComponent.prototype, "modalClosed", void 0);
    PaModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pa-modal',
            template: __webpack_require__(/*! ./pa-modal.component.html */ "./src/app/layout/Shared/pa-modal/pa-modal.component.html"),
            styles: [__webpack_require__(/*! ./pa-modal.component.scss */ "./src/app/layout/Shared/pa-modal/pa-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_pa_modal_service__WEBPACK_IMPORTED_MODULE_1__["PaModalService"], _services_scroll_service__WEBPACK_IMPORTED_MODULE_2__["ScrollService"]])
    ], PaModalComponent);
    return PaModalComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n\n    <a class=\"navbar-brand mainLogo\" href=\"#\"><img src=\"../../../../assets/images/new-logo.png\"> </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\">\n        <!--<form class=\"form-inline my-2 my-lg-0\">-->\n            <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" >-->\n        <!--</form>-->\n        <ul class=\"navbar-nav ml-auto\">\n            <!--<li class=\"nav-item d-none d-xl-block\">-->\n                <!--<a-->\n                    <!--href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-2/archive/master.zip\"-->\n                    <!--class=\"nav-link btn mt-1\" role=\"button\"-->\n                    <!--style=\"padding: .375rem 1rem !important;border-color: #999;\"-->\n                <!--&gt;-->\n                    <!--{{ 'Download Now' | translate }}-->\n                <!--</a>-->\n            <!--</li> &nbsp;-->\n            <!--<li class=\"nav-item\">-->\n                <!--<a href=\"javascript:void(0)\" class=\"nav-link mt-1\"-->\n                    <!--style=\"padding: 0.375rem 1rem !important; border-color: #999;\"-->\n                    <!--(click)=\"rltAndLtr()\"-->\n                <!--&gt;-->\n                    <!--RTL/LTR-->\n                <!--</a>-->\n            <!--</li> &nbsp;-->\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>-->\n                <!--<a class=\"nav-link\" href=\"javascript:void(0)\" ngbDropdownToggle>-->\n                    <!--<i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>-->\n                <!--</a>-->\n                <!--<ul class=\"dropdown-menu-right messages\" ngbDropdownMenu>-->\n                    <!--<li class=\"media\">-->\n                        <!--<img class=\"d-flex align-self-center mr-3\"-->\n                            <!--src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\" alt=\"Generic placeholder image\"-->\n                        <!--&gt;-->\n                        <!--<div class=\"media-body\">-->\n                            <!--<h5 class=\"mt-0 mb-1\">{{this.userName}}</h5>-->\n                            <!--<p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>-->\n                            <!--<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>-->\n                        <!--</div>-->\n                    <!--</li>-->\n                    <!--<li class=\"media\">-->\n                        <!--<img class=\"d-flex align-self-center mr-3\"-->\n                            <!--src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"-->\n                            <!--alt=\"Generic placeholder image\"-->\n                        <!--&gt;-->\n                        <!--<div class=\"media-body\">-->\n                            <!--<h5 class=\"mt-0 mb-1\">John Smith</h5>-->\n                            <!--<p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>-->\n                            <!--<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>-->\n                        <!--</div>-->\n                    <!--</li>-->\n                    <!--<li class=\"media\">-->\n                        <!--<img class=\"d-flex align-self-center mr-3\"-->\n                            <!--src=\"http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg\"-->\n                            <!--alt=\"Generic placeholder image\"-->\n                        <!--/>-->\n                        <!--<div class=\"media-body\">-->\n                            <!--<h5 class=\"mt-0 mb-1\">John Smith</h5>-->\n                            <!--<p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>-->\n                            <!--<p class=\"last\"> Lorem ipsum dolor sit amet, consectetur...</p>-->\n                        <!--</div>-->\n                    <!--</li>-->\n                <!--</ul>-->\n            <!--</li>-->\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>-->\n                <!--<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>-->\n                    <!--<i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>-->\n                <!--</a>-->\n                <!--<div class=\"dropdown-menu-right\" ngbDropdownMenu>-->\n                    <!--<a href=\"javascript:void(0)\" class=\"dropdown-item\">-->\n                        <!--{{ 'Pending Task' | translate }} <span class=\"badge badge-info\">6</span>-->\n                    <!--</a>-->\n                    <!--<a href=\"javascript:void(0)\" class=\"dropdown-item\">-->\n                        <!--{{ 'In queue' | translate }} <span class=\"badge badge-info\"> 13</span>-->\n                    <!--</a>-->\n                    <!--<a href=\"javascript:void(0)\" class=\"dropdown-item\">-->\n                        <!--{{ 'Mail' | translate }} <span class=\"badge badge-info\"> 45</span>-->\n                    <!--</a>-->\n                    <!--<li class=\"dropdown-divider\"></li>-->\n                    <!--<a href=\"javascript:void(0)\" class=\"dropdown-item\">-->\n                        <!--{{ 'View All' | translate }}-->\n                    <!--</a>-->\n                <!--</div>-->\n            <!--</li>-->\n            <!--<li class=\"nav-item dropdown\" ngbDropdown>-->\n                <!--<a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>-->\n                    <!--<i class=\"fa fa-language\"></i> {{ 'Language' | translate }} <b class=\"caret\"></b>-->\n                <!--</a>-->\n                <!--<div class=\"dropdown-menu-right\" ngbDropdownMenu>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('en')\">-->\n                        <!--{{ 'English' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">-->\n                        <!--{{ 'French' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">-->\n                        <!--{{ 'Urdu' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('es')\">-->\n                        <!--{{ 'Spanish' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('it')\">-->\n                        <!--{{ 'Italian' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">-->\n                        <!--{{ 'Farsi' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('de')\">-->\n                        <!--{{ 'German' | translate }}-->\n                    <!--</a>-->\n                    <!--<a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"changeLang('zh-CHS')\">-->\n                        <!--{{ 'Simplified Chinese' | translate }}-->\n                    <!--</a>-->\n                <!--</div>-->\n            <!--</li>-->\n            <li class=\"nav-item dropdown\" ngbDropdown>\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                    <i class=\"fa fa-user\"></i> {{userName}} <b class=\"caret\"></b>\n                </a>\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\n                    <a class=\"dropdown-item\" (click)=\"goToProfile()\">\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                        <i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}\n                    </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\"  (click)=\"onLoggedout()\">\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #4d9ee2; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #fff; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  .mainLogo {\n  width: 130px; }\n  .mainLogo img {\n  max-width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/login.service */ "./src/app/service/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router, loginService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
        this.pushRightClass = 'push-right';
        this.userName = 'Guest';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userName = localStorage.getItem('userName');
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        //[routerLink]="['/login']"
        this.loginService.logout();
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('organizationName');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('affiliateId');
        localStorage.removeItem('affiliateName');
        localStorage.removeItem('lTagId');
        localStorage.removeItem('contactId');
        localStorage.removeItem('roleName');
        localStorage.removeItem('userName');
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimatorAdmin');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.goToProfile = function () {
        var roleName = localStorage.getItem('roleName');
        if (roleName == 'Admin') {
            this.router.navigate(['/user-detail']);
        }
        else if (roleName == 'Affiliate') {
            this.router.navigate(['/affiliate-detail']);
        }
        else if (roleName == 'Client Admin') {
            this.router.navigate(['/organization-detail']);
        }
        else if (roleName == 'Client') {
            this.router.navigate(['/client-detail']);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LogInService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <div class=\"list-group\"  *ngIf=\"estimator > 0 && roleName=='Client Admin'\">\n        <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Create Estimate' | translate }}\n        </a>\n        <a routerLink=\"/estimate/manage-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'My Estimate' | translate }}\n        </a>\n\n        <a routerLink=\"/estimate/group-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Group Estimate' | translate }}\n        </a>\n\n        <a  routerLink=\"/general-info\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'General Info' | translate }}\n        </a>\n\n        <a (click)=\"returnMain()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return' | translate }}\n        </a>\n\n        <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n        </a>\n    </div>\n\n    <div class=\"list-group\"  *ngIf=\"estimateId > 0 && roleName=='Client Admin'\">\n        <a routerLink=\"/estimate/estimated-item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-meetup\"></i>&nbsp;{{ 'Estimate Detail' | translate }}\n        </a>\n        <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-meetup\"></i>&nbsp;{{ 'Setup' | translate }}\n        </a>\n        <a routerLink=\"/estimate/item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Add Item' | translate }}\n        </a>\n        <a routerLink=\"/estimate/cbd\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'Cost Break Down' | translate }}\n        </a>\n        <a routerLink=\"/estimate/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-file-o\"></i>&nbsp;{{ 'Upload Documents' | translate }}\n        </a>\n        <a routerLink=\"/estimate/markups\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'Summary' | translate }}\n        </a>\n        <a routerLink=\"/estimate/print\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Print' | translate }}\n        </a>\n\n        <a  (click)=\"returnMain()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n        </a>\n\n        <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n        </a>\n\n\n    <div class=\"list-group\"  *ngIf=\"estimateId > 0 && roleName=='Client'\">\n            <a routerLink=\"/estimate/estimated-item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-meetup\"></i>&nbsp;{{ 'Estimate Detail' | translate }}\n            </a>\n            <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-meetup\"></i>&nbsp;{{ 'Setup' | translate }}\n            </a>\n            <a routerLink=\"/estimate/item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Add Item' | translate }}\n            </a>\n            <a routerLink=\"/estimate/cbd\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'Cost Break Down' | translate }}\n            </a>\n            <a routerLink=\"/estimate/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-file-o\"></i>&nbsp;{{ 'Upload Documents' | translate }}\n            </a>\n            <a routerLink=\"/estimate/markups\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'Summary' | translate }}\n            </a>\n            <a routerLink=\"/estimate/print\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Print' | translate }}\n            </a>\n\n            <a  (click)=\"returnMain()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n            </a>\n\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n\n        </div>\n    </div>\n    <!--Client Admin Menu-->\n    <div class=\"list-group\" *ngIf=\"roleName=='Client Admin'\">\n        <div *ngIf=\"estimatorClientAdminMainMenu == 0 && estimatorClientAdmin == 0 && estimateId == 0\">\n            <a  routerLink=\"/general-info\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'Manage General Info' | translate }}\n            </a>\n\n            <a  routerLink=\"/general-info\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'Manage Logo' | translate }}\n            </a>\n            <a (click)=\"gotoEarlyEstimatorHomeClientAdmin()\"  routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Early Estimator' | translate }}\n            </a>\n            <a (click)=\"gotoEarlyEstimatorClientAdmin()\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Early Estimator Admin' | translate }}\n            </a>\n            <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 2' | translate }}\n            </a>\n            <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 2 Admin' | translate }}\n            </a>\n            <a  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 3' | translate }}\n            </a>\n            <a  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 3 Admin' | translate }}\n            </a>\n\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n        <div class=\"list-group\"  *ngIf=\" estimatorClientAdmin > 0 && estimateId == 0 \">\n            <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Early Estimator Home' | translate }}\n            </a>\n            <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-plus-circle\"></i>&nbsp;{{ 'Create/Setup' | translate }}\n            </a>\n            <a routerLink=\"/estimate/manage-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'My Estimates' | translate }}\n            </a>\n\n            <a routerLink=\"/estimate/group-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Group Estimates' | translate }}\n            </a>\n\n            <a (click)=\"gotoClientAdminDashboard()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n            </a>\n\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n\n        <div class=\"list-group\"  *ngIf=\" estimatorClientAdminMainMenu > 0 \">\n            <a [routerLink]=\"['/manage-clients']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-users\"></i>&nbsp;{{ 'Manage Users' | translate }}\n            </a>\n            <a [routerLink]=\"['/estimate/manage-estimates']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-adjust\"></i>&nbsp;{{ 'Manage Estimates' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-item']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-building\"></i>&nbsp;{{ 'Manage Data Items' | translate }}\n            </a>\n            <!--<a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n                <!--<i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}-->\n            <!--</a>-->\n            <a [routerLink]=\"['/manage-categories']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-calendar-times-o\"></i>&nbsp;{{ 'Manage Categories' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-subcategories']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-object-ungroup\"></i>&nbsp;{{ 'Manage Sub Categories' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-groups']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-object-group\"></i>&nbsp;{{ 'Manage Groups' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-units']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-balance-scale\"></i>&nbsp;{{ 'Manage Units' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-project-manager']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Manage Project Manager' | translate }}\n            </a>\n            <a [routerLink]=\"['/user-group']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-automobile\"></i>&nbsp;{{ 'Assign Group' | translate }}\n            </a>\n\n            <a (click)=\"gotoClientAdminDashboard()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n            </a>\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n\n    </div>\n    <!--End Client Admin Menu-->\n     <!--Client Menu-->\n    <div class=\"list-group\" *ngIf=\"roleName=='Client'\">\n        <div *ngIf=\"estimator == 0 && estimateId == 0\">\n            <a  routerLink=\"/general-info\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'General Info' | translate }}\n            </a>\n            <a (click)=\"gotoEarlyEstimatorHome()\"  routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Early Estimator Home' | translate }}\n            </a>\n            <a [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 2' | translate }}\n            </a>\n            <a  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-group\"></i>&nbsp;{{ 'Module 3' | translate }}\n            </a>\n            <!--<a [routerLink]=\"['/manage-estimates']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Manage Estimates' | translate }}-->\n            <!--</a>-->\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n        <div class=\"list-group\"  *ngIf=\" estimator > 0 \">\n            <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Early Estimator Home' | translate }}\n            </a>\n            <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Create/Setup' | translate }}\n            </a>\n            <a routerLink=\"/estimate/manage-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'My Estimates' | translate }}\n            </a>\n\n            <a routerLink=\"/estimate/group-estimates\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Group Estimates' | translate }}\n            </a>\n\n            <a (click)=\"gotoUserDashboard()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n            </a>\n\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n\n        <div class=\"list-group\"  *ngIf=\"estimateId > 0 && roleName=='Client'\">\n            <a  (click)=\"gotoEarlyEstimatorHome()\"  routerLink=\"/dashboard\"  [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Early Estimator Home' | translate }}\n            </a>\n               <a routerLink=\"/estimate/estimated-item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-meetup\"></i>&nbsp;{{ 'Estimate Detail' | translate }}\n                </a>\n                <a routerLink=\"/estimate/create\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-sellsy\"></i>&nbsp;{{ 'Setup' | translate }}\n                </a>\n                <a routerLink=\"/estimate/item\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-ioxhost\"></i>&nbsp;{{ 'Add Item' | translate }}\n                </a>\n                <a routerLink=\"/estimate/cbd\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-sitemap\"></i>&nbsp;{{ 'Cost Break Down' | translate }}\n                </a>\n                <a routerLink=\"/estimate/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-file-o\"></i>&nbsp;{{ 'Upload Documents' | translate }}\n                </a>\n                <a routerLink=\"/estimate/markups\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-pencil-square-o\"></i>&nbsp;{{ 'Summary' | translate }}\n                </a>\n                <a routerLink=\"/estimate/print\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-print\"></i>&nbsp;{{ 'Print' | translate }}\n                </a>\n\n                <a  (click)=\"returnDashboard()\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-chevron-left\"></i>&nbsp;{{ 'Return to Dashboard' | translate }}\n                </a>\n\n                <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                    <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n                </a>\n\n\n        </div>\n\n    </div>\n    <!--End Client Menu-->\n    <div  *ngIf=\"estimateId == 0 && estimator == 0\">\n        <div class=\"list-group\" *ngIf=\"roleName=='Admin'\">\n            <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-users']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Manage Users' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-affiliates']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Manage Affiliates' | translate }}\n            </a>\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n\n        <div class=\"list-group\" *ngIf=\"roleName=='Affiliate'\">\n            <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\n            </a>\n            <a [routerLink]=\"['/manage-organizations']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Manage Clients' | translate }}\n            </a>\n            <a   href=\"javascript:void(0)\"  (click)=\"onLoggedout()\" class=\"list-group-item\">\n                <i class=\"fa fa-fw fa-sign-out\"></i>&nbsp;{{ 'Log Out' | translate }}\n            </a>\n        </div>\n\n\n\n\n    </div>\n\n\n        <!--<a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'Tables' | translate }}-->\n        <!--</a>-->\n        <!--<a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'Forms' | translate }}-->\n        <!--</a>-->\n        <!--<a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'Bootstrap Element' | translate }}-->\n        <!--</a>-->\n        <!--<a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'Bootstrap Grid' | translate }}-->\n        <!--</a>-->\n        <!--<a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-th-list\"></i>&nbsp;{{ 'Component' | translate }}-->\n        <!--</a>-->\n        <!--<div class=\"nested-menu\">-->\n            <!--<a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">-->\n                <!--<span><i class=\"fa fa-plus\"></i>&nbsp; {{ 'Menu' | translate }}</span>-->\n            <!--</a>-->\n            <!--<li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">-->\n                <!--<ul class=\"submenu\">-->\n                    <!--<li>-->\n                        <!--<a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>-->\n                    <!--</li>-->\n                <!--</ul>-->\n            <!--</li>-->\n        <!--</div>-->\n        <!--<a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">-->\n            <!--<i class=\"fa fa-file-o\"></i>&nbsp;{{ 'Blank Page' | translate }}-->\n        <!--</a>-->\n        <!--<a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\" >-->\n            <!--{{ 'More Theme' | translate }}-->\n        <!--</a>-->\n        <!--<div class=\"header-fields\">-->\n            <!--<a (click)=\"rltAndLtr()\" class=\"list-group-item\">-->\n                <!--<span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>-->\n            <!--</a>-->\n            <!--<div class=\"nested-menu\">-->\n                <!--<a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">-->\n                    <!--<span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>-->\n                <!--</a>-->\n                <!--&lt;!&ndash;<li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<ul class=\"submenu\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'English' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'French' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'Urdu' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'Spanish' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'Italian' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'Farsi' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;{{ 'German' | translate }}&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n                <!--&lt;!&ndash;</li>&ndash;&gt;-->\n            <!--</div>-->\n            <!--&lt;!&ndash;<div class=\"nested-menu\">&ndash;&gt;-->\n                <!--&lt;!&ndash;<a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>&ndash;&gt;-->\n                <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                <!--&lt;!&ndash;<li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">&ndash;&gt;-->\n                    <!--&lt;!&ndash;<ul class=\"submenu\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a href=\"javascript:void(0)\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                        <!--&lt;!&ndash;<li>&ndash;&gt;-->\n                            <!--&lt;!&ndash;<a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>&ndash;&gt;-->\n                            <!--&lt;!&ndash;</a>&ndash;&gt;-->\n                        <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                    <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n                <!--&lt;!&ndash;</li>&ndash;&gt;-->\n            <!--&lt;!&ndash;</div>&ndash;&gt;-->\n        <!--</div>-->\n\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #404040;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #404040;\n    border: 0;\n    border-radius: 0;\n    color: #fff;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #333333;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #333333;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #404040; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #333333; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #404040;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #333333; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  .list-group-item {\n  cursor: pointer; }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/login.service */ "./src/app/service/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router, loginService) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.loginService = loginService;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.roleName = '';
        this.estimateId = 0;
        this.estimator = 0;
        this.estimatorAdmin = 0;
        this.userEstimator = 0;
        this.estimatorClientAdmin = 0;
        this.estimatorClientAdminMainMenu = 0;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
        this.estimator = Number(localStorage.getItem('estimator'));
        this.userEstimator = Number(localStorage.getItem('userEstimator'));
        this.roleName = localStorage.getItem('roleName');
        this.estimateId = Number(localStorage.getItem('estimateId'));
        this.estimatorAdmin = Number(localStorage.getItem('estimatorAdmin'));
        this.estimatorClientAdmin = Number(localStorage.getItem('estimatorClientAdmin'));
        this.estimatorClientAdminMainMenu = Number(localStorage.getItem('estimatorClientAdminMainMenu'));
    }
    SidebarComponent.prototype.returnMain = function () {
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimateId');
        window.location.reload(true);
        this.router.navigate(["/dashboard"]);
    };
    SidebarComponent.prototype.returnDashboard = function () {
        localStorage.removeItem('estimateId');
        window.location.href = 'dashboard';
        //window.location.reload(true);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        //[routerLink]="['/login']"
        this.loginService.logout();
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('organizationName');
        localStorage.removeItem('organizationId');
        localStorage.removeItem('affiliateId');
        localStorage.removeItem('affiliateName');
        localStorage.removeItem('lTagId');
        localStorage.removeItem('contactId');
        localStorage.removeItem('roleName');
        localStorage.removeItem('userName');
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimatorAdmin');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        this.router.navigate(['/login']);
    };
    SidebarComponent.prototype.myEstimate = function () {
        localStorage.setItem('estimator', "1");
        window.location.href = 'estimate/manage-estimates';
        //window.location.reload(true);
    };
    SidebarComponent.prototype.gotoEarlyEstimatorHome = function () {
        localStorage.removeItem('estimateId');
        localStorage.setItem('estimator', "1");
        window.location.reload(true);
    };
    SidebarComponent.prototype.gotoEarlyEstimatorHomeClientAdmin = function () {
        localStorage.removeItem('estimateId');
        localStorage.setItem('estimatorClientAdmin', "1");
        window.location.reload(true);
    };
    SidebarComponent.prototype.gotoEarlyEstimatorClientAdmin = function () {
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.setItem('estimatorClientAdminMainMenu', "1");
        window.location.reload(true);
    };
    SidebarComponent.prototype.gotoClientAdminDashboard = function () {
        localStorage.removeItem('estimateId');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        window.location.reload(true);
    };
    SidebarComponent.prototype.gotoUserDashboard = function () {
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimateId');
        window.location.reload(true);
        this.router.navigate(["/dashboard"]);
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LogInService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-cbd/estimate-cbd.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/estimate-cbd/estimate-cbd.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Cost Break Down</h5>\n<hr>\n<estimate-data></estimate-data>\n<hr>\n\n<div>\n    <form [formGroup]=\"estimatecbdForm\" (ngSubmit)=\"onSubmit(estimatecbdForm.value)\">\n        <div class=\"row with-margin\">\n            <div class=\"col-md-2\">\n                <label> Break Down Heading</label>\n            </div>\n            <div class=\"col-md-2\">\n                <input class=\"form-control\" formControlName='CbdTitle'\n                       [ngClass]=\"{ 'is-invalid': submitted && f.CbdTitle.errors }\"/>\n                <div *ngIf=\"submitted && f.CbdTitle.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.CbdTitle.errors.required\">Break Down Heading is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row with-margin\">\n            <div class=\"col-md-2\">\n                <label> Break Down Item</label>\n            </div>\n            <div class=\"col-md-2\">\n                <input class=\"form-control\" formControlName='CostBreakDownName'\n                       [ngClass]=\"{ 'is-invalid': submitted && f.CostBreakDownName.errors }\"/>\n                <div *ngIf=\"submitted && f.CostBreakDownName.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.CostBreakDownName.errors.required\">Break Down item is required</div>\n                </div>\n            </div>\n            <div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary  btn-space\">{{btnName}}</button>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <table class=\"table table-striped table-bordered user-table\">\n                    <thead>\n                    <tr>\n                        <th>Sl no.</th>\n                        <th>Break Down Item</th>\n                        <th>Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <ng-container>\n                        <tr *ngFor=\"let costBreakDown of costbreakdowns\"\n                            [ngClass]=\"{ odd: odd, even:even}\">\n                            <td>{{ costBreakDown.SlNo }}</td>\n                            <td>\n                                {{costBreakDown.CostBreakDownName}}\n                            </td>\n                            <td class=\"action-btn\">\n                                <i class=\"fa fa-pencil\" (click)=\"editCostBreakDown(costBreakDown)\"></i>\n                              <i class=\"fa fa-trash\" (click)=\"showDeleteCostBreakDownConfirmationModal(costBreakDown)\"></i>\n\n                            </td>\n                        </tr>\n\n                        <tr *ngIf=\"users?.length == 0\">\n                            <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                        </tr>\n                    </ng-container>\n                    </tbody>\n                </table>\n\n            </div>\n\n\n        </div>\n    </form>\n\n</div>\n\n<pa-delete-confirmation-modal-component\n    [innerMessage]=\"'Please confirm that you wish to delete \\n this cost break down no..'\" headerMessage=\"Are you sure?\"\n    [dialogName]=\"'deleteObservationDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/estimate-cbd/estimate-cbd.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/estimate-cbd/estimate-cbd.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.with-margin {\n  margin-bottom: 30px; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-cbd/estimate-cbd.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/estimate-cbd/estimate-cbd.component.ts ***!
  \***************************************************************/
/*! exports provided: EstimateCbdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateCbdComponent", function() { return EstimateCbdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _model_CostBreakDownModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/CostBreakDownModel */ "./src/app/model/CostBreakDownModel.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var EstimateCbdComponent = /** @class */ (function () {
    function EstimateCbdComponent(formBuilder, router, alertService, httpEstimateService, modalService, _iterableDiffers) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.modalService = modalService;
        this._iterableDiffers = _iterableDiffers;
        this.btnName = 'Save';
        this.loading = false;
        this.submitted = false;
        this.costbreakdowns = [];
        this.noofbreakdown = 0;
        this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }
    EstimateCbdComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.estimateId = Number(localStorage.getItem('estimateId'));
        if (this.estimateId > 0) {
            this.btnName = 'Save';
            this.getEstimateCbd(this.estimateId);
            this.getEstimateDetail(this.estimateId);
        }
    };
    EstimateCbdComponent.prototype.buildForm = function () {
        this.estimatecbdForm = this.formBuilder.group({
            CbdTitle: [localStorage.getItem('cbdTitle'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CostBreakDownName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            CostBreakDownId: []
        });
    };
    Object.defineProperty(EstimateCbdComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.estimatecbdForm.controls; },
        enumerable: true,
        configurable: true
    });
    EstimateCbdComponent.prototype.onSubmit = function (estimateCbd) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.estimatecbdForm.invalid) {
            return;
        }
        estimateCbd.EstimateId = localStorage.getItem('estimateId');
        estimateCbd.OrganizationId = localStorage.getItem('organizationId');
        estimateCbd.CostBreakDownModel = this.costbreakdowns;
        estimateCbd.IsActive = true;
        this.loading = true;
        this.httpEstimateService.SaveEstimateCbd(estimateCbd)
            .subscribe(function (data) {
            _this.alertService.success('Cost break down save successfully', true);
            // this.router.navigate(['./estimate/document']);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        window.location.href = '/estimate/cbd';
        //this.getEstimateCbd(localStorage.getItem('estimateId'));
    };
    // public addBreakDown(){
    //     this.costbreakdowns = [];
    //
    //     if(this.noofbreakdown > 0) {
    //         for (let i = 1; i <= this.noofbreakdown; i++) {
    //             let costBreakDown = new CostBreakDownModel();
    //             costBreakDown.SlNo = i;
    //             costBreakDown.CostBreakDownId = 0 ;
    //             costBreakDown.CostBreakDownName = '';
    //             this.costbreakdowns.push(costBreakDown);
    //         }
    //     }
    //
    // }
    EstimateCbdComponent.prototype.getEstimateDetail = function (estimateId) {
        var _this = this;
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe(function (data) {
            localStorage.setItem('cbdTitle', data.CbdTitle);
            _this.estimatecbdForm.patchValue({
                CbdTitle: data.CbdTitle,
            });
        });
    };
    EstimateCbdComponent.prototype.getEstimateCbd = function (estimateId) {
        var _this = this;
        this.httpEstimateService.getEstimateCbdList(estimateId)
            .subscribe(function (data) {
            _this.costbreakdowns = [];
            for (var i = 0; i < data.length; i++) {
                var costBreakDown = new _model_CostBreakDownModel__WEBPACK_IMPORTED_MODULE_5__["CostBreakDownModel"]();
                costBreakDown.SlNo = i + 1;
                costBreakDown.CostBreakDownId = data[i].CostBreakDownId;
                costBreakDown.CostBreakDownName = data[i].CostBreakDownName;
                _this.costbreakdowns.push(costBreakDown);
            }
        });
        this.getEstimateDetail(this.estimateId);
    };
    EstimateCbdComponent.prototype.editCostBreakDown = function (estimateCbd) {
        this.estimatecbdForm.patchValue({
            CostBreakDownName: estimateCbd.CostBreakDownName,
            CostBreakDownId: estimateCbd.CostBreakDownId,
        });
    };
    EstimateCbdComponent.prototype.showDeleteCostBreakDownConfirmationModal = function (estimateCbd) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isdelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteObservationDialog')];
                    case 1:
                        isdelete = _a.sent();
                        if (isdelete) {
                            estimateCbd.EstimateId = localStorage.getItem('estimateId');
                            estimateCbd.OrganizationId = localStorage.getItem('organizationId');
                            estimateCbd.CostBreakDownId = estimateCbd.CostBreakDownId;
                            estimateCbd.IsActive = false;
                            this.httpEstimateService.UpdateEstimateCbd(estimateCbd)
                                .subscribe(function (data) {
                                _this.getEstimateCbd(localStorage.getItem('estimateId'));
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateCbdComponent.prototype.onCostBreakDownValueChange = function (textValue, slno) {
        this.costbreakdowns[slno - 1].CostBreakDownName = textValue;
    };
    EstimateCbdComponent.prototype.goToEstimateCreate = function () {
        this.router.navigate(['estimate/create']);
    };
    EstimateCbdComponent.prototype.goToDocument = function () {
        this.router.navigate(['estimate/document']);
    };
    EstimateCbdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-cbd',
            template: __webpack_require__(/*! ./estimate-cbd.component.html */ "./src/app/layout/estimate-cbd/estimate-cbd.component.html"),
            styles: [__webpack_require__(/*! ./estimate-cbd.component.scss */ "./src/app/layout/estimate-cbd/estimate-cbd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__["EstimateService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_6__["PaModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]])
    ], EstimateCbdComponent);
    return EstimateCbdComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-create/estimate-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estimate-create/estimate-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h5>Create</h5>\n<hr>\n\n<form [formGroup]=\"estimateCreateForm\" (ngSubmit)=\"onSubmit(estimateCreateForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Estimate Title</label>\n            <input class=\"form-control\" formControlName='EstimateTitle' class=\"form-control\" maxlength=\"100\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.EstimateTitle.errors }\"/>\n\n            <div *ngIf=\"submitted && f.EstimateTitle.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.EstimateTitle.errors.required\">Title is required</div>\n                <div *ngIf=\"f.EstimateTitle.errors?.maxlength\">  Title can be max 100 characters long.</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Group</label>\n            <select class=\"form-control\" formControlName='EstimateGroupId' class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.EstimateGroupId.errors }\">\n                <option value=\"\">Please select</option>\n                <option *ngFor=\"let group of groupsModel\" [ngValue]=\"group.LTagId\">{{group.TagDescr}}</option>\n            </select>\n            <div *ngIf=\"submitted && f.EstimateGroupId.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.EstimateGroupId.errors.required\">Group is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Estimate Number</label>\n            <input class=\"form-control\" formControlName='EstimateNumber' class=\"form-control\" maxlength=\"20\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.EstimateNumber.errors }\"/>\n\n            <div *ngIf=\"submitted && f.EstimateNumber.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.EstimateNumber.errors.required\">Number is required</div>\n                <div *ngIf=\"f.EstimateNumber.errors?.maxlength\">  Number can be max 20 characters long.</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Project Scope</label>\n            <textarea class=\"form-control\" formControlName='ProjectScope' class=\"form-control\" maxlength=\"1000\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.ProjectScope.errors }\"></textarea>\n\n            <div *ngIf=\"submitted && f.ProjectScope.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.ProjectScope.errors.required\">Project scope is required</div>\n                <div *ngIf=\"f.ProjectScope.errors?.maxlength\">  Project scope can be max 1000 characters long.</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label> Assumptions</label>\n            <textarea class=\"form-control\" formControlName='Assumptions' class=\"form-control\" maxlength=\"500\"\n                      [ngClass]=\"{ 'is-invalid': submitted && f.Assumptions.errors }\"></textarea>\n\n            <div *ngIf=\"submitted && f.Assumptions.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.Assumptions.errors.required\">Assumptions is required</div>\n                <div *ngIf=\"f.Assumptions.errors?.maxlength\">  Assumptions can be max 500 characters long.</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label> Project Manager</label>\n            <input class=\"form-control\" formControlName='ManagerName' class=\"form-control\" maxlength=\"100\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.ManagerName.errors }\"/>\n            <!--<select class=\"form-control\" formControlName='ManagerId' class=\"form-control\"-->\n\n                    <!--[ngClass]=\"{ 'is-invalid': submitted && f.ManagerId.errors }\">-->\n                <!--<option value=\"\">Please select</option>-->\n                <!--<option *ngFor=\"let role of managerModel\" [ngValue]=\"role.LTagId\">{{role.TagDescr}}</option>-->\n            <!--</select>-->\n            <!--<div *ngIf=\"submitted && f.ManagerName.errors\" class=\"invalid-feedback\">-->\n                <!--<div *ngIf=\"f.ManagerName.errors.required\">Project Manager is required</div>-->\n            <!--</div>-->\n        </div>\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}} <i class=\"fa fa-long-arrow-right\"></i></button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a  (click)=\"goToManageEstimates()\"  class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/estimate-create/estimate-create.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estimate-create/estimate-create.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-create/estimate-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimate-create/estimate-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstimateCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateCreateComponent", function() { return EstimateCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstimateCreateComponent = /** @class */ (function () {
    function EstimateCreateComponent(formBuilder, router, alertService, httpEstimateService, httpTagService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.httpTagService = httpTagService;
        this.btnName = 'Save';
        this.loading = false;
        this.submitted = false;
    }
    EstimateCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.estimateId = Number(localStorage.getItem('estimateId'));
        if (this.estimateId > 0) {
            this.btnName = 'Update and Continue';
            this.getEstimateDetail(this.estimateId);
        }
        this.getManagerList();
        this.getGroupList();
    };
    EstimateCreateComponent.prototype.buildForm = function () {
        this.estimateCreateForm = this.formBuilder.group({
            EstimateTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            EstimateNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            ProjectScope: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1000)]],
            Assumptions: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]],
            //ManagerId:  ['', [Validators.required]],
            ManagerName: [''],
            EstimateGroupId: [''],
        });
    };
    Object.defineProperty(EstimateCreateComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.estimateCreateForm.controls; },
        enumerable: true,
        configurable: true
    });
    EstimateCreateComponent.prototype.onSubmit = function (estimateCreate) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.estimateCreateForm.invalid) {
            return;
        }
        estimateCreate.EstimateId = Number(localStorage.getItem('estimateId'));
        estimateCreate.OrganizationId = Number(localStorage.getItem('organizationId'));
        estimateCreate.ModifiedById = Number(localStorage.getItem('userId'));
        this.loading = true;
        this.httpEstimateService.create(estimateCreate)
            .subscribe(function (data) {
            localStorage.setItem('estimateId', data.toString());
            localStorage.removeItem('estimator');
            window.location.reload(true);
            _this.router.navigate(['./estimate/item']);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EstimateCreateComponent.prototype.getEstimateDetail = function (estimateId) {
        var _this = this;
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe(function (data) {
            localStorage.setItem('cbdTitle', data.CbdTitle);
            _this.estimateCreateForm.patchValue({
                OrganizationId: data.organizationId,
                EstimateId: data.EstimateId,
                EstimateTitle: data.EstimateTitle,
                EstimateNumber: data.EstimateNumber,
                ProjectScope: data.ProjectScope,
                Assumptions: data.Assumptions,
                ManagerId: data.ManagerId,
                ManagerName: data.ManagerName,
                EstimateGroupId: data.EstimateGroupId,
            });
        });
    };
    EstimateCreateComponent.prototype.goToManageEstimates = function () {
        this.router.navigate(['manage-estimates']);
    };
    EstimateCreateComponent.prototype.getManagerList = function () {
        var _this = this;
        var organizationId = Number(localStorage.getItem('organizationId'));
        this.httpTagService.getTagByTypeAndOrganizationId('Manager', organizationId, true)
            .subscribe(function (manager) {
            _this.managerModel = manager;
        });
    };
    EstimateCreateComponent.prototype.getGroupList = function () {
        var _this = this;
        var organizationId = Number(localStorage.getItem('organizationId'));
        this.httpTagService.getTagByTypeAndOrganizationId('Groups', organizationId, true)
            .subscribe(function (group) {
            _this.groupsModel = group;
        });
    };
    EstimateCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create',
            template: __webpack_require__(/*! ./estimate-create.component.html */ "./src/app/layout/estimate-create/estimate-create.component.html"),
            styles: [__webpack_require__(/*! ./estimate-create.component.scss */ "./src/app/layout/estimate-create/estimate-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__["EstimateService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_5__["TagsService"]])
    ], EstimateCreateComponent);
    return EstimateCreateComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-data/estimate-data.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimate-data/estimate-data.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"width: 100%\">\n    <tr style=\"line-height: 1.5em;\">\n        <td> <label style=\"font-weight: bold;\"> Estimate Title:</label>\n            {{estimateModel.EstimateTitle}}</td>\n        <td> <label style=\"font-weight: bold;\"> Estimate Number:</label>\n            {{estimateModel.EstimateNumber}}</td>\n    </tr>\n    <tr style=\"line-height: 1.5em;\">\n        <td><label style=\"font-weight: bold;\"> Estimate Date:</label>\n            {{estimateModel.CreatedDate| date:'MM/dd/yyyy'}}</td>\n        <td><label style=\"font-weight: bold;\"> Group:</label>\n            {{estimateModel.EstimateGroupName}}</td>\n    </tr>\n    <tr style=\"line-height: 1.5em;\">\n        <td><label style=\"font-weight: bold;\"> Project Manager:</label>\n            {{estimateModel.ManagerName}}</td>\n        <td><label style=\"font-weight: bold;\"> Estimator:</label>\n            {{estimateModel.Estimator}}</td>\n    </tr>\n</table>\n\n"

/***/ }),

/***/ "./src/app/layout/estimate-data/estimate-data.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimate-data/estimate-data.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-space {\n  margin-right: 5px; }\n\nh5 {\n  color: #00b3ee; }\n\n.table th, .table td {\n  padding: 0.25rem; }\n\n.accordion-border {\n  width: 100%; }\n\nlabel {\n  font-weight: bold; }\n\n#observation-accordion {\n  width: 100%; }\n\n.accordion {\n  width: 100%;\n  border-radius: 5px;\n  border: solid 2px #dcd0e2;\n  display: inline-block;\n  background-color: #ffffff; }\n\n.accordion-header {\n  cursor: pointer;\n  line-height: 55px; }\n\n.accordion-header-bar {\n  width: 100%;\n  height: 4px;\n  margin-top: -2px;\n  border-radius: 4px 4px 0 0;\n  background-color: #90caf9; }\n\n.accordion-title {\n  text-align: left;\n  font-weight: bold;\n  float: left;\n  width: 48%;\n  padding: 0 0 0 20px; }\n\n.accordion-icon {\n  text-align: right;\n  float: right;\n  margin-right: 10px; }\n\n.icon {\n  color: #a98ab6;\n  font-size: 24px;\n  text-align: right; }\n\n.accordion-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 50px; }\n\n.accordion-column-header {\n  width: 100%;\n  background-color: #f4f1f5;\n  font-size: 12px;\n  font-weight: bold;\n  color: #7e6787; }\n\n.observation-matter-header {\n  text-align: left;\n  font-size: 12px;\n  font-weight: bold;\n  vertical-align: middle;\n  color: #a98ab6; }\n\n.checkbox-header {\n  margin: 0% 0% 30px 2%;\n  flex: 0 0 4%; }\n\n.header-description {\n  text-align: left;\n  flex: 1 1 0%; }\n\n.header-current-level {\n  text-align: left;\n  flex: 0 0 21.8%;\n  margin-right: 12px; }\n\n.header-observed-level {\n  text-align: left;\n  width: 20%;\n  flex: 0 0 20.3%; }\n\n.development-matters {\n  float: left;\n  line-height: 26px;\n  margin-right: 8px; }\n\n.info-icon {\n  width: 21px;\n  height: 21px;\n  font-size: 24px;\n  text-align: left;\n  color: #a98ab6; }\n\n.observed-level {\n  float: left;\n  line-height: 32px;\n  margin-right: 8px;\n  padding-left: 12px; }\n\n.float-left {\n  float: left;\n  margin-top: 3px; }\n\n.odd {\n  background-color: #ffffff; }\n\n.even {\n  background-color: #ffffff; }\n\n.text-width {\n  width: 23%; }\n\n.item-table {\n  margin: 10px;\n  width: 98%; }\n\n.label-disabled {\n  background-color: #e9ecef;\n  opacity: 1; }\n\n.form-group {\n  margin-bottom: 0.25rem; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-data/estimate-data.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/estimate-data/estimate-data.component.ts ***!
  \*****************************************************************/
/*! exports provided: EstimateDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateDataComponent", function() { return EstimateDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstimateDataComponent = /** @class */ (function () {
    function EstimateDataComponent(httpEstimateService) {
        this.httpEstimateService = httpEstimateService;
    }
    EstimateDataComponent.prototype.ngOnInit = function () {
        this.estimateId = Number(localStorage.getItem('estimateId'));
        this.estimateModel = {
            EstimateTitle: '',
            EstimateNumber: '',
            EstimateId: 0,
            ManagerName: '',
            ManagerId: 0,
            EstimateGroupName: '',
            Assumptions: '',
            ProjectScope: '',
            CbdTitle: '',
            EstimateGroupId: 0,
            IsActive: true,
            ModifiedById: 0,
            OrganizationId: 0,
            Estimator: '',
            TotalProjectCost: 0,
        };
        if (this.estimateId > 0) {
            this.getEstimateDetail(this.estimateId);
        }
    };
    EstimateDataComponent.prototype.getEstimateDetail = function (estimateId) {
        var _this = this;
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe(function (data) {
            _this.estimateModel = data;
        });
    };
    EstimateDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-data',
            template: __webpack_require__(/*! ./estimate-data.component.html */ "./src/app/layout/estimate-data/estimate-data.component.html"),
            styles: [__webpack_require__(/*! ./estimate-data.component.scss */ "./src/app/layout/estimate-data/estimate-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_estimate_service__WEBPACK_IMPORTED_MODULE_1__["EstimateService"]])
    ], EstimateDataComponent);
    return EstimateDataComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-detail/estimate-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estimate-detail/estimate-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/layout/estimate-detail/estimate-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estimate-detail/estimate-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/estimate-detail/estimate-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimate-detail/estimate-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstimateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateDetailComponent", function() { return EstimateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/pa-golfball-checklist/Golfball.model */ "./src/app/layout/Shared/pa-golfball-checklist/Golfball.model.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EstimateDetailComponent = /** @class */ (function () {
    function EstimateDetailComponent(formBuilder, router, alertService, httpEstimateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.btnName = 'Save and Continue';
        this.loading = false;
        this.submitted = false;
        this.golfballs = [];
        this.golfballs.push(new _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__["Golfball"]('1', 'Create', false, false));
        this.golfballs.push(new _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__["Golfball"]('2', 'Cost break down (optional)', false, false));
        this.golfballs.push(new _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__["Golfball"]('3', 'Upload Document (optional)', false, false));
        this.golfballs.push(new _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__["Golfball"]('4', 'Items', false, false));
        this.golfballs.push(new _Shared_pa_golfball_checklist_Golfball_model__WEBPACK_IMPORTED_MODULE_4__["Golfball"]('5', 'Markups and Adjustments', false, false));
    }
    EstimateDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        if (this.estimateId > 0) {
            this.btnName = 'Update and Continue';
            this.getEstimateDetail(this.estimateId);
        }
    };
    EstimateDetailComponent.prototype.buildForm = function () {
        this.estimateCreateForm = this.formBuilder.group({
            EstimateTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(EstimateDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.estimateCreateForm.controls; },
        enumerable: true,
        configurable: true
    });
    EstimateDetailComponent.prototype.onSubmit = function (estimateCreate) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.estimateCreateForm.invalid) {
            return;
        }
        estimateCreate.estimateId = localStorage.getItem('estimateId');
        this.loading = true;
        this.router.navigate(['./estimate-cbd']);
        // this.httpEstimateService.create(estimateCreate)
        //     .subscribe(
        //         data => {
        //
        //             this.router.navigate(['./estimate-cbd']);
        //             this.loading  = false;
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    };
    EstimateDetailComponent.prototype.getEstimateDetail = function (estimateId) {
    };
    EstimateDetailComponent.prototype.goToManageEstimates = function () {
        this.router.navigate(['manage-estimates']);
    };
    EstimateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate',
            template: __webpack_require__(/*! ./estimate-detail.component.html */ "./src/app/layout/estimate-detail/estimate-detail.component.html"),
            styles: [__webpack_require__(/*! ./estimate-detail.component.scss */ "./src/app/layout/estimate-detail/estimate-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_5__["EstimateService"]])
    ], EstimateDetailComponent);
    return EstimateDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-document/estimate-document.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/estimate-document/estimate-document.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h5>Documents</h5>\n<hr>\n<estimate-data></estimate-data>\n<hr>\n\n<form [formGroup]=\"documentForm\" (ngSubmit)=\"onSubmit(documentForm.value)\"  enctype=\"multipart/form-data\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n                <label> Document name</label>\n                <input class=\"form-control\" formControlName='DocCaption'\n                       [ngClass]=\"{ 'is-invalid': submitted && f.DocCaption.errors }\"/>\n\n                <div *ngIf=\"submitted && f.DocCaption.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.DocCaption.errors.required\">Document is required</div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label> Upload( Except only Pdf, Jpg, gif, png)</label>\n                <input class=\"form-control\" formControlName='DocPath' type=\"file\"   (change)=\"uploadFile($event,documentForm.value)\" placeholder=\"Upload file (upload only pdf, png, gif ,jpg)\" accept=\".pdf, .png, .gif, .jpg\"\n                       [ngClass]=\"{ 'is-invalid': submitted && f.DocPath.errors }\"/>\n                <div *ngIf=\"submitted && f.DocPath.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.DocPath.errors.required\">File is required</div>\n                </div>\n\n                <div class=\"error\" *ngIf=\"errors.length > 0\">\n                    <ul>\n                        <li *ngFor=\"let err of errors\">{{err}}</li>\n                    </ul>\n                </div>\n\n            </div>\n\n\n        </div>\n\n    </div>\n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"form-control\" formControlName='ItemId' class=\"form-control\" />\n        <button [disabled]=\"loading\" class=\"btn btn-primary btn-space\">{{btnName}}</button>\n        <!--<button  type=\"button\"  (click)=\"goToEstimateItem()\" class=\"btn btn-primary btn-space\"> Continue <i class=\"fa fa-long-arrow-right\"></i></button>-->\n        <!--<img *ngIf=\"loading\"-->\n             <!--src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>-->\n        <!--<button  type=\"button\" (click)=\"goToEstimateCbd()\"  class=\"btn btn-secondary\">Previous</button>-->\n    </div>\n</form>\n\n<div class=\"card-body table-responsive\" >\n\n    <table datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered \">\n        <thead>\n        <tr>\n            <th>Document Name</th>\n            <th>Document </th>\n            <th>Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let document of documents; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n\n            <td>{{ document.DocCaption }}</td>\n            <td>{{ document.DocPath }}</td>\n            <td><button (click)=\"showDeleteDocumentConfirmationModal(document.DocumentId)\"><i class=\"fa fa-trash\"></i> </button></td>\n\n        </tr>\n\n        <tr *ngIf=\"tags?.length == 0\">\n            <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this document'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteDocumentDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/estimate-document/estimate-document.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/estimate-document/estimate-document.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.error {\n  color: #ff0000; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-document/estimate-document.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/estimate-document/estimate-document.component.ts ***!
  \*************************************************************************/
/*! exports provided: EstimateDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateDocumentComponent", function() { return EstimateDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/document.service */ "./src/app/services/document.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var EstimateDocumentComponent = /** @class */ (function () {
    function EstimateDocumentComponent(formBuilder, router, alertService, httpDocumentService, uploadService, modalService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpDocumentService = httpDocumentService;
        this.uploadService = uploadService;
        this.modalService = modalService;
        this.btnName = 'Upload document';
        this.loading = false;
        this.submitted = false;
        this.dtOptions = {};
        this.errors = [];
        this.fileExt = 'PDF, JPG, GIF, PNG';
        this.maxFiles = 5;
        this.maxSize = 5; // 5MB
        this.uploadStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EstimateDocumentComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.documentId = 0;
        this.itemId = Number(localStorage.getItem('itemId'));
        this.documentId = Number(localStorage.getItem('documentId'));
        if (this.documentId > 0) {
            this.btnName = 'Update';
            this.getDocumentDetail(this.documentId);
        }
        this.bindDocumentTables();
    };
    EstimateDocumentComponent.prototype.buildForm = function () {
        this.documentForm = this.formBuilder.group({
            ItemId: [localStorage.getItem('itemId')],
            DocumentId: [this.documentId],
            DocCaption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DocPath: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    EstimateDocumentComponent.prototype.bindDocumentTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.documentOptions = {
                    estimateId: localStorage.getItem('estimateId'),
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
    EstimateDocumentComponent.prototype.getDocumentDetail = function (documentId) {
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
    Object.defineProperty(EstimateDocumentComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.documentForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EstimateDocumentComponent.prototype.onSubmit = function (documentDetail) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.documentForm.invalid || this.errors.length > 0) {
            return;
        }
        else {
            //  this.loading = true;
            this.SaveFileOnServer(this.fileList, documentDetail);
            // this.loading = false;
        }
        // documentDetail.EstimateId = localStorage.getItem('estimateId');
        // documentDetail.DocumentId = localStorage.getItem('documentId');
        // documentDetail.File = this.fileName;
        // documentDetail.DocPath = this.fileName;
        // this.loading = true;
        // this.httpDocumentService.create(documentDetail)
        //     .subscribe(
        //         data => {
        //             this.reBindDocumentTable();
        //             this.alertService.success(this.documentId > 0 ?'Document updated successfully': 'Document save successfully', true);
        //             this.loading  = false;
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    };
    EstimateDocumentComponent.prototype.uploadFile = function (event) {
        this.errors = []; // Clear error
        this.fileList = event.target.files;
        this.isValidFileExtension(this.fileList);
        //this.file =  event.target.files;
        //   this.SaveFileOnServer(fileList);
    };
    EstimateDocumentComponent.prototype.SaveFileOnServer = function (fileList, documentDetail) {
        var _this = this;
        if (fileList.length == 0) {
            console.log('No file selected!');
            return;
        }
        if (fileList.length > 0) {
            this.fileName = fileList[0].name;
            var file = fileList[0];
            var parameters = {
                estimateId: Number(localStorage.getItem('estimateId')),
                documentId: Number(localStorage.getItem('documentId')),
                fileName: this.fileName,
                docCaption: documentDetail.DocCaption,
            };
            this.uploadService.uploadFile('Documents/Upload', file, parameters)
                .subscribe(function (event) {
                // if (event.type == HttpEventType.UploadProgress) {
                //     const percentDone = Math.round(100 * event.loaded / event.total);
                //     console.log(`File is ${percentDone}% loaded.`);
                // } else if (event instanceof HttpResponse) {
                //     console.log('File is completely loaded!');
                // }
            }, function (err) {
                console.log('Upload Error:', err);
            }, function () {
                _this.reBindDocumentTable();
                _this.alertService.success(_this.documentId > 0 ? 'Document updated successfully' : 'Document save successfully', true);
            });
        }
    };
    EstimateDocumentComponent.prototype.goToEstimateCbd = function () {
        this.router.navigate(['estimate/cbd']);
    };
    EstimateDocumentComponent.prototype.goToEstimateItem = function () {
        this.router.navigate(['estimate/item']);
    };
    EstimateDocumentComponent.prototype.showDeleteDocumentConfirmationModal = function (doumentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isdelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteDocumentDialog')];
                    case 1:
                        isdelete = _a.sent();
                        if (isdelete) {
                            this.loading = true;
                            this.httpDocumentService.updateActive(doumentId, false)
                                .subscribe(function (data) {
                                _this.reBindDocumentTable();
                                _this.alertService.success('Document deleted successfully', true);
                                _this.loading = false;
                            }, function (error) {
                                _this.alertService.error(error);
                                _this.loading = false;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateDocumentComponent.prototype.isValidFileExtension = function (files) {
        // Make array of file extensions
        var extensions = (this.fileExt.split(','))
            .map(function (x) {
            return x.toLocaleUpperCase().trim();
        });
        for (var i = 0; i < files.length; i++) {
            // Get file extension
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists
            var exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push('Error (Extension): ' + files[i].name);
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    };
    EstimateDocumentComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push('Error (File Size): ' + file.name + ': exceed file size limit of ' + this.maxSize + 'MB ( ' + size + 'MB )');
    };
    EstimateDocumentComponent.prototype.reBindDocumentTable = function () {
        this.documentOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.documents = [];
        this.dtElement.dtInstance.then(function (dtInstance) {
            //draw the table first
            dtInstance.draw();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], EstimateDocumentComponent.prototype, "dtElement", void 0);
    EstimateDocumentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-documents',
            template: __webpack_require__(/*! ./estimate-document.component.html */ "./src/app/layout/estimate-document/estimate-document.component.html"),
            styles: [__webpack_require__(/*! ./estimate-document.component.scss */ "./src/app/layout/estimate-document/estimate-document.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_7__["PaModalService"]])
    ], EstimateDocumentComponent);
    return EstimateDocumentComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-item/estimate-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimate-item/estimate-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Item search</h5>\n<hr>\n<item-detail [dialogName]=\"'itemDetailDialog'\" [item]=\"item\"></item-detail>\n<estimate-data></estimate-data>\n<hr>\n\n    <div *ngIf=\"expandAccordion\" class=\"accordion-border\">\n        <ng-container>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-12\">\n            <form [formGroup]=\"estimateitemForm\" (ngSubmit)=\"onSubmit(estimateitemForm.value)\">\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label> Category</label>\n\n                            <select class=\"form-control\" formControlName='CategoryId' class=\"form-control\"\n                                    [(ngModel)]=\"itemSearchModal.CategoryId\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.CategoryId.errors }\"\n                                    (change)=\"onCategoryChange($event.target.value)\">\n                                <option value=\"0\">All</option>\n                                <option *ngFor=\"let category of categoryModel\" [ngValue]=\"category.LTagId\"\n                                        [(value)]=\"category.LTagId\">{{category.TagDescr}}\n                                </option>\n                            </select>\n                            <div *ngIf=\"submitted && f.CategoryId.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.CategoryId.errors.required\">Category is required</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label> Sub Category name</label>\n                            <select class=\"form-control\" formControlName='SubCategoryId' class=\"form-control\"\n                                    [(ngModel)]=\"itemSearchModal.SubCategoryId\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.SubCategoryId.errors }\">\n                                <option value=\"0\">All</option>\n                                <option *ngFor=\"let subcategory of subCategoryModel\" [(value)]=\"subcategory.LTagId\">\n                                    {{subcategory.TagDescr}}\n                                </option>\n                            </select>\n\n                            <div *ngIf=\"submitted && f.SubCategoryId.errors\" class=\"invalid-feedback\">\n                                <div *ngIf=\"f.SubCategoryId.errors.required\">Sub Category is required</div>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label> Item Name</label>\n                            <input class=\"form-control\" formControlName='ItemName'\n                                   [(ngModel)]=\"itemSearchModal.ItemName\"\n                                   class=\"form-control\"/>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label> </label>\n                            <button [disabled]=\"loading\" class=\"form-control btn btn-primary btn-space\">Search</button>\n                        </div>\n                    </div>\n\n                </div>\n\n            </form>\n            <div class=\"items-area\">\n                <table datatable [dtOptions]=\"dtOptions\" class=\"table item-table display table-body  table-bordered\">\n                    <thead>\n                    <tr>\n                        <th>Item Code</th>\n                        <th>Item Name</th>\n                        <th>Category </th>\n                        <th>Sub Category </th>\n                        <th>Unit</th>\n                        <th>Unit Price</th>\n                        <th>Action</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let item of items;\">\n                        <td>{{ item.ItemCode }}</td>\n                        <td>{{ item.ItemDescr }}</td>\n                        <td>{{ item.CategoryName }}</td>\n                        <td>{{ item.SubCategoryName }}</td>\n                        <td>{{ item.Unit }}</td>\n                        <td class=\"text-right\">{{ item.UnitPrice | currency:'USD':'symbol-narrow':'1.2-2' }}</td>\n                        <td class=\"action-btn\">\n                                <i class=\"fa fa-plus\" (click)=\"showItemDetailDialog(item)\" title=\"add item\"></i>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"items?.length == 0\">\n                        <td colspan=\"7\" class=\"no-data-available\">No data!</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            </div>\n        </ng-container>\n    </div>\n\n<!--<div class=\"form-group\">-->\n    <!--<button [disabled]=\"loading\" type=\"button\" class=\"btn btn-primary btn-space\" (click)=\"gotoEstimateMarkups()\">{{btnName}}<i class=\"fa fa-long-arrow-right\"></i>-->\n    <!--</button>-->\n    <!--<img *ngIf=\"loading\"-->\n         <!--src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>-->\n    <!--<button (click)=\"goToEstimateDocument()\" class=\"btn btn-secondary\">Previous</button>-->\n<!--</div>-->\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this item'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteEstimatedItemDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/estimate-item/estimate-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimate-item/estimate-item.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.item-table {\n  width: 100% !important; }\n\n/*\r\n   server-side-angular-way.component.css\r\n*/\n\n.no-data-available {\n  text-align: center; }\n\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n\n.dataTables_empty {\n  display: none; }\n\n/*start accordin*/\n\n.accordion-border {\n  width: 100%; }\n\n#observation-accordion {\n  width: 100%; }\n\n.accordion {\n  width: 100%;\n  border-radius: 5px;\n  border: solid 2px #dcd0e2;\n  display: inline-block;\n  background-color: #ffffff; }\n\n.accordion-header {\n  cursor: pointer;\n  line-height: 55px; }\n\n.accordion-header-bar {\n  width: 100%;\n  height: 4px;\n  margin-top: -2px;\n  border-radius: 4px 4px 0 0;\n  background-color: #90caf9; }\n\n.accordion-title {\n  text-align: left;\n  font-weight: bold;\n  float: left;\n  width: 48%;\n  padding: 0 0 0 20px; }\n\n.accordion-icon {\n  text-align: right;\n  float: right;\n  margin-right: 10px; }\n\n.icon {\n  color: #a98ab6;\n  font-size: 24px;\n  text-align: right; }\n\n.accordion-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 50px; }\n\n.accordion-column-header {\n  width: 100%;\n  background-color: #f4f1f5;\n  font-size: 12px;\n  font-weight: bold;\n  color: #7e6787; }\n\n.observation-matter-header {\n  text-align: left;\n  font-size: 12px;\n  font-weight: bold;\n  vertical-align: middle;\n  color: #a98ab6; }\n\n.checkbox-header {\n  margin: 0% 0% 30px 2%;\n  flex: 0 0 4%; }\n\n.header-description {\n  text-align: left;\n  flex: 1 1 0%; }\n\n.header-current-level {\n  text-align: left;\n  flex: 0 0 21.8%;\n  margin-right: 12px; }\n\n.header-observed-level {\n  text-align: left;\n  width: 20%;\n  flex: 0 0 20.3%; }\n\n.development-matters {\n  float: left;\n  line-height: 26px;\n  margin-right: 8px; }\n\n.info-icon {\n  width: 21px;\n  height: 21px;\n  font-size: 24px;\n  text-align: left;\n  color: #a98ab6; }\n\n.observed-level {\n  float: left;\n  line-height: 32px;\n  margin-right: 8px;\n  padding-left: 12px; }\n\n.float-left {\n  float: left;\n  margin-top: 3px; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-item/estimate-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/estimate-item/estimate-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: EstimateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateItemComponent", function() { return EstimateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item-detail/item-detail.component */ "./src/app/layout/estimate-item/item-detail/item-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var EstimateItemComponent = /** @class */ (function () {
    function EstimateItemComponent(formBuilder, router, alertService, httpEstimateService, modalService, httpTagsService, httpItemService, itemDetailComponent) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.modalService = modalService;
        this.httpTagsService = httpTagsService;
        this.httpItemService = httpItemService;
        this.itemDetailComponent = itemDetailComponent;
        this.btnName = 'Continue';
        this.dtOptions = {};
        this.dtEstimateItemOptions = {};
        this.loading = false;
        this.submitted = false;
        this.items = [];
        this.estimateitems = [];
        this.isApplicable = false;
        this.expandAccordion = true;
    }
    EstimateItemComponent.prototype.ngOnInit = function () {
        this.buildForm();
        if (this.estimateId > 0) {
            this.btnName = 'Update and Continue';
        }
        this.getCategoryList();
        this.item = {
            EstimateItemId: Number(localStorage.getItem('estimateItemId')),
            EstimateId: Number(localStorage.getItem('estimateId')),
            OrganizationId: 0,
            OrganizationName: '',
            AdjustedItemName: '',
            AdjustLTypeId: 0,
            AdjustmentType: '',
            AdjustmentValue: 0,
            AdjustedUnitCost: 0,
            Qty: 0,
            TotalCost: 0,
            CostBreakDownId: 0,
            CostBreakDownHeading: '',
            CostBreakDownName: '',
            ItemId: '',
            ItemCode: '',
            Note: '',
            Remarks: '',
            Category: '',
            SubCategory: '',
            Unit: '',
            UnitPrice: ''
        };
        this.itemSearchModal = { OrganizationId: localStorage.getItem('organizationId'), CategoryId: 0, SubCategoryId: 0, ItemName: '', InitializeItem: true };
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: 0,
            SubCategoryId: 0,
            ItemName: ''
        };
        this.getItem();
    };
    EstimateItemComponent.prototype.onSubmit = function (searchItem) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.estimateitemForm.invalid) {
            return;
        }
        this.itemSearchModal = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: searchItem.CategoryId,
            SubCategoryId: searchItem.SubCategoryId,
            ItemName: searchItem.ItemName,
            InitializeItem: false,
        };
        this.reDrawTable();
    };
    EstimateItemComponent.prototype.onCategoryChange = function (categoryId) {
        this.getSubCategoryList(categoryId);
    };
    EstimateItemComponent.prototype.buildForm = function () {
        this.estimateitemForm = this.formBuilder.group({
            CategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SubCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ItemName: ['']
        });
    };
    Object.defineProperty(EstimateItemComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.estimateitemForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EstimateItemComponent.prototype.reDrawTable = function () {
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: this.itemSearchModal.CategoryId,
            SubCategoryId: this.itemSearchModal.SubCategoryId,
            ItemName: this.itemSearchModal.ItemName
        };
        this.items = [];
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    EstimateItemComponent.prototype.getItem = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.itemOptions = {
                    OrganizationId: localStorage.getItem('organizationId'),
                    CategoryId: _this.itemSearchModal.CategoryId,
                    SubCategoryId: _this.itemSearchModal.SubCategoryId,
                    ItemName: _this.itemSearchModal.ItemName,
                };
                dataTablesParameters.itemOptions = _this.itemOptions;
                _this.httpItemService.searchItem(dataTablesParameters).subscribe(function (resp) {
                    _this.items = _this.itemSearchModal.InitializeItem == true ? [] : resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'ItemCode' }, { data: 'ItemDescr' }, { data: 'CategoryName' }, { data: 'SubCategoryName' }, { data: 'Unit' }, { data: 'UnitPrice' }]
        };
    };
    EstimateItemComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', Number(localStorage.getItem('organizationId')), true)
            .subscribe(function (categories) {
            _this.categoryModel = categories;
        });
    };
    EstimateItemComponent.prototype.getSubCategoryList = function (categoryId) {
        var _this = this;
        this.httpTagsService.getTagsByTypeAndParentId('Sub Category', categoryId, true)
            .subscribe(function (subcategories) {
            _this.subCategoryModel = subcategories;
        });
    };
    EstimateItemComponent.prototype.goToEstimateDocument = function () {
        this.router.navigate(['estimate/document']);
    };
    EstimateItemComponent.prototype.gotoEstimateMarkups = function () {
        this.router.navigate(['estimate/markups']);
    };
    EstimateItemComponent.prototype.showItemDetailDialog = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var searchItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item = {
                            EstimateItemId: 0,
                            EstimateId: Number(localStorage.getItem('estimateId')),
                            OrganizationId: 0,
                            OrganizationName: '',
                            AdjustedItemName: item.ItemDescr,
                            AdjustLTypeId: 0,
                            AdjustmentType: '%',
                            AdjustmentValue: 0,
                            AdjustedUnitCost: 0,
                            Qty: 0,
                            TotalCost: 0,
                            CostBreakDownId: 0,
                            CostBreakDownHeading: '',
                            CostBreakDownName: '',
                            ItemId: item.ItemId,
                            ItemCode: item.ItemCode,
                            Note: '',
                            Remarks: '',
                            Category: item.CategoryName,
                            SubCategory: item.SubCategoryName,
                            Unit: item.Unit,
                            UnitPrice: item.UnitPrice
                        };
                        return [4 /*yield*/, this.modalService.showDialog('itemDetailDialog')];
                    case 1:
                        searchItem = _a.sent();
                        if (searchItem == true) {
                            // this.getEstimatedItem();
                            this.router.navigate(['/estimate/estimated-item']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstimateItemComponent.prototype, "isApplicable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstimateItemComponent.prototype, "expandAccordion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], EstimateItemComponent.prototype, "dtElement", void 0);
    EstimateItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-item',
            template: __webpack_require__(/*! ./estimate-item.component.html */ "./src/app/layout/estimate-item/estimate-item.component.html"),
            styles: [__webpack_require__(/*! ./estimate-item.component.scss */ "./src/app/layout/estimate-item/estimate-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__["EstimateService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__["PaModalService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"],
            _services_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"],
            _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailComponent"]])
    ], EstimateItemComponent);
    return EstimateItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-item/item-detail/item-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/estimate-item/item-detail/item-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pa-modal #modal dialogName=\"{{dialogName}}\" [hideHeaderAndFooter]=\"true\" (modalClosed)=\"modal.resolve()\"\n          [modalDesign]=\"'full-modal'\" [modalBodyCss]=\"'modal-full-body'\" >\n    <div class=\"modal-overlay\"></div>\n\n    <div content class=\"{{modal}}\">\n        <h5>Item Detail</h5>\n        <hr>\n\n\n        <form [formGroup]=\"itemDetailForm\" (ngSubmit)=\"onSubmit(itemDetailForm.value)\">\n                <div>\n                    <ng-container>\n\n                        <table class=\"table item-table table-bordered display table-body\">\n                            <tr class=\"even\">\n                                <td class=\"text-width \">Item Code:</td>\n                                <td> {{item.ItemCode}}</td>\n                            </tr>\n                            <tr class=\"odd \">\n                                <td>Item Name</td>\n                                <td><input class=\"form-control\" formControlName='AdjustedItemName'\n                                           [(ngModel)]=\"item.AdjustedItemName\" class=\"form-control\"\n                                           [ngClass]=\"{ 'is-invalid': submitted && f.AdjustedItemName.errors }\"/>\n                                    <div *ngIf=\"submitted && f.AdjustedItemName.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.AdjustedItemName.errors.required\">Item Description is required\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr class=\"even\">\n                                <td>Category Name</td>\n                                <td> {{item.Category}}</td>\n                            </tr>\n                            <tr class=\"odd\">\n                                <td>Sub Category Name</td>\n                                <td>{{item.SubCategory}}</td>\n                            </tr>\n                            <tr class=\"even\">\n                                <td>Unit</td>\n                                <td>{{item.Unit}}</td>\n                            </tr>\n                            <tr class=\"odd\">\n                                <td>Notes / Source Data</td>\n                                <td> {{item.Remarks}}</td>\n                            </tr>\n\n                            <tr class=\"odd\">\n                                <td>Cost Break Down</td>\n                                <td>\n\n                                    <div *ngIf=\"costBreakDown=='disabled'\">\n                                        <select class=\"form-control\" formControlName='CostBreakDownId' [(ngModel)]=\"item.CostBreakDownId\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.CostBreakDownId.errors }\" disabled=\"costBreakDown\">\n                                            <option value=\"\">Please select</option>\n                                            <option *ngFor=\"let cbdItem of costBreakDownItemModel\"\n                                                    [ngValue]=\"cbdItem.CostBreakDownId\">\n                                                {{cbdItem.CostBreakDownName}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                    <div *ngIf=\"costBreakDown === ''\">\n                                        <select class=\"form-control\" formControlName='CostBreakDownId' [(ngModel)]=\"item.CostBreakDownId\" class=\"form-control\"\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.CostBreakDownId.errors }\">\n                                            <option value=\"\">Please select</option>\n                                            <option *ngFor=\"let cbdItem of costBreakDownItemModel\"\n                                                    [ngValue]=\"cbdItem.CostBreakDownId\">\n                                                {{cbdItem.CostBreakDownName}}\n                                            </option>\n                                        </select>\n                                    </div>\n\n                                    <div *ngIf=\"submitted && f.CostBreakDownId.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.CostBreakDownId.errors\">Cost Break Down Item is\n                                            required\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                          <tr>\n                              <td>Unit Cost</td>\n                              <td> <label class=\"form-control label-disabled\"> {{ item.UnitPrice |\n                                  currency:'USD':true:'1.2-2'}} </label></td>\n                          </tr>\n                            <tr>\n                                <td> Adjustment Amount</td>\n                                <td> <label *ngFor=\"let adjustmentType of adjustmentTypeModel\">\n                                    <input type=\"radio\" formControlName='AdjustmentType' [ngModel]=\"item.AdjustmentType\"\n                                           [checked]=\"adjustmentType.AdjustmentType=='%'\"\n                                           [value]=\"adjustmentType.AdjustmentType\" (change)=\"onAdjustmentTypeChange()\">\n                                    {{adjustmentType.AdjustmentType}}\n                                </label>\n                                    <div *ngIf=\"item.AdjustmentType=='%'\">\n                                        <input class=\"form-control\" formControlName='AdjustmentValue' [(ngModel)]=\"item.AdjustmentValue\"\n                                               class=\"form-control\" (change)=\"onAmountChange()\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                                    </div>\n                                    <div *ngIf=\"item.AdjustmentType=='$'\">\n                                        <input class=\"form-control\" currencyMask [options]=\"{ align:'left' }\" formControlName='AdjustmentValue' [(ngModel)]=\"item.AdjustmentValue\"\n                                               class=\"form-control\" (blur)=\"onAmountChange()\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                                    </div>\n\n                                    <div *ngIf=\"submitted && f.AdjustmentValue.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.AdjustmentValue.errors\">Invalid price</div>\n                                    </div></td>\n                            </tr>\n                            <tr>\n                                <td>Adjustment Unit Cost</td>\n                                <td><label class=\"form-control label-disabled \"> {{ item.AdjustedUnitCost |\n                                    currency:'USD':true:'1.2-2'}} </label></td>\n                            </tr>\n                            <tr>\n                                <td>Quantity</td>\n                                <td> <input class=\"form-control\" formControlName='Qty' maxlength=\"6\"   currencyMask [options]=\"{align :'left', prefix :'', precision: 0}\"  [(ngModel)]=\"item.Qty\"  class=\"form-control\"\n                                            [ngClass]=\"{ 'is-invalid': submitted && f.Qty.errors }\"  (blur)=\"onQtyChange()\" />\n\n                                    <div *ngIf=\"submitted && f.Qty.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.Qty.errors.required\">Quantity is required</div>\n                                        <div *ngIf=\"!f.Qty.errors.required && f.Qty.errors\">Invalid Quantity</div>\n                                    </div></td>\n                            </tr>\n                            <tr>\n                                <td>Total Cost</td>\n                                <td> <label class=\"form-control label-disabled \"> {{ item.TotalCost |\n                                    currency:'USD':true:'1.2-2'}} </label></td>\n                            </tr>\n                            <tr>\n                                <td> Adjustment Note</td>\n                                <td> <textarea class=\"form-control\" formControlName='Remarks' [(ngModel)]=\"item.Remarks\"  class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && f.Remarks.errors }\"></textarea>\n                                    <div *ngIf=\"submitted && f.Remarks.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"!f.Remarks.errors.required && f.Remarks.errors\">Note should not be more then 500\n                                            character long\n                                        </div>\n                                    </div></td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"2\" class=\"text-center\">\n                                    <div class=\"form-group\" >\n                                        <button [disabled]=\"loading\" class=\"btn btn-primary btn-space\"><div *ngIf=\"item.EstimateItemId > 0\">Update </div> <div *ngIf=\"item.EstimateItemId == 0\">Save </div></button>\n                                        <button [disabled]=\"loading\" type=\"button\" class=\"btn btn-primary btn-space\" (click)=\"saveAndContinue(itemDetailForm.value)\" *ngIf=\"item.EstimateItemId == 0\"><div>Save & Continue </div></button>\n                                        <img *ngIf=\"loading\"\n                                             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n                                        <a (click)=\"gotoEstimateItem()\" class=\"btn btn-link\">Cancel</a>\n                                    </div>\n                                </td>\n\n                            </tr>\n                        </table>\n                    </ng-container>\n                </div>\n\n        </form>\n\n    </div>\n</pa-modal>\n"

/***/ }),

/***/ "./src/app/layout/estimate-item/item-detail/item-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/estimate-item/item-detail/item-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-space {\n  margin-right: 5px; }\n\nh5 {\n  color: #00b3ee; }\n\n.table th, .table td {\n  padding: 0.25rem; }\n\n.accordion-border {\n  width: 100%; }\n\n#observation-accordion {\n  width: 100%; }\n\n.accordion {\n  width: 100%;\n  border-radius: 5px;\n  border: solid 2px #dcd0e2;\n  display: inline-block;\n  background-color: #ffffff; }\n\n.accordion-header {\n  cursor: pointer;\n  line-height: 55px; }\n\n.accordion-header-bar {\n  width: 100%;\n  height: 4px;\n  margin-top: -2px;\n  border-radius: 4px 4px 0 0;\n  background-color: #90caf9; }\n\n.accordion-title {\n  text-align: left;\n  font-weight: bold;\n  float: left;\n  width: 48%;\n  padding: 0 0 0 20px; }\n\n.accordion-icon {\n  text-align: right;\n  float: right;\n  margin-right: 10px; }\n\n.icon {\n  color: #a98ab6;\n  font-size: 24px;\n  text-align: right; }\n\n.accordion-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 50px; }\n\n.accordion-column-header {\n  width: 100%;\n  background-color: #f4f1f5;\n  font-size: 12px;\n  font-weight: bold;\n  color: #7e6787; }\n\n.observation-matter-header {\n  text-align: left;\n  font-size: 12px;\n  font-weight: bold;\n  vertical-align: middle;\n  color: #a98ab6; }\n\n.checkbox-header {\n  margin: 0% 0% 30px 2%;\n  flex: 0 0 4%; }\n\n.header-description {\n  text-align: left;\n  flex: 1 1 0%; }\n\n.header-current-level {\n  text-align: left;\n  flex: 0 0 21.8%;\n  margin-right: 12px; }\n\n.header-observed-level {\n  text-align: left;\n  width: 20%;\n  flex: 0 0 20.3%; }\n\n.development-matters {\n  float: left;\n  line-height: 26px;\n  margin-right: 8px; }\n\n.info-icon {\n  width: 21px;\n  height: 21px;\n  font-size: 24px;\n  text-align: left;\n  color: #a98ab6; }\n\n.observed-level {\n  float: left;\n  line-height: 32px;\n  margin-right: 8px;\n  padding-left: 12px; }\n\n.float-left {\n  float: left;\n  margin-top: 3px; }\n\n.odd {\n  background-color: #ffffff; }\n\n.even {\n  background-color: #ffffff; }\n\n.text-width {\n  width: 23%; }\n\n.item-table {\n  margin: 10px;\n  width: 98%; }\n\n.label-disabled {\n  background-color: #e9ecef;\n  opacity: 1; }\n\n.form-group {\n  margin-bottom: 0.25rem; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-item/item-detail/item-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/estimate-item/item-detail/item-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/pa-modal/pa-modal.component */ "./src/app/layout/Shared/pa-modal/pa-modal.component.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _model_EstimatedItemsModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/EstimatedItemsModel */ "./src/app/model/EstimatedItemsModel.ts");
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
    function ItemDetailComponent(formBuilder, router, alertService, httpItemService, httpEstimateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpItemService = httpItemService;
        this.httpEstimateService = httpEstimateService;
        this.dtOptions = {};
        this.btnName = 'Add';
        this.loading = false;
        this.submitted = false;
        this.adjustmentTypeModel = [];
        this.estimateItemId = 0;
        this.costBreakDown = 'disabled';
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        this.estimateItemId = Number(localStorage.getItem('estimateItemId'));
        this.buildForm();
        this.adjustmentTypeModel.push({ AdjustmentType: '$', Checked: 'checked' });
        this.adjustmentTypeModel.push({ AdjustmentType: '%', Checked: '' });
        this.getCostBreakDownItemList();
        // setInterval(() => {this.adjustmentCost(); },500);
    };
    ItemDetailComponent.prototype.buildForm = function () {
        this.itemDetailForm = this.formBuilder.group({
            EstimateItemId: [''],
            AdjustmentType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            AdjustedItemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)]],
            AdjustmentValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
            AdjustedUnitCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            //Qty: ['', [Validators.required, Validators.pattern('^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$')]],
            Qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(\\$?\\d{1,3}(,?\\d{3})?(\\.\\d\\d?)?|\\(\\$?\\d{1,3}(,?\\d{3})?(\\.\\d\\d?)?\\))$')]],
            Remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500)]],
            CostBreakDownId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.itemDetailForm.patchValue({
            EstimateItemId: this.item.EstimateItemId,
            AdjustmentType: this.item.AdjustmentType,
            AdjustedItemName: this.item.AdjustedItemName,
            AdjustmentValue: this.item.AdjustmentValue,
            AdjustedUnitCost: this.item.AdjustedUnitCost,
            Qty: this.item.Qty,
            Remarks: '',
            CostBreakDownId: this.item.CostBreakDownId
        });
    };
    Object.defineProperty(ItemDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.itemDetailForm.controls; },
        enumerable: true,
        configurable: true
    });
    ItemDetailComponent.prototype.onSubmit = function (itemDetailForm) {
        this.saveItem(itemDetailForm);
    };
    ItemDetailComponent.prototype.saveItem = function (itemDetailForm) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.itemDetailForm.invalid) {
            return;
        }
        if (this.estimateItemId > 0) {
            itemDetailForm.EstimateItemId = this.estimateItemId;
        }
        itemDetailForm.ItemId = this.item.ItemId;
        itemDetailForm.EstimateId = Number(localStorage.getItem('estimateId'));
        itemDetailForm.EstimateItemId = this.item.EstimateItemId;
        itemDetailForm.AdjustedUnitCost = this.item.AdjustedUnitCost;
        itemDetailForm.UnitPrice = this.item.UnitPrice;
        itemDetailForm.TotalCost = this.item.TotalCost;
        this.loading = true;
        this.httpEstimateService.createEstimateItem(itemDetailForm)
            .subscribe(function (data) {
            _this.alertService.success(_this.estimateItemId > 0 ? 'Item updated successfully' : 'Item save successfully', true);
            _this.loading = false;
            _this.modal.resolve(true);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ItemDetailComponent.prototype.saveAndContinue = function (itemDetailForm) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.itemDetailForm.invalid) {
            return;
        }
        if (this.estimateItemId > 0) {
            itemDetailForm.EstimateItemId = this.estimateItemId;
        }
        itemDetailForm.ItemId = this.item.ItemId;
        itemDetailForm.EstimateId = Number(localStorage.getItem('estimateId'));
        itemDetailForm.EstimateItemId = this.item.EstimateItemId;
        itemDetailForm.AdjustedUnitCost = this.item.AdjustedUnitCost;
        itemDetailForm.UnitPrice = this.item.UnitPrice;
        itemDetailForm.TotalCost = this.item.TotalCost;
        this.loading = true;
        this.httpEstimateService.createEstimateItem(itemDetailForm)
            .subscribe(function (data) {
            _this.alertService.success(_this.estimateItemId > 0 ? 'Item updated successfully' : 'Item save successfully', true);
            _this.loading = false;
            _this.modal.resolve(false);
            _this.router.navigate(['estimate/item']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ItemDetailComponent.prototype.getCostBreakDownItemList = function () {
        var _this = this;
        this.httpEstimateService.getEstimateCbdList(Number(localStorage.getItem('estimateId')))
            .subscribe(function (cbdItem) {
            _this.costBreakDownItemModel = cbdItem;
            if (_this.costBreakDownItemModel.length > 0) {
                _this.costBreakDown = '';
            }
        });
    };
    ItemDetailComponent.prototype.gotoEstimateItem = function () {
        this.buildForm();
        this.modal.resolve(false);
    };
    ItemDetailComponent.prototype.onAdjustmentTypeChange = function () {
        this.adjustmentCost();
    };
    ItemDetailComponent.prototype.onAmountChange = function () {
        this.adjustmentCost();
    };
    ItemDetailComponent.prototype.onQtyChange = function () {
        this.calculateCost();
    };
    ItemDetailComponent.prototype.adjustmentCost = function () {
        var adjustmentType = this.f.AdjustmentType.value;
        var adjustmentValue = this.f.AdjustmentValue.value;
        this.item.AdjustmentType = adjustmentType;
        if (adjustmentType === '$') {
            this.item.AdjustedUnitCost = Number(this.item.UnitPrice) + Number(adjustmentValue);
        }
        else {
            var amount = Number(this.item.UnitPrice) * Number(Number(adjustmentValue) / Number(100));
            this.item.AdjustedUnitCost = Number(this.item.UnitPrice) + Number(amount);
        }
        this.calculateCost();
    };
    ItemDetailComponent.prototype.calculateCost = function () {
        var qty = this.f.Qty.value;
        var adjustedUnitCost = this.item.AdjustedUnitCost;
        if (adjustedUnitCost > 0)
            this.item.TotalCost = Number(qty) * Number(adjustedUnitCost);
        else {
            this.item.TotalCost = Number(qty) * Number(this.item.UnitPrice);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ItemDetailComponent.prototype, "dialogName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_4__["PaModalComponent"])
    ], ItemDetailComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_EstimatedItemsModel__WEBPACK_IMPORTED_MODULE_7__["EstimatedItemsModel"])
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'item-detail',
            template: __webpack_require__(/*! ./item-detail.component.html */ "./src/app/layout/estimate-item/item-detail/item-detail.component.html"),
            styles: [__webpack_require__(/*! ./item-detail.component.scss */ "./src/app/layout/estimate-item/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _services_items_service__WEBPACK_IMPORTED_MODULE_5__["ItemsService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_6__["EstimateService"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-markups/estimate-markups.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/estimate-markups/estimate-markups.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Markups and Adjustments</h5>\n<hr>\n<estimate-data></estimate-data>\n<hr>\n    <markup-detail [dialogName]=\"'markupDetailDialog'\"  estimateId=\"estimateId\" [displayOrder]=\"displayOrder\" [parentMarkupId]=\"parentMarkupId\" [markupName]=\"markupName\" [estimateMarkupsModel]=\"estimateMarkupsModel\" [markupSubTotal]=\"constructionTotal\"></markup-detail>\n<div class=\"text-right\"><button type=\"button\" class=\"btn btn-primary  btn-space\" (click)=\"showDetailDialog('Other Construction')\"> Add Other Construction </button>\n                        <button type=\"button\" class=\"btn btn-primary \" (click)=\"showDetailDialog('Other Project Cost')\"> Add Other Project Cost </button>\n</div>\n<br/>\n    <table class=\"table table-bordered display table-body\">\n\n        <tr *ngFor=\"let markup of estimatemarkups; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n\n            <td><div [ngClass]=\" {'bold-text': markup.MarkupType ==='Single'}\">\n\n                {{markup.MarkupName}}\n\n            </div>\n                <div *ngIf=\"markup.MarkupName !='Years - Midpoint Construction' && (markup.MarkupType =='Fixed' || markup.MarkupType =='Other Construction' || markup.MarkupType =='Other Project Cost')\">\n                    <label *ngFor=\"let adjustmentType of adjustmentTypeModel\">\n                        <input type=\"radio\"  [name]=\"markup.MarkupId\"  (change)=\"onAdjustmentTypeChange(markup, adjustmentType)\"\n                               [checked]=\"adjustmentType.LAdjustmentTypeId == markup.LAdjustmentTypeId\"\n                              [value]=\"adjustmentType.LAdjustmentTypeId\" >\n                        {{adjustmentType.AdjustmentType}}\n                    </label>\n                </div>\n                <div  *ngIf=\"markup.MarkupType ==='Multiple'\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"showMarkupDetailDialog(markup)\"> Add</button>\n                </div>\n            </td>\n            <td>\n                <div class=\"row col-md-12\">\n                    <div *ngIf=\"markup.MarkupType !=='Single' && markup.AdjustmentType=='$'\" >\n                        <input class=\"form-control\" name='AdjustmentValue' [(ngModel)]=\"markup.AdjustmentValue\" currencyMask [options]=\"{ align:'left' }\" (blur)=\"onAmountChange(markup)\"\n                               [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                    </div>\n                    <div *ngIf=\"markup.MarkupType !=='Single' && markup.AdjustmentType=='%'\" >\n                        <input class=\"form-control\" name='AdjustmentValue' [(ngModel)]=\"markup.AdjustmentValue\" (change)=\"onAmountChange(markup)\"\n                               [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                    </div>\n                    <div *ngIf=\"markup.MarkupType === 'Fixed Single'\">\n                        <label class=\"form-control label-disabled text-right\"> % </label>\n                    </div>\n                </div>\n\n            </td>\n            <td>\n\n                <div *ngIf=\"markup.MarkupType != 'Fixed Single'\">\n                    <label class=\"form-control label-disabled text-right\"> {{ markup.AdjustmentTotal |\n                        currency:'USD':true:'1.2-2'}} </label>\n                </div>\n            </td>\n            <td class=\"action-btn\">\n               <div  *ngIf=\"markup.MarkupType =='Other Construction' || markup.MarkupType =='Other Project Cost'\" >\n                   <div class=\"float-left\">\n                           <i class=\"fa fa-pencil\" title=\"edit item\"  (click)=\"showEditMarkupDetailDialog(markup.MarkupType ==='Other Construction' ?'Other Construction':'Other Project Cost',markup.MarkupId)\"></i>\n                   </div>\n                   <i class=\"fa fa-trash\" (click)=\"showDeleteEstimateMarkupConfirmationModal(markup.MarkupId)\"></i>\n               </div>\n            </td>\n        </tr>\n    </table>\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this adjustment'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteEstimatedMarkupDialog'\"></pa-delete-confirmation-modal-component>\n    <div class=\"form-group\">\n\n        <button [disabled]=\"loading\" class=\"btn btn-primary btn-space\"  (click)=\"saveMarkups()\" >{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/layout/estimate-markups/estimate-markups.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/estimate-markups/estimate-markups.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.label-disabled {\n  background-color: #e9ecef;\n  opacity: 1; }\n\n.markup-table {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%; }\n\n.bold-text {\n  font-weight: bold; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-markups/estimate-markups.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/estimate-markups/estimate-markups.component.ts ***!
  \***********************************************************************/
/*! exports provided: EstimateMarkupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateMarkupsComponent", function() { return EstimateMarkupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var _markup_detail_markup_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markup-detail/markup-detail.component */ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var EstimateMarkupsComponent = /** @class */ (function () {
    function EstimateMarkupsComponent(formBuilder, router, alertService, httpEstimateService, modalService, markupDetailComponent) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.modalService = modalService;
        this.markupDetailComponent = markupDetailComponent;
        this.btnName = 'Save';
        this.loading = false;
        this.submitted = false;
        this.estimatemarkups = [];
        this.adjustmentTypeModel = [];
        this.markupName = '';
        this.displayOrder = 0;
        this.otherRequirementMarkupId = 0;
        this.otherProjectCostMarkupId = 0;
        this.otherRequirementDisplayOrder = 0;
        this.otherProjectCostDisplayOrder = 0;
        this.estimateId = Number(localStorage.getItem('estimateId'));
    }
    EstimateMarkupsComponent.prototype.ngOnInit = function () {
        this.estimateMarkupsModel = {
            EstimateId: this.estimateId,
            ParentMarkupId: 0,
            ConstructionTotal: 0,
            MarkupId: 0,
            MarkupName: '',
            AdjustmentTotal: 0,
            AdjustmentValue: 0,
            AdjustmentType: '%',
            MarkupType: '',
            LAdjustmentTypeId: 0,
            DisplayOrder: 0,
            MarkupTotal: 0,
        };
        this.adjustmentTypeModel.push({ AdjustmentType: '$', LAdjustmentTypeId: 56498 });
        this.adjustmentTypeModel.push({ AdjustmentType: '%', LAdjustmentTypeId: 56497 });
        this.getEstimateMarkups();
        this.getTotalEstimatedCost();
    };
    EstimateMarkupsComponent.prototype.onAdjustmentTypeChange = function (estimateMarkup, adjustmentType) {
        estimateMarkup.AdjustmentType = adjustmentType.AdjustmentType;
        this.adjustmentCost(estimateMarkup);
        this.getEscalationYearsCost();
        this.getTotalProjectCost();
    };
    EstimateMarkupsComponent.prototype.onAmountChange = function (estimateMarkup) {
        this.adjustmentCost(estimateMarkup);
        this.getEscalationYearsCost();
        this.getTotalProjectCost();
    };
    EstimateMarkupsComponent.prototype.goToItem = function () {
        this.router.navigate(['estimate/item']);
    };
    EstimateMarkupsComponent.prototype.getEstimateMarkups = function () {
        var _this = this;
        var estimateId = localStorage.getItem('estimateId');
        this.estimateId = Number(estimateId);
        this.loading = true;
        this.httpEstimateService.getEstimateMarkup(estimateId)
            .subscribe(function (data) {
            _this.estimatemarkups = data;
            _this.loading = false;
            // this.getSubtotalConstruction();
            _this.getOtherRequirementMarkupId();
            _this.getOtherProjectCostMarkupId();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimateMarkupsComponent.prototype.getOtherRequirementMarkupId = function () {
        var _this = this;
        this.httpEstimateService.getEstimateMarkupByEstimateIdAndMarkUpName(this.estimateId, 'Other Construction')
            .subscribe(function (data) {
            _this.estimateMarkupsModel = data;
            _this.otherRequirementMarkupId = _this.estimateMarkupsModel.MarkupId;
            _this.otherRequirementDisplayOrder = _this.estimateMarkupsModel.DisplayOrder;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimateMarkupsComponent.prototype.getOtherProjectCostMarkupId = function () {
        var _this = this;
        this.httpEstimateService.getEstimateMarkupByEstimateIdAndMarkUpName(this.estimateId, 'Other Project Cost')
            .subscribe(function (data) {
            //this.estimateMarkupsModel = data as EstimateMarkupsModel;
            _this.otherProjectCostMarkupId = data.MarkupId;
            _this.otherProjectCostDisplayOrder = data.DisplayOrder;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimateMarkupsComponent.prototype.getTotalEstimatedCost = function () {
        var _this = this;
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(function (resp) {
            _this.itemTotalCost = Number(resp[0].Data.reduce(function (sum, val) { return sum + val.TotalCost; }, 0));
        });
    };
    EstimateMarkupsComponent.prototype.showDetailDialog = function (markupName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.markupName = markupName;
                        localStorage.removeItem('markupId');
                        if (markupName === 'Other Project Cost') {
                            this.getSubtotalConstruction();
                        }
                        this.parentMarkupId = markupName === 'Other Construction' ? this.otherRequirementMarkupId : this.otherProjectCostMarkupId;
                        this.constructionTotal = markupName === 'Other Construction' ? this.itemTotalCost : this.constructionTotal;
                        this.displayOrder = markupName === 'Other Construction' ? this.otherRequirementDisplayOrder : this.otherProjectCostDisplayOrder;
                        this.estimateMarkupsModel = {
                            EstimateId: this.estimateId,
                            ParentMarkupId: this.parentMarkupId,
                            ConstructionTotal: this.constructionTotal,
                            MarkupId: 0,
                            MarkupName: '',
                            AdjustmentTotal: 0,
                            AdjustmentValue: 0,
                            AdjustmentType: '%',
                            MarkupType: '',
                            LAdjustmentTypeId: 0,
                            DisplayOrder: 0,
                            MarkupTotal: this.constructionTotal
                        };
                        localStorage.setItem('markupId', '0');
                        this.estimateMarkupsModel.MarkupType = markupName;
                        return [4 /*yield*/, this.saveMarkupsandOpenDialog()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateMarkupsComponent.prototype.showEditMarkupDetailDialog = function (markupName, markupId) {
        return __awaiter(this, void 0, void 0, function () {
            var searchItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.markupName = markupName;
                        if (markupName === 'Other Project Cost') {
                            this.getSubtotalConstruction();
                        }
                        this.parentMarkupId = markupName === 'Other Construction' ? this.otherRequirementMarkupId : this.otherProjectCostMarkupId;
                        this.constructionTotal = markupName === 'Other Construction' ? this.itemTotalCost : this.constructionTotal;
                        this.displayOrder = markupName === 'Other Construction' ? this.otherRequirementDisplayOrder : this.otherProjectCostDisplayOrder;
                        localStorage.setItem('markupId', markupId);
                        this.getMarkupDetailsById(markupId, markupName);
                        return [4 /*yield*/, this.modalService.showDialog('markupDetailDialog')];
                    case 1:
                        searchItem = _a.sent();
                        if (searchItem == true) {
                            this.getEstimateMarkups();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateMarkupsComponent.prototype.adjustmentCost = function (estimateMarkup) {
        estimateMarkup.ConstructionTotal = this.itemTotalCost;
        if (estimateMarkup.AdjustmentType !== '') {
            if (estimateMarkup.AdjustmentType === '$') {
                estimateMarkup.AdjustmentTotal = Number(estimateMarkup.AdjustmentValue);
            }
            else {
                var amount = Number(estimateMarkup.ConstructionTotal) * Number(Number(estimateMarkup.AdjustmentValue) / Number(100));
                estimateMarkup.AdjustmentTotal = Number(amount);
            }
            this.getSubtotalConstruction();
            this.getSubtotalOtherProjectCost();
        }
    };
    EstimateMarkupsComponent.prototype.getSubtotalConstruction = function () {
        var _this = this;
        var otherRequirementTotalCost = 0;
        var estimateId = localStorage.getItem('estimateId');
        var itemTotal = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Item Total'; })[0];
        var scopeDevelopment = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Scope Development'; })[0];
        var mobilization = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Mobilization'; })[0];
        var subtotalConstruction = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Construction'; })[0];
        // Other Construction
        var otherRequirement = this.estimatemarkups.filter(function (w) { return w.ParentMarkupId == _this.otherRequirementMarkupId; });
        otherRequirementTotalCost = Number(otherRequirement.reduce(function (sum, val) { return sum + val.AdjustmentTotal; }, 0));
        this.constructionTotal = itemTotal.AdjustmentTotal + scopeDevelopment.AdjustmentTotal + mobilization.AdjustmentTotal + otherRequirementTotalCost;
        var indexSubtotalConstruction = this.estimatemarkups.indexOf(subtotalConstruction);
        this.estimatemarkups[indexSubtotalConstruction].AdjustmentTotal = Math.round(this.constructionTotal * 100) / 100;
    };
    EstimateMarkupsComponent.prototype.getSubtotalOtherProjectCost = function () {
        var _this = this;
        var estimateId = localStorage.getItem('estimateId');
        var subtotalConstructions = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Construction'; })[0];
        var subtotalOtherProjectCosts = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Other Project Costs'; })[0];
        // Other Project sub total cost
        var otherProjectCost = this.estimatemarkups.filter(function (w) { return w.ParentMarkupId == _this.otherProjectCostMarkupId; });
        var otherProjectTotalCost = Number(otherProjectCost.reduce(function (sum, val) { return sum + val.AdjustmentTotal; }, 0));
        var subtotalOtherProjectCostTotal = otherProjectTotalCost;
        var indexSubtotalOtherProjectCosts = this.estimatemarkups.indexOf(subtotalOtherProjectCosts);
        this.estimatemarkups[indexSubtotalOtherProjectCosts].AdjustmentTotal = Math.round(subtotalOtherProjectCostTotal * 100) / 100;
    };
    EstimateMarkupsComponent.prototype.getEscalationYearsCost = function () {
        var subtotalConstruction = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Construction'; })[0];
        var subtotalOtherProjectCosts = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Other Project Costs'; })[0];
        var estimateId = localStorage.getItem('estimateId');
        var escalation = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Escalation % Compounded'; })[0];
        var escalationYears = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Years - Midpoint Construction'; })[0];
        var totalCost = subtotalConstruction.AdjustmentTotal + subtotalOtherProjectCosts.AdjustmentTotal;
        var percentageValue = (1 + escalation.AdjustmentValue / 100);
        var compoundValue = Math.pow(percentageValue, escalationYears.AdjustmentValue) - 1;
        var escalationYearsCost = compoundValue * totalCost;
        var indexEscalationYears = this.estimatemarkups.indexOf(escalationYears);
        this.estimatemarkups[indexEscalationYears].AdjustmentTotal = Math.round(escalationYearsCost * 100) / 100;
    };
    EstimateMarkupsComponent.prototype.getTotalProjectCost = function () {
        var subtotalConstruction = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Construction'; })[0];
        var subtotalOtherProjectCosts = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Subtotal Other Project Costs'; })[0];
        var escalationYears = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Years - Midpoint Construction'; })[0];
        var totalProjectCost = this.estimatemarkups.filter(function (markup) { return markup.MarkupName === 'Total Project Cost'; })[0];
        var totalProjectCostAmt = subtotalConstruction.AdjustmentTotal + subtotalOtherProjectCosts.AdjustmentTotal + escalationYears.AdjustmentTotal;
        var indexTotalProjectCost = this.estimatemarkups.indexOf(totalProjectCost);
        this.estimatemarkups[indexTotalProjectCost].AdjustmentTotal = Math.round(totalProjectCostAmt * 100) / 100;
    };
    EstimateMarkupsComponent.prototype.showDeleteEstimateMarkupConfirmationModal = function (estimateMarkupId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isdelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteEstimatedMarkupDialog')];
                    case 1:
                        isdelete = _a.sent();
                        if (isdelete) {
                            this.httpEstimateService.updateEstimateMarkupActive(estimateMarkupId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('adjustment deleted successfully', true);
                                _this.getEstimateMarkups();
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateMarkupsComponent.prototype.saveMarkups = function () {
        var _this = this;
        this.httpEstimateService.saveEstimateMarkups(this.estimatemarkups).subscribe(function (data) {
            _this.alertService.success('adjustment save successfully', true);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimateMarkupsComponent.prototype.getMarkupDetailsById = function (markupId, markupName) {
        var _this = this;
        this.httpEstimateService.getMarkupDetailById(markupId)
            .subscribe(function (data) {
            _this.estimateMarkupsModel = data;
            _this.estimateMarkupsModel.MarkupTotal = markupName === 'Other Construction' ? _this.itemTotalCost : _this.constructionTotal;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimateMarkupsComponent.prototype.saveMarkupsandOpenDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpEstimateService.saveEstimateMarkups(this.estimatemarkups)
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var searchItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.modalService.showDialog('markupDetailDialog')];
                                    case 1:
                                        searchItem = _a.sent();
                                        if (searchItem) {
                                            this.getEstimateMarkups();
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            _this.alertService.error(error);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimateMarkupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-markeups',
            template: __webpack_require__(/*! ./estimate-markups.component.html */ "./src/app/layout/estimate-markups/estimate-markups.component.html"),
            styles: [__webpack_require__(/*! ./estimate-markups.component.scss */ "./src/app/layout/estimate-markups/estimate-markups.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__["EstimateService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__["PaModalService"],
            _markup_detail_markup_detail_component__WEBPACK_IMPORTED_MODULE_6__["MarkupDetailComponent"]])
    ], EstimateMarkupsComponent);
    return EstimateMarkupsComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/estimate-markups/markup-detail/markup-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pa-modal #modal dialogName=\"{{dialogName}}\" [hideHeaderAndFooter]=\"true\" (modalClosed)=\"modal.resolve()\"\n          [modalDesign]=\"'full-modal'\">\n    <div class=\"modal-overlay\"></div>\n\n    <div content class=\"{{modal}}\">\n        <div *ngIf=\"estimateMarkupsModel.MarkupId > 0\"> <h5>Edit {{markupName}}</h5></div>\n        <div *ngIf=\"estimateMarkupsModel.MarkupId == 0\"> <h5>Add {{markupName}}</h5></div>\n\n        <hr>\n        <form [formGroup]=\"itemMarkupDetailForm\" (ngSubmit)=\"onSubmit(itemMarkupDetailForm.value)\">\n            <div class=\"col-md-12\">\n                <ng-container>\n                    <div class=\"form-group\">\n                        <label > <div *ngIf=\"markupName ==='Other Construction'\"> Item Total</div><div *ngIf=\"markupName !=='Other Construction'\"> Subtotal Construction</div></label>\n                        <label  class=\"form-control label-disabled \"> {{estimateMarkupsModel.MarkupTotal | currency:'USD':true:'1.2-2'}}</label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label> {{markupName}} Name </label>\n                        <input class=\"form-control\" formControlName='MarkupName' class=\"form-control\" [(ngModel)]=\"estimateMarkupsModel.MarkupName\"\n                               [ngClass]=\"{ 'is-invalid': submitted && f.MarkupName.errors }\"/>\n\n                        <div *ngIf=\"submitted && f.MarkupName.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.MarkupName.errors.required\">Name is required</div>\n                        </div>\n\n                    </div>\n                    <div  class=\"form-group\">\n                        <label> {{markupName}} Type </label>\n                        <label *ngFor=\"let adjustmentType of adjustmentTypeModel\">\n                            <input type=\"radio\" formControlName='AdjustmentType'\n                                   [checked]=\"estimateMarkupsModel.AdjustmentType == adjustmentType.AdjustmentType\"\n                                   [value]=\"adjustmentType.AdjustmentType\" (change)=\"onAdjustmentTypeChange()\">\n                            {{adjustmentType.AdjustmentType}}\n                        </label>\n                    </div>\n                    <div class=\"form-group\">\n                        <label> {{markupName}} Value </label>\n                        <div *ngIf=\"estimateMarkupsModel.AdjustmentType =='%'\">\n                            <input class=\"form-control\" formControlName='AdjustmentValue' class=\"form-control\"   [(ngModel)]=\"estimateMarkupsModel.AdjustmentValue\" (change)=\"onAmountChange()\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                        </div>\n                        <div *ngIf=\"estimateMarkupsModel.AdjustmentType =='$'\">\n                            <input class=\"form-control\" formControlName='AdjustmentValue' class=\"form-control\" currencyMask [options]=\"{ align:'left' }\"   [(ngModel)]=\"estimateMarkupsModel.AdjustmentValue\" (blur)=\"onAmountChange()\"\n                                   [ngClass]=\"{ 'is-invalid': submitted && f.AdjustmentValue.errors }\"/>\n                        </div>\n\n\n                        <div *ngIf=\"submitted && f.AdjustmentValue.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.AdjustmentValue.errors.required\">Value is required</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label> Total Cost </label>\n                        <label  class=\"form-control label-disabled \"  > {{estimateMarkupsModel.AdjustmentTotal | currency:'USD':true:'1.2-2'}}</label>\n                        <!--<input class=\"form-control\" formControlName='TotalCost' class=\"form-control\"-->\n                               <!--[ngClass]=\"{ 'is-invalid': submitted && f.TotalCost.errors }\"/>-->\n\n                        <!--<div *ngIf=\"submitted && f.TotalCost.errors\" class=\"invalid-feedback\">-->\n                            <!--<div *ngIf=\"f.TotalCost.errors.required\">Total Cost is required</div>-->\n                        <!--</div>-->\n                    </div>\n                    <div class=\"form-group\">\n                        <button [disabled]=\"loading\" class=\"btn btn-primary\" ><span *ngIf=\"estimateMarkupsModel.MarkupId > 0\">Update</span><span *ngIf=\"estimateMarkupsModel.MarkupId == 0\">Add</span> </button>\n                        <img *ngIf=\"loading\"\n                             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n                        <a (click)=\"gotoEstimateMarkup()\" class=\"btn btn-link\">Cancel</a>\n                    </div>\n                </ng-container>\n            </div>\n        </form>\n    </div>\n</pa-modal>\n"

/***/ }),

/***/ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/estimate-markups/markup-detail/markup-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-disabled {\n  background-color: #e9ecef;\n  opacity: 1; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/estimate-markups/markup-detail/markup-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MarkupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupDetailComponent", function() { return MarkupDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/pa-modal/pa-modal.component */ "./src/app/layout/Shared/pa-modal/pa-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _model_EstimateMarkupsModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../model/EstimateMarkupsModel */ "./src/app/model/EstimateMarkupsModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MarkupDetailComponent = /** @class */ (function () {
    function MarkupDetailComponent(formBuilder, router, alertService, httpItemService, httpEstimateService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpItemService = httpItemService;
        this.httpEstimateService = httpEstimateService;
        this.markupSubTotal = 0.00;
        this.dialogName = '';
        this.adjustmentTypeModel = [];
        this.loading = false;
        this.submitted = false;
        this.mode = 'Add';
    }
    MarkupDetailComponent.prototype.ngOnInit = function () {
        this.estimateId = Number(localStorage.getItem('estimateId'));
        this.markupId = Number(localStorage.getItem('markupId'));
        this.adjustmentTypeModel.push({ AdjustmentType: '$', Checked: 'checked' });
        this.adjustmentTypeModel.push({ AdjustmentType: '%', Checked: '' });
        this.buildForm();
        if (this.markupId > 0) {
            this.mode = 'Edit';
            this.getMarkupDetailsById(this.markupId);
        }
        this.estimateMarkupsModel = {
            EstimateId: this.estimateId,
            ParentMarkupId: 0,
            ConstructionTotal: 0,
            MarkupId: 0,
            MarkupName: '',
            AdjustmentTotal: 0,
            AdjustmentValue: 0,
            AdjustmentType: '',
            MarkupType: '',
            LAdjustmentTypeId: 0,
            DisplayOrder: 0,
            MarkupTotal: 0
        };
    };
    Object.defineProperty(MarkupDetailComponent.prototype, "f", {
        get: function () { return this.itemMarkupDetailForm.controls; },
        enumerable: true,
        configurable: true
    });
    MarkupDetailComponent.prototype.buildForm = function () {
        this.itemMarkupDetailForm = this.formBuilder.group({
            EstimateId: [this.estimateId],
            MarkupName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            AdjustmentType: ['%', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(100)]],
            AdjustmentValue: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
        });
    };
    MarkupDetailComponent.prototype.onSubmit = function (markupDetailForm) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.itemMarkupDetailForm.invalid) {
            return;
        }
        if (this.markupId > 0) {
            markupDetailForm.MarkupId = this.markupId;
        }
        markupDetailForm.MarkupId = this.estimateMarkupsModel.MarkupId;
        markupDetailForm.AdjustmentTotal = this.estimateMarkupsModel.AdjustmentTotal;
        markupDetailForm.MarkupType = this.markupName;
        markupDetailForm.DisplayOrder = this.displayOrder;
        markupDetailForm.ParentMarkupId = this.parentMarkupId;
        this.loading = true;
        this.httpEstimateService.saveEstimateMarkup(markupDetailForm)
            .subscribe(function (data) {
            _this.alertService.success(_this.markupId > 0 ? 'markup updated successfully' : 'markup save successfully', true);
            _this.loading = false;
            _this.modal.resolve(true);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
        this.itemMarkupDetailForm.patchValue({
            MarkupName: '',
            AdjustmentType: '%',
            AdjustmentValue: 0
        });
    };
    MarkupDetailComponent.prototype.onAdjustmentTypeChange = function () {
        this.adjustmentCost();
    };
    MarkupDetailComponent.prototype.onAmountChange = function () {
        this.adjustmentCost();
    };
    MarkupDetailComponent.prototype.adjustmentCost = function () {
        var adjustmentType = this.f.AdjustmentType.value;
        var adjustmentValue = this.f.AdjustmentValue.value;
        var totalCost = 0;
        this.estimateMarkupsModel.AdjustmentType = adjustmentType;
        if (adjustmentType === '$') {
            //this.estimateMarkupsModel.AdjustmentTotal  = Number(this.markupSubTotal) + Number(adjustmentValue);
            this.estimateMarkupsModel.AdjustmentTotal = Number(adjustmentValue);
        }
        else {
            var amount = Number(this.markupSubTotal) * Number(Number(adjustmentValue) / Number(100));
            //this.estimateMarkupsModel.AdjustmentTotal  = Number(this.markupSubTotal) + Number(amount);
            this.estimateMarkupsModel.AdjustmentTotal = Number(amount);
        }
    };
    MarkupDetailComponent.prototype.getMarkupDetailsById = function (markupId) {
        var _this = this;
        this.httpEstimateService.getMarkupDetailById(markupId)
            .subscribe(function (data) {
            _this.itemMarkupDetailForm.patchValue({
                MarkupName: data.MarkupName,
                AdjustmentType: data.AdjustmentType,
                AdjustmentValue: data.AdjustmentValue,
                AdjustmentTotal: data.AdjustmentTotal
            });
            _this.parentMarkupId = data.ParentMarkupId;
            _this.displayOrder = data.DisplayOrder;
            _this.estimateMarkupsModel.AdjustmentTotal = data.AdjustmentTotal;
            _this.estimateMarkupsModel.MarkupName = data.MarkupName;
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    MarkupDetailComponent.prototype.gotoEstimateMarkup = function () {
        this.modal.resolve(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkupDetailComponent.prototype, "estimateId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkupDetailComponent.prototype, "markupId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarkupDetailComponent.prototype, "markupName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkupDetailComponent.prototype, "parentMarkupId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkupDetailComponent.prototype, "displayOrder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarkupDetailComponent.prototype, "markupSubTotal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarkupDetailComponent.prototype, "dialogName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_EstimateMarkupsModel__WEBPACK_IMPORTED_MODULE_7__["EstimateMarkupsModel"])
    ], MarkupDetailComponent.prototype, "estimateMarkupsModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_1__["PaModalComponent"])
    ], MarkupDetailComponent.prototype, "modal", void 0);
    MarkupDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'markup-detail',
            template: __webpack_require__(/*! ./markup-detail.component.html */ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.html"),
            styles: [__webpack_require__(/*! ./markup-detail.component.scss */ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_items_service__WEBPACK_IMPORTED_MODULE_3__["ItemsService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_6__["EstimateService"]])
    ], MarkupDetailComponent);
    return MarkupDetailComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimate-print/estimate-print.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimate-print/estimate-print.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Print</h5>\n<div>\n    Click print button print again.\n</div>\n\n\n<div id=\"print-section\" style=\"display: none\">\n    <div class=\"print-first\">\n       <div  style=\"text-align: center\"><h2>Caproso Project Cost Estimator</h2></div>\n        <estimate-data></estimate-data>\n          <table style=\"width: 100%\">\n            <tr style=\"line-height: 1.5em\"><td><label style=\"font-weight: bold;\"> Project Scope:</label>{{estimateModel.ProjectScope}}</td></tr>\n              <tr style=\"line-height: 1.5em\"><td><label style=\"font-weight: bold;\"> Assumptions:</label>{{estimateModel.Assumptions}}</td></tr>\n          </table>\n\n\n\n\n\n<table  cellpadding=\"5\" cellspacing=\"0\">\n\n        <tr *ngFor=\"let markup of estimateMarkups; let odd=odd; let even=even\" >\n            <td class=\"item-description\" [ngClass]=\"{'total-project-cost': markup.MarkupName ==='Total Project Cost'}\">\n                <div  class=\"text-right\" [ngClass]=\"{'bold-text': markup.MarkupType ==='Single'}\">\n                     <div *ngIf=\"markup.MarkupType !=='Single'\">\n                         <div *ngIf=\"markup.LAdjustmentTypeId== 56498\" >{{markup.MarkupName}} ($)</div>\n                         <div *ngIf=\"markup.LAdjustmentTypeId== 56497\" >{{markup.MarkupName}} (%)</div>\n                     </div>\n                    <div *ngIf=\"markup.MarkupType ==='Single'\">\n                        {{markup.MarkupName}}\n                    </div>\n                </div>\n                <div *ngIf=\"markup.MarkupType =='Fixed' || markup.MarkupType =='Other Construction' || markup.MarkupType =='Other Project Cost'\" class=\"text-right\">\n                    <div *ngFor=\"let adjustmentType of adjustmentTypeModel\">\n                        <div *ngIf=\"adjustmentType.LAdjustmentTypeId == markup.LAdjustmentTypeId\">\n                            {{adjustmentType.AdjustmentType}}\n                        </div>\n                    </div>\n                </div>\n\n            </td>\n            <td [ngClass]=\"{'total-project-cost': markup.MarkupName ==='Total Project Cost'}\">\n                <div class=\"row col-md-12\" class=\"text-right\">\n                    <div *ngIf=\"markup.MarkupType !=='Single' && markup.LAdjustmentTypeId== 56498\" >\n                        {{ markup.AdjustmentValue | currency:'USD':true:'1.2-2'}}\n                    </div>\n                    <div *ngIf=\"markup.MarkupType !=='Single' && markup.LAdjustmentTypeId== 56497\" >\n                        {{ markup.AdjustmentValue}}%\n                    </div>\n\n\n                </div>\n            </td>\n            <td [ngClass]=\"{'total-project-cost adjustment-heading': markup.MarkupName ==='Total Project Cost', 'bold-text adjustment-heading': markup.MarkupType ==='Single'}\">\n                <div *ngIf=\"markup.MarkupType != 'Fixed Single'\" class=\"text-right\" [ngClass]=\" {'': markup.MarkupType ==='Single'}\">\n                    {{ markup.AdjustmentTotal | currency:'USD':true:'1.2-2'}}\n                </div>\n            </td>\n        </tr>\n    </table>\n\n    </div>\n\n\n   <div  style=\"text-align: center\"><h2>Caproso Project Cost Estimator</h2></div>\n    <br/>\n    <estimate-data></estimate-data>\n    <br/><br/>\n    <div class=\"estimated-items-area\">\n        <table style=\"width: 100%\" cellspacing=\"0\" cellpadding=\"0\">\n            <thead>\n            <tr class=\"header-section\">\n                <th class=\"text-left\">Item Description</th>\n                <th *ngIf=\"costBreakDown\" class=\"text-left\">{{costBreakDownHeading}}</th>\n                <th class=\"text-right\">Quantity</th>\n                <th class=\"text-right\">Unit</th>\n                <th class=\"text-right\">Unit Price</th>\n                <th class=\"text-right\"> Item Total</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of estimatedItems; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n                <td class=\"text-left\">{{ item.AdjustedItemName }} - {{item.Category}} - {{item.SubCategory}} </td>\n                <td class=\"text-left\" *ngIf=\"costBreakDown\">{{ item.CostBreakDownName }}</td>\n                <td class=\"text-right\">{{ item.Qty | number:'1.0' }}</td>\n                <td class=\"text-right\">{{ item.Unit }}</td>\n                <td class=\"text-right\">{{ item.AdjustedUnitCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n                <td class=\"text-right\">{{ item.TotalCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n            </tr>\n\n            <tr class=\"total-section\">\n               <td    [attr.colspan]=\"colSpan\" class=\"font-weight-bold text-right\"  style=\"font-weight: bold;\"> Estimate Value: </td>\n                <td class=\"font-weight-bold font-size-3 text-right\"  style=\"font-weight: bold;\">{{totalCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n            </tr>\n            </tbody>\n        </table>\n\n    </div>\n\n</div>\n<button (click)=\"print()\" class=\"btn btn-primary\">Print</button>\n"

/***/ }),

/***/ "./src/app/layout/estimate-print/estimate-print.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimate-print/estimate-print.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.error {\n  color: #ff0000; }\n\n.bold-text {\n  font-weight: bold; }\n\n.adjustment-heading {\n  border-top: 1px solid;\n  font-size: 16px; }\n\n.item-description {\n  width: 95%; }\n\n.total-project-cost {\n  background-color: #b7b7b7;\n  font-size: 18px; }\n\n.header-section th {\n  line-height: 2.5em;\n  padding: 8px; }\n\n.odd td, .even td {\n  line-height: 1.5em;\n  padding: 8px;\n  border-bottom: 1px solid #c5c4c4; }\n\n.odd {\n  background-color: #f5f5f5; }\n\n.even {\n  background-color: #ffffff; }\n\n@media screen and (min-width: 40em) {\n  br {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/layout/estimate-print/estimate-print.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimate-print/estimate-print.component.ts ***!
  \*******************************************************************/
/*! exports provided: EstimatePrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatePrintComponent", function() { return EstimatePrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
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




var EstimatePrintComponent = /** @class */ (function () {
    function EstimatePrintComponent(router, alertService, httpEstimateService) {
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.estimatedItems = [];
        this.estimateMarkups = [];
        this.costBreakDown = false;
        this.costBreakDownHeading = '';
        this.colSpan = "4";
        this.estimateId = Number(localStorage.getItem('estimateId'));
        this.estimateModel = {
            EstimateTitle: '',
            EstimateNumber: '',
            EstimateId: 0,
            ManagerName: '',
            ManagerId: 0,
            EstimateGroupName: '',
            Assumptions: '',
            ProjectScope: '',
            CbdTitle: '',
            EstimateGroupId: 0,
            IsActive: true,
            ModifiedById: 0,
            OrganizationId: 0,
            Estimator: '',
            TotalProjectCost: 0,
        };
        if (this.estimateId > 0) {
            this.getEstimateDetail(this.estimateId);
        }
        this.getEstimatedItem();
        this.getEstimateMarkups();
    }
    EstimatePrintComponent.prototype.ngOnInit = function () {
    };
    EstimatePrintComponent.prototype.ngAfterViewInit = function () {
    };
    EstimatePrintComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n         @media print {\n               body { font-family: Arial; font-size:14px;}   \n               .print-first { page-break-after:always;}\n               .table{width:100%;}\n               .odd{ background-color:#00b3ee;}\n               .bold-text{ font-weight:bold;}\n               .adjustment-heading {border:solid #000000!important; border-width:1px 0 0 0 !important; font-size: 16px;}\n               .item-description { width:95%;}\n               .text-right { text-align:right !important;}\n               .text-left{ text-align:left !important;}\n               .odd{ -webkit-print-color-adjust:exact; background-color:#f5f5f5 !important;}\n               .even{ -webkit-print-color-adjust:exact; background-color: #ffffff; }\n               .header-section th{ line-height:1.2em; padding:8px; border:solid #c5c4c4!important; border-width:1px 0 1px 0 !important;}\n               .even td,  .odd td{ border:solid #c5c4c4 !important; border-width:0 0 1px 0 !important; line-height:1em; padding:8px;}\n               .total-project-cost{-webkit-print-color-adjust:exact; background-color:#f5f5f5!important; font-size:18px;} \n               .total-section td{ line-height:1.5em; padding:8px;}\n               .total-section td:nth-last-child(1){ border:solid #000000 !important; border-width:1px 0 0 0 !important;}\n  \n       \n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    EstimatePrintComponent.prototype.getEstimateDetail = function (estimateId) {
        var _this = this;
        this.httpEstimateService.getEstimateDetail(estimateId, true)
            .subscribe(function (data) {
            localStorage.setItem('cbdTitle', data.CbdTitle);
            _this.estimateModel = data;
            // this.estimateCreateForm.patchValue({
            //     OrganizationId: data.organizationId,
            //     EstimateId: data.EstimateId,
            //     EstimateTitle: data.EstimateTitle,
            //     EstimateNumber: data.EstimateNumber,
            //     ProjectScope: data.ProjectScope,
            //     Assumptions: data.Assumptions,
            //     ManagerId: data.ManagerId,
            //     EstimateGroupId: data.EstimateGroupId,
            // });
        });
    };
    EstimatePrintComponent.prototype.getEstimatedItem = function () {
        var _this = this;
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(function (resp) {
            _this.estimatedItems = resp[0].Data;
            _this.totalCost = Number(resp[0].Data.reduce(function (sum, val) { return sum + val.TotalCost; }, 0));
            for (var _i = 0, _a = _this.estimatedItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.CostBreakDownName.length > 0) {
                    _this.colSpan = '5';
                    _this.costBreakDown = true;
                    _this.costBreakDownHeading = item.CostBreakDownHeading;
                }
            }
        });
    };
    EstimatePrintComponent.prototype.getEstimateMarkups = function () {
        var _this = this;
        this.httpEstimateService.getEstimateMarkup(this.estimateId)
            .subscribe(function (data) {
            _this.estimateMarkups = data;
            _this.print();
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    EstimatePrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimate-documents',
            template: __webpack_require__(/*! ./estimate-print.component.html */ "./src/app/layout/estimate-print/estimate-print.component.html"),
            styles: [__webpack_require__(/*! ./estimate-print.component.scss */ "./src/app/layout/estimate-print/estimate-print.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_2__["EstimateService"]])
    ], EstimatePrintComponent);
    return EstimatePrintComponent;
}());



/***/ }),

/***/ "./src/app/layout/estimated-item/estimated-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimated-item/estimated-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<item-detail [dialogName]=\"'itemDetailDialog'\" [item]=\"item\"></item-detail>\n\n<h5>Estimated Items </h5>\n<hr>\n<estimate-data></estimate-data>\n<hr>\n<div class=\"estimated-items-area\">\n\n    <table class=\"table item-table display table-body  table-bordered\">\n\n        <thead>\n        <tr class=\"thead-light\">\n\n            <td colspan=\"8\"></td>\n            <td class=\"font-weight-bold font-size-3\">Total Cost</td>\n            <td class=\"font-weight-bold font-size-3 text-right\">{{totalCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n            <td colspan=\"2\"></td>\n\n        </tr>\n        <tr>\n            <th>Item Code </th>\n            <th *ngIf=\"estimateitems.length > 0  && estimateitems[0].CostBreakDownName.length > 0\">Cost Break Down</th>\n            <th>Category</th>\n            <th>Sub Category</th>\n            <th>Item Name</th>\n            <th>Quantity</th>\n            <th>Unit</th>\n            <th>Adjusted Unit Cost</th>\n            <th>Adjustment</th>\n            <th>Total Cost</th>\n            <th>Adjusted Note</th>\n            <th>Action</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of estimateitems; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n            <td>{{ item.ItemCode }}</td>\n            <td *ngIf=\"estimateitems.length > 0 && estimateitems[0].CostBreakDownName.length > 0  \">{{ item.CostBreakDownName }}</td>\n            <td>{{ item.Category }}</td>\n            <td>{{ item.SubCategory }}</td>\n            <td>{{ item.AdjustedItemName }}</td>\n            <td class=\"text-right\">{{ item.Qty | number:'1.0'}}</td>\n            <td class=\"text-right\">{{ item.Unit }}</td>\n            <td class=\"text-right\">{{ item.AdjustedUnitCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n            <td class=\"text-right\">\n                <div *ngIf=\"item.AdjustmentType =='$'\">{{ item.AdjustmentValue | currency:'USD':'symbol-narrow':'1.2-2' }}\n                </div>\n                <div *ngIf=\"item.AdjustmentType =='%'\">{{ item.AdjustmentValue+ ' ' + item.AdjustmentType }}</div>\n            </td>\n            <td class=\"text-right\">{{ item.TotalCost | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\n            <td>{{ item.Remarks }}</td>\n            <td class=\"action-btn\">\n                <i class=\"fa fa-pencil\" (click)=\"showEstimatedItemDetailDialog(item)\"></i>\n                <i class=\"fa fa-copy\" (click)=\"copyEstimatedItem(item.EstimateItemId)\"></i>\n                <i class=\"fa fa-trash\" (click)=\"showDeleteEstimateItemConfirmationModal(item.EstimateItemId)\"></i>\n            </td>\n\n\n        </tr>\n        <tr *ngIf=\"estimateitems.length ==0 \">\n            <td colspan=\"12\" class=\"text-center\">No data found! </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<!--<div class=\"form-group\">-->\n    <!--<button [disabled]=\"loading\" type=\"button\" class=\"btn btn-primary btn-space\" (click)=\"gotoEstimateMarkups()\">{{btnName}}<i class=\"fa fa-long-arrow-right\"></i>-->\n    <!--</button>-->\n    <!--<img *ngIf=\"loading\"-->\n         <!--src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>-->\n    <!--<button (click)=\"goToEstimateDocument()\" class=\"btn btn-secondary\">Previous</button>-->\n<!--</div>-->\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this item'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteEstimatedItemDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/estimated-item/estimated-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/estimated-item/estimated-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5 {\n  color: #00b3ee; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.item-table {\n  width: 100% !important; }\n\n/*\r\n   server-side-angular-way.component.css\r\n*/\n\n.no-data-available {\n  text-align: center; }\n\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n\n.dataTables_empty {\n  display: none; }\n\n/*start accordin*/\n\n.accordion-border {\n  width: 100%; }\n\n#observation-accordion {\n  width: 100%; }\n\n.accordion {\n  width: 100%;\n  border-radius: 5px;\n  border: solid 2px #dcd0e2;\n  display: inline-block;\n  background-color: #ffffff; }\n\n.accordion-header {\n  cursor: pointer;\n  line-height: 55px; }\n\n.accordion-header-bar {\n  width: 100%;\n  height: 4px;\n  margin-top: -2px;\n  border-radius: 4px 4px 0 0;\n  background-color: #90caf9; }\n\n.accordion-title {\n  text-align: left;\n  font-weight: bold;\n  float: left;\n  width: 48%;\n  padding: 0 0 0 20px; }\n\n.accordion-icon {\n  text-align: right;\n  float: right;\n  margin-right: 10px; }\n\n.icon {\n  color: #a98ab6;\n  font-size: 24px;\n  text-align: right; }\n\n.accordion-wrapper {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 50px; }\n\n.accordion-column-header {\n  width: 100%;\n  background-color: #f4f1f5;\n  font-size: 12px;\n  font-weight: bold;\n  color: #7e6787; }\n\n.observation-matter-header {\n  text-align: left;\n  font-size: 12px;\n  font-weight: bold;\n  vertical-align: middle;\n  color: #a98ab6; }\n\n.checkbox-header {\n  margin: 0% 0% 30px 2%;\n  flex: 0 0 4%; }\n\n.header-description {\n  text-align: left;\n  flex: 1 1 0%; }\n\n.header-current-level {\n  text-align: left;\n  flex: 0 0 21.8%;\n  margin-right: 12px; }\n\n.header-observed-level {\n  text-align: left;\n  width: 20%;\n  flex: 0 0 20.3%; }\n\n.development-matters {\n  float: left;\n  line-height: 26px;\n  margin-right: 8px; }\n\n.info-icon {\n  width: 21px;\n  height: 21px;\n  font-size: 24px;\n  text-align: left;\n  color: #a98ab6; }\n\n.observed-level {\n  float: left;\n  line-height: 32px;\n  margin-right: 8px;\n  padding-left: 12px; }\n\n.float-left {\n  float: left;\n  margin-top: 3px; }\n"

/***/ }),

/***/ "./src/app/layout/estimated-item/estimated-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/estimated-item/estimated-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: EstimatedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatedItemComponent", function() { return EstimatedItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _estimate_item_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../estimate-item/item-detail/item-detail.component */ "./src/app/layout/estimate-item/item-detail/item-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var EstimatedItemComponent = /** @class */ (function () {
    function EstimatedItemComponent(formBuilder, router, alertService, httpEstimateService, modalService, httpTagsService, httpItemService, itemDetailComponent) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpEstimateService = httpEstimateService;
        this.modalService = modalService;
        this.httpTagsService = httpTagsService;
        this.httpItemService = httpItemService;
        this.itemDetailComponent = itemDetailComponent;
        this.btnName = 'Continue';
        this.dtOptions = {};
        this.dtEstimateItemOptions = {};
        this.loading = false;
        this.submitted = false;
        this.items = [];
        this.estimateitems = [];
        this.isApplicable = false;
        this.expandAccordion = true;
    }
    EstimatedItemComponent.prototype.ngOnInit = function () {
        this.buildForm();
        if (this.estimateId > 0) {
            this.btnName = 'Update and Continue';
        }
        this.getCategoryList();
        this.item = {
            EstimateItemId: Number(localStorage.getItem('estimateItemId')),
            EstimateId: Number(localStorage.getItem('estimateId')),
            OrganizationId: 0,
            OrganizationName: '',
            AdjustedItemName: '',
            AdjustLTypeId: 0,
            AdjustmentType: '',
            AdjustmentValue: 0,
            AdjustedUnitCost: 0,
            Qty: 0,
            TotalCost: 0,
            CostBreakDownId: 0,
            CostBreakDownHeading: '',
            CostBreakDownName: '',
            ItemId: '',
            ItemCode: '',
            Note: '',
            Remarks: '',
            Category: '',
            SubCategory: '',
            Unit: '',
            UnitPrice: ''
        };
        this.itemSearchModal = { OrganizationId: localStorage.getItem('organizationId'), CategoryId: 0, SubCategoryId: 0, ItemName: '' };
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: 0,
            SubCategoryId: 0,
            ItemName: '',
        };
        this.getItem();
        this.getEstimatedItem();
    };
    EstimatedItemComponent.prototype.onSubmit = function (searchItem) {
        this.submitted = true;
        // stop here if form is invalid
        if (this.estimateitemForm.invalid) {
            return;
        }
        this.itemSearchModal = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: searchItem.CategoryId,
            SubCategoryId: searchItem.SubCategoryId,
            ItemName: searchItem.ItemName
        };
        this.getItem();
        this.reDrawTable();
    };
    EstimatedItemComponent.prototype.onCategoryChange = function (categoryId) {
        this.getSubCategoryList(categoryId);
    };
    EstimatedItemComponent.prototype.onAccordionExpand = function () {
        this.expandAccordion = !this.expandAccordion;
    };
    EstimatedItemComponent.prototype.buildForm = function () {
        this.estimateitemForm = this.formBuilder.group({
            CategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            SubCategoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ItemName: ['']
        });
    };
    Object.defineProperty(EstimatedItemComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.estimateitemForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EstimatedItemComponent.prototype.reDrawTable = function () {
        this.itemOptions = {
            OrganizationId: localStorage.getItem('organizationId'),
            CategoryId: this.itemSearchModal.CategoryId,
            SubCategoryId: this.itemSearchModal.SubCategoryId,
            ItemName: this.itemSearchModal.ItemName,
        };
        this.items = [];
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    EstimatedItemComponent.prototype.getItem = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.itemOptions = {
                    OrganizationId: localStorage.getItem('organizationId'),
                    CategoryId: _this.itemSearchModal.CategoryId,
                    SubCategoryId: _this.itemSearchModal.SubCategoryId,
                    ItemName: _this.itemSearchModal.ItemName,
                };
                dataTablesParameters.itemOptions = _this.itemOptions;
                _this.httpItemService.searchItem(dataTablesParameters).subscribe(function (resp) {
                    _this.items = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'ItemCode' }, { data: 'ItemDescr' }, { data: 'CategoryName' }, { data: 'SubCategoryName' }, { data: 'Unit' }, { data: 'UnitPrice' }]
        };
    };
    EstimatedItemComponent.prototype.getEstimatedItem = function () {
        var _this = this;
        this.estimateItemOptions = {
            estimateId: localStorage.getItem('estimateId'),
        };
        this.dataTablesParameters = this.estimateItemOptions;
        this.httpEstimateService.getEstimateItemList(this.dataTablesParameters).subscribe(function (resp) {
            _this.estimateitems = resp[0].Data;
            _this.totalCost = Number(resp[0].Data.reduce(function (sum, val) { return sum + val.TotalCost; }, 0));
        });
    };
    EstimatedItemComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpTagsService.getTagByTypeAndOrganizationId('Category', Number(localStorage.getItem('organizationId')), true)
            .subscribe(function (categories) {
            _this.categoryModel = categories;
        });
    };
    EstimatedItemComponent.prototype.getSubCategoryList = function (categoryId) {
        var _this = this;
        this.httpTagsService.getTagsByTypeAndParentId('Sub Category', categoryId, true)
            .subscribe(function (subcategories) {
            _this.subCategoryModel = subcategories;
        });
    };
    EstimatedItemComponent.prototype.goToEstimateDocument = function () {
        this.router.navigate(['estimate/document']);
    };
    EstimatedItemComponent.prototype.gotoEstimateMarkups = function () {
        this.router.navigate(['estimate/markups']);
    };
    EstimatedItemComponent.prototype.showItemDetailDialog = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var searchItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item = {
                            EstimateItemId: 0,
                            EstimateId: Number(localStorage.getItem('estimateId')),
                            OrganizationId: 0,
                            OrganizationName: '',
                            AdjustedItemName: item.ItemDescr,
                            AdjustLTypeId: 0,
                            AdjustmentType: '%',
                            AdjustmentValue: 0,
                            AdjustedUnitCost: 0,
                            Qty: 0,
                            TotalCost: 0,
                            CostBreakDownId: 0,
                            CostBreakDownHeading: '',
                            CostBreakDownName: '',
                            ItemId: item.ItemId,
                            ItemCode: item.ItemCode,
                            Note: '',
                            Remarks: item.Note,
                            Category: item.CategoryName,
                            SubCategory: item.SubCategoryName,
                            Unit: item.Unit,
                            UnitPrice: item.UnitPrice
                        };
                        return [4 /*yield*/, this.modalService.showDialog('itemDetailDialog')];
                    case 1:
                        searchItem = _a.sent();
                        if (searchItem == true) {
                            this.getEstimatedItem();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimatedItemComponent.prototype.showEstimatedItemDetailDialog = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var searchItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.item = item;
                        this.itemDetailComponent.item = item;
                        this.itemDetailComponent.buildForm();
                        return [4 /*yield*/, this.modalService.showDialog('itemDetailDialog')];
                    case 1:
                        searchItem = _a.sent();
                        if (searchItem == true) {
                            this.getEstimatedItem();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimatedItemComponent.prototype.showDeleteEstimateItemConfirmationModal = function (estimateItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isdelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteEstimatedItemDialog')];
                    case 1:
                        isdelete = _a.sent();
                        if (isdelete) {
                            this.httpEstimateService.updateEstimateItemActive(estimateItemId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('Item deleted successfully', true);
                                _this.getEstimatedItem();
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EstimatedItemComponent.prototype.copyEstimatedItem = function (estimateItemId) {
        var _this = this;
        this.httpEstimateService.copyEstimatedItem(estimateItemId)
            .subscribe(function (data) {
            if (data) {
                _this.alertService.success('Estimate item copied successfully', false);
                _this.getEstimatedItem();
                // this.estimateOptions = {
                //     organizationId:  localStorage.getItem('organizationId'),
                // };
                // this.estimates = [];
                // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                //     //draw the table first
                //     dtInstance.draw();
                //
                // });
            }
            else {
                _this.alertService.success('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
            // this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstimatedItemComponent.prototype, "isApplicable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], EstimatedItemComponent.prototype, "expandAccordion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTableDirective"])
    ], EstimatedItemComponent.prototype, "dtElement", void 0);
    EstimatedItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'estimated-item',
            template: __webpack_require__(/*! ./estimated-item.component.html */ "./src/app/layout/estimated-item/estimated-item.component.html"),
            styles: [__webpack_require__(/*! ./estimated-item.component.scss */ "./src/app/layout/estimated-item/estimated-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_estimate_service__WEBPACK_IMPORTED_MODULE_4__["EstimateService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__["PaModalService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"],
            _services_items_service__WEBPACK_IMPORTED_MODULE_7__["ItemsService"],
            _estimate_item_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailComponent"]])
    ], EstimatedItemComponent);
    return EstimatedItemComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _manage_subcategories_manage_subcategories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-subcategories/manage-subcategories.component */ "./src/app/layout/manage-subcategories/manage-subcategories.component.ts");
/* harmony import */ var _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-categories/manage-categories.component */ "./src/app/layout/manage-categories/manage-categories.component.ts");
/* harmony import */ var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-groups/manage-groups.component */ "./src/app/layout/manage-groups/manage-groups.component.ts");
/* harmony import */ var _estimate_detail_estimate_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estimate-detail/estimate-detail.component */ "./src/app/layout/estimate-detail/estimate-detail.component.ts");
/* harmony import */ var _shared_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/guard */ "./src/app/shared/guard/index.ts");
/* harmony import */ var _estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./estimate-create/estimate-create.component */ "./src/app/layout/estimate-create/estimate-create.component.ts");
/* harmony import */ var _estimated_item_estimated_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./estimated-item/estimated-item.component */ "./src/app/layout/estimated-item/estimated-item.component.ts");
/* harmony import */ var _estimate_markups_estimate_markups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estimate-markups/estimate-markups.component */ "./src/app/layout/estimate-markups/estimate-markups.component.ts");
/* harmony import */ var _manage_estimates_manage_estimates_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-estimates/manage-estimates.component */ "./src/app/layout/manage-estimates/manage-estimates.component.ts");
/* harmony import */ var _estimate_item_estimate_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./estimate-item/estimate-item.component */ "./src/app/layout/estimate-item/estimate-item.component.ts");
/* harmony import */ var _estimate_print_estimate_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./estimate-print/estimate-print.component */ "./src/app/layout/estimate-print/estimate-print.component.ts");
/* harmony import */ var _estimate_cbd_estimate_cbd_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./estimate-cbd/estimate-cbd.component */ "./src/app/layout/estimate-cbd/estimate-cbd.component.ts");
/* harmony import */ var _estimate_document_estimate_document_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./estimate-document/estimate-document.component */ "./src/app/layout/estimate-document/estimate-document.component.ts");
/* harmony import */ var _manage_project_manager_manage_project_manager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-project-manager/manage-project-manager.component */ "./src/app/layout/manage-project-manager/manage-project-manager.component.ts");
/* harmony import */ var _project_manager_detail_project_manager_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./project-manager-detail/project-manager-detail.component */ "./src/app/layout/project-manager-detail/project-manager-detail.component.ts");
/* harmony import */ var _manage_clients_manage_clients_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manage-clients/manage-clients.component */ "./src/app/layout/manage-clients/manage-clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'general-info', loadChildren: './general-info/general-info.module#GeneralInfoModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'manage-users', loadChildren: './manage-user/manage-user.module#ManageUserModule' },
            { path: 'manage-addresses', loadChildren: './manage-addresses/manage-addresses.module#ManageAddressesModule' },
            { path: 'manage-groups', component: _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_5__["ManageGroupsComponent"] },
            { path: 'manage-categories', component: _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_4__["ManageCategoriesComponent"] },
            { path: 'manage-units', loadChildren: './manage-units/manage-units.module#ManageUnitsModule' },
            { path: 'manage-subcategories', component: _manage_subcategories_manage_subcategories_component__WEBPACK_IMPORTED_MODULE_3__["ManageSubcategoriesComponent"] },
            { path: 'manage-project-manager', component: _manage_project_manager_manage_project_manager_component__WEBPACK_IMPORTED_MODULE_16__["ManageProjectManagerComponent"] },
            { path: 'project-manager-detail', component: _project_manager_detail_project_manager_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProjectManagerDetailComponent"] },
            { path: 'manage-organizations', loadChildren: './manage-organizations/manage-organizations.module#ManageOrganizationsModule' },
            { path: 'manage-affiliates', loadChildren: './manage-affiliates/manage-affiliates.module#ManageAffiliatesModule' },
            { path: 'manage-items', loadChildren: './manage-items/manage-items.module#ManageItemsModule' },
            { path: 'manage-item', loadChildren: './manage-item/manage-item.module#ManageItemModule' },
            { path: 'manage-clients', component: _manage_clients_manage_clients_component__WEBPACK_IMPORTED_MODULE_18__["ManageClientsComponent"] },
            { path: 'manage-documents', loadChildren: './manage-documents/manage-documents.module#ManageDocumentsModule' },
            { path: 'group-detail', loadChildren: './group-detail/group-detail.module#GroupDetailModule' },
            { path: 'user-group', loadChildren: './user-group/user-group.module#UserGroupModule' },
            { path: 'category-detail', loadChildren: './category-detail/category-detail.module#CategoryDetailModule' },
            { path: 'unit-detail', loadChildren: './unit-detail/unit-detail.module#UnitDetailModule' },
            { path: 'subcategory-detail', loadChildren: './subcategory-detail/subcategory-detail.module#SubcategoryDetailModule' },
            { path: 'item-detail', loadChildren: './item-detail/item-detail.module#ItemDetailModule' },
            { path: 'address-detail', loadChildren: './address-detail/address-detail.module#AddressDetailModule' },
            { path: 'organization-detail', loadChildren: './organization-detail/organization-detail.module#OrganizationDetailModule' },
            { path: 'affiliate-detail', loadChildren: './affiliate-detail/affiliate-detail.module#AffiliateDetailModule' },
            { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailModule' },
            { path: 'clients-detail', loadChildren: './clients-detail/clients-detail.module#ClientsDetailModule' },
            { path: 'document-detail', loadChildren: './document-detail/document-detail.module#DocumentDetailModule' },
            { path: 'estimate', component: _estimate_detail_estimate_detail_component__WEBPACK_IMPORTED_MODULE_6__["EstimateDetailComponent"],
                children: [
                    { path: 'create', component: _estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_8__["EstimateCreateComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'manage-estimates', component: _manage_estimates_manage_estimates_component__WEBPACK_IMPORTED_MODULE_11__["ManageEstimatesComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'group-estimates', component: _manage_estimates_manage_estimates_component__WEBPACK_IMPORTED_MODULE_11__["ManageEstimatesComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'cbd', component: _estimate_cbd_estimate_cbd_component__WEBPACK_IMPORTED_MODULE_14__["EstimateCbdComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'item', component: _estimate_item_estimate_item_component__WEBPACK_IMPORTED_MODULE_12__["EstimateItemComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'estimated-item', component: _estimated_item_estimated_item_component__WEBPACK_IMPORTED_MODULE_9__["EstimatedItemComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'document', component: _estimate_document_estimate_document_component__WEBPACK_IMPORTED_MODULE_15__["EstimateDocumentComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'markups', component: _estimate_markups_estimate_markups_component__WEBPACK_IMPORTED_MODULE_10__["EstimateMarkupsComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                    { path: 'print', component: _estimate_print_estimate_print_component__WEBPACK_IMPORTED_MODULE_13__["EstimatePrintComponent"], canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
                ]
            },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
    // ,
    // { component: EstimateDetailComponent,
    //     path: '',
    //     children: [
    //         { path: 'estimate-create', component: EstimateCreateComponent, canActivate: [AuthGuard] },
    //         { path: 'estimate-cbd', component: EstimateCbdComponent, canActivate: [AuthGuard] },
    //
    //     ]
    // }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar></app-sidebar>\n<section class=\"main-container\">\n    <alert></alert>\n    <router-outlet></router-outlet>\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives */ "./src/app/directives/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _manage_subcategories_manage_subcategories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-subcategories/manage-subcategories.component */ "./src/app/layout/manage-subcategories/manage-subcategories.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Shared/pa-modal/pa-modal.component */ "./src/app/layout/Shared/pa-modal/pa-modal.component.ts");
/* harmony import */ var _Shared_pa_button_primary_pa_button_primary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Shared/pa-button-primary/pa-button-primary.component */ "./src/app/layout/Shared/pa-button-primary/pa-button-primary.component.ts");
/* harmony import */ var _Shared_pa_delete_confirmation_modal_pa_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component */ "./src/app/layout/Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component.ts");
/* harmony import */ var _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-categories/manage-categories.component */ "./src/app/layout/manage-categories/manage-categories.component.ts");
/* harmony import */ var _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manage-groups/manage-groups.component */ "./src/app/layout/manage-groups/manage-groups.component.ts");
/* harmony import */ var _estimate_detail_estimate_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./estimate-detail/estimate-detail.component */ "./src/app/layout/estimate-detail/estimate-detail.component.ts");
/* harmony import */ var _estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./estimate-create/estimate-create.component */ "./src/app/layout/estimate-create/estimate-create.component.ts");
/* harmony import */ var _manage_estimates_manage_estimates_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manage-estimates/manage-estimates.component */ "./src/app/layout/manage-estimates/manage-estimates.component.ts");
/* harmony import */ var _estimate_cbd_estimate_cbd_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./estimate-cbd/estimate-cbd.component */ "./src/app/layout/estimate-cbd/estimate-cbd.component.ts");
/* harmony import */ var _estimate_item_estimate_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./estimate-item/estimate-item.component */ "./src/app/layout/estimate-item/estimate-item.component.ts");
/* harmony import */ var _estimated_item_estimated_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./estimated-item/estimated-item.component */ "./src/app/layout/estimated-item/estimated-item.component.ts");
/* harmony import */ var _estimate_document_estimate_document_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./estimate-document/estimate-document.component */ "./src/app/layout/estimate-document/estimate-document.component.ts");
/* harmony import */ var _estimate_markups_estimate_markups_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./estimate-markups/estimate-markups.component */ "./src/app/layout/estimate-markups/estimate-markups.component.ts");
/* harmony import */ var _estimate_print_estimate_print_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./estimate-print/estimate-print.component */ "./src/app/layout/estimate-print/estimate-print.component.ts");
/* harmony import */ var _estimate_data_estimate_data_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./estimate-data/estimate-data.component */ "./src/app/layout/estimate-data/estimate-data.component.ts");
/* harmony import */ var _estimate_item_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./estimate-item/item-detail/item-detail.component */ "./src/app/layout/estimate-item/item-detail/item-detail.component.ts");
/* harmony import */ var _estimate_markups_markup_detail_markup_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./estimate-markups/markup-detail/markup-detail.component */ "./src/app/layout/estimate-markups/markup-detail/markup-detail.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _manage_project_manager_manage_project_manager_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./manage-project-manager/manage-project-manager.component */ "./src/app/layout/manage-project-manager/manage-project-manager.component.ts");
/* harmony import */ var _project_manager_detail_project_manager_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./project-manager-detail/project-manager-detail.component */ "./src/app/layout/project-manager-detail/project-manager-detail.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _manage_clients_manage_clients_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./manage-clients/manage-clients.component */ "./src/app/layout/manage-clients/manage-clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_10__["TextMaskModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_12__["DataTablesModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_30__["CurrencyMaskModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_33__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"],
                _manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_16__["ManageCategoriesComponent"],
                _manage_subcategories_manage_subcategories_component__WEBPACK_IMPORTED_MODULE_11__["ManageSubcategoriesComponent"],
                _manage_groups_manage_groups_component__WEBPACK_IMPORTED_MODULE_17__["ManageGroupsComponent"],
                _manage_project_manager_manage_project_manager_component__WEBPACK_IMPORTED_MODULE_31__["ManageProjectManagerComponent"],
                _manage_clients_manage_clients_component__WEBPACK_IMPORTED_MODULE_34__["ManageClientsComponent"],
                _project_manager_detail_project_manager_detail_component__WEBPACK_IMPORTED_MODULE_32__["ProjectManagerDetailComponent"],
                _estimate_detail_estimate_detail_component__WEBPACK_IMPORTED_MODULE_18__["EstimateDetailComponent"],
                _estimate_create_estimate_create_component__WEBPACK_IMPORTED_MODULE_19__["EstimateCreateComponent"],
                _manage_estimates_manage_estimates_component__WEBPACK_IMPORTED_MODULE_20__["ManageEstimatesComponent"],
                _estimate_cbd_estimate_cbd_component__WEBPACK_IMPORTED_MODULE_21__["EstimateCbdComponent"],
                _estimate_item_estimate_item_component__WEBPACK_IMPORTED_MODULE_22__["EstimateItemComponent"],
                _estimated_item_estimated_item_component__WEBPACK_IMPORTED_MODULE_23__["EstimatedItemComponent"],
                _estimate_document_estimate_document_component__WEBPACK_IMPORTED_MODULE_24__["EstimateDocumentComponent"],
                _estimate_markups_estimate_markups_component__WEBPACK_IMPORTED_MODULE_25__["EstimateMarkupsComponent"],
                _estimate_print_estimate_print_component__WEBPACK_IMPORTED_MODULE_26__["EstimatePrintComponent"],
                _Shared_pa_delete_confirmation_modal_pa_delete_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__["PaDeleteConfirmationModalComponent"],
                _estimate_data_estimate_data_component__WEBPACK_IMPORTED_MODULE_27__["EstimateDataComponent"],
                _Shared_pa_modal_pa_modal_component__WEBPACK_IMPORTED_MODULE_13__["PaModalComponent"],
                _estimate_item_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_28__["ItemDetailComponent"],
                _estimate_markups_markup_detail_markup_detail_component__WEBPACK_IMPORTED_MODULE_29__["MarkupDetailComponent"],
                _Shared_pa_button_primary_pa_button_primary_component__WEBPACK_IMPORTED_MODULE_14__["PaButtonPrimaryComponent"]
            ],
            providers: [
                _estimate_markups_markup_detail_markup_detail_component__WEBPACK_IMPORTED_MODULE_29__["MarkupDetailComponent"],
                _estimate_item_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_28__["ItemDetailComponent"],
                _estimate_data_estimate_data_component__WEBPACK_IMPORTED_MODULE_27__["EstimateDataComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-categories/manage-categories.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-categories/manage-categories.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <h3 class=\"one\">Manage Categories of {{organization}}\n        <button class=\"btn Add-userbtn float-right\" (click)=\"addCategory(organizationId)\">Add Category</button>\n    </h3>\n        <div class=\"card-body table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table  table-striped table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Category Name</th>\n                    <th class=\"text-center\">Sort</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let tag of tags; let index=index;let last = last;let first = first;\" >\n\n                    <td>{{ tag.TagDescr }}</td>\n                    <td  class=\"text-center\"><i class=\"fa fa-arrow-up\" (click)=\"setUp(tag.LTagsId,tags[index - 1].LTagsId, index)\" *ngIf=\"!first\" ></i><i class=\"fa fa-arrow-down\" *ngIf=\"!last\" (click)=\"setDown(tag.LTagsId,tags[index + 1].LTagsId, index)\"></i></td>\n                    <td class=\"action-btn\"><i class=\"fa fa-pencil\" (click)=\"goToGroupDetails(tag.LTagsId, organizationId)\"></i><i class=\"fa fa-trash\" (click)=\"showDeleteCategoryConfirmationModal(tag.LTagsId)\"></i> </td>\n\n                </tr>\n\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n</div>\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this category'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteCategoryDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/manage-categories/manage-categories.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-categories/manage-categories.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.fa-arrow-down {\n  cursor: pointer; }\n\n.fa-arrow-up {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/manage-categories/manage-categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-categories/manage-categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoriesComponent", function() { return ManageCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManageCategoriesComponent = /** @class */ (function () {
    function ManageCategoriesComponent(httpTagService, router, alertService, modalService, modalTagsService, httpTagsService) {
        this.httpTagService = httpTagService;
        this.router = router;
        this.alertService = alertService;
        this.modalService = modalService;
        this.modalTagsService = modalTagsService;
        this.httpTagsService = httpTagsService;
        this.dtOptions = {};
    }
    ManageCategoriesComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagModel = {
            LTagId: 0,
            DisplayOrder: 0,
            OrganizationId: 0,
            TagDescr: '',
            TagName: '',
            LTagType: 'Category',
            ParentTagId: 0
        };
        this.bindTagTables();
        this.loadActiveModel();
    };
    ManageCategoriesComponent.prototype.bindTagTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.groupOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    ltagType: 'Category'
                };
                dataTablesParameters.groupOptions = _this.groupOptions;
                _this.httpTagService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.tags = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'TagDescr' }, { data: 'IsActive' }]
        };
    };
    ManageCategoriesComponent.prototype.addCategory = function () {
        localStorage.removeItem('lTagId');
        this.router.navigate(['/category-detail']);
    };
    ManageCategoriesComponent.prototype.goToGroupDetails = function (id) {
        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['category-detail']);
    };
    ManageCategoriesComponent.prototype.goToClientDetails = function () {
        this.router.navigate(['organization-detail']);
    };
    ManageCategoriesComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageCategoriesComponent.prototype.onStatusChange = function (tag, isActive) {
        var _this = this;
        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(function (data) {
            if (data) {
                tag.IsActive = isActive;
                _this.alertService.success(tag.IsActive ? 'category activate successfully' : 'category deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageCategoriesComponent.prototype.setUp = function (currentTagId, previousTagId, index) {
        this.updateTagDetail(currentTagId, index - 1);
        this.updateTagDetail(previousTagId, index);
    };
    ManageCategoriesComponent.prototype.setDown = function (currentTagId, nextTagId, index) {
        this.updateTagDetail(currentTagId, index + 1);
        this.updateTagDetail(nextTagId, index);
    };
    ManageCategoriesComponent.prototype.updateTagDetail = function (lTagId, index) {
        var _this = this;
        this.httpTagsService.getTagDetailByTagId(lTagId, true)
            .subscribe(function (data) {
            _this.lTagModel = data;
            _this.lTagModel.LTagType = 'Category';
            _this.lTagModel.DisplayOrder = index;
            _this.httpTagsService.create(_this.lTagModel)
                .subscribe(function (data) {
                // this.groupOptions = {
                //     parentTagId: parentTagId,
                // };
                _this.tags = [];
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    };
    ManageCategoriesComponent.prototype.showDeleteCategoryConfirmationModal = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteCategoryDialog')];
                    case 1:
                        isDelete = _a.sent();
                        if (isDelete) {
                            this.modalTagsService.updateActive(categoryId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('Category deleted successfully', true);
                                _this.tags = [];
                                _this.dtElement.dtInstance.then(function (dtInstance) {
                                    //draw the table first
                                    dtInstance.draw();
                                });
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ManageCategoriesComponent.prototype, "dtElement", void 0);
    ManageCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-categories',
            template: __webpack_require__(/*! ./manage-categories.component.html */ "./src/app/layout/manage-categories/manage-categories.component.html"),
            styles: [__webpack_require__(/*! ./manage-categories.component.scss */ "./src/app/layout/manage-categories/manage-categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__["PaModalService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]])
    ], ManageCategoriesComponent);
    return ManageCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-clients/manage-clients.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/manage-clients/manage-clients.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\r\n    <h3 class=\"one\">Manage Clients\r\n        <button class=\"btn Add-userbtn float-right\" (click)=\"addClient()\" >Add User</button>\r\n    </h3>\r\n        <div class=\"card-body table-responsive\">\r\n        <table datatable [dtOptions]=\"dtOptions\" class=\"table  table-striped table-bordered user-table\">\r\n            <thead>\r\n            <tr>\r\n                <th>Client</th>\r\n                <th>Email</th>\r\n                <th>First name</th>\r\n                <th>Last name</th>\r\n                <th width=\"20%\">Group</th>\r\n                <th>Created Date</th>\r\n                <th class=\"text-center\">Active</th>\r\n                <th class=\"text-center\">Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let client of clients; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\r\n                <td>{{client.OrganizationName}}</td>\r\n                <td>{{ client.UserName }}</td>\r\n                <td>{{ client.FirstName }}</td>\r\n                <td>{{ client.LastName }}</td>\r\n                <td>\r\n                    <ng-multiselect-dropdown\r\n                        [placeholder]=\"'select group'\"\r\n                        [data]=\"groupsModel\"\r\n                        [(ngModel)]=\"client.UserGroups\"\r\n                        [settings]=\"dropdownSettings\"\r\n                        (onSelect)=\"onGroupSelect($event, client.ContactId, true)\"\r\n                        (onSelectAll)=\"onSelectAll($event, client.ContactId, true)\"\r\n                        (onDeSelectAll)=\"onDeSelectAll(groupsModel, client.ContactId, false)\"\r\n\r\n                        (onDeSelect)=\"onGroupDeSelect($event, client.ContactId, false)\"\r\n                    >\r\n                    </ng-multiselect-dropdown>\r\n\r\n                </td>\r\n                <td>{{ client.CreatedDate | date:'MM/dd/yyyy hh:mm:ss' }}</td>\r\n                <td class=\"text-center\">\r\n                    <button (click)=\"onStatusChange(client,client.IsActive)\" class=\"dropbtn\"\r\n                            [ngClass]=\"{'bg-success': client.IsActive.toString().toLowerCase() === 'true', 'bg-danger': client.IsActive.toString().toLowerCase() === 'false' }\">\r\n                        {{client.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}\r\n                    </button>\r\n                </td>\r\n                <!--<td>-->\r\n                    <!--<div class=\"dropdown\">-->\r\n                        <!--<button class=\"dropbtn\"-->\r\n                                <!--[ngClass]=\"{'bg-success': client.IsActive.toString().toLowerCase() === 'true', 'bg-danger': client.IsActive.toString().toLowerCase() === 'false' }\">-->\r\n                            <!--{{client.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}-->\r\n                        <!--</button>-->\r\n                        <!--<div class=\"dropdown-content\">-->\r\n                            <!--<a (click)=\"onStatusChange(client,false)\">Active</a>-->\r\n                            <!--<a (click)=\"onStatusChange(client,true)\">InActive</a>-->\r\n                        <!--</div>-->\r\n                    <!--</div>-->\r\n                    <!--<div style=\"display: none\"> {{client.IsActive.toString().toLowerCase()}}</div>-->\r\n                   <!--</td>-->\r\n                <td class=\"action-btn\">\r\n                    <i class=\"fa fa-pencil\" (click)=\"goToClientDetails(client.UserId)\"></i>\r\n                    <i class=\"fa fa-trash\"></i>\r\n                </td>\r\n            </tr>\r\n\r\n            <tr *ngIf=\"users?.length == 0\">\r\n                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/manage-clients/manage-clients.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/manage-clients/manage-clients.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n   server-side-angular-way.component.css\r\n*/\n.no-data-available {\n  text-align: center; }\n/*\r\n   src/styles.css (i.e. your global style)\r\n*/\n.user-table {\n  width: 100% !important; }\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-clients/manage-clients.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/manage-clients/manage-clients.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageClientsComponent", function() { return ManageClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_affiliates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/affiliates.service */ "./src/app/services/affiliates.service.ts");
/* harmony import */ var _services_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/clients.service */ "./src/app/services/clients.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_groups_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/groups.service */ "./src/app/services/groups.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageClientsComponent = /** @class */ (function () {
    function ManageClientsComponent(httpClientService, httpAffiliateService, router, route, alertService, httpUserService, httpTagsService, httpGroupService) {
        this.httpClientService = httpClientService;
        this.httpAffiliateService = httpAffiliateService;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.httpUserService = httpUserService;
        this.httpTagsService = httpTagsService;
        this.httpGroupService = httpGroupService;
        this.dtOptions = {};
        this.groupsModel = [];
        this.ShowFilter = false;
        this.dropdownSettings = {};
    }
    ManageClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            _this.userId = params['id'] || 0;
        });
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindUserTable();
        this.loadActiveModel();
        this.getGroupList();
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'LTagId',
            textField: 'TagDescr',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };
    };
    ManageClientsComponent.prototype.bindUserTable = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.clientOptions = {
                    organizationId: _this.organizationId,
                };
                dataTablesParameters.clientOptions = _this.clientOptions;
                _this.httpClientService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.clients = resp[0].Data;
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
    ManageClientsComponent.prototype.onStatusChange = function (user, isActive) {
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
    ManageClientsComponent.prototype.onGroupSelect = function (group, contactId, isActive) {
        this.addUpdateGroup(group, contactId, isActive);
    };
    ManageClientsComponent.prototype.onGroupDeSelect = function (group, contactId, isActive) {
        this.addUpdateGroup(group, contactId, isActive);
    };
    ManageClientsComponent.prototype.onSelectAll = function (groups, contactId, isActive) {
        this.addUpdateAllGroup(groups, contactId, isActive);
    };
    ManageClientsComponent.prototype.onDeSelectAll = function (groups, contactId, isActive) {
        this.addUpdateAllGroup(groups, contactId, isActive);
    };
    ManageClientsComponent.prototype.addUpdateGroup = function (group, contactId, isActive) {
        var _this = this;
        group.IsActive = isActive;
        this.userGroup = {
            UserGroups: [group],
            ContactId: contactId
        };
        this.httpGroupService.SaveUserGroupSingle(this.userGroup)
            .subscribe(function (data) {
            console.log(_this.userGroup);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageClientsComponent.prototype.addUpdateAllGroup = function (groups, contactId, isActive) {
        var _this = this;
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            group.IsActive = isActive;
        }
        this.userGroup = {
            UserGroups: groups,
            ContactId: contactId
        };
        this.httpGroupService.SaveUserGroupSingle(this.userGroup)
            .subscribe(function (data) {
            console.log(_this.userGroup);
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageClientsComponent.prototype.addClient = function () {
        localStorage.removeItem('userId');
        this.router.navigate(['/clients-detail']);
    };
    ManageClientsComponent.prototype.goToClientDetails = function (id) {
        localStorage.setItem('userId', id.toString());
        this.router.navigate(['clients-detail'], { queryParams: { id: id } });
    };
    ManageClientsComponent.prototype.getGroupList = function () {
        var _this = this;
        var organizationId = Number(localStorage.getItem('organizationId'));
        this.httpTagsService.getTagByTypeAndOrganizationId('Groups', organizationId, true)
            .subscribe(function (group) {
            _this.groupsModel = group;
        });
    };
    ManageClientsComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-clients',
            template: __webpack_require__(/*! ./manage-clients.component.html */ "./src/app/layout/manage-clients/manage-clients.component.html"),
            styles: [__webpack_require__(/*! ./manage-clients.component.scss */ "./src/app/layout/manage-clients/manage-clients.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_clients_service__WEBPACK_IMPORTED_MODULE_3__["ClientsService"],
            _services_affiliates_service__WEBPACK_IMPORTED_MODULE_2__["AffiliatesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_7__["TagsService"],
            _services_groups_service__WEBPACK_IMPORTED_MODULE_6__["GroupsService"]])
    ], ManageClientsComponent);
    return ManageClientsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-estimates/manage-estimates.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-estimates/manage-estimates.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <h3 class=\"one\">Manage Estimates\n        <button class=\"btn Add-userbtn float-right\" (click)=\"addEstimate(organizationId)\">Add Estimates</button>\n    </h3>\n    <div class=\"table-responsive\">\n        <table datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-bordered address-table display\">\n            <thead>\n            <tr>\n                <th width=\"15%\">Estimate Title</th>\n                <th width=\"10%\">Estimate Number</th>\n                <th width=\"10%\">Group</th>\n                <th width=\"10%\">Project Manager</th>\n                <th width=\"10%\">Estimator</th>\n                <th width=\"10%\">Date</th>\n                <th class=\"text-right\" width=\"10%\">Total Project Cost</th>\n                <th width=\"10%\">Last Modified</th>\n                <th class=\"text-center\" width=\"10%\">Action</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let estimate of estimates\">\n                <td>{{ estimate.EstimateTitle }}</td>\n                <td>{{ estimate.EstimateNumber }}</td>\n                <td>{{ estimate.EstimateGroupName }}</td>\n                <td>{{ estimate.ManagerName }}</td>\n                <td>{{ estimate.Estimator }}</td>\n                <td>{{ estimate.CreatedDate | date:'MM/dd/yyyy' }}</td>\n                <td class=\"text-right\">{{ estimate.TotalProjectCost | currency:'USD':'symbol-narrow':'1.2-2' }}</td>\n                <td>{{ estimate.ModifiedDate | date:'MM/dd/yyyy' }}</td>\n                <td class=\"action-btn\">\n                    <i class=\"fa fa-pencil\" (click)=\"goToEstimateDetail(estimate.EstimateId)\"></i>\n                    <i class=\"fa fa-copy\" (click)=\"copyEstimate(estimate.EstimateId)\"></i>\n                    <i class=\"fa fa-trash\" (click)=\"showDeleteEstimateConfirmationModal(estimate.EstimateId)\"></i>\n                </td>\n            </tr>\n            <tr *ngIf=\"tags?.length == 0\">\n                <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this estimate'\"\n                                        headerMessage=\"Are you sure?\"\n                                        [dialogName]=\"'deleteEstimatedDialog'\"></pa-delete-confirmation-modal-component>\n\n"

/***/ }),

/***/ "./src/app/layout/manage-estimates/manage-estimates.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-estimates/manage-estimates.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-estimates/manage-estimates.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/manage-estimates/manage-estimates.component.ts ***!
  \***********************************************************************/
/*! exports provided: ManageEstimatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageEstimatesComponent", function() { return ManageEstimatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_estimate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/estimate.service */ "./src/app/services/estimate.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManageEstimatesComponent = /** @class */ (function () {
    function ManageEstimatesComponent(httpEstimateService, router, alertService, modalService) {
        this.httpEstimateService = httpEstimateService;
        this.router = router;
        this.alertService = alertService;
        this.modalService = modalService;
        this.dtOptions = {};
    }
    ManageEstimatesComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindEstimateTables();
    };
    ManageEstimatesComponent.prototype.bindEstimateTables = function () {
        var _this = this;
        var estimateType = '';
        estimateType = this.router.url == '/estimate/group-estimates' ? 'group' : 'single';
        var userId = estimateType == 'group' && localStorage.getItem('roleName') == 'Client Admin' ? 0 : localStorage.getItem('userId');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.estimateOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    estimateType: estimateType,
                    userId: userId
                };
                dataTablesParameters.estimateOptions = _this.estimateOptions;
                _this.httpEstimateService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.estimates = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'EstimateTitle' }, { data: 'EstimateNumber' }, { data: 'EstimateGroupName' }, { data: 'ManagerName' }, { data: 'Estimator' }, { data: 'CreatedDate' }, { data: 'TotalProjectCost' }, { data: 'ModifiedDate' }]
        };
    };
    ManageEstimatesComponent.prototype.onStatusChange = function (estimate, isActive) {
        var _this = this;
        this.httpEstimateService.updateActive(estimate.EstimateId, isActive)
            .subscribe(function (data) {
            if (data) {
                estimate.IsActive = isActive;
                _this.alertService.success(estimate.IsActive ? 'Estimate activate successfully' : 'Estimate deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageEstimatesComponent.prototype.addEstimate = function () {
        localStorage.removeItem('estimateId');
        this.router.navigate(['estimate/create']);
    };
    ManageEstimatesComponent.prototype.goToEstimateDetail = function (id) {
        localStorage.removeItem('estimator');
        localStorage.removeItem('estimatorClientAdmin');
        localStorage.removeItem('estimatorClientAdminMainMenu');
        localStorage.removeItem('userEstimator');
        localStorage.setItem('estimateId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        window.location.href = 'estimate/estimated-item';
    };
    ManageEstimatesComponent.prototype.goToEstimateDetailEdit = function (id) {
        localStorage.removeItem('estimator');
        localStorage.setItem('estimateId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['estimate/create']);
    };
    ManageEstimatesComponent.prototype.copyEstimate = function (estimateId) {
        var _this = this;
        this.httpEstimateService.copyEstimate(estimateId)
            .subscribe(function (data) {
            if (data) {
                _this.alertService.success('Estimate copied  successfully', false);
                _this.estimateOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                };
                _this.estimates = [];
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    //draw the table first
                    dtInstance.draw();
                });
            }
            else {
                _this.alertService.success('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
            // this.loading = false;
        });
    };
    ManageEstimatesComponent.prototype.showDeleteEstimateConfirmationModal = function (estimateId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteEstimatedDialog')];
                    case 1:
                        isDelete = _a.sent();
                        if (isDelete) {
                            this.httpEstimateService.updateActive(estimateId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('Estimate deleted successfully', true);
                                _this.estimates = [];
                                _this.dtElement.dtInstance.then(function (dtInstance) {
                                    //draw the table first
                                    dtInstance.draw();
                                });
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], ManageEstimatesComponent.prototype, "dtElement", void 0);
    ManageEstimatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-estimates',
            template: __webpack_require__(/*! ./manage-estimates.component.html */ "./src/app/layout/manage-estimates/manage-estimates.component.html"),
            styles: [__webpack_require__(/*! ./manage-estimates.component.scss */ "./src/app/layout/manage-estimates/manage-estimates.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_estimate_service__WEBPACK_IMPORTED_MODULE_2__["EstimateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_5__["PaModalService"]])
    ], ManageEstimatesComponent);
    return ManageEstimatesComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-groups/manage-groups.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/manage-groups/manage-groups.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <h3 class=\"one\">Manage group of {{organization}}\n        <div *ngIf=\"isCaprosoAdmin\"> <button  (click)=\"goToClientDetails()\" class=\"btn btn-secondary btn-space float-right\">Back</button> </div>\n        <button class=\"btn Add-userbtn float-right\" (click)=\"addGroup(organizationId)\">Add Group</button>\n    </h3>\n        <div class=\"card-body table-responsive\">\n\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Group Name</th>\n                    <!--<th>Active</th>-->\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let tag of tags\">\n\n                    <td>{{ tag.TagDescr }}</td>\n                    <!--<td>-->\n                        <!--<div class=\"dropdown\">-->\n                        <!--<button class=\"dropbtn\"-->\n                                <!--[ngClass]=\"{'bg-success': tag.IsActive.toString().toLowerCase() === 'true', 'bg-danger': tag.IsActive.toString().toLowerCase() === 'false' }\">-->\n                            <!--{{tag.IsActive.toString().toLowerCase() === 'true'? 'Active': 'InActive'}}-->\n                        <!--</button>-->\n                        <!--<div class=\"dropdown-content\">-->\n                            <!--<a (click)=\"onStatusChange(tag,true)\">Active</a>-->\n                            <!--<a (click)=\"onStatusChange(tag,false)\">InActive</a>-->\n                        <!--</div>-->\n                       <!--</div>-->\n                    <!--</td>-->\n                    <td class=\"action-btn\">\n                        <i class=\"fa fa-pencil\" (click)=\"goToGroupDetails(tag.LTagsId, organizationId)\"></i>\n                        <i class=\"fa fa-trash\"></i>\n                    </td>\n\n                </tr>\n\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/manage-groups/manage-groups.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/manage-groups/manage-groups.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-groups/manage-groups.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/manage-groups/manage-groups.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManageGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupsComponent", function() { return ManageGroupsComponent; });
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




var ManageGroupsComponent = /** @class */ (function () {
    function ManageGroupsComponent(httpGroupService, router, alertService) {
        this.httpGroupService = httpGroupService;
        this.router = router;
        this.alertService = alertService;
        this.dtOptions = {};
        this.isCaprosoAdmin = false;
        this.isCaprosoAdmin = localStorage.getItem('roleName') == 'Admin';
    }
    ManageGroupsComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindTagTables();
    };
    ManageGroupsComponent.prototype.bindTagTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.groupOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    ltagType: 'Groups'
                };
                dataTablesParameters.groupOptions = _this.groupOptions;
                _this.httpGroupService.get(dataTablesParameters).subscribe(function (resp) {
                    if (resp[0] && resp[0].Data) {
                        _this.tags = resp[0].Data;
                    }
                    else {
                        _this.alertService.error('Something wrong please contact to administrator.');
                    }
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'TagDescr' }, { data: 'IsActive' }]
        };
    };
    ManageGroupsComponent.prototype.addGroup = function () {
        localStorage.removeItem('lTagId');
        this.router.navigate(['/group-detail']);
    };
    ManageGroupsComponent.prototype.goToGroupDetails = function (id) {
        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['group-detail']);
    };
    ManageGroupsComponent.prototype.onStatusChange = function (tag, isActive) {
        var _this = this;
        this.httpGroupService.updateActive(tag.LTagsId, isActive)
            .subscribe(function (data) {
            if (data) {
                tag.IsActive = isActive;
                _this.alertService.success(tag.IsActive ? 'group activate successfully' : 'group deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageGroupsComponent.prototype.goToClientDetails = function () {
        this.router.navigate(['organization-detail']);
    };
    ManageGroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-groups',
            template: __webpack_require__(/*! ./manage-groups.component.html */ "./src/app/layout/manage-groups/manage-groups.component.html"),
            styles: [__webpack_require__(/*! ./manage-groups.component.scss */ "./src/app/layout/manage-groups/manage-groups.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ManageGroupsComponent);
    return ManageGroupsComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-project-manager/manage-project-manager.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/manage-project-manager/manage-project-manager.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n    <h3 class=\"one\">Manage Project Manager of {{organization}}\n        <button class=\"btn Add-userbtn float-right\" (click)=\"addProjectManager(organizationId)\">Add Project Manager</button>\n    </h3>\n        <div class=\"card-body table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table  table-striped table-bordered address-table display\">\n                <thead>\n                <tr>\n                    <th>Project Manager Name</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let tag of tags; let odd=odd; let even=even\" [ngClass]=\"{ odd: odd, even:even}\">\n\n                    <td>{{ tag.TagDescr }}</td>\n                    <td class=\"action-btn\"><i class=\"fa fa-pencil\" (click)=\"goToProjectManagerDetails(tag.LTagsId, organizationId)\"></i><i class=\"fa fa-trash\" (click)=\"showDeleteProjectManagerConfirmationModal(tag.LTagsId)\"></i> </td>\n\n                </tr>\n\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n</div>\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this category'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteProjectManagerDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/manage-project-manager/manage-project-manager.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/manage-project-manager/manage-project-manager.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-project-manager/manage-project-manager.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/manage-project-manager/manage-project-manager.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManageProjectManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProjectManagerComponent", function() { return ManageProjectManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManageProjectManagerComponent = /** @class */ (function () {
    function ManageProjectManagerComponent(httpTagService, router, alertService, modalService, modalTagsService) {
        this.httpTagService = httpTagService;
        this.router = router;
        this.alertService = alertService;
        this.modalService = modalService;
        this.modalTagsService = modalTagsService;
        this.dtOptions = {};
    }
    ManageProjectManagerComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.bindTagTables();
    };
    ManageProjectManagerComponent.prototype.bindTagTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.groupOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    ltagType: 'Manager'
                };
                dataTablesParameters.groupOptions = _this.groupOptions;
                _this.httpTagService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.tags = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'TagDescr' }, { data: 'IsActive' }]
        };
    };
    ManageProjectManagerComponent.prototype.addProjectManager = function () {
        localStorage.removeItem('lTagId');
        this.router.navigate(['/project-manager-detail']);
    };
    ManageProjectManagerComponent.prototype.goToProjectManagerDetails = function (id) {
        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['project-manager-detail']);
    };
    ManageProjectManagerComponent.prototype.onStatusChange = function (tag, isActive) {
        var _this = this;
        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(function (data) {
            if (data) {
                tag.IsActive = isActive;
                _this.alertService.success(tag.IsActive ? 'project manager activate successfully' : 'project manager deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageProjectManagerComponent.prototype.showDeleteProjectManagerConfirmationModal = function (categoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteProjectManagerDialog')];
                    case 1:
                        isDelete = _a.sent();
                        if (isDelete) {
                            this.modalTagsService.updateActive(categoryId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('Project Manager deleted successfully', true);
                                _this.tags = [];
                                _this.dtElement.dtInstance.then(function (dtInstance) {
                                    //draw the table first
                                    dtInstance.draw();
                                });
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ManageProjectManagerComponent.prototype, "dtElement", void 0);
    ManageProjectManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-project-manager',
            template: __webpack_require__(/*! ./manage-project-manager.component.html */ "./src/app/layout/manage-project-manager/manage-project-manager.component.html"),
            styles: [__webpack_require__(/*! ./manage-project-manager.component.scss */ "./src/app/layout/manage-project-manager/manage-project-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__["PaModalService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]])
    ], ManageProjectManagerComponent);
    return ManageProjectManagerComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-subcategories/manage-subcategories.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/manage-subcategories/manage-subcategories.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n   <h3 class=\"one\">Manage Sub Categories of {{organization}} <button class=\"btn Add-userbtn float-right\" (click)=\"addCategory(organizationId)\">Add Sub Category</button></h3>\n    <div class=\"row \" >\n        <div class=\"col-md-1\"><label> Category:</label></div>\n        <div class=\"col-md-3\">\n            <select class=\"form-control\" [(ngModel)]='parentTagId' class=\"form-control\" (change)=\"onCategoryChange($event.target.value)\">\n                <option value=\"0\" selected>All</option>\n                <option *ngFor=\"let category of categoryModel\" [(value)]=\"category.LTagId\">{{category.TagDescr}}</option>\n            </select>\n        </div>\n    </div>\n   <div class=\"card-body table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table table-striped table-bordered address-table\">\n                <thead>\n                <tr>\n                    <!--<th>Category Name</th>-->\n                    <th>Sub Category Name</th>\n                    <th class=\"text-center\">Sort</th>\n                    <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let tag of tags; let index=index;let last = last;let first = first;\" >\n                    <!--<td>{{tag.ParentTagDescr}}</td>-->\n                    <td>{{ tag.TagDescr }}</td>\n                    <td  class=\"text-center\"><i class=\"fa fa-arrow-up\" (click)=\"setUp(tag.LTagsId,tags[index - 1].LTagsId, index)\" *ngIf=\"!first\" ></i><i class=\"fa fa-arrow-down\" *ngIf=\"!last\" (click)=\"setDown(tag.LTagsId,tags[index + 1].LTagsId, index)\"></i></td>\n                    <td class=\"action-btn\">\n                     <i  class=\"fa fa-pencil\" (click)=\"goToSubCategoryDetails(tag.LTagsId, organizationId)\"></i>\n                     <i class=\"fa fa-trash\" (click)=\"showDeleteSubCategoryConfirmationModal(tag.LTagsId)\"></i>\n                    </td>\n                </tr>\n                <tr *ngIf=\"tags?.length == 0\">\n                    <td colspan=\"3\" class=\"no-data-available\">No data!</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n</div>\n\n<pa-delete-confirmation-modal-component [innerMessage]=\"'Please confirm that you wish to delete \\n this sub category'\" headerMessage=\"Are you sure?\" [dialogName]=\"'deleteSubCategoryDialog'\"></pa-delete-confirmation-modal-component>\n"

/***/ }),

/***/ "./src/app/layout/manage-subcategories/manage-subcategories.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/manage-subcategories/manage-subcategories.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-table {\n  width: 100% !important; }\n\n.btn-space {\n  margin-right: 5px; }\n\n.fa-arrow-down {\n  cursor: pointer; }\n\n.fa-arrow-up {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/manage-subcategories/manage-subcategories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/manage-subcategories/manage-subcategories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageSubcategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSubcategoriesComponent", function() { return ManageSubcategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/pa-modal/pa-modal.service */ "./src/app/layout/Shared/pa-modal/pa-modal.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ManageSubcategoriesComponent = /** @class */ (function () {
    function ManageSubcategoriesComponent(httpTagService, router, alertService, modalService, httpTagsService) {
        this.httpTagService = httpTagService;
        this.router = router;
        this.alertService = alertService;
        this.modalService = modalService;
        this.httpTagsService = httpTagsService;
        this.dtOptions = {};
    }
    ManageSubcategoriesComponent.prototype.ngOnInit = function () {
        this.organization = localStorage.getItem('organizationName');
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagModel = {
            LTagId: 0,
            DisplayOrder: 0,
            OrganizationId: 0,
            TagDescr: '',
            TagName: '',
            LTagType: 'Sub Category',
            ParentTagId: 0
        };
        this.getCategoryList();
        this.bindTagTables();
        this.loadActiveModel();
    };
    ManageSubcategoriesComponent.prototype.bindTagTables = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            ajax: function (dataTablesParameters, callback) {
                _this.groupOptions = {
                    organizationId: localStorage.getItem('organizationId'),
                    parentTagId: _this.parentTagId,
                    ltagType: 'Sub Category'
                };
                dataTablesParameters.groupOptions = _this.groupOptions;
                _this.httpTagService.get(dataTablesParameters).subscribe(function (resp) {
                    _this.tags = resp[0].Data;
                    callback({
                        recordsTotal: resp[0].RecordsTotal,
                        recordsFiltered: resp[0].RecordsFiltered,
                        data: []
                    });
                });
            },
            columns: [{ data: 'TagDescr' }, { data: 'DisplayOrder' }]
        };
    };
    ManageSubcategoriesComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpTagService.getTagByTypeAndOrganizationId('Category', this.organizationId, true)
            .subscribe(function (categories) {
            _this.categoryModel = categories;
        });
    };
    ManageSubcategoriesComponent.prototype.addCategory = function () {
        localStorage.removeItem('lTagId');
        this.router.navigate(['/subcategory-detail']);
    };
    ManageSubcategoriesComponent.prototype.goToSubCategoryDetails = function (id) {
        localStorage.setItem('lTagId', id.toString());
        localStorage.setItem('organizationId', this.organizationId.toString());
        this.router.navigate(['subcategory-detail']);
    };
    ManageSubcategoriesComponent.prototype.loadActiveModel = function () {
        this.activeModel = [{ "value": 'True', "name": 'Active' }, { "value": 'False', "name": 'InActive' }];
    };
    ManageSubcategoriesComponent.prototype.onCategoryChange = function (parentTagId) {
        this.groupOptions = {
            parentTagId: parentTagId,
        };
        localStorage.setItem('parentTagId', parentTagId);
        this.tags = [];
        this.dtElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    ManageSubcategoriesComponent.prototype.onStatusChange = function (tag, isActive) {
        var _this = this;
        this.httpTagService.updateActive(tag.LTagsId, isActive)
            .subscribe(function (data) {
            if (data) {
                tag.IsActive = isActive;
                _this.alertService.success(tag.IsActive ? 'category activate successfully' : 'category deactivate successfully');
            }
            else {
                _this.alertService.error('Something wrong please contact to administrator.');
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    ManageSubcategoriesComponent.prototype.setUp = function (currentTagId, previousTagId, index) {
        this.updateTagDetail(currentTagId, index - 1);
        this.updateTagDetail(previousTagId, index);
    };
    ManageSubcategoriesComponent.prototype.setDown = function (currentTagId, nextTagId, index) {
        this.updateTagDetail(currentTagId, index + 1);
        this.updateTagDetail(nextTagId, index);
    };
    ManageSubcategoriesComponent.prototype.updateTagDetail = function (lTagId, index) {
        var _this = this;
        this.httpTagsService.getTagDetailByTagId(lTagId, true)
            .subscribe(function (data) {
            _this.lTagModel = data;
            _this.lTagModel.LTagType = 'Sub Category';
            _this.lTagModel.DisplayOrder = index;
            _this.httpTagsService.create(_this.lTagModel)
                .subscribe(function (data) {
                // this.groupOptions = {
                //     parentTagId: parentTagId,
                // };
                _this.tags = [];
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.draw();
                });
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    };
    ManageSubcategoriesComponent.prototype.showDeleteSubCategoryConfirmationModal = function (subCategoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalService.showDialog('deleteSubCategoryDialog')];
                    case 1:
                        isDelete = _a.sent();
                        if (isDelete) {
                            this.httpTagService.updateActive(subCategoryId, false)
                                .subscribe(function (data) {
                                _this.alertService.success('Sub Category deleted successfully', true);
                                _this.tags = [];
                                _this.dtElement.dtInstance.then(function (dtInstance) {
                                    //draw the table first
                                    dtInstance.draw();
                                });
                            }, function (error) {
                                _this.alertService.error(error);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ManageSubcategoriesComponent.prototype, "dtElement", void 0);
    ManageSubcategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-subcategories',
            template: __webpack_require__(/*! ./manage-subcategories.component.html */ "./src/app/layout/manage-subcategories/manage-subcategories.component.html"),
            styles: [__webpack_require__(/*! ./manage-subcategories.component.scss */ "./src/app/layout/manage-subcategories/manage-subcategories.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _Shared_pa_modal_pa_modal_service__WEBPACK_IMPORTED_MODULE_4__["PaModalService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_2__["TagsService"]])
    ], ManageSubcategoriesComponent);
    return ManageSubcategoriesComponent;
}());



/***/ }),

/***/ "./src/app/layout/project-manager-detail/project-manager-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/project-manager-detail/project-manager-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Project Manager Detail</h2>\n<br/>\n<hr>\n<form [formGroup]=\"groupForm\" (ngSubmit)=\"onSubmit(groupForm.value)\">\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"form-group\">\n            <label> Project Manager Name</label>\n            <input class=\"form-control\" formControlName='TagDescr' class=\"form-control\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.TagDescr.errors }\"/>\n\n            <div *ngIf=\"submitted && f.TagDescr.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.TagDescr.errors.required\">Name is required</div>\n            </div>\n        </div>\n    </div>\n\n</div>\n    <div class=\"form-group\">\n        <input type=\"hidden\" class=\"form-control\" formControlName='OrganizationId' class=\"form-control\" />\n        <input type=\"hidden\" class=\"form-control\" formControlName='LTagsId' class=\"form-control\" />\n        <input type=\"hidden\" class=\"form-control\" formControlName='LTagType' class=\"form-control\" />\n\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">{{btnName}}</button>\n        <img *ngIf=\"loading\"\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\n        <a onclick=\"window.history.back();\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/layout/project-manager-detail/project-manager-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/project-manager-detail/project-manager-detail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/project-manager-detail/project-manager-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/project-manager-detail/project-manager-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProjectManagerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagerDetailComponent", function() { return ProjectManagerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tag.service */ "./src/app/services/tag.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectManagerDetailComponent = /** @class */ (function () {
    function ProjectManagerDetailComponent(formBuilder, router, alertService, httpTagsService, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.httpTagsService = httpTagsService;
        this.route = route;
        this.btnName = 'Submit';
        this.loading = false;
        this.submitted = false;
    }
    ProjectManagerDetailComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.lTagsId = 0;
        this.organizationId = Number(localStorage.getItem('organizationId'));
        this.lTagsId = Number(localStorage.getItem('lTagId'));
        if (this.lTagsId > 0) {
            this.btnName = 'Update';
            this.getTagDetail(this.lTagsId);
        }
    };
    ProjectManagerDetailComponent.prototype.buildForm = function () {
        this.groupForm = this.formBuilder.group({
            OrganizationId: [this.organizationId],
            LTagsId: [this.lTagsId],
            TagDescr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            LTagType: ['Manager']
        });
    };
    Object.defineProperty(ProjectManagerDetailComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.groupForm.controls; },
        enumerable: true,
        configurable: true
    });
    ProjectManagerDetailComponent.prototype.onSubmit = function (tagDetail) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.groupForm.invalid) {
            return;
        }
        tagDetail.OrganizationId = Number(localStorage.getItem('organizationId'));
        tagDetail.LTagId = localStorage.getItem('lTagId');
        this.loading = true;
        this.httpTagsService.create(tagDetail)
            .subscribe(function (data) {
            _this.router.navigate(['./manage-project-manager']);
            _this.alertService.success(_this.lTagsId > 0 ? 'Project manager name updated successfully' : 'Project manager name save successfully', true);
            _this.loading = false;
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ProjectManagerDetailComponent.prototype.getTagDetail = function (ltagId) {
        var _this = this;
        this.httpTagsService.getTagDetailByTagId(ltagId, true)
            .subscribe(function (data) {
            _this.groupForm.patchValue({
                LTagId: data.LTagId,
                OrganizationId: data.OrganizationId,
                TagDescr: data.TagDescr,
            });
        });
    };
    ProjectManagerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-manager-detail',
            template: __webpack_require__(/*! ./project-manager-detail.component.html */ "./src/app/layout/project-manager-detail/project-manager-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-manager-detail.component.scss */ "./src/app/layout/project-manager-detail/project-manager-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_4__["TagsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProjectManagerDetailComponent);
    return ProjectManagerDetailComponent;
}());



/***/ }),

/***/ "./src/app/model/CostBreakDownModel.ts":
/*!*********************************************!*\
  !*** ./src/app/model/CostBreakDownModel.ts ***!
  \*********************************************/
/*! exports provided: CostBreakDownModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostBreakDownModel", function() { return CostBreakDownModel; });
var CostBreakDownModel = /** @class */ (function () {
    function CostBreakDownModel() {
    }
    return CostBreakDownModel;
}());



/***/ }),

/***/ "./src/app/model/EstimateMarkupsModel.ts":
/*!***********************************************!*\
  !*** ./src/app/model/EstimateMarkupsModel.ts ***!
  \***********************************************/
/*! exports provided: EstimateMarkupsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateMarkupsModel", function() { return EstimateMarkupsModel; });
var EstimateMarkupsModel = /** @class */ (function () {
    function EstimateMarkupsModel() {
    }
    return EstimateMarkupsModel;
}());



/***/ }),

/***/ "./src/app/model/EstimatedItemsModel.ts":
/*!**********************************************!*\
  !*** ./src/app/model/EstimatedItemsModel.ts ***!
  \**********************************************/
/*! exports provided: EstimatedItemsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimatedItemsModel", function() { return EstimatedItemsModel; });
var EstimatedItemsModel = /** @class */ (function () {
    function EstimatedItemsModel() {
    }
    return EstimatedItemsModel;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map