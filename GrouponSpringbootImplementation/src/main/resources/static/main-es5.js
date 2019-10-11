(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-company/add-company.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-company/add-company.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='admin'\">\n        <form>\n            <input type=\"text\"  min=\"1\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"comp.name\" class=\"inputs\"/> <br/>\n            <input type=\"text\"  min=\"1\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"comp.email\" class=\"inputs\"/> <br/>\n            <input type=\"text\"  min=\"1\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"comp.password\" class=\"inputs\"/> <br/>\n            <input type=\"button\" value=\"Add Company!\" (click)=\"createCompany()\" class=\"button\"/>\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-coupon/add-coupon.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-coupon/add-coupon.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='company'\">\n        <form>\n                Coupon Title    <input type=\"text\" min=\"1\" name=\"title\" placeholder=\"Coupon Title\" [(ngModel)]=\"coup.title\" class=\"inputs\"/> <br/>\n                Coupon description    <input type=\"text\" min=\"1\" name=\"description\" placeholder=\"Coupon description\" [(ngModel)]=\"coup.description\" class=\"inputs\"/> <br/>\n                Coupon category    <select name=\"categoryName\" [(ngModel)]=\"coup.categoryName\" class=\"inputs\">\n                    <option>food</option>\n                    <option>electronic</option>\n                    <option>vacation</option>\n                </select> <br/>\n                Amount   <input type=\"number\" min=\"1\" name=\"amount\" placeholder=\"Amount\" [(ngModel)]=\"coup.amount\" class=\"inputs\"/> <br/>\n                price  <input type=\"price\" name=\"price\" placeholder=\"Price\" [(ngModel)]=\"coup.price\" class=\"inputs\"/> <br/>\n                Start Date    <input type=\"date\" name=\"startDate\" placeholder=\"startDate\" [(ngModel)]=\"coup.startDate\" class=\"inputs\"/> <br/>\n                End Date   <input type=\"date\" name=\"endDate\" placeholder=\"endDate\" [(ngModel)]=\"coup.endDate\" class=\"inputs\"/> <br/>\n        Coupon Image URL    <input type=\"url\" name=\"image\" placeholder=\"Coupon Image\" [(ngModel)]=\"coup.image\" class=\"inputs\"/> <br/>\n            <input type=\"button\" value=\"Add Coupon!\" (click)=\"createCoupon()\" class=\"button\"/>\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-customer/add-customer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-customer/add-customer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='admin'\">\n        <form>\n            <input type=\"text\" min=\"1\" name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"cust.firstName\" class=\"inputs\"/> <br/>\n            <input type=\"text\" min=\"1\" name=\"lastName\" placeholder=\"Last Name\" [(ngModel)]=\"cust.lastName\" class=\"inputs\"/> <br/>\n            <input type=\"text\" min=\"1\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"cust.email\" class=\"inputs\"/> <br/>\n            <input type=\"text\" min=\"1\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"cust.password\" class=\"inputs\"/> <br/>\n            <input type=\"button\" value=\"Add Customer!\" (click)=\"createCustomer()\" class=\"button\" />\n        </form>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/companies/companies.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/companies/companies.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='admin'\">\n\n    <table *ngIf=\"companies\">\n        <tr class=\"headers\">\n            \n            <th>Name</th>\n            <th>Email</th>\n            <th>Delete</th>\n            <th>Edit</th>\n            \n            \n          \n\n        </tr>\n        <tr *ngFor=\"let c of companies\">\n            \n            <td>{{ c.name }}</td>\n            <td>{{ c.email }}</td>\n            <td>\n                <input type=\"button\" value=\"🗑\" (click)=\"deleteCompany(c.id)\" />\n            </td> \n            <td>\n                <input type=\"button\" value=\"✎\" (click)=\"editorEnabler(c)\"  />\n            </td>\n        </tr>\n      \n        \n        \n    </table>\n    <div *ngIf=\"editor==true\"> \n        <form>\n       <p>ID: <br/> <input type=\"number\" disabled name=\"id\" placeholder=\"id\" [(ngModel)]=\"c.id\" class=\"disabledInputs\"/></p> <br/>\n       <p> Name: <br/> <input type=\"text\" disabled name=\"name\" placeholder=\"Name\" [(ngModel)]=\"c.name\" class=\"disabledInputs\"/></p> <br/>\n       <p>Email: <br/> <input type=\"text\" min=\"1\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"c.email\"class=\"inputs\"/> </p><br/>\n       <p>Password: <br/> <input type=\"text\" min=\"1\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"c.password\" class=\"inputs\"/></p> <br/>\n       <p> <input type=\"button\" value=\"Update Company!\" (click)=\"updateCompany()\" class=\"button\" />\n    </form>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/company-coupons/company-coupons.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/company-coupons/company-coupons.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='company'\">\n\n    <div class=\"filters\">\n            <p>filter by category:\n                        <select name=\"couponsCategory\" [(ngModel)]=\"couponsCategory\"  (change)=\"showCompanyCouponsByCategory()\" class=\"inputs\" >\n                           \n                            <option  value=\"food\">Food</option>\n                            <option  value= \"electronic\">Electronic</option>\n                            <option  value= \"vacation\">Vacation</option>\n                        </select>\n            </p>\n            <p>filter by max price:\n                            <input type=\"number\" step=\"10\" [(ngModel)]=\"maxPrice\" placeholder=\"Max Price\" name=\"maxPrice\" (change)=\"showCompanyCouponsByMaxPrice()\" class=\"inputs\"/>\n                            <input type=\"button\" value=\"Reset Filters\" (click)=showAllCoupons() class=\"button\"/>\n                        </p>\n            </div> \n\n                <br/><br/> \n                <table *ngIf=\"coupons\">\n        <tr>\n            <th>Image</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>category</th>\n            <th>price</th>\n            <th>No. of coupons left</th>\n            <th>experation Date</th>\n            <th>Delete</th>\n            <th>Edit</th>\n\n\n\n          \n\n        </tr>\n        <tr *ngFor=\"let c of coupons\">\n            \n            <td><img [src]=\"c.image\" alt=\"\" srcset=\"\" class=\"couponsImages\"></td>\n            <td>{{ c.title }}</td>\n            <td>{{ c.description }}  </td>\n            <td>{{ c.categoryName }}</td>\n            <td>{{ c.price }}  </td>\n            <td>{{ c.amount }}</td>\n            <td>{{ c.endDate }}</td>\n            <td>\n                    <input type=\"button\" value=\"🗑\" (click)=\"deleteCompanyCoupon(c.id)\" />\n            </td>\n            <td>\n                    <input type=\"button\" value=\"✎\" (click)=\"editorEnabler(c)\" />\n            </td>\n            \n\n        </tr>\n    </table>\n        <div *ngIf=\"editor==true\">\n                <form>\n\n                        <p>ID: <br/> <input type=\"number\" disabled name=\"id\" placeholder=\"id\" [(ngModel)]=\"coupon.id\" class=\"disabledInputs\"/> </p><br/>\n                        <p>Image Url:<br/> <input type=\"text\"    name=\"image\" placeholder=\"image\" [(ngModel)]=\"coupon.image\" class=\"inputs\" /> </p><br/>                         \n                        <p>Title:<br/> <input type=\"text\"    name=\"title\" placeholder=\"title\" [(ngModel)]=\"coupon.title\" class=\"inputs\" /> </p><br/>\n                        <p>Description:<br/> <input type=\"text\"    name=\"description\" placeholder=\"description\" [(ngModel)]=\"coupon.description\" class=\"inputs\"/> </p><br/>\n                        <p>Category:<br/> <select name=\"categoryName\" [(ngModel)]=\"coupon.categoryName\" class=\"inputs\" >\n                                <option>food</option>\n                                <option>electronic</option>\n                                <option>vacation</option>\n                           </select></p> <br/>\n                        <p>Price:<br/> <input type=\"number\"  name=\"price\" placeholder=\"price\" [(ngModel)]=\"coupon.price\" class=\"inputs\"/></p> <br/>\n                        <p>Amount:<br/> <input type=\"number\"  name=\"amount\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\" class=\"inputs\"/></p> <br/>\n                        <p>Start Date:<br/> <input type=\"date\"    name=\"startDate\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\" class=\"inputs\"/></p> <br/>\n                        <p>Experation Date:<br/> <input type=\"date\"    name=\"endDate\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\" class=\"inputs\"/></p> <br/>\n                        <p> <input type=\"button\" value=\"Update Coupon\" (click)=\"updateCompanyCoupon()\" class=\"button\"/>\n                     </form>\n                 \n        </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/coupons/coupons.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/coupons/coupons.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"userType=='admin' || userType=='customer' \" >\n    \n\n    <div class=\"filters\">\n        <p>filter by category:\n                <select name=\"couponsCategory\" [(ngModel)]=\"couponsCategory\"  (change)=\"showCouponsByCategory()\" class=\"inputs\" >\n                   \n                    <option  value=\"food\">Food</option>\n                    <option  value= \"electronic\">Electronic</option>\n                    <option  value= \"vacation\">Vacation</option>\n                </select>\n            </p>\n        <p>filter by max price:\n                <input type=\"number\" step=\"10\" [(ngModel)]=\"maxPrice\" placeholder=\"Max Price\" name=\"maxPrice\" (change)=\"showCouponsByMaxPrice()\" class=\"inputs\">\n                \n                <input type=\"button\" value=\"Reset Filters\" (click)=showAllCoupons() class=\"button\">\n            </p>\n    </div>    \n\n\n        <br/><br/> \n        <table *ngIf=\"coupons\">\n        <tr class=\"headers\">\n            <th>Image</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>category</th>\n            <th>price</th>\n            <th>No. of coupons left</th>\n            <th>experation Date</th>\n            <th *ngIf=\"userType=='customer'\">purchase</th>\n        </tr>\n\n        <tr *ngFor=\"let c of coupons\">\n            \n            <td><img [src]=\"c.image\" alt=\"\" srcset=\"\" class=\"couponsImages\"></td>\n            <td>{{ c.title }}</td>\n            <td>{{ c.description }}  </td>\n            <td>{{ c.categoryName }}</td>\n            <td>{{ c.price }}  </td>\n            <td>{{ c.amount }}</td>\n            <td>{{ c.endDate }}</td>\n            <td *ngIf=\"userType=='customer'\"><input type=\"button\" value=\"Purchase Coupon 💰\" (click)=\"editorEnabler(c)\" /></td>\n            \n\n\n        </tr>\n    </table>\n\n        <div *ngIf=\"editor==true\">\n                 <form>\n                    <input type=\"image\" [src]=\"coupon.image\" disabled name=\"image\" placeholder=\"image\" [(ngModel)]=\"coupon.image\"  class=\"couponsImagesBig\"/> <br/>                         \n                    <p>ID</p> <input type=\"number\" disabled name=\"id\" placeholder=\"id\" [(ngModel)]=\"coupon.id\" class=\"disabledInputs\"/> <br/>\n                    <p>Coupon Title</p> <input type=\"text\" disabled name=\"title\" placeholder=\"title\" [(ngModel)]=\"coupon.title\" class=\"disabledInputs\"/> <br/>\n                    <p>Coupon Description</p> <input type=\"text\" disabled name=\"description\" placeholder=\"description\" [(ngModel)]=\"coupon.description\" class=\"disabledInputs\"/> <br/>\n                    <p>Coupon Category</p> <input type=\"text\" disabled name=\"categoryName\" placeholder=\"categoryName\" [(ngModel)]=\"coupon.categoryName\" class=\"disabledInputs\"/> <br/>\n                    <p>Coupon Price</p> <input type=\"number\" disabled name=\"price\" placeholder=\"price\" [(ngModel)]=\"coupon.price\" class=\"disabledInputs\"/> <br/>\n                    <p>Amount of Coupons Left</p> <input type=\"number\" disabled name=\"amount\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\" class=\"disabledInputs\"/> <br/>\n                    <p>Experation Date of Coupon</p> <input type=\"date\" disabled name=\"endDate\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\" class=\"disabledInputs\"/> <br/>\n                    <p></p> <input type=\"button\" value=\"Purchase Coupon\" (click)=\"purchaseCoupon(coupon)\" class=\"button\" />\n                </form>\n                \n            </div>\n    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/customers/customers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/customers/customers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='admin'\">\n\n    <table *ngIf=\"customers\">\n        <tr class=\"headers\">\n            \n            <th>First Name</th>\n            <th>First Name</th>\n            <th>Email</th>\n            <th>Delete</th>\n            <th>Edit</th>\n          \n\n        </tr>\n        <tr *ngFor=\"let c of customers\">\n            \n            <td>{{ c.firstName }}</td>\n            <td>{{ c.lastName }}</td>\n            <td>{{ c.email }}  </td>\n        <td>\n            <input type=\"button\" value=\"🗑\" (click)=\"deleteCustomer(c.id)\" />\n        </td> \n        <td>\n            <input type=\"button\" value=\"✎\" (click)=\"editorEnabler(c)\" />\n        </td> \n        </tr>\n    </table>\n    <div *ngIf=\"editor==true\">\n        <form>\n           <p> ID: <br/> <input type=\"number\" disabled name=\"id\" placeholder=\"id\" [(ngModel)]=\"c.id\" class=\"disabledInputs\"/> </p> <br/>\n           <p> First Name:<br/><input type=\"text\"  name=\"firstName\" placeholder=\"Name\" [(ngModel)]=\"c.firstName\" class=\"inputs\"/></p> <br/>\n           <p> Last Name:<br/><input type=\"text\"  name=\"lastName\" placeholder=\"Name\" [(ngModel)]=\"c.lastName\" class=\"inputs\"/></p> <br/>\n           <p> Email:<br/> <input type=\"text\" min=\"1\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"c.email\" class=\"inputs\"/> </p><br/>\n           <p> Password:<br/> <input type=\"text\" min=\"1\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"c.password\" class=\"inputs\"/></p> <br/>\n           <p> <input type=\"button\" value=\"Update Customer!\" (click)=\"updateCustomer()\" class=\"button\" />\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n<header><H1>COUPONIADA</H1></header>\n<nav> <app-nav></app-nav> </nav>\n<main>  <router-outlet></router-outlet>  </main>\n<section><app-logger-information></app-logger-information></section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logger-information/logger-information.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logger-information/logger-information.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<span>\n\n\n        <table *ngIf=\"loggedInType=='admin'\"> \n            <tr >\n            \n                <td><p class=\"boss\">Hello Boss</p></td>\n            </tr>\n\n            <tr>\n                    <td>\n                        \n                    <div> <input type=\"button\" value=\"Log Out!\" (click)=\"logout()\" class=\"logoutButton\" ></div>\n                    </td>\n                </tr>\n    </table>\n\n    \n\n\n    <table *ngIf=\"companyLoggedIn\">\n        <tr >\n             <td><p> Company Name: </p>{{ companyLoggedIn.name}}</td>\n            </tr>\n            <tr>\n            <td><p> Email: </p>{{ companyLoggedIn.email }}</td>\n            </tr>\n            <tr>\n                    <td>\n                        \n                       <div> <input type=\"button\" value=\"Log Out!\" (click)=\"logout()\" class=\"logoutButton\"></div>\n                    </td>\n                </tr>\n\n            \n    </table>\n\n  <table *ngIf=\"customerLoggedIn\">\n      <tr>  \n        <td><p> First Name:</p>{{ customerLoggedIn.firstName }}</td>\n    </tr>\n    <tr>\n        <td><p>Last Name:</p>{{ customerLoggedIn.lastName }}</td>\n            \n    </tr>\n    <tr>\n        <td><p> Email: </p>{{ customerLoggedIn.email }}</td>\n    </tr>\n\n    <tr>\n        <td>\n            \n            <div><input type=\"button\" value=\"Log Out!\" (click)=\"logout()\" class=\"logoutButton\" ></div>\n        </td>\n    </tr>\n    </table>  \n    \n\n\n\n\n</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n    <input required type=\"text\" name=\"userName\" placeholder=\"Email\" [(ngModel)]=\"userName\" class=\"inputs\" /><br/>\n    <input required type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" class=\"inputs\" required/><br/>\n    <select name=\"type\" [(ngModel)]=\"type\" class=\"inputs\" >\n        <option value=\"admin\">Admin</option>\n        <option value= \"customer\">Customer</option>\n        <option value= \"company\">Company</option>\n    </select> <br/>\n    <input type=\"button\" value=\"login\" (click)=\"login()\" class=\"button\"/>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-coupons/my-coupons.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-coupons/my-coupons.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"loggedInType=='customer'\">\n\n    <table *ngIf=\"customerCoupons\">\n        <tr class=\"headers\">\n            <th>Image</th>\n            <th>Title</th>\n            <th>description</th>\n            <th>category</th>\n            <th>price</th>\n            <th>No. of coupons left</th>\n            <th>experation Date</th>\n\n\n\n          \n\n        </tr>\n        <tr *ngFor=\"let c of customerCoupons\">\n            \n            <td><img [src]=\"c.image\" alt=\"\" srcset=\"\" class=\"couponsImages\"></td>\n            <td>{{ c.title }}</td>\n            <td>{{ c.description }}  </td>\n            <td>{{ c.categoryName }}</td>\n            <td>{{ c.price }}  </td>\n            <td>{{ c.amount }}</td>\n            <td>{{ c.endDate }}</td>\n            \n\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n\n\n    <nav *ngIf=\"navChooser=='admin'\" >\n\n            <a routerLink=\"companies\">Show Companies</a>\n            <a routerLink=\"customers\">Show Customers</a>\n            <a routerLink=\"coupons\">Show All Coupons</a>\n            <a routerLink=\"addCompany\">Add Company</a>\n            <a routerLink=\"addCustomer\">Add Customer</a>\n            \n\n\n\n    </nav>\n\n    <nav *ngIf=\"navChooser=='company'\">\n\n            <a routerLink=\"companyCoupons\">Company Coupons</a>\n            <a routerLink=\"addCoupon\">Add Coupon</a>\n            \n\n\n\n    </nav>\n\n    <nav *ngIf=\"navChooser=='customer'\">\n\n            <a routerLink=\"coupons\">Show All Coupons</a>\n            <a routerLink=\"myCoupons\">My Coupons</a>\n            \n\n        \n        </nav>\n  \n        <!-- <nav *ngIf=\"!navChooser || navChooser=='undefined' || navChooser=='null'\">\n\n              <h2>Please Log In</h2>\n         \n         \n             </nav> -->\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/company-coupons/company-coupons.component */ "./src/app/components/company-coupons/company-coupons.component.ts");
/* harmony import */ var _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-coupons/my-coupons.component */ "./src/app/components/my-coupons/my-coupons.component.ts");













