webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"address\">\r\n  <div class=\"container p-5\">\r\n    <h4 class=\"display-4\">My Shipping Address</h4>\r\n    <hr>\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!currentAddress\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"currentAddress\" class=\"card bg-light\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label>Address 1</label>\r\n            <input type=\"text\" name=\"address1\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr1\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Address 2</label>\r\n            <input type=\"text\" name=\"address2\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr2\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>City</label>\r\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.city\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>State</label>\r\n                <input type=\"text\" name=\"state\" class=\"form-control\" [(ngModel)]=\"currentAddress.state\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <div class=\"form-group\">\r\n                <label>Postal Code</label>\r\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.postalCode\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Country</label>\r\n            <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"currentAddress.country\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateAddress()\" [disabled]=\"btnDisabled\">Change Address</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/cart\" routerLinkActive=\"active\"  [disabled]=\"btnDisabled\">Checkout</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/address/address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//Address component.ts - Type Script file that contains code to render adddress feature to elearning application 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services 



//componnet files specifications 
var AddressComponent = /** @class */ (function () {
    function AddressComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.btnDisabled = false;
    }
    AddressComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/accounts/address')];
                    case 1:
                        data = _a.sent();
                        if (JSON.stringify(data['address']) === '{}' &&
                            this.data.message === '') {
                            this.data.warning('You have not entered your shipping address. Please enter your shipping address.');
                        }
                        this.currentAddress = data['address'];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.btnDisabled = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.rest.post('api/accounts/address', this.currentAddress)];
                    case 2:
                        res = _b.sent();
                        if (!res['success']) return [3 /*break*/, 4];
                        this.data.success(res['message']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a = (_b.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        _a = this.data.error(res['message']);
                        _b.label = 5;
                    case 5:
                        _a;
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-address',
            template: __webpack_require__("../../../../../src/app/address/address.component.html"),
            styles: [__webpack_require__("../../../../../src/app/address/address.component.scss")]
        })
        //exporting the addtess component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_product_post_product_component__ = __webpack_require__("../../../../../src/app/post-product/post-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_products_my_products_component__ = __webpack_require__("../../../../../src/app/my-products/my-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__myorders_myorders_component__ = __webpack_require__("../../../../../src/app/myorders/myorders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__orderdetails_orderdetails_component__ = __webpack_require__("../../../../../src/app/orderdetails/orderdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
//app-routing.module.ts- Module which handles various routes in  learning client application ///
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//including required services and modules 


















