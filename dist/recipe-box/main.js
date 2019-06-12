(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/recipe-page/recipe-page.component */ "./src/app/components/recipe-page/recipe-page.component.ts");
/* harmony import */ var _components_category_results_category_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category-results/category-results.component */ "./src/app/components/category-results/category-results.component.ts");
/* harmony import */ var _components_spirit_page_spirit_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spirit-page/spirit-page.component */ "./src/app/components/spirit-page/spirit-page.component.ts");
/* harmony import */ var _components_non_alcoholic_non_alcoholic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/non-alcoholic/non-alcoholic.component */ "./src/app/components/non-alcoholic/non-alcoholic.component.ts");
/* harmony import */ var _components_random_random_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/random/random.component */ "./src/app/components/random/random.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'drink/:id', component: _components_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_4__["RecipePageComponent"] },
    { path: 'category/:ingredient', component: _components_category_results_category_results_component__WEBPACK_IMPORTED_MODULE_5__["CategoryResultsComponent"] },
    { path: 'spirits', component: _components_spirit_page_spirit_page_component__WEBPACK_IMPORTED_MODULE_6__["SpiritPageComponent"] },
    { path: 'non-alcoholic', component: _components_non_alcoholic_non_alcoholic_component__WEBPACK_IMPORTED_MODULE_7__["NonAlcoholicComponent"] },
    { path: 'random', component: _components_random_random_component__WEBPACK_IMPORTED_MODULE_8__["RandomComponent"] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.header {\n    text-align: center;\n    height: 100px;\n    margin: 0px 0px 50px auto;\n}\n\n.header h1 {\n    line-height: 100px;\n    display: inline-block;\n    margin-top: 20px;\n    position: relative;\n    top: 10px;\n    padding: 0px 5px;\n    font-weight: 500;\n}\n\n.header img {\n    width: 65px;\n    display: inline-block;\n}\n\n.wrap {\n    width: 100%;\n    margin: 0 auto;\n}\n\n "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 offset-lg-2\">\n      <div style=\"margin: 0 auto\">\n        <div class=\"header\">\n          <img alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n          <h1>Recipe Box</h1>\n        </div>\n        <div class=\"wrap\">\n          <app-recipe-master></app-recipe-master>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/fesm5/forms.js");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _components_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/recipe-page/recipe-page.component */ "./src/app/components/recipe-page/recipe-page.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var _components_category_results_category_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/category-results/category-results.component */ "./src/app/components/category-results/category-results.component.ts");
