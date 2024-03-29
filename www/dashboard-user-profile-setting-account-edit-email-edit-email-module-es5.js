(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-user-profile-setting-account-edit-email-edit-email-module"], {
    /***/
    "/84H":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/user-profile/setting/account/edit-email/edit-email.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\" mode=\"md\">\n      <ion-button mode=\"md\" (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n      <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n        <h1 class=\"ion-no-margin\"><strong>Edit Email</strong></h1>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-item\n            mode=\"ios\"\n            class=\"ion-no-padding auth-inputs\"\n            [class.invalid]=\"!f.email.valid && (f.email.touched || f.email.dirty || isSubmitted)\"\n          >\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input email formControlName=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text color=\"danger\" *ngIf=\"!f.email.valid && (f.email.dirty || isSubmitted)\">\n            <small>Please enter a valid email.</small>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"danger\" fill=\"outline\" shape=\"round\" expand=\"block\" type=\"submit\"\n            >Save\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center ion-justify-content-center ion-margin-top\">\n        <ion-col sizeXs=\"12\" sizeSm=\"12\" sizeMd=\"7\" sizeXl=\"4\" sizeLg=\"6\">\n          <ion-button mode=\"ios\" color=\"medium\" fill=\"outline\" shape=\"round\" expand=\"block\" (click)=\"back()\"\n            >Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "3mxO":
    /*!****************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-email/edit-email.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function mxO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWVtYWlsLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "EzUz":
    /*!****************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-email/edit-email.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: EditEmailPageModule */

    /***/
    function EzUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmailPageModule", function () {
        return EditEmailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _edit_email_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./edit-email.page */
      "LaP9");

      var routes = [{
        path: '',
        component: _edit_email_page__WEBPACK_IMPORTED_MODULE_7__["EditEmailPage"]
      }];

      var EditEmailPageModule = function EditEmailPageModule() {
        _classCallCheck(this, EditEmailPageModule);
      };

      EditEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        declarations: [_edit_email_page__WEBPACK_IMPORTED_MODULE_7__["EditEmailPage"]],
        providers: [_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_1__["OnBoardingService"]]
      })], EditEmailPageModule);
      /***/
    },

    /***/
    "LaP9":
    /*!**************************************************************************************!*\
      !*** ./src/app/dashboard/user-profile/setting/account/edit-email/edit-email.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: EditEmailPage */

    /***/
    function LaP9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditEmailPage", function () {
        return EditEmailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-email.page.html */
      "/84H");
      /* harmony import */


      var _edit_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-email.page.scss */
      "3mxO");
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../services/shared.service */
      "zuHl");
      /* harmony import */


      var _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../../../services/on-boarding.service */
      "DkPS");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "sZkV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var EditEmailPage = /*#__PURE__*/function () {
        function EditEmailPage(formBuilder, router, navController, onBoardingService, sharedService) {
          _classCallCheck(this, EditEmailPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.navController = navController;
          this.onBoardingService = onBoardingService;
          this.sharedService = sharedService;
          this.isSubmitted = false;
          this.sharedService.gaTrackView('Edit Email Screen');
        }

        _createClass(EditEmailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userForm = this.formBuilder.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$')])],
              _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.userForm.controls;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserProfile();
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            var _this = this;

            try {
              this.sharedService.presentLoader('Please wait...');
              this.onBoardingService.getUserProfile().subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.sharedService.dismissLoader();

                          if (res.data) {
                            this.userForm.get('email').setValue(res.data.email);
                            this.userForm.get('_id').setValue(res.data._id);
                          }

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, function (error) {
                _this.sharedService.dismissLoader();

                console.log(error);
              });
            } catch (error) {
              this.sharedService.dismissLoader();
              console.log(error);
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.sharedService.gaTrackEvent('SaveEditEmail', 'EditEmailScreen');
            this.isSubmitted = true;

            if (this.userForm.invalid) {
              return;
            }

            try {
              this.sharedService.presentLoader('Please wait...');
              this.onBoardingService.updateUserEmail(this.userForm.value).subscribe(function (res) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          this.sharedService.dismissLoader();
                          this.sharedService.presentToast(res.message);
                          this.back();

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              }, function (error) {
                console.log(error);

                _this2.sharedService.dismissLoader();
              });
            } catch (error) {
              console.log(error);
              this.sharedService.dismissLoader();
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.navController.setDirection('back');
            this.router.navigate(['/account']);
          }
        }]);

        return EditEmailPage;
      }();

      EditEmailPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"]
        }, {
          type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      };

      EditEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-edit-email',
        template: _raw_loader_edit_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_on_boarding_service__WEBPACK_IMPORTED_MODULE_4__["OnBoardingService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])], EditEmailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dashboard-user-profile-setting-account-edit-email-edit-email-module-es5.js.map