//assigning all possible routes to variable 
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */],
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_14__cart_cart_component__["a" /* CartComponent */],
    },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_8__categories_categories_component__["a" /* CategoriesComponent */],
    },
    {
        path: 'categories/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__category_category_component__["a" /* CategoryComponent */],
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
    },
    {
        path: 'orders/:id',
        component: __WEBPACK_IMPORTED_MODULE_16__orderdetails_orderdetails_component__["a" /* OrderdetailsComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile/settings',
        component: __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile/address',
        component: __WEBPACK_IMPORTED_MODULE_7__address_address_component__["a" /* AddressComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile/postproduct',
        component: __WEBPACK_IMPORTED_MODULE_9__post_product_post_product_component__["a" /* PostProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile/myproducts',
        component: __WEBPACK_IMPORTED_MODULE_10__my_products_my_products_component__["a" /* MyProductsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'profile/orders',
        component: __WEBPACK_IMPORTED_MODULE_15__myorders_myorders_component__["a" /* MyordersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_17__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
//decorator to import and export routing Module in the application 
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-main\">\r\n  <div class=\"container-fluid\">\r\n    <a routerLink=\"/\" class=\"navbar-brand\">\r\n      <img src=\"./assets/img/sam.png\" alt=\"logo\" id=\"logo\"> SAM Arts\r\n    </a>\r\n    <button class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div [ngbCollapse]=\"isCollapsed\" style=\"align-items: left; margin-left: 50px;\" class=\"collapse navbar-collapse flex-column\"\r\n      id=\"navbarNav\">\r\n      <div class=\"input-group w-75\">\r\n        <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchTerm\" (keyup.enter)=\"search()\">\r\n        <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\r\n          <i class=\"fa fa-search\"></i>\r\n        </span>\r\n      </div>\r\n      <div class=\"w-100\">\r\n        <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item ml-0 ml-md-auto\">\r\n            <a (click)=\"collapse()\" routerLink=\"/categories\" routerLinkActive=\"active\" class=\"nav-link\">Categories</a>\r\n          </li>\r\n          <li class=\"nav-item ml-0 ml-md-auto\" ngbDropdown #dropdown=\"ngbDropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n              <i class=\"fa fa-user mr-1\"></i>\r\n              <span *ngIf=\"!token\">Accounts</span>\r\n              <span *ngIf=\"data.user\">{{ data.user.name }}</span>\r\n            </a>\r\n            <div ngbDropdownMenu class=\"dropdown-menu\">\r\n              <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/profile\" class=\"dropdown-item\">\r\n                <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\r\n              </a>\r\n              <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/login\" class=\"dropdown-item\">\r\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\r\n              </a>\r\n              <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();logout();\" class=\"dropdown-item\">\r\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\r\n              </a>\r\n              <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/register\" class=\"dropdown-item\">\r\n                <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\r\n              </a>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item ml-0 ml-md-2\">\r\n            <a (click)=\"collapse()\" routerLink=\"/cart\" routerLinkActive=\"active\" class=\"nav-link\">\r\n              <i class=\"fa fa-shopping-cart mr-1\"></i>\r\n              Cart\r\n              <span *ngIf=\"data.cartItems\" class=\"badge badge-warning ml-1\">{{ data.cartItems }}</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer id=\"main-footer\" class=\"bg-main text-white mt-5 p-5\">\r\n  <div class=\"container\">\r\n    <p class=\"lead text-center\">Developed by Akshar, Manas and Smit :)</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchBtn {\n  cursor: pointer;\n  border: none;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n#logo {\n  width: 70px;\n  height: 70px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//app.component.ts- TypeScript file which facilitates authorization and provides logout and search functionality to e learning client application ///
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//including required services and modules 



//Component specific details 
var AppComponent = /** @class */ (function () {
    function AppComponent(router, data) {
        this.router = router;
        this.data = data;
        this.searchTerm = '';
        this.isCollapsed = true;
        this.data.cartItems = this.data.getCart().length;
        this.data.getProfile();
    }
    Object.defineProperty(AppComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.closeDropdown = function (dropdown) {
        dropdown.close();
    };
    AppComponent.prototype.logout = function () {
        this.data.user = {};
        this.data.cartItems = 0;
        localStorage.clear();
        this.router.navigate(['']);
    };
    AppComponent.prototype.search = function () {
        if (this.searchTerm) {
            this.collapse();
            this.router.navigate(['search', { query: this.searchTerm }]);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        })
        //exporting the AppComponnet for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__post_product_post_product_component__ = __webpack_require__("../../../../../src/app/post-product/post-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_products_my_products_component__ = __webpack_require__("../../../../../src/app/my-products/my-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__category_category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__myorders_myorders_component__ = __webpack_require__("../../../../../src/app/myorders/myorders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__orderdetails_orderdetails_component__ = __webpack_require__("../../../../../src/app/orderdetails/orderdetails.component.ts");
//app.module.ts- TypeScript file which acts as a entry point to e learning client application ///
//               It contains app-routing module and several components                         //
/////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Including required modules and Services 


























//Module decorator specifying all the components used in the application 
var AppModule = /** @class */ (function () {
    //Exporting the AppModule
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__address_address_component__["a" /* AddressComponent */],
                __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__post_product_post_product_component__["a" /* PostProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_products_my_products_component__["a" /* MyProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_23__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_24__myorders_myorders_component__["a" /* MyordersComponent */],
                __WEBPACK_IMPORTED_MODULE_25__orderdetails_orderdetails_component__["a" /* OrderdetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_9__auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        })
        //Exporting the AppModule
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
//auth-guard.service.ts- TypeScript file which facilitates authentication using route guards in client application             ///
//Angular route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route  //
//Used to protect access to client side routes                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//importing required modules and services 


//exporting the auth-guard Service 
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            return state.url.startsWith('/profile')
                ? true
                : (this.router.navigate(['/']), false);
        }
        else {
            return state.url.startsWith('/profile')
                ? (this.router.navigate(['/']), false)
                : true;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"cart\">\r\n  <div class=\"container-fluid p-5\">\r\n    <app-message></app-message>\r\n    <h3 *ngIf=\"!cartItems.length\" class=\"display-2 text-center mt-5\">Cart is Empty</h3>\r\n    <div *ngIf=\"cartItems.length\" class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <p class=\"lead font-weight-bold\">Shopping Cart</p>\r\n        <div class=\"row\">\r\n          <div class=\"offset-8 col-2 d-none d-md-block\">\r\n            <p>\r\n              <small class=\"text-muted\">Price</small>\r\n            </p>\r\n          </div>\r\n          <div class=\"col-2 d-none d-md-block\">\r\n            <p>\r\n              <small class=\"text-muted\">Quantity</small>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n        <div *ngFor=\"let item of cartItems; let i=index; trackBy: trackByCartItems;\" class=\"cartItem\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-md-2\">\r\n              <a routerLink=\"/product/{{ item._id }}\">\r\n                <img src=\"{{ item.image }}\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-5 col-md-6\">\r\n              <h5>\r\n                <a routerLink=\"/product/{{ item._id }}\">{{ item.title }}</a>\r\n              </h5>\r\n              <p class=\"m-0\">\r\n                <small class=\"text-muted\">{{ item.owner.name }}</small>\r\n              </p>\r\n              <p class=\"m-0\">\r\n                <small class=\"text-muted\">{{ item.category.name }}</small>\r\n              </p>\r\n              <a class=\"text-danger\" (click)=\"removeProduct(i, item)\">Delete</a>\r\n            </div>\r\n            <div class=\"col-1 col-md-2\">\r\n              <h6 class=\"font-weight-bold text-danger\">{{ item.price | currency }}</h6>\r\n            </div>\r\n            <div class=\"col-1 mt-5 mt-md-0 p-0\">\r\n              <input type=\"number\" class=\"form-control\" min=\"1\" max=\"99\" [(ngModel)]=\"quantities[i]\" readonly>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n        <h5 class=\"text-right\">Total:\r\n          <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency }}</span>\r\n        </h5>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <h5>Total:\r\n              <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency }}</span>\r\n            </h5>\r\n            <br>\r\n            <button class=\"btn btn-warning btn-block\" (click)=\"checkout()\" [disabled]=\"btnDisabled\">Checkout</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
//Cart component.ts - Type Script file that contains code to render cart feature to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services 





//componnet files specifications 
var CartComponent = /** @class */ (function () {
    function CartComponent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.btnDisabled = false;
        this.quantities = [];
    }
    CartComponent.prototype.trackByCartItems = function (index, item) {
        return item._id;
    };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.data.getCart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            var total = 0;
            this.cartItems.forEach(function (data, index) {
                total += data['price'] * _this.quantities[index];
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.removeProduct = function (index, product) {
        this.quantities.splice(index, 1);
        this.data.removeFromCart(product);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems.forEach(function (data) {
            _this.quantities.push(1);
        });
        this.handler = StripeCheckout.configure({
            key: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].stripeKey,
            image: 'assets/img/sam.png',
            locale: 'auto',
            token: function (stripeToken) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var products, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            products = [];
                            this.cartItems.forEach(function (d, index) {
                                products.push({
                                    product: d['_id'],
                                    quantity: _this.quantities[index],
                                });
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.rest.post('api/payment', {
                                    totalPrice: this.cartTotal,
                                    products: products,
                                    stripeToken: stripeToken,
                                })];
                        case 2:
                            data = _a.sent();
                            data['success']
                                ? (this.data.clearCart(), this.data.success('Purchase Successful.'))
                                : this.data.error(data['message']);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.data.error(error_1['message']);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        });
    };
    CartComponent.prototype.validate = function () {
        var _this = this;
        if (!this.quantities.every(function (data) { return data > 0; })) {
            this.data.warning('Quantity cannot be less than one.');
        }
        else if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']).then(function () {
                _this.data.warning('You need to login before making a purchase.');
            });
        }
        else if (!this.data.user['address']) {
            this.router.navigate(['/profile/address']).then(function () {
                _this.data.warning('You need to login before making a purchase.');
            });
        }
        else {
            this.data.message = '';
            return true;
        }
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        this.btnDisabled = true;
        try {
            if (this.validate()) {
                this.handler.open({
                    name: 'SAM Arts',
                    description: 'Checkout Payment',
                    amount: this.cartTotal * 100,
                    closed: function () {
                        _this.btnDisabled = false;
                    },
                });
            }
            else {
                this.btnDisabled = false;
            }
        }
        catch (error) {
            this.data.error(error);
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.scss")],
        })
        //exporting the cart component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"categories\">\r\n  <div class=\"container p-5\">\r\n    <app-message></app-message>\r\n    <h4 class=\"display-4\">Categories</h4>\r\n    <hr>\r\n    <div *ngIf=\"!categories\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"categories\" class=\"list-group\">\r\n      <a *ngFor=\"let category of categories\" routerLink=\"/categories/{{ category._id }}\" class=\"list-group-item list-group-item-action\">\r\n      {{ category.name }}\r\n      </a>\r\n    </div>\r\n    <hr style=\"margin-top: 15rem;\">\r\n    <div *ngIf=\"data.user.isSeller\" class=\"card bg-light mt-5\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Add New Category</h4>\r\n        <hr>\r\n        <div class=\"form\">\r\n          <div class=\"form-group\">\r\n            <label>Category</label>\r\n            <input type=\"text\" name=\"newCategory\" class=\"form-control\" [(ngModel)]=\"newCategory\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"addCategory()\" [disabled]=\"btnDisabled\">Add Category</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//Categories component.ts - Type Script file that contains code to render Categories feature to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services 



//Component specifications 
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.newCategory = '';
        this.btnDisabled = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/categories')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.prototype.addCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post('api/categories', { category: this.newCategory })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? this.data.success(data['message'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 4];
                    case 4:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.scss")]
        })
        //exporting the categories component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"category\">\r\n  <div class=\"container p-3 p-md-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!category\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <h3 *ngIf=\"category && !category.products.length\" class=\"display-2 text-center mt-5\">No Products inside Category</h3>\r\n    <div *ngIf=\"category && category.products.length\">\r\n      <p>{{ lower }}-{{ upper }} of {{ category.totalProducts }} products in {{ category.categoryName }}</p>\r\n      <hr>\r\n      <div class=\"product\" *ngFor=\"let product of category.products\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-2\">\r\n            <a routerLink=\"/product/{{ product._id }}\">\r\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-5 col-md-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <h5>\r\n                  <a routerLink=\"/product/{{ product._id }}\">{{ product.title }}</a>\r\n                </h5>\r\n                <p>\r\n                  <small class=\"text-muted\">{{ product.category.id }}</small>\r\n                </p>\r\n                <p>{{ product.price | currency }}</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n      <ngb-pagination [collectionSize]=\"category.totalProducts\" [pageSize]=\"10\" [(page)]=\"page\" (pageChange)=\"getProducts($event)\"></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #t let-fill=\"fill\">\r\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\r\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\r\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n  </span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//Category component.ts - Type Script file that contains code to render Category  to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specifc details 
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(data, activatedRoute, rest) {
        this.data = data;
        this.activatedRoute = activatedRoute;
        this.rest = rest;
        this.page = 1;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.categoryId = res['id'];
            _this.getProducts();
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "lower", {
        get: function () {
            return 10 * (this.page - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "upper", {
        get: function () {
            return Math.min(10 * this.page, this.category.totalProducts);
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.getProducts = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            this.category = null;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get("api/categories/" + this.categoryId + "?page=" + (this
                                .page - 1))];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.category = data)
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category/category.component.scss")],
        })
        //exporting the category component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//DataService.ts - Type Script file to facilitate DataService to know type of message,handle cart functionality 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including required modules and services 



//Exporting the DataService
var DataService = /** @class */ (function () {
    function DataService(router, rest) {
        var _this = this;
        this.router = router;
        this.rest = rest;
        this.message = '';
        this.messageType = 'danger';
        this.cartItems = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.message = '';
            }
        });
    }
    DataService.prototype.error = function (message) {
        this.messageType = 'danger';
        this.message = message;
    };
    DataService.prototype.success = function (message) {
        this.messageType = 'success';
        this.message = message;
    };
    DataService.prototype.warning = function (message) {
        this.messageType = 'warning';
        this.message = message;
    };
    DataService.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!localStorage.getItem('token')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rest.get('api/accounts/profile')];
                    case 1:
                        data = _a.sent();
                        this.user = data['user'];
                        console.log(this.user);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.getCart = function () {
        var cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    };
    DataService.prototype.addToCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            return false;
        }
        else {
            cart.push(item);
            this.cartItems++;
            localStorage.setItem('cart', JSON.stringify(cart));
            return true;
        }
    };
    DataService.prototype.removeFromCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            cart = cart.filter(function (data) { return JSON.stringify(data) !== JSON.stringify(item); });
            this.cartItems--;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    DataService.prototype.clearCart = function () {
        this.cartItems = 0;
        localStorage.setItem('cart', '[]');
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\r\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"1000\" >\r\n    <ngb-carousel>\r\n      <ng-template ngbSlide>\r\n        <img src=\"assets/img/fff.jpeg\" style=\"width:100% \" alt=\"first\" class=\"item\">\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"assets/img/fff2.jpeg\" style=\"width:100%\" alt=\"second\" class=\"item\">\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"assets/img/fff3.jpeg\" style=\"width:100%\" alt=\"third\" class=\"item\">\r\n      </ng-template>\r\n      <ng-template ngbSlide>\r\n        <img src=\"assets/img/fff6.jpg\" style=\"width:100%\" alt=\"fourth\" class=\"item\">\r\n      </ng-template>\r\n      <!-- <ng-template ngbSlide>\r\n        <img src=\"assets/img/image5.jpg\" alt=\"fifth\" class=\"item\">\r\n      </ng-template> -->\r\n    </ngb-carousel>\r\n  </div>\r\n  <div class=\"container p-5\">\r\n    <app-message></app-message>\r\n    <p class=\"lead\">\r\n      <b><h2>Some of the Best Paintings</h2></b>\r\n      <br>\r\n    </p>\r\n    <div class=\"row\">\r\n      <div *ngIf=\"!products\" class=\"m-auto\">\r\n        <h1 class=\"text-center display-3 mt-5\">\r\n          <i class=\"fa fa-spinner fa-spin\"></i>\r\n        </h1>\r\n      </div>\r\n      <div *ngFor=\"let product of products\" class=\"col-md-3 mb-5\">\r\n        <a routerLink=\"/product/{{ product._id }}\">\r\n          <div class=\"card bg-light\">\r\n            <img src=\"{{ product.image }}\" alt=\"product\" class=\"card-img-top\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{ product.title }}</h5>\r\n              <p class=\"card-text\">{{ product.price | currency }}</p>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.card-img-top {\n  width: 100%;\n  height: 15vw;\n  -o-object-fit: cover;\n     object-fit: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//Homecomponent.ts - Type Script file that contains code to render home page  to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services



//component specific details 
var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, rest) {
        this.data = data;
        this.rest = rest;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/products')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.products = data['products'])
                            : this.data.error('Could not fetch products.');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        })
        //Exporting the HomeComponent 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"loginPage\">\r\n  <div class=\"container p-5\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-4 offset-lg-4\">\r\n        <app-message></app-message>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"text-center\">Login</h4>\r\n            <hr>\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\r\n              </div>\r\n              <hr>\r\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"login()\" [disabled]=\"btnDisabled\">Login</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//Logincomponent.ts - Type Script file that contains code to render Login feature to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specifc details 
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, rest, data) {
        this.router = router;
        this.rest = rest;
        this.data = data;
        this.email = '';
        this.password = '';
        this.btnDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.validate = function () {
        if (this.email) {
            if (this.password) {
                return true;
            }
            else {
                this.data.error('Password is not entered');
            }
        }
        else {
            this.data.error('Email is not entered.');
        }
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rest.post('api/accounts/login', {
                                email: this.email,
                                password: this.password,
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/']);
                        return [3 /*break*/, 5];
                    case 4:
                        this.data.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
        })
        //exporting Login Component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"data.message\">\r\n  <ngb-alert [type]=\"data.messageType\" [dismissible]=\"false\">\r\n    {{ data.message }}\r\n  </ngb-alert>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(data) {
        this.data = data;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/my-products/my-products.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"myProducts\">\r\n  <div class=\"container p-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!products\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <h3 *ngIf=\"products && !products.length\" class=\"display-2 text-center mt-5\">My Products is Empty</h3>\r\n    <div *ngIf=\"products && products.length\" class=\"row\">\r\n      <div class=\"col\">\r\n        <h4 class=\"display-4\">My Products</h4>\r\n        <div class=\"row\">\r\n          <div class=\"offset-10 col-2 d-none d-md-block\">\r\n            <p>\r\n              <small class=\"text-muted\">Price</small>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n        <div *ngFor=\"let product of products\" class=\"product\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-md-2\">\r\n              <a routerLink=\"/product/{{ product.id }}\">\r\n                <img src=\"{{ product.image }}\" alt=\"image\" class=\"img-fluid img-thumbnail\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-5 col-md-8\">\r\n              <h5>\r\n                <a routerLink=\"/product/{{ product.id }}\">{{ product.title }}</a>\r\n                <p class=\"m-0\">\r\n                  <small class=\"text-muted\">{{ product.category.name }}</small>\r\n                </p>\r\n              </h5>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <h6 class=\"font-weight-bold text-danger\">{{ product.price | currency }}</h6>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/my-products/my-products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-products/my-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//my-products component.ts - Type Script file that contains code to render products to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services



//component specific details 
var MyProductsComponent = /** @class */ (function () {
    function MyProductsComponent(data, rest) {
        this.data = data;
        this.rest = rest;
    }
    MyProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/seller/products')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.products = data['products'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-products',
            template: __webpack_require__("../../../../../src/app/my-products/my-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-products/my-products.component.scss")]
        })
        //exporting MyProductsComponents 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */]])
    ], MyProductsComponent);
    return MyProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/myorders/myorders.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"myOrders\">\r\n  <div class=\"container p-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!myorders\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <h3 *ngIf=\"myorders && !myorders.length\" class=\"display-2 text-center mt-5\">My Orders is Empty</h3>\r\n    <div *ngIf=\"myorders && myorders.length\" class=\"row\">\r\n      <div class=\"col\">\r\n        <h4 class=\"display-4\">My Orders</h4>\r\n        <div class=\"row\">\r\n          <div class=\"offset-10 col-2 d-none d-md-block\">\r\n            <p>\r\n              <small class=\"text-muted\">Status</small>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n        <div *ngFor=\"let order of myorders\" class=\"order\">\r\n          <div class=\"row\">\r\n            \r\n            <div class=\"col-5 col-md-8\">\r\n              <h5>\r\n                <a routerLink=\"/orders/{{ order._id }}\">Order #{{ order._id }}</a>\r\n                <p class=\"m-0\">\r\n                  <small class=\"text-muted\">Total: {{ order.totalPrice/100 | currency }}</small>\r\n                </p>\r\n              </h5>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Processing  </h6>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/myorders/myorders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/myorders/myorders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyordersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//my-orders component.ts - Type Script file that contains code to render orders to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services



//component specific details 
var MyordersComponent = /** @class */ (function () {
    function MyordersComponent(data, rest) {
        this.data = data;
        this.rest = rest;
    }
    MyordersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/accounts/orders')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.myorders = data['orders'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyordersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-myorders',
            template: __webpack_require__("../../../../../src/app/myorders/myorders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/myorders/myorders.component.scss")]
        })
        //exporting orders component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */]])
    ], MyordersComponent);
    return MyordersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orderdetails/orderdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"myOrderdetails\">\r\n  <div class=\"container p-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!products\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <h3 *ngIf=\"products && !products.length\" class=\"display-2 text-center mt-5\"> My Orderdetails is Empty </h3>\r\n    <div *ngIf=\"products && products.length\" class=\"row\">\r\n      <div class=\"col\">\r\n        <h4 class=\"display-4\">My Order details </h4>\r\n        <div class=\"row\">\r\n          <div class=\"offset-10 col-2 d-none d-md-block\">\r\n            <p>\r\n              <small class=\"text-muted\">Quantity</small>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <hr class=\"mt-0\">\r\n        <div *ngFor=\"let product of products\" class=\"product\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4 col-md-2\">\r\n                <img src=\"{{ product['product'].image }}\" alt=\"image\" class=\"img-fluid img-thumbnail\">\r\n            </div>\r\n            <div class=\"col-5 col-md-8\">\r\n              <h5>\r\n                   Title: {{ product['product'].title }}\r\n                <p class=\"m-0\">\r\n                  <small class=\"text-muted\"> price : {{ product['product'].price | currency }}</small>\r\n                </p>\r\n              </h5>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <h6 class=\"font-weight-bold text-danger\">{{  product.quantity }}</h6>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/orderdetails/orderdetails.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orderdetails/orderdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//Order Details component.ts - Type Script file that contains code to render details of the order to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specific details
