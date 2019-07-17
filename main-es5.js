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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-renderer #renderer class=\"overlay-and-fill\" style=\"z-index: -100\"\n  [red]=\"settings.red\" \n  [green]=\"settings.green\" \n  [blue]=\"settings.blue\" \n  [tail]=\"settings.tail\"\n  [count]=\"settings.count\" \n  [speed]=\"settings.speed\" \n  [size]=\"settings.size\" \n  [force]=\"settings.force\">\n</app-renderer>\n\n<div #menu [@fadeInOut]=\"settingsVisible || settingsComponent?.isInteracting\" class=\"overlay-and-fill\" [style.color]=\"colorTheme==='light' ? 'white' : 'black'\">\n  \n  <div class=\"menu-vignette\" [style.background]=\"background\"></div>  \n\n  <div class=\"actions-bar\">\n      <i class=\"material-icons action\" (click)=\"renderer.reset()\">refresh</i>\n      <i class=\"material-icons action\">share</i>\n      <div class=\"action\" (click)=\"openGithub()\">\n        <img *ngIf=\"colorTheme==='light'\" src=\"assets/GitHub-Mark-Light-32px.png\" class=\"github-icon\">\n        <img *ngIf=\"colorTheme==='dark'\" src=\"assets/GitHub-Mark-32px.png\" class=\"github-icon\">\n      </div>\n      <div class=\"action\" *ngIf=\"fullscreen.isSupported(document)\">\n          <i *ngIf=\"!fullscreen.isFullscreen\" class=\"material-icons\" (click)=\"fullscreen.enter(document)\">fullscreen</i>\n          <i *ngIf=\"fullscreen.isFullscreen\" class=\"material-icons\" (click)=\"fullscreen.exit(document)\">fullscreen_exit</i>        \n      </div>\n  </div>\n\n  <app-settings #settingsComponent\n    [(tail)]=\"settings.tail\"\n    [(count)]=\"settings.count\"\n    [(speed)]=\"settings.speed\"\n    [(size)]=\"settings.size\"\n    [(force)]=\"settings.force\"\n    [(red)]=\"settings.red\"\n    [(green)]=\"settings.green\"\n    [(blue)]=\"settings.blue\"></app-settings>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ghost-curve/ghost-curve.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ghost-curve/ghost-curve.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container style=\"width: 100%; height: 100%\">\n\n  <div [@expandCollapse]=\"state\" style=\"position: relative\">\n      <svg #svg \n      class=\"svg\" \n      [ngStyle]=\"gradient\"\n      [attr.width]=\"svgSize[0]\" \n      [attr.height]=\"svgSize[1]\" \n      [attr.viewBox]=\"svgViewBox\"\n      (window:resize)=\"onResize()\">    \n      <svg:path [attr.d]=\"svgCurve\" stroke-width=\"1px\" stroke=\"white\" fill-opacity=\"0\"/>\n    </svg>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ghost-slider/ghost-slider.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ghost-slider/ghost-slider.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"container\">\n\n  <div\n    [@expandCollapseBar]=\"state\"\n    style=\"position: absolute; bottom: 0; height: 13px; width: 100px; user-select: none; pointer-events: none\">\n  \n    <div \n      style=\"background-color: rgba(200, 200, 200, 0.5); background-blend-mode:exclusion ; height: 100%;  border-right: 1px solid white; box-sizing: border-box; position: relative\" \n      [style.width]=\"(normalizedValue * 100) + '%'\">\n    </div>\n\n    <div \n      style=\"background-color: rgba(100, 100, 100, 0.5); position: absolute; height: 100%; top: 0; right: 0; box-sizing: border-box; border-left: 1px solid white\" \n      [style.width]=\"((1 - normalizedValue) * 100) + '%'\">\n    </div>\n  </div>\n\n  <div \n    [@expandCollapseLabel]=\"state\" \n    style=\"position: absolute; top: 0; left: 0; user-select: none; pointer-events: none; display: flex; align-items: center\">\n    {{ label }}\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/renderer/renderer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/renderer/renderer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #viewport class=\"renderer-canvas\"></canvas>\n<div style=\"position: absolute; bottom: 10px; right: 10px\">FPS: {{ fps | number:'2.1-1'}}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-container\">\n\n  <div class=\"setting\">\n    <app-ghost-slider #tailSlider class=\"overlay-and-fill setting-padding\" \n      [(value)]=\"tail\" \n      [min]=\"100\" \n      [max]=\"50000\"\n      [label]=\"'Tail'\">\n    </app-ghost-slider>\n  </div>\n\n  <div class=\"setting\">\n    <app-ghost-slider #countSlider class=\"overlay-and-fill setting-padding\" [(value)]=\"count\" [min]=\"1\" [max]=\"10\" [label]=\"'Count'\">\n    </app-ghost-slider>\n  </div>\n\n  <div class=\"setting\">\n    <app-ghost-slider #speedSlider class=\"overlay-and-fill setting-padding\" [(value)]=\"speed\" [min]=\"0.1\" [max]=\"10\" [step]=\"0.1\" [label]=\"'Speed'\">\n    </app-ghost-slider>\n  </div>\n\n  <div class=\"setting\">\n    <app-ghost-slider #sizeSlider class=\"overlay-and-fill setting-padding\" [(value)]=\"size\" [min]=\"10\" [max]=\"50\" [label]=\"'Size'\">\n    </app-ghost-slider>\n  </div>\n\n  <div class=\"setting\">\n    <app-ghost-slider #forceSlider class=\"overlay-and-fill setting-padding\" [(value)]=\"force\" [min]=\"1\" [max]=\"10\" [step]=\"0.1\" [label]=\"'Force'\">\n    </app-ghost-slider>\n  </div>\n\n  <div class=\"setting\">\n    <div class=\"overlay-and-fill setting-padding\">\n      <div style=\"position: relative; width:100%; height: 100%\">\n        <app-ghost-curve class=\"overlay-and-fill\" #redCurve [(points)]=\"red\" [channel]=\"'R'\"></app-ghost-curve>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"setting\">\n    <div class=\"overlay-and-fill setting-padding\">\n      <div style=\"position: relative; width:100%; height: 100%\">\n        <app-ghost-curve class=\"overlay-and-fill\" #greenCurve [(points)]=\"green\" [channel]=\"'G'\"></app-ghost-curve>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"setting\">\n      <div class=\"overlay-and-fill setting-padding\">\n        <div style=\"position: relative; width:100%; height: 100%\">\n          <app-ghost-curve class=\"overlay-and-fill\" #blueCurve [(points)]=\"blue\" [channel]=\"'B'\"></app-ghost-curve>\n        </div>\n      </div>\n    </div>\n</div>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-vignette {\n  position: absolute;\n  top: -1500px;\n  left: -500px;\n  width: 1000px;\n  height: 3000px;\n  overflow: hidden;\n}\n\n.actions-bar {\n  position: relative;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  padding-left: 8px;\n  padding-top: 8px;\n}\n\n.action {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  box-sizing: content-box;\n  padding: 0 8px 0 8px;\n  cursor: pointer;\n}\n\n.github-icon {\n  width: 20px;\n  height: 20px;\n  box-sizing: content-box;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9zaGFkZWJvYnMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAuLi92YXJpYWJsZXMuc2Fzc1xuXG4ubWVudS12aWduZXR0ZVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogLTE1MDBweFxuICAgIGxlZnQ6IC01MDBweFxuICAgIHdpZHRoOiAxMDAwcHhcbiAgICBoZWlnaHQ6IDMwMDBweFxuICAgIG92ZXJmbG93OiBoaWRkZW5cblxuLmFjdGlvbnMtYmFyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgaGVpZ2h0OiA0MHB4XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcbiAgICBwYWRkaW5nLWxlZnQ6IDhweFxuICAgIHBhZGRpbmctdG9wOiA4cHhcblxuLmFjdGlvblxuICAgIHVzZXItc2VsZWN0OiBub25lXG4gICAgZGlzcGxheTogZmxleFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4XG4gICAgY3Vyc29yOiBwb2ludGVyXG5cbi5naXRodWItaWNvblxuICAgIHdpZHRoOiAyMHB4XG4gICAgaGVpZ2h0OiAyMHB4XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3hcbiAgICBwYWRkaW5nOiAycHhcbiIsIi5tZW51LXZpZ25ldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNTAwcHg7XG4gIGxlZnQ6IC01MDBweDtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAzMDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY3Rpb25zLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmFjdGlvbiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcGFkZGluZzogMCA4cHggMCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdpdGh1Yi1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBhZGRpbmc6IDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ColorTheme, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorTheme", function() { return ColorTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderer/renderer.component */ "./src/app/renderer/renderer.component.ts");
/* harmony import */ var _utils_fullscreen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/fullscreen.service */ "./src/app/utils/fullscreen.service.ts");