var routes = [
    { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: "companies", component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_5__["CompaniesComponent"] },
    { path: "customers", component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"] },
    { path: "coupons", component: _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_7__["CouponsComponent"] },
    { path: "myCoupons", component: _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_12__["MyCouponsComponent"] },
    { path: "companyCoupons", component: _components_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_11__["CompanyCouponsComponent"] },
    { path: "addCompany", component: _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_8__["AddCompanyComponent"] },
    { path: "addCustomer", component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_9__["AddCustomerComponent"] },
    { path: "addCoupon", component: _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_10__["AddCouponComponent"] },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/coupons/coupons.component */ "./src/app/components/coupons/coupons.component.ts");
/* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
/* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/company-coupons/company-coupons.component */ "./src/app/components/company-coupons/company-coupons.component.ts");
/* harmony import */ var _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/my-coupons/my-coupons.component */ "./src/app/components/my-coupons/my-coupons.component.ts");
/* harmony import */ var _components_logger_information_logger_information_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/logger-information/logger-information.component */ "./src/app/components/logger-information/logger-information.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_10__["CustomersComponent"],
                _components_coupons_coupons_component__WEBPACK_IMPORTED_MODULE_11__["CouponsComponent"],
                _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_12__["AddCouponComponent"],
                _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_13__["AddCustomerComponent"],
                _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_14__["AddCompanyComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _components_company_coupons_company_coupons_component__WEBPACK_IMPORTED_MODULE_16__["CompanyCouponsComponent"],
                _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_17__["MyCouponsComponent"],
                _components_logger_information_logger_information_component__WEBPACK_IMPORTED_MODULE_18__["LoggerInformationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-company/add-company.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-company/add-company.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    margin: 20px;\r\n}\r\n.inputs{\r\n    zoom: 1;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksT0FBTzs7QUFFWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4uaW5wdXRze1xyXG4gICAgem9vbTogMTtcclxuICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-company/add-company.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-company/add-company.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function() { return AddCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddCompanyComponent = /** @class */ (function () {
    function AddCompanyComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.comp = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"];
    }
    AddCompanyComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
    };
    AddCompanyComponent.prototype.createCompany = function () {
        var _this = this;
        if (this.comp.email != null && this.comp.name != null && this.comp.password != null) {
            this.adminService.addCompany(this.comp).subscribe(function (compFromServer) {
                alert("The Company: " + compFromServer.name + " with id: " + compFromServer.id + " was created");
            }, function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            });
        }
        else
            alert("Please Fill All Required Details!");
    };
    AddCompanyComponent.ctorParameters = function () { return [
        { type: src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-company',
            template: __webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-company/add-company.component.html"),
            styles: [__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/add-company/add-company.component.css")]
        })
    ], AddCompanyComponent);
    return AddCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/add-coupon/add-coupon.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-coupon/add-coupon.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    margin: 20px;\r\n}\r\n.inputs{\r\n    zoom: 1;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY291cG9uL2FkZC1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLE9BQU87O0FBRVgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jb3Vwb24vYWRkLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5pbnB1dHN7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/add-coupon/add-coupon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-coupon/add-coupon.component.ts ***!
  \***************************************************************/
/*! exports provided: AddCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function() { return AddCouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddCouponComponent = /** @class */ (function () {
    function AddCouponComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.coup = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"];
    }
    AddCouponComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
    };
    AddCouponComponent.prototype.createCoupon = function () {
        var _this = this;
        if (this.coup.amount != null && this.coup.categoryName != null && this.coup.description != null &&
            this.coup.endDate != null && this.coup.image != null && this.coup.price != null &&
            this.coup.startDate != null && this.coup.title != null) {
            this.companyService.addCoupon(this.coup).subscribe(function (coupFromServer) {
                alert("The Coupon: " + coupFromServer.title + " with id: " + coupFromServer.id + " was created");
            }, function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            });
        }
        else
            alert("Please Fill All Required Details!");
    };
    AddCouponComponent.ctorParameters = function () { return [
        { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-coupon',
            template: __webpack_require__(/*! raw-loader!./add-coupon.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-coupon/add-coupon.component.html"),
            styles: [__webpack_require__(/*! ./add-coupon.component.css */ "./src/app/components/add-coupon/add-coupon.component.css")]
        })
    ], AddCouponComponent);
    return AddCouponComponent;
}());



