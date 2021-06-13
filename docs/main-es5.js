(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkimages_grouping_for_upload"] = self["webpackChunkimages_grouping_for_upload"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _images_grouping_images_grouping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./images-grouping/images-grouping.component */
      3317);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _images_grouping_images_grouping_component__WEBPACK_IMPORTED_MODULE_0__.ImagesGroupingComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["igfu-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _images_grouping_images_grouping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./images-grouping/images-grouping.component */
      3317);
      /* harmony import */


      var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @digitalascetic/ngx-pica */
      69094);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angularx-social-login */
      37055);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [{
              id: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.GoogleLoginProvider.PROVIDER_ID,
              provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.GoogleLoginProvider(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GOOGLE_CLIENT_ID)
            }]
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__.NgxPicaModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.SocialLoginModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _images_grouping_images_grouping_component__WEBPACK_IMPORTED_MODULE_2__.ImagesGroupingComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__.NgxPicaModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.SocialLoginModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule]
        });
      })();
      /***/

    },

    /***/
    83881:
    /*!**************************************************!*\
      !*** ./src/app/images-grouping/album.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlbumService": function AlbumService() {
          return (
            /* binding */
            _AlbumService
          );
        },

        /* harmony export */
        "Album": function Album() {
          return (
            /* binding */
            _Album
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AlbumService = /*#__PURE__*/function () {
        function _AlbumService(http) {
          _classCallCheck(this, _AlbumService);

          this.http = http;
          this.albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';
        }

        _createClass(_AlbumService, [{
          key: "albums",
          value: function albums(group, accessToken) {
            var _this = this;

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/json'
              })
            };
            var album = new _Album(group.name);
            var body = {
              "album": album
            };
            return this.http.post(this.albumsUrl, body, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this.handleError(error);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // Return an observable with a user-facing error message.


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
          }
        }]);

        return _AlbumService;
      }();

      _AlbumService.ɵfac = function AlbumService_Factory(t) {
        return new (t || _AlbumService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
      };

      _AlbumService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AlbumService,
        factory: _AlbumService.ɵfac,
        providedIn: 'root'
      });

      var _Album = function _Album(title, productUrl, id, isWriteable) {
        _classCallCheck(this, _Album);

        this.title = title;
        this.productUrl = productUrl;
        this.id = id;
        this.isWriteable = isWriteable;
      };
      /***/

    },

    /***/
    3317:
    /*!**************************************************************!*\
      !*** ./src/app/images-grouping/images-grouping.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "googleLoginOptions": function googleLoginOptions() {
          return (
            /* binding */
            _googleLoginOptions
          );
        },

        /* harmony export */
        "timeDiffDuplicateDefault": function timeDiffDuplicateDefault() {
          return (
            /* binding */
            _timeDiffDuplicateDefault
          );
        },

        /* harmony export */
        "timeDiffGroupDefault": function timeDiffGroupDefault() {
          return (
            /* binding */
            _timeDiffGroupDefault
          );
        },

        /* harmony export */
        "resizeWidthDefault": function resizeWidthDefault() {
          return (
            /* binding */
            _resizeWidthDefault
          );
        },

        /* harmony export */
        "resizeHeightDefault": function resizeHeightDefault() {
          return (
            /* binding */
            _resizeHeightDefault
          );
        },

        /* harmony export */
        "ImagesGroupingComponent": function ImagesGroupingComponent() {
          return (
            /* binding */
            _ImagesGroupingComponent
          );
        },

        /* harmony export */
        "MediaItemsGroup": function MediaItemsGroup() {
          return (
            /* binding */
            _MediaItemsGroup
          );
        },

        /* harmony export */
        "UploadingStatus": function UploadingStatus() {
          return (
            /* binding */
            _UploadingStatus
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _media_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./media-item.service */
      52303);
      /* harmony import */


      var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angularx-social-login */
      37055);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @digitalascetic/ngx-pica */
      69094);
      /* harmony import */


      var _album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./album.service */
      83881);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);

      function ImagesGroupingComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Not signed in");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sign in with");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_2_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.signInWithGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Sign in with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_3_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Sign out");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Logged in with ", ctx_r1.user.provider, "");
        }
      }

      function ImagesGroupingComponent_form_9_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Time diff for duplicates (in sec) must be between 1 and 3600. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_form_9_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Time diff for groups (in sec) must be between 60 and 86400. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_form_9_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Resize width (px) must be between 1 and 10000. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_form_9_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Resize height (px) must be between 1 and 10000. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["timeDiffDuplicate"];
      };

      var _c1 = function _c1() {
        return ["timeDiffGroup"];
      };

      var _c2 = function _c2() {
        return ["resizeWidth"];
      };

      var _c3 = function _c3() {
        return ["resizeHeight"];
      };

      function ImagesGroupingComponent_form_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Time diff for duplicates (in sec)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ImagesGroupingComponent_form_9_div_6_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Time diff for groups (in sec)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ImagesGroupingComponent_form_9_div_12_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Resize width (px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ImagesGroupingComponent_form_9_div_18_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Resize height (px)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ImagesGroupingComponent_form_9_div_24_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.paramsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0)).errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1)).errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2)).errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.paramsForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c3)).errors);
        }
      }

      function ImagesGroupingComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Parameters not valid ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select images for grouping");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ImagesGroupingComponent_form_11_Template_input_change_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.processFiles(_r16.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r4.inputFilesForm);
        }
      }

      function ImagesGroupingComponent_div_12_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Resizing in progress (", ctx_r19.mediaItems.length, " of ", ctx_r19.filesCount, ")");
        }
      }

      function ImagesGroupingComponent_div_12_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("Finished: ", ctx_r20.mediaItems.length, " files resized to ", ctx_r20.resizeWidth, "x", ctx_r20.resizeHeight, "px.");
        }
      }

      function ImagesGroupingComponent_div_12_div_4_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r22.getMediaItemsCount(), " images in ", ctx_r22.mediaItemsGroups.length, " groups ");
        }
      }

      function ImagesGroupingComponent_div_12_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_12_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r23.createGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Create groups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ImagesGroupingComponent_div_12_div_4_p_3_Template, 2, 2, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.getMediaItemsCount());
        }
      }

      function ImagesGroupingComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ImagesGroupingComponent_div_12_p_2_Template, 2, 2, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ImagesGroupingComponent_div_12_p_3_Template, 2, 3, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ImagesGroupingComponent_div_12_div_4_Template, 4, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.mediaItems.length != ctx_r5.filesCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.mediaItems.length == ctx_r5.filesCount);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.filesLoaded);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_13_div_4_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r32.changeLargePreview(group_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r26.largePreview ? "Small preview" : "Large preview");
        }
      }

      function ImagesGroupingComponent_div_13_div_4_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_13_div_4_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);

            var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r36.removeGroup(group_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Remove group");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_9_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_13_div_4_div_9_div_1_div_1_Template_button_click_7_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);

            var item_r41 = restoredCtx.$implicit;

            var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r42.removeItemFromGroup(group_r26, item_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, item_r41.mediaItem.dateTime, "HH:mm:ss"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r41.mediaItem.contentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r41.mediaItem.uploadSuccess ? "Uploaded" : "Not uploaded", " ");
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagesGroupingComponent_div_13_div_4_div_9_div_1_div_1_Template, 11, 6, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r26.mediaItemsForGrouping);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagesGroupingComponent_div_13_div_4_div_9_div_1_Template, 2, 1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", group_r26.show);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_1_ng_template_0_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);

            var item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

            var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r51.removeItemFromGroup(group_r26, item_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 3, item_r49.mediaItem.dateTime, "HH:mm:ss"), " (", item_r49.mediaItem.uploadSuccess ? "Uploaded" : "Not uploaded", ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r49.mediaItem.contentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_1_ng_template_0_Template, 8, 6, "ng-template", 52);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-carousel", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_1_Template, 1, 0, undefined, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("interval", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", group_r26.mediaItemsForGrouping);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ImagesGroupingComponent_div_13_div_4_div_10_ngb_carousel_1_Template, 2, 2, "ngb-carousel", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", group_r26.show);
        }
      }

      function ImagesGroupingComponent_div_13_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_13_div_4_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);

            var group_r26 = restoredCtx.$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r58.changeShowGroup(group_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ImagesGroupingComponent_div_13_div_4_button_4_Template, 2, 1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ImagesGroupingComponent_div_13_div_4_Template_span_blur_5_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);

            var group_r26 = restoredCtx.$implicit;

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r60.updateGroupName(group_r26, _r28.textContent);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ImagesGroupingComponent_div_13_div_4_button_8_Template, 2, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ImagesGroupingComponent_div_13_div_4_div_9_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ImagesGroupingComponent_div_13_div_4_div_10_Template, 2, 1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", group_r26.show ? "Hide " : "Show ", " ", group_r26.mediaItemsForGrouping.length, " images ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", group_r26.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r26.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", group_r26.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !group_r26.largePreview);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", group_r26.largePreview);
        }
      }

      function ImagesGroupingComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Images in groups");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ImagesGroupingComponent_div_13_div_4_Template, 11, 7, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.mediaItemsGroups);
        }
      }

      function ImagesGroupingComponent_div_14_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r65 = ctx.$implicit;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r65.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r61.getDaysDiffFromToday(group_r65.startTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r65.albumId ? "CREATED" : "not created");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r65.mediaItemsForGrouping.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r65.getUploadedCount());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](group_r65.mediaItemsForGrouping.length - group_r65.getUploadedCount());
        }
      }

      function ImagesGroupingComponent_div_14_p_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UPLOADING IN PROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_div_14_p_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UPLOADING SUCCESSFULLY FINISHED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_div_14_p_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "UPLOADING FAILED (see the Groups Overview table for details)");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ImagesGroupingComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Groups overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Uploaded");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Not uploaded");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ImagesGroupingComponent_div_14_tr_16_Template, 13, 6, "tr", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Upload to Google Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_div_14_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r67);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r66.createAlbumsAndMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Create albums and upload files to Google Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ImagesGroupingComponent_div_14_p_35_Template, 2, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ImagesGroupingComponent_div_14_p_36_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ImagesGroupingComponent_div_14_p_37_Template, 2, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.mediaItemsGroups);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getMediaItemsCount());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getUploadedCount());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.getMediaItemsCount() - ctx_r7.getUploadedCount());

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r7.user);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uploadingStatus == "InProgress");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uploadingStatus == "Success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uploadingStatus == "Fail");
        }
      }

      var _googleLoginOptions = {
        scope: 'https://www.googleapis.com/auth/photoslibrary.appendonly'
      };
      var _timeDiffDuplicateDefault = 0;
      var _timeDiffGroupDefault = 7200;
      var _resizeWidthDefault = 1000;
      var _resizeHeightDefault = 1000;

      var _ImagesGroupingComponent = /*#__PURE__*/function () {
        function _ImagesGroupingComponent(ngxPicaService, fb, mediaItemService, albumService, authService) {
          _classCallCheck(this, _ImagesGroupingComponent);

          this.ngxPicaService = ngxPicaService;
          this.fb = fb;
          this.mediaItemService = mediaItemService;
          this.albumService = albumService;
          this.authService = authService;
          this.mediaItems = [];
          this.mediaItemsForGrouping = [];
          this.mediaItemsGroups = [];
          this.inputFilesForm = this.fb.group({
            inputFiles: ''
          });
          this.filesLoaded = false;
          this.groupsCreated = false;
          this.uploadingStatus = _UploadingStatus.None;
          this.picaOptions = {
            exifOptions: {
              forceExifOrientation: false
            },
            aspectRatio: {
              keepAspectRatio: true
            }
          };
          this.paramsForm = this.fb.group({
            timeDiffDuplicate: [_timeDiffDuplicateDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(3600)]],
            timeDiffGroup: [_timeDiffGroupDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(60), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(86400)]],
            resizeWidth: [_resizeWidthDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(10000)]],
            resizeHeight: [_resizeHeightDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(10000)]]
          });
          this.paramsFormShow = true;
        }

        _createClass(_ImagesGroupingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authService.authState.subscribe(function (user) {
              _this2.user = user;
              _this2.loggedIn = user != null;
            });
          }
        }, {
          key: "processFiles",
          value: function processFiles(files) {
            if (files.length > 0) {
              this.filesCount = files.length;
              this.emptyArrays();
              this.getParamsResize();
              this.getMediaItems(files);
            }
          }
        }, {
          key: "emptyArrays",
          value: function emptyArrays() {
            this.mediaItems = [];
            this.mediaItemsForGrouping = [];
            this.mediaItemsGroups = [];
            this.filesLoaded = false;
            this.groupsCreated = false;
            this.uploadingStatus = _UploadingStatus.None;
            this.paramsFormShow = false;
          }
        }, {
          key: "getMediaItems",
          value: function getMediaItems(fileList) {
            var _this3 = this;

            this.ngxPicaService.resizeImages(fileList, this.resizeWidth, this.resizeHeight, this.picaOptions).subscribe(function (file) {
              _this3.readFileBytes(file);
            }, function (err) {
              throw err.err;
            }, function () {
              _this3.filesLoaded = true;
            });
          }
        }, {
          key: "readFileBytes",
          value: function readFileBytes(file) {
            var _this4 = this;

            var readerBytes = new FileReader();
            readerBytes.addEventListener('load', function (event) {
              _this4.readFileUrl(readerBytes, file);
            }, false);
            readerBytes.readAsArrayBuffer(file);
          }
        }, {
          key: "readFileUrl",
          value: function readFileUrl(readerBytes, file) {
            var _this5 = this;

            var readerUrl = new FileReader();
            readerUrl.addEventListener('load', function (event) {
              _this5.createMediaItem(file, readerBytes, readerUrl);
            }, false);
            readerUrl.readAsDataURL(file);
          }
        }, {
          key: "createMediaItem",
          value: function createMediaItem(file, readerBytes, readerUrl) {
            this.mediaItems.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItem(file.name, moment__WEBPACK_IMPORTED_MODULE_0__(file.name, "YYYYMMDD HHmmss"), readerBytes.result, readerUrl.result));
          }
        }, {
          key: "createGroups",
          value: function createGroups() {
            this.emptyArraysExceptMediaItems();
            this.createMediaItemsForGrouping();
            this.calculateTimeDiff();
            this.getParamsTimeDiffs();
            this.identifyDuplicates();
            this.identifyGroups();
            this.groupsCreated = true;
          }
        }, {
          key: "createMediaItemsForGrouping",
          value: function createMediaItemsForGrouping() {
            var _this6 = this;

            this.mediaItems.sort(function (a, b) {
              var nameA = a.name.toUpperCase(); // ignore upper and lowercase

              var nameB = b.name.toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              } // names must be equal


              return 0;
            });
            this.mediaItems.forEach(function (item, i) {
              _this6.mediaItemsForGrouping.push(new _media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemForGrouping(item, i + 1, 0));
            });
          }
        }, {
          key: "calculateTimeDiff",
          value: function calculateTimeDiff() {
            var _this7 = this;

            this.mediaItemsForGrouping.forEach(function (item) {
              if (item.seqNo === 1) {
                item.timeDiff = 0;
              } else {
                var prevItem = _this7.mediaItemsForGrouping.find(function (s) {
                  return s.seqNo === item.seqNo - 1;
                });

                item.timeDiff = item.mediaItem.dateTime.diff(prevItem.mediaItem.dateTime, 'second');
              }
            });
          }
        }, {
          key: "identifyDuplicates",
          value: function identifyDuplicates() {
            var _this8 = this;

            this.mediaItemsForGrouping.forEach(function (item) {
              if (item.seqNo > 1) {
                if (item.timeDiff <= _this8.timeDiffDuplicate) item.isDuplicate = "Y"
                /* Y */
                ;
              }
            });
          }
        }, {
          key: "identifyGroups",
          value: function identifyGroups() {
            var _this9 = this;

            var group;
            var id = 1;
            this.mediaItemsForGrouping.forEach(function (item, i) {
              var groupName = "(new) " + item.mediaItem.dateTime.format('YYYY-MM-DD') + " místo (" + item.mediaItem.dateTime.format('dddd H') + 'h)';
              groupName = _this9.translateWeekdayNamesToCzech(groupName); // if the first file in the sequence, create a new group

              if (i === 0) {
                group = new _MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
                id++; // if not the first file
              } else {
                // if a new group is identified, add current group and create a new group
                if (item.timeDiff > _this9.timeDiffGroup) {
                  _this9.mediaItemsGroups.push(group);

                  group = new _MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
                  id++; // if existing group, add the file to the group and update end time
                } else {
                  group.mediaItemsForGrouping.push(item);
                  group.endTime = item.mediaItem.dateTime;
                }
              } // if the last file in the sequence, add current group


              if (i + 1 === _this9.mediaItemsForGrouping.length) {
                _this9.mediaItemsGroups.push(group);
              }
            });
          }
        }, {
          key: "getMediaItemsCount",
          value: function getMediaItemsCount() {
            var uniqueItemsCount = 0;
            this.mediaItemsGroups.forEach(function (group) {
              uniqueItemsCount += group.mediaItemsForGrouping.length;
            });
            return uniqueItemsCount;
          }
        }, {
          key: "getDaysDiffFromToday",
          value: function getDaysDiffFromToday(groupDate) {
            var todayDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : moment__WEBPACK_IMPORTED_MODULE_0__(moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD'));
            var groupDateDay = moment__WEBPACK_IMPORTED_MODULE_0__(groupDate.format('YYYY-MM-DD'));
            return groupDateDay.diff(todayDay, 'days');
          }
        }, {
          key: "updateGroupName",
          value: function updateGroupName(gr, newName) {
            this.mediaItemsGroups.forEach(function (group) {
              if (group.id === gr.id) {
                group.name = newName;
              }
            });
          }
        }, {
          key: "translateWeekdayNamesToCzech",
          value: function translateWeekdayNamesToCzech(name) {
            return name.replace("Monday", "pondělí").replace("Tuesday", "úterý").replace("Wednesday", "středa").replace("Thursday", "čtvrtek").replace("Friday", "pátek").replace("Saturday", "sobota").replace("Sunday", "neděle");
          } // async/await + for...of loop to ensure sequential API calls
          // not working with arrays' forEach() method

        }, {
          key: "createAlbumsAndMedia",
          value: function createAlbumsAndMedia() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var _iterator, _step, _loop, _ret;

              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.uploadingStatus = _UploadingStatus.InProgress;
                      _iterator = _createForOfIteratorHelper(this.mediaItemsGroups);
                      _context3.prev = 2;
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                        var group;
                        return regeneratorRuntime.wrap(function _loop$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                group = _step.value;

                                if (!(group.albumId == null)) {
                                  _context2.next = 6;
                                  break;
                                }

                                _context2.next = 4;
                                return _this10.albumService.albums(group, _this10.user.authToken).toPromise().then(function (album) {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                                    return regeneratorRuntime.wrap(function _callee$(_context) {
                                      while (1) {
                                        switch (_context.prev = _context.next) {
                                          case 0:
                                            group.albumId = album.id;
                                            _context.next = 3;
                                            return this.createMedia(group);

                                          case 3:
                                          case "end":
                                            return _context.stop();
                                        }
                                      }
                                    }, _callee, this);
                                  }));
                                })["catch"](function () {
                                  return _this10.uploadingStatus = _UploadingStatus.Fail;
                                });

                              case 4:
                                _context2.next = 8;
                                break;

                              case 6:
                                _context2.next = 8;
                                return _this10.createMedia(group);

                              case 8:
                                if (!(_this10.uploadingStatus != _UploadingStatus.InProgress)) {
                                  _context2.next = 10;
                                  break;
                                }

                                return _context2.abrupt("return", "break");

                              case 10:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _loop);
                      });

                      _iterator.s();

                    case 5:
                      if ((_step = _iterator.n()).done) {
                        _context3.next = 12;
                        break;
                      }

                      return _context3.delegateYield(_loop(), "t0", 7);

                    case 7:
                      _ret = _context3.t0;

                      if (!(_ret === "break")) {
                        _context3.next = 10;
                        break;
                      }

                      return _context3.abrupt("break", 12);

                    case 10:
                      _context3.next = 5;
                      break;

                    case 12:
                      _context3.next = 17;
                      break;

                    case 14:
                      _context3.prev = 14;
                      _context3.t1 = _context3["catch"](2);

                      _iterator.e(_context3.t1);

                    case 17:
                      _context3.prev = 17;

                      _iterator.f();

                      return _context3.finish(17);

                    case 20:
                      this.uploadingStatus = this.getMediaItemsCount() == this.getUploadedCount() ? _UploadingStatus.Success : _UploadingStatus.Fail;

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, this, [[2, 14, 17, 20]]);
            }));
          }
        }, {
          key: "createMedia",
          value: function createMedia(group) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this11 = this;

              var _iterator2, _step2, _loop2;

              return regeneratorRuntime.wrap(function _callee4$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _iterator2 = _createForOfIteratorHelper(group.mediaItemsForGrouping);
                      _context6.prev = 1;
                      _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2() {
                        var item;
                        return regeneratorRuntime.wrap(function _loop2$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                item = _step2.value;

                                if (item.mediaItem.uploadSuccess) {
                                  _context5.next = 4;
                                  break;
                                }

                                _context5.next = 4;
                                return _this11.mediaItemService.uploads(item.mediaItem, _this11.user.authToken).toPromise().then(function (uploadToken) {
                                  return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                                    var _this12 = this;

                                    return regeneratorRuntime.wrap(function _callee3$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            _context4.next = 2;
                                            return this.mediaItemService.batchCreate(item.mediaItem, uploadToken, this.user.authToken, group.albumId).toPromise().then(function () {
                                              return item.mediaItem.uploadSuccess = true;
                                            })["catch"](function () {
                                              return _this12.uploadingStatus = _UploadingStatus.Fail;
                                            });

                                          case 2:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee3, this);
                                  }));
                                })["catch"](function () {
                                  return _this11.uploadingStatus = _UploadingStatus.Fail;
                                });

                              case 4:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _loop2);
                      });

                      _iterator2.s();

                    case 4:
                      if ((_step2 = _iterator2.n()).done) {
                        _context6.next = 8;
                        break;
                      }

                      return _context6.delegateYield(_loop2(), "t0", 6);

                    case 6:
                      _context6.next = 4;
                      break;

                    case 8:
                      _context6.next = 13;
                      break;

                    case 10:
                      _context6.prev = 10;
                      _context6.t1 = _context6["catch"](1);

                      _iterator2.e(_context6.t1);

                    case 13:
                      _context6.prev = 13;

                      _iterator2.f();

                      return _context6.finish(13);

                    case 16:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee4, null, [[1, 10, 13, 16]]);
            }));
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(gr) {
            this.mediaItemsGroups.splice(this.mediaItemsGroups.indexOf(gr), 1);
          }
        }, {
          key: "changeShowGroup",
          value: function changeShowGroup(gr) {
            this.mediaItemsGroups.forEach(function (group) {
              if (group.id === gr.id) {
                group.show = !group.show;
              }
            });
          }
        }, {
          key: "changeLargePreview",
          value: function changeLargePreview(gr) {
            this.mediaItemsGroups.forEach(function (group) {
              if (group.id === gr.id) {
                group.largePreview = !group.largePreview;
              }
            });
          }
        }, {
          key: "getUploadedCount",
          value: function getUploadedCount() {
            var uploadedCount = 0;
            this.mediaItemsGroups.forEach(function (group) {
              uploadedCount += group.getUploadedCount();
            });
            return uploadedCount;
          }
        }, {
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.GoogleLoginProvider.PROVIDER_ID, _googleLoginOptions);
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.authService.signOut();
          }
        }, {
          key: "getParamsTimeDiffs",
          value: function getParamsTimeDiffs() {
            this.timeDiffDuplicate = this.paramsForm.get(['timeDiffDuplicate']).value;
            this.timeDiffGroup = this.paramsForm.get(['timeDiffGroup']).value;
          }
        }, {
          key: "getParamsResize",
          value: function getParamsResize() {
            this.resizeWidth = this.paramsForm.get(['resizeWidth']).value;
            this.resizeHeight = this.paramsForm.get(['resizeHeight']).value;
          }
        }, {
          key: "emptyArraysExceptMediaItems",
          value: function emptyArraysExceptMediaItems() {
            this.mediaItemsForGrouping = [];
            this.mediaItemsGroups = [];
            this.groupsCreated = false;
            this.uploadingStatus = _UploadingStatus.None;
          }
        }, {
          key: "removeItemFromGroup",
          value: function removeItemFromGroup(gr, item) {
            this.mediaItemsGroups.forEach(function (group) {
              if (group.id === gr.id) {
                group.mediaItemsForGrouping.splice(group.mediaItemsForGrouping.indexOf(item), 1);
              }
            });
          }
        }, {
          key: "changeParamsFormShow",
          value: function changeParamsFormShow() {
            this.paramsFormShow ? this.paramsFormShow = false : this.paramsFormShow = true;
          }
        }]);

        return _ImagesGroupingComponent;
      }();

      _ImagesGroupingComponent.ɵfac = function ImagesGroupingComponent_Factory(t) {
        return new (t || _ImagesGroupingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__.NgxPicaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_media_item_service__WEBPACK_IMPORTED_MODULE_1__.MediaItemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_album_service__WEBPACK_IMPORTED_MODULE_2__.AlbumService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__.SocialAuthService));
      };

      _ImagesGroupingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ImagesGroupingComponent,
        selectors: [["igfu-images-grouping"]],
        decls: 15,
        vars: 9,
        consts: [[1, "my-width", "mx-auto", "mb-2", "p-3"], ["class", "card text-center", 4, "ngIf"], [1, "btn", "btn-primary", "m-2", 3, "click"], [3, "formGroup", 4, "ngIf"], ["class", "card p-3 mb-2 bg-light text-dark my-width mx-auto", 4, "ngIf"], [4, "ngIf"], [1, "card", "text-center"], [1, "card-block"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", "mb-2", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [3, "formGroup"], [1, "form-group", "row"], ["for", "timeDiffDuplicate", 1, "col-sm", "col-form-label"], [1, "col-sm"], ["id", "timeDiffDuplicate", "type", "text", "formControlName", "timeDiffDuplicate", 1, "form-control"], ["class", "card-text text-danger", 4, "ngIf"], ["for", "timeDiffGroup", 1, "col-sm", "col-form-label"], ["id", "timeDiffGroup", "type", "text", "formControlName", "timeDiffGroup", 1, "form-control"], ["for", "resizeWidth", 1, "col-sm", "col-form-label"], ["id", "resizeWidth", "type", "text", "formControlName", "resizeWidth", 1, "form-control"], ["for", "resizeHeight", 1, "col-sm", "col-form-label"], ["id", "resizeHeight", "type", "text", "formControlName", "resizeHeight", 1, "form-control"], [1, "card-text", "text-danger"], [1, "card", "p-3", "mb-2", "bg-light", "text-dark", "my-width", "mx-auto"], [1, "form-group", "my-width", "mx-auto", "mb-2", "p-3"], ["for", "inputFiles"], ["id", "inputFiles", "type", "file", "accept", "image/*", "multiple", "", 1, "form-control", 3, "change"], ["file", ""], [1, "card-body"], ["class", "card-text text-primary", 4, "ngIf"], [1, "card-text", "text-primary"], ["class", "card-text", 4, "ngIf"], [1, "my-width-groups", "mx-auto", "mb-2", "p-3"], ["class", "card border p-3 mb-2", 4, "ngFor", "ngForOf"], [1, "card", "border", "p-3", "mb-2"], [1, "card-header", "mb-2", "p-3"], ["class", "btn btn-secondary m-2", 3, "click", 4, "ngIf"], ["contenteditable", "", 1, "font-weight-bold", 3, "blur"], ["groupName", ""], ["class", "btn btn-primary m-2", 3, "click", 4, "ngIf"], ["class", "carousel-div", 4, "ngIf"], [1, "btn", "btn-secondary", "m-2", 3, "click"], ["class", "card-body group", 4, "ngIf"], [1, "card-body", "group"], [4, "ngFor", "ngForOf"], [1, "file", "p-3", "mb-2"], [1, "small-img", 3, "src"], [1, "carousel-div"], [3, "interval", 4, "ngIf"], [3, "interval"], ["ngbSlide", ""], [1, "carousel-caption"], [1, "bg-light", "text-primary", "m-2", "p-2"], [1, "picsum-img-wrapper"], [1, "carousel-img", "d-block", "w-100", 3, "src"], [1, "table", "table-bordered", "my-width", "mx-auto", "p-3", "mb-2"], [1, "btn", "btn-primary", "mb-2", 3, "disabled", "click"]],
        template: function ImagesGroupingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Grouping and resizing images for uploading to Google Photos");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ImagesGroupingComponent_div_2_Template, 9, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ImagesGroupingComponent_div_3_Template, 11, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Parameters (grouping, resizing) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImagesGroupingComponent_Template_button_click_7_listener() {
              return ctx.changeParamsFormShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ImagesGroupingComponent_form_9_Template, 25, 9, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ImagesGroupingComponent_div_10_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ImagesGroupingComponent_form_11_Template, 6, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ImagesGroupingComponent_div_12_Template, 5, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ImagesGroupingComponent_div_13_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ImagesGroupingComponent_div_14_Template, 38, 8, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.paramsFormShow ? "Hide" : "Show", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.paramsFormShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.paramsForm.status != "VALID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.paramsForm.status == "VALID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filesCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.getMediaItemsCount());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mediaItemsGroups.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbSlide],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.file[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\n.my-width[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\n.my-width-groups[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n\n.carousel-div[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.carousel-img[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlcy1ncm91cGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJpbWFnZXMtZ3JvdXBpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmlsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc21hbGwtaW1nIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubXktd2lkdGgge1xyXG4gIG1heC13aWR0aDogOTAwcHhcclxufVxyXG5cclxuLm15LXdpZHRoLWdyb3VwcyB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweFxyXG59XHJcblxyXG4uY2Fyb3VzZWwtZGl2IHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4OyAgXHJcbn1cclxuIl19 */"]
      });

      var _MediaItemsGroup = /*#__PURE__*/function () {
        function _MediaItemsGroup(id, startTime, endTime, mediaItemsForGrouping, name) {
          _classCallCheck(this, _MediaItemsGroup);

          this.id = id;
          this.startTime = startTime;
          this.endTime = endTime;
          this.mediaItemsForGrouping = mediaItemsForGrouping;
          this.name = name;
          this.show = true;
          this.largePreview = true;
        }

        _createClass(_MediaItemsGroup, [{
          key: "getUploadedCount",
          value: function getUploadedCount() {
            return this.mediaItemsForGrouping.filter(function (item) {
              return item.mediaItem.uploadSuccess;
            }).length;
          }
        }]);

        return _MediaItemsGroup;
      }();

      var _UploadingStatus;

      (function (UploadingStatus) {
        UploadingStatus["None"] = "None";
        UploadingStatus["InProgress"] = "InProgress";
        UploadingStatus["Success"] = "Success";
        UploadingStatus["Fail"] = "Fail";
      })(_UploadingStatus || (_UploadingStatus = {}));
      /***/

    },

    /***/
    52303:
    /*!*******************************************************!*\
      !*** ./src/app/images-grouping/media-item.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MediaItemService": function MediaItemService() {
          return (
            /* binding */
            _MediaItemService
          );
        },

        /* harmony export */
        "MediaItem": function MediaItem() {
          return (
            /* binding */
            _MediaItem
          );
        },

        /* harmony export */
        "MediaItemForGrouping": function MediaItemForGrouping() {
          return (
            /* binding */
            _MediaItemForGrouping
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MediaItemService = /*#__PURE__*/function () {
        function _MediaItemService(http) {
          _classCallCheck(this, _MediaItemService);

          this.http = http;
          this.uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
          this.batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
        }

        _createClass(_MediaItemService, [{
          key: "uploads",
          value: function uploads(mediaItem, accessToken) {
            var _this13 = this;

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/octet-stream',
                'X-Goog-Upload-Content-Type': 'mime-type',
                'X-Goog-Upload-Protocol': 'raw'
              }),
              observe: "body",
              responseType: "text"
            };
            return this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this13.handleError(error);
            }));
          }
        }, {
          key: "batchCreate",
          value: function batchCreate(mediaItem, uploadToken, accessToken, albumId) {
            var _this14 = this;

            var httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Authorization': 'Bearer ' + accessToken,
                'Content-type': 'application/json'
              })
            };
            var body = {
              "albumId": albumId,
              "newMediaItems": [{
                "description": "",
                "simpleMediaItem": {
                  "fileName": mediaItem.name,
                  "uploadToken": uploadToken
                }
              }]
            };
            return this.http.post(this.batchCreateUrl, body, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (error) {
              return _this14.handleError(error);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // Return an observable with a user-facing error message.


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
          }
        }]);

        return _MediaItemService;
      }();

      _MediaItemService.ɵfac = function MediaItemService_Factory(t) {
        return new (t || _MediaItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
      };

      _MediaItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _MediaItemService,
        factory: _MediaItemService.ɵfac,
        providedIn: 'root'
      });

      var _MediaItem = function _MediaItem(name, dateTime, contentBytes, contentUrl) {
        _classCallCheck(this, _MediaItem);

        this.name = name;
        this.dateTime = dateTime;
        this.contentBytes = contentBytes;
        this.contentUrl = contentUrl;
        this.uploadSuccess = false;
      };

      var _MediaItemForGrouping = function _MediaItemForGrouping(mediaItem, seqNo, timeDiff)
      /* N */
      {
        var isDuplicate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "N";

        _classCallCheck(this, _MediaItemForGrouping);

        this.mediaItem = mediaItem;
        this.seqNo = seqNo;
        this.timeDiff = timeDiff;
        this.isDuplicate = isDuplicate;
      };
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        GOOGLE_CLIENT_ID: '733460469950-84s81fm32dvqku5js9rvlf6llqekr6l4.apps.googleusercontent.com'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 26431,
        "./af.js": 26431,
        "./ar": 81286,
        "./ar-dz": 1616,
        "./ar-dz.js": 1616,
        "./ar-kw": 9759,
        "./ar-kw.js": 9759,
        "./ar-ly": 43160,
        "./ar-ly.js": 43160,
        "./ar-ma": 62551,
        "./ar-ma.js": 62551,
        "./ar-sa": 79989,
        "./ar-sa.js": 79989,
        "./ar-tn": 6962,
        "./ar-tn.js": 6962,
        "./ar.js": 81286,
        "./az": 15887,
        "./az.js": 15887,
        "./be": 14572,
        "./be.js": 14572,
        "./bg": 3276,
        "./bg.js": 3276,
        "./bm": 93344,
        "./bm.js": 93344,
        "./bn": 58985,
        "./bn.js": 58985,
        "./bo": 94391,
        "./bo.js": 94391,
        "./br": 46728,
        "./br.js": 46728,
        "./bs": 5536,
        "./bs.js": 5536,
        "./ca": 41043,
        "./ca.js": 41043,
        "./cs": 70420,
        "./cs.js": 70420,
        "./cv": 33513,
        "./cv.js": 33513,
        "./cy": 6771,
        "./cy.js": 6771,
        "./da": 47978,
        "./da.js": 47978,
        "./de": 46061,
        "./de-at": 25204,
        "./de-at.js": 25204,
        "./de-ch": 2653,
        "./de-ch.js": 2653,
        "./de.js": 46061,
        "./dv": 85,
        "./dv.js": 85,
        "./el": 8579,
        "./el.js": 8579,
        "./en-au": 25724,
        "./en-au.js": 25724,
        "./en-ca": 10525,
        "./en-ca.js": 10525,
        "./en-gb": 52847,
        "./en-gb.js": 52847,
        "./en-ie": 67216,
        "./en-ie.js": 67216,
        "./en-il": 39305,
        "./en-il.js": 39305,
        "./en-in": 73364,
        "./en-in.js": 73364,
        "./en-nz": 79130,
        "./en-nz.js": 79130,
        "./en-sg": 11161,
        "./en-sg.js": 11161,
        "./eo": 50802,
        "./eo.js": 50802,
        "./es": 40328,
        "./es-do": 45551,
        "./es-do.js": 45551,
        "./es-us": 64790,
        "./es-us.js": 64790,
        "./es.js": 40328,
        "./et": 96389,
        "./et.js": 96389,
        "./eu": 52961,
        "./eu.js": 52961,
        "./fa": 26151,
        "./fa.js": 26151,
        "./fi": 7997,
        "./fi.js": 7997,
        "./fil": 58898,
        "./fil.js": 58898,
        "./fo": 37779,
        "./fo.js": 37779,
        "./fr": 28174,
        "./fr-ca": 3287,
        "./fr-ca.js": 3287,
        "./fr-ch": 38867,
        "./fr-ch.js": 38867,
        "./fr.js": 28174,
        "./fy": 50452,
        "./fy.js": 50452,
        "./ga": 45014,
        "./ga.js": 45014,
        "./gd": 74127,
        "./gd.js": 74127,
        "./gl": 72124,
        "./gl.js": 72124,
        "./gom-deva": 6444,
        "./gom-deva.js": 6444,
        "./gom-latn": 37953,
        "./gom-latn.js": 37953,
        "./gu": 76604,
        "./gu.js": 76604,
        "./he": 1222,
        "./he.js": 1222,
        "./hi": 74235,
        "./hi.js": 74235,
        "./hr": 622,
        "./hr.js": 622,
        "./hu": 37735,
        "./hu.js": 37735,
        "./hy-am": 90402,
        "./hy-am.js": 90402,
        "./id": 59187,
        "./id.js": 59187,
        "./is": 30536,
        "./is.js": 30536,
        "./it": 35007,
        "./it-ch": 94667,
        "./it-ch.js": 94667,
        "./it.js": 35007,
        "./ja": 62093,
        "./ja.js": 62093,
        "./jv": 80059,
        "./jv.js": 80059,
        "./ka": 66870,
        "./ka.js": 66870,
        "./kk": 80880,
        "./kk.js": 80880,
        "./km": 1083,
        "./km.js": 1083,
        "./kn": 68785,
        "./kn.js": 68785,
        "./ko": 21721,
        "./ko.js": 21721,
        "./ku": 37851,
        "./ku.js": 37851,
        "./ky": 1727,
        "./ky.js": 1727,
        "./lb": 40346,
        "./lb.js": 40346,
        "./lo": 93002,
        "./lo.js": 93002,
        "./lt": 64035,
        "./lt.js": 64035,
        "./lv": 56927,
        "./lv.js": 56927,
        "./me": 5634,
        "./me.js": 5634,
        "./mi": 94173,
        "./mi.js": 94173,
        "./mk": 86320,
        "./mk.js": 86320,
        "./ml": 11705,
        "./ml.js": 11705,
        "./mn": 31062,
        "./mn.js": 31062,
        "./mr": 92805,
        "./mr.js": 92805,
        "./ms": 11341,
        "./ms-my": 59900,
        "./ms-my.js": 59900,
        "./ms.js": 11341,
        "./mt": 37734,
        "./mt.js": 37734,
        "./my": 19034,
        "./my.js": 19034,
        "./nb": 9324,
        "./nb.js": 9324,
        "./ne": 46495,
        "./ne.js": 46495,
        "./nl": 70673,
        "./nl-be": 76272,
        "./nl-be.js": 76272,
        "./nl.js": 70673,
        "./nn": 72486,
        "./nn.js": 72486,
        "./oc-lnc": 46219,
        "./oc-lnc.js": 46219,
        "./pa-in": 2829,
        "./pa-in.js": 2829,
        "./pl": 78444,
        "./pl.js": 78444,
        "./pt": 53170,
        "./pt-br": 66117,
        "./pt-br.js": 66117,
        "./pt.js": 53170,
        "./ro": 96587,
        "./ro.js": 96587,
        "./ru": 39264,
        "./ru.js": 39264,
        "./sd": 42135,
        "./sd.js": 42135,
        "./se": 95366,
        "./se.js": 95366,
        "./si": 93379,
        "./si.js": 93379,
        "./sk": 46143,
        "./sk.js": 46143,
        "./sl": 196,
        "./sl.js": 196,
        "./sq": 21082,
        "./sq.js": 21082,
        "./sr": 91621,
        "./sr-cyrl": 98963,
        "./sr-cyrl.js": 98963,
        "./sr.js": 91621,
        "./ss": 41404,
        "./ss.js": 41404,
        "./sv": 55685,
        "./sv.js": 55685,
        "./sw": 46490,
        "./sw.js": 46490,
        "./ta": 54106,
        "./ta.js": 54106,
        "./te": 39204,
        "./te.js": 39204,
        "./tet": 83692,
        "./tet.js": 83692,
        "./tg": 86361,
        "./tg.js": 86361,
        "./th": 31735,
        "./th.js": 31735,
        "./tk": 1568,
        "./tk.js": 1568,
        "./tl-ph": 96129,
        "./tl-ph.js": 96129,
        "./tlh": 13759,
        "./tlh.js": 13759,
        "./tr": 81644,
        "./tr.js": 81644,
        "./tzl": 90875,
        "./tzl.js": 90875,
        "./tzm": 16878,
        "./tzm-latn": 11041,
        "./tzm-latn.js": 11041,
        "./tzm.js": 16878,
        "./ug-cn": 74357,
        "./ug-cn.js": 74357,
        "./uk": 74810,
        "./uk.js": 74810,
        "./ur": 86794,
        "./ur.js": 86794,
        "./uz": 28966,
        "./uz-latn": 77959,
        "./uz-latn.js": 77959,
        "./uz.js": 28966,
        "./vi": 35386,
        "./vi.js": 35386,
        "./x-pseudo": 23156,
        "./x-pseudo.js": 23156,
        "./yo": 68028,
        "./yo.js": 68028,
        "./zh-cn": 9330,
        "./zh-cn.js": 9330,
        "./zh-hk": 89380,
        "./zh-hk.js": 89380,
        "./zh-mo": 60874,
        "./zh-mo.js": 60874,
        "./zh-tw": 96508,
        "./zh-tw.js": 96508
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map