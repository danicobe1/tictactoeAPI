/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dani.ts":
/*!*********************!*\
  !*** ./src/dani.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nexports.Game = exports.Tablero = exports.Player = exports.Person = void 0;\r\nvar Person = /** @class */ (function () {\r\n    function Person() {\r\n    }\r\n    Person.prototype.goodMorning = function () {\r\n        console.log('Buenos dias');\r\n    };\r\n    return Person;\r\n}());\r\nexports.Person = Person;\r\nvar Player = /** @class */ (function (_super) {\r\n    __extends(Player, _super);\r\n    function Player(name, nickname, player) {\r\n        var _this = _super.call(this) || this;\r\n        _this.name = name;\r\n        _this.nickname = nickname;\r\n        _this.player = player;\r\n        return _this;\r\n    }\r\n    Player.prototype.setNames = function (name, nickname) {\r\n        this.name = name;\r\n        this.nickname = nickname;\r\n    };\r\n    Player.prototype.presentation = function () {\r\n        return (\"I'm \" + this.nickname + \"(\" + this.name + \") I'm the player number \" + this.player);\r\n    };\r\n    return Player;\r\n}(Person));\r\nexports.Player = Player;\r\nvar Tablero = /** @class */ (function () {\r\n    function Tablero() {\r\n        this.table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];\r\n    }\r\n    Tablero.prototype.canPlay = function (x, y) {\r\n        return this.table[x][y] == 0;\r\n    };\r\n    Tablero.prototype.play = function (x, y, player) {\r\n        if (this.table[x][y] == 0) {\r\n            this.table[x][y] = player;\r\n            return this.view();\r\n        }\r\n        return this.view();\r\n    };\r\n    Tablero.prototype.checkVictory = function () {\r\n        //rows\r\n        console.log(\"check!!!\");\r\n        if (this.table[0][0] != 0 && this.table[0][0] == this.table[0][1] && this.table[0][1] == this.table[0][2])\r\n            return this.table[0][0];\r\n        if (this.table[1][0] != 0 && this.table[1][0] == this.table[1][1] && this.table[1][1] == this.table[1][2])\r\n            return this.table[1][0];\r\n        if (this.table[2][0] != 0 && this.table[2][0] == this.table[2][1] && this.table[2][1] == this.table[2][2])\r\n            return this.table[2][0];\r\n        //colums\r\n        if (this.table[0][0] != 0 && this.table[0][0] == this.table[1][0] && this.table[1][0] == this.table[2][0])\r\n            return this.table[0][0];\r\n        if (this.table[0][1] != 0 && this.table[0][1] == this.table[1][1] && this.table[1][1] == this.table[1][2])\r\n            return this.table[1][0];\r\n        if (this.table[0][2] != 0 && this.table[0][2] == this.table[1][2] && this.table[1][2] == this.table[2][2])\r\n            return this.table[2][0];\r\n        //diagonals\r\n        if (this.table[0][0] != 0 && this.table[0][0] == this.table[1][1] && this.table[1][1] == this.table[2][2])\r\n            return this.table[0][0];\r\n        if (this.table[2][0] != 0 && this.table[2][0] == this.table[1][1] && this.table[1][1] == this.table[0][2])\r\n            return this.table[0][2];\r\n        return null;\r\n    };\r\n    Tablero.prototype.view = function () {\r\n        return \"==========<br>\\n        = \" + this.table[0][0] + \" = \" + this.table[0][1] + \" = \" + this.table[0][2] + \" =<br>\\n        ==========<br>\\n        = \" + this.table[1][0] + \" = \" + this.table[1][1] + \" = \" + this.table[1][2] + \" =<br>\\n        ==========<br>\\n        = \" + this.table[2][0] + \" = \" + this.table[2][1] + \" = \" + this.table[2][2] + \" =<br>\\n        ==========<br> \";\r\n    };\r\n    return Tablero;\r\n}());\r\nexports.Tablero = Tablero;\r\nvar Game = /** @class */ (function () {\r\n    function Game(table, player1, player2) {\r\n        this.table = table;\r\n        this.player1 = player1;\r\n        this.player2 = player2;\r\n        this.turn = 1;\r\n    }\r\n    Game.prototype.play = function (x, y, player) {\r\n        this.player1.presentation();\r\n        this.table.play(x, y, player);\r\n    };\r\n    Game.prototype.isTurnOfPlayer = function (player) {\r\n        return player == this.turn;\r\n    };\r\n    Game.prototype.getTurn = function () {\r\n        return this.turn;\r\n    };\r\n    Game.prototype.setTurn = function (turn) {\r\n        return this.turn = turn;\r\n    };\r\n    return Game;\r\n}());\r\nexports.Game = Game;\r\n\n\n//# sourceURL=webpack://express5/./src/dani.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\r\nexports.__esModule = true;\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\r\nvar dani_1 = __webpack_require__(/*! ./dani */ \"./src/dani.ts\");\r\nvar app = express();\r\n// const que = new queries();\r\napp.use(bodyParser.json());\r\napp.use(bodyParser.urlencoded({\r\n    extended: true,\r\n}));\r\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\r\napp.get('/', function (req, res) {\r\n    res.send(\"Welcome to my TicTacToe API,<br> \\n  You can change the name and the nick name of the player 1 [daniel] [danicobe] are set by default, <br>\\n  http://localhost:3000/player/1/name/[Player1_Name]/nickname/[Player1_Nickname], <br>\\n  You can change the name and the nick name of the player 2 [Alejandro] [Alejo] are set by default <br> \\n  http://localhost:3000/player/2/name/[Player2_name]/nickname/[Player2_Nickname] <br>\\n  If tou want some info about player 1 try this<br> \\n  http://localhost:3000/player/1/info <br>\\n  If tou want some info about player 2 try this<br> \\n  http://localhost:3000/player/2/info <br><br>\\n  Remember the first to play is player 1, to fill a cell in TicTacToe API  just use this<br>\\n  http://localhost:3000/player/[player_turn]/setX/[axis_x]/setY/[axis_y] <br>\\n  \");\r\n});\r\nvar mygame = new dani_1.Game(new dani_1.Tablero, new dani_1.Player('Daniel', 'Danicobe', 1), new dani_1.Player('Alejandro', 'Alejo', 2));\r\napp.get('/player/1/info', function (req, res) {\r\n    res.send({ info: mygame.player1.presentation() });\r\n});\r\napp.get('/player/1/name/:name/nickname/:nickName', function (req, res) {\r\n    mygame.player1.setNames(req.params.name, req.params.nickName);\r\n    res.send({ status: 'changed', info: mygame.player1.presentation() });\r\n});\r\napp.get('/player/2/info', function (req, res) {\r\n    res.send({ info: mygame.player2.presentation() });\r\n});\r\napp.get('/player/2/name/:name/nickname/:nickName', function (req, res) {\r\n    mygame.player2.setNames(req.params.name, req.params.nickName);\r\n    res.send({ status: 'changed', info: mygame.player1.presentation() });\r\n});\r\napp.get('/player/:id/setX/:x/setY/:y', function (req, res) {\r\n    if (mygame.isTurnOfPlayer(parseInt(req.params.id))) {\r\n        if (mygame.table.canPlay(parseInt(req.params.x), parseInt(req.params.y))) {\r\n            mygame.table.play(parseInt(req.params.x), parseInt(req.params.y), parseInt(req.params.id));\r\n            if (mygame.table.checkVictory()) {\r\n                res.send(\"The player number \" + mygame.table.checkVictory() + \" has won tic tac toe <br> \" + mygame.table.view());\r\n            }\r\n            else {\r\n                mygame.setTurn(parseInt(req.params.id) == 1 ? 2 : 1);\r\n                res.send(mygame.table.view() + \"   <br> It is turn of player   \" + mygame.getTurn() + \" <br> http://localhost:3000/player/\" + mygame.getTurn() + \"/setX/[axis_x]/setY/[axis_y]\");\r\n            }\r\n        }\r\n        else {\r\n            res.send(mygame.table.view() + \"  <br> The cell [\" + req.params.x + \"] [\" + req.params.y + \"] is filled, choose other cell <br> http://localhost:3000/player/\" + mygame.getTurn() + \"/setX/[axis_x]/setY/[axis_y]\");\r\n        }\r\n    }\r\n    else {\r\n        res.send(mygame.table.view() + \"   <br> It is turn of player   \" + mygame.getTurn() + \"   !!!!!!!!!!!!!!!!!! <br> http://localhost:3000/player/\" + mygame.getTurn() + \"/setX/[axis_x]/setY/[axis_y]\");\r\n    }\r\n});\r\nif (__webpack_require__.c[__webpack_require__.s] === module) {\r\n    app.listen(PORT, function () {\r\n        console.log('Your table is ready http://localhost:' + PORT);\r\n    });\r\n}\r\nexports.default = app;\r\n\n\n//# sourceURL=webpack://express5/./src/index.ts?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ 	
/******/ })()
;