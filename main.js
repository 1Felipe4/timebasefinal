(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\1feli\Documents\Code\Web Development\Time Based Media\costaatt-web-design\src\main.ts */"zUnb");


/***/ }),

/***/ "2XBo":
/*!******************************************************!*\
  !*** ./src/app/campus-list/campus-list.component.ts ***!
  \******************************************************/
/*! exports provided: CampusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusListComponent", function() { return CampusListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_campuses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/campuses */ "BwSU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CampusListComponent_div_6_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tel_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tel_r3);
} }
function CampusListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CampusListComponent_div_6_span_15_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campus_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/", campus_r1.imgSrc, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Image of ", campus_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campus_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campus_r1.location, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", campus_r1.tel);
} }
class CampusListComponent {
    constructor() {
        this.campuses = _data_campuses__WEBPACK_IMPORTED_MODULE_1__["CAMPUSES"];
    }
    ngOnInit() {
    }
}
CampusListComponent.ɵfac = function CampusListComponent_Factory(t) { return new (t || CampusListComponent)(); };
CampusListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampusListComponent, selectors: [["app-campus-list"]], decls: 7, vars: 1, consts: [[1, "section", "section--campus-list"], [1, "section__inner"], [1, "campus-list__content"], [1, "heading-primary"], [1, "grid", "grid--quarters"], ["class", "card campus-list__content", 4, "ngFor", "ngForOf"], [1, "card", "campus-list__content"], [1, "card__inner"], [1, "card__front"], [1, "card__content"], [1, "campus-list__info"], [1, "card__img", 3, "src", "alt"], [1, "campus-list__text"], [1, "campus-card__title"], [1, "card__back"], [1, "campus-list__location"], [1, "campus-card__tels"], ["class", "campus-card__tel text-bubble", 4, "ngFor", "ngForOf"], [1, "campus-card__tel", "text-bubble"]], template: function CampusListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Campuses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CampusListComponent_div_6_Template, 16, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campuses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wdXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CampusListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-campus-list',
                templateUrl: './campus-list.component.html',
                styleUrls: ['./campus-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "BwSU":
/*!**********************************!*\
  !*** ./src/app/data/campuses.ts ***!
  \**********************************/
/*! exports provided: CAMPUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMPUSES", function() { return CAMPUSES; });
const CAMPUSES = [
    { id: 1, name: "Chaguanas Campus", location: "PIERRE ROAD CONNECTOR CHAGUANAS", tel: ["(868) 625-5030 EXT 5243"], imgSrc: "img/chaguanas.jpg" },
    { id: 2, name: "City Campus", location: "BRETTON HALL BUILDING, 9-11 MELVILLE LANE, PORT OF SPAIN", tel: ["(868) 625-5030"], imgSrc: "img/city.jpg" },
    { id: 3, name: "El Dorado Campus", location: "ACADEMY OF NURSING AND ALLIED HEALTH, CORNER COLLEGE AND ST CECELIA ROADS, EL DORADO", tel: ["(868) 625-5030 EXT 5800"], imgSrc: "img/ANAH.jpg" },
    { id: 4, name: "KEN GORDON SCHOOL OF JOURNALISM AND COMMUNICATION STUDIES", location: "NORTH LEARNING CENTRE 6 ALCAZAR STREET, ST. CLAIR, PORT OF SPAIN", tel: ["(868) 628-4600/2", "(868) 625-5030 EXT 5060"], imgSrc: "img/ken-gordon.jpg" },
    { id: 5, name: "Tobago Campus", location: "GLEN ROAD #1, WILSON ROAD, SCARBOROUGH, TOBAGO", tel: ["(868) 625-5030 EXT 5600"], imgSrc: "img/tobago.jpg" },
    { id: 6, name: "SANGRE GRANDE CAMPUS", location: "121 EASTERN MAIN ROAD, SANGRE GRANDE", tel: ["(868) 625-5030 EXT 5650"], imgSrc: "img/sangre-grande.jpg" },
    { id: 7, name: "SOUTH CAMPUS", location: "40-44 SUTTON STREET, SAN FERNANDO", tel: ["(868) 625-5030"], imgSrc: "img/south2.jpg" },
    { id: 8, name: "Online", location: "Online", tel: ["(868) 625-5030"], imgSrc: "img/online.jpg" }
];


/***/ }),