var OrderdetailsComponent = /** @class */ (function () {
    function OrderdetailsComponent(activatedRoute, data, rest, router) {
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.rest = rest;
        this.router = router;
    }
    OrderdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.orderId = res['id'];
            _this.getProducts();
        });
    };
    OrderdetailsComponent.prototype.getProducts = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            this.products = null;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get("api/accounts/orders/" + this.orderId)];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.products = data['order'])
                            : this.data.error(data['message']);
                        this.products = this.products.products;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OrderdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orderdetails',
            template: __webpack_require__("../../../../../src/app/orderdetails/orderdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orderdetails/orderdetails.component.scss")]
        })
        //exporting OrderDetails component for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], OrderdetailsComponent);
    return OrderdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/post-product/post-product.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"postProduct\">\r\n  <div class=\"container p-5\">\r\n    <h4 class=\"display-4\">Post a Product for Sale</h4>\r\n    <hr>\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!categories\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"categories\" class=\"card bg-light\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Title</label>\r\n            <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"product.title\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Price</label>\r\n            <input type=\"number\" name=\"price\" class=\"form-control\" [(ngModel)]=\"product.price\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Category</label>\r\n            <select name=\"categoryId\" [(ngModel)]=\"product.categoryId\" class=\"custom-select\">\r\n              <option *ngFor=\"let category of categories\" [value]=\"category._id\">\r\n                {{ category.name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\" name=\"description\" rows=\"5\" [(ngModel)]=\"product.description\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Upload Image</label>\r\n            <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" name=\"file\" (change)=\"fileChange($event)\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"post()\" [disabled]=\"btnDisabled\">Post</button>\r\n          <!-- <input type=\"file\" name=\"image\" class=\"form-control-file\" ng2FileSelect [uploader]=\"uploader\" accept=\"image/x-png,image/gif,image/jpeg,image/jpg\" />\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n            Upload\r\n          </button> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/post-product/post-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-product/post-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//post-products component.ts - Type Script file that contains code to render posted products to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services


