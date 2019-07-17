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

module.exports = "<div class=\"box\" (click)=\"flash()\">\n  This is some text\n  <app-shiny-frame #shiny class=\"shiny\"></app-shiny-frame>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shiny-frame/shiny-frame.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shiny-frame/shiny-frame.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: horizontalDuration + 's', left: -length + 'px', right: clientWidth + 'px', easing: 'ease-in' } }\"\n    [ngStyle]=\"top\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: horizontalDuration + 's', left: -length + 'px', right: clientWidth + 'px', easing: 'ease-in'  } }\"\n    [ngStyle]=\"topBlur\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: horizontalDuration + 's', delay: bottomDelay + 's', left: -length + 'px', right: clientWidth + 'px', easing: 'ease-out'} }\"\n    (@highlighting.done)=\"endHighlighting()\"\n    [ngStyle]=\"bottom\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: horizontalDuration + 's', delay: bottomDelay + 's', left: -length + 'px', right: clientWidth + 'px', easing: 'ease-out' } }\"\n    [ngStyle]=\"bottomBlur\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: verticalDuration + 's', top: -length + 'px', bottom: clientHeight + 'px', easing: 'ease-in'  } }\"\n    [ngStyle]=\"left\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: verticalDuration + 's', top: -length + 'px', bottom: clientHeight + 'px', easing: 'ease-in'  } }\"\n    [ngStyle]=\"leftBlur\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: verticalDuration + 's', delay: rightDelay + 's', top: -length + 'px', bottom: clientHeight + 'px', easing: 'ease-out'  } }\"\n    [ngStyle]=\"right\">\n</div>\n\n<div \n    class=\"border\"\n    [@highlighting]=\"{value: highlighting, params: { duration: verticalDuration + 's', delay: rightDelay + 's', top: -length + 'px', bottom: clientHeight + 'px', easing: 'ease-out'  } }\"\n    [ngStyle]=\"rightBlur\">\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  width: 400px;\n  height: 100px;\n  top: 100px;\n  left: 100px;\n  position: absolute;\n  box-sizing: border-box;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 100px;\n}\n\n.shiny {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9uZy1nbGludC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgXG4uYm94XG4gICAgd2lkdGg6IDQwMHB4XG4gICAgaGVpZ2h0OiAxMDBweFxuICAgIHRvcDogMTAwcHhcbiAgICBsZWZ0OiAxMDBweFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgICBjb2xvcjogd2hpdGVcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4XG5cblxuLnNoaW55XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICB0b3A6IDBcbiAgICBsZWZ0OiAwXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUiLCIuYm94IHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uc2hpbnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shiny_frame_shiny_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiny-frame/shiny-frame.component */ "./src/app/shiny-frame/shiny-frame.component.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-glint';
    }
    flash() {
        this._shiny.highlight();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shiny', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shiny_frame_shiny_frame_component__WEBPACK_IMPORTED_MODULE_2__["ShinyFrameComponent"])
], AppComponent.prototype, "_shiny", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shiny_frame_shiny_frame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shiny-frame/shiny-frame.component */ "./src/app/shiny-frame/shiny-frame.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shiny_frame_shiny_frame_component__WEBPACK_IMPORTED_MODULE_5__["ShinyFrameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shiny-frame/shiny-frame.component.sass":
/*!********************************************************!*\
  !*** ./src/app/shiny-frame/shiny-frame.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border {\n  position: absolute;\n  background-repeat: no-repeat;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b3Jiam9ybnZpay9yZXBvcy9uZy1nbGludC9zcmMvYXBwL3NoaW55LWZyYW1lL3NoaW55LWZyYW1lLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9zaGlueS1mcmFtZS9zaGlueS1mcmFtZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNJLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9zaGlueS1mcmFtZS9zaGlueS1mcmFtZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJHRoaWNrbmVzczogMXB4XG4kYmx1cjogNXB4XG4kZ3JhZGllbnQtc2l6ZTogMjAwcHhcbiRibHVyLW9wYWNpdHk6IDAuNVxuXG4uYm9yZGVyXG4gICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lXG4gICAgdXNlci1zZWxlY3Q6IG5vbmUiLCIuYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/shiny-frame/shiny-frame.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shiny-frame/shiny-frame.component.ts ***!
  \******************************************************/