var ColorTheme;
(function (ColorTheme) {
    ColorTheme["dark"] = "dark";
    ColorTheme["light"] = "light";
})(ColorTheme || (ColorTheme = {}));
var AppComponent = /** @class */ (function () {
    function AppComponent(router, route, sanitizer, document, fullscreen) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.document = document;
        this.fullscreen = fullscreen;
        this._defaultRed = [
            [0, 180],
            [10, 255],
            [20, 127],
            [30, 36],
            [40, 0],
            [50, 180],
            [60, 255],
            [70, 127],
            [80, 36],
            [90, 0],
            [100, 0]
        ];
        this._defaultGreen = [
            [0, 180],
            [10, 255],
            [20, 127],
            [30, 25],
            [40, 0],
            [50, 180],
            [60, 255],
            [70, 127],
            [80, 25],
            [90, 0],
            [100, 0],
        ];
        this._defaultBlue = [
            [0, 255],
            [10, 255],
            [20, 130],
            [30, 120],
            [40, 0],
            [50, 255],
            [60, 255],
            [70, 130],
            [80, 120],
            [90, 0],
            [100, 0],
        ];
        this._defaultTail = 40000;
        this._defaultCount = 8;
        this._defaultSpeed = 3.5;
        this._defaultSize = 10;
        this._defaultForce = 3;
        this.redActive = false;
        this.greenActive = false;
        this.blueActive = false;
        this._defaultRed = [];
        this._defaultGreen = [];
        this._defaultBlue = [];
        var c = 10;
        for (var i = 0; i <= c; i++) {
            this._defaultRed.push([i * (100 / c), (i / c) * 255]);
            this._defaultGreen.push([i * (100 / c), (i / c) * 255]);
            this._defaultBlue.push([i * (100 / c), (i / c) * 255]);
        }
        this.showSettings();
        this.settings = new _settings__WEBPACK_IMPORTED_MODULE_2__["Settings"](this._defaultTail, this._defaultCount, this._defaultSpeed, this._defaultSize, this._defaultForce, this._defaultRed, this._defaultGreen, this._defaultBlue);
        // This is a BehaviorSubject so first value is always empty, then we just get the initial
        // values from the URL. The URL is updated through the settings, so it will keep changing.
        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (params) {
            _this.settings.red = _this.getColorOrDefault(params, 'red', _this.settings.red);
            _this.settings.green = _this.getColorOrDefault(params, 'green', _this.settings.green);
            _this.settings.blue = _this.getColorOrDefault(params, 'blue', _this.settings.blue);
            _this.settings.tail = _this.getValueOrDefault(params, 'tail', _this.settings.tail);
            _this.settings.count = _this.getValueOrDefault(params, 'count', _this.settings.count);
            _this.settings.speed = _this.getValueOrDefault(params, 'speed', _this.settings.speed);
            _this.settings.size = _this.getValueOrDefault(params, 'size', _this.settings.size);
            _this.settings.force = _this.getValueOrDefault(params, 'force', _this.settings.force);
        });
        window.setInterval(function () {
            _this.router.navigate(['.'], { relativeTo: _this.route, queryParams: _this.settings });
        }, 1000);
        this.document.addEventListener('mousedown', function () { return _this.showSettings(); }, { capture: true });
        this.document.addEventListener('mousemove', function () { return _this.showSettings(); }, { capture: true });
        this.document.addEventListener('mouseup', function () { return _this.showSettings(); }, true);
        this.document.addEventListener('drag', function () { return _this.showSettings(); }, true);
    }
    AppComponent.prototype.getValueOrDefault = function (map, key, defaultValue) {
        return map.has(key) ? map.get(key) : defaultValue;
    };
    AppComponent.prototype.getColorOrDefault = function (map, key, defaultValue) {
        if (!map.has(key)) {
            return defaultValue;
        }
        return map.getAll(key).map(function (s) { return s.split(',').map(function (e) { return parseInt(e, 10); }); });
    };
    Object.defineProperty(AppComponent.prototype, "colorTheme", {
        get: function () {
            var firstR = this.settings.red[0][1];
            var firstG = this.settings.green[0][1];
            var firstB = this.settings.blue[0][1];
            var sum = firstR + firstG + firstB;
            return sum > 350 ? ColorTheme.dark : ColorTheme.light;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "background", {
        get: function () {
            var C = (this.colorTheme === ColorTheme.dark) ? 255 : 0;
            var gradient = "radial-gradient(at bottom right,rgba(" + C + ", " + C + ", " + C + ", 0) 36%, rgba(" + C + ", " + C + ", " + C + ", 0.9) 44%)";
            return this.sanitizer.bypassSecurityTrustStyle(gradient);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.openGithub = function () {
        window.location.href = 'https://github.com/torbjorv/shadebobs';
    };
    AppComponent.prototype.showSettings = function () {
        var _this = this;
        this.settingsVisible = true;
        if (this._settingsTimeout) {
            clearTimeout(this._settingsTimeout);
        }
        this._settingsTimeout = setTimeout(function () { return _this.settingsVisible = false; }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('renderer', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_8__["RendererComponent"])
    ], AppComponent.prototype, "renderer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('false => true', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('0.1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('true => false', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1s')
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            HTMLDocument,
            _utils_fullscreen_service__WEBPACK_IMPORTED_MODULE_9__["Fullscreen2Service"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/renderer.component */ "./src/app/renderer/renderer.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ghost-slider/ghost-slider.component */ "./src/app/ghost-slider/ghost-slider.component.ts");
/* harmony import */ var _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ghost-curve/ghost-curve.component */ "./src/app/ghost-curve/ghost-curve.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _renderer_renderer_component__WEBPACK_IMPORTED_MODULE_5__["RendererComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"],
                _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_10__["GhostSliderComponent"],
                _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_11__["GhostCurveComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cardinal-curve.ts":
/*!***********************************!*\
  !*** ./src/app/cardinal-curve.ts ***!
  \***********************************/
/*! exports provided: CardinalCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalCurve", function() { return CardinalCurve; });
var CardinalCurve = /** @class */ (function () {
    function CardinalCurve() {
    }
    CardinalCurve.valueAt = function (points, tension, x) {
        if (x <= points[0][0]) {
            return points[0][1];
        }
        if (x >= points[points.length - 1][0]) {
            return points[points.length - 1][1];
        }
        var begin;
        for (begin = 0; begin < points.length - 1; begin++) {
            if (points[begin + 1][0] > x) {
                break;
            }
        }
        var end = begin + 1;
        var t = (x - points[begin][0]) / (points[end][0] - points[begin][0]);
        var n0 = Math.max(0, begin - 1);
        var n1 = begin;
        var n2 = end;
        var n3 = Math.min(points.length - 1, end + 1);
        var t1y = (points[n2][1] - points[n0][1]) * tension;
        var t2y = (points[n3][1] - points[n1][1]) * tension;
        var c1 = 2 * Math.pow(t, 3) - 3 * Math.pow(t, 2) + 1;
        var c2 = -(2 * Math.pow(t, 3)) + 3 * Math.pow(t, 2);
        var c3 = Math.pow(t, 3) - 2 * Math.pow(t, 2) + t;
        var c4 = Math.pow(t, 3) - Math.pow(t, 2);
        var yRes = c1 * points[n1][1] + c2 * points[n2][1] + c3 * t1y + c4 * t2y;
        return yRes;
    };
    /**
     * Calculates a cardinal curve
     * @param points Control points
     * @param tension The tension
     * @param count Number of output points
     */
    CardinalCurve.build = function (points, tension, count) {
        if (points.length < 2) {
            return [];
        }
        var result = [];
        var k = (points[points.length - 1][0] - points[0][0]) / (count - 1);
        for (var i = 0; i < count; i++) {
            var x = k * i;
            result.push(CardinalCurve.valueAt(points, tension, x));
        }
        return result;
    };
    return CardinalCurve;
}());



/***/ }),

/***/ "./src/app/fifoqueue.ts":
/*!******************************!*\
  !*** ./src/app/fifoqueue.ts ***!
  \******************************/
/*! exports provided: FifoQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifoQueue", function() { return FifoQueue; });
var FifoQueue = /** @class */ (function () {
    function FifoQueue(capacity) {
        this._capacity = capacity;
        this._buffer = new Array(capacity);
        this._front = 0;
        this._back = 0;
        this._length = 0;
    }
    FifoQueue.prototype.push = function (value) {
        if (this.length === this.capacity) {
            throw new Error('Queue full, call pop or resize before pushing.');
        }
        this._buffer[this._back] = value;
        this._back = (this._back + 1) % this.capacity;
        this._length++;
    };
    FifoQueue.prototype.pop = function () {
        if (this.length === 0) {
            throw new Error('Queue empty.');
        }
        var value = this._buffer[this._front];
        this._front = (this._front + 1) % this.capacity;
        this._length--;
        return value;
    };
    Object.defineProperty(FifoQueue.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FifoQueue.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        enumerable: true,
        configurable: true
    });
    FifoQueue.prototype.at = function (index) {
        return this._buffer[(this._front + index) % this.capacity];
    };
    FifoQueue.prototype.resize = function (newCapacity) {
        if (newCapacity < this.length) {
            throw new Error('New capacity is too small, pop enough elements to make it fit in the new capacity before resizing.');
        }
        var newBuffer = new Array(newCapacity);
        for (var i = 0; i < this.length; i++) {
            newBuffer[i] = this.at(i);
        }
        this._front = 0;
        this._capacity = newCapacity;
        this._back = this.length % this.capacity;
        this._buffer = newBuffer;
    };
    return FifoQueue;
}());



/***/ }),

/***/ "./src/app/ghost-curve/ghost-curve.component.sass":
/*!********************************************************!*\
  !*** ./src/app/ghost-curve/ghost-curve.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n\n.channel-background {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9zaGFkZWJvYnMvc3JjL2FwcC9naG9zdC1jdXJ2ZS9naG9zdC1jdXJ2ZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvZ2hvc3QtY3VydmUvZ2hvc3QtY3VydmUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2dob3N0LWN1cnZlL2dob3N0LWN1cnZlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2Z1xuICAgIGhlaWdodDogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG4gICAgZGlzcGxheTogYmxvY2tcblxuLmNoYW5uZWwtYmFja2dyb3VuZFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4gICAgdXNlci1zZWxlY3Q6IG5vbmUiLCIuc3ZnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGFubmVsLWJhY2tncm91bmQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/ghost-curve/ghost-curve.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ghost-curve/ghost-curve.component.ts ***!
  \******************************************************/
/*! exports provided: GhostCurveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostCurveComponent", function() { return GhostCurveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var simplify_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplify-ts */ "./node_modules/simplify-ts/dist/index.js");
/* harmony import */ var simplify_ts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simplify_ts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _cardinal_curve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cardinal-curve */ "./src/app/cardinal-curve.ts");








var DragState;
(function (DragState) {
    DragState["None"] = "None";
    DragState["Holding"] = "Holding";
    DragState["Dragging"] = "Dragging";
})(DragState || (DragState = {}));
var GhostCurveComponent = /** @class */ (function () {
    function GhostCurveComponent() {
        this.expanded = false;
        this._points = [];
        this._pointsChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.state = DragState.None;
        this.channel = 'R';
        this.world = [[0, 0], [100, 255]];
        this.svgSize = [10, 10];
        this.active = [false, false, false, false, false];
    }
    Object.defineProperty(GhostCurveComponent.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._points = value;
            this.updatePalettes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhostCurveComponent.prototype, "pointsChange", {
        get: function () {
            return this._pointsChange;
        },
        enumerable: true,
        configurable: true
    });
    GhostCurveComponent.prototype.onResize = function () {
        var _this = this;
        console.log('onResize');
        var element = this._svg.nativeElement;
        var contentWidth = element.clientWidth;
        var contentHeight = element.clientHeight;
        // Unless I subtract 4 here, the svg area will keep growing for every onResize. No idea where those 4 pixels
        // are coming from (it's not padding/margin).
        setTimeout(function () { return _this.svgSize = [contentWidth, contentHeight]; });
    };
    GhostCurveComponent.prototype.ngOnInit = function () {
        this._dragPoints = this.points;
    };
    GhostCurveComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onResize();
        d3__WEBPACK_IMPORTED_MODULE_2__["select"](this._container.nativeElement)
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["drag"]()
            .on('start', function () { return _this.onDragStart(); })
            .on('drag', function () { return _this.onDrag(); })
            .on('end', function () { return _this.onDragEnd(); }));
    };
    GhostCurveComponent.prototype.ngDoCheck = function () {
        if (this._svg) {
            var contentWidth = this._svg.nativeElement.clientWidth;
            var contentHeight = this._svg.nativeElement.clientHeight;
            if (contentWidth !== this.svgSize[0] || contentHeight !== this.svgSize[1]) {
                this.onResize();
            }
        }
    };
    Object.defineProperty(GhostCurveComponent.prototype, "svgCurve", {
        get: function () {
            var _this = this;
            var lineGenerator = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
                .curve(d3__WEBPACK_IMPORTED_MODULE_2__["curveMonotoneX"]);
            var svgPoints = this.points.map(function (p) { return _this.toSvg(p); });
            return lineGenerator(svgPoints);
        },
        enumerable: true,
        configurable: true
    });
    GhostCurveComponent.prototype.toWorld = function (p) {
        var worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
        var normalizedScreen = [p[0] / this.svgSize[0], (this.svgSize[1] - p[1]) / this.svgSize[1]];
        return [
            this.world[0][0] + worldSize[0] * normalizedScreen[0],
            this.world[0][1] + worldSize[1] * normalizedScreen[1]
        ];
    };
    GhostCurveComponent.prototype.toSvg = function (p) {
        var worldSize = [this.world[1][0] - this.world[0][0], this.world[1][1] - this.world[0][1]];
        return [
            this.svgSize[0] * (p[0] - this.world[0][0]) / worldSize[0],
            this.svgSize[1] * (this.world[1][1] - p[1]) / worldSize[1]
        ];
    };
    Object.defineProperty(GhostCurveComponent.prototype, "svgViewBox", {
        get: function () {
            return "0 0 " + this.svgSize[0] + " " + this.svgSize[1];
        },
        enumerable: true,
        configurable: true
    });
    GhostCurveComponent.prototype.onDragStart = function () {
        this.state = DragState.Holding;
        var current = this.toWorld([d3__WEBPACK_IMPORTED_MODULE_2__["event"].x, d3__WEBPACK_IMPORTED_MODULE_2__["event"].y]);
        if (this.world) {
            current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
            current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
        }
        this._previousDrag = current;
    };
    GhostCurveComponent.prototype.onDrag = function () {
        this.state = DragState.Dragging;
        var current = this.toWorld([d3__WEBPACK_IMPORTED_MODULE_2__["event"].x, d3__WEBPACK_IMPORTED_MODULE_2__["event"].y]);
        if (this.world) {
            current[0] = Math.min(Math.max(current[0], this.world[0][0]), this.world[1][0]);
            current[1] = Math.min(Math.max(current[1], this.world[0][1]), this.world[1][1]);
        }
        _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].setRange(this._dragPoints, this._previousDrag, current);
        this._points = Object(simplify_ts__WEBPACK_IMPORTED_MODULE_4__["SimplifyAP"])(this._dragPoints, 2);
        this._pointsChange.next(this._points);
        this.updatePalettes();
        this._previousDrag = current;
    };
    GhostCurveComponent.prototype.onDragEnd = function () {
        this.state = DragState.None;
        this._previousDrag = null;
    };
    GhostCurveComponent.prototype.updatePalettes = function () {
        var steps = 101;
        var palette = _cardinal_curve__WEBPACK_IMPORTED_MODULE_7__["CardinalCurve"].build(this.points, 0.5, steps);
        switch (this.channel) {
            case 'R':
                this.gradient = this.buildGradient(palette, Array(steps).fill(0), Array(steps).fill(0), Array(steps).fill(1));
                break;
            case 'G':
                this.gradient = this.buildGradient(Array(steps).fill(0), palette, Array(steps).fill(0), Array(steps).fill(1));
                break;
            case 'B':
                this.gradient = this.buildGradient(Array(steps).fill(0), Array(steps).fill(0), palette, Array(steps).fill(1));
                break;
        }
    };
    GhostCurveComponent.prototype.buildGradient = function (r, g, b, a) {
        var value = 'linear-gradient(to right';
        for (var i = 0; i < r.length; i++) {
            value += ", rgba(" + r[i] + ", " + g[i] + ", " + b[i] + ", " + a[i] + ") " + i + "%";
        }
        value += ')';
        return {
            background: value
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('svg', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GhostCurveComponent.prototype, "_svg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GhostCurveComponent.prototype, "_container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GhostCurveComponent.prototype, "channel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], GhostCurveComponent.prototype, "points", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GhostCurveComponent.prototype, "pointsChange", null);
    GhostCurveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ghost-curve',
            template: __webpack_require__(/*! raw-loader!./ghost-curve.component.html */ "./node_modules/raw-loader/index.js!./src/app/ghost-curve/ghost-curve.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('expandCollapse', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('Holding, Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        width: '100%',
                        height: '100%',
                        top: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('None, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        width: '75px',
                        height: '20px',
                        top: '10px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.2s ease-in-out')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./ghost-curve.component.sass */ "./src/app/ghost-curve/ghost-curve.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GhostCurveComponent);
    return GhostCurveComponent;
}());



/***/ }),