// import { FileUploader } from 'ng2-file-upload/ng2-file-upload';


// const URL = 'api/seller/products';
//component specific details
var PostProductComponent = /** @class */ (function () {
    // public uploader: FileUploader = new FileUploader({
    //   url: URL,
    //   itemAlias: 'image'
    // });
    function PostProductComponent(data, rest, router) {
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.product = {
            title: '',
            price: 0,
            categoryId: '',
            description: '',
            product_picture: null
        };
        this.btnDisabled = false;
    }
    PostProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('api/categories')];
                    case 1:
                        data = _a.sent();
                        data['success']
                            ? (this.categories = data['categories'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent.prototype.validate = function (product) {
        if (product.title) {
            if (product.price) {
                if (product.categoryId) {
                    if (product.description) {
                        if (product.product_picture) {
                            return true;
                        }
                        else {
                            this.data.error('Please select product image.');
                        }
                    }
                    else {
                        this.data.error('Please enter description.');
                    }
                }
                else {
                    this.data.error('Please select category.');
                }
            }
            else {
                this.data.error('Please enter a price.');
            }
        }
        else {
            this.data.error('Please enter a title.');
        }
    };
    PostProductComponent.prototype.fileChange = function (event) {
        this.product.product_picture = event.target.files[0];
    };
    PostProductComponent.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var form, key, data_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.product)) return [3 /*break*/, 3];
                        form = new FormData();
                        for (key in this.product) {
                            if (this.product.hasOwnProperty(key)) {
                                if (key === 'product_picture') {
                                    form.append('product_picture', this.product.product_picture, this.product.product_picture.name);
                                }
                                else {
                                    form.append(key, this.product[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, this.rest.post('api/seller/products', form)];
                    case 2:
                        data_1 = _a.sent();
                        data_1['success']
                            ? this.router.navigate(['/profile/myproducts'])
                                .then(function () { return _this.data.success(data_1['message']); })
                                .catch(function (error) { return _this.data.error(error); })
                            : this.data.error(data_1['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-product',
            template: __webpack_require__("../../../../../src/app/post-product/post-product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post-product/post-product.component.scss")]
        })
        //exporting PostProduct component for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], PostProductComponent);
    return PostProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"product\">\r\n  <div class=\"container-fluid p-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!product\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"product\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n          <img [src]=\"product.image\" alt=\"productImage\" class=\"image img-thumbnail\">\r\n        </div>\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <h4>{{ product.title }}</h4>\r\n              <p class=\"m-0\">\r\n                <small>by {{ product.owner.name }}</small>\r\n              </p>\r\n              <p class=\"m-0\">\r\n                <small class=\"text-muted\">{{ product.category.name }}</small>\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <p class=\"lead\">{{ product.description }}</p>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <div class=\"card bg-light\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Price: {{ product.price | currency }}</h5>\r\n              <br>\r\n              <br>\r\n              <a class=\"btn btn-warning btn-block\" (click)=\"addToCart()\">Add to Cart</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"mt-5 ml-lg-5\">\r\n          <h4>Reviews</h4>\r\n          <hr>\r\n          <div class=\"reviews\">\r\n            <div *ngFor=\"let review of product.reviews\" class=\"review\">\r\n              <div class=\"p-3\">\r\n                <img [src]=\"review.owner.picture\" alt=\"\" width=\"75px\" class=\"rounded-circle\">\r\n                <p class=\"lead d-inline ml-3\">{{ review.owner.name }}</p>\r\n                <br>\r\n                <br>\r\n                <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n                <p class=\"ml-2 d-inline font-weight-bold\">{{ review.title }}</p>\r\n                <p class=\"mt-3\">{{ review.description }}</p>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n            <div class=\"card bg-light my-5\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Add a review</h4>\r\n                <hr>\r\n                <div class=\"form\">\r\n                  <div class=\"form-group\">\r\n                    <label>Title</label>\r\n                    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"myReview.title\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Description</label>\r\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\" [(ngModel)]=\"myReview.description\"></textarea>\r\n                  </div>\r\n                  <label>Rating</label>\r\n                  <br>\r\n                  <ngb-rating [(rate)]=\"myReview.rating\" [starTemplate]=\"t\" [readonly]=\"false\" max=\"5\"></ngb-rating>\r\n                  <br>\r\n                  <br>\r\n                  <button type=\"button\" class=\"btn btn-info\" (click)=\"postReview()\" [disabled]=\"btnDisabled\">Post Review</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #t let-fill=\"fill\">\r\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\r\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\r\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n  </span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//product component.ts - Type Script file that contains code to render products to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specific details
var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, data, rest, router) {
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.rest = rest;
        this.router = router;
        this.myReview = {
            title: '',
            description: '',
            rating: 0,
        };
        this.btnDisabled = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.rest
                .get("api/product/" + res['id'])
                .then(function (data) {
                data['success']
                    ? (_this.product = data['product'])
                    : _this.router.navigate(['/']);
            })
                .catch(function (error) { return _this.data.error(error['message']); });
        });
    };
    ProductComponent.prototype.addToCart = function () {
        this.data.addToCart(this.product)
            ? this.data.success('Product successfully added to cart.')
            : this.data.error('Product has already been added to cart.');
    };
    ProductComponent.prototype.postReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.post('api/review', {
                                productId: this.product._id,
                                title: this.myReview.title,
                                description: this.myReview.description,
                                rating: this.myReview.rating,
                            })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? this.data.success(data['message'])
                            : this.data.error(data['message']);
                        this.btnDisabled = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.scss")],
        })
        //exporting Product component for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\">\r\n  <div class=\"container p-5\">\r\n    <h4 class=\"display-4\">My Profile</h4>\r\n    <hr>\r\n    <div *ngIf=\"!data.user\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"data.user\" class=\"row mt-5\">\r\n      <div class=\"col-md-3\">\r\n        <img [src]=\"data.user.picture\" alt=\"userimage\" class=\"rounded-circle image\">\r\n      </div>\r\n      <div class=\"col-md-8 ml-3\">\r\n        <p id=\"name\" class=\"lead\">{{ data.user.name }}</p>\r\n        <a routerLink=\"/profile/orders\" class=\"btn btn-warning\">My Orders</a>\r\n        <br>\r\n        <br>\r\n        <a routerLink=\"/profile/settings\" class=\"btn btn-warning\">Change Account Settings</a>\r\n        <br>\r\n        <br>\r\n        <a routerLink=\"/profile/address\" class=\"btn btn-warning\">Change Shipping Address</a>\r\n        <br>\r\n        <br>\r\n        <div *ngIf=\"data.user.isSeller\">\r\n          <p class=\"lead\">Seller Actions</p>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <a routerLink=\"/profile/postproduct\" class=\"btn btn-outline-success btn-block\">Post Painting for Sale</a>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <a routerLink=\"/profile/myproducts\" class=\"btn btn-outline-info btn-block\">My Paintings</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#name {\n  font-size: 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
