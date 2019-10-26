"use strict";
exports.__esModule = true;
//PRIMEIRO EXEMPLO
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
//episode = '4' vai aparecer na tela que o proximo ep é o 41, pois ele executa mesmo sendo variáveis incompativeis
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
//let favoriteDroid declara a variavel como tipo ANY (aceita qualquer tipo de variável)
var favoriteDroid;
favoriteDroid = 'BB-8';
//favoriteDroid = 10
console.log("My favorite droid is " + favoriteDroid);
//USANDO FUNÇÕES
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//CLASSES E INTERFACES + ORGANIZANDO OS EXEMPLOS EM MÓDULOS
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