/***/ "./src/app/ghost-slider/ghost-slider.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/ghost-slider/ghost-slider.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 40px;\n  position: relative;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9zaGFkZWJvYnMvc3JjL2FwcC9naG9zdC1zbGlkZXIvZ2hvc3Qtc2xpZGVyLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9naG9zdC1zbGlkZXIvZ2hvc3Qtc2xpZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9naG9zdC1zbGlkZXIvZ2hvc3Qtc2xpZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxuICAgIHdpZHRoOiAxMDAlXG4gICAgaGVpZ2h0OiA0MHB4XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveCIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/ghost-slider/ghost-slider.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ghost-slider/ghost-slider.component.ts ***!
  \********************************************************/
/*! exports provided: GhostSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostSliderComponent", function() { return GhostSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.ts");






var DragState;
(function (DragState) {
    DragState["None"] = "None";
    DragState["Holding"] = "Holding";
    DragState["Dragging"] = "Dragging";
})(DragState || (DragState = {}));
var GhostSliderComponent = /** @class */ (function () {
    function GhostSliderComponent() {
        this._value = 30;
        this.normalizedValue = 0.3;
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.state = DragState.None;
        this.expanded = false;
        this.min = 0;
        this.max = 100;
        this.step = 1;
    }
    Object.defineProperty(GhostSliderComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this.value === value) {
                return;
            }
            this._value = value;
            this.normalizedValue = (value - this.min) / (this.max - this.min);
            this._valueChange.next(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhostSliderComponent.prototype, "valueChange", {
        get: function () {
            return this._valueChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GhostSliderComponent.prototype, "width", {
        get: function () {
            return this._container ? this._container.nativeElement.clientWidth + "px" : '100px';
        },
        enumerable: true,
        configurable: true
    });
    GhostSliderComponent.prototype.ngOnInit = function () {
    };
    GhostSliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // d3 handles nicely both mouse and touch, in addition to triggering 'end' if the drag stops
        // outside the element.
        d3__WEBPACK_IMPORTED_MODULE_4__["select"](this._container.nativeElement)
            .call(d3__WEBPACK_IMPORTED_MODULE_4__["drag"]()
            .on('start', function () { return _this.onDragStart(d3__WEBPACK_IMPORTED_MODULE_4__["event"]); })
            .on('drag', function () { return _this.onDrag(d3__WEBPACK_IMPORTED_MODULE_4__["event"]); })
            .on('end', function () { return _this.onDragEnd(d3__WEBPACK_IMPORTED_MODULE_4__["event"]); }));
    };
    GhostSliderComponent.prototype.onDragStart = function (e) {
        this.state = DragState.Holding;
        this._normalizedValueAtDragStart = this.normalizedValue;
        this._xAtDragStart = e.x;
    };
    GhostSliderComponent.prototype.onDrag = function (e) {
        this.state = DragState.Dragging;
        var speed = 2;
        var width = this._container.nativeElement.clientWidth;
        this.normalizedValue = this._normalizedValueAtDragStart + speed * (e.x - this._xAtDragStart) / width;
        // If user pushes the bar to the edge (and beyond) and then back we want the return movement
        // to give an immediate effect so we adjust dragstart to reflect that
        if (this.normalizedValue < 0) {
            this._xAtDragStart = e.x + this._normalizedValueAtDragStart * width / speed;
            this.normalizedValue = 0;
        }
        if (this.normalizedValue > 1) {
            this._xAtDragStart = e.x - (1 - this._normalizedValueAtDragStart) * width / speed;
            this.normalizedValue = 1;
        }
        this._value = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].roundToStep(this.normalizedValue * (this.max - this.min) + this.min, this.step);
        this._valueChange.next(this.value);
    };
    GhostSliderComponent.prototype.onDragEnd = function (e) {
        this.state = DragState.None;
    };
    GhostSliderComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GhostSliderComponent.prototype, "_container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GhostSliderComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], GhostSliderComponent.prototype, "value", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GhostSliderComponent.prototype, "valueChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GhostSliderComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GhostSliderComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GhostSliderComponent.prototype, "step", void 0);
    GhostSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ghost-slider',
            template: __webpack_require__(/*! raw-loader!./ghost-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/ghost-slider/ghost-slider.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('expandCollapseBar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('Holding, Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        width: '100%',
                        height: '100%',
                        bottom: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('None, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        width: '75px',
                        height: '5px',
                        bottom: '5px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.2s ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('expandCollapseLabel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('Holding, Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'font-size': '20pt',
                        height: '100%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('None, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        'font-size': '12pt',
                        height: '30px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* <=> *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.2s ease-in-out')
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./ghost-slider.component.sass */ "./src/app/ghost-slider/ghost-slider.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GhostSliderComponent);
    return GhostSliderComponent;
}());