/***/ "CIGC":
/*!************************************!*\
  !*** ./src/app/data/programmes.ts ***!
  \************************************/
/*! exports provided: PROGRAMMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRAMMES", function() { return PROGRAMMES; });
/* harmony import */ var _data_campuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/campuses */ "BwSU");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses */ "SDsJ");


const PROGRAMMES = [
    { id: 1, name: "BA Journalism",
        description: "The programme is unique in its relevance to the marketplace as it combines theoretical analysis with practical industry-immersion. This degree takes cognizance of the constitutional foundation of freedom of expression, freedom of the press and its pillars of responsibility, accuracy, balance and fairness. It offers students not only expanded knowledge but the opportunity for growth in personal development. It aims to produce change agents who, having moved seamlessly into newsrooms across the country can begin to lift the standard of news gathering and reporting to the heights of excellence.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "4 Years (FT) 5/6 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Bachelor Degree"
    },
    { id: 2, name: "BA Film and Video Production",
        description: "This degree is a hybrid of two distinctive programmes that combines theoretical analysis with practical classroom/industry immersion. Students will be exposed to all the elements of filmmaking such as producing, editing, directing, screenwriting, cinematography, the study of sound and film and television studies. It seeks not only to produce graduates who are immediately employable but also self-starters with a distinct entrepreneurial zeal.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "4 Years (FT) 5/6 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        major_courses: [_courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][0], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][1], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][2], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][3], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][4], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][5], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][6], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][7], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][8], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][9],
            _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][10], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][11], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][12], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][13], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][14], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][15], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][16], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][17], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][18], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][19],
            _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][20], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][21], _courses__WEBPACK_IMPORTED_MODULE_1__["COURSES"][22]],
        type: "Bachelor Degree"
    },
    { id: 3, name: "AA Journalism",
        description: "The programme combines theoretical analysis with practical industry-immersion. This associate degree takes cognizance of the constitutional foundation of freedom of expression, freedom of the press and its pillars of responsibility, accuracy, balance and fairness. It aims to produce graduates who can move easily into newsrooms across the country. It is the first two years of the BA in Journalism.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "2 Years (FT) 3 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Associate Degree"
    },
    { id: 4, name: "AAS Journalism and Public Relations",
        description: "The programme is designed to enable students to function as paraprofessionals in dynamic and fast-paced media and communication environments. It facilitates their advancement to increasingly higher levels of responsibility in the workplace and provides them with a solid foundation of theoretical knowledge and practical skills needed to pursue studies at undergraduate level.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "2 Years (FT) 3 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Associate Degree"
    },
    { id: 5, name: "AA Film and Video Production",
        description: "In this degree students will be exposed to several elements of filmmaking such as video producing, editing, scriptwriting, and film and television studies. The Associate in Arts degree is the first two years of the BA in Film and Video Production. It prepares students for entry level positions in the film industry or enables them to be independent earners.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "3 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Associate Degree"
    },
    { id: 6, name: "Certificate in Journalism",
        description: "This certificate programme is specifically focused on developing basic reporting skills.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "1 Year (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Certificate"
    },
    { id: 7, name: "Certificate in Film and Video Production",
        description: "In this introductory certificate students will be exposed to basic video producing, editing, scriptwriting, and film studies.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "1 Year (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Certificate"
    },
    { id: 8, name: "Diploma in Film and Video Production",
        description: "Students may opt to pursue the diploma comprising ten courses (30 credits). The diploma is specifically focused on building or enhancing the skills of students in film and video production.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "3 Semesters (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][3]],
        type: "Diploma"
    },
    { id: 9, name: "BSc Computer Information Systems",
        description: "The Bachelor of Science degree in Information Technology – Computer Information Systems is closely aligned to the Oracle Academy curriculum because the College is a member of the Oracle Academy. Oracle is the world leader in database technology and business intelligence, and is the second largest information technology company in the world. This programme is designed for individuals seeking a career in information technology, with an emphasis on software engineering, database programming, problem analysis and solution design. Students enrolled in this programme have access to Oracle’s advanced computer science courses, curriculum and teaching aids, which have all been designed to the highest international standards.  Students who are successful in this programme will have acquired the competencies to complete the Oracle Certified Associate OCA, and Oracle Certified Professional OCP examinations.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "4 Years (FT) 5-6 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][1], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][6]],
        type: "Bachelor Degree"
    },
    { id: 9, name: "BSc Information and Library Science",
        description: "Graduates of this programme qualify for employment in a variety of professional positions in schools, public, academic and special libraries or in any other organization engaged in library-related and information management activities. The course content covers areas such as management of libraries and information centres, library organisation, library reference services, technical services in libraries, media management, library standards and practices.",
        entry_req: "An Associate Degree in Information and Library Studies with a GPA of 2.50",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][1], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][6]],
        type: "Bachelor Degree"
    },
    { id: 9, name: "BSc Information Technology",
        description: "This general IT degree provides students with a well-rounded knowledge of the fundamental skills necessary to develop and maintain the changes required in the dynamic and challenging information technology field.  The graduate will have the advantage of being able to work in diverse environments throughout the information technology industry. The practical knowledge gained from the programme provides a foundation of information technology skill-sets that can be used in the fields of IT Project Manager, IT Teacher, Java Developer, Business Analyst, Database Administrator, Software Implementation Analyst, Applications Architect, Windows Administrator, Enterprise Architect  or any number of fields within the industry.",
        entry_req: "An Associate Degree in Information Technology with a GPA of 2.25",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][7]],
        type: "Bachelor Degree"
    },
    { id: 9, name: "BSc Internet Technology",
        description: "Graduates of this programme qualify for employment in a variety of professional positions in schools, public, academic and special libraries or in any other organization engaged in library-related and information management activities. The course content covers areas such as management of libraries and information centres, library organisation, library reference services, technical services in libraries, media management, library standards and practices.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "4 Years (FT) 5-6 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][1], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][6]],
        type: "Bachelor Degree"
    },
    {
        id: 9, name: "BSc Networking",
        description: "This programme is designed for individuals seeking a career in information technology, with an emphasis on networking. Students acquire sound foundational skills in key areas such as network administration, network security, network architecture and wireless communication.  Students receive hands-on training in network systems commonly found in business environments; discover how information systems support organizational success; and how the technologies that comprise the network infrastructure allow for successful transfer and use of mission critical business information. In addition, students install, configure, secure, administer, and troubleshoot network systems; address the management of users, shared resources, and various other network components such as routers and switches in LANs, WANs,  wireless and mobile network environments. Students who are successful in this programme will have acquired the competencies to complete the Cisco Certified Network Associate (CCNA) and Certified Information Systems Security Professional (CISSP) professional examinations.",
        entry_req: "Five (5) CSEC (CXC)/GCE O’Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A,B,C. \n *Grade 3 accepted if attained in June 1998 or beyond\nApplicants who possess CAPE or A’Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme).",
        duration: "4 Years (FT) 5-6 Years (PT)",
        campuses: [_data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][0], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][1], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][2], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][4], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][5], _data_campuses__WEBPACK_IMPORTED_MODULE_0__["CAMPUSES"][6]],
        type: "Bachelor Degree"
    }
];