//Profile  component.ts - Type Script file that contains code to render profile details to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//including the required files and services


//component specific details
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(data) {
        this.data = data;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        })
        //exporting Profile component for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"registrationPage\">\r\n  <div class=\"container p-5\">\r\n    <div class=\"row mt-5\">\r\n      <div class=\"col-lg-4 offset-lg-4\">\r\n        <app-message></app-message>\r\n        <div class=\"card bg-light\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"text-center\">Registration</h4>\r\n            <hr>\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label\">Name</label>\r\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label\">Email</label>\r\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label\">Password</label>\r\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label\">Confirm Password</label>\r\n                <input type=\"password\" name=\"password1\" class=\"form-control\" [(ngModel)]=\"password1\">\r\n              </div>\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"isSeller\"> Register as Seller\r\n                </label>\r\n              </div>\r\n              <hr>\r\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"register()\" [disabled]=\"btnDisabled\">Register</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
//Registration component.ts - Type Script file that contains code to render Registration/SignUp feature to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specific details
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, data, rest) {
        this.router = router;
        this.data = data;
        this.rest = rest;
        this.name = '';
        this.email = '';
        this.password = '';
        this.password1 = '';
        this.isSeller = false;
        this.btnDisabled = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.validate = function () {
        if (this.name) {
            if (this.email) {
                if (this.password) {
                    if (this.password1) {
                        if (this.password === this.password1) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Confirmation Password is not entered');
                    }
                }
                else {
                    this.data.error('Password is not entered');
                }
            }
            else {
                this.data.error('Email is not entered.');
            }
        }
        else {
            this.data.error('Name is not entered.');
        }
    };
    RegistrationComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rest.post('api/accounts/signup', {
                                name: this.name,
                                email: this.email,
                                password: this.password,
                                isSeller: this.isSeller,
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a.sent();
                        this.data.success('Registration successful!');
                        return [3 /*break*/, 5];
                    case 4:
                        this.data.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")],
        })
        //exporting Registration component for reuse 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rest-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
//rest-api.service.ts - Type script file to provide REST(GET,POST) Services in the elearning application 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//including required files and services 


//exporting the RestAPi Service 
var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.getHeaders = function () {
        var token = localStorage.getItem('token');
        return token ? new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token) : null;
    };
    RestApiService.prototype.get = function (link) {
        return this.http.get(link, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.post = function (link, body) {
        return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"search\">\r\n  <div class=\"container p-3 p-md-5\">\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!content\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <h3 *ngIf=\"!content && !content.nbHits\" class=\"display-2 text-center mt-5\">No Results</h3>\r\n    <div *ngIf=\"content && content.nbHits\">\r\n      <p>{{ lower }}-{{ upper }} of {{ content.nbHits }} results for\r\n        <span class=\"text-warning\">\"{{ query }}\"</span>\r\n      </p>\r\n      <hr>\r\n      <div class=\"product\" *ngFor=\"let product of content.hits\">\r\n        <div class=\"row\">\r\n          <div class=\"col-5 col-md-2\">\r\n            <a routerLink=\"/product/{{ product.objectID }}\">\r\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-5 col-md-8\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-6\">\r\n                <h5>\r\n                  <a routerLink=\"/product/{{ product.objectID }}\">{{ product.title }}</a>\r\n                </h5>\r\n                <p>\r\n                  <small>by {{ product.owner.name }}</small>\r\n                </p>\r\n                <p>{{ product.price | currency }}</p>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n      </div>\r\n      <ngb-pagination [collectionSize]=\"content.nbHits\" [pageSize]=\"5\" [(page)]=\"page\" (pageChange)=\"getProducts()\"></ngb-pagination>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<ng-template #t let-fill=\"fill\">\r\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\r\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\r\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\r\n  </span>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//Search component.ts - Type Script file that contains code to render seareched products to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services




//component specific details 
var SearchComponent = /** @class */ (function () {
    function SearchComponent(activatedRoute, data, rest) {
        this.activatedRoute = activatedRoute;
        this.data = data;
        this.rest = rest;
        this.page = 1;
        this.nbhits = 1;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (res) {
            _this.query = res['query'];
            _this.page = 1;
            _this.getProducts();
        });
    };
    Object.defineProperty(SearchComponent.prototype, "lower", {
        get: function () {
            return 1 + this.content.hitsPerPage * this.content.page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "upper", {
        get: function () {
            return Math.min(this.content.hitsPerPage * (this.content.page + 1), this.content.nbHits);
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.content = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rest.get("api/search?query=" + this.query + "&page=" + (this.page -
                                1))];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.content = data['content'])
                            : this.data.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.scss")],
        })
        //exporting Serach Component
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"settings\">\r\n  <div class=\"container p-5\">\r\n    <h4 class=\"display-4\">My Account Settings</h4>\r\n    <hr>\r\n    <app-message></app-message>\r\n    <div *ngIf=\"!currentSettings\" class=\"m-auto\">\r\n      <h1 class=\"text-center display-3 mt-5\">\r\n        <i class=\"fa fa-spinner fa-spin\"></i>\r\n      </h1>\r\n    </div>\r\n    <div *ngIf=\"currentSettings\" class=\"card bg-light\">\r\n      <div class=\"card-body\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Name</label>\r\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"currentSettings.name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Email</label>\r\n            <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"currentSettings.email\">\r\n          </div>\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"currentSettings.isSeller\"> Is Seller\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">New Password</label>\r\n            <input type=\"password\" name=\"newPwd\" class=\"form-control\" [(ngModel)]=\"currentSettings.newPwd\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\">Confirm Password</label>\r\n            <input type=\"password\" name=\"pwdConfirm\" class=\"form-control\" [(ngModel)]=\"currentSettings.pwdConfirm\">\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"update()\" [disabled]=\"btnDisabled\">Update</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
//setting component.ts - Type Script file that contains code to provide seettings  to elearning application
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
//including the required files and services



//componnet specific details 
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.btnDisabled = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.data.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data.getProfile()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.currentSettings = Object.assign({
                            newPwd: '',
                            pwdConfirm: ''
                        }, this.data.user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.validate = function (settings) {
        if (settings['name']) {
            if (settings['email']) {
                if (settings['newPwd']) {
                    if (settings['pwdConfirm']) {
                        if (settings['newPwd'] === settings['pwdConfirm']) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Please enter confirmation password.');
                    }
                }
                else {
                    if (!settings['pwdConfirm']) {
                        return true;
                    }
                    else {
                        this.data.error('Please enter new password.');
                    }
                }
            }
            else {
                this.data.error('Please enter your email.');
            }
        }
        else {
            this.data.error('Please enter your name.');
        }
    };
    SettingsComponent.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.currentSettings)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rest.post('api/accounts/profile', {
                                name: this.currentSettings['name'],
                                email: this.currentSettings['email'],
                                password: this.currentSettings['newPwd'],
                                isSeller: this.currentSettings['isSeller']
                            })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.data.getProfile(), this.data.success(data['message']))
                            : this.data.error(data['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.scss")]
        })
        //exporting settings component 
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    stripeKey: 'pk_test_DVAYtghfj48mnkPlrOV4YD0E'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
//Main.ts - Type Script file to to render bootstrapModule and to verify the environment 
//importing required files and services 




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map