/* harmony import */ var _components_spirit_page_spirit_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/spirit-page/spirit-page.component */ "./src/app/components/spirit-page/spirit-page.component.ts");
/* harmony import */ var _components_non_alcoholic_non_alcoholic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/non-alcoholic/non-alcoholic.component */ "./src/app/components/non-alcoholic/non-alcoholic.component.ts");
/* harmony import */ var _components_random_random_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/random/random.component */ "./src/app/components/random/random.component.ts");
/* harmony import */ var _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search-results/search-results.component */ "./src/app/components/search-results/search-results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_recipe_page_recipe_page_component__WEBPACK_IMPORTED_MODULE_10__["RecipePageComponent"],
                _components_category_results_category_results_component__WEBPACK_IMPORTED_MODULE_12__["CategoryResultsComponent"],
                _components_spirit_page_spirit_page_component__WEBPACK_IMPORTED_MODULE_13__["SpiritPageComponent"],
                _components_non_alcoholic_non_alcoholic_component__WEBPACK_IMPORTED_MODULE_14__["NonAlcoholicComponent"],
                _components_random_random_component__WEBPACK_IMPORTED_MODULE_15__["RandomComponent"],
                _components_search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_Forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_11__["AppRouterModule"]
            ],
            providers: [
                _services_recipe_service__WEBPACK_IMPORTED_MODULE_9__["RecipeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/category-results/category-results.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/category-results/category-results.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n    font-size: 14px;\n    margin: 5px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/category-results/category-results.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/category-results/category-results.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <a (click)=\"backClick()\" class=\"btn btn-light btn-sm mb-3\">Back</a>\n  <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center\">\n    <div class=\"spinner-grow text-muted\" style=\"width: 3rem; height: 3rem;\"></div>\n  </div>\n  <div *ngIf=\"loaded\">\n    <div class=\"row\">\n      <div *ngFor=\"let drink of fullDrinks; let i = index\" class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <a (click)=\"changePage(drink.idDrink)\">\n                <img class=\"card-img-top\" src=\"{{drink.strDrinkThumb}}\" alt=\"Card image cap\">\n              </a>\n            </div>\n            <div class=\"col-lg-4 card-body\">\n              <h5>{{ drink.strDrink }}</h5>\n              <span class=\"badge badge-pill badge-primary\">{{ drink.strIngredient1 }}</span>\n              <span *ngIf=\" drink.strIngredient2 == 'Gin'\" class=\"badge badge-pill badge-primary\">{{ drink.strIngredient2 }}</span>\n              <span class=\"badge badge-pill badge-primary\">{{ drink.strCategory }}</span>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n      <div class=\"col-lg-6 right-style\" *ngIf=\"i%2 == 0\">\n        <div class=\"card card-body\">\n          <img class=\"card-img-top\" src=\"{{drink.strDrinkThumb}}\" alt=\"Card image cap\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/category-results/category-results.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/category-results/category-results.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoryResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResultsComponent", function() { return CategoryResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryResultsComponent = /** @class */ (function () {
    function CategoryResultsComponent(route, recipeService, router, location) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.location = location;
        this.loaded = false;
        this.ids = [];
        this.fullDrinks = [];
    }
    CategoryResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ingredient = this.route.snapshot.paramMap.get('ingredient');
        this.recipeService.getDrinksByIngredient(ingredient).subscribe(function (drinks) {
            _this.drinks = drinks.drinks;
            _this.loaded = true;
            console.log(_this.drinks);
            for (var i = 0; i < _this.drinks.length; i++) {
                _this.ids.push(_this.drinks[i].idDrink);
            }
            for (var i = 0; i < _this.ids.length; i++) {
                _this.recipeService.getDrinkById(_this.ids[i]).subscribe(function (drink) {
                    _this.fullDrinks.push(drink.drinks[0]);
                });
            }
            console.log(_this.ids);
            console.log(_this.fullDrinks);
        });
    };
    CategoryResultsComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.recipeService.getDrinkById(id).subscribe(function (drink) {
            _this.drink = drink;
        });
    };
    CategoryResultsComponent.prototype.changePage = function (id) {
        this.router.navigate(["drink/" + id]);
    };
    CategoryResultsComponent.prototype.backClick = function () {
        this.location.back();
    };
    CategoryResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-results',
            template: __webpack_require__(/*! ./category-results.component.html */ "./src/app/components/category-results/category-results.component.html"),
            styles: [__webpack_require__(/*! ./category-results.component.css */ "./src/app/components/category-results/category-results.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], CategoryResultsComponent);
    return CategoryResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n    display:block !important;\n    position:relative !important;\n    width:100px !important;\n    border:1px solid rgba(white, .5) !important;\n  }\n\n.bottom-buffer-sm {\n    margin-bottom: 50px;\n}\n\n.bottom-buffer {\n    margin-bottom: 80px;\n}\n\n.bottom-buffer-lg {\n    margin-bottom: 130px;\n}\n\n.banner {\n    padding: 30px;\n    margin-bottom: 60px;\n    background-image: url(\"/assets/banner.png\");\n\n}\n\n.button-group {\n    display: flex;\n    float: right;\n    margin-bottom: 20px;\n}\n\n.button-group {\n    margin-right: auto;\n}\n\nfooter {\n    padding: 40px;\n    color: #999;\n    text-align: center;\n    border-top: .05rem solid #e5e5e5;\n}\n\n.direction {\n    display: flex;\n    flex-direction: row;\n}\n\n.container {\n    width: 75% !important;\n}\n\n.bg-none {\n    background-color: #2B3E50 !important;\n    border: none;\n}\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"container\">\n    <h4>Cocktail Recipes</h4>\n    <p>There's a drink for every mood or occasion. Find your favorite cocktail recipes below. Or think outside the glass\n      and try a brand new drink. Your new favorite could be a shake or stir away. </p>\n  </div>\n</div>\n<!-- PAGE CONATINER -->\n<div class=\"container\">\n  <!-- LOADING SPINNER -->\n  <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center loader-margin spinner-border text-primary\" style=\"width: 5rem; height: 5rem;\">\n    <div *ngIf=\"!loaded\" class=\"sr-only\"></div>\n  </div>\n  <!-- PAGE CONTENT -->\n  <div *ngIf=\"loaded\">\n    <!-- DRINKS BY SPIRIT -->\n    <div class=\"row bottom-buffer\">\n      <h2 class=\"drink-center mb-5\"><strong>RECIPES BY SPIRIT</strong></h2>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/gin\">\n              <img class=\"card-img-top\"\n                src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/rhhwmp1493067619.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>GIN</strong></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/tequila\">\n              <img class=\"card-img-top\"\n                src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/xxyywq1454511117.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>TEQUILA</strong></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/vodka\">\n              <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//ttsvwy1472668781.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>VODKA</strong></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/champagne\">\n              <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//eaag491504367543.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>CHAMPAGNE</strong></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/bourbon\">\n              <img class=\"card-img-top\"\n                src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/uwvyts1483387934.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>BOURBON</strong></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-4\">\n          <div class=\"card bg-none transform-on-hover\">\n            <a class=\"lightbox\" routerLink=\"category/rum\">\n              <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//1sqm7n1485620312.jpg\">\n            </a>\n            <div class=\"card-body\">\n              <h6 class=\"drink-center\"><strong>RUM</strong></h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!-- NEWEST RECIPES -->\n    <div class=\"row bottom-buffer\">\n      <h2 class=\"drink-center mb-2\"><strong>Newest Recipes</strong></h2>\n\n      <div id=\"slide\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"button-group\">\n          <a href=\"#slide\" class=\"btn btn-outline-secondary prev\" data-slide=\"prev\"><i\n              class=\"fas fa-chevron-left\"></i></a>\n          <a href=\"#slide\" class=\"btn btn-outline-secondary next\" data-slide=\"next\"><i\n              class=\"fas fa-chevron-right\"></i></a>\n        </div>\n\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <div class=\"row\">\n              <div *ngFor=\"let drink of newestDrinks  | slice:0:3;\" class=\"col-lg-4\">\n                <div class=\"card bg-primary text-white mb-3\">\n                  <div class=\"card-header\">{{drink.strDrink}}</div>\n                  <a routerLink=\"drink/{{ drink.idDrink }}\">\n                    <img (click)=\"chooseDrink(drink.idDrink)\" style=\"width: 100%; display: block;\"\n                      src=\"{{drink.strDrinkThumb}}\" alt=\"Card image\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item \">\n            <div class=\"row\">\n              <div *ngFor=\"let drink of newestDrinks  | slice:4:7;\" class=\"col-sm-12 col-lg-4\">\n                <div class=\"card bg-primary text-white mb-3\">\n                  <div class=\"card-header\">{{drink.strDrink}}</div>\n                  <a routerLink=\"drink/{{ drink.idDrink }}\">\n                    <img (click)=\"chooseDrink(drink.idDrink)\" style=\"width: 100%; display: block;\"\n                      src=\"{{drink.strDrinkThumb}}\" alt=\"Card image\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item \">\n            <div class=\"row\">\n              <div *ngFor=\"let drink of newestDrinks  | slice:7:10;\" class=\"col-sm-12 col-lg-4\">\n                <div class=\"card bg-primary text-white mb-3\">\n                  <div class=\"card-header\">{{drink.strDrink}}</div>\n                  <a routerLink=\"drink/{{ drink.idDrink }}\">\n                    <img (click)=\"chooseDrink(drink.idDrink)\" style=\"width: 100%; display: block;\"\n                      src=\"{{drink.strDrinkThumb}}\" alt=\"Card image\">\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- POPULAR DRINKS -->\n    <h2 class=\"drink-center mb-5\"><strong>Popular Drinks</strong></h2>\n\n    <div class=\"row bottom-buffer\">\n\n      <div *ngFor=\"let drink of drinks\" class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none border-0 transform-on-hover\">\n          <a class=\"lightbox\" routerLink=\"drink/{{ drink.idDrink }}\">\n            <img (click)=\"chooseDrink(drink.idDrink)\" class=\"card-img-top\" src=\"{{ drink.strDrinkThumb }}\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>{{ drink.strDrink }}</strong></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div> <!-- END OF PAGE CONTAINER -->\n\n<footer>\n  <p>Website built by <a href=\"https://seanromerokelly.com/\">Sean Romero Kelly</a></p>\n  <p>\n    <a href=\"#\">Back to top</a>\n  </p>\n</footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(recipeService) {
        this.recipeService = recipeService;
        this.chosenDrink = 'test';
        this.loaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPopularDrinks()];
                    case 1:
                        _a.sent();
                        this.getGinDrinks();
                        console.log(this.chosenDrink);
                        this.getNewestDrinks();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getPopularDrinks = function () {
        var _this = this;
        this.recipeService.getPopular().subscribe(function (drinks) {
            _this.drinks = drinks.drinks;
            _this.loaded = true;
        });
    };
    HomeComponent.prototype.getNewestDrinks = function () {
        var _this = this;
        this.recipeService.getNewestDrinks().subscribe(function (drinks) {
            _this.newestDrinks = drinks.drinks;
            console.log(drinks);
            _this.loaded = true;
        });
    };
    HomeComponent.prototype.getGinDrinks = function () {
        var _this = this;
        this.recipeService.getDrinksByIngredient('gin').subscribe(function (ginDrinks) {
            _this.ginDrinks = ginDrinks;
            console.log(ginDrinks);
        });
    };
    HomeComponent.prototype.chooseDrink = function (drinkId) {
        var _this = this;
        console.log(drinkId);
        this.recipeService.getDrinkById(drinkId).subscribe(function (drink) {
            _this.chosenDrink = drink.drinks[0];
        });
        console.log(this.chosenDrink);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.logo {\n    width: 220px;\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\">\n    <a routerLink=\"/\" class=\"navbar-brand\"><img class=\"logo\" src=\"assets/logo.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"spirits\">Spirits</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"non-alcoholic\">Non Alcoholic</a>\n          </li>\n        \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"random\">Random Drink</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/non-alcoholic/non-alcoholic.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/non-alcoholic/non-alcoholic.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n    font-size: 14px;\n    margin: 5px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/non-alcoholic/non-alcoholic.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/non-alcoholic/non-alcoholic.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <a (click)=\"backClick()\" class=\"btn btn-light btn-sm mb-3\">Back</a>\n  <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center loader-margin spinner-border text-primary\" style=\"width: 5rem; height: 5rem;\">\n    <div *ngIf=\"!loaded\" class=\"sr-only\"></div>\n  </div>\n  <h2 class=\"drink-center mb-5\"><strong>Non Alcoholic Drinks</strong></h2>\n\n  <div *ngIf=\"loaded\">\n    <div class=\"row\">\n      <div *ngFor=\"let drink of fullDrinks; let i = index\" class=\"col-lg-6\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <a (click)=\"changePage(drink.idDrink)\">\n                <img class=\"card-img-top\" src=\"{{drink.strDrinkThumb}}\" alt=\"Card image cap\">\n              </a>\n            </div>\n            <div class=\"col-lg-4 card-body\">\n              <h5>{{ drink.strDrink }}</h5>\n              <span class=\"badge badge-pill badge-primary\">{{ drink.strAlcoholic }}</span>\n              <span *ngIf=\" drink.strIngredient2 == 'Gin'\" class=\"badge badge-pill badge-primary\">{{ drink.strIngredient2 }}</span>\n              <span class=\"badge badge-pill badge-primary\">{{ drink.strCategory }}</span>\n            </div>\n          </div>\n        </div>\n        <br>\n      </div>\n      <div class=\"col-lg-6 right-style\" *ngIf=\"i%2 == 0\">\n        <div class=\"card card-body\">\n          <img class=\"card-img-top\" src=\"{{drink.strDrinkThumb}}\" alt=\"Card image cap\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/non-alcoholic/non-alcoholic.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/non-alcoholic/non-alcoholic.component.ts ***!
  \*********************************************************************/
/*! exports provided: NonAlcoholicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonAlcoholicComponent", function() { return NonAlcoholicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NonAlcoholicComponent = /** @class */ (function () {
    function NonAlcoholicComponent(recipeService, location) {
        this.recipeService = recipeService;
        this.location = location;
        this.loaded = false;
        this.drinkIds = [];
        this.fullDrinks = [];
    }
    NonAlcoholicComponent.prototype.ngOnInit = function () {
        this.getNonAlcoholicDrinks();
    };
    NonAlcoholicComponent.prototype.getNonAlcoholicDrinks = function () {
        var _this = this;
        this.recipeService.getNonAlcoholicDrinks().subscribe(function (drinks) {
            _this.nonAlcoholicDrinks = drinks.drinks;
            _this.loaded = true;
            console.log(_this.nonAlcoholicDrinks);
            for (var i = 0; i < _this.nonAlcoholicDrinks.length; i++) {
                _this.drinkIds.push(_this.nonAlcoholicDrinks[i].idDrink);
            }
            console.log(_this.drinkIds);
            for (var i = 0; i < _this.drinkIds.length; i++) {
                _this.recipeService.getDrinkById(_this.drinkIds[i]).subscribe(function (drink) {
                    _this.fullDrinks.push(drink.drinks[0]);
                });
            }
            console.log(_this.fullDrinks);
        });
    };
    NonAlcoholicComponent.prototype.backClick = function () {
        this.location.back();
    };
    NonAlcoholicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-non-alcoholic',
            template: __webpack_require__(/*! ./non-alcoholic.component.html */ "./src/app/components/non-alcoholic/non-alcoholic.component.html"),
            styles: [__webpack_require__(/*! ./non-alcoholic.component.css */ "./src/app/components/non-alcoholic/non-alcoholic.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], NonAlcoholicComponent);
    return NonAlcoholicComponent;
}());



/***/ }),

/***/ "./src/app/components/random/random.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/random/random.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/random/random.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/random/random.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <a (click)=\"refreshPage()\" class=\"btn btn-light btn-sm mb-3 top-buffer\">New Recipe</a>\n\n  <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center loader-margin spinner-border text-primary\" style=\"width: 5rem; height: 5rem;\">\n    <div *ngIf=\"!loaded\" class=\"sr-only\"></div>\n  </div>\n  <div *ngIf=\"loaded\" class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card mb-3\">\n        <h3 class=\"card-header\">{{ drink.strDrink }}</h3>\n\n        <img style=\"height: 500px; width: 100%; display: block;\" src=\"{{ drink.strDrinkThumb }}\" alt=\"drink image\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">INGREDIENTS IN THE {{ drink.strDrink | uppercase }}</h5>\n\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient1 !== null\">\n              <span>{{ drink.strMeasure1 }}</span>&nbsp;<span>{{ drink.strIngredient1 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient2 !== null\">\n              <span>{{ drink.strMeasure2 }}</span>&nbsp;<span>{{ drink.strIngredient2 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient3 !== null\">\n              <span>{{ drink.strMeasure3 }}</span>&nbsp;<span>{{ drink.strIngredient3 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient4 !== null\">\n              <span>{{ drink.strMeasure4 }}</span>&nbsp; <span>{{ drink.strIngredient4 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient5 !== null\">\n              <span>{{ drink.strMeasure5 }}</span>&nbsp; <span>{{ drink.strIngredient5 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient6 !== null\">\n              <span>{{ drink.strMeasure6 }}</span>&nbsp; <span>{{ drink.strIngredient6 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient7 !== null\">\n              <span>{{ drink.strMeasure7 }}</span>&nbsp; <span>{{ drink.strIngredient7 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient8 !== null\">\n              <span>{{ drink.strMeasure8 }}</span>&nbsp; <span>{{ drink.strIngredient8 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient9 !== null\">\n              <span>{{ drink.strMeasure9 }}</span>&nbsp; <span>{{ drink.strIngredient9 }}</span>\n            </li>\n            <li *ngIf=\"drink.strIngredient10 !== null\">\n              <span>{{ drink.strMeasure10 }}</span>&nbsp; <span>{{ drink.strIngredient10 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient11 !== null\">\n              <span>{{ drink.strMeasure11 }}</span>&nbsp; <span>{{ drink.strIngredient11 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient12 !== null\">\n              <span>{{ drink.strMeasure12 }}</span>&nbsp; <span>{{ drink.strIngredient12 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient13 !== null\">\n              <span>{{ drink.strMeasure13 }}</span>&nbsp; <span>{{ drink.strIngredient13 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient14 !== null\">\n              <span>{{ drink.strMeasure14 }}</span>&nbsp; <span>{{ drink.strIngredient14 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient15 !== null\">\n              <span>{{ drink.strMeasure15 }}</span>&nbsp; <span>{{ drink.strIngredient15 }}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-body\">\n          <h5>HOW TO MAKE THE {{ drink.strDrink | uppercase }}</h5>\n          <p>{{ drink.strInstructions }}</p>\n        </div>\n        <div class=\"card-footer text-muted\">\n          {{ drink.dateModified | date }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/random/random.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/random/random.component.ts ***!
  \*******************************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomComponent = /** @class */ (function () {
    function RandomComponent(recipeService, location) {
        this.recipeService = recipeService;
        this.location = location;
        this.loaded = false;
    }
    RandomComponent.prototype.ngOnInit = function () {
        this.getRandomDrink();
    };
    RandomComponent.prototype.getRandomDrink = function () {
        var _this = this;
        this.recipeService.getRandomDrink().subscribe(function (drink) {
            _this.drink = drink.drinks[0];
            var cocktail = _this.drink;
            Object.keys(cocktail).forEach(function (item) {
                if (cocktail[item] == '' || cocktail[item] == ' ') {
                    cocktail[item] = null;
                }
            });
            _this.loaded = true;
            console.log(_this.drink);
        });
    };
    RandomComponent.prototype.backClick = function () {
        this.location.back();
    };
    RandomComponent.prototype.refreshPage = function () {
        location.reload();
    };
    RandomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-random',
            template: __webpack_require__(/*! ./random.component.html */ "./src/app/components/random/random.component.html"),
            styles: [__webpack_require__(/*! ./random.component.css */ "./src/app/components/random/random.component.css")]
        }),
        __metadata("design:paramtypes", [_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], RandomComponent);
    return RandomComponent;
}());



/***/ }),

/***/ "./src/app/components/recipe-page/recipe-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/recipe-page/recipe-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .top-buffer {\n    margin-top: 20px;\n} */"

/***/ }),