/***/ }),

/***/ "GvNj":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_programmes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/programmes */ "CIGC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PopupComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programme_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", programme_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](programme_r1.name);
} }
class PopupComponent {
    constructor() {
        this.programmes = _data_programmes__WEBPACK_IMPORTED_MODULE_1__["PROGRAMMES"];
    }
    ngOnInit() {
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 46, vars: 1, consts: [["id", "popup", 1, "popup"], [1, "popup__content-box"], ["href", "", 1, "popup__close"], [1, "popup__content"], ["action", "#", 1, "form"], [1, "u-margin-medium"], [1, "heading-secondary"], [1, "form__group"], ["type", "text", "placeholder", "Full Name", "id", "name", "required", "", 1, "form__input"], ["for", "name", 1, "form__label"], [1, "form__group", "grid", "grid--halves"], ["type", "email", "placeholder", "Email", "id", "email", "required", "", 1, "form__input"], ["for", "email", 1, "form__label"], ["type", "text", "placeholder", "Phone", "id", "phone", "required", "", 1, "form__input"], ["for", "phone", 1, "form__label"], ["name", "", "id", "", 1, "form__input"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form__radio-group"], ["type", "radio", "id", "small", "name", "size", "required", "", 1, "form__radio-input"], ["for", "small", 1, "form__radio-label"], [1, "form__radio-button"], [1, "form__radio-group", "u-margin-bottom-meduim"], ["type", "radio", "id", "large", "name", "size", "required", "", 1, "form__radio-input"], ["for", "large", 1, "form__radio-label"], ["type", "text", "placeholder", "Full Name", "id", "message", "required", "", 1, "form__input"], ["for", "message", 1, "form__label"], [1, "form_group"], [1, "btn", "btn--green"], [3, "value"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start booking Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PopupComponent_option_24_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Programme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Full Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Part Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Next step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programmes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KpKT":
/*!************************************************************!*\
  !*** ./src/app/programme-list/programme-list.component.ts ***!
  \************************************************************/
/*! exports provided: ProgrammeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgrammeListComponent", function() { return ProgrammeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_programmes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/programmes */ "CIGC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");






function ProgrammeListComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programme_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#programme-", i_r3, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", programme_r2.name, " ");
} }
function ProgrammeListComponent_div_17_div_15_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campus_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", campus_r9.name, "");
} }
function ProgrammeListComponent_div_17_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Campus(es)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProgrammeListComponent_div_17_div_15_span_5_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programme_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", programme_r4.campuses);
} }
function ProgrammeListComponent_div_17_div_17_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r12.title, "");
} }
function ProgrammeListComponent_div_17_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Course(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProgrammeListComponent_div_17_div_17_span_6_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programme_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", programme_r4.major_courses);
} }
function ProgrammeListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Entry Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProgrammeListComponent_div_17_div_15_Template, 6, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProgrammeListComponent_div_17_div_17_Template, 7, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const programme_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "programme-", i_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", programme_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", programme_r4.type, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](programme_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](programme_r4.entry_req);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", programme_r4.campuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", programme_r4.major_courses);
} }
class ProgrammeListComponent {
    constructor() {
        this.programmes = _data_programmes__WEBPACK_IMPORTED_MODULE_1__["PROGRAMMES"];
    }
    ngOnInit() {
    }
}
ProgrammeListComponent.ɵfac = function ProgrammeListComponent_Factory(t) { return new (t || ProgrammeListComponent)(); };
ProgrammeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgrammeListComponent, selectors: [["app-programme-list"]], decls: 19, vars: 9, consts: [[1, "section", "section--programme-list"], [1, "section__inner"], [1, "programme-list__content"], [1, "heading-primary"], ["action", ""], [1, "form__group"], ["type", "text", "name", "search", "id", "search", "placeholder", "Search", 1, "form__input", "form__input--shadow", 3, "ngModel", "ngModelChange"], ["for", "search", 1, "form__label"], [1, "grid", "grid--thirds", "grid--collapse"], [1, "scrollable"], [1, "list", "list--programme"], ["class", "list__item", 3, "href", 4, "ngFor", "ngForOf"], [1, "grid__item--2-of-3"], ["class", "programme scrollable", 3, "id", 4, "ngFor", "ngForOf"], [1, "list__item", 3, "href"], [1, "programme", "scrollable", 3, "id"], [1, "programme__content"], [1, "heading-primary", "heading-primary--sub"], [1, "subheader"], [1, "programme__text"], [1, "heading-secondary"], [4, "ngIf"], [1, "fas", "fa-map-marked"], ["class", "text-bubble", 4, "ngFor", "ngForOf"], [1, "text-bubble"], [1, "fas", "fa-book"], ["class", "text-bubble text-bubble--primary", 4, "ngFor", "ngForOf"], [1, "text-bubble", "text-bubble--primary"]], template: function ProgrammeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Programmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProgrammeListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProgrammeListComponent_a_14_Template, 3, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProgrammeListComponent_div_17_Template, 18, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 3, ctx.programmes, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 6, ctx.programmes, ctx.searchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtbWUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgrammeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-programme-list',
                templateUrl: './programme-list.component.html',
                styleUrls: ['./programme-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SDsJ":
/*!*********************************!*\
  !*** ./src/app/data/courses.ts ***!
  \*********************************/
/*! exports provided: COURSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSES", function() { return COURSES; });
const COURSES = [
    { id: 1, title: "Introduction to Film", code: "FILM 121", credits: 3 },
    { id: 2, title: "Script Writing I", code: "FILM 150", credits: 3 },
    { id: 3, title: "Critical Analysis of Film and Video", code: "FILM 161", credits: 3 },
    { id: 4, title: "Script Writing II", code: "FILM 251", credits: 3 },
    { id: 5, title: "Single Camera Production", code: "FILM 261", credits: 3 },
    { id: 6, title: "Audio Production for Video and Film", code: "FILM 262", credits: 3 },
    { id: 7, title: "Video and Film Editing I", code: "FILM 271", credits: 3 },
    { id: 8, title: "Introduction to Video Production", code: "FILM 290", credits: 3 },
    { id: 9, title: "Directing for Camera", code: "FILM 330", credits: 3 },
    { id: 10, title: "Lighting Design for Film and Video", code: "FILM 331", credits: 3 },
    { id: 11, title: "Video Aesthetics", code: "FILM 340", credits: 3 },
    { id: 12, title: "Video and Film Genres", code: "FILM 341", credits: 3 },
    { id: 13, title: "Television Studio Production", code: "FILM 362", credits: 3 },
    { id: 14, title: "Documentary Production", code: "FILM 363", credits: 3 },
    { id: 15, title: "Advanced Editing Animation 	", code: "FILM 374", credits: 3 },
    { id: 16, title: "Advanced Single Camera Production", code: "FILM 375", credits: 3 },
    { id: 17, title: "Business of Film and Video", code: "FILM 432", credits: 3 },
    { id: 18, title: "Caribbean Cinema", code: "FILM 443", credits: 3 },
    { id: 19, title: "Internship OR", code: "FILM 444", credits: 4 },
    { id: 20, title: "Practicum", code: "FILM 455", credits: 3 },
    { id: 21, title: "Senior Thesis Project I", code: "FILM 498", credits: 3 },
    { id: 22, title: "Senior Thesis Project II", code: "FILM 499", credits: 3 },
    { id: 23, title: "Broadcast News Writing", code: "JOUR 281", credits: 3 },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _campus_list_campus_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campus-list/campus-list.component */ "2XBo");