/*! exports provided: ShinyFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShinyFrameComponent", function() { return ShinyFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let ShinyFrameComponent = class ShinyFrameComponent {
    constructor(_host, sanitizer) {
        this._host = _host;
        this.sanitizer = sanitizer;
        this.highlighting = false;
    }
    ngOnInit() {
    }
    get clientHeight() {
        return this._host.nativeElement.clientHeight;
    }
    get clientWidth() {
        return this._host.nativeElement.clientWidth;
    }
    get backgroundSize() {
        return `${this.clientHeight * 3}px ${this.clientHeight}px`;
    }
    highlight() {
        this.highlighting = true;
    }
    endHighlighting() {
        this.highlighting = false;
    }
    // duration in seconds
    get duration() {
        return 0.8;
    }
    get thickness() {
        return 1;
    }
    get length() {
        return 200;
    }
    // pixels/sec
    get speed() {
        return (this.clientWidth + this.clientHeight + this.length) / this.duration;
    }
    get verticalDuration() {
        return (this.clientHeight + this.length) / this.speed;
    }
    get horizontalDuration() {
        return (this.clientWidth + this.length) / this.speed;
    }
    get bottomDelay() {
        return this.clientHeight / this.speed;
    }
    get rightDelay() {
        return this.clientWidth / this.speed;
    }
    get blur() {
        return 5;
    }
    get blurOpacity() {
        return 0.8;
    }
    getGradient2(name, direction) {
        let gradient;
        switch (name) {
            case 'yellow2':
                gradient = `linear-gradient(${direction}, rgba(255,202,104,0) 0%,rgba(255,237,209,1) 99%,rgba(255,202,104,0) 100%)`;
                break;
        }
        return gradient;
    }
    get top() {
        return {
            width: '100%',
            height: `${this.thickness}px`,
            top: 0,
            left: 0,
            'background-size': `${this.length}px ${this.thickness}px`,
            'background-image': this.getGradient2('yellow2', 'to right')
        };
    }
    get topBlur() {
        return {
            width: '100%',
            height: `${this.thickness + this.blur * 2}px`,
            top: `-${this.blur}px`,
            left: 0,
            'background-size': `${this.length}px ${this.thickness + this.blur * 2}px`,
            filter: `blur(${this.blur}px)`,
            opacity: this.blurOpacity,
            'background-image': this.getGradient2('yellow2', 'to right')
        };
    }
    get bottom() {
        return {
            width: '100%',
            height: `${this.thickness}px`,
            bottom: 0,
            left: 0,
            'background-size': `${this.length}px ${this.thickness}px`,
            'background-image': this.getGradient2('yellow2', 'to right')
        };
    }
    get bottomBlur() {
        return {
            width: '100%',
            height: `${this.thickness + this.blur * 2}px`,
            bottom: `-${this.blur}px`,
            left: 0,
            'background-size': `${this.length}px ${this.thickness + this.blur * 2}px`,
            filter: `blur(${this.blur}px)`,
            opacity: this.blurOpacity,
            'background-image': this.getGradient2('yellow2', 'to right')
        };
    }
    get left() {
        return {
            height: '100%',
            width: `${this.thickness}px`,
            top: 0,
            left: 0,
            'background-size': `${this.thickness}px ${this.length}px`,
            'background-image': this.getGradient2('yellow2', 'to bottom')
        };
    }
    get leftBlur() {
        return {
            height: '100%',
            width: `${this.thickness + this.blur * 2}px`,
            top: 0,
            left: `-${this.blur}px`,
            'background-size': `${this.thickness + this.blur * 2}px ${this.length}px`,
            filter: `blur(${this.blur}px)`,
            overflow: 'visible',
            opacity: this.blurOpacity,
            'background-image': this.getGradient2('yellow2', 'to bottom')
        };
    }
    get right() {
        return {
            height: '100%',
            width: `${this.thickness}px`,
            top: 0,
            right: 0,
            'background-size': `${this.thickness}px ${this.length}px`,
            'background-image': this.getGradient2('yellow2', 'to bottom')
        };
    }
    get rightBlur() {
        return {
            height: '100%',
            width: `${this.thickness + this.blur * 2}px`,
            top: 0,
            right: `-${this.blur}px`,
            'background-size': `${this.thickness + this.blur * 2}px ${this.length}px`,
            filter: `blur(${this.blur}px)`,
            overflow: 'visible',
            opacity: this.blurOpacity,
            'background-image': this.getGradient2('yellow2', 'to bottom')
        };
    }
};
ShinyFrameComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
ShinyFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shiny-frame',
        template: __webpack_require__(/*! raw-loader!./shiny-frame.component.html */ "./node_modules/raw-loader/index.js!./src/app/shiny-frame/shiny-frame.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('highlighting', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    'background-position-x': '{{ left }}',
                    'background-position-y': '{{ top }}'
                }), { params: { left: '0px', top: '0px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    'background-position-x': '{{ right }}',
                    'background-position-y': '{{ bottom }}'
                }), { params: { right: '0px', bottom: '0px' } }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ duration }} {{ delay }}')
                ], { params: { duration: '1s', delay: '0s', easing: 'ease-in-out' } })
            ])
        ],
        styles: [__webpack_require__(/*! ./shiny-frame.component.sass */ "./src/app/shiny-frame/shiny-frame.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], ShinyFrameComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/torbjornvik/repos/ng-glint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map