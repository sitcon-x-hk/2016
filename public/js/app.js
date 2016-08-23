/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(2);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _routing = __webpack_require__(3);

	var _routing2 = _interopRequireDefault(_routing);

	var _Logo = __webpack_require__(14);

	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('logo', _Logo2.default);
	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default({
	  saveScrollPosition: true
	});

	(0, _routing2.default)(router);

	router.start({}, '#app');

	$('html').niceScroll();
	$(document.getElementsByClassName('button-collapse')).sideNav();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = VueRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (router) {
	  router.map({
	    '/': {
	      component: __webpack_require__(4)
	    },
	    'intro': {
	      component: __webpack_require__(6)
	    },
	    'coc': {
	      component: __webpack_require__(8)
	    },
	    'sponsor': {
	      component: __webpack_require__(10)
	    },
	    'cfp': {
	      component: __webpack_require__(12)
	    }
	  });
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\">\n    <div class=\"col s12 m12\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <logo></logo>\n            </div>\n            <div class=\"card-content\">\n                <h2 class=\"card-title secondary-text bold-text center-align\">SITCON x HK</h2>\n                <div class=\"center-align\">\n                    <p>A conference and community for Student</p>\n                    <hr>\n                    <p>Date: 22 Oct 2016</p>\n                    <p>Venue: City University of Hong Kong Academic 1</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./intro.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\">\n    <div class=\"col s12 m12\">\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <h3 class=\"card-title\">Introduction</h3>\n                <p>\n                    SITCON Student IT Conference, formed by students with passion in IT,\n                    a student-centered organisation hope to provide a stage\n                    for all Hong Kong students to express and develop their talent with Open Source.\n                </p>\n                <p>\n                    The theme of year 2016 is \"Let's Open Source\",\n                    hoping to join students in the world of Open Source.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./coc.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\">\n    <div class=\"col s12 m12\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <logo></logo>\n            </div>\n            <div class=\"card-content\">\n                <h2 class=\"card-title center-align\">Code of Conduct</h2>\n                <p>\n                    Hong Kong is a pluralistic society,\n                    everyone has different points of view about different people and things,\n                    and everyone should be respect, tolerance and acceptance,\n                    and understand <strong>Harmonious but Different</strong>.\n                </p>\n                <p>\n                    SITCON x HK hopes to build the stage for students,\n                    and we are committed to providing a more friendly and\n                    open environment for every member of the community.\n                    We believe that each of the partners involved\n                    in community activities are worthy of respect,\n                    and we will do our best to provide the most secure environment\n                    in which to participate in every event SITCON friends\n                    to recognize the differences between individuals,\n                    and mutual support in the community and encourage each other to express themselves.\n                    Therefore, if we have the opportunity to meet in the SITCON community,\n                    whether your identity are the participant, sponsors, staff,\n                    or speakers participating in activities,\n                    we hope that you abide by the <strong>Code of Conduct</strong>.\n                </p>\n                <p>\n                    Our code of conduct is according to \"Sex Discrimination Ordinance\" (Cap. 480),\n                    \"Disability Discrimination Ordinance\" (Cap. 487),\n                    \"Family Status Discrimination Ordinance\" (Chapter 527),\n                    (Cap. 602), \"Race Discrimination Ordinance\" (Article 22),\n                    and the United Nations Convention relating to discrimination\n                    (including but not limited to, \"International Covenant on Civil and Political Rights\",\n                    \"International Covenant on Economic, Social and Cultural Rights\",\n                    \"Convention on the Elimination of All Forms of Discrimination Against Women\",\n                    \"Convention on the Elimination of All Forms of Racial Discrimination\",\n                    \"Convention on the Rights of Persons with Disabilities\",\n                    \"Convention on the Rights of the Child, CRC\"\n                    and the \"United Nations Convention against Torture\" ).\n                </p>\n                <p>\n                    We hope you can:\n                </p>\n                <ul>\n                    <li>Respect for every participant, the other's feelings in mind</li>\n                    <li>Avoid using words and gestures implications of insulting, discrimination, harassment</li>\n                    <li>More concerned about the surrounding community partners, moderately asked whether other needs assistance</li>\n                    <li>Seek for support and assistance of staff if in danger or things going wrong</li>\n                    <li>Make more friends in the conference, treasure the time being together!</li>\n                </ul>\n                <p>\n                    The following behavior is not tolerated by the community:\n                </p>\n                <ul>\n                    <li>Provocative or offensive against gender, sexual orientation, race, appearance, religion, age, physical condition, political affiliation, position or personal identity</li>\n                    <li>Any form of sexual harassment, verbal and physical bullying</li>\n                    <li>Publish, display or projection contain insults, discrimination, hatred, violence, or sexually suggestive remarks, images, or video</li>\n                    <li>Unreasonably interfere the normal rundown of the agenda or the event, ignoring the warning of staff or participant</li>\n                    <li>Interference or attack the network at the venue, recording packet or distributing personal information without permission</li>\n                    <li>Violations of the law</li>\n                </ul>\n                <p>\n                    In order to ensure the safety and individual rights of each participant,\n                    we will abide by the above rules.\n                    For participants in violation of the Code of Conduct or the laws of Hong Kong,\n                    we will take the necessary and reasonable measures to be intervention,\n                    including but not limited to requesting the participants to leave the conference hall,\n                    removing from the related list, or list as unwelcome person,\n                    or transfer to the law-enforcement authority when necessary.\n                    If you or someone else experiencing the above situation, or have any other concerns,\n                    please seek for help of SITCON staff immediately.\n                    We sincerely invite friends coming to SITCON x HK to fulfill the above commitment,\n                    make SITCON x HK become a friendly, warm place;\n                    Let every participant can grow together in the exchange of the community,\n                    being confidence during the interact with each other.\n                </p>\n                <strong>This is the true creed what we treasure and belonging to the student community!!</strong>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./sponsor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\">\n    <div class=\"col s12 m12\">\n        <div class=\"card\">\n            <div class=\"card-image\">\n                <logo></logo>\n            </div>\n            <div class=\"card-content\">\n                <h4>Call for Sponsor</h4>\n                <p>\n                    A conference require lots of factors to make it awesome.\n                    Sponsoring can help us to make SITCON x HK great.\n                    We welcome any kind of sponsors including personal sponsor and company sponsor.\n                </p>\n                <p>\n                    Please contact us with email to get more detail:\n                    <a href=\"mailto:sponsor@hk.sitcon.org\" class=\"secondary-text\">sponsor@hk.sitcon.org</a>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./cfp.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"row\">\n    <div class=\"col s12 m12\">\n        <h1 class=\"bold-text secondary-text\">Call for Paper</h1>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"card-title\">Keynote: Contribute Open Source</div>\n                <p>\n                    Open Source is not just about free of charge,\n                    it also connect the developers, users, promoters and form a community.\n                    Users report bugs, suggest features, developers implements the programme and\n                    helping each other. In someone mind, Open Source meaning that free of charge and\n                    cannot make any money. In this keynote, hoping to let the speaker to tell everybody\n                    that it is not hard to contribute Open Source, it is something everyone can do.\n                    Involving in Open Source also can make enough money.\n                    Last but not least, encouraging everyone to contribute every small part they can in Open Source\n                    to make the world better.\n                </p>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"card-title\">Topic</div>\n                <p>\n                    Topic is <strong>NOT REQUIRED</strong> to related to Open Source\n                    but it is welcome to be related to Open Source.\n                </p>\n                <p>\n                    We specially welcome topic related to students.\n                    From the point of view of students to share skill, experience.\n                </p>\n                <p>\n                    In general, any topic related to information technology or computer are welcome.\n                </p>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"card-title\">Submitting the Paper</div>\n                <p>Deadline: 15 Sept 2016</p>\n                Format:\n                <ul>\n                    <li>Title: Required</li>\n                    <li>\n                        Contact Information: Required, including your name,\n                        mobile phone number, school / company, job title,\n                        just for us to contact you\n                    </li>\n                    <li>Session Type: Required, preference of type of session</li>\n                    <li>Nickname: Optional, for displaying on website and other public document</li>\n                    <li>Self Introduction: Required, for displaying on website and other public document</li>\n                    <li>Summary: Required, around 200 words, for introducing on website and other public document</li>\n                    <li>\n                        Detail: Optional, for letting us to know more about the topic, you may attach code and slide, etc.\n                        Strongly recommend to provide.\n                    </li>\n                </ul>\n                Please send the above information to <a href=\"mailto:cfp@hk.sitcon.org\">cfp@hk.sitcon.org</a>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"card-title\">Rehearsal</div>\n                <ul>\n                    <li>Date: 21 Oct 2016</li>\n                    <li>Venue: Same as the formal conference, will receive later after the paper accepting letter</li>\n                    <li>Time: around 5 - 10 minutes, please contact us if any special needs</li>\n                    <li>Providing equipment: Same as the formal conference, misc and timer, etc.</li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logo = _vue2.default.extend({
	  template: '<img src="./images/logo/sitcon-x-hk-color.png">'
	});

	exports.default = Logo;

/***/ }
/******/ ]);