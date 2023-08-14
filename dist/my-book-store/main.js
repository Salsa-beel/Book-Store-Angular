"use strict";
(self["webpackChunkMyBookStore"] = self["webpackChunkMyBookStore"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;



const routes = [];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var _assets_books_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _assets_books_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/books.json */ 1139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/header/header.component */ 6290);
var _class;



class AppComponent {
  constructor() {
    this.title = 'MyBookStore';
    this.data = /*#__PURE__*/ (_assets_books_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_assets_books_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_assets_books_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
  }
  ngOnInit() {
    console.log('Data', this.data);
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
    }
  },
  dependencies: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;





class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule // lazm hena a3mel import 3ashan ashofha fel app module
  ]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule // lazm hena a3mel import 3ashan ashofha fel app module
    ]
  });
})();

/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;

class HeaderComponent {}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-header"]],
  decls: 2,
  vars: 0,
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;



class SharedModule {}
_class = SharedModule;
_class.ɵfac = function SharedModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent // lazm a3mel exprot 3ashan ashof el component da bara el module.
    ]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 1139:
/*!*******************************!*\
  !*** ./src/assets/books.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"author":"Chinua Achebe","country":"Nigeria","imageLink":"images/things-fall-apart.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Things_Fall_Apart\\n","pages":209,"title":"Things Fall Apart","year":1958},{"author":"Hans Christian Andersen","country":"Denmark","imageLink":"images/fairy-tales.jpg","language":"Danish","link":"https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\\n","pages":784,"title":"Fairy tales","year":1836},{"author":"Dante Alighieri","country":"Italy","imageLink":"images/the-divine-comedy.jpg","language":"Italian","link":"https://en.wikipedia.org/wiki/Divine_Comedy\\n","pages":928,"title":"The Divine Comedy","year":1315},{"author":"Unknown","country":"Sumer and Akkadian Empire","imageLink":"images/the-epic-of-gilgamesh.jpg","language":"Akkadian","link":"https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\\n","pages":160,"title":"The Epic Of Gilgamesh","year":-1700},{"author":"Unknown","country":"Achaemenid Empire","imageLink":"images/the-book-of-job.jpg","language":"Hebrew","link":"https://en.wikipedia.org/wiki/Book_of_Job\\n","pages":176,"title":"The Book Of Job","year":-600},{"author":"Unknown","country":"India/Iran/Iraq/Egypt/Tajikistan","imageLink":"images/one-thousand-and-one-nights.jpg","language":"Arabic","link":"https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\\n","pages":288,"title":"One Thousand and One Nights","year":1200},{"author":"Unknown","country":"Iceland","imageLink":"images/njals-saga.jpg","language":"Old Norse","link":"https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\\n","pages":384,"title":"Njál\'s Saga","year":1350},{"author":"Jane Austen","country":"United Kingdom","imageLink":"images/pride-and-prejudice.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Pride_and_Prejudice\\n","pages":226,"title":"Pride and Prejudice","year":1813},{"author":"Honoré de Balzac","country":"France","imageLink":"images/le-pere-goriot.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\\n","pages":443,"title":"Le Père Goriot","year":1835},{"author":"Samuel Beckett","country":"Republic of Ireland","imageLink":"images/molloy-malone-dies-the-unnamable.jpg","language":"French, English","link":"https://en.wikipedia.org/wiki/Molloy_(novel)\\n","pages":256,"title":"Molloy, Malone Dies, The Unnamable, the trilogy","year":1952},{"author":"Giovanni Boccaccio","country":"Italy","imageLink":"images/the-decameron.jpg","language":"Italian","link":"https://en.wikipedia.org/wiki/The_Decameron\\n","pages":1024,"title":"The Decameron","year":1351},{"author":"Jorge Luis Borges","country":"Argentina","imageLink":"images/ficciones.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/Ficciones\\n","pages":224,"title":"Ficciones","year":1965},{"author":"Emily Brontë","country":"United Kingdom","imageLink":"images/wuthering-heights.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Wuthering_Heights\\n","pages":342,"title":"Wuthering Heights","year":1847},{"author":"Albert Camus","country":"Algeria, French Empire","imageLink":"images/l-etranger.jpg","language":"French","link":"https://en.wikipedia.org/wiki/The_Stranger_(novel)\\n","pages":185,"title":"The Stranger","year":1942},{"author":"Paul Celan","country":"Romania, France","imageLink":"images/poems-paul-celan.jpg","language":"German","link":"\\n","pages":320,"title":"Poems","year":1952},{"author":"Louis-Ferdinand Céline","country":"France","imageLink":"images/voyage-au-bout-de-la-nuit.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\\n","pages":505,"title":"Journey to the End of the Night","year":1932},{"author":"Miguel de Cervantes","country":"Spain","imageLink":"images/don-quijote-de-la-mancha.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/Don_Quixote\\n","pages":1056,"title":"Don Quijote De La Mancha","year":1610},{"author":"Geoffrey Chaucer","country":"England","imageLink":"images/the-canterbury-tales.jpg","language":"English","link":"https://en.wikipedia.org/wiki/The_Canterbury_Tales\\n","pages":544,"title":"The Canterbury Tales","year":1450},{"author":"Anton Chekhov","country":"Russia","imageLink":"images/stories-of-anton-chekhov.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\\n","pages":194,"title":"Stories","year":1886},{"author":"Joseph Conrad","country":"United Kingdom","imageLink":"images/nostromo.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Nostromo\\n","pages":320,"title":"Nostromo","year":1904},{"author":"Charles Dickens","country":"United Kingdom","imageLink":"images/great-expectations.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Great_Expectations\\n","pages":194,"title":"Great Expectations","year":1861},{"author":"Denis Diderot","country":"France","imageLink":"images/jacques-the-fatalist.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Jacques_the_Fatalist\\n","pages":596,"title":"Jacques the Fatalist","year":1796},{"author":"Alfred Döblin","country":"Germany","imageLink":"images/berlin-alexanderplatz.jpg","language":"German","link":"https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\\n","pages":600,"title":"Berlin Alexanderplatz","year":1929},{"author":"Fyodor Dostoevsky","country":"Russia","imageLink":"images/crime-and-punishment.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/Crime_and_Punishment\\n","pages":551,"title":"Crime and Punishment","year":1866},{"author":"Fyodor Dostoevsky","country":"Russia","imageLink":"images/the-idiot.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/The_Idiot\\n","pages":656,"title":"The Idiot","year":1869},{"author":"Fyodor Dostoevsky","country":"Russia","imageLink":"images/the-possessed.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\\n","pages":768,"title":"The Possessed","year":1872},{"author":"Fyodor Dostoevsky","country":"Russia","imageLink":"images/the-brothers-karamazov.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/The_Brothers_Karamazov\\n","pages":824,"title":"The Brothers Karamazov","year":1880},{"author":"George Eliot","country":"United Kingdom","imageLink":"images/middlemarch.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Middlemarch\\n","pages":800,"title":"Middlemarch","year":1871},{"author":"Ralph Ellison","country":"United States","imageLink":"images/invisible-man.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Invisible_Man\\n","pages":581,"title":"Invisible Man","year":1952},{"author":"Euripides","country":"Greece","imageLink":"images/medea.jpg","language":"Greek","link":"https://en.wikipedia.org/wiki/Medea_(play)\\n","pages":104,"title":"Medea","year":-431},{"author":"William Faulkner","country":"United States","imageLink":"images/absalom-absalom.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Absalom,_Absalom!\\n","pages":313,"title":"Absalom, Absalom!","year":1936},{"author":"William Faulkner","country":"United States","imageLink":"images/the-sound-and-the-fury.jpg","language":"English","link":"https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\\n","pages":326,"title":"The Sound and the Fury","year":1929},{"author":"Gustave Flaubert","country":"France","imageLink":"images/madame-bovary.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Madame_Bovary\\n","pages":528,"title":"Madame Bovary","year":1857},{"author":"Gustave Flaubert","country":"France","imageLink":"images/l-education-sentimentale.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Sentimental_Education\\n","pages":606,"title":"Sentimental Education","year":1869},{"author":"Federico García Lorca","country":"Spain","imageLink":"images/gypsy-ballads.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/Gypsy_Ballads\\n","pages":218,"title":"Gypsy Ballads","year":1928},{"author":"Gabriel García Márquez","country":"Colombia","imageLink":"images/one-hundred-years-of-solitude.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\\n","pages":417,"title":"One Hundred Years of Solitude","year":1967},{"author":"Gabriel García Márquez","country":"Colombia","imageLink":"images/love-in-the-time-of-cholera.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\\n","pages":368,"title":"Love in the Time of Cholera","year":1985},{"author":"Johann Wolfgang von Goethe","country":"Saxe-Weimar","imageLink":"images/faust.jpg","language":"German","link":"https://en.wikipedia.org/wiki/Goethe%27s_Faust\\n","pages":158,"title":"Faust","year":1832},{"author":"Nikolai Gogol","country":"Russia","imageLink":"images/dead-souls.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/Dead_Souls\\n","pages":432,"title":"Dead Souls","year":1842},{"author":"Günter Grass","country":"Germany","imageLink":"images/the-tin-drum.jpg","language":"German","link":"https://en.wikipedia.org/wiki/The_Tin_Drum\\n","pages":600,"title":"The Tin Drum","year":1959},{"author":"João Guimarães Rosa","country":"Brazil","imageLink":"images/the-devil-to-pay-in-the-backlands.jpg","language":"Portuguese","link":"https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\\n","pages":494,"title":"The Devil to Pay in the Backlands","year":1956},{"author":"Knut Hamsun","country":"Norway","imageLink":"images/hunger.jpg","language":"Norwegian","link":"https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\\n","pages":176,"title":"Hunger","year":1890},{"author":"Ernest Hemingway","country":"United States","imageLink":"images/the-old-man-and-the-sea.jpg","language":"English","link":"https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\\n","pages":128,"title":"The Old Man and the Sea","year":1952},{"author":"Homer","country":"Greece","imageLink":"images/the-iliad-of-homer.jpg","language":"Greek","link":"https://en.wikipedia.org/wiki/Iliad\\n","pages":608,"title":"Iliad","year":-735},{"author":"Homer","country":"Greece","imageLink":"images/the-odyssey-of-homer.jpg","language":"Greek","link":"https://en.wikipedia.org/wiki/Odyssey\\n","pages":374,"title":"Odyssey","year":-800},{"author":"Henrik Ibsen","country":"Norway","imageLink":"images/a-Dolls-house.jpg","language":"Norwegian","link":"https://en.wikipedia.org/wiki/A_Doll%27s_House\\n","pages":68,"title":"A Doll\'s House","year":1879},{"author":"James Joyce","country":"Irish Free State","imageLink":"images/ulysses.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Ulysses_(novel)\\n","pages":228,"title":"Ulysses","year":1922},{"author":"Franz Kafka","country":"Czechoslovakia","imageLink":"images/stories-of-franz-kafka.jpg","language":"German","link":"https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\\n","pages":488,"title":"Stories","year":1924},{"author":"Franz Kafka","country":"Czechoslovakia","imageLink":"images/the-trial.jpg","language":"German","link":"https://en.wikipedia.org/wiki/The_Trial\\n","pages":160,"title":"The Trial","year":1925},{"author":"Franz Kafka","country":"Czechoslovakia","imageLink":"images/the-castle.jpg","language":"German","link":"https://en.wikipedia.org/wiki/The_Castle_(novel)\\n","pages":352,"title":"The Castle","year":1926},{"author":"Kālidāsa","country":"India","imageLink":"images/the-recognition-of-shakuntala.jpg","language":"Sanskrit","link":"https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\\n","pages":147,"title":"The recognition of Shakuntala","year":150},{"author":"Yasunari Kawabata","country":"Japan","imageLink":"images/the-sound-of-the-mountain.jpg","language":"Japanese","link":"https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\\n","pages":288,"title":"The Sound of the Mountain","year":1954},{"author":"Nikos Kazantzakis","country":"Greece","imageLink":"images/zorba-the-greek.jpg","language":"Greek","link":"https://en.wikipedia.org/wiki/Zorba_the_Greek\\n","pages":368,"title":"Zorba the Greek","year":1946},{"author":"D. H. Lawrence","country":"United Kingdom","imageLink":"images/sons-and-lovers.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Sons_and_Lovers\\n","pages":432,"title":"Sons and Lovers","year":1913},{"author":"Halldór Laxness","country":"Iceland","imageLink":"images/independent-people.jpg","language":"Icelandic","link":"https://en.wikipedia.org/wiki/Independent_People\\n","pages":470,"title":"Independent People","year":1934},{"author":"Giacomo Leopardi","country":"Italy","imageLink":"images/poems-giacomo-leopardi.jpg","language":"Italian","link":"\\n","pages":184,"title":"Poems","year":1818},{"author":"Doris Lessing","country":"United Kingdom","imageLink":"images/the-golden-notebook.jpg","language":"English","link":"https://en.wikipedia.org/wiki/The_Golden_Notebook\\n","pages":688,"title":"The Golden Notebook","year":1962},{"author":"Astrid Lindgren","country":"Sweden","imageLink":"images/pippi-longstocking.jpg","language":"Swedish","link":"https://en.wikipedia.org/wiki/Pippi_Longstocking\\n","pages":160,"title":"Pippi Longstocking","year":1945},{"author":"Lu Xun","country":"China","imageLink":"images/diary-of-a-madman.jpg","language":"Chinese","link":"https://en.wikipedia.org/wiki/A_Madman%27s_Diary\\n","pages":389,"title":"Diary of a Madman","year":1918},{"author":"Naguib Mahfouz","country":"Egypt","imageLink":"images/children-of-gebelawi.jpg","language":"Arabic","link":"https://en.wikipedia.org/wiki/Children_of_Gebelawi\\n","pages":355,"title":"Children of Gebelawi","year":1959},{"author":"Thomas Mann","country":"Germany","imageLink":"images/buddenbrooks.jpg","language":"German","link":"https://en.wikipedia.org/wiki/Buddenbrooks\\n","pages":736,"title":"Buddenbrooks","year":1901},{"author":"Thomas Mann","country":"Germany","imageLink":"images/the-magic-mountain.jpg","language":"German","link":"https://en.wikipedia.org/wiki/The_Magic_Mountain\\n","pages":720,"title":"The Magic Mountain","year":1924},{"author":"Herman Melville","country":"United States","imageLink":"images/moby-dick.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Moby-Dick\\n","pages":378,"title":"Moby Dick","year":1851},{"author":"Michel de Montaigne","country":"France","imageLink":"images/essais.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Essays_(Montaigne)\\n","pages":404,"title":"Essays","year":1595},{"author":"Elsa Morante","country":"Italy","imageLink":"images/history.jpg","language":"Italian","link":"https://en.wikipedia.org/wiki/History_(novel)\\n","pages":600,"title":"History","year":1974},{"author":"Toni Morrison","country":"United States","imageLink":"images/beloved.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Beloved_(novel)\\n","pages":321,"title":"Beloved","year":1987},{"author":"Murasaki Shikibu","country":"Japan","imageLink":"images/the-tale-of-genji.jpg","language":"Japanese","link":"https://en.wikipedia.org/wiki/The_Tale_of_Genji\\n","pages":1360,"title":"The Tale of Genji","year":1006},{"author":"Robert Musil","country":"Austria","imageLink":"images/the-man-without-qualities.jpg","language":"German","link":"https://en.wikipedia.org/wiki/The_Man_Without_Qualities\\n","pages":365,"title":"The Man Without Qualities","year":1931},{"author":"Vladimir Nabokov","country":"Russia/United States","imageLink":"images/lolita.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Lolita\\n","pages":317,"title":"Lolita","year":1955},{"author":"George Orwell","country":"United Kingdom","imageLink":"images/nineteen-eighty-four.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\\n","pages":272,"title":"Nineteen Eighty-Four","year":1949},{"author":"Ovid","country":"Roman Empire","imageLink":"images/the-metamorphoses-of-ovid.jpg","language":"Classical Latin","link":"https://en.wikipedia.org/wiki/Metamorphoses\\n","pages":576,"title":"Metamorphoses","year":100},{"author":"Fernando Pessoa","country":"Portugal","imageLink":"images/the-book-of-disquiet.jpg","language":"Portuguese","link":"https://en.wikipedia.org/wiki/The_Book_of_Disquiet\\n","pages":272,"title":"The Book of Disquiet","year":1928},{"author":"Edgar Allan Poe","country":"United States","imageLink":"images/tales-and-poems-of-edgar-allan-poe.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\\n","pages":842,"title":"Tales","year":1950},{"author":"Marcel Proust","country":"France","imageLink":"images/a-la-recherche-du-temps-perdu.jpg","language":"French","link":"https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\\n","pages":2408,"title":"In Search of Lost Time","year":1920},{"author":"François Rabelais","country":"France","imageLink":"images/gargantua-and-pantagruel.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\\n","pages":623,"title":"Gargantua and Pantagruel","year":1533},{"author":"Juan Rulfo","country":"Mexico","imageLink":"images/pedro-paramo.jpg","language":"Spanish","link":"https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\\n","pages":124,"title":"Pedro Páramo","year":1955},{"author":"Rumi","country":"Sultanate of Rum","imageLink":"images/the-masnavi.jpg","language":"Persian","link":"https://en.wikipedia.org/wiki/Masnavi\\n","pages":438,"title":"The Masnavi","year":1236},{"author":"Salman Rushdie","country":"United Kingdom, India","imageLink":"images/midnights-children.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Midnight%27s_Children\\n","pages":536,"title":"Midnight\'s Children","year":1981},{"author":"Saadi","country":"Persia, Persian Empire","imageLink":"images/bostan.jpg","language":"Persian","link":"https://en.wikipedia.org/wiki/Bustan_(book)\\n","pages":298,"title":"Bostan","year":1257},{"author":"Tayeb Salih","country":"Sudan","imageLink":"images/season-of-migration-to-the-north.jpg","language":"Arabic","link":"https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\\n","pages":139,"title":"Season of Migration to the North","year":1966},{"author":"José Saramago","country":"Portugal","imageLink":"images/blindness.jpg","language":"Portuguese","link":"https://en.wikipedia.org/wiki/Blindness_(novel)\\n","pages":352,"title":"Blindness","year":1995},{"author":"William Shakespeare","country":"England","imageLink":"images/hamlet.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Hamlet\\n","pages":432,"title":"Hamlet","year":1603},{"author":"William Shakespeare","country":"England","imageLink":"images/king-lear.jpg","language":"English","link":"https://en.wikipedia.org/wiki/King_Lear\\n","pages":384,"title":"King Lear","year":1608},{"author":"William Shakespeare","country":"England","imageLink":"images/othello.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Othello\\n","pages":314,"title":"Othello","year":1609},{"author":"Sophocles","country":"Greece","imageLink":"images/oedipus-the-king.jpg","language":"Greek","link":"https://en.wikipedia.org/wiki/Oedipus_the_King\\n","pages":88,"title":"Oedipus the King","year":-430},{"author":"Stendhal","country":"France","imageLink":"images/le-rouge-et-le-noir.jpg","language":"French","link":"https://en.wikipedia.org/wiki/The_Red_and_the_Black\\n","pages":576,"title":"The Red and the Black","year":1830},{"author":"Laurence Sterne","country":"England","imageLink":"images/the-life-and-opinions-of-tristram-shandy.jpg","language":"English","link":"https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\\n","pages":640,"title":"The Life And Opinions of Tristram Shandy","year":1760},{"author":"Italo Svevo","country":"Italy","imageLink":"images/confessions-of-zeno.jpg","language":"Italian","link":"https://en.wikipedia.org/wiki/Zeno%27s_Conscience\\n","pages":412,"title":"Confessions of Zeno","year":1923},{"author":"Jonathan Swift","country":"Ireland","imageLink":"images/gullivers-travels.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Gulliver%27s_Travels\\n","pages":178,"title":"Gulliver\'s Travels","year":1726},{"author":"Leo Tolstoy","country":"Russia","imageLink":"images/war-and-peace.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/War_and_Peace\\n","pages":1296,"title":"War and Peace","year":1867},{"author":"Leo Tolstoy","country":"Russia","imageLink":"images/anna-karenina.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/Anna_Karenina\\n","pages":864,"title":"Anna Karenina","year":1877},{"author":"Leo Tolstoy","country":"Russia","imageLink":"images/the-death-of-ivan-ilyich.jpg","language":"Russian","link":"https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\\n","pages":92,"title":"The Death of Ivan Ilyich","year":1886},{"author":"Mark Twain","country":"United States","imageLink":"images/the-adventures-of-huckleberry-finn.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\\n","pages":224,"title":"The Adventures of Huckleberry Finn","year":1884},{"author":"Valmiki","country":"India","imageLink":"images/ramayana.jpg","language":"Sanskrit","link":"https://en.wikipedia.org/wiki/Ramayana\\n","pages":152,"title":"Ramayana","year":-450},{"author":"Virgil","country":"Roman Empire","imageLink":"images/the-aeneid.jpg","language":"Classical Latin","link":"https://en.wikipedia.org/wiki/Aeneid\\n","pages":442,"title":"The Aeneid","year":-23},{"author":"Vyasa","country":"India","imageLink":"images/the-mahab-harata.jpg","language":"Sanskrit","link":"https://en.wikipedia.org/wiki/Mahabharata\\n","pages":276,"title":"Mahabharata","year":-700},{"author":"Walt Whitman","country":"United States","imageLink":"images/leaves-of-grass.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Leaves_of_Grass\\n","pages":152,"title":"Leaves of Grass","year":1855},{"author":"Virginia Woolf","country":"United Kingdom","imageLink":"images/mrs-dalloway.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Mrs_Dalloway\\n","pages":216,"title":"Mrs Dalloway","year":1925},{"author":"Virginia Woolf","country":"United Kingdom","imageLink":"images/to-the-lighthouse.jpg","language":"English","link":"https://en.wikipedia.org/wiki/To_the_Lighthouse\\n","pages":209,"title":"To the Lighthouse","year":1927},{"author":"Marguerite Yourcenar","country":"France/Belgium","imageLink":"images/memoirs-of-hadrian.jpg","language":"French","link":"https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\\n","pages":408,"title":"Memoirs of Hadrian","year":1951}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map