/***/ }),

/***/ "./src/app/renderer/renderer.component.sass":
/*!**************************************************!*\
  !*** ./src/app/renderer/renderer.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".renderer-canvas {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9zaGFkZWJvYnMvc3JjL2FwcC9yZW5kZXJlci9yZW5kZXJlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcmVuZGVyZXIvcmVuZGVyZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZW5kZXJlci9yZW5kZXJlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW5kZXJlci1jYW52YXNcbiAgICBoZWlnaHQ6IDEwMCUiLCIucmVuZGVyZXItY2FudmFzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/renderer/renderer.component.ts":
/*!************************************************!*\
  !*** ./src/app/renderer/renderer.component.ts ***!
  \************************************************/
/*! exports provided: RendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererComponent", function() { return RendererComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fifoqueue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fifoqueue */ "./src/app/fifoqueue.ts");
/* harmony import */ var _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardinal-curve */ "./src/app/cardinal-curve.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/utils/utils.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RendererComponent = /** @class */ (function () {
    function RendererComponent(_changeDetector) {
        var _this = this;
        this._changeDetector = _changeDetector;
        this._previousT = 0;
        this._frameRateMultiplier = 10;
        // The draw buffer size is fixed, regardless of device so that the sine-curve patterns turn out
        // the same on any screen resolution.
        this._bufferSize = [1234, 400];
        this.fps = 0;
        this.red = [[0, 0]];
        this.green = [[0, 0]];
        this.blue = [[0, 0]];
        this.redLookup = [];
        this.greenLookup = [];
        this.blueLookup = [];
        this.tail = 100;
        this.count = 100;
        this.speed = 100;
        this.size = 100;
        this.force = 100;
        this._settingsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._colorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.queue = new _fifoqueue__WEBPACK_IMPORTED_MODULE_2__["FifoQueue"](this.size);
        this._buffer = new Array(this._bufferSize[0] * this._bufferSize[1]);
        this._buffer.fill(0);
        this._settingsChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500)).subscribe(function () { return _this.reset(); });
        this._colorsChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["throttleTime"])(100)).subscribe(function () { return _this.updateImage(); });
    }
    RendererComponent_1 = RendererComponent;
    RendererComponent.buildBob = function (size, force) {
        var bob = new Array(size * size);
        var center = size / 2;
        var k = 0;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var distance = Math.min(size / 2, _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].distance([i, j], [center, center]));
                var normalized = 1 - distance * 2 / size;
                bob[k] = normalized * force;
                k++;
            }
        }
        return bob;
    };
    RendererComponent.prototype.ngOnInit = function () {
    };
    RendererComponent.prototype.ngAfterViewInit = function () {
        var canvas = this._canvas.nativeElement;
        this.context = canvas.getContext('2d');
        canvas.width = this._bufferSize[0];
        canvas.height = this._bufferSize[1];
        this._image = this.context.createImageData(this._bufferSize[0], this._bufferSize[1]);
        this.reset();
        this.renderFrame(0);
    };
    RendererComponent.prototype.ngOnChanges = function (changes) {
        if ('red' in changes) {
            this.redLookup = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.red, 0.5, 100).concat(_cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.red, 0.5, 100).reverse());
        }
        if ('green' in changes) {
            this.greenLookup = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.green, 0.5, 100).concat(_cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.green, 0.5, 100).reverse());
        }
        if ('blue' in changes) {
            this.blueLookup = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.blue, 0.5, 100).concat(_cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.blue, 0.5, 100).reverse());
        }
        if ('red' in changes || 'green' in changes || 'blue' in changes) {
            this._colorsChange.next();
        }
        if ('tail' in changes || 'size' in changes || 'force' in changes || 'count' in changes) {
            this._settingsChange.next();
        }
    };
    RendererComponent.prototype.reset = function () {
        if (!this._canvas) {
            return;
        }
        this.queue = new _fifoqueue__WEBPACK_IMPORTED_MODULE_2__["FifoQueue"](this.tail * this.count);
        this.shadebob = RendererComponent_1.buildBob(this.size, this.force);
        this._buffer.fill(0);
        this.updateImage();
    };
    RendererComponent.prototype.drawBob = function (x, y, size, bob) {
        x -= Math.round(size / 2);
        y -= Math.round(size / 2);
        var redLength = this.redLookup.length;
        var greenLength = this.greenLookup.length;
        var blueLength = this.blueLookup.length;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var k = ((x + i) + (y + j) * this._image.width);
                this._buffer[k] += bob[i + j * size];
                var v = Math.round(this._buffer[k]);
                this._image.data[k * 4 + 0] = this.redLookup[v % redLength];
                this._image.data[k * 4 + 1] = this.greenLookup[v % greenLength];
                this._image.data[k * 4 + 2] = this.blueLookup[v % blueLength];
                this._image.data[k * 4 + 3] = 255;
            }
        }
    };
    RendererComponent.prototype.eraseBob = function (x, y, size, bob) {
        x -= Math.round(size / 2);
        y -= Math.round(size / 2);
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                var k = ((x + i) + (y + j) * this._image.width);
                this._buffer[k] -= bob[i + j * size];
                var v = Math.round(this._buffer[k]);
                this._image.data[k * 4 + 0] = this.redLookup[v % this.redLookup.length];
                this._image.data[k * 4 + 1] = this.greenLookup[v % this.greenLookup.length];
                this._image.data[k * 4 + 2] = this.blueLookup[v % this.blueLookup.length];
                this._image.data[k * 4 + 3] = 255;
            }
        }
    };
    RendererComponent.prototype.renderFrame = function (tActual) {
        var _this = this;
        var t = tActual * this.speed;
        var tPrevious = this._previousT * this.speed;
        var multiplier = Math.round(this._frameRateMultiplier * this.speed);
        var elapsed = t - tPrevious;
        if (t !== tPrevious) {
            for (var j = 0; j < this.count; j++) {
                for (var i = 0; i < multiplier; i++) {
                    var k = tPrevious + elapsed * (i / multiplier) + j * 1000;
                    var x = Math.round(k / 2) % this._bufferSize[0];
                    if (j % 2 === 1) {
                        x = this._bufferSize[0] - x;
                    }
                    var y = Math.round(this._bufferSize[1] * Math.cos(k / 300 + (j / this.count) * 2 * Math.PI) * 0.45 + this._bufferSize[1] / 2);
                    this.drawBob(x, y, Math.sqrt(this.shadebob.length), this.shadebob);
                    if (this.queue.length === this.queue.capacity) {
                        var bob = this.queue.pop();
                        this.eraseBob(bob[0], bob[1], Math.sqrt(this.shadebob.length), this.shadebob);
                    }
                    this.queue.push([x, y]);
                }
            }
        }
        this.context.putImageData(this._image, 0, 0);
        var elapsedMs = tActual - this._previousT;
        this.fps = 1000 / elapsedMs;
        this._changeDetector.detectChanges();
        this._previousT = tActual;
        requestAnimationFrame(function (frameT) { return _this.renderFrame(frameT); });
    };
    RendererComponent.prototype.updateImage = function () {
        if (!this._image) {
            return;
        }
        for (var i = 0; i < this._buffer.length; i++) {
            var k = Math.round(this._buffer[i]);
            this._image.data[i * 4 + 0] = this.redLookup[k % this.redLookup.length];
            this._image.data[i * 4 + 1] = this.greenLookup[k % this.greenLookup.length];
            this._image.data[i * 4 + 2] = this.blueLookup[k % this.blueLookup.length];
            this._image.data[i * 4 + 3] = 255;
        }
    };
    var RendererComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('viewport', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RendererComponent.prototype, "_canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RendererComponent.prototype, "red", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RendererComponent.prototype, "green", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RendererComponent.prototype, "blue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RendererComponent.prototype, "tail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RendererComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RendererComponent.prototype, "speed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RendererComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RendererComponent.prototype, "force", void 0);
    RendererComponent = RendererComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-renderer',
            template: __webpack_require__(/*! raw-loader!./renderer.component.html */ "./node_modules/raw-loader/index.js!./src/app/renderer/renderer.component.html"),
            styles: [__webpack_require__(/*! ./renderer.component.sass */ "./src/app/renderer/renderer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], RendererComponent);
    return RendererComponent;
}());



