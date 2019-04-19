(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "./src/app/pages/inventory/inventory-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/inventory/inventory-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/pages/inventory/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/inventory/list/list.component.ts");





var routes = [
    {
        path: 'new',
        component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }
];
var InventoryRoutingModule = /** @class */ (function () {
    function InventoryRoutingModule() {
    }
    InventoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], InventoryRoutingModule);
    return InventoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/inventory/inventory.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/inventory/inventory.module.ts ***!
  \*****************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/pages/inventory/inventory-routing.module.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/new.component */ "./src/app/pages/inventory/new/new.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/pages/inventory/list/list.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");








var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_new_component__WEBPACK_IMPORTED_MODULE_4__["NewComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/pages/inventory/list/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/inventory/list/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Smart Table\n  </nb-card-header>\n\n  <nb-card-body>\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n    </ng2-smart-table>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/inventory/list/list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/inventory/list/list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nb-card {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52ZW50b3J5L2xpc3QvQzpcXFVzZXJzXFxha2RvbmdhclxcRGVza3RvcFxcTXlTcGFjZVxcRnVuXFxBbmd1bGFyXFxJbnZNYW4vc3JjXFxhcHBcXHBhZ2VzXFxpbnZlbnRvcnlcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBK0I7VUFBL0IsZ0NBQStCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52ZW50b3J5L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5iLWNhcmQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/inventory/list/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/inventory/list/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _shared_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/inventory.service */ "./src/app/pages/inventory/shared/inventory.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(service) {
        this.service = service;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                name: {
                    title: 'Name',
                    type: 'string',
                },
                code: {
                    title: 'Code',
                    type: 'string',
                },
                quantity: {
                    title: 'Quantity',
                    type: 'number',
                },
                price: {
                    title: 'Price',
                    type: 'number',
                },
                category: {
                    title: 'Category',
                    type: 'string',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
        var data = this.service.getData();
        this.source.load(data);
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/pages/inventory/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/inventory/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/pages/inventory/new/new.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/inventory/new/new.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>Add New Item</nb-card-header>\n  <nb-card-body>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"\">Item Name </label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\" \">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Code</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Unit</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Price</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Description</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Category</label>\n        <input type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-info\" (click)=\"onSubmit($event)\" >Submit</button>\n    </form>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/inventory/new/new.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/inventory/new/new.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludmVudG9yeS9uZXcvbmV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/inventory/new/new.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/inventory/new/new.component.ts ***!
  \******************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/inventory.service */ "./src/app/pages/inventory/shared/inventory.service.ts");



var NewComponent = /** @class */ (function () {
    function NewComponent(service) {
        this.service = service;
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onSubmit = function (event) {
        var item;
        var result = this.service.saveItem(item);
        alert(' added ' + result);
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/pages/inventory/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.scss */ "./src/app/pages/inventory/new/new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pages/inventory/shared/inventory.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/inventory/shared/inventory.service.ts ***!
  \*************************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventoryService = /** @class */ (function () {
    function InventoryService() {
        this.data = [{
                id: 1,
                name: 'Wheet',
                code: 'P1',
                quantity: 12,
                unit: '',
                price: 12,
                desc: '',
                category: ''
            },
            {
                id: 2,
                name: 'Wheet',
                code: 'P1',
                quantity: 12,
                unit: '',
                price: 12,
                desc: '',
                category: ''
            }
        ];
    }
    InventoryService.prototype.getData = function () {
        return this.data;
    };
    ;
    InventoryService.prototype.getAllItems = function () {
        return this.data;
    };
    InventoryService.prototype.saveItem = function (item) {
        return 'success';
    };
    InventoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventoryService);
    return InventoryService;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module.js.map