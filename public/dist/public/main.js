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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/dash-board/dash-board.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _leadr_board_leadr_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leadr-board/leadr-board.component */ "./src/app/leadr-board/leadr-board.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', pathMatch: 'full', redirectTo: "home" },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashBoard', component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'board', component: _leadr_board_leadr_board_component__WEBPACK_IMPORTED_MODULE_6__["LeadrBoardComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/dash-board/dash-board.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _leadr_board_leadr_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leadr-board/leadr-board.component */ "./src/app/leadr-board/leadr-board.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var config = { url: 'http://localhost:8000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_9__["DashBoardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _leadr_board_leadr_board_component__WEBPACK_IMPORTED_MODULE_12__["LeadrBoardComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng_socket_io__WEBPACK_IMPORTED_MODULE_5__["SocketIoModule"].forRoot(config),
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dash-board/dash-board.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dash-board/dash-board.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin-right: 5px;\n}\n\n /* TITLE AND NAVIGATION */\n\n .title-bar {\n    text-align: center;\n}\n\n .wrapper {\n    width: 98%;\n}\n\n /* TABLE */\n\n .table {\n    width: 100%;\n    height: 400px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    white-space: nowrap;\n    text-align: center;\n    margin-left: 15px;\n}\n\n .score {\n    width: 10%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n .chat-container {\n    width: 14%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n .game-list {\n    width: 100%;\n    border-top: 1px solid #5A6268 !important;\n    margin-top: 10px;\n}\n\n .game-list tr,\ntd,\nth {\n    border: 1px solid #5A6268;\n}\n\n .game-list th {\n    background-color: #cad7e270;\n}\n\n i{\n    color: #5A6268;\n}"

/***/ }),

/***/ "./src/app/dash-board/dash-board.component.html":
/*!******************************************************!*\
  !*** ./src/app/dash-board/dash-board.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"wrapper\">\n\n        <div class=\"title-bar\">\n            <img src=\"/assets/img/logo.png\" width=\"350px\">\n            <div class=\"navigation\">\n                <h2>Welcome: {{currentUser.first_name}}</h2>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"createGame(currentUser)\"  >Play Game</button>\n                <!-- <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/board']\">Leaderboard</button> -->\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"logOut()\" >Log Out</button>\n                <br>\n                <br>\n            </div>\n        </div>\n\n        <div class=\"table\">\n            <h3>Game List</h3>\n\n            <table class=\"game-list\">\n                <tr>\n                    <th>Game Name</th>\n                    <th>Created By</th>\n                    <th>Players</th>\n                    <th>Password?</th>\n                    <th>Join</th>\n                </tr>\n\n              \n                    <tr>\n                        <td>Best Game Ever!</td>\n                        <td>Nat</td>\n                        <td>1/2</td>\n                        <td>\n                            <i class=\"fas fa-lock-open\"></i>\n                        </td>\n                        <td>\n                            <button type=\"button\" class=\"btn btn-secondary\">Join Game</button>\n                        </td>\n                    </tr>\n              \n\n                \n            </table>\n\n        </div>\n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/dash-board/dash-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dash-board/dash-board.component.ts ***!
  \****************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(_httpService, _route, _socket) {
        this._httpService = _httpService;
        this._route = _route;
        this._socket = _socket;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs = this._httpService.isLogged();
        obs.subscribe(function (data) {
            _this.currentUser = JSON.parse(data['_body']).user;
            _this._socket.emit('new_user', _this.currentUser);
            _this._socket.on('loggedUsers', function (data) {
                console.log("Logged in users");
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var user = data_1[_i];
                    console.log(user);
                }
            });
        });
    };
    DashBoardComponent.prototype.logOut = function () {
        var _this = this;
        var obs = this._httpService.logOut();
        obs.subscribe(function (data) {
            // console.log(data)
            // console.log("clicked on log out")
            _this._route.navigate(['home']);
        });
    };
    DashBoardComponent.prototype.createGame = function (user) {
        console.log("clicked on create game", user);
        this._route.navigate(['/game'], user);
    };
    DashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__(/*! ./dash-board.component.html */ "./src/app/dash-board/dash-board.component.html"),
            styles: [__webpack_require__(/*! ./dash-board.component.css */ "./src/app/dash-board/dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-bar{\n    text-align: center;\n}\n\n.wrapper{\n    width: 98%;\n}\n\n/* TABLE */\n\n.table{\n    width: 80%;\n    height: 300px;\n    background-color: #cad7e2d0;;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n    overflow-x: scroll;\n    white-space: nowrap;\n    text-align: center;\n    margin: 10px;\n}\n\n.score{\n    width: 15%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n    margin: 10px;\n    display: none;\n}\n\n.chat-container{\n    width: 14%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.chat-inner{\n    height: 200px;\n    overflow-y: scroll;\n}\n\n.opponent-hand{\n    background-color: #a3aeb770;\n    padding: 5px;\n    margin: 5px;\n    text-align: center;\n    border-radius: 15px;\n}\n\n.opponent-hand .domino{\n    border-radius: 3px;\n    margin-right: 3px;\n}\n\n.opponent-hand .domino:hover{\n    box-shadow: none;\n    cursor: default;\n}\n\n.my-hand{\n    background-color: #a3aeb770;\n    padding: 5px;\n    margin: 5px;\n    text-align: center;\n    border-radius: 15px;\n}\n\n.my-hand .domino{\n    margin-right: 5px;\n}\n\n.my-hand .domino:hover{\n    box-shadow: 0px 0px 3px 3px rgba(118,209,52,1);\n    cursor: pointer;\n    margin-top: -15px;\n}\n\n/* BONE CONTAINERS */\n\n.domino{\n    padding: 0px 3px;\n    background-color: #5A6268;\n    border-radius: 10px;\n    display: inline-block;\n}\n\n.vertical i:first-child{\n    display: block;\n    margin-bottom: -1px;\n}\n\n.horizontal i:first-child{\n    margin-right: 5px;\n}\n\n.table .domino{\n    margin-top: 10%;\n}\n\n/* DICE/NUMBER DISPLAY */\n\n.fas{\n    color: #fff;\n    margin: 0px;\n}\n\n.fa-dice-one{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#b42c2c 17%,#b42c2c 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\n.fa-dice-two{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#da882b 17%,#da882b 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\n.fa-dice-three{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#ffd000 17%,#ffd000 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\n.fa-dice-four{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#60b90b 17%,#60b90b 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\n.fa-dice-five{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#207cca 17%,#207cca 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\n.fa-dice-six{\n    border-radius: 15px;\n    background: #5A6268;\n    background: linear-gradient(to bottom,  #5A6268 15%,#a820ca 17%,#a820ca 83%,#5A6268 85%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5A6268', endColorstr='#5A6268',GradientType=0 );\n\n}\n\nbutton{\n    margin-right: 5px;\n}"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"wrapper\">\n\n    <div class=\"title-bar\">\n        <img src=\"/assets/img/logo.png\" width=\"350px\">\n        <div class=\"navigation\">\n            <h2>Welcome: {{currentUser.first_name}}</h2>\n            <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/dashBoard']\">Leave Game</button>\n\n            <button type=\"button_\" class=\"btn btn-danger\" [routerLink]=\"['/home']\">Log Out</button>\n            <br>\n            <br>\n        </div>\n    </div>\n\n    <div class=\"opponent-hand\">\n        <div *ngFor=\"let n of opHand\" class=\"domino vertical\">\n\n            <i  class=\"fas fa-square fa-2x head\"></i>\n            <i class=\"fas fa-square fa-2x tail\"></i>\n        </div>\n       \n    </div>\n\n    \n\n    <div class=\"table\"> \n\n\n\n            <div *ngFor='let bone of table'  class=\"domino horizontal\">\n                    <i *ngIf=\"bone['head'] == 0\" class=\"fas fa-square fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 1 \"  class=\"fas fa-dice-one fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 2 \"  class=\"fas fa-dice-two fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 3 \"  class=\"fas fa-dice-three fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 4 \"  class=\"fas fa-dice-four fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 5 \"  class=\"fas fa-dice-five fa-3x head\"></i>\n                    <i  *ngIf=\"bone['head']== 6 \"  class=\"fas fa-dice-six fa-3x head\"></i>\n                    \n                    <i  *ngIf=\"bone['tail'] == 0\" class=\"fas fa-square fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 1 \"  class=\"fas fa-dice-one fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 2 \"  class=\"fas fa-dice-two fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 3 \"  class=\"fas fa-dice-three fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 4 \"  class=\"fas fa-dice-four fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 5 \"  class=\"fas fa-dice-five fa-3x tail\"></i>\n                    <i  *ngIf=\"bone['tail']== 6 \"  class=\"fas fa-dice-six fa-3x tail\"></i>\n                    \n                    \n                </div>\n\n    </div>\n   \n   \n\n\n\n    <div  class=\"my-hand\">\n        \n        <div *ngFor='let bone of hand'  class=\"domino vertical\" (click)='playBone(bone)' >\n            <i *ngIf=\"bone['head'] == 0\" class=\"fas fa-square fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 1 \"  class=\"fas fa-dice-one fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 2 \"  class=\"fas fa-dice-two fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 3 \"  class=\"fas fa-dice-three fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 4 \"  class=\"fas fa-dice-four fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 5 \"  class=\"fas fa-dice-five fa-3x head\"></i>\n            <i  *ngIf=\"bone['head']== 6 \"  class=\"fas fa-dice-six fa-3x head\"></i>\n            \n            <i  *ngIf=\"bone['tail'] == 0\" class=\"fas fa-square fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 1 \"  class=\"fas fa-dice-one fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 2 \"  class=\"fas fa-dice-two fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 3 \"  class=\"fas fa-dice-three fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 4 \"  class=\"fas fa-dice-four fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 5 \"  class=\"fas fa-dice-five fa-3x tail\"></i>\n            <i  *ngIf=\"bone['tail']== 6 \"  class=\"fas fa-dice-six fa-3x tail\"></i>\n            \n            \n            \n            \n        </div>\n        \n        \n            <!-- <div class=\"chat-container\">\n                <h4>Chat</h4>\n                <div class=\"chat-inner\">\n                    <p>Player One: Hey!</p>\n                    <p>Player Two: What's up?</p>\n                    <p>Player One: Not much. But I'm going to beat you at dominos.</p>\n                    <p>Player Two: Woah! Not a chance. I am a master of this game.</p>\n                </div>\n            \n            \n            </div>\n             -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(_httpService, _socket, _route) {
        this._httpService = _httpService;
        this._socket = _socket;
        this._route = _route;
        this.table = [];
        this.isTurn = true;
        this.points = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs = this._httpService.isLogged();
        obs.subscribe(function (data) {
            // console.log('in game comp', JSON.parse(data['_body']).user)
            _this.currentUser = JSON.parse(data['_body']).user;
            // this.currentUser=JSON.parse(data['_body']).user['first_name']
            // console.log("the user in game", this.currentUser)
            _this._socket.emit('new_game', _this.currentUser);
        });
        this._socket.on('load_user', function (user) {
            // console.log("printing user name",user.first_name)
            // console.log("printing user hand", user.hand)
            _this.hand = user.hand;
            _this._socket.emit('userHand', _this.hand);
            // console.log("the user in game after the socket update", this.hand)
            // console.log("printing currentUser hand",this.currentUser)
        });
        this._socket.on('opHand', function (data) {
            _this.opHand = data;
            // console.log('other user hand',this.opHand)
        });
        this._socket.on('newTable', function (newTable) {
            if (_this.table.length > 0) {
                _this.isTurn = false;
            }
            _this.table = newTable;
            _this._socket.emit('userHand', _this.hand);
            _this._socket.on('opHand', function (data) {
                _this.opHand = data;
                // console.log('other user hand',this.opHand)
            });
            var can_play = [];
            can_play.push(_this.table[0]['head']);
            can_play.push(_this.table[_this.table.length - 1]['tail']);
            for (var _i = 0, _a = _this.hand; _i < _a.length; _i++) {
                var h = _a[_i];
                if (h['head'] == can_play[0] || h['head'] == can_play[1]) {
                    console.log('found match in hand', h['head']);
                    _this.isTurn = true;
                    break;
                }
                if (h['tail'] == can_play[0] || h['tail'] == can_play[1]) {
                    console.log('found match in hand', h['tail']);
                    _this.isTurn = true;
                    break;
                }
            }
            console.log('cannot find bone looping ', _this.isTurn);
            if (!_this.isTurn) {
                _this.isTurn = true;
                _this.getNewBone();
            }
        });
    };
    GameComponent.prototype.getNewBone = function () {
        var _this = this;
        if (this.isTurn) {
            this._socket.emit('drawing one bone', this.hand);
            this._socket.on("empty deck", function (data) {
                console.log("deck is empty ");
                _this.skippingTurn();
            });
            this._socket.on('receiving new hand', function (data) {
                console.log("new bone received");
                _this.hand = data;
                if (_this.canPlay()) {
                    console.log('can play stay in this user ');
                    return false;
                }
                // else{
                //   this.skippingTurn()
                // }
            });
        }
    };
    GameComponent.prototype.skippingTurn = function () {
        console.log("you don't have a bone to play draw one!  skipping turn");
        this.isTurn = false;
        this._socket.emit('table', this.table);
    };
    GameComponent.prototype.canPlay = function () {
        var can_play = [];
        can_play.push(this.table[0]['head']);
        can_play.push(this.table[this.table.length - 1]['tail']);
        console.log("inside can play table", can_play);
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var h = _a[_i];
            if (h['head'] == can_play[0] || h['head'] == can_play[1]) {
                console.log('found match in hand', h['head']);
                this.isTurn = true;
                return;
            }
            if (h['tail'] == can_play[0] || h['tail'] == can_play[1]) {
                console.log('found match in hand', h['tail']);
                this.isTurn = true;
                return;
            }
        }
        console.log('can play returns ', this.isTurn);
        return;
        // if(!this.isTurn)
        // {
        //   console.log('getting new bone again')
        //   this.getNewBone();
        // }
    };
    GameComponent.prototype.playBone = function (bone) {
        var _this = this;
        if (this.table.length == 0) {
            // console.log("empty table")
            this.table.push(bone);
            for (var i = 0; i < this.hand.length; i++) {
                if (this.hand[i]['head'] == bone.head && this.hand[i]['tail'] == bone.tail) {
                    // console.log("index at ", i)
                    this.hand.splice(i, 1);
                }
            }
            this.isTurn = false;
            this._socket.emit('table', this.table);
        }
        if (this.isTurn && this.table.length > 0) {
            var can_play = [];
            can_play.push(this.table[0]['head']);
            can_play.push(this.table[this.table.length - 1]['tail']);
            if (bone.head == can_play[1]) {
                this.table.push(bone);
            }
            else if (bone.tail == can_play[1]) {
                var temp = bone.tail;
                bone.tail = bone.head;
                bone.head = temp;
                this.table.push(bone);
            }
            else if (bone.tail == can_play[0]) {
                this.table.unshift(bone);
            }
            else if (bone.head == can_play[0]) {
                var temp = bone.tail;
                bone.tail = bone.head;
                bone.head = temp;
                this.table.unshift(bone);
            }
            for (var i = 0; i < this.hand.length; i++) {
                if (this.hand[i]['head'] == bone.head && this.hand[i]['tail'] == bone.tail) {
                    // console.log("index at ", i)
                    this.hand.splice(i, 1);
                }
            }
            this._socket.emit('userHand', this.hand);
            this._socket.on('opHand', function (data) {
                _this.opHand = data;
                // console.log('other user hand',this.opHand)
            });
            if (this.hand.length == 0) {
                console.log("this player wins this many points", this.opHand);
                // for(var j=0;j<this.opHand.length;j++){
                //   this.points+=this.opHand[j]['points']
                //   console.log("this.opHand[j]['points']",this.opHand[j]['points'])
                //   console.log("hand points ",this.points)
                // }
                // console.log("total points:",this.points)
                return false;
            }
            this.isTurn = false;
            this._socket.emit('table', this.table);
        }
        else {
            console.log("check your hand");
        }
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* TITLE AND NAVIGATION */\n.title-bar {\n    text-align: center;\n}\n.wrapper {\n    width: 98%;\n}\nbody {\n    background-image: url('http://i68.tinypic.com/2mm7fbq.png');\n    background-repeat: repeat;\n    background-attachment: fixed;\n    color: #5A6268;\n}\n/* TABLE */\n.table {\n    width: 100%;\n    height: 500px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n    overflow-y: scroll;\n    white-space: nowrap;\n    text-align: center;\n    margin-left: 15px;\n}\n.score {\n    width: 10%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n}\n.chat-container {\n    width: 14%;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n}\n.game-list {\n    width: 100%;\n    border-top: 1px solid #5A6268 !important;\n    margin-top: 10px;\n}\n.game-list tr,\ntd,\nth {\n    border: 1px solid #5A6268;\n}\n.game-list th {\n    background-color: #cad7e270;\n}\n.navigation {\n    width: 400px;\n    height: auto;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    display: inline-block;\n    vertical-align: top;\n    white-space: nowrap;\n    text-align: center;\n    margin-left: 15px;\n}\n.login-reg{\n\n    width: 400px;\n    height: auto;\n    margin: 0px auto;\n\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n <h1>Home Page</h1>\n <a *ngIf='!loggedUser' [routerLink]=\"['/login']\">login</a><br>\n \n <p *ngIf='loggedUser' >Logged in as: {{loggedUser}}</p><br>\n\n <a *ngIf='loggedUser' href (click)=\"logOut()\">logout</a>\n -->\n\n\n<div class=\"wrapper\">\n    <div class=\"title-bar\">\n\n        <div class=\"login-reg\">\n\n            <img src=\"/assets/img/logo.png\" width=\"350px\">\n            <br><br>\n            <div class=\"navigation\">\n                <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/login']\">Login</button>\n                <br>\n                <br>\n                <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/register']\">Register</button>\n\n                <br>\n                <br>\n\n            </div>\n        </div>\n    </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _socket) {
        this._httpService = _httpService;
        this._route = _route;
        this._socket = _socket;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var initDom = this._httpService.initDominos();
        initDom.subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.logOut = function () {
        var obs = this._httpService.logOut();
        obs.subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.login = function (user) {
        return this._http.post('/api/login', user);
    };
    HttpService.prototype.initDominos = function () {
        //console.log("in service creating dominos")
        return this._http.get('/api/createDominos');
    };
    HttpService.prototype.signUp = function (user) {
        return this._http.post('/api/signUp', user);
    };
    HttpService.prototype.isLogged = function () {
        return this._http.get('/api/isLogged');
    };
    HttpService.prototype.logOut = function () {
        //console.log("in service logging out")
        return this._http.get('/api/logout');
    };
    HttpService.prototype.getAllUsers = function () {
        return this._http.get('/api/getAllUsers');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/leadr-board/leadr-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/leadr-board/leadr-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/leadr-board/leadr-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/leadr-board/leadr-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n\n    <head>\n        <title>\n            Domino Test\n        </title>\n        <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.1.0/css/all.css\" integrity=\"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt\"\n            crossorigin=\"anonymous\">\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css\" integrity=\"sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4\"\n            crossorigin=\"anonymous\">\n        <style>\n            /* TITLE AND NAVIGATION */\n    \n            .title-bar {\n                text-align: center;\n            }\n    \n            .wrapper {\n                width: 98%;\n            }\n    \n            body {\n                background-image: url('bg.png');\n                background-repeat: repeat;\n                background-attachment: fixed;\n                color: #5A6268;\n            }\n    \n            /* TABLE */\n            \n            .login-reg {\n              width: 450px;\n              height: 300px;\n              background-color: #cad7e270;\n              padding: 15px;\n              border-radius: 15px;\n              vertical-align: top;\n              text-align: center;\n              margin: 0px auto;\n            }\n            \n            \n            </style>\n    \n  </head>\n  \n  <body>\n    <div class=\"wrapper\">\n      \n      <div class=\"title-bar\">\n        <img src=\"/assets/img/logo.png\" width=\"350px\">\n        <div class=\"navigation\">\n          <button type=\"button\" class=\"btn btn-secondary\"   [routerLink]=\"['/home']\">Home</button>\n          <button type=\"button\" class=\"btn btn-secondary\" [routerLink]=\"['/dashBoard']\">Dashboard</button>\n          \n                <br>\n                <br>\n            </div>\n        </div>\n\n        <div class=\"table\">\n            <h3>Leaderboard</h3>\n\n            <table class=\"game-list\">\n                <tr><th>Rank</th>\n                    <th>Wins</th>\n                    <th>Losses</th>\n                    <th>Game Played</th>\n                    <th>Score</th>\n                </tr>\n\n                \n                    <tr *ngFor='let user of users' >\n                        <td>{{user.first_name}} {{user.last_name}}</td>\n                       \n                        <td>{{user.wins}}</td>\n                        <td>\n                            {{user.loses}}\n                        </td>\n                        <td>{{user.game_played}}</td>\n                        <td>\n                          {{user.total_points_scored}}\n                        </td>\n                    </tr>\n                \n            </table>\n\n        </div>\n\n\n    </div>\n\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/leadr-board/leadr-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/leadr-board/leadr-board.component.ts ***!
  \******************************************************/
/*! exports provided: LeadrBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadrBoardComponent", function() { return LeadrBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadrBoardComponent = /** @class */ (function () {
    function LeadrBoardComponent(_httpServiec) {
        this._httpServiec = _httpServiec;
        this.users = [];
    }
    LeadrBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs = this._httpServiec.getAllUsers();
        obs.subscribe(function (data) {
            console.log("in the leadboard comp", JSON.parse(data['_body']).data);
            _this.users = JSON.parse(data['_body']).data;
        });
    };
    LeadrBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leadr-board',
            template: __webpack_require__(/*! ./leadr-board.component.html */ "./src/app/leadr-board/leadr-board.component.html"),
            styles: [__webpack_require__(/*! ./leadr-board.component.css */ "./src/app/leadr-board/leadr-board.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LeadrBoardComponent);
    return LeadrBoardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* TITLE AND NAVIGATION */\n\n .title-bar {\n    text-align: center;\n}\n\n .wrapper {\n    width: 98%;\n}\n\n /* TABLE */\n\n .login-reg {\n    width: 450px;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    vertical-align: top;\n    text-align: center;\n    margin: 0px auto;\n}\n\n button{\n    margin-right: 5px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"wrapper\">\n    \n            <div class=\"title-bar\">\n                <img src=\"/assets/img/logo.png\" width=\"350px\">\n                <div class=\"navigation\">\n                    <button type=\"button\" class=\"btn btn-secondary\"   [routerLink]=\"['/register']\">Register</button>\n                    <!-- <button type=\"button\" class=\"btn btn-secondary\">Leaderboard</button> -->\n                    <br>\n                    <br>\n                </div>\n            </div>\n    \n            <div class=\"login-reg\">\n                <h3>Log In</h3>\n    \n                <br>\n                <form name='loginForm' #loginForm='ngForm' method='post' (submit)=\"login(loginForm)\">\n    \n                <table style=\"width: 110%;\">\n\n                  <tr>\n\n                        <td>Username</td>\n                        <td><input type='text' name='email'  \n                          [(ngModel)]='loginUser.email'\n                          #email=\"ngModel\"\n                          required\n                          minlength=\"3\"></td>\n                    </tr>\n    \n                        <tr>\n                            <td>Password</td>\n                            <td><input type='password' name='password'\n                              [(ngModel)]='loginUser.password'\n                              #password='ngModel'\n                              required\n                              minlength=\"8\"></td>\n                        </tr>\n    \n                </table>\n                <br><br>\n                \n                <button [disabled]=\"!loginForm.valid\" class=\"btn btn-secondary\">Log In</button>\n                \n              </form>\n            </div>\n    \n    \n        </div>\n    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log("loading login");
        this.loginUser = { email: "", password: "" };
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form) {
            //console.log("trying to log user: ",this.loginUser)
            var obs = this._httpService.login(this.loginUser);
            obs.subscribe(function (data) {
                if (data['_body'] == '{"msg":"e"}') {
                    console.log("User doesn't exist");
                    _this._route.navigate(['/login']);
                }
                else {
                    //console.log("printing the data",data)
                    _this.loginUser = { email: "", password: "" };
                    _this._route.navigate(['dashBoard']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* TITLE AND NAVIGATION */\n\n .title-bar {\n    text-align: center;\n}\n\n .wrapper {\n    width: 98%;\n}\n\n /* TABLE */\n\n .login-reg {\n    width: 450px;\n    height: 300px;\n    background-color: #cad7e270;\n    padding: 15px;\n    border-radius: 15px;\n    vertical-align: top;\n    text-align: center;\n    margin: 0px auto;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"wrapper\">\n\n        <div class=\"title-bar\">\n            <img src=\"/assets/img/logo.png\" width=\"350px\">\n            <div class=\"navigation\">\n                <button type=\"button\" class=\"btn btn-secondary\"[routerLink]=\"['/login']\" >Login</button>\n                <!-- <button type=\"button\" class=\"btn btn-secondary\">Leaderboard</button> -->\n                <br>\n                <br>\n            </div>\n        </div>\n\n        <div class=\"login-reg\">\n            <h3>Registration</h3>\n\n            <br>\n            <form method='post' name=\"newUserForm\" #newUserForm='ngForm' (submit)=\"signUp(newUserForm)\">\n\n            <table style=\"width: 110%;\">\n                <tr>\n                    <td>First Name</td>\n                    <td><input type='text' name='first_name'\n                        [(ngModel)]='createUser.first_name' \n                        #first_name='ngModel'\n                        required\n                        minlength=\"3\"></td>\n                </tr>\n                <tr>\n                        <td>Last Name</td>\n                        <td><input type='text' name='last_name'\n                            [(ngModel)]='createUser.last_name' \n                            #last_name='ngModel'\n                            required\n                            minlength=\"3\"></td>\n                    </tr>\n\n                    <tr>\n                        <td>Email</td>\n                        <td><input type='text' name='email'  \n                            [(ngModel)]='createUser.email'\n                            #email=\"ngModel\"\n                            required\n                            minlength=\"3\"></td>\n                    </tr>\n                    <tr>\n                            <td>Password</td>\n                            <td><input type='password' name='password'\n                                [(ngModel)]='createUser.password'\n                                #password='ngModel'\n                                required\n                                minlength=\"8\"></td>\n                        </tr>\n\n                    \n\n            </table>\n            <br><br>\n\n            <button [disabled]=\"!newUserForm.valid\"  class=\"btn btn-secondary\">Register</button>\n        </form>\n        <br><br>\n        </div>\n\n\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createUser = { email: "", password: "", first_name: "", last_name: "" };
    };
    RegisterComponent.prototype.signUp = function (form) {
        var _this = this;
        if (form) {
            // console.log("creating user",this.createUser)
            var obs = this._httpService.signUp(this.createUser);
            obs.subscribe(function (data) {
                // console.log("after signing up",data['_body'])
                if (data['_body'] == '{"msg":"e"}') {
                    // console.log("Emial Taken Already")
                    _this._route.navigate(['home']);
                }
                else {
                    // console.log("User created");
                    _this._route.navigate(['home']);
                }
            });
            this.createUser = { email: "", password: "", first_name: "", last_name: "" };
        }
        else {
            "Error signUp Form";
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! /home/ali/codingDojo/ANGULAR/newDomino/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map