/***/ }),

/***/ "./src/app/settings.ts":
/*!*****************************!*\
  !*** ./src/app/settings.ts ***!
  \*****************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings(tail, count, speed, size, force, red, green, blue) {
        if (tail === void 0) { tail = 25000; }
        if (count === void 0) { count = 8; }
        if (speed === void 0) { speed = 4; }
        if (size === void 0) { size = 30; }
        if (force === void 0) { force = 1; }
        if (red === void 0) { red = [[0, 0]]; }
        if (green === void 0) { green = [[0, 0]]; }
        if (blue === void 0) { blue = [[0, 0]]; }
        this.tail = tail;
        this.count = count;
        this.speed = speed;
        this.size = size;
        this.force = force;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    return Settings;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.sass":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".settings-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: flex-start;\n}\n\n.setting {\n  width: 100%;\n  height: 40px;\n  position: relative;\n}\n\n.setting-padding {\n  padding-left: 20px;\n  padding-right: 24px;\n}\n\n.setting-label {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  font-weight: 500;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.channel-background {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9zaGFkZWJvYnMvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvdG9yYmpvcm52aWsvcmVwb3Mvc2hhZGVib2JzL3NyYy92YXJpYWJsZXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCRWpCWTtFRm9CWixZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FERUE7RUFDSSxvQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgLi4vLi4vdmFyaWFibGVzLnNhc3NcblxuLnNldHRpbmdzLWNvbnRhaW5lclxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcblxuLnNldHRpbmdcbiAgICB3aWR0aDogMTAwJVxuICAgIGhlaWdodDogNDBweFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuXG4uc2V0dGluZy1wYWRkaW5nXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4XG4gICAgcGFkZGluZy1yaWdodDogMjRweFxuXG4uc2V0dGluZy1sYWJlbFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgIHVzZXItc2VsZWN0OiBub25lXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICBmb250LXdlaWdodDogJGZvbnQtc2VtaWJvbGRcblxuICAgIC8vIEZvciB2ZXJ0aWNhbCBhbGlnbm1lbnRcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuXG4uY2hhbm5lbC1iYWNrZ3JvdW5kXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcbiAgICB1c2VyLXNlbGVjdDogbm9uZSIsIi5zZXR0aW5ncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5zZXR0aW5nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2V0dGluZy1wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufVxuXG4uc2V0dGluZy1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGFubmVsLWJhY2tncm91bmQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59IiwiJHNhbnMtc2VyaWY6IFwiU291cmNlIFNhbnMgUHJvXCIsIEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxuJHNlcmlmOiBNZXJyaXdlYXRoZXIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmXG4kbW9ubzogXCJTb3VyY2UgQ29kZSBQcm9cIiwgQ291cmllciwgbW9ub1xuJGZvbnQtbGlnaHQ6IDMwMFxuJGZvbnQtbm9ybWFsOiA0MDBcbiRmb250LXNlbWlib2xkOiA1MDBcbiRmb250LWJvbGQ6IDcwMCJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardinal-curve */ "./src/app/cardinal-curve.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ghost-slider/ghost-slider.component */ "./src/app/ghost-slider/ghost-slider.component.ts");
