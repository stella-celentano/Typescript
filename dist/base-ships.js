"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor); //precisa usar o this por estar utilizando um membro da instancia dentro da classe
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