/* harmony import */ var _contact_admissions_contact_admissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-admissions/contact-admissions.component */ "dvhi");
/* harmony import */ var _programme_list_programme_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programme-list/programme-list.component */ "KpKT");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popup/popup.component */ "GvNj");
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-nav/mobile-nav.component */ "r3bG");










class AppComponent {
    constructor() {
        this.title = 'costaatt-web-design';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-campus-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-admissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-programme-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-popup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-mobile-nav");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _campus_list_campus_list_component__WEBPACK_IMPORTED_MODULE_3__["CampusListComponent"], _contact_admissions_contact_admissions_component__WEBPACK_IMPORTED_MODULE_4__["ContactAdmissionsComponent"], _programme_list_programme_list_component__WEBPACK_IMPORTED_MODULE_5__["ProgrammeListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"], _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_8__["MobileNavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XWKS":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 6, vars: 0, consts: [[1, "hero"], [1, "hero__content"], [1, "hero__heading"], [1, "hero__text"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "College of Science, Technology and Applied Arts of Trinidad and Tobago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Changing the nation one life at a time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _campus_list_campus_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campus-list/campus-list.component */ "2XBo");
/* harmony import */ var _contact_admissions_contact_admissions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-admissions/contact-admissions.component */ "dvhi");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup/popup.component */ "GvNj");
/* harmony import */ var _courses_list_courses_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses-list/courses-list.component */ "eYGN");
/* harmony import */ var _programme_list_programme_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./programme-list/programme-list.component */ "KpKT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mobile-nav/mobile-nav.component */ "r3bG");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
        _campus_list_campus_list_component__WEBPACK_IMPORTED_MODULE_5__["CampusListComponent"],
        _contact_admissions_contact_admissions_component__WEBPACK_IMPORTED_MODULE_6__["ContactAdmissionsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_8__["PopupComponent"],
        _courses_list_courses_list_component__WEBPACK_IMPORTED_MODULE_9__["CoursesListComponent"],
        _programme_list_programme_list_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammeListComponent"],
        _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_13__["MobileNavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
                    _campus_list_campus_list_component__WEBPACK_IMPORTED_MODULE_5__["CampusListComponent"],
                    _contact_admissions_contact_admissions_component__WEBPACK_IMPORTED_MODULE_6__["ContactAdmissionsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _popup_popup_component__WEBPACK_IMPORTED_MODULE_8__["PopupComponent"],
                    _courses_list_courses_list_component__WEBPACK_IMPORTED_MODULE_9__["CoursesListComponent"],
                    _programme_list_programme_list_component__WEBPACK_IMPORTED_MODULE_10__["ProgrammeListComponent"],
                    _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_13__["MobileNavComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dvhi":
/*!********************************************************************!*\
  !*** ./src/app/contact-admissions/contact-admissions.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactAdmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAdmissionsComponent", function() { return ContactAdmissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_programmes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/programmes */ "CIGC");



class ContactAdmissionsComponent {
    constructor() {
        this.programmes = _data_programmes__WEBPACK_IMPORTED_MODULE_1__["PROGRAMMES"];
    }
    ngOnInit() {
    }
}
ContactAdmissionsComponent.ɵfac = function ContactAdmissionsComponent_Factory(t) { return new (t || ContactAdmissionsComponent)(); };
ContactAdmissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactAdmissionsComponent, selectors: [["app-contact-admissions"]], decls: 10, vars: 0, consts: [[1, "section-contact-admissions"], [1, "row"], [1, "contact-admissions"], [1, "contact-admissions__content"], [1, "heading-primary"], ["href", "#popup", 1, "btn", "btn--primary"]], template: function ContactAdmissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Our Admission Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, blanditiis fuga? Numquam, possimus quam libero ipsa sequi nam, rem odit eaque perferendis soluta ex ratione deserunt rerum perspiciatis fugit eius!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWFkbWlzc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactAdmissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-admissions',
                templateUrl: './contact-admissions.component.html',
                styleUrls: ['./contact-admissions.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eYGN":
/*!********************************************************!*\
  !*** ./src/app/courses-list/courses-list.component.ts ***!
  \********************************************************/
/*! exports provided: CoursesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesListComponent", function() { return CoursesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CoursesListComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoursesListComponent.ɵfac = function CoursesListComponent_Factory(t) { return new (t || CoursesListComponent)(); };
CoursesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesListComponent, selectors: [["app-courses-list"]], decls: 2, vars: 0, template: function CoursesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "courses-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Vyc2VzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courses-list',
                templateUrl: './courses-list.component.html',
                styleUrls: ['./courses-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 70, vars: 0, consts: [[1, "header"], [1, "header__top-bar", "grid", "grid--halves"], ["src", "/assets/img/weblogo-300-01.jpg", "alt", "", 1, "header__logo"], [1, "header__top-right"], [1, "header__top-nav"], [1, "nav__list"], [1, "nav__item"], ["href", "#!"], [1, "nav--main", "nav"], [1, "nav", "nav--mobile"], ["id", "nav__toggle", "href", "#!"], [1, "nav__list", "nav__grid"], [1, "nav__dropdown"], [1, "nav__dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "College Leadership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instituitional Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Admissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Academics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Student Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Apply Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Graphic Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], [1, "grid", "grid--halves"], [1, "col-1-of-2"], [1, "footer__content"], [1, "footer__logo-box"], ["src", "assets/img/white-small.png", "alt", "Full logo", 1, "footer__logo"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "r3bG":
/*!****************************************************!*\
  !*** ./src/app/mobile-nav/mobile-nav.component.ts ***!
  \****************************************************/
/*! exports provided: MobileNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavComponent", function() { return MobileNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MobileNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
MobileNavComponent.ɵfac = function MobileNavComponent_Factory(t) { return new (t || MobileNavComponent)(); };
MobileNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileNavComponent, selectors: [["app-mobile-nav"]], decls: 63, vars: 0, consts: [["id", "mobile-nav", 1, "popup"], [1, "popup__content-box"], ["href", "", 1, "popup__close"], [1, "popup__content"], [1, "nav--main", "nav"], [1, "nav", "nav--mobile"], ["id", "nav__toggle", "href", "#!"], [1, "nav__list", "nav__grid", "grid--collapse"], [1, "nav__item"], ["href", "#!"], [1, "nav__dropdown"], [1, "nav__dropdown-item"]], template: function MobileNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "College Leadership");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Instituitional Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Admissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Academics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Student Life");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Apply Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Graphic Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2JpbGUtbmF2LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-nav',
                templateUrl: './mobile-nav.component.html',
                styleUrls: ['./mobile-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map