/* harmony import */ var _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ghost-curve/ghost-curve.component */ "./src/app/ghost-curve/ghost-curve.component.ts");







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
        var _this = this;
        this.tailChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.speedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.forceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._red = [];
        this._redChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._green = [];
        this._greenChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._blue = [];
        this._blueChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.redChange.subscribe(function () { return _this.updatePalettes(); });
        this.greenChange.subscribe(function () { return _this.updatePalettes(); });
        this.blueChange.subscribe(function () { return _this.updatePalettes(); });
    }
    Object.defineProperty(SettingsComponent.prototype, "tail", {
        get: function () { return this._tail; },
        set: function (value) {
            this._tail = value;
            this.tailChange.next(this.tail);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "count", {
        get: function () { return this._count; },
        set: function (value) {
            this._count = value;
            this.countChange.next(this.count);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "speed", {
        get: function () { return this._speed; },
        set: function (value) {
            this._speed = value;
            this.speedChange.next(this.speed);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "size", {
        get: function () { return this._size; },
        set: function (value) {
            this._size = value;
            this.sizeChange.next(this.size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "force", {
        get: function () { return this._force; },
        set: function (value) {
            this._force = value;
            this.forceChange.next(this.force);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "red", {
        get: function () {
            return this._red;
        },
        set: function (value) {
            this._red = value;
            this._redChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "redChange", {
        get: function () {
            return this._redChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "green", {
        get: function () {
            return this._green;
        },
        set: function (value) {
            this._green = value;
            this._greenChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "greenChange", {
        get: function () {
            return this._greenChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "blue", {
        get: function () {
            return this._blue;
        },
        set: function (value) {
            this._blue = value;
            this._blueChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "blueChange", {
        get: function () {
            return this._blueChange;
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SettingsComponent.prototype, "toolbarColor", {
        get: function () {
            var firstR = this.red[0][1];
            var firstG = this.green[0][1];
            var firstB = this.blue[0][1];
            var sum = firstR + firstG + firstB;
            return sum > 350 ? 'black' : 'white';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "toolbarBackground", {
        get: function () {
            var firstR = this.red[0][1];
            var firstG = this.green[0][1];
            var firstB = this.blue[0][1];
            var sum = firstR + firstG + firstB;
            return sum > 350 ? 'white' : 'black';
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.updatePalettes = function () {
        var steps = 101;
        var paletteR = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.red, 0.5, steps);
        var paletteG = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.green, 0.5, steps);
        var paletteB = _cardinal_curve__WEBPACK_IMPORTED_MODULE_3__["CardinalCurve"].build(this.blue, 0.5, steps);
        this.gradientR = this.buildGradient(paletteR, Array(steps).fill(0), Array(steps).fill(0), Array(steps).fill(1));
        this.gradientG = this.buildGradient(Array(steps).fill(0), paletteG, Array(steps).fill(0), Array(steps).fill(1));
        this.gradientB = this.buildGradient(Array(steps).fill(0), Array(steps).fill(0), paletteB, Array(steps).fill(1));
        this.gradient = this.buildGradient(paletteR, paletteG, paletteB, Array(steps).fill(1));
    };
    SettingsComponent.prototype.buildGradient = function (r, g, b, a) {
        var value = 'linear-gradient(to right';
        for (var i = 0; i < r.length; i++) {
            value += ", rgba(" + r[i] + ", " + g[i] + ", " + b[i] + ", " + a[i] + ") " + i + "%";
        }
        value += ')';
        return {
            background: value
        };
    };
    Object.defineProperty(SettingsComponent.prototype, "isInteracting", {
        get: function () {
            if (this._tailSlider && this._tailSlider.state !== 'None') {
                return true;
            }
            if (this._countSlider && this._countSlider.state !== 'None') {
                return true;
            }
            if (this._speedSlider && this._speedSlider.state !== 'None') {
                return true;
            }
            if (this._sizeSlider && this._sizeSlider.state !== 'None') {
                return true;
            }
            if (this._forceSlider && this._forceSlider.state !== 'None') {
                return true;
            }
            if (this._redCurve && this._redCurve.state !== 'None') {
                return true;
            }
            if (this._greenCurve && this._greenCurve.state !== 'None') {
                return true;
            }
            if (this._blueCurve && this._blueCurve.state !== 'None') {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tailSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__["GhostSliderComponent"])
    ], SettingsComponent.prototype, "_tailSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('countSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__["GhostSliderComponent"])
    ], SettingsComponent.prototype, "_countSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('speedSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__["GhostSliderComponent"])
    ], SettingsComponent.prototype, "_speedSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sizeSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__["GhostSliderComponent"])
    ], SettingsComponent.prototype, "_sizeSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('forceSlider', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_slider_ghost_slider_component__WEBPACK_IMPORTED_MODULE_5__["GhostSliderComponent"])
    ], SettingsComponent.prototype, "_forceSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('redCurve', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_6__["GhostCurveComponent"])
    ], SettingsComponent.prototype, "_redCurve", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('greenCurve', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_6__["GhostCurveComponent"])
    ], SettingsComponent.prototype, "_greenCurve", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('blueCurve', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ghost_curve_ghost_curve_component__WEBPACK_IMPORTED_MODULE_6__["GhostCurveComponent"])
    ], SettingsComponent.prototype, "_blueCurve", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SettingsComponent.prototype, "tail", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsComponent.prototype, "tailChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SettingsComponent.prototype, "count", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsComponent.prototype, "countChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SettingsComponent.prototype, "speed", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsComponent.prototype, "speedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SettingsComponent.prototype, "size", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsComponent.prototype, "sizeChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SettingsComponent.prototype, "force", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SettingsComponent.prototype, "forceChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], SettingsComponent.prototype, "red", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent.prototype, "redChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], SettingsComponent.prototype, "green", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent.prototype, "greenChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], SettingsComponent.prototype, "blue", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent.prototype, "blueChange", null);
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('curve', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('Holding', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('None', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0.0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0.5,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('Holding => Dragging', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => None', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => Holding', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.1s')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slider', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('Holding', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0.7,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('None', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0.0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0.4,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('Holding => Dragging', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => None', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => Holding', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.1s')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('label', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void, None', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'font-size': '12pt'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('Holding, Dragging', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        'font-size': '24pt'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('Holding => Dragging', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => None', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => Holding', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.1s')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('palette', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void, false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true => false', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('false => true', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.2s')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./settings.component.sass */ "./src/app/settings/settings.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/utils/fullscreen.service.ts":
/*!*********************************************!*\
  !*** ./src/app/utils/fullscreen.service.ts ***!
  \*********************************************/
/*! exports provided: Fullscreen2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fullscreen2Service", function() { return Fullscreen2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Fullscreen2Service = /** @class */ (function () {
    function Fullscreen2Service() {
    }
    Object.defineProperty(Fullscreen2Service.prototype, "isFullscreen", {
        get: function () {
            return window.innerHeight === screen.height;
        },
        enumerable: true,
        configurable: true
    });
    Fullscreen2Service.prototype.isSupported = function (document) {
        var doc = document.documentElement;
        return doc.requestFullScreen || doc.mozRequestFullScreen || doc.webkitRequestFullscreen || doc.msRequestFullscreen;
    };
    Fullscreen2Service.prototype.enter = function (document) {
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    };
    Fullscreen2Service.prototype.exit = function (document) {
        var doc = document;
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        }
        else if (doc.mozCancelFullScreen) {
            /* Firefox */
            doc.mozCancelFullScreen();
        }
        else if (doc.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            doc.webkitExitFullscreen();
        }
        else if (doc.msExitFullscreen) {
            /* IE/Edge */
            doc.msExitFullscreen();
        }
    };
    Fullscreen2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Fullscreen2Service);
    return Fullscreen2Service;
}());



/***/ }),

/***/ "./src/app/utils/utils.ts":
/*!********************************!*\
  !*** ./src/app/utils/utils.ts ***!
  \********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var binary_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! binary-search */ "./node_modules/binary-search/index.js");
/* harmony import */ var binary_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(binary_search__WEBPACK_IMPORTED_MODULE_0__);

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.distance = function (a, b) {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    };
    Utils.roundToStep = function (numToRound, numToRoundTo) {
        numToRoundTo = 1 / (numToRoundTo);
        return Math.round(numToRound * numToRoundTo) / numToRoundTo;
    };
    /**
     * Sets/overwrites/inserts one point in the curve.
     */
    Utils.setPoint = function (curve, p) {
        var i = binary_search__WEBPACK_IMPORTED_MODULE_0___default()(curve, p, function (a, b) { return a[0] - b[0]; });
        var count;
        var insertionPoint;
        if (i < 0) {
            insertionPoint = -i - 1;
            count = 0;
        }
        else {
            insertionPoint = i;
            count = 1;
        }
        curve.splice(insertionPoint, count, p);
    };
    /**
     * Overwrites/sets/inserts a range in the curve. [p0, p1] will be either removed or overwritten.
     */
    Utils.setRange = function (curve, p0, p1) {
        if (p0[0] === p1[0]) {
            Utils.setPoint(curve, p1);
        }
        else {
            var left = (p0[0] < p1[0]) ? p0 : p1;
            var right = (p1[0] > p0[0]) ? p1 : p0;
            var insertionPoint = void 0;
            var count = void 0;
            var leftIndex = binary_search__WEBPACK_IMPORTED_MODULE_0___default()(curve, left, function (a, b) { return a[0] - b[0]; });
            var rightIndex = binary_search__WEBPACK_IMPORTED_MODULE_0___default()(curve, right, function (a, b) { return a[0] - b[0]; });
            var leftInclusive = (leftIndex < 0) ? -leftIndex - 1 : leftIndex;
            var rightInclusive = (rightIndex < 0) ? -rightIndex - 1 : rightIndex + 1;
            count = (rightInclusive - leftInclusive);
            insertionPoint = leftInclusive;
            curve.splice(insertionPoint, count, left, right);
        }
    };
    return Utils;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /Users/torbjornvik/repos/shadebobs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map