/***/ "./src/app/components/recipe-page/recipe-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/recipe-page/recipe-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <a (click)=\"backClick()\" class=\"btn btn-light btn-sm mb-3 top-buffer\">Back</a>\n  <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center loader-margin spinner-border text-primary\" style=\"width: 5rem; height: 5rem;\">\n    <div *ngIf=\"!loaded\" class=\"sr-only\"></div>\n  </div>\n  <div *ngIf=\"loaded\" class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"card mb-3\">\n        <h3 class=\"card-header\">{{ drink.strDrink }}</h3>\n\n        <img style=\"height: 500px; width: 100%; display: block;\" src=\"{{ drink.strDrinkThumb }}\" alt=\"drink image\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">INGREDIENTS IN THE {{ drink.strDrink | uppercase }}</h5>\n\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient1 !== null\">\n              <span>{{ drink.strMeasure1 }}</span>&nbsp;<span>{{ drink.strIngredient1 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient2 !== null\">\n              <span>{{ drink.strMeasure2 }}</span>&nbsp;<span>{{ drink.strIngredient2 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient3 !== null\">\n              <span>{{ drink.strMeasure3 }}</span>&nbsp;<span>{{ drink.strIngredient3 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient4 !== null\">\n              <span>{{ drink.strMeasure4 }}</span>&nbsp; <span>{{ drink.strIngredient4 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient5 !== null\">\n              <span>{{ drink.strMeasure5 }}</span>&nbsp; <span>{{ drink.strIngredient5 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient6 !== null\">\n              <span>{{ drink.strMeasure6 }}</span>&nbsp; <span>{{ drink.strIngredient6 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient7 !== null\">\n              <span>{{ drink.strMeasure7 }}</span>&nbsp; <span>{{ drink.strIngredient7 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient8 !== null\">\n              <span>{{ drink.strMeasure8 }}</span>&nbsp; <span>{{ drink.strIngredient8 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient9 !== null\">\n              <span>{{ drink.strMeasure9 }}</span>&nbsp; <span>{{ drink.strIngredient9 }}</span>\n            </li>\n            <li *ngIf=\"drink.strIngredient10 !== null\">\n              <span>{{ drink.strMeasure10 }}</span>&nbsp; <span>{{ drink.strIngredient10 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient11 !== null\">\n              <span>{{ drink.strMeasure11 }}</span>&nbsp; <span>{{ drink.strIngredient11 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient12 !== null\">\n              <span>{{ drink.strMeasure12 }}</span>&nbsp; <span>{{ drink.strIngredient12 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient13 !== null\">\n              <span>{{ drink.strMeasure13 }}</span>&nbsp; <span>{{ drink.strIngredient13 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient14 !== null\">\n              <span>{{ drink.strMeasure14 }}</span>&nbsp; <span>{{ drink.strIngredient14 }}</span>\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"drink.strIngredient15 !== null\">\n              <span>{{ drink.strMeasure15 }}</span>&nbsp; <span>{{ drink.strIngredient15 }}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-body\">\n          <h5>HOW TO MAKE THE {{ drink.strDrink | uppercase }}</h5>\n          <p>{{ drink.strInstructions }}</p>\n        </div>\n        <div class=\"card-footer text-muted\">\n          {{ drink.dateModified | date }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/recipe-page/recipe-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/recipe-page/recipe-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecipePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipePageComponent", function() { return RecipePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/recipe.service */ "./src/app/services/recipe.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipePageComponent = /** @class */ (function () {
    function RecipePageComponent(route, recipeService, location) {
        this.route = route;
        this.recipeService = recipeService;
        this.location = location;
        this.loaded = false;
        this.drink = '';
    }
    RecipePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.recipeService.getDrinkById(id).subscribe(function (drink) {
            _this.drink = drink.drinks[0];
            _this.instructions = _this.drink.strInstructions.split(".");
            _this.loaded = true;
            var recipe = _this.drink;
            Object.keys(recipe).forEach(function (item) {
                if (recipe[item] == '' || recipe[item] == ' ') {
                    recipe[item] = null;
                }
            });
            console.log(_this.drink);
        });
    };
    RecipePageComponent.prototype.backClick = function () {
        this.location.back();
    };
    RecipePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-page',
            template: __webpack_require__(/*! ./recipe-page.component.html */ "./src/app/components/recipe-page/recipe-page.component.html"),
            styles: [__webpack_require__(/*! ./recipe-page.component.css */ "./src/app/components/recipe-page/recipe-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], RecipePageComponent);
    return RecipePageComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-results.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-results works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/search-results/search-results.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-results/search-results.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
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

var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent() {
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SearchResultsComponent.prototype, "searchQuery", void 0);
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/components/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/components/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/spirit-page/spirit-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/spirit-page/spirit-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drink-center {\n    text-align: center;\n    margin: 0 auto;\n    text-transform: uppercase;\n}\n\n.bg-none {\n    background-color: #2B3E50 !important;\n    border: none;\n}"

/***/ }),

/***/ "./src/app/components/spirit-page/spirit-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/spirit-page/spirit-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- <div *ngIf=\"!loaded\" class=\"d-flex justify-content-center loader-margin spinner-border text-primary\" style=\"width: 5rem; height: 5rem;\">\n    <div *ngIf=\"!loaded\" class=\"sr-only\"></div>\n  </div> -->\n  <br>\n  <a (click)=\"backClick()\" class=\"btn btn-light btn-sm mb-3 top-buffer\">Back</a>\n  <div class=\"row bottom-buffer\">\n    <h2 class=\"drink-center mb-5\"><strong>RECIPES BY SPIRIT</strong></h2>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none\">\n          <a class=\"lightbox\" (click)=\"changePage('gin')\">\n            <img class=\"card-img-top\" src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/rhhwmp1493067619.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 [title]=\"spiritName\" class=\"drink-center\"  #name><strong>GIN</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('tequila')\">\n            <img class=\"card-img-top\" src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/xxyywq1454511117.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>TEQUILA</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('vodka')\">\n            <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//ttsvwy1472668781.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>VODKA</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('champagne')\">\n            <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//eaag491504367543.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>CHAMPAGNE</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('bourbon')\">\n            <img class=\"card-img-top\" src=\"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/uwvyts1483387934.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>BOURBON</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('rum')\">\n            <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com//images//media//drink//1sqm7n1485620312.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>RUM</strong></h6>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"card bg-none transform-on-hover\">\n          <a class=\"lightbox\" (click)=\"changePage('whiskey')\">\n            <img class=\"card-img-top\" src=\"https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg\">\n          </a>\n          <div class=\"card-body\">\n            <h6 class=\"drink-center\"><strong>Whiskey</strong></h6>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/spirit-page/spirit-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/spirit-page/spirit-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpiritPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiritPageComponent", function() { return SpiritPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpiritPageComponent = /** @class */ (function () {
    function SpiritPageComponent(location, router) {
        this.location = location;
        this.router = router;
        this.spiritName = "whisky";
    }
    SpiritPageComponent.prototype.ngOnInit = function () {
    };
    SpiritPageComponent.prototype.backClick = function () {
        this.location.back();
    };
    SpiritPageComponent.prototype.changePage = function (spirit) {
        this.spiritName = spirit;
        console.log(this.spiritName);
        this.router.navigate(["category/" + this.spiritName]);
    };
    SpiritPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spirit-page',
            template: __webpack_require__(/*! ./spirit-page.component.html */ "./src/app/components/spirit-page/spirit-page.component.html"),
            styles: [__webpack_require__(/*! ./spirit-page.component.css */ "./src/app/components/spirit-page/spirit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SpiritPageComponent);
    return SpiritPageComponent;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.postUrl = 'https://www.thecocktaildb.com/api/json/v2/8673533/';
    }
    RecipeService.prototype.setPopular = function (recipe) {
        this.recipes.next(recipe);
    };
    RecipeService.prototype.getPopular = function () {
        var url = this.postUrl + "/popular.php";
        return this.http.get(url);
    };
    RecipeService.prototype.getNewestDrinks = function () {
        var url = this.postUrl + "/recent.php";
        return this.http.get(url);
    };
    RecipeService.prototype.getDrinkById = function (drinkId) {
        var url = this.postUrl + "/lookup.php?i=" + drinkId;
        return this.http.get(url);
    };
    RecipeService.prototype.getDrinksByIngredient = function (ingredient) {
        var url = this.postUrl + "/filter.php?i=" + ingredient;
        return this.http.get(url);
    };
    RecipeService.prototype.getNonAlcoholicDrinks = function () {
        var url = this.postUrl + "/filter.php?a=Non_Alcoholic";
        return this.http.get(url);
    };
    RecipeService.prototype.getRandomDrink = function () {
        var url = this.postUrl + "/random.php";
        return this.http.get(url);
    };
    RecipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RecipeService);
    return RecipeService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanromero/Documents/web-projects/personal-projects/drink-recipe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map