/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    margin: 20px;\r\n}\r\n.inputs{\r\n    zoom: 1;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxPQUFPOztBQUVYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuLmlucHV0c3tcclxuICAgIHpvb206IDE7XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/add-customer/add-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-customer/add-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.cust = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"];
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
    };
    AddCustomerComponent.prototype.createCustomer = function () {
        var _this = this;
        if (this.cust.firstName != null && this.cust.lastName != null && this.cust.email != null &&
            this.cust.password != null) {
            this.adminService.addCustomer(this.cust).subscribe(function (custFromServer) {
                alert("The Customer: " + custFromServer.firstName + " " + custFromServer.lastName + " with id: " + custFromServer.id + " was created");
            }), function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            };
        }
        else
            alert("Please Fill All Required Details!");
    };
    AddCustomerComponent.ctorParameters = function () { return [
        { type: src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/add-customer/add-customer.component.css")]
        })
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/companies/companies.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/companies/companies.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/companies/companies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/companies/companies.component.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.editor = false;
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
        this.showAllCompanies();
    };
    CompaniesComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function () { _this.ngOnInit(); }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompaniesComponent.prototype.editorEnabler = function (comp) {
        this.c = comp;
        if (this.editor == false) {
            this.editor = true;
        }
        else
            this.editor = false;
    };
    CompaniesComponent.prototype.updateCompany = function () {
        var _this = this;
        if (this.c.email != null && this.c.name != null && this.c.password != null) {
            this.adminService.editCompany(this.c).subscribe(function (compFromServer) {
                alert("The Company: " + _this.c.name + " was updated");
            }, function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            });
        }
        else
            alert("Please Fill All Required Details!");
    };
    CompaniesComponent.prototype.showAllCompanies = function () {
        var _this = this;
        this.adminService.showAllCompanies().subscribe(function (comp) {
            _this.companies = comp;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompaniesComponent.ctorParameters = function () { return [
        { type: src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! raw-loader!./companies.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/components/companies/companies.component.css")]
        })
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/company-coupons/company-coupons.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/company-coupons/company-coupons.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".couponsImages{\r\n    width: 100px;\r\n}\r\ndiv{\r\n    margin-top: 2%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXBvbnMvY29tcGFueS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWNvdXBvbnMvY29tcGFueS1jb3Vwb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cG9uc0ltYWdlc3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5kaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/company-coupons/company-coupons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-coupons/company-coupons.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCouponsComponent", function() { return CompanyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompanyCouponsComponent = /** @class */ (function () {
    function CompanyCouponsComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.editor = false;
        this.couponsFilter = "all";
    }
    CompanyCouponsComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
        this.showCompanyCoupons();
    };
    CompanyCouponsComponent.prototype.showCompanyCoupons = function () {
        var _this = this;
        this.companyService.showCompanyCoupons().subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompanyCouponsComponent.prototype.showCompanyCouponsByCategory = function () {
        var _this = this;
        this.companyService.showCompanyCouponsbyCategory(this.couponsCategory).subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompanyCouponsComponent.prototype.showCompanyCouponsByMaxPrice = function () {
        var _this = this;
        this.companyService.showCouponsbyMaxPrice(this.maxPrice).subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompanyCouponsComponent.prototype.deleteCompanyCoupon = function (id) {
        var _this = this;
        this.companyService.deleteCoupon(id).subscribe(function () {
            _this.showCompanyCoupons();
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CompanyCouponsComponent.prototype.updateCompanyCoupon = function () {
        var _this = this;
        if (this.coupon.amount != null && this.coupon.categoryName != null && this.coupon.description != null &&
            this.coupon.endDate != null && this.coupon.image != null && this.coupon.price != null &&
            this.coupon.startDate != null && this.coupon.title != null) {
            this.companyService.editCoupon(this.coupon).subscribe(function (coupFromServer) {
                alert("The Coupon: " + coupFromServer.title + " was updated");
            }, function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            });
        }
        else
            alert("Please Fill All Required Details!");
    };
    CompanyCouponsComponent.prototype.editorEnabler = function (coup) {
        this.coupon = coup;
        if (this.editor == false) {
            this.editor = true;
        }
        else
            this.editor = false;
    };
    CompanyCouponsComponent.ctorParameters = function () { return [
        { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CompanyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-coupons',
            template: __webpack_require__(/*! raw-loader!./company-coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/company-coupons/company-coupons.component.html"),
            styles: [__webpack_require__(/*! ./company-coupons.component.css */ "./src/app/components/company-coupons/company-coupons.component.css")]
        })
    ], CompanyCouponsComponent);
    return CompanyCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/coupons/coupons.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".couponsImages{\r\n    width: 100px;\r\n}\r\n\r\ndiv{\r\n    margin-top: 2%;\r\n}\r\n\r\n.couponsImagesBig{\r\n    width: 400px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vwb25zL2NvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXBvbnMvY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXBvbnNJbWFnZXN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbmRpdntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY291cG9uc0ltYWdlc0JpZ3tcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/coupons/coupons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/coupons/coupons.component.ts ***!
  \*********************************************************/
/*! exports provided: CouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsComponent", function() { return CouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CouponsComponent = /** @class */ (function () {
    function CouponsComponent(adminService, customerService, router) {
        this.adminService = adminService;
        this.customerService = customerService;
        this.router = router;
        this.editor = false;
        this.couponsFilter = "all";
    }
    CouponsComponent.prototype.ngOnInit = function () {
        this.userType = sessionStorage.type;
        this.showAllCoupons();
    };
    CouponsComponent.prototype.editorEnabler = function (coup) {
        this.coupon = coup;
        if (this.editor == false) {
            this.editor = true;
        }
        else
            this.editor = false;
    };
    CouponsComponent.prototype.purchaseCoupon = function (coupon) {
        var _this = this;
        this.customerService.purchaseCoupon(coupon).subscribe(function (coupFromServer) {
            alert("The Coup: " + _this.coupon.title + " " + _this.coupon.description + " was purchased");
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
            else
                alert("Coupon already been purchased!");
        });
    };
    CouponsComponent.prototype.showAllCoupons = function () {
        var _this = this;
        this.adminService.showAllCoupons().subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CouponsComponent.prototype.showCouponsByCategory = function () {
        var _this = this;
        console.log(this.couponsCategory);
        this.adminService.showCouponsbyCategory(this.couponsCategory).subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CouponsComponent.prototype.showCouponsByMaxPrice = function () {
        var _this = this;
        this.adminService.showCouponsbyMaxPrice(this.maxPrice).subscribe(function (coup) {
            _this.coupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CouponsComponent.ctorParameters = function () { return [
        { type: src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    CouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupons',
            template: __webpack_require__(/*! raw-loader!./coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/coupons/coupons.component.html"),
            styles: [__webpack_require__(/*! ./coupons.component.css */ "./src/app/components/coupons/coupons.component.css")]
        })
    ], CouponsComponent);
    return CouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    text-align: center;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.editor = false;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
        this.showAllCustomers();
    };
    CustomersComponent.prototype.showAllCustomers = function () {
        var _this = this;
        this.adminService.showAllCustomers().subscribe(function (cust) {
            _this.customers = cust;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CustomersComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.adminService.deleteCustomer(id).subscribe(function () { _this.ngOnInit(); }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    CustomersComponent.prototype.editorEnabler = function (cust) {
        this.c = cust;
        if (this.editor == false) {
            this.editor = true;
        }
        else
            this.editor = false;
    };
    CustomersComponent.prototype.updateCustomer = function () {
        var _this = this;
        if (this.c.email != null && this.c.firstName != null && this.c.lastName != null && this.c.password != null) {
            this.adminService.editCustomer(this.c).subscribe(function (custFromServer) {
                alert("The Customer: " + _this.c.firstName + " " + _this.c.lastName + " was updated");
            }, function (error) {
                if (error.error == "Session Timeout") {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("type");
                    _this.router.navigate(['']);
                }
            });
        }
        else
            alert("Please Fill All Required Details!");
    };
    CustomersComponent.ctorParameters = function () { return [
        { type: src_app_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
        })
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/layout/layout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 { color:rgba(236, 212, 176, 0.763);\r\n    ; font-family: 'cursive', cursive; font-size: 40px; font-weight: normal; line-height: 48px;  text-align: center; text-shadow: 1px 10px 10px #082b34; \r\nmargin-top: 10px;  }\r\n  \r\n\r\n\r\ndiv{\r\n    margin: 0%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows:5% 22% 73%;\r\n    grid-template-columns: 15% 85%;\r\n\r\n\r\n    \r\n\r\n\r\n \r\n}\r\n  \r\n\r\n\r\nheader{\r\n\r\n    margin: 0;\r\n    grid-column: 1 / span 4;\r\n    grid-row: 1;\r\n    text-align: center;\r\n\r\n}\r\n  \r\n\r\n\r\nnav{\r\n    grid-column: 1 / span 4;\r\n    grid-row: 2;\r\n    text-align: center;\r\n    \r\n\r\n}\r\n  \r\n\r\n\r\nsection{\r\n\r\n    grid-column: 1 / span 1;\r\n    grid-row: 3/ span 3;\r\n    /* border-top: 5px groove rgba(199, 192, 192, 0.30); */\r\n    /* border-radius: 20px; */\r\n \r\n    \r\n}\r\n  \r\n\r\n\r\nmain{\r\n    \r\n\r\n\r\n    border-top: 5px groove rgba(199, 192, 192, 0.30) ;\r\n    border-left: 5px groove rgba(199, 192, 192, 0.30) ;\r\n    border-radius: 20px;\r\n\r\n    grid-row: 3/span 3;\r\n    text-align: center;\r\n\r\n    overflow: auto;\r\n\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxnQ0FBZ0M7TUFDL0IsK0JBQStCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixHQUFHLGtCQUFrQixFQUFFLGtDQUFrQztBQUN2SixnQkFBZ0IsR0FBRzs7OztBQUluQjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw4QkFBOEI7Ozs7Ozs7QUFPbEM7Ozs7QUFHQTs7SUFFSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7O0FBRXRCOzs7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjs7O0FBR3RCOzs7O0FBS0E7O0lBRUksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzREFBc0Q7SUFDdEQseUJBQXlCOzs7QUFHN0I7Ozs7QUFFQTs7OztJQUlJLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQixjQUFjOzs7QUFHbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgY29sb3I6cmdiYSgyMzYsIDIxMiwgMTc2LCAwLjc2Myk7XHJcbiAgICA7IGZvbnQtZmFtaWx5OiAnY3Vyc2l2ZScsIGN1cnNpdmU7IGZvbnQtc2l6ZTogNDBweDsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgbGluZS1oZWlnaHQ6IDQ4cHg7ICB0ZXh0LWFsaWduOiBjZW50ZXI7IHRleHQtc2hhZG93OiAxcHggMTBweCAxMHB4ICMwODJiMzQ7IFxyXG5tYXJnaW4tdG9wOiAxMHB4OyAgfVxyXG4gIFxyXG5cclxuXHJcbmRpdntcclxuICAgIG1hcmdpbjogMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOjUlIDIyJSA3MyU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSA4NSU7XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiBcclxufVxyXG5cclxuXHJcbmhlYWRlcntcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcclxuICAgIGdyaWQtcm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5uYXZ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNDtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5zZWN0aW9ue1xyXG5cclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1yb3c6IDMvIHNwYW4gMztcclxuICAgIC8qIGJvcmRlci10b3A6IDVweCBncm9vdmUgcmdiYSgxOTksIDE5MiwgMTkyLCAwLjMwKTsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbiBcclxuICAgIFxyXG59XHJcblxyXG5tYWlue1xyXG4gICAgXHJcblxyXG5cclxuICAgIGJvcmRlci10b3A6IDVweCBncm9vdmUgcmdiYSgxOTksIDE5MiwgMTkyLCAwLjMwKSA7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IGdyb292ZSByZ2JhKDE5OSwgMTkyLCAxOTIsIDAuMzApIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgZ3JpZC1yb3c6IDMvc3BhbiAzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/logger-information/logger-information.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/logger-information/logger-information.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    \r\n\r\ntable{\r\nmargin-top: 10px;\r\n text-align: left;\r\n position: relative;\r\n margin-left: 10px;\r\n}\r\ntd{\r\n    font-size: large;\r\n    padding: 15px;\r\n}\r\np{\r\n    font-size: x-large;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    text-shadow: 0.5px 0.5px;\r\n    \r\n}\r\n.logoutButton{\r\n\r\n    background-color: rgba(236, 212, 176, 0.363);\r\n    margin:10px;\r\n    padding: 10px;\r\n    border-radius: 20px 10px 40px 10px;\r\n    text-align: center;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-text-decoration-color: rgba(0, 0, 0, 0);\r\n            text-decoration-color: rgba(0, 0, 0, 0);\r\n    -webkit-text-fill-color: gray;\r\n    -webkit-text-stroke-width: 5%;\r\n    \r\n    font-family: fantasy;\r\n}\r\n.logoutButton:hover{\r\n    background-color: rgba(255, 30, 0, 0.5);\r\nbox-shadow: 0 8px 50px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n-webkit-text-fill-color: black;\r\n-webkit-animation: myMove   10s  ease 0s  normal;\r\n        animation: myMove   10s  ease 0s  normal;\r\n}\r\n.boss{\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    font-size: xx-large; \r\n}\r\n@-webkit-keyframes myMove {\r\n    0% {border-radius: 20px 10px 40px 10px;  }\r\n    25% { border-radius: 10px 5px 20px 5px; }\r\n    50% {border-radius: 0px 0px 0px 0px;  }\r\n    75% { border-radius: 10px 5px 20px 5px; }\r\n    100% {border-radius: 20px 10px 40px 10px;  }\r\n}\r\n@keyframes myMove {\r\n    0% {border-radius: 20px 10px 40px 10px;  }\r\n    25% { border-radius: 10px 5px 20px 5px; }\r\n    50% {border-radius: 0px 0px 0px 0px;  }\r\n    75% { border-radius: 10px 5px 20px 5px; }\r\n    100% {border-radius: 20px 10px 40px 10px;  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dnZXItaW5mb3JtYXRpb24vbG9nZ2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7QUFDQSxnQkFBZ0I7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLHdCQUF3Qjs7QUFFNUI7QUFFQTs7SUFFSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVFQUF1RTtJQUN2RSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7O0lBRTdCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDLHVFQUF1RTtBQUN2RSw4QkFBOEI7QUFDOUIsZ0RBQXdDO1FBQXhDLHdDQUF3QztBQUN4QztBQUNBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLElBQUksa0NBQWtDLEdBQUc7SUFDekMsTUFBTSxnQ0FBZ0MsRUFBRTtJQUN4QyxLQUFLLDhCQUE4QixHQUFHO0lBQ3RDLE1BQU0sZ0NBQWdDLEVBQUU7SUFDeEMsTUFBTSxrQ0FBa0MsR0FBRztBQUMvQztBQU5BO0lBQ0ksSUFBSSxrQ0FBa0MsR0FBRztJQUN6QyxNQUFNLGdDQUFnQyxFQUFFO0lBQ3hDLEtBQUssOEJBQThCLEdBQUc7SUFDdEMsTUFBTSxnQ0FBZ0MsRUFBRTtJQUN4QyxNQUFNLGtDQUFrQyxHQUFHO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dnZXItaW5mb3JtYXRpb24vbG9nZ2VyLWluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIFxyXG5cclxudGFibGV7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbiB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxudGR7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIHRleHQtc2hhZG93OiAwLjVweCAwLjVweDtcclxuICAgIFxyXG59XHJcblxyXG4ubG9nb3V0QnV0dG9ue1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMTIsIDE3NiwgMC4zNjMpO1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAxMHB4IDQwcHggMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGdyYXk7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiA1JTtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn1cclxuLmxvZ291dEJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAzMCwgMCwgMC41KTtcclxuYm94LXNoYWRvdzogMCA4cHggNTBweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbi13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcclxuYW5pbWF0aW9uOiBteU1vdmUgICAxMHMgIGVhc2UgMHMgIG5vcm1hbDtcclxufVxyXG4uYm9zc3tcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTsgXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbXlNb3ZlIHtcclxuICAgIDAlIHtib3JkZXItcmFkaXVzOiAyMHB4IDEwcHggNDBweCAxMHB4OyAgfVxyXG4gICAgMjUlIHsgYm9yZGVyLXJhZGl1czogMTBweCA1cHggMjBweCA1cHg7IH1cclxuICAgIDUwJSB7Ym9yZGVyLXJhZGl1czogMHB4IDBweCAwcHggMHB4OyAgfVxyXG4gICAgNzUlIHsgYm9yZGVyLXJhZGl1czogMTBweCA1cHggMjBweCA1cHg7IH1cclxuICAgIDEwMCUge2JvcmRlci1yYWRpdXM6IDIwcHggMTBweCA0MHB4IDEwcHg7ICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/logger-information/logger-information.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/logger-information/logger-information.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoggerInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerInformationComponent", function() { return LoggerInformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_logger_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/logger-information.service */ "./src/app/service/logger-information.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoggerInformationComponent = /** @class */ (function () {
    function LoggerInformationComponent(loggerInfoService, router) {
        this.loggerInfoService = loggerInfoService;
        this.router = router;
        this.gotInfo = false;
    }
    LoggerInformationComponent.prototype.ngOnInit = function () {
        if (sessionStorage.type) {
            this.loggedInType = sessionStorage.type;
        }
    };
    LoggerInformationComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (sessionStorage.type && this.gotInfo == false) {
            this.loggedInType = sessionStorage.type;
            if (this.loggedInType == "company") {
                this.loggerInfoService.showCompanyInformation().subscribe(function (comp) {
                    _this.companyLoggedIn = comp;
                    _this.gotInfo = true;
                });
            }
            else if (this.loggedInType == "customer") {
                this.loggerInfoService.showCustomerInformation().subscribe(function (cust) {
                    _this.customerLoggedIn = cust;
                    _this.gotInfo = true;
                });
            }
        }
    };
    LoggerInformationComponent.prototype.logout = function () {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("type");
        this.gotInfo = false;
        this.loggedInType = undefined;
        this.companyLoggedIn = undefined;
        this.customerLoggedIn = undefined;
        this.router.navigate(['']);
    };
    LoggerInformationComponent.ctorParameters = function () { return [
        { type: src_app_service_logger_information_service__WEBPACK_IMPORTED_MODULE_2__["LoggerInformationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoggerInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logger-information',
            template: __webpack_require__(/*! raw-loader!./logger-information.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/logger-information/logger-information.component.html"),
            styles: [__webpack_require__(/*! ./logger-information.component.css */ "./src/app/components/logger-information/logger-information.component.css")]
        })
    ], LoggerInformationComponent);
    return LoggerInformationComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    \r\n    position: relative;\r\n    align-content: center;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n\r\n}\r\n.inputs{\r\n    zoom: 1;\r\n    height: 80px;\r\n    width: 200px;\r\n    font-size: 20px;\r\n    -webkit-text-fill-color: black;\r\n    text-align: center;\r\n}\r\n.button{\r\n    height: 80px;\r\n    width: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5pbnB1dHN7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.type) {
            this.routeToUser(sessionStorage.type);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.userName, this.password, this.type).subscribe(function (response) {
            if (response.token) {
                //alert(response.token);
                sessionStorage.token = response.token;
                sessionStorage.type = _this.type;
                _this.routeToUser(sessionStorage.type);
            }
        }, function (error) { alert("Wrong Password/UserName/Type"); });
    };
    LoginComponent.prototype.routeToUser = function (type) {
        switch (type) {
            case "admin":
                sessionStorage.type = "admin";
                sessionStorage.loggedIn == true;
                this.router.navigate(["/admin"]);
                break;
            case "company":
                sessionStorage.type = "company";
                sessionStorage.loggedIn == true;
                this.router.navigate(["/companyCoupons"]);
                break;
            case "customer":
                sessionStorage.type = "customer";
                sessionStorage.loggedIn == true;
                this.router.navigate(["/myCoupons"]);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-coupons/my-coupons.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-coupons/my-coupons.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".couponsImages{\r\n    width: 100px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWNvdXBvbnMvbXktY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXBvbnNJbWFnZXN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-coupons/my-coupons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-coupons/my-coupons.component.ts ***!
  \***************************************************************/
/*! exports provided: MyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCouponsComponent", function() { return MyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/customer.service */ "./src/app/service/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyCouponsComponent = /** @class */ (function () {
    function MyCouponsComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    MyCouponsComponent.prototype.ngOnInit = function () {
        this.loggedInType = sessionStorage.type;
        this.showCustomerCoupons();
    };
    MyCouponsComponent.prototype.showCustomerCoupons = function () {
        var _this = this;
        this.customerService.showCustomerCoupons().subscribe(function (coup) {
            _this.customerCoupons = coup;
        }, function (error) {
            if (error.error == "Session Timeout") {
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("type");
                _this.router.navigate(['']);
            }
        });
    };
    MyCouponsComponent.ctorParameters = function () { return [
        { type: src_app_service_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-coupons',
            template: __webpack_require__(/*! raw-loader!./my-coupons.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-coupons/my-coupons.component.html"),
            styles: [__webpack_require__(/*! ./my-coupons.component.css */ "./src/app/components/my-coupons/my-coupons.component.css")]
        })
    ], MyCouponsComponent);
    return MyCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    width: 60%;\r\n    position: absolute;\r\n    margin-left: 15%;\r\n    margin-top: 3%;\r\n    text-align: center;\r\n    display: grid;\r\n    grid-template-columns: 16% 16% 16% 16% 16% 16% ;\r\n    \r\n    \r\n\r\n}\r\n\r\nnav a{\r\n    background-color: rgba(236, 212, 176, 0.363);\r\n    margin:10px;\r\n    padding: 10px;\r\n    border-radius: 20px 10px 40px 10px;\r\n    text-align: center;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n    -webkit-text-decoration-color: rgba(0, 0, 0, 0);\r\n            text-decoration-color: rgba(0, 0, 0, 0);\r\n    -webkit-text-fill-color: gray;\r\n    -webkit-text-stroke-width: 5%;\r\n    \r\n    font-family: fantasy;\r\n    \r\n\r\n}\r\n\r\nnav a:hover{\r\nbackground-color: rgba(146, 145, 66, 0.116);\r\nbox-shadow: 0 8px 50px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);\r\n-webkit-text-fill-color: black;\r\n-webkit-animation: myMove   10s  ease 0s  normal;\r\n        animation: myMove   10s  ease 0s  normal;\r\n\r\n}\r\n\r\n@-webkit-keyframes myMove {\r\n    0% {border-radius: 20px 10px 40px 10px;  }\r\n    25% { border-radius: 10px 5px 20px 5px; }\r\n    50% {border-radius: 0px 0px 0px 0px;  }\r\n    75% { border-radius: 10px 5px 20px 5px; }\r\n    100% {border-radius: 20px 10px 40px 10px;  }\r\n}\r\n\r\n@keyframes myMove {\r\n    0% {border-radius: 20px 10px 40px 10px;  }\r\n    25% { border-radius: 10px 5px 20px 5px; }\r\n    50% {border-radius: 0px 0px 0px 0px;  }\r\n    75% { border-radius: 10px 5px 20px 5px; }\r\n    100% {border-radius: 20px 10px 40px 10px;  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQ0FBK0M7Ozs7QUFJbkQ7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztJQUNYLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHVFQUF1RTtJQUN2RSwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3Qiw2QkFBNkI7O0lBRTdCLG9CQUFvQjs7O0FBR3hCOztBQUVBO0FBQ0EsMkNBQTJDO0FBQzNDLHVFQUF1RTtBQUN2RSw4QkFBOEI7QUFDOUIsZ0RBQXdDO1FBQXhDLHdDQUF3Qzs7QUFFeEM7O0FBSUE7SUFDSSxJQUFJLGtDQUFrQyxHQUFHO0lBQ3pDLE1BQU0sZ0NBQWdDLEVBQUU7SUFDeEMsS0FBSyw4QkFBOEIsR0FBRztJQUN0QyxNQUFNLGdDQUFnQyxFQUFFO0lBQ3hDLE1BQU0sa0NBQWtDLEdBQUc7QUFDL0M7O0FBTkE7SUFDSSxJQUFJLGtDQUFrQyxHQUFHO0lBQ3pDLE1BQU0sZ0NBQWdDLEVBQUU7SUFDeEMsS0FBSyw4QkFBOEIsR0FBRztJQUN0QyxNQUFNLGdDQUFnQyxFQUFFO0lBQ3hDLE1BQU0sa0NBQWtDLEdBQUc7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNiUgMTYlIDE2JSAxNiUgMTYlIDE2JSA7XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxubmF2IGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjEyLCAxNzYsIDAuMzYzKTtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMTBweCA0MHB4IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBncmF5O1xyXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogNSU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5uYXYgYTpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDYsIDE0NSwgNjYsIDAuMTE2KTtcclxuYm94LXNoYWRvdzogMCA4cHggNTBweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbi13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBibGFjaztcclxuYW5pbWF0aW9uOiBteU1vdmUgICAxMHMgIGVhc2UgMHMgIG5vcm1hbDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyBteU1vdmUge1xyXG4gICAgMCUge2JvcmRlci1yYWRpdXM6IDIwcHggMTBweCA0MHB4IDEwcHg7ICB9XHJcbiAgICAyNSUgeyBib3JkZXItcmFkaXVzOiAxMHB4IDVweCAyMHB4IDVweDsgfVxyXG4gICAgNTAlIHtib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7ICB9XHJcbiAgICA3NSUgeyBib3JkZXItcmFkaXVzOiAxMHB4IDVweCAyMHB4IDVweDsgfVxyXG4gICAgMTAwJSB7Ym9yZGVyLXJhZGl1czogMjBweCAxMHB4IDQwcHggMTBweDsgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavComponent = /** @class */ (function () {
    function NavComponent(router) {
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.navChooser = sessionStorage.type;
    };
    NavComponent.prototype.ngDoCheck = function () {
        this.navChooser = sessionStorage.type;
    };
    NavComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/models/company.ts":
/*!***********************************!*\
  !*** ./src/app/models/company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, email, password, coupons) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
    Company.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Company;
}());



/***/ }),

/***/ "./src/app/models/coupon.ts":
/*!**********************************!*\
  !*** ./src/app/models/coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company */ "./src/app/models/company.ts");

var Coupon = /** @class */ (function () {
    function Coupon(id, company, categoryName, title, description, startDate, endDate, amount, price, image) {
        this.id = id;
        this.company = company;
        this.categoryName = categoryName;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
    }
    Coupon.ctorParameters = function () { return [
        { type: Number },
        { type: _company__WEBPACK_IMPORTED_MODULE_0__["Company"] },
        { type: String },
        { type: String },
        { type: String },
        { type: Date },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: String }
    ]; };
    return Coupon;
}());



/***/ }),

/***/ "./src/app/models/customer.ts":
/*!************************************!*\
  !*** ./src/app/models/customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, firstName, lastName, email, password, coupons) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.coupons = coupons;
    }
    Customer.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Array }
    ]; };
    return Customer;
}());



/***/ }),

/***/ "./src/app/service/admin.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admin.service.ts ***!
  \******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AdminService = /** @class */ (function () {
    function AdminService(httpClient) {
        this.httpClient = httpClient;
    }
    AdminService.prototype.showAllCompanies = function () {
        return this.httpClient.get("http://localhost:8080/admin/company/" + sessionStorage.token);
    };
    AdminService.prototype.showAllCustomers = function () {
        return this.httpClient.get("http://localhost:8080/admin/customer/" + sessionStorage.token);
    };
    AdminService.prototype.showAllCoupons = function () {
        return this.httpClient.get("http://localhost:8080/admin/allCoupons/" + sessionStorage.token);
    };
    AdminService.prototype.showCouponsbyCategory = function (category) {
        return this.httpClient.get("http://localhost:8080/admin/coupon/category/" + sessionStorage.token + "/" + category);
    };
    AdminService.prototype.showCouponsbyMaxPrice = function (max) {
        return this.httpClient.get("http://localhost:8080/admin/coupon/price/" + sessionStorage.token + "/" + max);
    };
    AdminService.prototype.addCompany = function (comp) {
        return this.httpClient.post("http://localhost:8080/admin/company/" + sessionStorage.token, comp);
    };
    AdminService.prototype.addCustomer = function (cust) {
        return this.httpClient.post("http://localhost:8080/admin/customer/" + sessionStorage.token, cust);
    };
    AdminService.prototype.deleteCustomer = function (id) {
        return this.httpClient.delete("http://localhost:8080/admin/customer/" + sessionStorage.token + "/" + id);
    };
    AdminService.prototype.deleteCompany = function (id) {
        return this.httpClient.delete("http://localhost:8080/admin/company/" + sessionStorage.token + "/" + id);
    };
    AdminService.prototype.editCompany = function (comp) {
        return this.httpClient.put("http://localhost:8080/admin/company/" + sessionStorage.token, comp);
    };
    AdminService.prototype.editCustomer = function (cust) {
        return this.httpClient.put("http://localhost:8080/admin/customer/" + sessionStorage.token, cust);
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/service/company.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/company.service.ts ***!
  \********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CompanyService = /** @class */ (function () {
    function CompanyService(httpClient) {
        this.httpClient = httpClient;
    }
    CompanyService.prototype.addCoupon = function (coup) {
        return this.httpClient.post("http://localhost:8080/company/coupon/" + sessionStorage.token, coup);
    };
    CompanyService.prototype.showCompanyCoupons = function () {
        return this.httpClient.get("http://localhost:8080/company/coupon/" + sessionStorage.token);
    };
    CompanyService.prototype.showCompanyCouponsbyCategory = function (category) {
        return this.httpClient.get("http://localhost:8080/company/coupon/category/" + sessionStorage.token + "/" + category);
    };
    CompanyService.prototype.showCouponsbyMaxPrice = function (max) {
        return this.httpClient.get("http://localhost:8080/company/coupon/maxprice/" + sessionStorage.token + "/" + max);
    };
    CompanyService.prototype.deleteCoupon = function (id) {
        return this.httpClient.delete("http://localhost:8080/company/coupon/" + sessionStorage.token + "/" + id);
    };
    CompanyService.prototype.editCoupon = function (coup) {
        return this.httpClient.put("http://localhost:8080/company/coupon/" + sessionStorage.token, coup);
    };
    CompanyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/service/customer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/customer.service.ts ***!
  \*********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CustomerService = /** @class */ (function () {
    function CustomerService(httpClient) {
        this.httpClient = httpClient;
    }
    CustomerService.prototype.showCustomerCoupons = function () {
        return this.httpClient.get("http://localhost:8080/customer/coupon/" + sessionStorage.token);
    };
    CustomerService.prototype.purchaseCoupon = function (coupon) {
        return this.httpClient.post("http://localhost:8080/customer/coupon/" + sessionStorage.token, coupon);
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/service/logger-information.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/logger-information.service.ts ***!
  \*******************************************************/
/*! exports provided: LoggerInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerInformationService", function() { return LoggerInformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoggerInformationService = /** @class */ (function () {
    function LoggerInformationService(httpClient) {
        this.httpClient = httpClient;
    }
    LoggerInformationService.prototype.showCustomerInformation = function () {
        return this.httpClient.get("http://localhost:8080/customer/" + sessionStorage.token);
    };
    LoggerInformationService.prototype.showCompanyInformation = function () {
        return this.httpClient.get("http://localhost:8080/company/" + sessionStorage.token);
    };
    LoggerInformationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoggerInformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoggerInformationService);
    return LoggerInformationService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(client) {
        this.client = client;
    }
    LoginService.prototype.login = function (username, password, type) {
        return this.client.post("http://localhost:8080/login?password="
            + password + "&type=" + type + "&userName=" + username, "");
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\CouponsWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map